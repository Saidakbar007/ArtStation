import { useState, type FormEvent } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import styles from './ContactForm.module.css'

interface Errors {
  name?: string
  email?: string
  message?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function ContactForm() {
  const { language, t } = useLanguage()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle')

  function validate(): Errors {
    const next: Errors = {}
    if (!name.trim()) next.name = t.contact.formErrorRequired[language]
    if (!email.trim()) next.email = t.contact.formErrorRequired[language]
    else if (!EMAIL_RE.test(email)) next.email = t.contact.formErrorEmail[language]
    if (!message.trim()) next.message = t.contact.formErrorRequired[language]
    return next
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    setStatus('sending')
    // TODO: подключить реальную отправку (email/Telegram-бот), когда
    // появится backend. Пока форма только имитирует отправку.
    window.setTimeout(() => {
      setStatus('success')
    }, 800)
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

      <button type="submit" className={styles.submit} disabled={status === 'sending'}>
        {status === 'sending' ? t.contact.formSending[language] : t.contact.formSubmit[language]}
      </button>
    </form>
  )
}
