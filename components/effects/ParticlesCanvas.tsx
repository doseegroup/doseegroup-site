'use client'

import { useEffect, useRef } from 'react'

/**
 * DoSeeGroup tuned particles:
 * - マウスは「逃げ」ではなく「流れ（風）」を作る（行動→影響）
 * - 画面は完全クリアしない（痕跡＝データが残る）
 * - 全体にわずかな「前進」ベクトル（積み重なり→前進）
 * - パフォーマンス配慮（DPR、粒子数、requestAnimationFrame cleanup）
 */
const ParticlesCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999 }) // 初期は画面外
  const rafRef = useRef<number | null>(null)
  const dprRef = useRef<number>(1)

  // ====== パラメータ（ここを触ると世界観が変わる） ======
  const CONFIG = {
    // 粒子
    baseCount: 80,          // 基本粒子数（画面サイズで自動調整）
    radiusMin: 0.8,
    radiusMax: 2.2,
    speedBase: 0.25,        // ふわっと感
    speedJitter: 0.35,
    drag: 0.985,            // 減衰（小さいほど止まりやすい）

    // “前進”の方向（Do it first）
    driftX: 0.015,
    driftY: 0.005,

    // マウスの“風”（行動→影響）
    mouseInfluenceRadius: 180,
    mouseForce: 0.11,       // 風の強さ（強すぎると落ち着かない）
    mouseSwirl: 0.55,       // 渦成分（0〜1）: 0=直線、1=渦っぽい
    mouseSmoothing: 0.18,   // マウス追従の滑らかさ

    // 線
    linkDist: 120,
    linkAlpha: 0.18,

    // 描画（痕跡）
    fadeAlpha: 0.09,        // 0=残り続ける, 1=毎フレーム消える（おすすめ 0.07〜0.14）
    // ✅ 白背景用：黒寄りに変更（白のままだと見えない）
    particleColor: 'rgba(0,0,0,0.45)',
    linkColorBase: 'rgba(0,0,0,',

    // 低電力・アクセシビリティ
    respectReducedMotion: true,
  } as const

  // ====== Particleクラス ======
  class Particle {
    x = 0
    y = 0
    vx = 0
    vy = 0
    radius = 1
    // “継続した近さ”をうっすら線に反映するためのメモ
    // key: `${i}-${j}` で外側管理してもいいが簡易化で未使用（拡張余地）
    constructor(w: number, h: number) {
      this.reset(w, h)
    }
    reset(w: number, h: number) {
      this.x = Math.random() * w
      this.y = Math.random() * h
      const s = CONFIG.speedBase + Math.random() * CONFIG.speedJitter
      const a = Math.random() * Math.PI * 2
      this.vx = Math.cos(a) * s
      this.vy = Math.sin(a) * s
      this.radius =
        CONFIG.radiusMin + Math.random() * (CONFIG.radiusMax - CONFIG.radiusMin)
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const prefersReduced =
      CONFIG.respectReducedMotion &&
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // DPR 対応（滲み防止）
    const resize = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
      dprRef.current = dpr

      const w = window.innerWidth
      const h = window.innerHeight

      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`

      // 以後の描画はCSS px基準にする
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // 粒子数を画面サイズで調整（軽量化）
      const area = w * h
      const target = Math.round(
        Math.min(140, Math.max(50, (area / (900 * 900)) * CONFIG.baseCount))
      )

      // 初回 or 粒子数変更
      if (particlesRef.current.length === 0) {
        particlesRef.current = Array.from({ length: target }, () => new Particle(w, h))
      } else if (particlesRef.current.length !== target) {
        const cur = particlesRef.current.length
        if (target > cur) {
          for (let i = 0; i < target - cur; i++) particlesRef.current.push(new Particle(w, h))
        } else {
          particlesRef.current.splice(target)
        }
      }

      // 画面外にいる粒子をリセット
      particlesRef.current.forEach(p => {
        if (p.x < 0 || p.x > w || p.y < 0 || p.y > h) p.reset(w, h)
      })
    }

    // マウス座標を滑らかに
    const mouseTarget = { x: -9999, y: -9999 }
    const handleMouseMove = (e: MouseEvent) => {
      mouseTarget.x = e.clientX
      mouseTarget.y = e.clientY
    }
    const handleMouseLeave = () => {
      mouseTarget.x = -9999
      mouseTarget.y = -9999
    }

    // タッチ（スマホ）対応：指を風として使う
    const handleTouchMove = (e: TouchEvent) => {
      if (!e.touches || e.touches.length === 0) return
      const t = e.touches[0]
      mouseTarget.x = t.clientX
      mouseTarget.y = t.clientY
    }
    const handleTouchEnd = () => {
      mouseTarget.x = -9999
      mouseTarget.y = -9999
    }

    resize()

    const animate = () => {
      const w = window.innerWidth
      const h = window.innerHeight

      // マウスをスムージング
      mouseRef.current.x += (mouseTarget.x - mouseRef.current.x) * CONFIG.mouseSmoothing
      mouseRef.current.y += (mouseTarget.y - mouseRef.current.y) * CONFIG.mouseSmoothing

      // ✅ 白背景＋痕跡フェード（完全クリアしない）
      ctx.fillStyle = `rgba(255,255,255,${CONFIG.fadeAlpha})`
      ctx.fillRect(0, 0, w, h)

      const particles = particlesRef.current

      // update + draw
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // “前進”ベクトル（全体が微妙に進む）
        p.vx += CONFIG.driftX
        p.vy += CONFIG.driftY

        // マウスの“風”（近いほど影響）
        const mx = mouseRef.current.x
        const my = mouseRef.current.y
        const dx = p.x - mx
        const dy = p.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (!prefersReduced && dist < CONFIG.mouseInfluenceRadius) {
          const t = 1 - dist / CONFIG.mouseInfluenceRadius // 近いほど1
          // 直線的な押し出し（風）
          const nx = dx / (dist || 1)
          const ny = dy / (dist || 1)

          // 渦成分（直交ベクトル）
          const sx = -ny
          const sy = nx

          const force = CONFIG.mouseForce * t
          const swirl = CONFIG.mouseSwirl * t

          // “逃げ”ではなく「流れを作る」：押し出し＋わずかな渦
          p.vx += nx * force + sx * force * swirl
          p.vy += ny * force + sy * force * swirl
        }

        // 減衰
        p.vx *= CONFIG.drag
        p.vy *= CONFIG.drag

        // 位置更新
        p.x += p.vx
        p.y += p.vy

        // 端は “反射”より “巻き戻し”の方が品が出やすい（宇宙感）
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        if (p.y > h + 10) p.y = -10

        // 粒子描画
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = CONFIG.particleColor
        ctx.fill()
      }

      // 線描画（後段でまとめて）
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONFIG.linkDist) {
            const a = CONFIG.linkAlpha * (1 - dist / CONFIG.linkDist)
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `${CONFIG.linkColorBase}${a})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    // ✅ 初期：白で一度塗っておく
    ctx.fillStyle = 'rgba(255,255,255,1)'
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

    rafRef.current = requestAnimationFrame(animate)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', resize)

    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('touchend', handleTouchEnd)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', resize)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return <canvas ref={canvasRef} className="particles-canvas" />
}

export default ParticlesCanvas