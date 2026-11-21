import type { LocalizedText } from '../types'

export interface OpenCallInfo {
  id: string
  /** Внешняя форма подачи заявки — организатор BIENALSUR, не Art Station. */
  applyUrl: string
  /** Shortcode новости в public/news/posts.json — ссылка "подробнее" ведёт туда. */
  newsSlug: string
  /** ISO-дата дедлайна подачи заявки. */
  deadline: string
  /** Путь к изображению относительно NEWS_DIR (папки public/news/). */
  image: string
  eyebrow: LocalizedText
  title: LocalizedText
  description: LocalizedText
  cta: LocalizedText
  secondaryCta: LocalizedText
  daysLabel: LocalizedText
  deadlineLabel: LocalizedText
}

/**
 * Открытый конкурс BIENALSUR 2027–2028 (анонс Art Station от 20.11.2026,
 * см. public/news/posts.json, shortcode bienalsur-2027-open-call).
 * Секция на главной сама скрывается после дедлайна — см. OpenCallSpotlight.
 */
export const openCall: OpenCallInfo = {
  id: 'bienalsur-2027-2028',
  applyUrl: 'https://bienalsur.org/en/page/convocatoria-abierta',
  newsSlug: 'bienalsur-2027-open-call',
  deadline: '2026-11-30',
  image: 'media/bienalsur-2027-open-call/1.jpg',
  eyebrow: { ru: 'Открытый конкурс', uz: 'Ochiq tanlov', en: 'Open Call' },
  title: { ru: 'BIENALSUR 2027–2028', uz: 'BIENALSUR 2027–2028', en: 'BIENALSUR 2027–2028' },
  description: {
    ru: 'Art Station приглашает художников и кураторов из Узбекистана и всей Центральной Азии подать заявку на участие в VI Международной биеннале современного искусства BIENALSUR. Участие бесплатное.',
    uz: 'Art Station O‘zbekiston va butun Markaziy Osiyodan rassomlar va kuratorlarni BIENALSUR zamonaviy san’at xalqaro VI biennalesida ishtirok etish uchun ariza topshirishga taklif qiladi. Ishtirok bepul.',
    en: 'Art Station invites artists and curators from Uzbekistan and across Central Asia to apply for the Sixth Edition of BIENALSUR — International Biennial of Contemporary Art. Participation is free.',
  },
  cta: { ru: 'Подать заявку', uz: 'Ariza topshirish', en: 'Apply now' },
  secondaryCta: { ru: 'Подробнее о конкурсе', uz: 'Batafsil', en: 'Read the full call' },
  daysLabel: { ru: 'дней на подачу', uz: 'kun qoldi', en: 'days left to apply' },
  deadlineLabel: { ru: 'Приём заявок до', uz: 'Ariza qabul qilish muddati', en: 'Applications close' },
}
