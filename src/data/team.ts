import type { TeamMember } from '../types'

/*
  Реальный состав команды (имена и фото подтверждены заказчиком,
  сен. 2026). Роли указаны только там, где они известны точно:
  - Дона Кулматова — директор (см. data/about.ts, foreword.directorName).
  - Асаль Байматова — менеджер / организатор (подтверждено заказчиком).
  - Дарья Раскольникова — фотограф (по кредитам фото в событиях).
  TODO(заказчику): прислать должность Абдумалика Абруева (фото уже
  есть), подтвердить Наталью Думко и её фото.
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
    role: 'Менеджер / организатор',
    photo: 'images/team/asal-baymatova.webp',
  },
  {
    id: 'abdumalik-abruev',
    name: 'Абдумалик Абруев',
    photo: 'images/team/abdumalik-abruev.webp',
  },
  {
    id: 'darya-raskolnikova',
    name: 'Дарья Раскольникова',
    role: 'Фотограф',
    photo: 'images/team/darya-raskolnikova.webp',
  },
]
