import type { Artist } from '../types'
import { placeholderAvatar } from '../utils/placeholder'

/*
  Минимальный набор карточек кураторов/художников — только те, чьи имена
  прямо названы в описаниях 9 "полных" событий (раздел 3.2 брифа).
  Персональные страницы /faces — это Phase 2 (см. sitemap в брифе), сейчас
  не строим, поэтому bio намеренно пустой (TODO), а не выдуманный: в
  брифе и отчёте биографий этих людей нет.
*/
const stub = (id: string, name: string, role: Artist['role'], eventIds: string[]): Artist => ({
  id,
  role,
  name: { ru: name, uz: name, en: name },
  bio: { ru: '', uz: '', en: '' },
  photo: placeholderAvatar(name),
  eventIds,
})

export const artists: Artist[] = [
  stub('nick-sayers', 'Nick Sayers', 'curator', ['exh_at_the_edge_2025']),
  stub('sarvinoz-kasimova', 'Sarvinoz Kasimova', 'curator', ['exh_language_of_rivers_2025']),
  stub('baktygul-midinova', 'Baktygul Midinova', 'curator', ['exh_language_of_rivers_2025']),
  stub('grigory-ulko', 'Grigory Ulko', 'artist', ['exh_grigory_ulko_2025']),
  stub('alina-assenova', 'Alina Assenova', 'artist', ['exh_then_and_now_silkroad_2025']),
  stub('harf-zimmermann', 'Harf Zimmermann', 'curator', ['exh_21_views_uzbekistan_2025']),
  stub('diana-rakhmanova', 'Diana Rakhmanova', 'curator', ['exh_22_sandyq_2025']),
  stub('rosina-angalysheva', 'Rosina Angalysheva', 'curator', ['exh_23_neuyat_2025']),
  stub('yana-kharasho', 'Yana Kharasho', 'curator', ['exh_23_neuyat_2025']),
  stub('nigina-khudaybergenova', 'Nigina Khudaybergenova', 'curator', ['exh_23_neuyat_2025']),
  stub('umida-akhmedova', 'Umida Akhmedova', 'curator', ['exh_lahza_engage_h2o_2025']),
  stub('oleg-karpov', 'Oleg Karpov', 'curator', ['exh_lahza_engage_h2o_2025']),
]
