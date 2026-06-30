'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { useLanguage } from '@/lib/i18n/LanguageContext';

type Status = 'idle' | 'sending' | 'success' | 'error';

type FormState = {
  name: string;
  restaurant: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+\d][\d\s()-]{6,}$/;
const NAME_MIN = 2;
const MESSAGE_MIN = 10;

function validate(form: FormState, lang: 'en' | 'it'): FormErrors {
  const e: FormErrors = {};
  const M = lang === 'it' ? itMsgs : enMsgs;

  if (form.name.trim().length < NAME_MIN) e.name = M.nameMin;
  if (!form.email.trim()) e.email = M.emailRequired;
  else if (!EMAIL_REGEX.test(form.email.trim())) e.email = M.emailInvalid;
  if (form.phone.trim() && !PHONE_REGEX.test(form.phone.trim())) e.phone = M.phoneInvalid;
  if (form.message.trim() && form.message.trim().length < MESSAGE_MIN) e.message = M.messageMin;

  return e;
}

const enMsgs = {
  nameMin: 'Please enter your name (min 2 characters)',
  emailRequired: 'Email is required',
  emailInvalid: 'Please enter a valid email address',
  phoneInvalid: 'Please enter a valid phone number',
  messageMin: 'If you write a message, please use at least 10 characters',
};

const itMsgs = {
  nameMin: 'Inserisci il tuo nome (almeno 2 caratteri)',
  emailRequired: "L'email è obbligatoria",
  emailInvalid: 'Inserisci un indirizzo email valido',
  phoneInvalid: 'Inserisci un numero di telefono valido',
  messageMin: 'Se scrivi un messaggio, usa almeno 10 caratteri',
};

export function Contact() {
  const { t, lang } = useLanguage();
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState<FormState>({
    name: '',
    restaurant: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});

  const update =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const next = { ...form, [k]: e.target.value };
      setForm(next);
      // Re-validate the touched field on change so errors clear as user fixes them
      if (touched[k]) {
        const all = validate(next, lang);
        setErrors((prev) => ({ ...prev, [k]: all[k] }));
      }
    };

  const onBlur = (k: keyof FormState) => () => {
    setTouched((prev) => ({ ...prev, [k]: true }));
    const all = validate(form, lang);
    setErrors((prev) => ({ ...prev, [k]: all[k] }));
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const all = validate(form, lang);
    setErrors(all);
    setTouched({ name: true, restaurant: true, email: true, phone: true, message: true });
    if (Object.keys(all).length > 0) return;

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('success');
      setForm({ name: '', restaurant: '', email: '', phone: '', message: '' });
      setErrors({});
      setTouched({});
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-20 overflow-hidden">
      <div className="container-page max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <span className="inline-block font-mono text-xs uppercase tracking-[0.18em] text-brand-cyan mb-4">
              {t.contact.eyebrow}
            </span>
            <h2 className="font-display text-display-lg font-semibold text-balance mb-6">
              {t.contact.title1} <br />
              <span className="text-brand-cyan-light italic">{t.contact.titleHighlight}</span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              {t.contact.subtitle}
            </p>
            <ul className="space-y-3">
              {t.contact.bullets.map((point) => (
                <li key={point} className="flex items-start gap-3 text-text-secondary">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-brand-cyan flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative rounded-3xl glass-strong p-8 md:p-10">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="relative text-center py-12"
                  >
                    <div className="inline-flex p-4 rounded-full bg-brand-cyan/10 border border-brand-cyan/40 mb-6">
                      <CheckCircle2 className="w-10 h-10 text-brand-cyan" />
                    </div>
                    <h3 className="font-display text-3xl font-semibold mb-3">
                      {t.contact.successTitle}
                    </h3>
                    <p className="text-text-secondary max-w-sm mx-auto">
                      {t.contact.successBody}
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-8 btn-ghost text-sm"
                    >
                      {t.contact.successAgain}
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={submit}
                    noValidate
                    className="relative space-y-5"
                  >
                    <Field
                      name="name"
                      label={t.contact.fieldName}
                      type="text"
                      value={form.name}
                      onChange={update('name')}
                      onBlur={onBlur('name')}
                      error={errors.name}
                      required
                      autoComplete="name"
                    />
                    <Field
                      name="restaurant"
                      label={t.contact.fieldRestaurant}
                      type="text"
                      value={form.restaurant}
                      onChange={update('restaurant')}
                      onBlur={onBlur('restaurant')}
                      error={errors.restaurant}
                      autoComplete="organization"
                    />
                    <Field
                      name="email"
                      label={t.contact.fieldEmail}
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      onBlur={onBlur('email')}
                      error={errors.email}
                      required
                      autoComplete="email"
                    />
                    <Field
                      name="phone"
                      label={t.contact.fieldPhone}
                      type="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      onBlur={onBlur('phone')}
                      error={errors.phone}
                      autoComplete="tel"
                    />
                    <Field
                      name="message"
                      label={t.contact.fieldMessage}
                      type="textarea"
                      value={form.message}
                      onChange={update('message')}
                      onBlur={onBlur('message')}
                      error={errors.message}
                    />

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-primary w-full group disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          {t.contact.submitSending}
                        </>
                      ) : (
                        <>
                          {t.contact.submit}
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-sm text-red-300 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
                        <AlertCircle className="w-4 h-4" />
                        {t.contact.errorMessage}
                      </div>
                    )}

                    <p className="text-xs text-text-muted text-center pt-2">
                      {t.contact.gdprNote}
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur: () => void;
  error?: string;
  required?: boolean;
  autoComplete?: string;
};

function Field({
  name,
  label,
  type,
  value,
  onChange,
  onBlur,
  error,
  required,
  autoComplete,
}: FieldProps) {
  const hasError = Boolean(error);
  const base =
    'w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:bg-white/[0.06] focus:outline-none transition-colors';
  const borderClass = hasError
    ? 'border-red-400/60 focus:border-red-400/80'
    : 'border-line-strong focus:border-brand-cyan/60';

  return (
    <label className="block">
      <span className="block text-sm font-medium text-text-secondary mb-2">
        {label} {required && <span className="text-brand-cyan">*</span>}
      </span>
      {type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          rows={3}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${name}-error` : undefined}
          className={`${base} ${borderClass} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete={autoComplete}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${name}-error` : undefined}
          className={`${base} ${borderClass}`}
        />
      )}
      {hasError && (
        <span
          id={`${name}-error`}
          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-300"
        >
          <AlertCircle className="w-3.5 h-3.5" />
          {error}
        </span>
      )}
    </label>
  );
}
