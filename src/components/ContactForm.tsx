import { useState, type FormEvent } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import styles from './ContactForm.module.css'

interface Errors {
  name?: string
  email?: string
  message?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Куда приходят заявки. Используется как запасной вариант (mailto), если
// отправка через Web3Forms не удалась.
const CONTACT_EMAIL = 'artstation.uz@gmail.com'

// Web3Forms — бесплатный сервис доставки писем для статических сайтов
// (без бэкенда). Ключ доступа НЕ секретный: он предназначен для
// использования прямо в клиентском коде и привязан к почте
// artstation.uz@gmail.com. Получить/сменить: https://web3forms.com
// (ввести адрес почты — ключ придёт письмом).
// Можно переопределить через переменную окружения VITE_WEB3FORMS_KEY.
const WEB3FORMS_ACCESS_KEY =
  (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined) ||
  'REPLACE_WITH_WEB3FORMS_ACCESS_KEY'

export function ContactForm() {
  const { language, t } = useLanguage()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  function validate(): Errors {
    const next: Errors = {}
    if (!name.trim()) next.name = t.contact.formErrorRequired[language]
    if (!email.trim()) next.email = t.contact.formErrorRequired[language]
    else if (!EMAIL_RE.test(email)) next.email = t.contact.formErrorEmail[language]
    if (!message.trim()) next.message = t.contact.formErrorRequired[language]
    return next
  }

  function openMailtoFallback() {
    const subject = `Сообщение с сайта Art Station — ${name}`
    const body = `Имя: ${name}\nEmail: ${email}\n\n${message}`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    setStatus('sending')

    // Пока ключ Web3Forms не подставлен — сразу открываем почтовый клиент,
    // не дёргая API (иначе посетитель увидит вспышку ошибки).
    if (WEB3FORMS_ACCESS_KEY.startsWith('REPLACE_WITH')) {
      window.setTimeout(() => {
        openMailtoFallback()
        setStatus('success')
      }, 400)
      return
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Сообщение с сайта Art Station — ${name}`,
          from_name: 'Art Station — сайт',
          name,
          email,
          message,
        }),
      })
      const data = (await res.json()) as { success?: boolean }
      if (!res.ok || !data.success) throw new Error('Web3Forms request failed')
      setStatus('success')
    } catch {
      setStatus('error')
      openMailtoFallback()
    }
  }

  if (status === 'success') {
    return <p className={styles.success}>{t.contact.formSuccess[language]}</p>
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="contact-name">
          {t.contact.formName[language]}
        </label>
        <input
          id="contact-name"
          className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span className={styles.errorText}>{errors.name}</span>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="contact-email">
          {t.contact.formEmail[language]}
        </label>
        <input
          id="contact-email"
          type="email"
          className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className={styles.errorText}>{errors.email}</span>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="contact-message">
          {t.contact.formMessage[language]}
        </label>
        <textarea
          id="contact-message"
          className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {errors.message && <span className={styles.errorText}>{errors.message}</span>}
      </div>

      {status === 'error' && (
        <p className={styles.errorText}>{t.contact.formErrorSend[language]}</p>
      )}

      <button type="submit" className={styles.submit} disabled={status === 'sending'}>
        {status === 'sending' ? t.contact.formSending[language] : t.contact.formSubmit[language]}
      </button>
    </form>
  )
}
