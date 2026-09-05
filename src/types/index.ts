export type Language = 'ru' | 'uz' | 'en'
export type LocalizedText = Record<Language, string>
export type PartialLocalizedText = Partial<Record<Language, string>>

export type EventType =
  | 'exhibition'
  | 'lecture'
  | 'workshop'
  | 'concert'
  | 'residency'
  | 'performance'
  | 'theatre'
  | 'fair'
  | 'festival'
  | 'filmScreening'
  | 'networking'
  | 'photoExhibition'
  | 'digitalArchive'
  | 'internationalPartnership'
  | 'professionalDevelopment'

interface EventBase {
  id: string
  type: EventType
  startDate: string
  endDate?: string
  coverImage: string
}

export interface EventShort extends EventBase {
  hasFullContent: false
  title: PartialLocalizedText
}

export interface EventFull extends EventBase {
  hasFullContent: true
  title: LocalizedText
  description: LocalizedText
  place?: string
  partnerIds: string[]
  artistIds: string[]
  gallery: string[]
  /**
   * Языки, в которых title/description были переведены машинно (не
   * профессиональным переводчиком), потому что в источнике перевод
   * отсутствовал. Используется, чтобы пометить такие места в UI и
   * дать редактору быстро их найти и заменить.
   */
  machineTranslatedLangs?: Language[]
}

export type Event = EventShort | EventFull

export interface Artist {
  id: string
  role: 'artist' | 'curator'
  name: LocalizedText
  bio: LocalizedText
  photo: string
  eventIds: string[]
}

export interface Partner {
  id: string
  name: string
  url?: string
  logo: string
  eventIds: string[]
}

export interface TeamMember {
  id: string
  name: string
  role: string
  photo: string
  social?: { label: string; url: string }
}
