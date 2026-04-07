'use client'

import { usePathname } from 'next/navigation'
import ParticlesCanvas from './ParticlesCanvas'

export default function ConditionalParticles() {
  const pathname = usePathname()

  // /business を含むパスでは非表示
  if (pathname.includes('/business')) return null

  return <ParticlesCanvas />
}
