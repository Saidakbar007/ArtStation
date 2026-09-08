import type { TeamMember } from '../types'
import { placeholderAvatar } from '../utils/placeholder'

/*
  Реальный состав команды (имена и фото подтверждены заказчиком,
  сен. 2026). Роли указаны только там, где они известны точно:
  - Дона Кулматова — директор (см. data/about.ts, foreword.directorName).
  TODO(заказчику): прислать должности Асаль Байматовой, Абдумалика
  Абруева, Дарьи Раскольниковой + подтвердить Наталью Думко и её фото.
  У Абдумалика Абруева пока нет фото — фирменный плейсхолдер-аватар.
*/
export const team: TeamMember[] = [
  {
    id: 'dona-kulmatova',
    name: 'Дона Кулматова',
    role: 'Директор',
    photo: 'images/team/dona-kulmatova.webp',
  },
  {
    id: 'asal-baymatova',
    name: 'Асаль Байматова',
    photo: 'images/team/asal-baymatova.webp',
  },
  {
    id: 'abdumalik-abruev',
    name: 'Абдумалик Абруев',
    photo: placeholderAvatar('Abdumalik Abruev'),
  },
  {
    id: 'darya-raskolnikova',
    name: 'Дарья Раскольникова',
    role: 'Фотограф',
    photo: 'images/team/darya-raskolnikova.webp',
  },
]
