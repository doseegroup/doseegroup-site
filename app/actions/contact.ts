"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  success: boolean;
  error?: string;
} | null;

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const subject = (formData.get("subject") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  if (!name || !email || !message) {
    return { success: false, error: "名前・メールアドレス・メッセージは必須です。" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "有効なメールアドレスを入力してください。" };
  }

  try {
    await resend.emails.send({
      from: "DoSee Group <noreply@doseegroup.com>",
      to: "info@doseegroup.com",
      replyTo: email,
      subject: subject ? `[お問い合わせ] ${subject}` : `[お問い合わせ] ${name} 様より`,
      text: `名前: ${name}\nメールアドレス: ${email}\n件名: ${subject}\n\n${message}`,
    });

    return { success: true };
  } catch {
    return { success: false, error: "送信に失敗しました。時間をおいて再度お試しください。" };
  }
}
