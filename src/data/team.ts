import type { TeamMember } from '../types'
import { placeholderAvatar } from '../utils/placeholder'

/*
  Реальные имена команды (раздел 3.5 брифа, подтверждены разработчиком).
  Фото недоступны (мёртвый сервер api.artstation.uz) — используется
  плейсхолдер-аватар до появления реальных фото в public/images/team/.
  TODO: официальная статистика отчёта говорит о "15 team members" —
  это агрегированное число всей команды за 3 года, оно не сводится к
  этим 6 персональным карточкам, см. src/data/stats.ts.
*/
export const team: TeamMember[] = [
  {
    id: 'dilshod-karimov',
    name: 'Дилшод Каримов',
    role: 'Project Manager',
    photo: placeholderAvatar('Dilshod Karimov'),
    social: { label: 'LinkedIn', url: 'https://linkedin.com/in/dilshodkarimov' },
  },
  {
    id: 'malika-rustamova',
    name: 'Малика Рустамова',
    role: 'Frontend Developer',
    photo: placeholderAvatar('Malika Rustamova'),
    social: { label: 'GitHub', url: 'https://github.com/malika-rustamova' },
  },
  {
    id: 'javlonbek-islomov',
    name: 'Жавлонбек Исламов',
    role: 'Curator',
    photo: placeholderAvatar('Javlonbek Islomov'),
    social: { label: 'Instagram', url: 'https://instagram.com/javlonbek.islomov' },
  },
  {
    id: 'aziza-tursunova',
    name: 'Азиза Турсунова',
    role: 'Event Assistant (Volunteer)',
    photo: placeholderAvatar('Aziza Tursunova'),
    social: { label: 'Telegram', url: 'https://t.me/aziza' },
  },
  {
    id: 'bekzod-khudoyberdiev',
    name: 'Бекзод Худойбердиев',
    role: 'Translator (Volunteer)',
    photo: placeholderAvatar('Bekzod Khudoyberdiev'),
    social: { label: 'Instagram', url: 'https://instagram.com/bekzod.translator' },
  },
  {
    id: 'shahnoza-karimova',
    name: 'Шахноза Каримова',
    role: 'Gallery Assistant (Volunteer)',
    photo: placeholderAvatar('Shahnoza Karimova'),
    social: { label: 'Facebook', url: 'https://facebook.com/shahnoza.karimova' },
  },
]
