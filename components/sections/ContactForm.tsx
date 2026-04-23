"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact } from "@/app/actions/contact";

type FormDict = {
  name: string;
  email: string;
  subject: string;
  message: string;
  submit: string;
  sending: string;
  successTitle: string;
  successBody: string;
  errorPrefix: string;
};

function SubmitButton({ label, sending }: { label: string; sending: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-full bg-stone-900 text-white px-6 py-2.5 text-sm hover:bg-stone-800 transition disabled:opacity-50 disabled:cursor-not-allowed w-fit"
    >
      {pending ? sending : label}
    </button>
  );
}

export default function ContactForm({ form }: { form: FormDict }) {
  const [state, action] = useActionState(submitContact, null);

  if (state?.success) {
    return (
      <div className="mt-8 rounded-3xl border border-stone-200 bg-white p-8 max-w-xl">
        <p className="font-semibold text-stone-900">{form.successTitle}</p>
        <p className="mt-2 text-stone-600 leading-relaxed">{form.successBody}</p>
      </div>
    );
  }

  return (
    <form action={action} className="mt-8 grid gap-4 max-w-xl">
      {state?.error && (
        <p className="text-sm text-red-600">
          {form.errorPrefix}{state.error}
        </p>
      )}

      <input
        name="name"
        required
        className="rounded-2xl border border-stone-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-400"
        placeholder={form.name}
      />
      <input
        name="email"
        type="email"
        required
        className="rounded-2xl border border-stone-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-400"
        placeholder={form.email}
      />
      <input
        name="subject"
        className="rounded-2xl border border-stone-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-400"
        placeholder={form.subject}
      />
      <textarea
        name="message"
        required
        className="rounded-2xl border border-stone-300 bg-white px-4 py-3 min-h-[160px] focus:outline-none focus:ring-2 focus:ring-stone-400"
        placeholder={form.message}
      />
      <SubmitButton label={form.submit} sending={form.sending} />
    </form>
  );
}
