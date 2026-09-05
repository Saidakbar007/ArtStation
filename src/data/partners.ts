import type { Partner } from '../types'

/*
  Реальные партнёры Art Station (раздел 3.4 брифа). Логотипы извлечены
  напрямую из официального годового отчёта ART_STATION_AnnualReport24-25
  (EN).pdf, разворот "Partners" (физическая страница 69 из 71) — часть
  логотипов там векторные (масштабируются без потерь), часть встроена как
  растр с эффективным разрешением ~180-200dpi (eco-ministry, kuduk,
  ecojon-lab, alliance-francaise, turktav, tmm, часть текста progr) —
  для тайла партнёра этого достаточно, но не растягивай их сильно крупнее
  исходного размера.
  У логотипа eco-ministry в самом PDF наложен битый текст названия
  (баг исходного документа, не экстрактора) — поэтому вырезана только
  чистая иконка щита, без текста.
  EcoJon lab не было в исходном списке из 14 партнёров (раздел 3.4
  брифа), но есть среди логотипов отчёта — добавлен отдельно, URL
  неизвестен (не встречается в брифе).
*/
export const partners: Partner[] = [
  {
    id: 'eco-ministry',
    name: 'Министерство экологии, охраны окружающей среды и изменения климата Республики Узбекистан',
    url: 'https://gov.uz/ru/eco',
    logo: '/images/partners/eco-ministry.webp',
    eventIds: ['exh_at_the_edge_2025', 'exh_grigory_ulko_2025'],
  },
  {
    id: 'sdc',
    name: 'Swiss Agency for Development and Cooperation (SDC)',
    url: 'https://www.eda.admin.ch/eda/en/fdfa/fdfa/organisation-fdfa/directorates-divisions/sdc.html',
    logo: '/images/partners/sdc.webp',
    eventIds: ['exh_at_the_edge_2025', 'exh_22_sandyq_2025'],
  },
  {
    id: 'goethe-institut',
    name: 'Goethe-Institut',
    url: 'https://www.goethe.de/ins/uz/ru/index.html',
    logo: '/images/partners/goethe-institut.webp',
    eventIds: ['exh_paula_modersohn_becker_2025'],
  },
  {
    id: 'silkroad-university',
    name: 'Международный Университет Туризма и Культурного Наследия «Шёлковый Путь»',
    url: 'https://univ-silkroad.uz/en/',
    logo: '/images/partners/silkroad-university.webp',
    eventIds: [],
  },
  {
    id: 'british-council',
    name: 'British Council',
    url: 'https://www.britishcouncil.org/',
    logo: '/images/partners/british-council.webp',
    eventIds: [],
  },
  {
    id: 'kuduk',
    name: 'Культурный Центр Кудук',
    url: 'https://kuduk.ca/',
    logo: '/images/partners/kuduk.webp',
    eventIds: [],
  },
  {
    id: 'idea-ca',
    name: 'IDEA Центральная Азия',
    url: 'https://ideaca.today/en/contacts/contacts',
    logo: '/images/partners/idea-ca.webp',
    eventIds: [],
  },
  {
    id: 'polit-forum-bern',
    name: 'Полит-Форум Берн',
    url: 'https://www.polit-forum-bern.ch/',
    logo: '/images/partners/polit-forum-bern.webp',
    eventIds: [],
  },
  {
    id: 'progr',
    name: 'PROGR – Центр культурной практики',
    url: 'https://www.progr.ch/en/',
    logo: '/images/partners/progr.webp',
    eventIds: [],
  },
  {
    id: 'ifa',
    name: 'ifa – Институт международных культурных связей',
    url: 'https://www.ifa.de/en/',
    logo: '/images/partners/ifa.webp',
    eventIds: ['exh_paula_modersohn_becker_2025'],
  },
  {
    id: 'turktav',
    name: 'Фонд TÜRKTAV',
    url: 'https://turktav.org/',
    logo: '/images/partners/turktav.webp',
    eventIds: [],
  },
  {
    id: 'tmm',
    name: 'Узбекский технологический металлургический комплекс (ТММ)',
    url: 'https://uztmk.uz/',
    logo: '/images/partners/tmm.webp',
    eventIds: [],
  },
  {
    id: 'alliance-francaise',
    name: 'Французский альянс Ташкента',
    url: 'https://af-tachkent.uz/fr/page-d-accueil/',
    logo: '/images/partners/alliance-francaise.webp',
    eventIds: [],
  },
  {
    id: 'izba',
    name: 'IZBA',
    url: 'https://www.goldenpages.uz/en/company/?Id=84475',
    logo: '/images/partners/izba.webp',
    eventIds: [],
  },
  {
    id: 'ecojon-lab',
    name: 'EcoJon Lab',
    logo: '/images/partners/ecojon-lab.webp',
    eventIds: [],
  },
]
