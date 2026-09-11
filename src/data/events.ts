import type { Event, EventFull, EventShort, EventType } from '../types'
import { placeholderCover } from '../utils/placeholder'
import { slugify } from '../utils/slug'

/*
  Все "полные" события (EventFull) ниже — тексты взяты дословно (с
  минимальной вёрсткой переносов строк в абзацы) из официального
  годового отчёта ART_STATION_AnnualReport24-25 (EN).pdf, раздел
  "Overview of Events" (Cultural Education / Cultural Events / Art
  Exhibitions / Art Residencies / Educational Programs / International
  Partnership). Английский текст — прямая цитата отчёта. RU/UZ для всех
  событий переведены (профессиональная редактура, не автоперевод).
  У 9 исходных событий (уже переведённых на RU/UZ ранее) EN-описание
  расширено до полного текста отчёта, RU/UZ оставлены как есть (короче,
  но по-прежнему точны — это не машинный перевод, а сокращённая
  редактура из первоначального брифа).
*/
export const fullEvents: EventFull[] = [
  {
    id: 'exh_at_the_edge_2025',
    type: 'exhibition',
    hasFullContent: true,
    startDate: '2025-04-02',
    endDate: '2025-06-30',
    coverImage: 'images/events/exh_at_the_edge_2025/cover.webp',
    gallery: ['images/events/exh_at_the_edge_2025/full.webp'],
    partnerIds: ['eco-ministry', 'sdc'],
    artistIds: ['nick-sayers'],
    title: {
      ru: 'У края. Между разрушением и возрождением',
      uz: 'Chekkada – Halokat va Qayta Tiklanish Orasida',
      en: 'At the Edge – Between Destruction and Revival',
    },
    description: {
      ru: 'Совместная выставка под кураторством Ника Сайерса, в которой участвуют художники из Узбекистана. Скульптуры, созданные в рамках 10-дневной резиденции, поднимают важные экологические темы — изменение климата, загрязнение и рациональное использование воды. Работы предназначены для интеграции в городскую среду Самарканда. Проект поддержан Министерством экологии Узбекистана и Швейцарским агентством по развитию и сотрудничеству (SDC) в рамках программы CAACP.',
      uz: "Nik Sayers kuratorligidagi hamkorlikdagi ko'rgazma. Unda O'zbekistonlik rassomlar ishtirok etib, iqlim o'zgarishi, ifloslanish va suvdan oqilona foydalanish kabi ekologik muammolarni yorituvchi haykallar yaratdilar. 10 kunlik rezidensiya davomida yaratilgan asarlar Samarqand shahar muhitiga joylashtirilishi rejalashtirilgan. Loyiha O'zbekiston Respublikasi Ekologiya vazirligi va Shveytsariya Taraqqiyot va Hamkorlik Agentligi (SDC) tomonidan CAACP dasturi orqali qo'llab-quvvatlangan.",
      en: 'Curator: Nick Sayers. Sculptors: Jaswant Annazar, Vetlina Burmistrova, Zilola Kakhramonova, Amir Kholmatov, Asadbek Turdaliev. Supported by the Ministry of Ecology, Environmental Protection, and Climate Change of the Republic of Uzbekistan.\n\nThe open-air exhibition in the garden was the culmination of an educational residency for young sculptors from Uzbekistan. The works created by the participants became part of the urban environment. Visitors could enjoy the art while discussing with the artists the meaning of the sculptures and the role of art in fostering ecological awareness.\n\nThe works address important aesthetic and ethical questions, promoting sustainable thinking and a culture of responsible consumption. They continue to impact the urban environment, serving as a reminder of the importance of preserving nature and of each individual’s responsibility for its future.',
    },
  },
  {
    id: 'exh_grigory_ulko_2025',
    type: 'exhibition',
    hasFullContent: true,
    startDate: '2025-04-20',
    endDate: '2025-07-25',
    coverImage: 'images/events/exh_grigory_ulko_2025/cover.webp',
    gallery: ['images/events/exh_grigory_ulko_2025/full.webp'],
    partnerIds: ['eco-ministry'],
    artistIds: ['grigory-ulko'],
    title: {
      ru: 'Миры и пространства Григория Улько',
      uz: "Grigoriy Ulkoning olamlari va o'lchamlari",
      en: 'Worlds and Spaces of Grigory Ulko',
    },
    description: {
      ru: 'Ретроспективная выставка к 100-летию Григория Улько — заслуженного деятеля искусств Узбекистана.',
      uz: "Grigoriy Ulkoning 100 yillik yubileyiga bag'ishlangan retrospektiv ko'rgazma.",
      en: 'Supported by the Ministry of Ecology, Environmental Protection and Climate Change of the Republic of Uzbekistan.\n\nThe exhibition is dedicated to the 100th anniversary of the birth of Grigory Ilyich Ulko — a philosopher-artist, educator, and Honored Artist of the Uzbek SSR.\n\nBorn in Siberia, Ulko spent his life in Samarkand, where his work became a reflection of history, philosophy, and science. He is renowned as the designer of the city’s coat of arms, in which he combined Eastern symbolism, mythology, and the idea of eternity. Ulko witnessed the discovery of the Afrasiab frescoes and created precise copies of them, explored cosmological motifs in art, and mentored an entire generation of students. His paintings — from “The Legend of Sogdiana” to the series on the tragedy of the Aral Sea — address questions of memory, time, and humanity.\n\nThe exhibition attracted a diverse audience and introduced citizens to lesser-known chapters of Samarkand’s history. Its significance was further enhanced by the display of unique works from the artist’s family collection, which had never before been shown in museums.',
    },
  },
  {
    id: 'exh_language_of_rivers_2025',
    type: 'exhibition',
    hasFullContent: true,
    startDate: '2025-04-05',
    endDate: '2025-07-05',
    coverImage: 'images/events/exh_language_of_rivers_2025/cover.webp',
    gallery: ['images/events/exh_language_of_rivers_2025/full.webp'],
    partnerIds: ['sdc'],
    artistIds: ['sarvinoz-kasimova', 'baktygul-midinova'],
    title: {
      ru: 'Мы говорим на языке рек',
      uz: 'Daryolar tilida so\'zlaymiz',
      en: 'We Speak the Language of Rivers',
    },
    description: {
      ru: 'Выставка, исследующая экологию, культурное разнообразие и социальную инклюзию через живопись и графику.',
      uz: "Ekologiya, madaniy xilma-xillik va ijtimoiy inklyuziya mavzularini rangtasvir va grafika orqali o'rganuvchi ko'rgazma.",
      en: 'Curators: Sarvinoz Kasimova, Baktygul Midinova. Artists: Anna Grigoryants, Darya Kanti, Jamshid Rashidov, Yigit Ali Sattorov, Eʼzoza Zokirzhonova. Supported by Swiss Development and Cooperation Agency (SDC).\n\n“We Speak the Language of Rivers” — the result of a thirty-day creative residency for young artists from Uzbekistan. The exhibition thematically addresses issues of ecology, cultural diversity, peaceful intercultural dialogue, women’s leadership, and social inclusion.\n\nThe unifying motif of the project is the idea of personal responsibility — toward oneself, nature, society, and past and future generations. Through art, the artists sought to answer profound questions: What have we inherited from our ancestors? How can this heritage be preserved in its authentic wholeness? How can we confront injustice and the tragedies of the contemporary world? How can we achieve an inner understanding of ourselves and the surrounding reality? These reflections intertwine into a powerful, flowing current — like a mountain river — sincere and alive.\n\nThe artists’ works became a meeting point of cultural symbols and traditional artistic techniques with contemporary technologies. This creative synthesis created a unique immersive space, where visitors can not only engage with the past but also perceive the present and imagine possible scenarios for the future.',
    },
  },
  {
    id: 'exh_paula_modersohn_becker_2025',
    type: 'exhibition',
    hasFullContent: true,
    startDate: '2025-06-20',
    endDate: '2025-10-28',
    coverImage: 'images/events/exh_paula_modersohn_becker_2025/cover.webp',
    gallery: ['images/events/exh_paula_modersohn_becker_2025/full.webp'],
    partnerIds: ['ifa', 'goethe-institut'],
    artistIds: [],
    title: {
      ru: 'Паула Модерзон-Беккер и художники Ворпсведе. Рисунки и гравюры 1895–1906',
      uz: 'Paula Moderzon-Bekker va Vorpsvede rassomlari. Chizmatasvirlar va gravyuralar 1895–1906',
      en: 'Paula Modersohn-Becker and the Artists of Worpswede. Drawings and Prints 1895–1906',
    },
    description: {
      ru: 'Выставка организована ifa (Институт международных культурных связей) при поддержке Гёте-Института в Узбекистане.',
      uz: "Ko'rgazma ifa (Xalqaro madaniy aloqalar instituti) tomonidan, O'zbekiston Gyote Instituti qo'llab-quvvatlashida tashkil etilgan.",
      en: 'An exhibition by ifa - Institut für Auslandsbeziehungen (Institute for Foreign Cultural Relations, Federal Republic of Germany) with the support of the Goethe-Institut Uzbekistan.\n\nA major exhibition dedicated to the artists of the Worpswede commune, which emerged in the late 19th century in northern Germany. The exhibition featured over 80 works — drawings, prints, photographs, sketches, and rare editions — combining visual art with literary texts.\n\nSpecial attention was given to the legacy of Paula Modersohn-Becker (1876–1907), one of the first female artists in Europe to explore themes of self-representation and the female gaze in art. Her portraits of women and children, imbued with warmth and emotional expressiveness, became a central focus of the project.\n\nThe exhibition provided the Samarkand public with a unique opportunity to explore the work of the Worpswede artists and discover the legacy of Paula Modersohn-Becker — one of the earliest European female perspectives in art. Its traveling nature creates a platform for international cultural exchange, strengthens ties between museums and educational institutions across countries, and broadens the local audience’s perception of art.',
    },
  },
  {
    id: 'exh_21_views_uzbekistan_2025',
    type: 'photoExhibition',
    hasFullContent: true,
    startDate: '2025-10-03',
    endDate: '2025-12-15',
    coverImage: 'images/events/exh_21_views_uzbekistan_2025/cover.webp',
    gallery: ['images/events/exh_21_views_uzbekistan_2025/full.webp'],
    partnerIds: ['sdc', 'eco-ministry'],
    artistIds: ['harf-zimmermann'],
    title: {
      ru: '21 взгляд на Узбекистан',
      uz: "O'zbekistonga 21 nazar",
      en: '21 Views of Uzbekistan',
    },
    description: {
      ru: 'Куратор: Харф Циммерманн (Германия). Фотографы: Абрар Абдусамиев, Светлана Астахова, Диана Батырова, Екатерина Гирда, Шахбоз Джаббаров, Алексей Елисеев и другие. При поддержке Швейцарского агентства по развитию и сотрудничеству (SDC) и Министерства экологии Республики Узбекистан.\n\n«21 взгляд на Узбекистан» — выставка, возникшая по итогам фотоконкурса «Скрытые грани Узбекистана», объединившего работы профессиональных и начинающих фотографов со всей страны. Основная идея — показать Узбекистан глазами тех, чьи истории и образы часто остаются незамеченными: повседневную жизнь махаллей и деревень, малоизвестные природные и исторические места, человеческие истории за пределами туристических маршрутов.\n\nВыставка объединяет 21 авторское повествование, каждое из которых отражает уникальный взгляд на культурное и пространственное разнообразие страны. Церемония открытия сопровождалась выступлением музыкантов, играющих на традиционных инструментах.',
      uz: "Kurator: Harf Zimmermann (Germaniya). Fotograflar: Abrar Abdusamiyev, Svetlana Astaxova, Diana Batirova, Yekaterina Girda, Shahboz Jabborov, Aleksey Yeliseyev va boshqalar. Shveytsariya Taraqqiyot va Hamkorlik Agentligi (SDC) va O'zbekiston Respublikasi Ekologiya vazirligi qo'llab-quvvatlashida.\n\n\"O'zbekistonga 21 nazar\" — professional va havaskor fotograflarning \"O'zbekistonning yashirin qirralari\" tanlovi natijasida yaratilgan ko'rgazma. Asosiy g'oya — hikoyalari va tasvirlari ko'pincha e'tibordan chetda qoladigan odamlar nigohi orqali O'zbekistonni ko'rsatish: mahallalar va qishloqlarning kundalik hayoti, kam ma'lum tabiiy va tarixiy joylar, turistik marshrutlardan tashqaridagi inson taqdirlari.\n\nKo'rgazma mamlakatning madaniy va hududiy xilma-xilligini aks ettiruvchi 21 ta muallif hikoyasini birlashtiradi. Ochilish marosimi an'anaviy cholg'u asboblarida chalgan musiqachilar chiqishi bilan yakunlandi.",
      en: 'Curator: Harf Zimmermann (Germany). Photographers: Abror Abdusamiev, Svetlana Astakhova, Diana Batyrova, Ekaterina Girda, Shakhboz Jabbarov, Alexey Eliseev, Matlyuba Khasanova, Madina Khodjayeva, Maria Khudaiberdieva, Anastasia Kozlova, Arina Kucherova, Irina Litvinova, Rusudan Mirobzalova, Ziyoda Mukhamedova, Darya Novikova, Shakhzoda Numanbekova, Egor Postolny, Jasmina Rajabova, Vladimir Skorodumov, Zuhra Shamshimetova, Kira Tugolukovskaya. Supported by the Swiss Agency for Development and Cooperation (SDC) and the Ministry of Ecology, Environmental Protection and Climate Change of the Republic of Uzbekistan.\n\n“21 Views of Uzbekistan” is an exhibition that resulted from the photo competition “Hidden Facets of Uzbekistan,” which brought together works by both professional photographers and amateurs from across the country. The main idea is to show Uzbekistan through the eyes of those whose stories and images often remain unnoticed: the everyday life of mahallas and villages, lesser-known natural and historical locations, and human stories that lie beyond standard tourist routes. The exhibition features 21 authorial narratives, each reflecting a unique perspective on the cultural and spatial diversity of the country.\n\nThe exhibition’s opening ceremony was accompanied by a performance of musicians playing traditional instruments. Representatives of the Silk Road International University of Tourism and Cultural Heritage, the Director of Art Station, and the project curator delivered welcoming remarks. Guests explored the photographs with great interest, spoke with the artists, and browsed through the exhibition catalogues specially prepared for the event.\n\n“21 Views of Uzbekistan” became the first photographic presentation at Art Station based on the results of the open competition “Hidden Facets of Uzbekistan,” strengthening the platform as a center for visual art and opening new possibilities for future photo projects.',
    },
  },
  {
    id: 'exh_22_sandyq_2025',
    type: 'exhibition',
    hasFullContent: true,
    startDate: '2025-10-15',
    // В брифе указано 31.01.2026, но в самом отчёте (стр. 49) чётко
    // напечатано "October 15, 2025 – March 15, 2026" — беру дату из
    // официального PDF как более авторитетный источник.
    endDate: '2026-03-15',
    coverImage: 'images/events/exh_22_sandyq_2025/cover.webp',
    gallery: ['images/events/exh_22_sandyq_2025/full.webp'],
    partnerIds: ['sdc'],
    artistIds: ['diana-rakhmanova'],
    title: {
      ru: 'Сундук',
      uz: 'Sandıq (Sandiq)',
      en: 'Sandyq (Chest)',
    },
    description: {
      ru: 'Выставка «Сундук» — итог программы Art Station Residency 2.0, проходившей в Самарканде.',
      uz: "\"Sandıq\" ko'rgazmasi Art Station Residency 2.0 dasturining yakuniy bosqichidir.",
      en: 'Curator: Diana Rakhmanova (Tajikistan). Artists: Sitora Brezhneva, Adelya Daukaeva, Djamshid Kadirov, Sarvinoz Melikuziyeva, Barno Narzullaeva, Aigul Sarsen. Supported by the Swiss Agency for Development and Cooperation (SDC).\n\nThe exhibition “Sandyq” (Chest) is the final presentation of the Educational Residency for young artists from Uzbekistan #2, held in Samarkand from September 15 to October 15, 2025. It featured works by six artists from different regions of the country.\n\nIn Uzbek culture, the chest accompanies a person from birth, preserving textiles, jewelry, letters, memories, and hopes. In this project, the chest functions as a metaphor for the hidden and the personal — what each person carries within: memories, experiences, cultural codes, and unspoken stories.\n\nThe artists opened their “chests” — both internal and cultural — and through their works offered candid reflections on themes such as women’s leadership, equality, social inclusion, ecology, and climate change. The exhibition invited the audience to reflect on the value of personal and cultural memory and drew attention to current issues facing contemporary society.',
    },
  },
  {
    id: 'exh_23_neuyat_2025',
    type: 'exhibition',
    hasFullContent: true,
    startDate: '2025-10-17',
    endDate: '2025-11-02',
    coverImage: 'images/events/exh_23_neuyat_2025/cover.webp',
    gallery: ['images/events/exh_23_neuyat_2025/full.webp'],
    partnerIds: [],
    artistIds: ['rosina-angalysheva', 'yana-kharasho', 'nigina-khudaybergenova'],
    title: { ru: 'NeUyat', uz: 'NeUyat', en: 'NeUyat' },
    description: {
      ru: 'Выставка «NeUyat» — медиа-проект Немолчи.Уз против гендерного насилия в Узбекистане.',
      uz: "\"NeUyat\" ko'rgazmasi — Nemolchi.uz tashabbusi bilan gender zo'ravonligiga qarshi.",
      en: 'Media Project Nemolchi.uz Against Gender-Based Violence in Uzbekistan. Curators: Rosina Angalysheva, Yana Kharasho, Nigina Khudaybergenova. Artists: Dinara Babaeva, Sitora Brezhneva, Vetlina Burmistrova, Mariyam Gadzhimuradova, UzArtDuo (Negina Alieva and Alyona Yusupova), Olga Mazhenko, Bernara Rustam, Shoniya Mary, Marzhona Zokhidova. Supported by the Embassy of Switzerland in Uzbekistan.\n\nThe exhibition became a poignant statement by women artists from Uzbekistan, who use the language of art to share stories of pain, silence, and resilience. In their works, they address themes of violence, trauma, and inner healing, transforming personal experience into a collective narrative about the fragility and strength of the human spirit.\n\nThe opening was accompanied by the performance “Message to the Sisters,” dedicated to finding strength within fear, shifting roles, struggle, and the process of overcoming pain. This emotional act served as a powerful introduction to the exhibition, setting the tone for a conversation about freedom, solidarity, and female empowerment.\n\nThe project calls for awareness and dialogue — for the creation of a culture of support, where there is no place for shame and guilt, but where compassion, courage, and mutual assistance can flourish.',
    },
  },
  {
    id: 'exh_then_and_now_silkroad_2025',
    type: 'exhibition',
    hasFullContent: true,
    startDate: '2025-06-25',
    endDate: '2025-11-15',
    coverImage: 'images/events/exh_then_and_now_silkroad_2025/cover.webp',
    gallery: ['images/events/exh_then_and_now_silkroad_2025/full.webp'],
    partnerIds: [],
    artistIds: ['alina-assenova'],
    title: {
      ru: 'Тогда и сейчас — Эмоции на Шелковом пути',
      uz: "O'tmish va hozir — Ipak yo'lida hissiyotlar",
      en: 'Then and Now – Emotions on the Silk Road',
    },
    description: {
      ru: 'Куратор и художница: Алина Ассенова. «Тогда и сейчас — Эмоции на Шёлковом пути» — выставка бельгийской художницы, философа и психолога Алины Ассеновой. Работы, созданные во время её путешествий по Узбекистану, отражают многогранный опыт художницы и её исследование внутренней устойчивости человека.\n\nЦентральная тема выставки — Шёлковый путь не просто как торговый маршрут, а как пространство встреч, обмена и взаимного обогащения культур. Используя натуральные пигменты и шёлковую бумагу ручной работы, художница создала произведения, наполненные тонкими эмоциями, воспоминаниями и впечатлениями, вдохновлёнными культурой и людьми Узбекистана.',
      uz: "Kurator va rassom: Alina Assenova. \"O'tmish va hozir — Ipak yo'lida hissiyotlar\" — belgiyalik rassom, faylasuf va psixolog Alina Assenova ko'rgazmasi. O'zbekiston bo'ylab sayohatlari davomida yaratilgan asarlarida rassomning ko'p qirrali tajribasi va inson ichki mustahkamligini o'rganishi aks etadi.\n\nKo'rgazmaning markaziy mavzusi — Ipak yo'li, shunchaki savdo yo'li sifatida emas, balki uchrashuvlar, almashinuvlar va madaniyatlarning o'zaro boyishi maydoni sifatida. Tabiiy pigmentlar va qo'lda tayyorlangan ipak qog'ozdan foydalangan holda, rassom O'zbekiston madaniyati va odamlaridan ilhomlangan nozik hissiyotlar, xotiralar va taassurotlarga to'la asarlar yaratdi.",
      en: 'Curator and Artist: Alina Assenova.\n\n“Then and Now — Emotions on the Silk Road” is an exhibition by Belgian artist, philosopher, and psychologist Alina Assenova. Created during her travels across Uzbekistan, her works reflect the artist’s multifaceted experiences and her exploration of human inner resilience.\n\nThe central theme of the exhibition is the Silk Road — not merely as a trade route, but as a space of encounters, exchange, and mutual enrichment of cultures. Assenova’s works convey the atmosphere of this timeless route, where past, present, and future converge in a single imagined journey.\n\nUsing natural pigments and handmade silk paper, the artist created works imbued with subtle emotions, memories, and impressions inspired by the culture and people of Uzbekistan. The exhibition became a major cultural event of the year, expanding Art Station’s international collaboration and highlighting the universal significance of cultural dialogue.',
    },
  },
  {
    id: 'exh_lahza_engage_h2o_2025',
    type: 'exhibition',
    hasFullContent: true,
    startDate: '2025-11-04',
    endDate: '2025-12-04',
    // Фото недоступно: событие прошло позже даты публикации отчёта,
    // поэтому его нет среди отсканированных страниц — используем
    // фирменный плейсхолдер до появления реальных фото.
    coverImage: placeholderCover('LAHZA'),
    gallery: [],
    partnerIds: [],
    artistIds: ['umida-akhmedova', 'oleg-karpov'],
    title: { ru: 'LAHZA', uz: 'LAHZA', en: 'LAHZA' },
    description: {
      ru: 'Выставка фотографий и фильмов, созданных студентами летней кинофотошколы Engage H2O под руководством наставников Умиды Ахмедовой и Олега Карпова. В сотрудничестве с Ассоциацией кинолюбителей Узбекистана (UAFMA).',
      uz: "Engage H2O yozgi kino-fotografiya maktabi talabalari tomonidan yaratilgan fotografiyalar va filmlardan iborat ko'rgazma, ustozlari Umida Ahmedova va Oleg Karpov rahbarligida. O'zbekiston Kinomuhabbirlari Assotsiatsiyasi (UAFMA) bilan hamkorlikda.",
      en: 'An exhibition of photographs and films created by students of the Engage H2O Summer Film and Photography School, guided by mentors Umida Akhmedova and Oleg Karpov. In collaboration with the Uzbekistan Amateur Filmmakers Association (UAFMA).',
    },
  },

  // ==========================================================
  // Ниже — события, у которых раньше была только карточка без
  // описания (EventShort). Текст добавлен по официальному отчёту,
  // RU/UZ временно совпадают с EN и помечены как требующие перевода.
  // ==========================================================

  // --- 2024, Cultural Education / Cultural Events / Art Exhibitions / International Partnership ---
  {
    id: 'lec_cultural_policy_germany_2024',
    type: 'lecture',
    hasFullContent: true,
    startDate: '2024-09-28',
    coverImage: 'images/events/covers/cultural-policy-in-germany-in-times-of-populist-do.webp',
    gallery: [],
    partnerIds: [],
    artistIds: [],
    title: {
      ru: 'Культурная политика Германии в эпоху доминирования популизма',
      uz: "Populizm hukmronligi davrida Germaniyada madaniyat siyosati",
      en: 'Cultural Policy in Germany in Times of Populist Dominance',
    },
    description: {
      ru: 'Лектор: профессор Маттиас Теодор Фогт. При поддержке: Институт культурной инфраструктуры Саксонии (Федеративная Республика Германия).\n\nВ рамках образовательной программы галереи состоялась лекция профессора Маттиаса Теодора Фогта — немецкого учёного и основателя Института культурной инфраструктуры Саксонии. Выступление было посвящено актуальным вызовам культурной политики Германии, с особым вниманием к итогам парламентских выборов 2024 года в Саксонии и их влиянию на сферу культуры.\n\nВ центре обсуждения оказались вопросы, связанные с ростом популизма и рисками, которые он несёт для устойчивого развития культурных институций. Лекция вызвала живой отклик аудитории. Разговор вышел за рамки темы немецкой культурной политики, затронув более широкие вопросы — от роли культуры в период политической нестабильности до перспектив международного сотрудничества и культурной дипломатии в Европе.\n\nЭто событие стало поводом задуматься об устойчивости современных культурных практик и о новых формах сотрудничества, возникающих на международной арене.',
      uz: "Ma'ruzachi: professor Mattias Teodor Fogt. Qo'llab-quvvatlovchi: Saksoniya madaniy infratuzilma instituti (Germaniya Federativ Respublikasi).\n\nGalereyaning ta'lim dasturi doirasida nemis olimi va Saksoniya madaniy infratuzilma institutining asoschisi professor Mattias Teodor Fogtning ma'ruzasi bo'lib o'tdi. Ma'ruza Germaniya madaniyat siyosatining dolzarb muammolariga, xususan, Saksoniyada 2024-yilgi parlament saylovlari natijalari va ularning madaniyat sohasiga ta'siriga bag'ishlandi.\n\nMuhokamaning markazida populizmning kuchayishi va bu jarayonning madaniyat institutlarining barqaror rivojlanishiga tug'diradigan xavflari bilan bog'liq masalalar turdi. Ma'ruza tinglovchilar orasida faol munozaraga sabab bo'ldi. Suhbat Germaniya madaniyat siyosati mavzusidan tashqariga chiqib, kengroq masalalarni — siyosiy beqarorlik davrida madaniyatning roli va Yevropada xalqaro hamkorlik hamda madaniy diplomatiya istiqbollarini ham qamrab oldi.\n\nUshbu tadbir zamonaviy madaniy amaliyotlarning barqarorligi va xalqaro maydonda paydo bo'layotgan hamkorlikning yangi shakllari haqida mulohaza yuritish uchun bahona bo'ldi.",
      en: 'Lecturer: Professor Matthias Theodor Vogt. Supported by: Institute for Cultural Infrastructure of Saxony, Federal Republic of Germany.\n\nAs part of the gallery’s educational program, a lecture was held by Professor Matthias Theodor Vogt, a German scholar and founder of the Institute for Cultural Infrastructure of Saxony. His talk focused on the current challenges facing Germany’s cultural policy, with special attention to the results of the 2024 parliamentary elections in Saxony and their impact on the cultural sector.\n\nAt the core of the discussion were issues related to the rise of populism and the associated risks for the sustainable development of cultural institutions. The lecture sparked an active response from the audience. The conversation went beyond the topic of German cultural policy, touching upon broader questions — from the role of culture in times of political instability to the prospects of international cooperation and cultural diplomacy in Europe.\n\nThis event became an occasion to reflect on the resilience of contemporary cultural practices and to consider new forms of collaboration emerging in the international arena.',
    },
  },
  {
    id: 'lec_avant_garde_scents_2024',
    type: 'lecture',
    hasFullContent: true,
    startDate: '2024-10-17',
    coverImage: 'images/events/covers/what-does-avant-garde-smell-like-scents-in-contemp.webp',
    gallery: [],
    partnerIds: [],
    artistIds: [],
    title: {
      ru: 'Чем пахнет авангард? Запахи в современном искусстве',
      uz: "Avangard qanday hidlaydi? Zamonaviy san'atda hidlar",
      en: 'What Does the Avant-Garde Smell Like? Scents in Contemporary Art',
    },
    description: {
      ru: 'Лектор: Анна Кабирова. Совместно с Музеем современного искусства «Рухсор».\n\nЛекция художницы Анны Кабировой была посвящена ольфакторным практикам — направлению в искусстве, где запахи становятся средством художественного высказывания и восприятия. Анна Кабирова, художница узбекского происхождения, преподаёт курс истории ольфакторного искусства в «Свободных мастерских» Московского музея современного искусства (ММОМА) и участвует в международных биеннале и междисциплинарных проектах.\n\nВ своей практике она исследует сенсорное восприятие как инструмент более глубокого взаимодействия с окружающим миром. Лекция расширила понимание границ художественного языка, вовлекая участников в размышления о роли тела, памяти и ощущений в восприятии культуры.\n\nПрактическая часть включала работу с ароматами и показала, как запахи могут применяться в художественных проектах, научных исследованиях и образовательных практиках.',
      uz: "Ma'ruzachi: Anna Kabirova. \"Ruhsor\" zamonaviy san'at muzeyi bilan hamkorlikda.\n\nRassom Anna Kabirovaning ma'ruzasi olfaktor amaliyotlarga — hidlar badiiy ifoda va idrok vositasiga aylanadigan san'at yo'nalishiga bag'ishlandi. O'zbek kelib chiqishli rassom Anna Kabirova Moskva zamonaviy san'at muzeyi (MMOMA) \"Erkin ustaxonalar\"ida olfaktor san'at tarixi kursidan dars beradi hamda xalqaro biennale va fanlararo loyihalarda ishtirok etadi.\n\nO'z ijodiy amaliyotida u sensor idrokni atrofdagi dunyo bilan chuqurroq muloqot vositasi sifatida o'rganadi. Ma'ruza badiiy til chegaralari haqidagi tasavvurni kengaytirdi va ishtirokchilarni tana, xotira va sezgilarning madaniyatni idrok etishdagi roli haqida mulohaza yuritishga jalb qildi.\n\nAmaliy qism xushbo'y hidlar bilan ishlashni o'z ichiga oldi va hidlarning badiiy loyihalarda, ilmiy tadqiqotlarda va ta'lim amaliyotida qanday qo'llanilishi mumkinligini ko'rsatdi.",
      en: 'Lecturer: Anna Kabirova. In collaboration with the Ruhsor Museum of Contemporary Art.\n\nThe lecture by artist Anna Kabirova focused on olfactory practices — an art direction in which scents become a medium of artistic expression and perception. Anna Kabirova, an artist of Uzbek origin, teaches the History of Olfactory Art course at the Free Workshops of the Moscow Museum of Modern Art (MMOMA) and participates in international biennales and interdisciplinary projects.\n\nIn her artistic practice, she explores sensory perception as a tool for deeper interaction with the surrounding world. The lecture expanded the understanding of the boundaries of artistic language, engaging participants in reflections on the role of the body, memory, and sensations in the perception of culture.\n\nThe practical part included working with aromas, demonstrating how scents can be used in artistic projects, scientific research, and educational practices.',
    },
  },
  {
    id: 'ws_down_syndrome_workshop_2024',
    type: 'workshop',
    hasFullContent: true,
    startDate: '2024-10-26',
    coverImage: 'images/events/covers/creative-workshop-for-children-for-world-down-synd.webp',
    gallery: [],
    partnerIds: [],
    artistIds: [],
    title: {
      ru: 'Творческий мастер-класс для детей, посвящённый Всемирному месяцу осведомлённости о синдроме Дауна',
      uz: "Butunjahon Daun sindromi haqida xabardorlik oyiga bag'ishlangan bolalar uchun ijodiy master-klass",
      en: 'Creative Workshop for Children Dedicated to World Down Syndrome Awareness Month',
    },
    description: {
      ru: 'Организовано Инклюзивным центром «Иймон» совместно с Музеем современного искусства «Рухсор».\n\nМастер-класс, проведённый в рамках Всемирного месяца осведомлённости о синдроме Дауна, объединил детей с особыми потребностями, их семьи и педагогов. Участники вместе создавали творческие проекты, делились идеями и учились работать в команде.\n\nЭтот совместный творческий процесс стал пространством для диалога и взаимопонимания. Он помог разрушить стереотипы, укрепить доверие и сформировать инклюзивное сообщество, в котором каждый чувствует свою ценность.\n\nСобытие стало важным шагом на пути к формированию уважительного отношения к людям с синдромом Дауна. Искусство вновь доказало свою силу как инструмент интеграции и поддержки. Особое внимание было уделено устойчивому развитию и роли культуры в построении инклюзивных сообществ — тех, где забота, уважение и равные возможности становятся основой будущего.',
      uz: "\"Iymon\" inklyuziv markazi tomonidan \"Ruhsor\" zamonaviy san'at muzeyi bilan hamkorlikda tashkil etilgan.\n\nButunjahon Daun sindromi haqida xabardorlik oyi doirasida o'tkazilgan master-klass maxsus ehtiyojli bolalarni, ularning oilalarini va pedagoglarni birlashtirdi. Ishtirokchilar birgalikda ijodiy loyihalar yaratdilar, g'oyalar bilan bo'lishdilar va jamoada ishlashni o'rgandilar.\n\nUshbu birgalikdagi ijodiy jarayon muloqot va o'zaro tushunish uchun makonga aylandi. U stereotiplarni yengishga, ishonchni mustahkamlashga va har bir kishi o'zini qadrli his qiladigan inklyuziv jamoani shakllantirishga yordam berdi.\n\nTadbir Daun sindromi bilan yashovchi odamlarga hurmatli munosabatni rivojlantirish yo'lida muhim qadam bo'ldi. San'at yana bir bor integratsiya va qo'llab-quvvatlash vositasi sifatidagi kuchini isbotladi. Barqaror rivojlanishga va g'amxo'rlik, hurmat hamda teng imkoniyatlar kelajak poydevorini tashkil etadigan inklyuziv jamoalarni shakllantirishda madaniyatning roliga alohida e'tibor qaratildi.",
      en: 'Organized by the Inclusive Center “Iymon” in collaboration with the Ruhsor Museum of Contemporary Art.\n\nThe workshop, held as part of World Down Syndrome Awareness Month, brought together children with special needs, their families, and educators. Participants created art projects together, shared ideas, and learned to collaborate as a team.\n\nThis joint creative process became a space for dialogue and mutual understanding. It helped break down stereotypes, build trust, and foster an inclusive community where everyone feels valued.\n\nThe event marked an important step toward developing respectful attitudes toward people with Down syndrome. Once again, art proved its power as a tool of integration and support. Special attention was given to sustainable development and the role of culture in building inclusive communities — those where care, respect, and equal opportunities form the foundation of the future.',
    },
  },
  {
    id: 'lec_painting_samarkand_2024',
    type: 'lecture',
    hasFullContent: true,
    startDate: '2024-10-26',
    coverImage: 'images/events/covers/the-birth-of-painting-the-case-of-samarkand.webp',
    gallery: [],
    partnerIds: [],
    artistIds: [],
    title: {
      ru: 'Зарождение живописи на примере города Самарканда',
      uz: "Samarqand shahri misolida rangtasvirning tug'ilishi",
      en: 'The Emergence of Painting through the Example of the City of Samarkand',
    },
    description: {
      ru: 'Лектор: Александр Галак. Совместно с Музеем современного искусства «Рухсор».\n\nЛекция художника, географа и педагога Александра Галака была посвящена истории становления живописной школы Узбекистана начиная с XIX века. Особое внимание было уделено Самаркандской школе живописи — значимому культурному явлению, отражающему исторические, социальные и художественные особенности региона.\n\nВ ходе лекции автор проанализировал ключевые этапы и фигуры, повлиявшие на развитие искусства. Слушатели узнали, как традиции живописи формировали визуальный образ Самарканда и способствовали пониманию культурной идентичности города.\n\nЛекция переросла в живую дискуссию о роли искусства в современном обществе. Участники размышляли о связи художественных практик с развитием города, а также о трансформациях социально-культурной жизни. Подобные инициативы вдохновляют на сохранение исторического наследия и показывают, что искусство остаётся действенным инструментом построения открытых и устойчивых культурных сообществ.',
      uz: "Ma'ruzachi: Aleksandr Galak. \"Ruhsor\" zamonaviy san'at muzeyi bilan hamkorlikda.\n\nRassom, geograf va pedagog Aleksandr Galakning ma'ruzasi O'zbekistonda XIX asrdan boshlab rangtasvir maktabining shakllanish tarixiga bag'ishlandi. Alohida e'tibor mintaqaning tarixiy, ijtimoiy va badiiy xususiyatlarini aks ettiruvchi muhim madaniy hodisa — Samarqand rangtasvir maktabiga qaratildi.\n\nTadbir davomida ma'ruzachi san'at rivojiga ta'sir ko'rsatgan asosiy bosqichlar va shaxslarni tahlil qildi. Tinglovchilar rangtasvir an'analari Samarqandning vizual qiyofasini qanday shakllantirganini va shahar madaniy o'ziga xosligini tushunishga qanday hissa qo'shganini bilib oldilar.\n\nMa'ruza zamonaviy jamiyatda san'atning roli haqidagi jonli munozaraga aylandi. Ishtirokchilar badiiy amaliyotlarning shahar rivojlanishi bilan bog'liqligi, shuningdek, ijtimoiy-madaniy hayotdagi o'zgarishlar haqida mulohaza yuritdilar. Bunday tashabbuslar tarixiy merosni saqlashga ilhomlantiradi va san'at ochiq hamda barqaror madaniy jamoalarni qurishning samarali vositasi bo'lib qolayotganini ko'rsatadi.",
      en: 'Lecturer: Alexander Galak. In collaboration with the Ruhsor Museum of Contemporary Art.\n\nThe lecture by artist, geographer, and educator Alexander Galak was devoted to the history of the formation of the painting school in Uzbekistan since the 19th century. Special attention was given to the Samarkand School of Painting — a significant cultural phenomenon reflecting the historical, social, and artistic characteristics of the region.\n\nDuring the event, the lecturer analyzed key stages and figures that influenced the development of art. The audience learned how the traditions of painting helped shape Samarkand’s visual image and contributed to the understanding of the city’s cultural identity.\n\nThe lecture evolved into a lively discussion about the role of art in contemporary society. Participants reflected on the connection between artistic practices and urban development, as well as the transformations of socio-cultural life. Such initiatives inspire the preservation of historical heritage and demonstrate that art remains an effective tool for building open and sustainable cultural communities.',
    },
  },
  {
    id: 'lec_samarkand_museum_collection_2024',
    type: 'lecture',
    hasFullContent: true,
    startDate: '2024-11-01',
    coverImage: 'images/events/covers/collection-of-fine-arts-of-the-samarkand-museum.webp',
    gallery: [],
    partnerIds: [],
    artistIds: [],
    title: {
      ru: 'Коллекция изобразительного искусства Самаркандского музея',
      uz: "Samarqand muzeyining tasviriy san'at kolleksiyasi",
      en: 'The Fine Art Collection of the Samarkand Museum',
    },
    description: {
      ru: 'Лектор: Сафура Рузимуротова. Совместно с Музеем современного искусства «Рухсор».\n\nСафура Рузимуротова, заведующая отделом искусства и этнографии Государственного музея истории и культуры Узбекистана, представила лекцию о коллекции изобразительного искусства Самаркандского музея и дала широкий исторический обзор развития художественных традиций региона.\n\nОсобое внимание было уделено открытию первой художественной школы в Самарканде в 1919 году — важной вехе в развитии изобразительного искусства Туркестана.\n\nВ лекции был отмечен вклад О. Татевосяна, Н. Бенькова, В. Рождественского и других художников, чьи работы отражают культурное многообразие региона. Также была подчёркнута значимость художественного наследия Л. Л. Буре — её работы, наряду с произведениями современных художников и скульпторов, составляют основу музейной коллекции.\n\nМероприятие помогло участникам глубже понять художественное наследие Самарканда, пробудило интерес к музейным коллекциям и стало площадкой для обмена знаниями между специалистами и широкой публикой.',
      uz: "Ma'ruzachi: Safura Ruzimurotova. \"Ruhsor\" zamonaviy san'at muzeyi bilan hamkorlikda.\n\nO'zbekiston davlat tarix va madaniyat muzeyi san'at va etnografiya bo'limi mudiri Safura Ruzimurotova Samarqand muzeyining tasviriy san'at kolleksiyasi haqida ma'ruza taqdim etdi hamda mintaqada badiiy an'analarning rivojlanishi bo'yicha keng tarixiy sharh berdi.\n\nAlohida e'tibor 1919-yilda Samarqandda ochilgan birinchi san'at maktabiga qaratildi — bu Turkiston tasviriy san'ati rivojidagi muhim bosqich bo'ldi.\n\nMa'ruzada O. Tatevosyan, N. Benkov, V. Rojdestvenskiy va boshqa rassomlarning hissasi ta'kidlab o'tildi — ularning asarlari mintaqaning madaniy xilma-xilligini aks ettiradi. Shuningdek, L. L. Byure ijodiy merosining ahamiyati alohida qayd etildi — uning asarlari zamonaviy rassom va haykaltaroshlar ijodi bilan birga muzey kolleksiyasining asosini tashkil etadi.\n\nTadbir ishtirokchilarga Samarqandning badiiy merosini chuqurroq tushunishga yordam berdi, muzey kolleksiyalariga qiziqishni uyg'otdi va mutaxassislar hamda keng jamoatchilik o'rtasida bilim almashish maydoniga aylandi.",
      en: 'Lecturer: Safura Ruzimurotova. In collaboration with the Ruhsor Museum of Contemporary Art.\n\nSafura Ruzimurotova, Head of the Department of Art and Ethnography at the State Museum of History and Culture of Uzbekistan, presented a lecture on the fine art collection of the Samarkand Museum and offered a broad historical overview of the development of artistic traditions in the region.\n\nSpecial attention was given to the establishment of the first art school in Samarkand in 1919, which marked an important milestone in the evolution of fine arts in Turkestan.\n\nThe lecture highlighted the contributions of O. Tatevosyan, N. Benkov, V. Rozhdestvensky, and other artists whose works reflect the cultural diversity of the region. The significance of L. L. Bure’s artistic legacy was also emphasized — her works, together with those of modern artists and sculptors, form the foundation of the museum’s collection.\n\nThe event helped participants gain a deeper understanding of Samarkand’s artistic heritage, sparked interest in museum collections, and became a platform for knowledge exchange between professionals and the public.',
    },
  },
  {
    id: 'lec_art_journalism_2024',
    type: 'lecture',
    hasFullContent: true,
    startDate: '2024-11-06',
    coverImage: 'images/events/covers/the-role-of-art-journalism-in-popularizing-fine-ar.webp',
    gallery: [],
    partnerIds: [],
    artistIds: [],
    title: {
      ru: 'Роль арт-журналистики в популяризации изобразительного искусства среди широкой публики',
      uz: "San'atshunoslik jurnalistikasining tasviriy san'atni ommalashtirishdagi roli",
      en: 'The Role of Art Journalism in Popularizing Fine Arts Among the Public',
    },
    description: {
      ru: 'Лектор: Анастасия Павленко. Совместно с Музеем современного искусства «Рухсор».\n\nЖурналистка и исследовательница Анастасия Павленко прочитала лекцию о роли журналистики и медиа как ключевых инструментов сохранения и трансляции культурных ценностей. В условиях стремительных социальных перемен медиа играют решающую роль в формировании восприятия обществом наследия Самарканда и Узбекистана, укрепляя понимание исторического и культурного богатства региона.\n\nЛекция была посвящена тому, как журналисты, блогеры и специалисты по коммуникациям могут интерпретировать сложные темы и делать их доступными для широкой аудитории, создавая пространство для открытого диалога.\n\nВ ходе обсуждения был подчёркнут потенциал медиа как моста между культурными институциями и обществом, способного продвигать идеи устойчивого развития и культурного обмена.',
      uz: "Ma'ruzachi: Anastasiya Pavlenko. \"Ruhsor\" zamonaviy san'at muzeyi bilan hamkorlikda.\n\nJurnalist va tadqiqotchi Anastasiya Pavlenko madaniy qadriyatlarni saqlash va yetkazishning asosiy vositalari sifatida jurnalistika va OAVning roli haqida ma'ruza o'qidi. Tezkor ijtimoiy o'zgarishlar sharoitida OAV Samarqand va O'zbekiston merosini jamoatchilik tomonidan idrok etilishini shakllantirishda, mintaqaning tarixiy va madaniy boyligini anglashni mustahkamlashda hal qiluvchi rol o'ynaydi.\n\nMa'ruza jurnalistlar, bloggerlar va kommunikatsiya mutaxassislari murakkab mavzularni qanday talqin qilib, keng auditoriya uchun tushunarli qilishlari va ochiq muloqot maydonini yaratishlari mumkinligiga bag'ishlandi.\n\nMunozarada OAVning madaniyat institutlari va jamiyat o'rtasidagi ko'prik sifatidagi salohiyati, barqaror rivojlanish va madaniy almashinuv g'oyalarini ilgari surish imkoniyati alohida ta'kidlandi.",
      en: 'Lecturer: Anastasia Pavlenko. In collaboration with the Ruhsor Museum of Contemporary Art.\n\nJournalist and researcher Anastasia Pavlenko delivered a lecture on the role of journalism and media as key tools for preserving and communicating cultural values. In the context of rapid social change, media play a crucial role in shaping the public’s perception of Samarkand’s and Uzbekistan’s heritage, fostering appreciation for the region’s historical and cultural richness.\n\nThe lecture focused on how journalists, bloggers, and communication specialists can interpret complex topics and make them accessible to wider audiences, creating a space for open dialogue.\n\nThe discussion emphasized the potential of media as a bridge between cultural institutions and society, capable of promoting the ideas of sustainable development and cultural exchange.',
    },
  },
  {
    id: 'lec_ruhsor_museum_path_2024',
    type: 'lecture',
    hasFullContent: true,
    startDate: '2024-11-09',
    coverImage: 'images/events/covers/the-journey-of-the-rukhsor-museum-of-contemporary-.webp',
    gallery: [],
    partnerIds: [],
    artistIds: [],
    title: {
      ru: 'Путь Музея современного искусства «Рухсор»',
      uz: "\"Ruhsor\" zamonaviy san'at muzeyining yo'li",
      en: 'The Path of the Ruhsor Museum of Contemporary Art',
    },
    description: {
      ru: 'Лектор: Нормурод Негматов. Совместно с Музеем современного искусства «Рухсор».\n\nНормурод Негматов, основатель и директор Музея современного искусства «Рухсор», посвятил своё выступление теме «Путь Музея современного искусства "Рухсор"». Он рассказал о развитии институции — от первоначальной идеи до формирования масштабного, многофункционального культурного проекта.\n\nЛектор поделился опытом создания музея без собственного здания и рассказал, как «Рухсор» выстраивает партнёрские отношения с различными художественными институциями, оставаясь активным участником культурной сцены. В лекции также были рассмотрены концептуальные аспекты музейной работы: музей как идея, как арт-объект, как хранитель произведений искусства и как полноценная культурная институция.\n\nМероприятие подчеркнуло значимость новых музейных форматов, показав, что даже без физического пространства культурные институции способны активно развиваться, объединять профессиональные сообщества и расширять границы современного искусства.',
      uz: "Ma'ruzachi: Normurod Negmatov. \"Ruhsor\" zamonaviy san'at muzeyi bilan hamkorlikda.\n\n\"Ruhsor\" zamonaviy san'at muzeyining asoschisi va direktori Normurod Negmatov o'z ma'ruzasini \"'Ruhsor' zamonaviy san'at muzeyining yo'li\" mavzusiga bag'ishladi. U institutsiyaning rivojlanishi — dastlabki g'oyadan tortib yirik, ko'p funksiyali madaniy loyihaga aylanishigacha bo'lgan yo'l haqida so'zlab berdi.\n\nMa'ruzachi o'z binosiz muzey yaratish tajribasi bilan o'rtoqlashdi va \"Ruhsor\" turli san'at institutsiyalari bilan qanday hamkorlik qurishi, madaniy hayotning faol ishtirokchisi bo'lib qolishini tushuntirdi. Ma'ruzada muzey ishining kontseptual jihatlari ham ko'rib chiqildi: muzey g'oya sifatida, badiiy ob'ekt sifatida, asarlar xazinasi sifatida va to'laqonli madaniy institutsiya sifatida.\n\nTadbir yangi muzey formatlarining ahamiyatini ko'rsatdi — hatto jismoniy makonga ega bo'lmasa ham, madaniy institutsiyalar faol rivojlanishi, professional jamoalarni birlashtirishi va zamonaviy san'at chegaralarini kengaytirishi mumkinligini isbotladi.",
      en: 'Lecturer: Normurod Negmatov. In collaboration with the Ruhsor Museum of Contemporary Art.\n\nNormurod Negmatov, the founder and director of the Ruhsor Museum of Contemporary Art, devoted his talk to the topic “The Path of the Ruhsor Museum of Contemporary Art.” He spoke about the development of the institution — from its initial idea to the formation of a large-scale, multifunctional cultural project.\n\nThe lecturer shared his experience of creating a museum without its own building and explained how Ruhsor builds partnerships with various art institutions, remaining an active participant in the cultural scene. The lecture also explored conceptual aspects of museum work: the museum as an idea, as an art object, as a keeper of artworks, and as a fully-fledged cultural institution.\n\nThe event highlighted the importance of new museum formats, showing that even without a physical space, cultural institutions can actively evolve, unite professional communities, and expand the boundaries of contemporary art.',
    },
  },
  {
    id: 'lec_swiss_cultural_diplomacy_2024',
    type: 'lecture',
    hasFullContent: true,
    startDate: '2024-11-19',
    coverImage: 'images/events/covers/cultural-diplomacy-of-switzerland.webp',
    gallery: [],
    partnerIds: ['sdc'],
    artistIds: [],
    title: {
      ru: 'Культурная дипломатия Швейцарии',
      uz: "Shveytsariyaning madaniy diplomatiyasi",
      en: 'Cultural Diplomacy of Switzerland',
    },
    description: {
      ru: 'Лектор: Стефани Шюпбах. При поддержке Швейцарского агентства по развитию и сотрудничеству (SDC).\n\nВстреча со Стефани Шюпбах, заместителем директора Political Forum Bern (Швейцария), предоставила участникам уникальную возможность узнать о швейцарском опыте культурной дипломатии и обсудить роль искусства и культуры в укреплении международных отношений.\n\nВ своём выступлении Стефани рассказала о значимых проектах в Швейцарии и Вашингтоне, где культура служит инструментом демократического диалога и социального развития. Особое внимание было уделено деятельности Political Forum Bern — площадки, где искусство и культура становятся частью дискуссий о демократии и актуальных политических процессах.\n\nУ аудитории была возможность обменяться идеями, задать вопросы и обсудить перспективы культурного сотрудничества, что продемонстрировало, как творческие практики способны формировать новые подходы к культурной жизни и социальным процессам на международном уровне.',
      uz: "Ma'ruzachi: Stefani Shyupbax. Shveytsariya Taraqqiyot va Hamkorlik Agentligi (SDC) qo'llab-quvvatlashida.\n\nPolitical Forum Bern (Shveytsariya) direktori o'rinbosari Stefani Shyupbax bilan uchrashuv ishtirokchilarga Shveytsariyaning madaniy diplomatiya sohasidagi tajribasi bilan tanishish va san'at hamda madaniyatning xalqaro munosabatlarni mustahkamlashdagi rolini muhokama qilish uchun noyob imkoniyat berdi.\n\nO'z chiqishida Stefani madaniyat demokratik muloqot va ijtimoiy rivojlanish vositasi bo'lib xizmat qiladigan Shveytsariya va Vashingtondagi muhim loyihalar haqida so'zlab berdi. U san'at va madaniyat demokratiya hamda dolzarb siyosiy jarayonlar bo'yicha muhokamalarning bir qismiga aylanadigan maydon — Political Forum Bern faoliyatiga alohida to'xtaldi.\n\nTinglovchilar fikr almashish, savollar berish va madaniy hamkorlik istiqbollarini muhokama qilish imkoniyatiga ega bo'ldilar — bu ijodiy amaliyotlar xalqaro darajada madaniy hayot va ijtimoiy jarayonlarga yangi yondashuvlarni qanday shakllantirishi mumkinligini namoyish etdi.",
      en: 'Lecturer: Stephanie Schupbach. Supported by Swiss Development and Cooperation Agency (SDC).\n\nThe meeting with Stephanie Schupbach, Deputy Director of the Political Forum Bern (Switzerland), offered participants a unique opportunity to learn about Switzerland’s experience in cultural diplomacy and to discuss the role of art and culture in strengthening international relations.\n\nDuring her talk, Stephanie spoke about significant projects in Switzerland and Washington, where culture serves as a tool for democratic dialogue and social development. She paid special attention to the activities of the Political Forum Bern — a platform where art and culture become part of discussions on democracy and current political processes.\n\nThe audience had the opportunity to exchange ideas, ask questions, and discuss prospects for cultural cooperation, demonstrating how creative practices can shape new approaches to cultural life and social processes on an international level.',
    },
  },
  {
    id: 'con_alphorn_dialogue_2024',
    type: 'concert',
    hasFullContent: true,
    startDate: '2024-10-06',
    coverImage: 'images/events/covers/dialogue-on-the-alphorn-bridges-of-friendship.webp',
    gallery: [],
    partnerIds: ['goethe-institut'],
    artistIds: [],
    title: {
      ru: '«Диалог на альпийском рожке»',
      uz: '"Alfgornda muloqot"',
      en: '"Dialogue on the Alphorn"',
    },
    description: {
      ru: 'Участники: Amithias Project, оркестр «Согдиана». Страны-участницы: Германия, Индия, Узбекистан. При поддержке: Гёте-Институт в Ташкенте.\n\n«Диалог на альпийском рожке. Do\'stlik ko\'priklari» — международный концерт, организованный при поддержке Гёте-Института в Ташкенте. Проект объединил джазовый ансамбль из Германии, узбекских народных исполнителей и индийских музыкантов. В центре внимания оказался альпийский рожок — традиционный духовой инструмент швейцарских пастухов, изначально служивший для общения в горах, а сегодня раскрывающий новые художественные возможности. Его звучание переплеталось с рубабом, ситаром и национальным вокалом, создавая уникальную музыкальную ткань.\n\nЭто было яркое интерактивное событие, в котором зрители тоже стали частью действия. Концерт превратился в настоящий опыт межкультурного диалога, где разные традиции нашли общий язык через музыку, показав, как музыка способна служить универсальным инструментом взаимопонимания и сотрудничества.',
      uz: "Ishtirokchilar: Amithias Project, \"Sug'diyona\" orkestri. Ishtirokchi mamlakatlar: Germaniya, Hindiston, O'zbekiston. Qo'llab-quvvatlovchi: Toshkent Gyote-Instituti.\n\n\"Alfgornda muloqot. Do'stlik ko'priklari\" — Toshkent Gyote-Instituti qo'llab-quvvatlashida tashkil etilgan xalqaro konsert. Loyiha Germaniyadan jaz ansambli, o'zbek xalq ijrochilari va hind musiqachilarini bir joyga jamladi. E'tibor markazida alfgorn — asli tog'larda muloqot qilish uchun xizmat qilgan, ammo bugungi kunda yangi badiiy imkoniyatlarni ochayotgan an'anaviy shveytsariyalik cho'ponlar puflama chalg'u asbobi turdi. Uning ovozi rubob, sitar va milliy vokal bilan uyg'unlashib, o'ziga xos musiqiy to'qima yaratdi.\n\nBu tomoshabinlar ham voqealarning bir qismiga aylangan jonli, interaktiv tadbir bo'ldi. Konsert turli an'analar musiqa orqali umumiy til topgan haqiqiy madaniyatlararo muloqot tajribasiga aylandi va musiqa o'zaro tushunish hamda hamkorlikning universal vositasi bo'la olishini namoyish etdi.",
      en: 'Participants: Amithias Project, Sogdiana Orchestra. Participating countries: Germany, India, Uzbekistan. Supported by: Goethe-Institut Tashkent.\n\n“Dialogue on the Alphorn. Do’stlik ko’priklari” was an international concert organized with the support of the Goethe-Institut Tashkent. The project brought together a jazz ensemble from Germany, Uzbek folk performers, and Indian musicians. At the center of attention stood the alphorn — a traditional wind instrument of Swiss shepherds, originally used for communication in the mountains, but today revealing new artistic possibilities. Its sound intertwined with the rubab, the sitar, and national vocals, creating a unique musical tapestry.\n\nThis was a vibrant, interactive event in which the audience also became part of the action. The concert turned into a genuine experience of intercultural dialogue, where different traditions found a common language through music, showcasing how music can serve as a universal tool of mutual understanding and collaboration.',
    },
  },
  {
    id: 'film_young_uzbek_directors_2024',
    type: 'filmScreening',
    hasFullContent: true,
    startDate: '2024-11-15',
    endDate: '2024-11-16',
    coverImage: 'images/events/covers/screenings-of-films-by-young-uzbek-directors.webp',
    gallery: [],
    partnerIds: [],
    artistIds: [],
    title: {
      ru: 'Показы фильмов молодых узбекских режиссёров',
      uz: "Yosh o'zbek rejissyorlari filmlari namoyishi",
      en: 'Screenings of Films by Young Uzbek Directors',
    },
    description: {
      ru: 'Участники: Хилола Абдурасулова — «Ўзбекистон менинг орзуйим», Сарвиноз Абдусаломова — «Ғалаба», Миркхон Бобосолиев — «Зулмат», «Uzbekoy», Жасмина Эргашева — «Sinful Flower», «Раво» (документальный фильм), Осман Кападзе — «Имтихон», Зафар Ходжибоев — «Матонат», Сабина Музаффарзаде — «The Ray, the Wind, the Eagle», Саид Валихаджаев — «Forgiveness». Совместно с Музеем современного искусства «Рухсор».\n\nПрограмма показов включала короткометражные фильмы молодых узбекских режиссёров на русском и узбекском языках. Каждый фильм раскрывал личные истории, культурные коды и современные вызовы, с которыми сталкивается новое поколение кинематографистов. Несмотря на разнообразие тем и художественных подходов, работы объединяло общее стремление к честному разговору о жизни и общественных ценностях.\n\nПоказы привлекли широкую аудиторию и вызвали активное обсуждение. Зрители отмечали свежий взгляд и самобытный художественный язык молодых режиссёров, подчёркивая искренность и эмоциональную выразительность их работ.',
      uz: "Ishtirokchilar: Hilola Abdurasulova — \"O'zbekiston mening orzuyim\", Sarvinoz Abdusalomova — \"G'alaba\", Mirxon Bobosoliyev — \"Zulmat\", \"Uzbekoy\", Jasmina Ergasheva — \"Sinful Flower\", \"Ravo\" (hujjatli film), Osman Kapadze — \"Imtihon\", Zafar Xojiboyev — \"Matonat\", Sabina Muzaffarzade — \"The Ray, the Wind, the Eagle\", Said Valixodjayev — \"Forgiveness\". \"Ruhsor\" zamonaviy san'at muzeyi bilan hamkorlikda.\n\nNamoyish dasturiga yosh o'zbek rejissyorlarining rus va o'zbek tillaridagi qisqa metrajli filmlari kiritildi. Har bir film shaxsiy hikoyalar, madaniy kodlar va yangi avlod kinorejissyorlari duch keladigan zamonaviy muammolarni ochib berdi. Mavzular va badiiy yondashuvlarning xilma-xilligiga qaramay, asarlarni hayot va jamiyat qadriyatlari haqida samimiy suhbatga bo'lgan umumiy intilish birlashtirdi.\n\nNamoyishlar keng auditoriyani jalb qildi va faol muhokamaga sabab bo'ldi. Tomoshabinlar yosh rejissyorlarning yangi qarashi va o'ziga xos badiiy tilini alohida ta'kidlab, ularning asarlaridagi samimiylik va hissiy ifodalilikni qayd etishdi.",
      en: 'Participants: Hilola Abdurassulova — “Oʻzbekiston mening orzuyim”, Sarvinoz Abdusalomova — “Gʻalaba”, Mirkhon Bobosoliyev — “Zulmat”, “Uzbekoy”, Jasmina Ergasheva — “Sinful Flower”, “Ravo” (documentary film), Osman Kapadze — “Imtihon”, Zafar Khojiboev — “Matonat”, Sabina Muzaffarzade — “The Ray, the Wind, the Eagle”, Said Valikhojaev — “Forgiveness”. In collaboration with the Ruhsor Museum of Contemporary Art.\n\nThe screening program featured short films by young Uzbek directors in Russian and Uzbek. Each film revealed personal stories, cultural codes, and contemporary challenges faced by the new generation of filmmakers. Despite the diversity of themes and artistic approaches, the works were united by a shared desire for an honest dialogue about life and societal values.\n\nThe screenings drew a wide audience and sparked active discussion. Viewers highlighted the fresh perspective and distinctive artistic language of the young directors, noting the sincerity and emotional expressiveness of their works.',
    },
  },
  {
    id: 'fair_new_year_2024',
    type: 'fair',
    hasFullContent: true,
    startDate: '2024-12-12',
    endDate: '2024-12-15',
    coverImage: 'images/events/covers/new-year-fair.webp',
    gallery: [],
    partnerIds: [],
    artistIds: [],
    title: { ru: 'Новогодняя ярмарка', uz: "Yangi yil yarmarkasi", en: 'New Year Fair' },
    description: {
      ru: 'Совместно с: флористическим агентством Anastasia Flower Agency.\n\nВ декабре, совместно с флористическим агентством Anastasia Flower Agency, на территории галереи прошла новогодняя ярмарка. В течение четырёх дней посетители могли приобрести изделия ручной работы — от керамики и текстиля до флористических композиций, созданных с акцентом на натуральные материалы и местное производство.\n\nОсобое внимание было уделено принципам устойчивости: экологичной упаковке, повторному использованию материалов и поддержке местных мастеров. Программа также включала мастер-классы и выставку молодых художников, создавая атмосферу праздничного единения. Ярмарка стала важной точкой притяжения для жителей города, объединив творчество, экологию и местные инициативы.',
      uz: "Hamkorlikda: Anastasia Flower Agency floristika agentligi.\n\nDekabr oyida Anastasia Flower Agency floristika agentligi bilan hamkorlikda galereya hududida yangi yil yarmarkasi bo'lib o'tdi. To'rt kun davomida tashrif buyuruvchilar qo'lda yasalgan buyumlarni — keramika va tekstildan tortib, tabiiy materiallar va mahalliy ishlab chiqarishga urg'u berilgan gulchilik kompozitsiyalarigacha — sotib olish imkoniga ega bo'lishdi.\n\nBarqarorlik tamoyillariga alohida e'tibor qaratildi: ekologik qadoqlash, materiallarni qayta ishlatish va mahalliy hunarmandlarni qo'llab-quvvatlash. Dastur, shuningdek, master-klasslar va yosh rassomlar ko'rgazmasini o'z ichiga olib, bayramona birlik muhitini yaratdi. Yarmarka shahar aholisi uchun ijodkorlik, ekologiya va mahalliy tashabbuslarni birlashtirgan muhim uchrashuv nuqtasiga aylandi.",
      en: 'In collaboration with: Anastasia Flower Agency.\n\nIn December, in collaboration with the Anastasia Flower Agency, a Christmas market was held on the gallery’s premises. Over four days, visitors could purchase handmade items — from ceramics and textiles to floral compositions created with an emphasis on natural materials and local production.\n\nSpecial attention was given to sustainable practices: eco-friendly packaging, reuse of materials, and support for local makers. The program also included workshops and an exhibition of young artists, creating an atmosphere of festive togetherness. The market became an important gathering point for the city’s residents, bringing together creativity, ecology, and local initiatives.',
    },
  },
  {
    id: 'ip_polit_forum_bern_visit_2024',
    type: 'internationalPartnership',
    hasFullContent: true,
    startDate: '2024-11-16',
    endDate: '2024-11-25',
    coverImage: 'images/events/covers/international-research-trip-of-polit-forum-bern-at.webp',
    gallery: [],
    partnerIds: ['polit-forum-bern', 'sdc'],
    artistIds: [],
    title: {
      ru: 'Международный исследовательский визит: Polit Forum Bern в Art Station',
      uz: "Xalqaro tadqiqot tashrifi: Polit Forum Bern Art Stationda",
      en: 'International Research Visit: Polit Forum Bern at Art Station',
    },
    description: {
      ru: 'Стефани Шюпбах. При поддержке Швейцарского агентства по развитию и сотрудничеству (SDC).\n\nВ рамках программы международного сотрудничества заместитель директора Polit-Forum Bern посетила Art Station, чтобы изучить контекст институции и укрепить партнёрские отношения между организациями. Программа включала поездки в Самарканд, Бухару и Ташкент, а также встречи с художниками, активистами гражданского общества и представителями культурных институций.\n\nВ центре внимания визита оказались вопросы сохранения культурного наследия, традиционных махаллей и архивов, а также роль независимых арт-пространств как площадок для общественного диалога. Встречи с художниками разных поколений выявили нехватку пространств для современной практики и подтвердили значимость резиденции и галереи Art Station как площадки для профессионального роста и диалога.\n\nВизит укрепил сотрудничество между Art Station и Polit-Forum Bern и заложил основу для долгосрочного партнёрства в рамках Региональной программы искусства и культуры в Центральной Азии, финансируемой Швейцарией.',
      uz: "Stefani Shyupbax. Shveytsariya Taraqqiyot va Hamkorlik Agentligi (SDC) qo'llab-quvvatlashida.\n\nXalqaro hamkorlik dasturi doirasida Polit-Forum Bern direktori o'rinbosari institutsiya kontekstini o'rganish va tashkilotlar o'rtasidagi hamkorlik aloqalarini mustahkamlash maqsadida Art Stationga tashrif buyurdi. Dastur Samarqand, Buxoro va Toshkentga safarlarni, shuningdek, rassomlar, fuqarolik jamiyati faollari va madaniyat institutlari vakillari bilan uchrashuvlarni o'z ichiga oldi.\n\nTashrif markazida madaniy merosni, an'anaviy mahallalarni va arxivlarni saqlash masalalari, shuningdek, mustaqil san'at makonlarining jamoat muloqoti maydoni sifatidagi roli turdi. Turli avlod rassomlari bilan uchrashuvlar zamonaviy amaliyot uchun makonlar yetishmasligini ko'rsatdi va Art Station rezidensiyasi hamda galereyasining professional o'sish va muloqot maydoni sifatidagi ahamiyatini yana bir bor tasdiqladi.\n\nTashrif Art Station va Polit-Forum Bern o'rtasidagi hamkorlikni mustahkamladi va Shveytsariya moliyalashtiradigan Markaziy Osiyo san'at va madaniyat mintaqaviy dasturi doirasida uzoq muddatli hamkorlik uchun asos yaratdi.",
      en: 'Stephanie Schupbach. Supported by the Swiss Agency for Development and Cooperation (SDC).\n\nAs part of an international cooperation program, the Deputy Director of Polit-Forum Bern and curator of the Democracy Tower project visited Art Station with the aim of studying the institution’s context and fostering partnership relations between the two organizations. The program included trips to Samarkand, Bukhara, and Tashkent, as well as meetings with artists, civil society activists, and representatives of cultural institutions.\n\nThe visit focused on issues of cultural heritage preservation, traditional mahallas, and archives, as well as the role of independent art spaces as platforms for public dialogue. Meetings with artists of different generations highlighted the lack of spaces for contemporary practice and reaffirmed the importance of the Art Station residency and gallery as a platform for professional growth and dialogue.\n\nThe visit strengthened cooperation between Art Station and Polit-Forum Bern and laid the foundation for a long-term partnership within the Swiss-funded Regional Arts and Culture Program in Central Asia.',
    },
  },
  {
    id: 'ip_bishkek_trip_2024',
    type: 'internationalPartnership',
    hasFullContent: true,
    startDate: '2024-11-27',
    endDate: '2024-11-30',
    coverImage: 'images/events/covers/international-educational-trip-of-art-station-to-b.webp',
    gallery: [],
    partnerIds: ['kuduk', 'idea-ca', 'sdc'],
    artistIds: [],
    title: {
      ru: 'Международная образовательная поездка команды Art Station в Бишкек',
      uz: "Art Station jamoasining Bishkekka xalqaro ta'lim safari",
      en: 'International Educational Trip of the Art Station Team to Bishkek',
    },
    description: {
      ru: 'При поддержке Швейцарского агентства по развитию и сотрудничеству (SDC).\n\nВ рамках программы международного сотрудничества два представителя команды Art Station отправились в учебную поездку в Бишкек, чтобы укрепить партнёрские связи с культурным центром Kuduk и IDEA Central Asia. Визит включал вводные встречи и презентации местных организаций гражданского общества, посещение культурных пространств — в том числе Кыргызского национального музея изобразительных искусств — а также практические мастер-классы, например по традиционному киргизскому текстилю курак.\n\nПредставители Art Station ознакомились с практиками Kuduk в области документирования и управления проектами, изучили инициативу IDEA Go Viral и обсудили возможные форматы сотрудничества.\n\nВ результате визита были запущены две региональные инициативы: Art Station стал национальным партнёром программы Go Viral совместно с IDEA Central Asia при поддержке Посольства США в Казахстане, а также партнёром регионального проекта «Лаборатория культурных лидеров Центральной Азии» в Кыргызстане, Таджикистане и Узбекистане совместно с Kuduk при поддержке SDC.',
      uz: "Shveytsariya Taraqqiyot va Hamkorlik Agentligi (SDC) qo'llab-quvvatlashida.\n\nXalqaro hamkorlik dasturi doirasida Art Station jamoasining ikki vakili Kuduk madaniyat markazi va IDEA Central Asia bilan hamkorlikni mustahkamlash maqsadida Bishkekka o'quv safariga chiqdi. Tashrif mahalliy fuqarolik jamiyati tashkilotlari bilan tanishuv uchrashuvlari va taqdimotlarini, madaniy makonlarga — jumladan, Qirg'iziston Milliy tasviriy san'at muzeyiga — tashriflarni, shuningdek, an'anaviy qirg'iz kurak to'qimachiligi kabi amaliy master-klasslarni o'z ichiga oldi.\n\nArt Station vakillari Kudukning loyihalarni hujjatlashtirish va boshqarish amaliyotlari bilan tanishdilar, IDEA Go Viral tashabbusini o'rgandilar va hamkorlikning mumkin bo'lgan formatlarini muhokama qildilar.\n\nTashrif natijasida ikkita mintaqaviy tashabbus boshlandi: Art Station IDEA Central Asia bilan hamkorlikda va AQShning Qozog'istondagi elchixonasi qo'llab-quvvatlashida Go Viral dasturining milliy hamkoriga, shuningdek, Kuduk bilan hamkorlikda va SDC qo'llab-quvvatlashida Qirg'iziston, Tojikiston va O'zbekistondagi \"Markaziy Osiyo madaniy yetakchilari laboratoriyasi\" mintaqaviy loyihasining hamkoriga aylandi.",
      en: 'Supported by the Swiss Agency for Development and Cooperation (SDC).\n\nAs part of an international cooperation program, two representatives of the Art Station team undertook a study trip to Bishkek to strengthen partnerships with the cultural center Kuduk and IDEA Central Asia. The visit included introductory meetings and presentations of local civil society organizations, visits to cultural spaces — including the Kyrgyz National Museum of Fine Arts — as well as hands-on workshops such as traditional Kyrgyz kurak textile making.\n\nThe Art Station representatives became acquainted with Kuduk’s practices in project documentation and management, studied the IDEA Go Viral initiative, and discussed potential formats for collaboration.\n\nAs a result of the visit, two regional initiatives were launched: Art Station became the national partner for the Go Viral program in cooperation with IDEA Central Asia and with the support of the U.S. Embassy in Kazakhstan, and also a partner of the regional project Laboratory for Cultural Leaders of Central Asia in Kyrgyzstan, Tajikistan, and Uzbekistan, in collaboration with Kuduk and with the support of SDC.',
    },
  },
  {
    id: 'exh_interweaving_2024',
    type: 'exhibition',
    hasFullContent: true,
    startDate: '2024-10-09',
    endDate: '2024-10-30',
    coverImage: 'images/events/covers/interweaving-colors-and-lines.webp',
    gallery: [],
    partnerIds: ['goethe-institut'],
    artistIds: [],
    title: {
      ru: 'Переплетение: цвета и линии',
      uz: "Chirmashuv: ranglar va chiziqlar",
      en: 'Interweaving: Colors and Lines',
    },
    description: {
      ru: 'Художница и куратор: Барбара Диманская (Германия). При поддержке: Гёте-Институт в Ташкенте, Художественный фонд Саксонии-Анхальт.\n\nВыставка «Переплетение: цвета и линии» представила работы немецкой художницы Барбары Диманской, созданные во время её двухмесячной резиденции в Art Station. За время пребывания в Узбекистане художница изучала местные ремесленные традиции, каллиграфию, архитектуру и визуальную культуру Самарканда и Бухары, переосмысляя увиденное через призму собственного художественного опыта.\n\nНа выставке были представлены работы, вдохновлённые узбекскими орнаментами и архитектурными формами, а также серия линогравюр, посвящённых немецким городам. Это сочетание позволило посетителям увидеть, как разные культурные коды вступают в диалог и находят неожиданные точки соприкосновения.\n\nПроект стал примером устойчивого культурного обмена, объединив международное и местное сообщества. Он показал, что Самарканд обладает значительным потенциалом для исследовательского туризма и художественной практики.',
      uz: "Rassom va kurator: Barbara Dimanski (Germaniya). Qo'llab-quvvatlovchi: Toshkent Gyote-Instituti, Saksoniya-Anhalt san'at fondi.\n\n\"Chirmashuv: ranglar va chiziqlar\" ko'rgazmasida nemis rassomi Barbara Dimanskining Art Stationdagi ikki oylik rezidensiyasi davomida yaratgan asarlari namoyish etildi. O'zbekistonda bo'lgan vaqtida rassom mahalliy hunarmandchilik an'analarini, xattotlikni, arxitekturani va Samarqand hamda Buxoroning vizual madaniyatini o'rgandi, ko'rganlarini o'z shaxsiy badiiy tajribasi orqali qayta talqin qildi.\n\nKo'rgazmada o'zbek naqshlari va arxitektura shakllaridan ilhomlangan asarlar, shuningdek, nemis shaharlariga bag'ishlangan linogravyuralar turkumi taqdim etildi. Bu uyg'unlik tashrif buyuruvchilarga turli madaniy kodlarning qanday muloqotga kirishishi va kutilmagan bog'lanish nuqtalarini topishini kuzatish imkonini berdi.\n\nLoyiha xalqaro va mahalliy jamoalarni birlashtirgan barqaror madaniy almashinuv namunasiga aylandi. U Samarqand tadqiqot turizmi va badiiy amaliyot uchun katta salohiyatga ega ekanini ko'rsatdi.",
      en: 'Artist and curator: Barbara Dimanski (Germany). Supported by: Goethe-Institut Tashkent, Art Foundation of Saxony-Anhalt.\n\nThe exhibition “Interweaving: Colors and Lines” showcased works by German artist Barbara Dimanski, created during her two-month residency at Art Station. During her stay in Uzbekistan, the artist explored local craft traditions, calligraphy, architecture, and the visual culture of Samarkand and Bukhara, reinterpreting what she saw through the lens of her personal artistic experience.\n\nThe exhibition featured pieces inspired by Uzbek ornaments and architectural forms, as well as a series of linocuts dedicated to German cities. This combination allowed visitors to witness how different cultural codes engage in dialogue and find unexpected points of connection.\n\nThe project became an example of sustainable cultural exchange, bringing together international and local communities. It demonstrated that Samarkand holds significant potential for research tourism and artistic practice.',
    },
  },
  {
    id: 'exh_flows_of_life_2024',
    type: 'exhibition',
    hasFullContent: true,
    startDate: '2024-10-18',
    endDate: '2024-11-18',
    coverImage: 'images/events/covers/streams-of-life.webp',
    gallery: [],
    partnerIds: [],
    artistIds: [],
    title: {
      // Официальное название по отчёту — "Flows of Life" (в раннем брифе
      // ошибочно значилось "Streams of Life").
      ru: 'Течение жизни',
      uz: "Hayot oqimi",
      en: 'Flows of Life',
    },
    description: {
      ru: 'Из коллекции Музея современного искусства «Рухсор». Куратор: Нормурод Негматов. Художники: Лола Ахатова, Малика Эргашева, Анзур Джаванбахтов, Анна Кабирова, Озод Негматов, Холида Талатова, Нейла Усманова. Совместно с Музеем современного искусства «Рухсор», при поддержке Академии художеств Узбекистана.\n\nВыставка «Течение жизни» была организована в рамках X (10-й) Ташкентской международной биеннале современного искусства и приурочена ко Дню города Самарканда. Проект представил работы из коллекции Музея современного искусства «Рухсор» и исследовал динамику человеческого существования — личностный рост, эмоциональные состояния, межличностные отношения и взаимодействие с природой. Выставка подчёркивала идею трансформации как неотъемлемого условия жизни и затрагивала вопросы идентичности, социальной справедливости и влияния технологий на современное общество.\n\nПрограмма включала кураторские экскурсии, публичные лекции деятелей культуры, творческую лабораторию для детей и панельную дискуссию «Связи и трансформации в истории и искусстве региона». Эти события вызвали живой интерес публики к современному искусству и способствовали диалогу между разными аудиториями.',
      uz: "\"Ruhsor\" zamonaviy san'at muzeyi kolleksiyasidan. Kurator: Normurod Negmatov. Rassomlar: Lola Ahatova, Malika Ergasheva, Anzur Javanbaxtov, Anna Kabirova, Ozod Negmatov, Xolida Talatova, Neyla Usmanova. \"Ruhsor\" zamonaviy san'at muzeyi bilan hamkorlikda, O'zbekiston Badiiy akademiyasi qo'llab-quvvatlashida.\n\n\"Hayot oqimi\" ko'rgazmasi X (10-) Toshkent xalqaro zamonaviy san'at biennalesi doirasida tashkil etilgan bo'lib, Samarqand shahar kuniga bag'ishlandi. Loyiha \"Ruhsor\" zamonaviy san'at muzeyi kolleksiyasidan asarlarni taqdim etdi va inson mavjudligining dinamikasini — shaxsiy o'sish, hissiy holatlar, insonlararo munosabatlar va tabiat bilan o'zaro ta'sirni o'rgandi. Ko'rgazma transformatsiya g'oyasini hayotning ajralmas sharti sifatida ta'kidladi hamda o'ziga xoslik, ijtimoiy adolat va texnologiyalarning zamonaviy jamiyatga ta'siri masalalarini ko'tardi.\n\nDastur kuratorlik ekskursiyalarini, madaniyat arboblarining ommaviy ma'ruzalarini, bolalar uchun ijodiy laboratoriyani va \"Mintaqa tarixi va san'atidagi aloqalar va transformatsiyalar\" mavzusidagi panel munozarasini o'z ichiga oldi. Ushbu tadbirlar jamoatchilikning zamonaviy san'atga jonli qiziqishini uyg'otdi va turli auditoriyalar o'rtasida muloqotga xizmat qildi.",
      en: 'From the collection of the Ruhsor Museum of Contemporary Art. Curator: Normurod Negmatov. Artists: Lola Akhatova, Malika Ergasheva, Anzur Javanbakhtov, Anna Kabirova, Ozod Negmatov, Kholida Talatova, Neila Usmanova. In collaboration with the Ruhsor Museum of Contemporary Art, supported by the Academy of Arts of Uzbekistan.\n\nThe exhibition “Flows of Life” was organized as part of the X (10th) Tashkent International Biennale of Contemporary Art and dedicated to the City Day of Samarkand. The project presented works from the collection of the Ruhsor Museum of Contemporary Art and explored the dynamics of human existence — personal growth, emotional states, interpersonal relationships, and interaction with nature. The exhibition emphasized the idea of transformation as an inseparable condition of life and addressed questions of identity, social justice, and the impact of technology on contemporary society.\n\nThe program included curated tours, public lectures by cultural figures, a creative laboratory for children, and a panel discussion titled “Connections and Transformations in the History and Art of the Region.” These events sparked lively public interest in contemporary art and fostered dialogue between diverse audiences.',
    },
  },

  // --- 2025 ---
  {
    id: 'ws_room_of_ones_own_2025',
    type: 'workshop',
    hasFullContent: true,
    startDate: '2025-03-01',
    coverImage: 'images/events/covers/own-room.webp',
    gallery: [],
    partnerIds: ['sdc'],
    artistIds: [],
    title: {
      ru: 'Своя комната',
      uz: "O'z xonasi",
      en: "A Room of One's Own",
    },
    description: {
      ru: 'Кураторы: Хеирён Ли и Малика Зайниддинова. Организовано generalkunst x Qizlar Collective при поддержке Швейцарского агентства по развитию и сотрудничеству (SDC) и Arts Council Korea.\n\nМастер-класс «Своя комната» под руководством художницы Хеирён Ли объединил участниц для переосмысления домашнего труда и заботы через телесные практики и исследование пространства. Участницы изучали границы между личным и коллективным, учась создавать временные формы взаимодействия, основанные на памяти, движении и наблюдении. Проект подчёркивал важность женской автономии в локальном контексте и открывал пространство для общего опыта и обмена.\n\nМастер-класс стал важной инициативой по укреплению культурного вовлечения и развитию инклюзивных форматов участия, углубляя понимание социальных трансформаций в современной городской жизни.',
      uz: "Kuratorlar: Xyerion Li va Malika Zayniddinova. generalkunst x Qizlar Collective tomonidan tashkil etilgan, Shveytsariya Taraqqiyot va Hamkorlik Agentligi (SDC) va Arts Council Korea qo'llab-quvvatlashida.\n\nRassom Xyerion Li rahbarligidagi \"O'z xonasi\" master-klassi ishtirokchilarni tana amaliyotlari va makonni o'rganish orqali uy mehnati va g'amxo'rlikni qayta anglash uchun birlashtirdi. Ishtirokchilar shaxsiy va jamoaviy o'rtasidagi chegaralarni o'rganib, xotira, harakat va kuzatuvga asoslangan vaqtinchalik o'zaro munosabat shakllarini yaratishni o'rgandilar. Loyiha mahalliy kontekstda ayollar avtonomiyasining ahamiyatini ta'kidladi va umumiy tajriba hamda almashinuv uchun makon ochdi.\n\nMaster-klass madaniy jalb etishni mustahkamlash va inklyuziv ishtirok formatlarini rivojlantirish bo'yicha muhim tashabbusga aylandi, zamonaviy shahar hayotidagi ijtimoiy transformatsiyalarni tushunishni chuqurlashtirdi.",
      en: 'Curators: Hyeryung Lee and Malika Zayniddinova. Organized by generalkunst x Qizlar Collective, supported by the Swiss Development and Cooperation Agency (SDC) and the Arts Council Korea.\n\nThe workshop “A Room of One’s Own”, led by artist Hyeryeon Lee, brought together participants to reconsider domestic labor and care through bodily practices and spatial exploration. The participants examined the boundaries between the personal and the collective, learning to create temporary forms of interaction rooted in memory, movement, and observation. The project emphasized the importance of women’s autonomy in the local context and opened a space for shared experience and exchange.\n\nThe workshop became an important initiative for strengthening cultural engagement and developing inclusive participation formats, deepening the understanding of social transformations in contemporary urban life.',
    },
  },
  {
    id: 'lec_animation_for_everyone_2025',
    type: 'lecture',
    hasFullContent: true,
    startDate: '2025-03-25',
    coverImage: 'images/events/covers/animation-for-everyone.webp',
    gallery: [],
    partnerIds: [],
    artistIds: [],
    title: { ru: 'Анимация для всех', uz: "Hamma uchun animatsiya", en: 'Animation for Everyone' },
    description: {
      ru: 'Лектор: Данте Рустав.\n\nЛекция Данте Рустава — режиссёра и основателя международного анимационного фестиваля TIAF — познакомила широкую аудиторию с возможностями анимации как доступной и выразительной формы творчества. Она объединила людей разных поколений и привлекла особенно много юных участников. Слушатели узнали о современных инструментах создания анимации без формального образования и о том, как такие работы могут получить признание на международных фестивалях.\n\nЛекция стала первым шагом на пути к созданию школы анимации в Самарканде и заложила основу для будущих образовательных и творческих программ, запланированных на следующий год, способствуя международному сотрудничеству.',
      uz: "Ma'ruzachi: Dante Rustav.\n\nXalqaro TIAF animatsiya festivalining rejissyori va asoschisi Dante Rustavning ma'ruzasi keng auditoriyani animatsiyaning ijodning mavjud va ifodali shakli sifatidagi imkoniyatlari bilan tanishtirdi. U turli avlod vakillarini birlashtirdi va ayniqsa ko'plab yosh ishtirokchilarni jalb qildi. Tinglovchilar rasmiy ta'limsiz animatsiya yaratishning zamonaviy vositalari va bunday asarlar xalqaro festivallarda qanday tan olinishi mumkinligi haqida bilib oldilar.\n\nMa'ruza Samarqandda animatsiya maktabini tashkil etish yo'lidagi birinchi qadam bo'ldi va kelgusi yilga rejalashtirilgan bo'lajak ta'lim va ijodiy dasturlar uchun asos yaratdi, xalqaro hamkorlikni rivojlantirdi.",
      en: 'Lecturer: Dante Rustav.\n\nThe lecture by Dante Rustav — director and founder of the international animation festival TIAF — introduced a wide audience to the possibilities of animation as an accessible and expressive form of creativity. It brought together people from different generations and attracted a particularly large number of young participants. The audience learned about modern tools for creating animation without formal training and how such works can gain recognition at international festivals.\n\nThe lecture became the first step toward establishing an animation school in Samarkand and laid the foundation for future educational and creative programs planned for the coming year, promoting international collaboration.',
    },
  },
  {
    id: 'lec_islamic_geometric_ornament_2025',
    type: 'lecture',
    hasFullContent: true,
    startDate: '2025-04-07',
    coverImage: 'images/events/covers/the-history-of-islamic-geometric-ornament.webp',
    gallery: [],
    partnerIds: [],
    artistIds: [],
    title: {
      ru: 'История исламского геометрического орнамента',
      uz: "Islom geometrik ornamentining tarixi",
      en: 'The History of Islamic Geometric Ornament',
    },
    description: {
      ru: 'Лектор: Андрей Щетников.\n\nВ рамках публичной программы историк науки, выпускник Новосибирского государственного университета Андрей Щетников прочитал лекцию о происхождении и эволюции геометрической орнаментики в исламской архитектуре. Участники изучили художественное наследие мечетей, медресе и мавзолеев с исторической и научной точки зрения, узнав, как математическая логика форм стала неотъемлемой частью художественного языка исламской культуры.\n\nЛекция вызвала большой интерес и живую дискуссию. Слушатели увидели, как наука и искусство дополняют и раскрывают друг друга, углубляя понимание архитектурного наследия. Мероприятие подтвердило значимость междисциплинарного подхода, соединяющего историю, эстетику и научное знание.',
      uz: "Ma'ruzachi: Andrey Shchetnikov.\n\nOmmaviy dastur doirasida fan tarixchisi, Novosibirsk davlat universiteti bitiruvchisi Andrey Shchetnikov islom arxitekturasidagi geometrik naqshning kelib chiqishi va evolyutsiyasi haqida ma'ruza o'qidi. Ishtirokchilar masjid, madrasa va maqbaralarning badiiy merosini tarixiy va ilmiy nuqtai nazardan o'rgandilar hamda shakllarning matematik mantig'i islom madaniyati badiiy tilining ajralmas qismiga qanday aylanganini bilib oldilar.\n\nMa'ruza katta qiziqish va jonli munozaraga sabab bo'ldi. Tinglovchilar fan va san'at bir-birini qanday to'ldirishi va ochib berishini ko'rdilar, bu esa arxitektura merosini tushunishni chuqurlashtirdi. Tadbir tarix, estetika va ilmiy bilimni bog'lovchi fanlararo yondashuvning ahamiyatini yana bir bor tasdiqladi.",
      en: 'Lecturer: Andrey Shchetnikov.\n\nAs part of the public program, historian of science and graduate of Novosibirsk State University Andrey Shchetnikov delivered a lecture on the origins and evolution of geometric ornamentation in Islamic architecture. Participants explored the artistic heritage of mosques, madrasas, and mausoleums from a historical and scientific perspective, discovering how the mathematical logic of forms became an integral part of the artistic language of Islamic culture.\n\nThe lecture sparked great interest and lively discussion. Attendees saw how science and art complement and reveal one another, deepening the understanding of architectural heritage. The event reinforced the importance of an interdisciplinary approach that connects history, aesthetics, and scientific knowledge.',
    },
  },
  {
    id: 'lec_poetic_translation_2025',
    type: 'lecture',
    hasFullContent: true,
    startDate: '2025-04-09',
    coverImage: 'images/events/covers/the-art-of-poetic-translation.webp',
    gallery: [],
    partnerIds: [],
    artistIds: [],
    title: { ru: 'Искусство поэтического перевода', uz: "She'riy tarjima san'ati", en: 'The Art of Poetic Translation' },
    description: {
      ru: 'Лектор: Андрей Щетников.\n\nИдея этой лекции поэта и переводчика Андрея Щетникова возникла после его предыдущего выступления об исламском геометрическом орнаменте, которое было тепло встречено публикой и привело к повторному приглашению. Новая лекция привлекла много посетителей и показала, как поэтический перевод служит культурным мостом — сохраняя литературное наследие и одновременно делая его доступным для современных читателей.\n\nДля слушателей встреча стала вдохновляющим опытом, а для площадки — ярким примером растущего запроса на интеллектуальный диалог вокруг искусства и литературы.',
      uz: "Ma'ruzachi: Andrey Shchetnikov.\n\nShoir va tarjimon Andrey Shchetnikovning ushbu ma'ruzasi g'oyasi uning ilgari islom geometrik ornamenti haqidagi chiqishidan so'ng tug'ildi — o'sha ma'ruza tomoshabinlar tomonidan iliq kutib olingan va uni yana taklif qilishga sabab bo'lgan edi. Yangi ma'ruza ko'plab tashrif buyuruvchilarni jalb qildi va she'riy tarjima adabiy merosni saqlab qolgan holda uni zamonaviy o'quvchilar uchun qanday qilib qulay qilishi, madaniy ko'prik vazifasini bajarishini ko'rsatdi.\n\nTinglovchilar uchun uchrashuv ilhomlantiruvchi tajribaga aylandi, makon uchun esa — san'at va adabiyot atrofidagi intellektual muloqotga bo'lgan talabning o'sib borayotganining yorqin namunasi bo'ldi.",
      en: 'Lecturer: Andrey Shchetnikov.\n\nThe idea for this lecture by poet and translator Andrey Shchetnikov emerged after his previous talk on Islamic geometric ornamentation, which received an enthusiastic response from the audience and led to his return invitation. The new lecture attracted a lot of visitors and demonstrated how poetic translation serves as a cultural bridge — preserving literary heritage while making it accessible to contemporary readers.\n\nFor the audience, the meeting became an inspiring experience, and for the space — a vivid example of the growing demand for intellectual dialogue around art and literature.',
    },
  },
  {
    id: 'lec_calendars_stars_asia_2025',
    type: 'lecture',
    hasFullContent: true,
    startDate: '2025-05-05',
    coverImage: 'images/events/covers/calendars-and-stars-of-ancient-asia.webp',
    gallery: [],
    partnerIds: [],
    artistIds: [],
    title: { ru: 'Календари и звёзды древней Азии', uz: "Qadimgi Osiyoning taqvimlari va yulduzlari", en: 'Calendars and Stars of Ancient Asia' },
    description: {
      ru: 'Лектор: Константин Сторожук.\n\nКонстантин Сторожук, доктор физико-математических наук, научный сотрудник Института математики Сибирского отделения РАН и Новосибирского государственного университета, прочитал лекцию «Календари и звёзды древней Азии».\n\nВыступление вызвало большой интерес публики и раскрыло, как древние учёные определяли продолжительность года и почему 365 дней легли в основу календаря. Лектор познакомил слушателей с астрономическими инструментами Востока, методами измерения времени и выдающимися открытиями региона в период его научного расцвета.\n\nУчастники узнали, как древняя астрономия сочетала в себе науку, философию и историю, и узнали о судьбе восточной науки — от её золотого века до периода упадка.',
      uz: "Ma'ruzachi: Konstantin Storojuk.\n\nFizika-matematika fanlari doktori, Rossiya Fanlar akademiyasi Sibir bo'limi Matematika instituti va Novosibirsk davlat universiteti ilmiy xodimi Konstantin Storojuk \"Qadimgi Osiyoning taqvimlari va yulduzlari\" mavzusidagi ma'ruzani o'qidi.\n\nMa'ruza jamoatchilikning katta qiziqishiga sabab bo'ldi va qadimgi olimlar yil davomiyligini qanday aniqlaganini, nima uchun 365 kun taqvim asosiga aylanganini ochib berdi. Ma'ruzachi tinglovchilarni Sharqning astronomik asboblari, vaqtni o'lchash usullari va mintaqaning ilmiy gullab-yashnagan davridagi ajoyib kashfiyotlari bilan tanishtirdi.\n\nIshtirokchilar qadimgi astronomiya fan, falsafa va tarixni qanday birlashtirganini bilib oldilar hamda Sharq fanining taqdiri — oltin davridan tanazzul davrigacha bo'lgan yo'lini o'rgandilar.",
      en: 'Lecturer: Konstantin Storozhuk.\n\nKonstantin Storozhuk, Doctor of Physical and Mathematical Sciences and researcher at the Institute of Mathematics of the Siberian Branch of the Russian Academy of Sciences and Novosibirsk State University, delivered a lecture titled “Calendars and Stars of Ancient Asia.”\n\nThe talk sparked great public interest and offered insights into how ancient scholars determined the length of the year and why 365 days became the foundation of the calendar. The lecturer introduced the audience to the astronomical instruments of the East, methods of time measurement, and the region’s remarkable discoveries during its scientific flourishing.\n\nParticipants learned how ancient astronomy combined science, philosophy, and history, and discovered the fate of Eastern science — from its golden age to its period of decline.',
    },
  },
  {
    id: 'net_gonight_samarkand_2025',
    type: 'networking',
    hasFullContent: true,
    startDate: '2025-06-04',
    endDate: '2025-06-29',
    coverImage: 'images/events/covers/gonight-in-samarkand-within-the-goviral-program.webp',
    gallery: [],
    partnerIds: ['idea-ca'],
    artistIds: [],
    title: { ru: 'GoNight Samarkand', uz: 'GoNight Samarkand', en: 'GoNight Samarkand' },
    description: {
      ru: 'При поддержке Дипломатической миссии США в Казахстане.\n\nВ начале лета в Самарканде прошли два нетворкинг-мероприятия GoNight, направленные на обмен идеями и налаживание профессиональных связей среди представителей нового поколения из сфер бизнеса, науки и креативной экономики. Встречи были организованы в рамках GoViral — региональной программы, реализуемой IDEA Central Asia при поддержке Дипломатической миссии США в Казахстане.\n\nВечера стали площадкой для вдохновения, диалога и новых коллабораций. Используя формат «Живой библиотеки», участники получили возможность напрямую пообщаться с приглашёнными экспертами, а интенсивный нетворкинг способствовал развитию будущих совместных инициатив.\n\nТёплая и открытая атмосфера подчеркнула важность живого общения и стала важным шагом на пути к укреплению культурного и профессионального сообщества Самарканда.',
      uz: "AQShning Qozog'istondagi diplomatik missiyasi qo'llab-quvvatlashida.\n\nYoz boshida Samarqandda biznes, fan va ijodiy iqtisodiyot sohalaridan yangi avlod vakillari o'rtasida fikr almashish va professional aloqalar o'rnatishga qaratilgan ikkita GoNight networking tadbiri bo'lib o'tdi. Uchrashuvlar IDEA Central Asia tomonidan AQShning Qozog'istondagi diplomatik missiyasi qo'llab-quvvatlashida amalga oshirilayotgan mintaqaviy dastur — GoViral doirasida tashkil etildi.\n\nKechqurunlar ilhomlanish, muloqot va yangi hamkorliklar uchun maydonga aylandi. \"Jonli kutubxona\" formatidan foydalangan holda ishtirokchilar taklif etilgan ekspertlar bilan bevosita muloqot qilish imkoniga ega bo'lishdi, jadal networking esa kelajakdagi qo'shma tashabbuslarning rivojlanishiga ko'maklashdi.\n\nIliq va ochiq muhit shaxsiy muloqotning ahamiyatini yana bir bor ko'rsatdi va Samarqandning madaniy hamda professional jamoasini mustahkamlash yo'lidagi muhim qadam bo'ldi.",
      en: 'Supported by the U.S. Diplomatic Mission to Kazakhstan.\n\nAt the beginning of the summer, Samarkand hosted two GoNight networking events aimed at exchanging ideas and building professional connections among representatives of the new generation from the fields of business, science, and the creative economy. The meetings were organized as part of GoViral — a regional program implemented by IDEA Central Asia with the support of the U.S. Diplomatic Mission to Kazakhstan.\n\nThe evenings served as a platform for inspiration, dialogue, and new collaborations. Using the “Human Library” format, participants had the opportunity to engage directly with invited experts, while intensive networking encouraged the development of future joint initiatives.\n\nThe warm and open atmosphere highlighted the importance of in-person communication and marked an important step toward strengthening the cultural and professional community of Samarkand.',
    },
  },
  {
    id: 'net_gonight_tashkent_2025',
    type: 'networking',
    hasFullContent: true,
    startDate: '2025-09-21',
    coverImage: 'images/events/covers/gonight-in-tashkent-within-the-goviral-program.webp',
    gallery: [],
    partnerIds: ['idea-ca'],
    artistIds: [],
    title: { ru: 'GoNight Tashkent', uz: 'GoNight Tashkent', en: 'GoNight Tashkent' },
    description: {
      ru: 'При поддержке Дипломатической миссии США в Казахстане.\n\nВ Ташкенте прошла встреча Go Night, посвящённая творческим проектам и культурным инициативам Центральной Азии. Участники обсудили свой опыт в сфере креативных индустрий, рассмотрели развитие локальных инициатив и совместно поработали над созданием Культурной карты Центральной Азии — уникальной базы данных творческих пространств, проектов и сообществ.\n\nВечер прошёл в формате открытого разговора, короткой интерактивной сессии и нетворкинга. Участники делились историями, знакомились друг с другом, обменивались идеями и находили вдохновение. Тёплая и дружественная атмосфера способствовала сотрудничеству и появлению новых проектов и партнёрств.',
      uz: "AQShning Qozog'istondagi diplomatik missiyasi qo'llab-quvvatlashida.\n\nToshkentda Markaziy Osiyoning ijodiy loyihalari va madaniy tashabbuslariga bag'ishlangan Go Night uchrashuvi bo'lib o'tdi. Ishtirokchilar ijodiy industriyalar sohasidagi tajribalarini muhokama qildilar, mahalliy tashabbuslarning rivojlanishini ko'rib chiqdilar va Markaziy Osiyo Madaniy xaritasi — ijodiy makonlar, loyihalar va jamoalarning noyob ma'lumotlar bazasini yaratish ustida birgalikda ishladilar.\n\nKechqurun ochiq suhbat, qisqa interaktiv sessiya va networking formatida o'tdi. Ishtirokchilar hikoyalar bilan bo'lishdilar, bir-birlari bilan tanishdilar, g'oyalar almashdilar va ilhom topdilar. Iliq va do'stona muhit hamkorlikka ko'maklashdi hamda yangi loyihalar va hamkorliklarning paydo bo'lishiga hissa qo'shdi.",
      en: 'Supported by the U.S. Diplomatic Mission to Kazakhstan.\n\nA Go Night meeting took place in Tashkent, dedicated to creative projects and cultural initiatives across Central Asia. Participants discussed their experiences in the field of creative industries, explored the development of local initiatives, and collaborated on creating a Cultural Map of Central Asia — a unique database of creative spaces, projects, and communities.\n\nThe evening unfolded in a format of open conversation, a short interactive session, and networking. Participants shared stories, connected with one another, exchanged ideas, and found inspiration. The warm and friendly atmosphere encouraged collaboration and contributed to the emergence of new projects and partnerships.',
    },
  },
  {
    id: 'fest_samarkand_urban_night_2025',
    type: 'festival',
    hasFullContent: true,
    startDate: '2025-10-17',
    endDate: '2025-10-19',
    coverImage: 'images/events/covers/samarkand-urban-night-within-the-goviral-program.webp',
    gallery: [],
    partnerIds: ['idea-ca'],
    artistIds: [],
    title: { ru: 'Samarkand Urban Night', uz: 'Samarkand Urban Night', en: 'Samarkand Urban Night' },
    description: {
      ru: 'При поддержке Дипломатической миссии США в Казахстане.\n\nGoViral Samarkand Urban Night прошёл в Самарканде с 17 по 19 октября 2025 года, став яркой площадкой для диалога между культурой, бизнесом, технологиями и образованием.\n\nПервый день был посвящён полевым исследованиям и беседам с местными жителями — было опрошено около 100 человек и организована нетворкинг-сессия. Второй день прошёл в Art Station, где участники посетили мастер-классы по абру бахор, созданию украшений из переработанного пластика, технике коллажа и визуальному мышлению. Программа также включала публичные лекции о креативном предпринимательстве и стартапах, цифровых и IT-решениях для городов, урбанистике и устойчивых инновациях, а также о лидерских навыках будущего, дополненные выставками, локальным дизайн-маркетом, музыкальными выступлениями и чтениями современных узбекских поэтов.\n\nТретий день был посвящён молодёжному предпринимательству — участники разрабатывали концепции локальных бизнес-инициатив. Фестиваль завершился джазовым концертом группы Silk Road, объединившим участников со всей Центральной Азии.',
      uz: "AQShning Qozog'istondagi diplomatik missiyasi qo'llab-quvvatlashida.\n\nGoViral Samarkand Urban Night 2025-yil 17–19-oktabr kunlari Samarqandda bo'lib o'tdi va madaniyat, biznes, texnologiya va ta'lim o'rtasidagi muloqot uchun jonli maydonga aylandi.\n\nBirinchi kun dala tadqiqotlari va mahalliy aholi bilan suhbatlarga bag'ishlandi — taxminan 100 kishi so'rovdan o'tkazildi va networking sessiyasi tashkil etildi. Ikkinchi kun Art Stationda o'tkazildi, u yerda ishtirokchilar abru bahor, qayta ishlangan plastikdan zargarlik buyumlari yasash, kollaj texnikasi va vizual tafakkur bo'yicha master-klasslarda qatnashdilar. Dastur, shuningdek, ijodiy tadbirkorlik va startaplar, shaharlar uchun raqamli va IT-yechimlar, urbanistika va barqaror innovatsiyalar hamda kelajak yetakchilik ko'nikmalari haqidagi ommaviy ma'ruzalarni o'z ichiga oldi, bular ko'rgazmalar, mahalliy dizayn-bozori, musiqiy chiqishlar va zamonaviy o'zbek shoirlarining she'rxonligi bilan boyitildi.\n\nUchinchi kun yoshlar tadbirkorligiga bag'ishlandi — ishtirokchilar mahalliy biznes tashabbuslari uchun kontseptsiyalar ishlab chiqdilar. Festival Markaziy Osiyoning turli burchaklaridan kelgan ishtirokchilarni birlashtirgan Silk Road guruhining jaz kontserti bilan yakunlandi.",
      en: 'Supported by the U.S. Diplomatic Mission to Kazakhstan.\n\nGoViral Samarkand Urban Night took place in Samarkand from October 17 to 19, 2025, becoming a vibrant platform for dialogue between culture, business, technology, and education.\n\nThe first day was dedicated to field research and conversations with local residents — around 100 people were surveyed and a networking session was organized. The second day was held at Art Station, where participants attended workshops on Abri Bahor, creating jewelry from recycled plastic, collage techniques, and visual thinking. The program also featured public lectures on creative entrepreneurship and startups, digital and IT solutions for cities, urbanism and sustainable innovation, and leadership skills for the future, complemented by exhibitions, a local design market, musical performances, and readings by contemporary Uzbek poets.\n\nThe third day focused on youth entrepreneurship, during which participants developed concepts for local business initiatives. The festival concluded with a jazz concert by the band Silk Road, bringing together participants from across Central Asia.',
    },
  },
  {
    id: 'lec_subpersonalities_shadow_2025',
    type: 'lecture',
    hasFullContent: true,
    startDate: '2025-10-25',
    coverImage: 'images/events/covers/subpersonalities-and-the-shadow-meeting-your-true-.webp',
    gallery: [],
    partnerIds: [],
    artistIds: [],
    title: {
      ru: 'Субличности и Тень: встреча с истинным собой',
      uz: "Sub-shaxslar va Soya: haqiqiy \"men\" bilan uchrashuv",
      en: 'Subpersonalities and the Shadow: Meeting Your True Self',
    },
    description: {
      ru: 'Лектор: Лилия Алтаева. При поддержке медиапроекта Nemolchi.Uz против гендерного насилия в Узбекистане.\n\nВ рамках выставки NeUyat состоялась лекция, на которой участницы познакомились с понятием субличностей и психологическим феноменом «Тени». Обсуждение было сосредоточено на том, как женская социализация формирует внутренние роли — «удобная», «сильная», «спасательница» — и почему эти идентичности часто скрывают подавленные эмоции: гнев, желание, чувственность и внутреннюю силу.\n\nЛектор объяснила, как стыд и контроль над телом влияют на восприятие себя и создают дистанцию от подлинного «Я». Участницы получили практические инструменты для распознавания своей Тени и возвращения права быть живой — чувствовать, желать и делать выбор.\n\nПрограмма включала теоретическое введение, мягкие соматические практики и направленные упражнения, нацеленные на развитие самосознания, заботы о себе и внутренней честности, создавая поддерживающую атмосферу для личных открытий.',
      uz: "Ma'ruzachi: Liliya Altayeva. O'zbekistonda gender zo'ravonligiga qarshi Nemolchi.Uz media loyihasi qo'llab-quvvatlashida.\n\nNeUyat ko'rgazmasi doirasida o'tkazilgan ma'ruzada ishtirokchilar sub-shaxslar tushunchasi va \"Soya\" psixologik hodisasi bilan tanishtirildi. Muhokama ayollar sotsializatsiyasi ichki rollarni — \"qulay\", \"kuchli\", \"qutqaruvchi\" — qanday shakllantirishi va bu identifikatsiyalar nima uchun ko'pincha g'azab, istak, hissiylik va ichki kuch kabi bostirilgan hissiyotlarni yashirishi haqida bo'ldi.\n\nMa'ruzachi uyat va tana ustidan nazorat o'zini his qilishga qanday ta'sir qilishi va haqiqiy \"Men\"dan uzoqlashtirishini tushuntirdi. Ishtirokchilar o'z Soyalarini tanish va yashash, his qilish, xohlash va tanlov qilish huquqini qayta qo'lga kiritish uchun amaliy vositalarni oldilar.\n\nDastur nazariy kirish qismini, yumshoq somatik amaliyotlarni va o'z-o'zini anglash, o'ziga g'amxo'rlik va ichki halollikni rivojlantirishga qaratilgan boshqariladigan mashqlarni o'z ichiga oldi, bu esa shaxsiy kashfiyotlar uchun qo'llab-quvvatlovchi muhit yaratdi.",
      en: 'Lecturer: Lilia Altaeva. Supported by the media project Nemolchi.Uz against gender-based violence in Uzbekistan.\n\nAs part of the NeUyat exhibition, a lecture was held in which participants were introduced to the concept of subpersonalities and the psychological phenomenon of the “Shadow.” The discussion focused on how women’s socialization shapes internal roles—“the convenient one,” “the strong one,” “the rescuer”—and why these identities often hide suppressed emotions such as anger, desire, sensuality, and inner power.\n\nThe lecturer explained how shame and bodily control influence one’s sense of self and create distance from one’s authentic “I”. Participants received practical tools for recognizing their Shadow and reclaiming the right to be alive—to feel, to want, and to make choices.\n\nThe program included a theoretical introduction, gentle somatic practices, and guided exercises aimed at developing self-awareness, self-care, and inner honesty, creating a supportive environment for personal insight.',
    },
  },
  {
    id: 'perf_temporary_office_2025',
    type: 'performance',
    hasFullContent: true,
    startDate: '2025-03-01',
    coverImage: 'images/events/covers/temporary-office.webp',
    gallery: [],
    partnerIds: ['sdc'],
    artistIds: [],
    title: { ru: 'Временный офис', uz: "Vaqtinchalik ofis", en: 'Temporary Office' },
    description: {
      ru: 'Кураторы: Хеирён Ли и Малика Зайниддинова. При поддержке Швейцарского агентства по развитию и сотрудничеству (SDC) и Азиатской ассоциации домашнего труда и заботы.\n\n«Временный офис» — партиципаторный перформанс, исследующий женский труд, заботу и социальные роли. Разворачиваясь в рамках вымышленной Азиатской ассоциации домашнего труда и заботы, посетители присоединялись к художницам в повседневных занятиях — уборке, готовке, заботе о других — раскрывая как невидимость, так и фундаментальную значимость женского труда.\n\nПерформансу предшествовали мастер-классы с женщинами из Узбекистана. Их истории, жесты и личные вещи стали частью финального действия, превратив «Временный офис» в общее пространство коллективной памяти и временной солидарности.\n\nПроект открыл диалог о социальной ценности заботливого труда и укрепил чувство общности и взаимной поддержки.',
      uz: "Kuratorlar: Xyerion Li va Malika Zayniddinova. Shveytsariya Taraqqiyot va Hamkorlik Agentligi (SDC) va Osiyo uy mehnati va g'amxo'rlik assotsiatsiyasi qo'llab-quvvatlashida.\n\n\"Vaqtinchalik ofis\" — ayollar mehnati, g'amxo'rlik ishi va ijtimoiy rollarni o'rganuvchi partitsipativ performans edi. O'ylab topilgan Osiyo uy mehnati va g'amxo'rlik assotsiatsiyasi doirasida sodir bo'lib, tashrif buyuruvchilar rassomlar bilan birga tozalash, ovqat pishirish va boshqalarga g'amxo'rlik qilish kabi kundalik ishlarga qo'shildilar, bu esa ayollar mehnatining ham ko'rinmasligini, ham asosiy ahamiyatini ochib berdi.\n\nPerformansdan oldin O'zbekistonlik ayollar bilan master-klasslar o'tkazildi. Ularning hikoyalari, imo-ishoralari va shaxsiy buyumlari yakuniy harakatning bir qismiga aylanib, \"Vaqtinchalik ofis\"ni jamoaviy xotira va vaqtinchalik hamjihatlikning umumiy makoniga aylantirdi.\n\nLoyiha g'amxo'rlik mehnatining ijtimoiy qadriyati haqida muloqotni ochdi va jamoa hissi hamda o'zaro yordamni mustahkamladi.",
      en: 'Curators: Hyeryung Lee and Malika Zayniddinova. Supported by Swiss Development and Cooperation Agency (SDC) and the Asian Association of Domestic Labour and Care.\n\n“Temporary Office” was a participatory performance exploring women’s labor, care work, and social roles. Set within the fictional Asian Association of Domestic Labor and Care, visitors joined the artists in everyday activities such as cleaning, cooking, and caring for others, revealing both the invisibility and the fundamental importance of women’s labor.\n\nThe performance was preceded by workshops with women from Uzbekistan. Their stories, gestures, and personal objects became part of the final action, turning Temporary Office into a shared space of collective memory and temporary solidarity.\n\nThe project opened a dialogue on the social value of care work and strengthened a sense of community and mutual support.',
    },
  },
  {
    id: 'con_alpha_ray_2025',
    type: 'concert',
    hasFullContent: true,
    startDate: '2025-05-11',
    coverImage: 'images/events/covers/alpha-ray.webp',
    gallery: [],
    partnerIds: ['sdc'],
    artistIds: [],
    title: { ru: 'Alpha-ray', uz: 'Alpha-ray', en: 'Alpha-ray' },
    description: {
      ru: 'Исполнители: Alpha-ray (Швейцария). При поддержке Швейцарского агентства по развитию и сотрудничеству (SDC) и Посольства Швейцарии.\n\nШвейцарская группа Alpha-ray представила уникальное сочетание трип-хопа, джаза и синти-попа, создав многослойное атмосферное звучание, отражающее повседневный опыт и внутренние трансформации. Концерт прошёл под открытым небом во дворе Art Station и собрал большую аудиторию. Энергия исполнителей, оригинальное сочетание стилей и поэтичность текстов нашли живой отклик у слушателей.\n\nПосле выступления зрители активно общались с музыкантами, делясь впечатлениями и обсуждая музыку, что создало пространство для открытого диалога и художественного обмена. Концерт показал, как международные музыкальные инициативы способны укреплять культурные связи и стимулировать интерес к новым формам искусства.',
      uz: "Ijrochilar: Alpha-ray (Shveytsariya). Shveytsariya Taraqqiyot va Hamkorlik Agentligi (SDC) va Shveytsariya elchixonasi qo'llab-quvvatlashida.\n\nShveytsariyalik Alpha-ray guruhi trip-hop, jaz va sinti-popning o'ziga xos uyg'unligini taqdim etib, kundalik tajribalar va ichki o'zgarishlarni aks ettiruvchi ko'p qatlamli, atmosferali ovoz yaratdi. Konsert Art Station hovlisida ochiq havoda o'tkazildi va katta auditoriyani jamladi. Ijrochilarning energiyasi, uslublarning o'ziga xos uyg'unligi va matnlarning she'riyligi tinglovchilarda kuchli aks-sado uyg'otdi.\n\nChiqishdan so'ng tomoshabinlar musiqachilar bilan faol muloqot qilib, taassurotlar bilan bo'lishdilar va musiqani muhokama qildilar — bu ochiq muloqot va badiiy almashinuv uchun maydon yaratdi. Konsert xalqaro musiqiy tashabbuslar madaniy aloqalarni qanday mustahkamlashi va san'atning yangi shakllariga qiziqishni qanday rag'batlantirishi mumkinligini ko'rsatdi.",
      en: 'Performers: Alpha-ray (Switzerland). Supported by Swiss Development and Cooperation Agency (SDC) and Swiss Embassy.\n\nThe Swiss band Alpha-ray presented a unique blend of trip-hop, jazz, and synth-pop, creating a multi-layered and atmospheric sound that reflects everyday experiences and inner transformations. The concert took place outdoors in the courtyard of Art Station and gathered a large audience. The performers’ energy, the original combination of styles, and the poetic quality of the lyrics resonated strongly with the listeners.\n\nAfter the performance, the audience actively interacted with the musicians, sharing impressions and discussing the music, which created a space for open dialogue and artistic exchange. The concert demonstrated how international music initiatives can strengthen cultural ties and stimulate interest in new art forms.',
    },
  },
  {
    id: 'th_the_neighbor_2025',
    type: 'theatre',
    hasFullContent: true,
    startDate: '2025-09-10',
    coverImage: 'images/events/covers/solo-performance-the-neighbor.webp',
    gallery: [],
    partnerIds: ['sdc'],
    artistIds: [],
    title: {
      ru: 'Моноспектакль театра Other Animals: «Соседка»',
      uz: "\"Other Animals\" teatrining monospektakli: \"Qo'shni\"",
      en: 'Monoplay by the Theater Other Animals: "The Neighbor"',
    },
    description: {
      ru: 'В ролях: Галина Борисова. Режиссёр: Мария Тихомолова. Продюсер: Муртас Кажгалиев. При поддержке Швейцарского агентства по развитию и сотрудничеству (SDC).\n\nВ Art Station состоялась премьера моноспектакля «Соседка» по пьесе «Жду тебя, любовь моя» лауреатов Нобелевской премии Дарио Фо и Франки Раме. Спектакль — это искреннее откровение, драматичная история женщины, чья жизнь меняется в одно мгновение. Яркая, лиричная и глубоко эмоциональная трагикомедия, где смех прорывается сквозь слёзы, покорила зрителей своей искренностью и мощной актёрской игрой. Спектакль собрал более 50 зрителей и получил множество положительных отзывов.',
      uz: "Rollarda: Galina Borisova. Rejissyor: Mariya Tixomolova. Prodyuser: Murtas Kajgaliyev. Shveytsariya Taraqqiyot va Hamkorlik Agentligi (SDC) qo'llab-quvvatlashida.\n\nArt Stationda Nobel mukofoti laureatlari Dario Fo va Franka Rame qalamiga mansub \"Seni kutaman, sevgilim\" pyesasi asosidagi \"Qo'shni\" monodramasining premyerasi bo'lib o'tdi. Spektakl — bu samimiy ochilish, hayoti bir lahzada o'zgarib ketadigan ayolning dramatik hikoyasi. Kulgi ko'z yoshlar orasidan sizib chiqadigan yorqin, lirik va chuqur hissiy tragikomediya tomoshabinlarni o'z samimiyligi va kuchli aktyorlik mahorati bilan maftun etdi. Spektakl 50 dan ortiq tomoshabinni jamladi va ko'plab ijobiy fikr-mulohazalarga sazovor bo'ldi.",
      en: 'Cast: Galina Borisova. Director: Maria Tikhomolova. Producer: Murtas Kazhgaliyev. Supported by Swiss Development and Cooperation Agency (SDC).\n\nArt Station hosted the premiere of the monodrama “The Neighbor”, based on the play “I’m Waiting for You, My Love” by Nobel Prize laureates Dario Fo and Franca Rame. The performance is a heartfelt revelation — a dramatic story of a woman whose life changes in an instant. A vivid, lyrical, and deeply emotional tragicomedy, where laughter breaks through tears, it captivated the audience with its sincerity and powerful performance. The play gathered more than 50 spectators and received numerous positive reviews.',
    },
  },
  {
    id: 'con_zeboxno_balkony_2025',
    type: 'concert',
    hasFullContent: true,
    startDate: '2025-09-20',
    coverImage: 'images/events/covers/zeboxno-and-balkony-concert.webp',
    gallery: [],
    partnerIds: [],
    artistIds: [],
    title: { ru: 'Концерт ZEBOxNO и BALKONY!', uz: "ZEBOxNO va BALKONY! konserti", en: 'Concert of ZEBOxNO and BALKONY!' },
    description: {
      ru: 'В рамках музыкального тура Silk Road в Art Station прошёл яркий концерт с участием двух независимых групп — ZEBOxNO и BALKONY!. ZEBOxNO — авторский проект, сочетающий поэтичные тексты, живые инструменты и эстетику инди-поп-рока, воплощённый в сотрудничестве вокалистки Zebo и композитора No. BALKONY! представили свой самобытный пост-панк звук, где бас, гитары и тексты песен создают атмосферу остывшего чая и ночных разговоров.\n\nКонцерт прошёл в тёплой и дружеской атмосфере: зрители активно поддерживали музыкантов, а по многочисленным просьбам вокалистка Zebo исполнила несколько дополнительных песен. Вечер стал настоящим праздником живой музыки и искреннего единения.',
      uz: "Silk Road musiqiy turi doirasida Art Stationda ikkita mustaqil guruh — ZEBOxNO va BALKONY! ishtirokidagi yorqin konsert bo'lib o'tdi. ZEBOxNO — she'riy matnlar, jonli cholg'u asboblari va indi-pop-rok estetikasini birlashtiruvchi, vokalchi Zebo va bastakor Noning hamkorligida mujassam bo'lgan muallif loyihasi. BALKONY! esa bas, gitara va matnlar sovigan choy hamda tungi suhbatlar muhitini eslatuvchi o'ziga xos post-pank ovozini taqdim etdi.\n\nKonsert iliq va do'stona muhitda o'tdi: tomoshabinlar musiqachilarni faol qo'llab-quvvatladilar, ko'plab so'rovlarga ko'ra vokalchi Zebo bir necha qo'shimcha qo'shiq ijro etdi. Kechqurun jonli musiqa va samimiy yaqinlashuvning haqiqiy bayramiga aylandi.",
      en: 'As part of the Silk Road music tour, a vibrant concert featuring two independent bands — ZEBOxNO and BALKONY! — took place at Art Station. ZEBOxNO is an original project that blends poetic lyrics, live instrumentation, and the aesthetics of indie pop-rock, embodied in the collaboration between vocalist Zebo and composer No. BALKONY! presented their distinctive post-punk sound, where bass, guitars, and lyrics evoke the atmosphere of cold tea and late-night conversations.\n\nThe concert was held in a warm and friendly atmosphere: the audience actively supported the musicians, and by popular request, vocalist Zebo performed several additional songs. The evening became a true celebration of live music and genuine connection.',
    },
  },
  {
    id: 'con_silk_road_ensemble_2025',
    type: 'concert',
    hasFullContent: true,
    startDate: '2025-10-04',
    coverImage: 'images/events/covers/concert-of-musicians-from-the-silk-road-countries.webp',
    gallery: [],
    partnerIds: ['alliance-francaise'],
    artistIds: [],
    title: { ru: 'Концерт Ансамбля Шёлкового пути', uz: "Ipak yo'li ansambli konserti", en: 'Concert of the Silk Road Ensemble' },
    description: {
      ru: 'Участники: Солмаз Бадри, Тигран Давтян, Садриддин Гулов, Нешет Куташ, Адриен Сегье. Страны-участницы: Армения, Франция, Иран, Турция, Узбекистан. При поддержке Посольства Франции в Узбекистане и Альянс Франсез Самарканда.\n\nГастролирующие музыканты из разных стран объединили свои традиции, создав уникальное звучание, в котором гармонично переплелись иранские, узбекские, армянские и европейские музыкальные мотивы. Концерт наполнил галерею ярким культурным диалогом: звучание шаштара и дудука, аккордеона и сантура, перкуссии и голоса слились в единую музыкальную ткань, воплощая дух взаимопонимания между народами Шёлкового пути.\n\nУ зрителей была возможность глубже соприкоснуться с разнообразием музыкальных традиций и обменяться впечатлениями с музыкантами, что показало, как искусство способно объединять людей и укреплять культурные связи.',
      uz: "Ishtirokchilar: Solmaz Badri, Tigran Davtyan, Sadriddin Gulov, Neshet Kutash, Adrien Segye. Ishtirokchi mamlakatlar: Armaniston, Fransiya, Eron, Turkiya, O'zbekiston. Fransiyaning O'zbekistondagi elchixonasi va Samarqand Alliance Française qo'llab-quvvatlashida.\n\nTurli mamlakatlardan kelgan gastrolchi musiqachilar o'z an'analarini birlashtirib, eron, o'zbek, arman va yevropa musiqiy motivlari uyg'un tarzda kesishgan o'ziga xos ovoz yaratdilar. Konsert galereyani yorqin madaniy muloqot bilan to'ldirdi: shashtar va duduk, akkordeon va santur, urma asboblar va ovoz yagona musiqiy to'qimaga birlashib, Ipak yo'li xalqlari o'rtasidagi o'zaro tushunish ruhini aks ettirdi.\n\nTomoshabinlar musiqiy an'analarning xilma-xilligi bilan yaqinroq tanishish va musiqachilar bilan taassurot almashish imkoniga ega bo'ldilar, bu esa san'at odamlarni qanday birlashtira olishi va madaniy aloqalarni mustahkamlashini ko'rsatdi.",
      en: 'Participants: Solmaz Badri, Tigran Davtyan, Sadriddin Gulov, Neşet Kutash, Adrien Séguier. Participating countries: Armenia, France, Iran, Turkey, Uzbekistan. Supported by the Embassy of France in Uzbekistan and Alliance Française de Samarcande.\n\nTouring musicians from different countries brought together their traditions to create a unique sound in which Iranian, Uzbek, Armenian, and European musical motifs intertwined harmoniously. The concert filled the gallery with vivid cultural dialogue: the sounds of the shashtar and duduk, accordion and santur, percussion and voice merged into a cohesive musical texture, evoking the spirit of mutual understanding among the peoples of the Silk Road.\n\nThe audience had the opportunity to engage more closely with the diversity of musical traditions and to exchange impressions with the musicians, demonstrating how art can unite people and strengthen cultural ties.',
    },
  },
  {
    id: 'th_shams_i_kamar_2025',
    type: 'theatre',
    hasFullContent: true,
    startDate: '2025-10-07',
    endDate: '2025-10-10',
    coverImage: 'images/events/covers/series-of-solo-performances-by-the-shams-i-kamar-t.webp',
    gallery: [],
    partnerIds: ['sdc'],
    artistIds: [],
    title: {
      ru: 'Серия моноспектаклей театра «Шамс-и-Камар» (Ташкент)',
      uz: "\"Shams-i-Qamar\" teatrining (Toshkent) monospektakllar turkumi",
      en: 'Series of Monoplays by the "Shams-i-Kamar" Theatre (Tashkent)',
    },
    description: {
      ru: 'Спектакли: «Kafka & Co», «Vasiyatnoma». Участники: Камариддин Артыков, Мухтар Асроров, Шахбоз Файзуллаев, Махлиё Хуррамова, Джамшид Валиев, Жонтемир Жондор. При поддержке Швейцарского агентства по развитию и сотрудничеству (SDC).\n\nС 7 по 10 октября 2025 года в Art Station прошла серия спектаклей театра «Шамс-и-Камар» — творческого коллектива под руководством художественного руководителя Камариддина Артыкова, работающего на стыке поэзии, драмы и режиссёрского эксперимента. Камерный театр покорил зрителей выразительной минималистичной сценографией, тонкой актёрской игрой и глубоким эмоциональным резонансом.\n\nПрограмма включала два моноспектакля: «Kafka & Co» по мотивам произведений Франца Кафки (режиссёр Джамшид Валиев, в исполнении Мухтора Асророва) и «Vasiyatnoma» («Завещание») по рассказам Нодара Думбадзе и Жонтемира Жондора — трогательная история взросления, любви и памяти. Несмотря на то, что спектакли шли на узбекском языке, они были эмоционально близки всем зрителям благодаря универсальному языку театра.\n\nГастроли позволили зрителям погрузиться в атмосферу авторского театра и вновь подтвердили, что театральное искусство способно объединять и вдохновлять самую разную публику.',
      uz: "Spektakllar: \"Kafka & Co\", \"Vasiyatnoma\". Ishtirokchilar: Kamariddin Artiqov, Muxtor Asrorov, Shahboz Fayzullayev, Mahliyo Xurramova, Jamshid Valiyev, Jontemir Jondor. Shveytsariya Taraqqiyot va Hamkorlik Agentligi (SDC) qo'llab-quvvatlashida.\n\n2025-yil 7–10-oktabr kunlari Art Stationda she'riyat, drama va rejissyorlik eksperimenti kesishmasida ishlaydigan badiiy rahbar Kamariddin Artiqov boshchiligidagi ijodiy jamoa — \"Shams-i-Qamar\" teatrining spektakllar turkumi namoyish etildi. Kichik formatli teatr tomoshabinlarni ifodali minimalistik sahna bezagi, nozik aktyorlik mahorati va chuqur hissiy ta'siri bilan hayratga soldi.\n\nDastur ikkita monodramani o'z ichiga oldi: Frans Kafka asarlari asosidagi \"Kafka & Co\" (rejissyor Jamshid Valiyev, ijrochi Muxtor Asrorov) va Nodar Dumbadze hikoyalari asosidagi \"Vasiyatnoma\" hamda Jontemir Jondor — voyaga yetish, sevgi va xotira haqidagi ta'sirchan hikoya. Spektakllar o'zbek tilida namoyish etilgan bo'lsa-da, teatrning universal tili tufayli barcha tomoshabinlar uchun hissiy jihatdan tushunarli bo'ldi.\n\nGastrol tomoshabinlarga muallif teatri muhitiga sho'ng'ish imkonini berdi va teatr san'ati turli auditoriyalarni birlashtirish va ilhomlantirish kuchiga ega ekanini yana bir bor tasdiqladi.",
      en: 'Performances: "Kafka & Co", "Vasiyatnoma". Participants: Kamariddin Artykov, Mukhtar Asrorov, Shahboz Fayzullaev, Makhliyo Khurramova, Jamshid Valiev, Zhontemir Zhondor. Supported by Swiss Development and Cooperation Agency (SDC).\n\nFrom October 7 to 10, 2025, Art Station hosted a series of performances by the theater Shams-i-Qamar — a creative collective led by artistic director Kamariddin Artykov, working at the intersection of poetry, drama, and directorial experimentation. The small-format theater impressed audiences with its expressive minimalist scenography, subtle acting, and deep emotional resonance.\n\nThe program included two monodramas: Kafka & Co., based on the works of Franz Kafka (directed by Jamshid Valiev, performed by Mukhtor Asrorov), and Vasiyatnoma (The Testament), based on stories by Nodar Dumbadze and Zhontemir Zhondor — a touching story of growing up, love, and memory. Although presented in Uzbek, the performances were emotionally relatable to all viewers thanks to the universal language of theater.\n\nThe tour allowed audiences to immerse themselves in the atmosphere of auteur theater and reaffirmed that theatrical art has the power to unite and inspire diverse audiences.',
    },
  },
  {
    id: 'exh_name_of_samarkand_2025',
    type: 'exhibition',
    hasFullContent: true,
    startDate: '2025-02-28',
    endDate: '2025-05-28',
    coverImage: 'images/events/covers/the-name-of-samarkand.webp',
    gallery: [],
    partnerIds: ['sdc', 'eco-ministry', 'goethe-institut'],
    artistIds: [],
    title: { ru: 'Имя Самарканда', uz: "Samarqand nomi", en: 'The Name of Samarkand' },
    description: {
      ru: 'Куратор: Тибо де Рюйтер. При поддержке Швейцарского агентства по развитию и сотрудничеству (SDC), Министерства экологии, охраны окружающей среды и изменения климата Республики Узбекистан и Гёте-Института в Ташкенте.\n\nВыставка «Имя Самарканда» исследовала то, как Самарканд был представлен и переосмыслен в мировых культурах — от литературы и кино до парфюмерии и настольных игр. На выставке было представлено более 50 объектов — книги, художественные афиши, музыкальные произведения, парфюмы, фильмы, игры и кинематографические материалы, — показывающих, как реальный и мифологизированный образ города вдохновлял художников по всему миру.\n\nВыставка раскрыла, как Самарканд стал символом Востока — города, полного тайны, красоты и экзотики. Через собранные артефакты посетители могли увидеть, каким Самарканд представляют люди, никогда его не посещавшие, но ощущающие его притягательное очарование.\n\nВыставка поставила вопросы о том, как города обретают символические имена и образы и как эти образы влияют на глобальное восприятие культуры, позволяя каждому посетителю встретиться с городом через личный, воображаемый опыт.',
      uz: "Kurator: Tibo de Ruyter. Shveytsariya Taraqqiyot va Hamkorlik Agentligi (SDC), O'zbekiston Respublikasi Ekologiya, atrof-muhitni muhofaza qilish va iqlim o'zgarishi vazirligi hamda Toshkent Gyote-Instituti qo'llab-quvvatlashida.\n\n\"Samarqand nomi\" ko'rgazmasi Samarqandning dunyo madaniyatlarida — adabiyot va kinodan tortib atir hidlari va stol o'yinlarigacha — qanday tasvirlanishi va qayta talqin qilinishini o'rgandi. Ko'rgazmada 50 dan ortiq ob'ekt — kitoblar, badiiy afishalar, musiqiy asarlar, atirlar, filmlar, o'yinlar va kinematografik materiallar — namoyish etildi, ular shaharning haqiqiy va afsonaviylashtirilgan qiyofasi butun dunyo bo'ylab rassomlarni qanday ilhomlantirganini ko'rsatdi.\n\nKo'rgazma Samarqand qanday qilib sir-sinoat, go'zallik va ekzotikaga to'la Sharq ramziga aylanganini ochib berdi. To'plangan artefaktlar orqali tashrif buyuruvchilar Samarqandni hech qachon u yerga bormagan, ammo uning maftunkor jozibasini his qiladigan odamlar qanday tasavvur qilishini ko'rishlari mumkin edi.\n\nKo'rgazma shaharlar qanday qilib ramziy nom va qiyofalarga ega bo'lishi hamda bu qiyofalar madaniyatning global idrok etilishiga qanday ta'sir qilishi haqida savollar ko'tardi va har bir tashrif buyuruvchiga shahar bilan shaxsiy, tasavvuriy tajriba orqali uchrashish imkonini berdi.",
      en: 'Curator: Thibaut de Ruyter. Supported by Swiss Development and Cooperation Agency (SDC), the Ministry of Ecology, Environmental Protection and Climate Change of the Republic of Uzbekistan, and the Goethe-Institut Tashkent.\n\nThe exhibition “The Name of Samarkand” explored how Samarkand has been represented and reimagined in global cultures — from literature and film to fragrances and board games. The exhibition featured over 50 objects, including books, art posters, musical works, perfumes, films, games, and cinematic materials, demonstrating how both the real and mythologized image of the city has inspired artists around the world.\n\nThe exhibition revealed how Samarkand became a symbol of the East — a city full of mystery, beauty, and exoticism. Through the collected artifacts, visitors could see how Samarkand is imagined by people who have never visited it, yet feel its compelling allure.\n\nThe exhibition raised questions about how cities acquire symbolic names and images, and how these images influence the global perception of culture, allowing each visitor to encounter the city through a personal, imaginative experience.',
    },
  },
  {
    id: 'exh_inverted_visions_2025',
    type: 'exhibition',
    hasFullContent: true,
    startDate: '2025-03-21',
    endDate: '2025-05-21',
    coverImage: 'images/events/covers/inverted-visions.webp',
    gallery: [],
    partnerIds: ['eco-ministry'],
    artistIds: ['sarvinoz-kasimova'],
    title: { ru: 'Перевёрнутые видения', uz: "Teskari qarashlar", en: 'Inverted Visions' },
    description: {
      ru: 'Куратор: Сарвиноз Касимова. Художники: Исомиддин Эшонкулов и Уктам Исиргапов. При поддержке Министерства экологии, охраны окружающей среды и изменения климата Республики Узбекистан.\n\n«Перевёрнутые видения» — выставка узбекских художников Исомиддина Эшонкулова и Уктама Исиргапова, посвящённая переосмыслению традиций в современном контексте. Через живопись и инсталляции художники исследуют, как культурные символы — такие как тахмон, элемент традиционного узбекского интерьера, — трансформируются под влиянием времени, личной памяти и глобализации.\n\nОткрытие сопровождалось перформансом о традиционных отношениях между мужчиной и женщиной. Пространство было разделено на две зоны, создавая метафору двойственности культурных кодов, а интерактивная комната позволяла каждому посетителю оставить свои мысли и впечатления, становясь частью художественного процесса.\n\nВыставка привлекла широкую аудиторию, вдохновляя на размышления о культурной памяти и важности сохранения нематериального наследия.',
      uz: "Kurator: Sarvinoz Kasimova. Rassomlar: Isomiddin Eshonqulov va Uktam Isirg'opov. O'zbekiston Respublikasi Ekologiya, atrof-muhitni muhofaza qilish va iqlim o'zgarishi vazirligi qo'llab-quvvatlashida.\n\n\"Teskari qarashlar\" — o'zbek rassomlari Isomiddin Eshonqulov va Uktam Isirg'opovning zamonaviy kontekstda an'analarni qayta talqin qilishga bag'ishlangan ko'rgazmasi. Rassomlar rangtasvir va installatsiyalar orqali taxmon kabi madaniy ramzlarning — an'anaviy o'zbek interyerining bir elementi — vaqt, shaxsiy xotira va globallashuv ta'sirida qanday o'zgarishini o'rganadilar.\n\nOchilish marosimi erkak va ayol o'rtasidagi an'anaviy munosabatlar haqidagi performans bilan yakunlandi. Makon ikki zonaga bo'lingan bo'lib, bu madaniy kodlarning ikki tomonlamaligi metaforasini yaratdi, interaktiv xona esa har bir tashrif buyuruvchiga o'z fikr va taassurotlarini qoldirish, badiiy jarayonning bir qismiga aylanish imkonini berdi.\n\nKo'rgazma keng auditoriyani jalb qildi, madaniy xotira va nomoddiy merosni saqlashning ahamiyati haqida mulohaza yuritishga ilhomlantirdi.",
      en: 'Curator: Sarvinoz Kasimova. Artists: Isomiddin Eshonkulov and Uktam Isirgapov. Supported by the Ministry of Ecology, Environmental Protection, and Climate Change of the Republic of Uzbekistan.\n\n“Inverted Visions” is an exhibition by Uzbek artists Isomidin Eshonkulov and Uktam Isirgapov, dedicated to reinterpreting traditions in a contemporary context. Through paintings and installations, the artists explore how cultural symbols — such as the takhmon, an element of traditional Uzbek interiors — transform under the influence of time, personal memory, and globalization.\n\nThe opening was accompanied by a performance on traditional relationships between men and women. The space was divided into two zones, creating a metaphor for the duality of cultural codes, while an interactive room allowed each visitor to leave their thoughts and impressions, becoming part of the artistic process.\n\nThe exhibition attracted a wide audience, inspiring reflection on cultural memory and the importance of preserving intangible heritage.',
    },
  },
  {
    id: 'exh_connecting_geographies_2025',
    type: 'exhibition',
    hasFullContent: true,
    startDate: '2025-05-21',
    endDate: '2025-05-29',
    coverImage: 'images/events/covers/connecting-geographies.webp',
    gallery: [],
    partnerIds: [],
    artistIds: [],
    title: { ru: 'Связующие географии', uz: "Geografiyalarni bog'lash", en: 'Connecting Geographies' },
    description: {
      ru: 'Куратор: Марьолейн Бортенбруд. Художники: Munara Abdukakharova, Meder Akhmetov, Rakhat Asangulova, Aizuura Bakalova, Polina Bannova, Bermet Borubaeva, Marjolijn Boterenbrood, Ulan Dzhaparov, Zulya Esentaeva, Kees Foekema, Saloue Haller, Azat Iderisov, Gulnara Kasmalieva, Nastya Kireeva, Aidana Kulakhmetova, Dona Kulmatova, Aibek Mailybashev, Fatima Omir, Nurperi Orubaeva, Nikita Ovsiuk, Juliya Pogodeava, Marat Raimkulov, Philipp Reigmuth, Olesja Roskov, Sveta Sarjan, Dima Stevanovan, Liza Terneva, Wato Tsereteli, Alexey Ulko, Malika Umarova, Victor Vorobyev, Yelena Vorobyeva, Sofia Yetskerich.\n\n«Связующие географии» — международный художественный проект, основанный на письме нидерландской художницы Марьолейн Бортенбруд и её рисунках на страницах советского атласа, где карты, отражающие колониальную перспективу, переосмысляются как поиск альтернативного Шёлкового пути, основанного на взаимности, обмене и экологической устойчивости.\n\nПроект возник в результате шестимесячного путешествия художницы по Турции, Грузии, Азербайджану, Казахстану, Узбекистану и Кыргызстану, в ходе которого она взаимодействовала с местными художниками и изучала экологические и культурные особенности каждого региона. Работы ранее были представлены в Амстердаме, а теперь экспонируются в Самарканде.\n\nПрограмма проекта включает выставку, дискуссии и мастер-классы, проходящие в саду резиденции и на территории Зеравшанского заповедника, напрямую вовлекая сообщество в обсуждение экологических и социальных вопросов. Действуя на стыке искусства и науки, проект подчёркивает личную ответственность за будущее планеты.',
      uz: "Kurator: Marjolein Boterenbrud. Rassomlar: Munara Abdukakharova, Meder Akhmetov, Rakhat Asangulova, Aizuura Bakalova, Polina Bannova, Bermet Borubaeva, Marjolijn Boterenbrood, Ulan Dzhaparov, Zulya Esentaeva, Kees Foekema, Saloue Haller, Azat Iderisov, Gulnara Kasmalieva, Nastya Kireeva, Aidana Kulakhmetova, Dona Kulmatova, Aibek Mailybashev, Fatima Omir, Nurperi Orubaeva, Nikita Ovsiuk, Juliya Pogodeava, Marat Raimkulov, Philipp Reigmuth, Olesja Roskov, Sveta Sarjan, Dima Stevanovan, Liza Terneva, Wato Tsereteli, Alexey Ulko, Malika Umarova, Victor Vorobyev, Yelena Vorobyeva, Sofia Yetskerich.\n\n\"Geografiyalarni bog'lash\" — golland rassomi Marjolein Boterenbrudning maktubi va sovet atlasi sahifalaridagi chizmalariga asoslangan xalqaro badiiy loyiha bo'lib, unda kolonial nuqtai nazarni aks ettiruvchi xaritalar o'zaro almashinuv, hamkorlik va ekologik barqarorlikka asoslangan muqobil Ipak yo'lini izlash sifatida qayta talqin qilinadi.\n\nLoyiha rassomning Turkiya, Gruziya, Ozarbayjon, Qozog'iston, O'zbekiston va Qirg'iziston bo'ylab olti oylik sayohati natijasida yuzaga keldi, u safar davomida mahalliy rassomlar bilan hamkorlik qildi va har bir mintaqaning ekologik va madaniy o'ziga xosliklarini o'rgandi. Asarlar ilgari Amsterdamda namoyish etilgan, hozir esa Samarqandda ko'rgazmaga qo'yilgan.\n\nLoyiha dasturi ko'rgazma, muhokamalar va rezidensiya bog'ida hamda Zarafshon qo'riqxonasi hududida o'tkaziladigan master-klasslarni o'z ichiga oladi, bu esa jamoani ekologik va ijtimoiy masalalar bo'yicha muhokamalarga bevosita jalb qiladi. San'at va fan kesishmasida faoliyat yurituvchi loyiha sayyora kelajagi uchun shaxsiy javobgarlikni ta'kidlaydi.",
      en: 'Curator: Marjolijn Boterenbrood. Artists: Munara Abdukakharova, Meder Akhmetov, Rakhat Asangulova, Aizuura Bakalova, Polina Bannova, Bermet Borubaeva, Marjolijn Boterenbrood, Ulan Dzhaparov, Zulya Esentaeva, Kees Foekema, Saloue Haller, Azat Iderisov, Gulnara Kasmalieva, Nastya Kireeva, Aidana Kulakhmetova, Dona Kulmatova, Aibek Mailybashev, Fatima Omir, Nurperi Orubaeva, Nikita Ovsiuk, Juliya Pogodeava, Marat Raimkulov, Philipp Reigmuth, Olesja Roskov, Sveta Sarjan, Dima Stevanovan, Liza Terneva, Wato Tsereteli, Alexey Ulko, Malika Umarova, Victor Vorobyev, Yelena Vorobyeva, Sofia Yetskerich.\n\n“Connecting Geographies” is an international art project based on a letter by Dutch artist Marjolijn Boterenbrood and her drawings on the pages of a Soviet atlas, where maps reflecting a colonial perspective are reinterpreted as a search for an alternative Silk Road grounded in reciprocity, exchange, and ecological sustainability.\n\nThe project emerged from the artist’s six-month journey across Turkey, Georgia, Azerbaijan, Kazakhstan, Uzbekistan, and Kyrgyzstan, during which she engaged with local artists and explored the ecological and cultural specificities of each region. The works were previously presented in Amsterdam and are now exhibited in Samarkand.\n\nThe project program includes an exhibition, discussions, and workshops held in the residency garden and at the Zeravshan Nature Reserve, directly engaging the community in discussions on ecological and social issues. Operating at the intersection of art and science, the project highlights personal responsibility for the planet’s future.',
    },
  },
  {
    id: 'exh_dance_of_colors_2025',
    type: 'exhibition',
    hasFullContent: true,
    startDate: '2025-05-28',
    endDate: '2025-05-30',
    coverImage: 'images/events/covers/dance-of-colors-along-the-silk-road-from-our-roots.webp',
    gallery: [],
    partnerIds: ['turktav'],
    artistIds: [],
    title: {
      ru: 'Танец красок: по следам Шёлкового пути — от наших корней до Самарканда',
      uz: "Ranglar raqsi: Ipak yo'li izidan — ildizlarimizdan Samarqandgacha",
      en: 'Dance of Colors: Tracing the Silk Road — From Our Roots to Samarkand',
    },
    description: {
      ru: 'Куратор: Нур Догу Кочак. При поддержке Фонда TÜRKTAV (Турция).\n\nВыставка «Танец красок: по следам Шёлкового пути — от наших корней до Самарканда» с участием художников из Турции прошла в рамках конференции HERITAGE TURQUOISE 2025 в Международном университете туризма и культурного наследия «Шёлковый путь». Помимо представления художественных интерпретаций наследия Шёлкового пути, выставка сыграла важную роль в укреплении культурных связей между Турцией и Узбекистаном.\n\nПроект способствовал взаимопониманию и признанию общих ценностей через художественный обмен, заложив основу для будущих совместных проектов художников и культурных институций обеих стран.',
      uz: "Kurator: Nur Dog'u Ko'chak. TÜRKTAV jamg'armasi (Turkiya) qo'llab-quvvatlashida.\n\nTurkiyalik rassomlar ishtirokidagi \"Ranglar raqsi: Ipak yo'li izidan — ildizlarimizdan Samarqandgacha\" ko'rgazmasi \"Ipak yo'li\" xalqaro turizm va madaniy meros universitetida o'tkazilgan HERITAGE TURQUOISE 2025 konferensiyasi doirasida bo'lib o'tdi. Ko'rgazma Ipak yo'li merosining badiiy talqinlarini taqdim etish bilan bir qatorda, Turkiya va O'zbekiston o'rtasidagi madaniy aloqalarni mustahkamlashda muhim rol o'ynadi.\n\nLoyiha badiiy almashinuv orqali o'zaro tushunish va umumiy qadriyatlarni tan olishga ko'maklashdi, ikki mamlakat rassomlari va madaniyat institutlari o'rtasidagi kelgusi qo'shma loyihalar uchun zamin yaratdi.",
      en: 'Curator: Nur Dogu Koçak. Supported by the TÜRKTAV Foundation (Turkey).\n\nThe exhibition “Dance of Colors: Tracing the Silk Road — From Our Roots to Samarkand”, featuring artists from Turkey, took place as part of the HERITAGE TURQUOISE 2025 conference at the Silk Road International University of Tourism and Cultural Heritage. In addition to presenting artistic interpretations of Silk Road heritage, the exhibition played an important role in strengthening cultural ties between Turkey and Uzbekistan.\n\nThe project fostered mutual understanding and recognition of shared values through artistic exchange, laying the groundwork for future collaborative projects between artists and cultural institutions from both countries.',
    },
  },
  {
    id: 'res_young_artists_1_2025',
    type: 'residency',
    hasFullContent: true,
    startDate: '2025-03-03',
    endDate: '2025-04-04',
    coverImage: 'images/events/covers/educational-residency-young-artists-1.webp',
    gallery: [],
    partnerIds: ['sdc'],
    artistIds: ['baktygul-midinova'],
    title: {
      ru: 'Образовательная резиденция для молодых художников Узбекистана №1',
      uz: "O'zbekistonlik yosh rassomlar uchun ta'lim rezidensiyasi №1",
      en: 'Educational Residency for Young Artists from Uzbekistan #1',
    },
    description: {
      ru: 'Куратор: Бактыгуль Мидинова (Кыргызстан). Художники-резиденты: Анна Григорьянц, Дарья Канти, Джамшид Рашидов, Йигит Али Сатторов, Эзоза Зокиржонова. При поддержке: Швейцарского агентства по развитию и сотрудничеству (SDC).\n\nПервая полностью финансируемая образовательная художественная резиденция для начинающих художников из разных регионов Узбекистана объединила пятерых участников, отобранных по открытому конкурсу независимым международным жюри. Программа была сосредоточена на развитии художественных и концептуальных навыков, а также на исследовании актуальных тем — экологии и изменения климата, культурного многообразия и межкультурного диалога, женского лидерства и социальной инклюзии.\n\nВ течение четырёх недель резиденты участвовали в программе, включавшей короткие лекции, мастер-классы и индивидуальное кураторское наставничество под руководством Бактыгуль Мидиновой — признанного эксперта в области музееведения из Кыргызстана.\n\nИтоги программы были представлены на заключительной выставке «Мы говорим на языке рек», отразившей профессиональный рост участников и развитие их художественных исследований.',
      uz: "Kurator: Baktigul Midinova (Qirg'iziston). Rezident rassomlar: Anna Grigoryants, Darya Kanti, Jamshid Rashidov, Yigit Ali Sattorov, Ezoza Zokirjonova. Qo'llab-quvvatlovchi: Shveytsariya Taraqqiyot va Hamkorlik Agentligi (SDC).\n\nO'zbekistonning turli hududlaridan bo'lgan yosh rassomlar uchun to'liq moliyalashtiriladigan birinchi ta'lim badiiy rezidensiyasi mustaqil xalqaro hakamlar hay'ati tomonidan ochiq tanlov orqali tanlangan beshta ishtirokchini birlashtirdi. Dastur badiiy va kontseptual ko'nikmalarni rivojlantirishga, shuningdek, dolzarb mavzularni — ekologiya va iqlim o'zgarishi, madaniy xilma-xillik va madaniyatlararo muloqot, ayollar yetakchiligi va ijtimoiy inklyuziyani — o'rganishga qaratildi.\n\nTo'rt hafta davomida rezidentlar Qirg'izistondan bo'lgan taniqli muzeyshunoslik mutaxassisi Baktigul Midinova rahbarligida qisqa ma'ruzalar, master-klasslar va individual kuratorlik nasihatchiligini o'z ichiga olgan dasturda ishtirok etishdi.\n\nDastur natijalari ishtirokchilarning professional o'sishi va ularning badiiy izlanishlari rivojini namoyish etgan \"Daryolar tilida so'zlaymiz\" yakuniy ko'rgazmasida taqdim etildi.",
      en: 'Curator: Baktygul Midinova (Kyrgyzstan). Resident Artists: Anna Grigoryants, Darya Kanti, Jamshid Rashidov, Yigit Ali Sattorov, Ezoza Zokirjonova. Supported by: Swiss Agency for Development and Cooperation (SDC).\n\nThe first fully funded educational art residency for emerging artists from various regions of Uzbekistan brought together five participants selected through an open call by an independent international jury. The program focused on the development of artistic and conceptual skills, as well as the exploration of current themes — including ecology and climate change, cultural diversity and intercultural dialogue, women’s leadership, and social inclusion.\n\nOver the course of four weeks, the residents took part in a curriculum that included short lectures, workshops, and individual curatorial mentorship led by Baktygul Midinova, a distinguished museum studies expert from Kyrgyzstan.\n\nThe outcomes of the program were presented at the final exhibition “We Speak the Language of Rivers,” showcasing the professional growth of the participants and the evolution of their artistic inquiries.',
    },
  },
  {
    id: 'res_young_sculptors_2025',
    type: 'residency',
    hasFullContent: true,
    startDate: '2025-03-24',
    endDate: '2025-04-02',
    coverImage: 'images/events/covers/educational-residency-for-young-sculptors-from-uzb.webp',
    gallery: [],
    partnerIds: ['eco-ministry'],
    artistIds: ['nick-sayers'],
    title: {
      ru: 'Образовательная резиденция для молодых скульпторов Узбекистана',
      uz: "O'zbekistonlik yosh haykaltaroshlar uchun ta'lim rezidensiyasi",
      en: 'Educational Residency for Young Sculptors from Uzbekistan',
    },
    description: {
      ru: 'Куратор: Ник Сайерс. Скульпторы-участники: Джасвант Анназар, Ветлина Бурмистрова, Зилола Кахрамонова, Амир Холматов, Асадбек Турдалиев. При поддержке: Министерства экологии, охраны окружающей среды и изменения климата Республики Узбекистан.\n\nВ рамках экологической образовательной программы, посвящённой устойчивой городской скульптуре, пятеро художников из Узбекистана под кураторством британского художника Ника Сайерса работали с актуальными экологическими темами — изменением климата, загрязнением окружающей среды и рациональным использованием водных ресурсов.\n\nВ течение десяти дней художники создавали произведения, предназначенные для установки в общественных пространствах Самарканда. Работая с нетрадиционными материалами — металлоломом и пластиковыми отходами, — художники подчёркивали остроту экологических проблем и наглядно демонстрировали потенциал повторного использования ресурсов.\n\nСкульптуры были представлены на заключительной выставке «У края. Между разрушением и возрождением» в саду Art Station.',
      uz: "Kurator: Nik Sayers. Ishtirokchi haykaltaroshlar: Jaswant Annazar, Vetlina Burmistrova, Zilola Kaxramonova, Amir Xolmatov, Asadbek Turdaliyev. Qo'llab-quvvatlovchi: O'zbekiston Respublikasi Ekologiya, atrof-muhitni muhofaza qilish va iqlim o'zgarishi vazirligi.\n\nBarqaror shahar haykaltaroshligiga bag'ishlangan ekologik-ta'lim dasturi doirasida O'zbekistondan bo'lgan beshta rassom britaniyalik rassom Nik Sayers kuratorligida iqlim o'zgarishi, atrof-muhitning ifloslanishi va suv resurslaridan oqilona foydalanish kabi dolzarb ekologik mavzular bilan ishladilar.\n\nO'n kun davomida rassomlar Samarqand jamoat makonlarida o'rnatilishi mo'ljallangan asarlar yaratdilar. Metall va plastik chiqindilar kabi noan'anaviy materiallar bilan ishlab, rassomlar ekologik muammolarning dolzarbligini ta'kidladilar va resurslarni qayta ishlatish salohiyatini ko'rgazmali tarzda namoyish etdilar.\n\nHaykallar Art Station bog'ida o'tkazilgan \"Chekkada. Halokat va qayta tiklanish orasida\" yakuniy ko'rgazmasida taqdim etildi.",
      en: 'Curator: Nick Sayers. Participating Sculptors: Jaswant Annazar, Vetlina Burmistrova, Zilola Kakhramonova, Amir Kholmatov, Asadbek Turdaliev. Supported by: the Ministry of Ecology, Environmental Protection, and Climate Change of the Republic of Uzbekistan.\n\nAs part of an ecological and educational program dedicated to sustainable urban sculpture, five artists from Uzbekistan, under the curatorship of British artist Nick Sayers, worked with current environmental themes such as climate change, environmental pollution, and the sustainable use of water resources.\n\nOver the course of ten days, the artists created works intended for installation in public spaces in Samarkand. By working with unconventional materials — including scrap metal and plastic waste — the artists emphasized the urgency of ecological concerns and visually showcased the potential of resource reuse.\n\nThe sculptures were presented at the final exhibition “On the Edge. Between Destruction and Revival”, held in the garden of Art Station.',
    },
  },
  {
    id: 'res_young_artists_2_2025',
    type: 'residency',
    hasFullContent: true,
    startDate: '2025-09-15',
    endDate: '2025-10-15',
    coverImage: 'images/events/covers/educational-residency-young-artists-2.webp',
    gallery: [],
    partnerIds: ['sdc'],
    artistIds: ['diana-rakhmanova'],
    title: {
      ru: 'Образовательная резиденция для молодых художников Узбекистана №2',
      uz: "O'zbekistonlik yosh rassomlar uchun ta'lim rezidensiyasi №2",
      en: 'Educational Residency for Young Artists from Uzbekistan №2',
    },
    description: {
      ru: 'Куратор: Диана Рахманова. Художники-резиденты: Ситора Брежнева, Аделя Даукаева, Джамшид Кадыров, Сарвиноз Меликузиева, Барно Нарзуллаева, Айгуль Сарсен. При поддержке Швейцарского агентства по развитию и сотрудничеству (SDC).\n\nОсенью 2025 года в Самарканде прошла вторая образовательная резиденция для молодых художников Узбекистана, целью которой стало создание площадки для художественного эксперимента, межкультурного обмена и профессионального развития. В течение 30 дней шестеро участников работали в мастерских Art Station под кураторством Дианы Рахмановой.\n\nПрограмма включала лекции, мастер-классы и индивидуальные консультации, среди которых лекция-сессия «О зороастризме», а также посещение художественных пространств Самарканда: галереи Aysel, галереи Art Rassom, галереи Chorsy, Музея современного искусства «Рухсор» и мастерской скульптора Турмана Эсанова.\n\nРезиденция завершилась групповой выставкой «Сундук», представившей итоги художественных исследований участников и продемонстрировавшей, как новое поколение художников работает с актуальными современными темами.',
      uz: "Kurator: Diana Raxmanova. Rezident rassomlar: Sitora Brejneva, Adelya Daukayeva, Jamshid Qodirov, Sarvinoz Melikuziyeva, Barno Narzullayeva, Aygul Sarsen. Shveytsariya Taraqqiyot va Hamkorlik Agentligi (SDC) qo'llab-quvvatlashida.\n\n2025-yil kuzida Samarqandda O'zbekistonlik yosh rassomlar uchun ikkinchi ta'lim rezidensiyasi bo'lib o'tdi, uning maqsadi badiiy tajriba, madaniyatlararo almashinuv va professional rivojlanish uchun maydon yaratish edi. 30 kun davomida oltita ishtirokchi Diana Raxmanova kuratorligida Art Station ustaxonalarida ishladi.\n\nDastur ma'ruzalar, master-klasslar va individual maslahatlarni, jumladan \"Zardushtiylik haqida\" ma'ruza-sessiyasini, shuningdek, Samarqanddagi san'at makonlariga tashriflarni o'z ichiga oldi: Aysel san'at galereyasi, Art Rassom galereyasi, Chorsu galereyasi, \"Ruhsor\" zamonaviy san'at muzeyi va haykaltarosh Turman Esanov ustaxonasi.\n\nRezidensiya ishtirokchilarning badiiy izlanishlari natijalarini taqdim etgan va yangi avlod rassomlarining dolzarb zamonaviy mavzular bilan qanday ishlashini namoyish etgan \"Sandiq\" guruh ko'rgazmasi bilan yakunlandi.",
      en: 'Curator: Diana Rakhmanova. Resident Artists: Sitora Brezhneva, Adelya Daukayeva, Jamshid Kadirov, Sarvinoz Melikuziyeva, Barno Narzullayeva, Aygul Sarsen. Supported by the Swiss Agency for Development and Cooperation (SDC).\n\nIn the autumn of 2025, the second educational residency for young artists from Uzbekistan took place in Samarkand, aiming to create a platform for artistic experimentation, intercultural exchange, and professional development. Over 30 days, six participants worked in the Art Station studios under the curatorship of Diana Rakhmanova.\n\nThe program included lectures, workshops, and individual consultations, among them a lecture-session “On Zoroastrianism”, as well as visits to art spaces in Samarkand: Art Gallery Aysel, Art Rassom Gallery, Chorsy Gallery, the Ruhsor Museum of Contemporary Art, and the studio of sculptor Turman Esanov.\n\nThe residency concluded with the group exhibition “Sandyq”, presenting the outcomes of the participants’ artistic research and demonstrating how the new generation of artists engages with pressing contemporary themes.',
    },
  },
  {
    id: 'res_curators_art_managers_2025',
    type: 'residency',
    hasFullContent: true,
    startDate: '2025-05-08',
    endDate: '2025-05-18',
    coverImage: 'images/events/covers/international-research-program-for-curators-and-ar.webp',
    gallery: [],
    partnerIds: ['eco-ministry'],
    artistIds: [],
    title: {
      ru: 'Международная исследовательская программа для кураторов и арт-менеджеров',
      uz: "Kuratorlar va san'at menejerlari uchun xalqaro tadqiqot dasturi",
      en: 'International Research Program for Curators and Art Managers',
    },
    description: {
      ru: 'Участники: Алехандро Брахим, Алексей Борисёнок, Аустра Берзиня, Ксения Бениовски, Элене Глонти, Фарра Карапетян, Юсси Койтела, Ангелос Коттас, Йованка Попова, Миджу Пак, Джей Эль Мёрто, Роберт Швайгер, Кристиан Тёрёк, Мартина Йорданова, Тик Ки Ю. Страны-участницы: Австрия, Болгария, Канада, Китай, Колумбия, Финляндия, Грузия, Греция, Венгрия, Латвия, Нидерланды, Северная Македония, Республика Корея, США. При поддержке Министерства экологии, охраны окружающей среды и изменения климата Республики Узбекистан.\n\nВ Art Station прошла первая международная исследовательская резиденция для кураторов и арт-менеджеров, объединившая 15 специалистов из Европы, Азии, Северной и Южной Америки. Программа была сосредоточена на изучении культурного и природного потенциала Узбекистана через практики культурного картирования и междисциплинарный диалог.\n\nСовместно с командой Art Station и местными деятелями культуры участники провели исследования в шести регионах — Бухаре, Фергане, Хиве, Нукусе, Самарканде и Термезе — с привлечением почти 100 местных заинтересованных сторон. Каждый куратор работал с выбранным регионом, изучая местные сообщества, традиционные ремёсла, звуковую среду, постсоветскую архитектуру и вопросы культурного наследия и идентичности.\n\nПрограмма резиденции включала мастер-классы, лекции и выездные посещения музеев и объектов наследия, укрепляя роль Art Station как площадки для международного культурного обмена и закладывая основу для будущего международного сотрудничества в 2026–2027 годах.',
      uz: "Ishtirokchilar: Alexandro Brahim, Aleksey Barisyonok, Austra Berzinya, Kseniya Benivolski, Elene Glonti, Farra Karapetyan, Yussi Koytela, Angelos Kottas, Yovanka Popova, Miju Park, Djey El Mertaugh, Robert Shvayger, Kristian Terek, Martina Yordanova, Tik Ki Yu. Ishtirokchi mamlakatlar: Avstriya, Bolgariya, Kanada, Xitoy, Kolumbiya, Finlyandiya, Gruziya, Gretsiya, Vengriya, Latviya, Niderlandiya, Shimoliy Makedoniya, Koreya Respublikasi, AQSh. O'zbekiston Respublikasi Ekologiya, atrof-muhitni muhofaza qilish va iqlim o'zgarishi vazirligi qo'llab-quvvatlashida.\n\nArt Stationda Yevropa, Osiyo, Shimoliy va Janubiy Amerikadan 15 nafar mutaxassisni birlashtirgan kuratorlar va san'at menejerlari uchun birinchi xalqaro tadqiqot rezidensiyasi bo'lib o'tdi. Dastur madaniy xaritalash amaliyotlari va fanlararo muloqot orqali O'zbekistonning madaniy va tabiiy salohiyatini o'rganishga qaratildi.\n\nArt Station jamoasi va mahalliy madaniyat arboblari bilan birgalikda ishtirokchilar oltita mintaqada — Buxoro, Farg'ona, Xiva, Nukus, Samarqand va Termizda — deyarli 100 nafar mahalliy manfaatdor tomonlarni jalb qilgan holda tadqiqotlar o'tkazdilar. Har bir kurator tanlangan mintaqa bilan ishlab, mahalliy jamoalar, an'anaviy hunarmandchilik, ovozli muhit, postsovet arxitekturasi hamda madaniy meros va o'ziga xoslik masalalarini o'rgandi.\n\nRezidensiya dasturi master-klasslar, ma'ruzalar hamda muzeylar va meros ob'ektlariga dala tashriflarini o'z ichiga oldi, bu Art Stationning xalqaro madaniy almashinuv maydoni sifatidagi rolini mustahkamladi va 2026–2027-yillardagi kelgusi xalqaro hamkorlik uchun zamin yaratdi.",
      en: 'Participants: Alejandro Brahim, Aliaksei Barysionak, Austra Berzina, Xenia Benivolski, Elene Glonti, Farrah Karapetian, Jussi Koitela, Angelos Kottas, Jovanka Popova, Mijoo Park, JL Murtaugh, Robert Schweiger, Krisztián Török, Martina Yordanova, Tik Ki Yu. Participating countries: Austria, Bulgaria, Canada, China, Colombia, Finland, Georgia, Greece, Hungary, Latvia, Netherlands, North Macedonia, Republic of Korea, USA. Supported by the Ministry of Ecology, Environmental Protection and Climate Change of the Republic of Uzbekistan.\n\nArt Station hosted its first international research residency for curators and art managers, bringing together 15 specialists from Europe, Asia, North and South America. The program focused on exploring the cultural and natural potential of Uzbekistan through cultural mapping practices and interdisciplinary dialogue.\n\nTogether with the Art Station team and local cultural practitioners, participants conducted research in six regions — Bukhara, Fergana, Khiva, Nukus, Samarkand, and Termez — with the involvement of nearly 100 local stakeholders. Each curator worked with a selected region, studying local communities, traditional crafts, sound environments, post-Soviet architecture, and issues of cultural heritage and identity.\n\nThe residency program included workshops, lectures, and field visits to museums and heritage sites, strengthening Art Station’s role as a platform for international cultural exchange and laying the groundwork for future international collaborations in 2026–2027.',
    },
  },
  {
    id: 'ws_garden_silk_road_2025',
    type: 'workshop',
    hasFullContent: true,
    startDate: '2025-04-15',
    endDate: '2025-04-17',
    coverImage: 'images/events/covers/a-garden-in-the-heart-of-the-silk-road.webp',
    gallery: [],
    partnerIds: [],
    artistIds: [],
    title: { ru: 'Сад в сердце Шёлкового пути', uz: "Ipak yo'li qalbidagi bog'", en: 'Garden at the Heart of the Silk Road' },
    description: {
      ru: 'Куратор: Грегор Лерш. Совместно с флористическим агентством «Флора».\n\n«Сад в сердце Шёлкового пути» — международный образовательный мастер-класс по флористике с участием знаменитого немецкого мастера Грегора Лерша. Мероприятие объединило 65 профессиональных флористов из Узбекистана, Беларуси, Казахстана и России.\n\nВ течение трёх дней участники изучали современные техники и экологически устойчивые подходы к флористическому искусству. Мастер-класс завершился торжественным открытием выставки — праздничным событием с живой музыкой и показом мод, где наряды дополнялись украшениями из свежих цветов.\n\nЭтот проект стал важной образовательной площадкой, способствующей профессиональному развитию флористов и продвижению принципов экологической устойчивости в искусстве.',
      uz: "Kurator: Gregor Lersh. \"Flora\" floristika agentligi bilan hamkorlikda.\n\n\"Ipak yo'li qalbidagi bog'\" — mashhur nemis ustasi Gregor Lersh ishtirokidagi xalqaro ta'lim floristika master-klassi edi. Tadbir O'zbekiston, Belarus, Qozog'iston va Rossiyadan 65 nafar professional floristni birlashtirdi.\n\nUch kun davomida ishtirokchilar zamonaviy texnikalar va gulchilik san'atiga ekologik barqaror yondashuvlarni o'rgandilar. Master-klass tantanali ko'rgazma ochilishi bilan yakunlandi — jonli musiqa va moda ko'rsatuvi bilan bayramona tadbir, unda liboslar yangi gullardan yasalgan bezaklar bilan to'ldirildi.\n\nUshbu loyiha floristlarning professional rivojlanishiga hissa qo'shgan va san'atda ekologik barqarorlik tamoyillarini targ'ib qilgan muhim ta'lim maydoniga aylandi.",
      en: 'Curator: Gregor Lersch. In collaboration with the Floristry Agency “Flora”.\n\nThe Garden at the Heart of the Silk Road was an international educational floristry workshop featuring the renowned German master Gregor Lersch. The event brought together 65 professional florists from Uzbekistan, Belarus, Kazakhstan, and Russia.\n\nOver the course of three days, participants studied contemporary techniques and environmentally sustainable approaches to floral art. The workshop concluded with a grand exhibition opening — a festive event with live music and a fashion show, where the outfits were complemented by adornments made from fresh flowers.\n\nThis project became an important educational platform, contributing to the professional development of florists and promoting principles of ecological sustainability in the arts.',
    },
  },
  // TODO: два несмежных модуля (05–11.05 и 24–29.08.2025) — взяты первая и последняя даты.
  {
    id: 'ws_cultural_leaders_lab_2025',
    type: 'workshop',
    hasFullContent: true,
    startDate: '2025-05-05',
    endDate: '2025-08-29',
    coverImage: 'images/events/covers/art-for-social-change-central-asian-cultural-leade.webp',
    gallery: [],
    partnerIds: ['kuduk'],
    artistIds: [],
    title: {
      ru: 'Лаборатория культурных лидеров Центральной Азии',
      uz: "Markaziy Osiyo madaniy yetakchilari laboratoriyasi",
      en: 'Laboratory for Cultural Leaders of Central Asia',
    },
    description: {
      ru: 'Страны-участницы: Кыргызстан, Таджикистан, Узбекистан. Совместно с: культурным центром KUDUK, НПО Stan, Ошским областным музеем изобразительных искусств им. Т. Садыкова, общественной организацией «Ibtido», Ассоциацией волонтёров Узбекистана, культурным центром «Бактрия».\n\nПрограмма профессионального развития для культурных лидеров Кыргызстана, Таджикистана и Узбекистана — «Искусство ради социальных перемен: Лаборатория культурных лидеров Центральной Азии» — была направлена на укрепление регионального сотрудничества, поддержку социокультурного многообразия и развитие культурного туризма через инициативы современного искусства. Обучение сочетало теорию и практику: командообразование, маркетинг, стратегическое планирование и фандрайзинг.\n\nНа протяжении программы участники работали совместно и развивали навыки в интерактивных форматах, включая совместные мастер-классы. Участники также профессионально взаимодействовали с участниками Международной исследовательской программы для кураторов и арт-менеджеров, проходившей на той же площадке.\n\nЛаборатория продолжилась онлайн, а в августе участники вновь встретились очно в Ошском областном музее изобразительных искусств им. Т. Садыкова для интенсивных мастер-классов и практических занятий, что способствовало формированию активного регионального сообщества деятелей культуры.',
      uz: "Ishtirokchi mamlakatlar: Qirg'iziston, Tojikiston, O'zbekiston. Hamkorlikda: KUDUK madaniyat markazi, Stan NNT, T. Sadiqov nomidagi Ush viloyat tasviriy san'at muzeyi, \"Ibtido\" jamoat tashkiloti, O'zbekiston Volontyorlar Assotsiatsiyasi, \"Baqtriya\" madaniyat markazi.\n\nQirg'iziston, Tojikiston va O'zbekistondan bo'lgan madaniyat yetakchilari uchun professional rivojlanish dasturi — \"Ijtimoiy o'zgarishlar uchun san'at: Markaziy Osiyo madaniy yetakchilari laboratoriyasi\" — mintaqaviy hamkorlikni mustahkamlash, ijtimoiy-madaniy xilma-xillikni qo'llab-quvvatlash va zamonaviy san'at tashabbuslari orqali madaniy turizmni rivojlantirishga qaratildi. O'quv jarayoni nazariya va amaliyotni birlashtirdi: jamoa qurish, marketing, strategik rejalashtirish va mablag' jalb qilish.\n\nDastur davomida ishtirokchilar birgalikda ishladilar va qo'shma master-klasslar kabi interaktiv formatlar orqali ko'nikmalarni rivojlantirdilar. Ishtirokchilar shuningdek, xuddi shu maydonda o'tkazilgan Kuratorlar va san'at menejerlari uchun xalqaro tadqiqot dasturi ishtirokchilari bilan professional muloqotda bo'lishdi.\n\nLaboratoriya onlayn tarzda davom etdi, avgust oyida esa ishtirokchilar intensiv master-klasslar va amaliy mashg'ulotlar uchun T. Sadiqov nomidagi Ush viloyat tasviriy san'at muzeyida yuzma-yuz qayta uchrashdilar, bu mintaqaviy madaniyat mutaxassislarining faol jamoasini shakllantirishga hissa qo'shdi.",
      en: 'Participating countries: Kyrgyzstan, Tajikistan, Uzbekistan. In collaboration with: KUDUK Cultural Center, NGO Stan, Turgunbay Sadykov Osh Regional Museum of Fine Arts, Public Organization "Ibtido", Uzbekistan Volunteers Association, Bactria Cultural Center.\n\nThe professional development program for cultural leaders from Kyrgyzstan, Tajikistan, and Uzbekistan — “Art for Social Change: Laboratory for Cultural Leaders of Central Asia” — aimed to strengthen regional cooperation, support sociocultural diversity, and promote cultural tourism through contemporary art initiatives. The training combined theory and practice, covering team-building, marketing, strategic planning, and fundraising.\n\nThroughout the program, participants worked collaboratively and developed skills through interactive formats, including joint workshops. Participants also engaged professionally with members of the International Research Program for Curators and Art Managers held at the same venue.\n\nThe Lab continued online, and in August participants reunited in person at the T. Sadykov Osh Regional Museum of Fine Arts for intensive workshops and practical activities, contributing to the formation of an active regional community of cultural practitioners.',
    },
  },
  {
    id: 'ws_summer_school_management_2025',
    type: 'workshop',
    hasFullContent: true,
    startDate: '2025-06-02',
    endDate: '2025-06-11',
    coverImage: 'images/events/covers/summer-school-of-cultural-management.webp',
    gallery: [],
    partnerIds: ['sdc'],
    artistIds: [],
    title: { ru: 'Летняя школа культурного менеджмента', uz: "Madaniy menejment yozgi maktabi", en: 'Summer School of Cultural Management' },
    description: {
      ru: 'При поддержке Швейцарского агентства по развитию и сотрудничеству (SDC).\n\nЛетняя школа культурного менеджмента — интенсивная 10-дневная программа, направленная на развитие ключевых компетенций в сферах культуры, туризма и креативных индустрий. Программа объединила 20 менеджеров культуры из разных регионов Узбекистана.\n\nУчебная программа включала мастер-классы по командообразованию, управлению рисками, стратегическому планированию и реализации проектов под руководством международных экспертов, с особым вниманием к мобилизации ресурсов и межкультурному сотрудничеству.\n\nПо завершении программы участники применили полученные знания для переработки собственных проектов и представили их на экспертную оценку, укрепив профессиональные связи и способствуя формированию сообщества менеджеров культуры, приверженных принципам устойчивого развития.',
      uz: "Shveytsariya Taraqqiyot va Hamkorlik Agentligi (SDC) qo'llab-quvvatlashida.\n\nMadaniy menejment yozgi maktabi — madaniyat, turizm va ijodiy industriyalar sohalarida asosiy kompetensiyalarni rivojlantirishga qaratilgan intensiv 10 kunlik dastur edi. Dastur O'zbekistonning turli hududlaridan 20 nafar madaniyat menejerini birlashtirdi.\n\nO'quv dasturi xalqaro ekspertlar rahbarligida jamoa qurish, xavflarni boshqarish, strategik rejalashtirish va loyihalarni amalga oshirish bo'yicha master-klasslarni o'z ichiga oldi, resurslarni jalb qilish va madaniyatlararo hamkorlikka alohida e'tibor qaratildi.\n\nDastur yakunida ishtirokchilar olingan bilimlarni o'z loyihalarini qayta ishlab chiqishda qo'llashdi va ularni ekspert bahosiga taqdim etishdi, bu esa professional aloqalarni mustahkamladi va barqaror rivojlanishga sodiq madaniyat menejerlari jamoasini shakllantirishga ko'maklashdi.",
      en: 'Supported by Swiss Development and Cooperation Agency (SDC).\n\nThe Summer School of Cultural Management was an intensive 10-day program aimed at developing key competencies in the fields of culture, tourism, and the creative industries. The program brought together 20 cultural managers from different regions of Uzbekistan.\n\nThe curriculum included workshops on team building, risk management, strategic planning, and project implementation, led by international experts, with particular attention to resource mobilization and intercultural cooperation.\n\nAt the end of the program, participants applied the knowledge gained to reframe their own projects and presented them for expert evaluation, strengthening networks and fostering a community of cultural managers committed to sustainable development.',
    },
  },
  {
    id: 'ws_hidden_facets_photographers_2025',
    type: 'workshop',
    hasFullContent: true,
    startDate: '2025-10-03',
    endDate: '2025-10-08',
    coverImage: 'images/events/covers/educational-project-for-photographers-hidden-facet.webp',
    gallery: [],
    partnerIds: ['sdc'],
    artistIds: ['harf-zimmermann'],
    title: {
      ru: 'Образовательный проект для фотографов: «Скрытые грани Узбекистана»',
      uz: "\"O'zbekistonning yashirin qirralari\": fotograflar uchun ta'lim loyihasi",
      en: 'Educational Project for Photographers: "Hidden Facets of Uzbekistan"',
    },
    description: {
      ru: 'Страны-участницы: Германия, Узбекистан, Россия. При поддержке Швейцарского агентства по развитию и сотрудничеству (SDC).\n\nПроект «Скрытые грани Узбекистана» стал следующим этапом развития выставки «21 взгляд на Узбекистан» и был направлен на поддержку и развитие искусства фотографии в стране. Участниками стали десять победителей фотоконкурса, получившие полностью финансируемые образовательные мастер-классы под руководством немецкого фотографа и куратора Харфа Циммерманна.\n\nОбразовательная программа включала лекции о прошлом и будущем фотографии, обсуждение творческих подходов и этики визуального повествования, а также практическое обучение современным техникам постобработки. Участники выходили со своими камерами на улицы Самарканда, исследуя как известные, так и скрытые уголки города.\n\nПрограмма завершилась небольшой выставкой, представившей фотографии, созданные в ходе мастер-классов. Все работы, созданные в рамках проекта, войдут в архив Art Station, посвящённый визуальной истории страны.',
      uz: "Ishtirokchi mamlakatlar: Germaniya, O'zbekiston, Rossiya. Shveytsariya Taraqqiyot va Hamkorlik Agentligi (SDC) qo'llab-quvvatlashida.\n\n\"O'zbekistonning yashirin qirralari\" loyihasi \"O'zbekistonga 21 nazar\" ko'rgazmasi rivojining navbatdagi bosqichi bo'ldi va mamlakatda fotografiya san'atini qo'llab-quvvatlash hamda rivojlantirishga qaratildi. Ishtirokchilar fotokonkursning o'nta g'olibi bo'lib, ular nemis fotografi va kuratori Harf Zimmermann rahbarligida to'liq moliyalashtiriladigan ta'lim master-klasslarini oldilar.\n\nTa'lim dasturi fotografiyaning o'tmishi va kelajagi haqidagi ma'ruzalarni, ijodiy yondashuvlar va vizual hikoyachilik etikasi muhokamasini, shuningdek, zamonaviy post-prodakshn texnikalari bo'yicha amaliy tayyorgarlikni o'z ichiga oldi. Ishtirokchilar kameralari bilan Samarqand ko'chalariga chiqib, shaharning ham mashhur, ham yashirin burchaklarini o'rgandilar.\n\nDastur master-klasslar davomida yaratilgan fotosuratlarni namoyish etuvchi kichik ko'rgazma bilan yakunlandi. Loyiha doirasida yaratilgan barcha asarlar mamlakatning vizual tarixiga bag'ishlangan Art Station arxiviga kiritiladi.",
      en: 'Participating countries: Germany, Uzbekistan, Russia. Supported by the Swiss Agency for Development and Cooperation (SDC).\n\nThe project “Hidden Facets of Uzbekistan” became the next stage in the development of the exhibition “21 Views of Uzbekistan” and was aimed at supporting and advancing the art of photography in the country. The participants were ten winners of the photo competition, who received fully funded educational workshops led by German photographer and curator Harf Zimmermann.\n\nThe educational program included lectures on the past and future of photography, discussions of creative approaches and the ethics of visual storytelling, as well as practical training in contemporary post-processing techniques. Participants took their cameras out into the streets of Samarkand, exploring both well-known and hidden corners of the city.\n\nThe program concluded with a small exhibition showcasing the photographs created during the workshops. All works produced within the project will be included in the Art Station archive dedicated to the visual history of the country.',
    },
  },
  // TODO: событие проходило тремя несмежными периодами (01–11.04, 12–28.04,
  // 03–23.08.2025) — взяты первая и последняя даты, формат мультипериодности не уточнён.
  {
    id: 'res_progr_switzerland_2025',
    type: 'residency',
    hasFullContent: true,
    startDate: '2025-04-01',
    endDate: '2025-08-23',
    coverImage: 'images/events/covers/international-art-residency-at-progr-switzerland.webp',
    gallery: [],
    partnerIds: ['progr', 'polit-forum-bern', 'sdc', 'eco-ministry'],
    artistIds: [],
    title: {
      ru: 'Международная арт-резиденция в PROGR, Швейцария',
      uz: "PROGR (Shveytsariya)dagi xalqaro badiiy rezidensiya",
      en: 'International Art Residency at PROGR, Switzerland',
    },
    description: {
      ru: '1–11 апреля 2025 года: дизайнер-художница Светлана Сарджан. 12–28 апреля 2025 года: куратор Дона Кулматова. 3–23 августа 2025 года: художница Зилола Кахрамонова. При поддержке: Швейцарского агентства по развитию и сотрудничеству (SDC) и Министерства экологии, охраны окружающей среды и изменения климата Республики Узбекистан.\n\nМеждународные резиденции, организованные Art Station в Берне (Швейцария), стали важным шагом в укреплении международных партнёрств и профессиональном развитии художников и кураторов. С 1 по 11 апреля дизайнер-художница Светлана Сарджан разрабатывала концептуальный проект об узбекской идентичности и культурных кодах, взаимодействуя с культурными институциями и независимой арт-сценой.\n\nС 12 по 28 апреля Дона Кулматова, директор и куратор Art Station, приняла участие в исследовательской резиденции в PROGR, сосредоточившись на практиках преобразования заброшенных промышленных зданий в действующие арт-пространства. Посещения художественных институций в Берне, Цюрихе и Золотурне легли в основу адаптации европейских практик к самаркандскому контексту.\n\nОбмен продолжился образовательной поездкой художницы Зилолы Кахрамоновой с 3 по 23 августа 2025 года, в ходе которой она посетила музеи и галереи Берна, познакомилась с местными художниками и кураторами и представила свою работу в формате открытой студии — укрепив международную сеть Art Station и открыв конкретные возможности для дальнейшего сотрудничества.',
      uz: "2025-yil 1–11-aprel: dizayner-rassom Svetlana Sarjan. 2025-yil 12–28-aprel: kurator Dona Kulmatova. 2025-yil 3–23-avgust: rassom Zilola Kaxramonova. Qo'llab-quvvatlovchi: Shveytsariya Taraqqiyot va Hamkorlik Agentligi (SDC) va O'zbekiston Respublikasi Ekologiya, atrof-muhitni muhofaza qilish va iqlim o'zgarishi vazirligi.\n\nArt Station tomonidan Bernda (Shveytsariya) tashkil etilgan xalqaro rezidensiyalar rassomlar va kuratorlarning xalqaro hamkorligini mustahkamlash va professional rivojlanishida muhim qadam bo'ldi. 1–11-aprel kunlari dizayner-rassom Svetlana Sarjan madaniyat institutlari va mustaqil san'at sahnasi bilan hamkorlikda o'zbek o'ziga xosligi va madaniy kodlari haqida kontseptual loyiha ishlab chiqdi.\n\n12–28-aprel kunlari Art Station direktori va kuratori Dona Kulmatova PROGRdagi tadqiqot rezidensiyasida ishtirok etib, tashlab ketilgan sanoat binolarini faol san'at makonlariga aylantirish amaliyotlariga e'tibor qaratdi. Bern, Sürix va Solothurndagi san'at institutlariga tashriflar yevropa amaliyotlarini Samarqand kontekstiga moslashtirish uchun asos bo'ldi.\n\nAlmashinuv rassom Zilola Kaxramonovaning 2025-yil 3–23-avgust kunlaridagi ta'lim safari bilan davom etdi, u safar davomida Bern muzeylari va galereyalariga tashrif buyurdi, mahalliy rassomlar va kuratorlar bilan tanishdi hamda o'z ishini ochiq studiya formatida taqdim etdi — bu Art Stationning xalqaro tarmog'ini mustahkamladi va kelgusi hamkorlik uchun aniq imkoniyatlar ochdi.",
      en: 'April 1–11, 2025: Designer-artist Svetlana Sarjan. April 12–28, 2025: Curator Dona Kulmatova. August 3–23, 2025: Artist Zilola Kakhramonova. Supported by: the Swiss Agency for Development and Cooperation (SDC) and the Ministry of Ecology, Environmental Protection and Climate Change of the Republic of Uzbekistan.\n\nInternational residencies organized by Art Station in Bern (Switzerland) became an important step in strengthening international partnerships and professional development for artists and curators. From 1 to 11 April, designer-artist Svetlana Sarjan developed a conceptual project on Uzbek identities and cultural codes, engaging with cultural institutions and the independent art scene.\n\nFrom 12 to 28 April, Dona Kulmatova, director and curator of Art Station, participated in a research residency at PROGR, focusing on practices of revitalizing abandoned industrial buildings into active art spaces. Visits to art institutions in Bern, Zurich, and Solothurn formed a basis for adapting European practices to the Samarkand context.\n\nThe exchange continued with an educational trip by artist Zilola Kakhramonova from 3 to 23 August 2025, during which she visited museums and galleries in Bern, met local artists and curators, and presented her work in an open studio — strengthening Art Station’s international network and opening concrete opportunities for further collaborations.',
    },
  },

  // ==========================================================
  // 2026 — тексты по пресс-релизам и постам Art Station (Telegram/
  // Instagram, весна–осень 2026). Основной язык источника указан в
  // machineTranslatedLangs: там перечислены языки, переведённые
  // машинно и требующие редактуры. Фото будут добавлены позже —
  // пока фирменный плейсхолдер.
  // ==========================================================
  {
    id: 'film_threads_of_support_2026',
    type: 'professionalDevelopment',
    hasFullContent: true,
    startDate: '2026-03-27',
    endDate: '2026-04-08',
    coverImage: placeholderCover('Threads of Support'),
    gallery: [],
    partnerIds: [],
    artistIds: [],
    machineTranslatedLangs: ['ru', 'uz'],
    title: {
      ru: 'Threads of Support — показ документального фильма',
      uz: 'Threads of Support — hujjatli film taqdimoti',
      en: 'Threads of Support — Documentary Film Presentation',
    },
    description: {
      ru: 'Режиссёр и монтаж: Оля Корсун. Продюсеры: Фуркат Палван-Заде, Фахад аль-Аттия. Оператор-постановщик: Люда Куропятникова. Звук: Павел Лерер. Линейные продюсеры в Узбекистане: Сабина Сулейманоглу, Шохрух Абдурахмонов. Перевод с узбекского: Адиль Беккулбеков. Интервью и исследование: Константин Корягин. Продажи и фестивали: Рита Соколовская. Цветокоррекция: Иван Дорогавцев. Фоторедактор: Дина Лун. Дизайн титров и постер: Аня Бялая. При поддержке: Doha Film Institute, Caravane Earth Foundation, Art Station Uzbekistan, Посольство Швейцарии в Узбекистане, Государственный музей шёлка (Тбилиси, Грузия).\n\n«Threads of Support» — поэтический документальный фильм об исторических, социальных и культурных контекстах производства шёлка в Маргилане (Узбекистан), в многослойном и сложном регионе Ферганской долины в Центральной Азии.\n\nФильм был представлен на Qumra — индустриальной программе Doha Film Institute. В её рамках команда провела 11 менторских сессий и 17 индустриальных встреч с международным сообществом киноэкспертов. Впереди — фестивальная жизнь фильма и встреча со зрителями.',
      uz: 'Rejissyor va montaj: Olya Korsun. Prodyuserlar: Furqat Palvan-Zade, Fahad Al-Attiyah. Bosh operator: Luda Kuropyatnikova. Ovoz: Pavel Lehrer. O‘zbekistondagi ijro prodyuserlari: Sabina Suleymanoglu, Shohruh Abdurahmonov. O‘zbekchadan tarjima: Adil Bekkulbekov. Suhbatlar va tadqiqot: Konstantin Koryagin. Sotuv va festivallar: Rita Sokolovskaya. Rang bilan ishlash: Ivan Dorogavtsev. Foto muharrir: Dina Lun. Titr dizayni va afisha: Anya Byalaya. Qo‘llab-quvvatlash: Doha Film Institute, Caravane Earth Foundation, Art Station Uzbekistan, Shveytsariyaning O‘zbekistondagi elchixonasi va Ipak davlat muzeyi (Tbilisi, Gruziya).\n\n«Threads of Support» — Markaziy Osiyodagi Farg‘ona vodiysining ko‘pqatlamli va murakkab mintaqasida joylashgan Marg‘ilon (O‘zbekiston) shahridagi ipak ishlab chiqarishning tarixiy, ijtimoiy va madaniy kontekstlariga bag‘ishlangan poetik hujjatli film.\n\nFilm Doha Film Institute tomonidan Qumra dasturida taqdim etildi. Uning doirasida jamoa xalqaro kino ekspertlari hamjamiyati bilan 11 ta mentorlik uchrashuvi va 17 ta industriya uchrashuvini o‘tkazdi. Endi film festival tomoshabinlari bilan uchrashuvni kutmoqda.',
      en: 'Director and editor: Olya Korsun. Producers: Furqat Palvan-Zade, Fahad Al-Attiyah. Director of photography: Luda Kuropyatnikova. Sound: Pavel Lehrer. Line producers in Uzbekistan: Sabina Suleymanoglu, Shokhrukh Abdurakhmonov. Translation from Uzbek: Adil Bekkulbekov. Interviews and research: Konstantin Koryagin. Sales and festivals: Rita Sokolovskaya. Color grading: Ivan Dorogavtsev. Photo editor: Dina Lun. Title design and poster art: Anya Byalaya. Supported by: Doha Film Institute, Caravane Earth Foundation, Art Station Uzbekistan, the Embassy of Switzerland in Uzbekistan, and the State Silk Museum, Tbilisi, Georgia.\n\n“Threads of Support” is a poetic documentary film focusing on the historical, social, and cultural contexts of silk production in Marghelan (Uzbekistan), located in the multilayered and complex region of the Ferghana Valley in Central Asia.\n\nThe film was presented at Qumra by the Doha Film Institute. During the programme the team took part in 11 mentorship sessions and 17 industry meetings with an international cohort of film experts, and the project is now looking forward to meeting festival audiences.',
    },
  },
  {
    id: 'ws_third_space_samarkand_2026',
    type: 'workshop',
    hasFullContent: true,
    startDate: '2026-03-23',
    endDate: '2026-03-30',
    place: 'SamGASI, Samarkand',
    coverImage: 'images/events/ws_third_space_samarkand_2026/cover.webp',
    gallery: [
      'images/events/ws_third_space_samarkand_2026/gallery-1.webp',
      'images/events/ws_third_space_samarkand_2026/gallery-2.webp',
    ],
    partnerIds: [],
    artistIds: [],
    machineTranslatedLangs: ['uz', 'en'],
    title: {
      ru: 'Картирование «третьего пространства» в жилых микрорайонах — воркшоп',
      uz: 'Turar-joy mikrorayonlarida «uchinchi makon»ni xaritalash — vorkshop',
      en: 'Mapping Third Space in Housing Micro-Districts — Workshop',
    },
    description: {
      ru: 'Организаторы: Art Station, Дона Кулматова, Анастасия Галимова (Узбекистан), Омар Нагати (Cluster, Египет), Элиса Винн-Хьюз (Кардиффский университет, Великобритания). При поддержке Британского совета. Проводится при содействии Международного университета туризма и культурного наследия «Шёлковый путь» в Самарканде, на базе Самаркандского государственного архитектурно-строительного института (СамГАСИ).\n\nМеждисциплинарный практико-ориентированный воркшоп по изучению социо-пространственных практик в жилых микрорайонах Самарканда. Участники — студенты старших курсов и недавние выпускники в области архитектуры, урбанистики, искусства, социальных и визуальных практик — осваивали методы полевой документации, основы картирования и визуального сторителлинга.\n\nВ течение недели участники много ходили по районам, наблюдали, разговаривали с жителями и фиксировали увиденное, собирая из отдельных деталей более целостную картину города: как люди используют пространство вокруг себя, как оно меняется в течение дня и какие незаметные практики формируют городскую жизнь. Итогом стала групповая выставка 30 марта.',
      uz: 'Tashkilotchilar: Art Station, Dona Kulmatova, Anastasiya Galimova (O‘zbekiston), Omar Nagati (Cluster, Misr), Elisa Uinn-Hyuz (Kardiff universiteti, Buyuk Britaniya). Britaniya kengashi ko‘magida. Samarqanddagi «Ipak yo‘li» xalqaro turizm va madaniy meros universiteti ko‘maklashuvida, Samarqand davlat arxitektura-qurilish instituti (SamGASI) negizida o‘tkazildi.\n\nSamarqandning turar-joy mikrorayonlaridagi ijtimoiy-fazoviy amaliyotlarni o‘rganishga bag‘ishlangan fanlararo amaliy vorkshop. Ishtirokchilar — arxitektura, urbanistika, san’at, ijtimoiy va vizual amaliyotlar bo‘yicha yuqori kurs talabalari va yaqinda bitirganlar — dala hujjatlashtirish usullari, kartografiya asoslari va vizual hikoya qilishni o‘rgandilar.\n\nHafta davomida ishtirokchilar mahallalarni kezib chiqdilar, kuzatdilar, aholi bilan suhbatlashdilar va ko‘rganlarini qayd etib, alohida tafsilotlardan shaharning yaxlitroq manzarasini yig‘dilar: odamlar atrofdagi makondan qanday foydalanadi, u kun davomida qanday o‘zgaradi va qanday sezilmas amaliyotlar shahar hayotini shakllantiradi. Yakuniy natija — 30-martdagi guruhli ko‘rgazma.',
      en: 'Organizers: Art Station, Dona Kulmatova, Anastasia Galimova (Uzbekistan), Omar Nagati (Cluster, Egypt), Elisa Wynne-Hughes (Cardiff University, UK). Supported by the British Council. Hosted with the assistance of the Silk Road International University of Tourism and Cultural Heritage in Samarkand, at the Samarkand State Institute of Architecture and Construction (SamGASI).\n\nAn interdisciplinary, practice-oriented workshop exploring socio-spatial practices in the residential micro-districts of Samarkand. Participants — senior students and recent graduates in architecture, urban studies, art, and social and visual practices — learned methods of field documentation, the basics of mapping, and visual storytelling.\n\nOver the week, participants walked the neighbourhoods, observed, talked with residents, and recorded what they saw, assembling a more holistic picture of the city from individual details: how people use the space around them, how it changes over the course of a day, and which barely noticeable practices shape urban life. The workshop concluded with a group exhibition on 30 March.',
    },
  },
  {
    id: 'exh_falak_2026',
    type: 'exhibition',
    hasFullContent: true,
    startDate: '2026-04-22',
    endDate: '2026-04-24',
    place: 'Mangilik El 53/1, Astana, Kazakhstan',
    coverImage: 'images/events/exh_falak_2026/cover.webp',
    gallery: [
      'images/events/exh_falak_2026/gallery-1.webp',
      'images/events/exh_falak_2026/gallery-2.webp',
    ],
    partnerIds: [],
    artistIds: [],
    machineTranslatedLangs: ['uz', 'en'],
    title: {
      ru: 'Фалак: Песнь воды и земли',
      uz: 'Falak: Suv va yer qo‘shig‘i',
      en: 'Falak: Song of Water and Earth',
    },
    description: {
      ru: 'Куратор: Диана Рахманова. Координатор: Юлия Ганина. Монтаж: Илья Каримджанов. Партнёры и участники: Art Station, инициатива «Приключение науки: женщины и ледники в Центральной Азии» (AoS), Региональный офис ЮНЕСКО в Алматы, КазНУ имени аль-Фараби (кафедра гидрометеорологии), Цюрихский университет искусств (департамент визуализации знаний), Общественный фонд «Ибтидо», Silk Road Project (Милли Чен, Арзу Озкал), эко-арт проект We Are Water, художница Жанна Ассанова. Финансовая поддержка: Швейцарское агентство по развитию и сотрудничеству (SDC).\n\nВыставка в рамках Regional Environmental Summit (RES) 2026. Центральная Азия связана едиными природными системами — водой, ледниками, ландшафтами и климатом, и изменения в одной части региона неизбежно отражаются на других. Выставка предлагает обратиться к этим процессам через искусство — не как к абстрактным данным, а как к опыту, который можно почувствовать и осмыслить.\n\nВ основе проекта — понятие фалак, традиционной формы народного песнопения Центральной Азии: обращение человека к миру, природе и судьбе, в котором личное переживание становится общим. Здесь фалак переосмысляется как художественный метод разговора о климатических изменениях, утрате, памяти и ответственности. Через инсталляции, текстильные работы, кинопоказы, дискуссии и воркшопы выставка создаёт пространство диалога с природой.\n\nОт Art Station была представлена инсталляция «Письма к Аралу» художника и скульптора Джамшида Кадирова. В течение всех дней проходила серия воркшопов, где участники писали письма Аральскому морю и отпускали их в воду — как личное высказывание и жест памяти.',
      uz: 'Kurator: Diana Raxmanova. Koordinator: Yuliya Ganina. Montaj: Ilya Karimdjanov. Hamkorlar va ishtirokchilar: Art Station, «Fan sarguzashti: Markaziy Osiyoda ayollar va muzliklar» tashabbusi (AoS), YUNESKOning Olma-otadagi mintaqaviy idorasi, al-Forobiy nomidagi QazMU (gidrometeorologiya kafedrasi), Sürix san’at universiteti (bilimlarni vizuallashtirish bo‘limi), «Ibtido» jamoat fondi, Silk Road Project (Milli Chen, Arzu O‘zkal), We Are Water eko-san’at loyihasi, rassom Janna Asanova. Moliyaviy ko‘mak: Shveytsariya Taraqqiyot va Hamkorlik Agentligi (SDC).\n\nRegional Environmental Summit (RES) 2026 doirasidagi ko‘rgazma. Markaziy Osiyo yagona tabiiy tizimlar — suv, muzliklar, landshaftlar va iqlim bilan bog‘langan, mintaqaning bir qismidagi o‘zgarishlar muqarrar ravishda boshqalarga ta’sir qiladi. Ko‘rgazma bu jarayonlarga san’at orqali — mavhum ma’lumot sifatida emas, balki his qilib va anglab bo‘ladigan tajriba sifatida yondashishni taklif qiladi.\n\nLoyiha negizida falak — Markaziy Osiyoda keng tarqalgan an’anaviy xalq qo‘shig‘i tushunchasi yotadi: insonning dunyoga, tabiatga va taqdirga murojaati, unda shaxsiy kechinma umumiyga aylanadi. Bu yerda falak iqlim o‘zgarishi, yo‘qotish, xotira va mas’uliyat haqida so‘zlashning badiiy usuli sifatida qayta talqin qilinadi. Ko‘rgazma installyatsiya, to‘qimachilik ishlari, kino namoyishlari, munozaralar va vorkshoplar orqali tabiat bilan muloqot maydonini yaratadi.\n\nArt Station tomonidan rassom va haykaltarosh Jamshid Qodirovning «Orolga maktublar» installyatsiyasi taqdim etildi. Barcha kunlar davomida ishtirokchilar Orol dengiziga maktub yozib, ularni suvga qo‘yib yuborgan vorkshoplar turkumi o‘tkazildi — bu shaxsiy so‘z va xotira ramzi.',
      en: 'Curator: Diana Rakhmanova. Coordinator: Yulia Ganina. Installation: Ilya Karimdzhanov. Partners and participants: Art Station, the initiative “Adventure of Science: Women and Glaciers in Central Asia” (AoS), the UNESCO Regional Office in Almaty, al-Farabi Kazakh National University (Department of Hydrometeorology), Zurich University of the Arts (Knowledge Visualization department), the Ibtido Public Foundation, the Silk Road Project (Millie Chen, Arzu Ozkal), the eco-art project We Are Water, and artist Zhanna Assanova. Financial support: the Swiss Agency for Development and Cooperation (SDC).\n\nAn exhibition within the Regional Environmental Summit (RES) 2026. Central Asia is bound together by shared natural systems — water, glaciers, landscapes, and climate — and changes in one part of the region inevitably affect the others. The exhibition invites viewers to approach these processes through art: not as abstract data, but as an experience that can be felt and reflected upon.\n\nAt the heart of the project is the notion of falak, a traditional form of folk chant widespread in Central Asia — a person’s address to the world, to nature, and to fate, in which personal experience becomes shared. Here falak is reimagined as an artistic method for speaking about climate change, loss, memory, and responsibility. Through installation, textile works, film screenings, discussions, and workshops, the exhibition creates a space for dialogue with nature.\n\nArt Station presented the installation “Letters to the Aral” by artist and sculptor Djamshid Kadirov. Throughout the summit, a series of workshops was held in which participants wrote letters to the Aral Sea and released them into the water — a personal statement and a gesture of memory.',
    },
  },
  {
    id: 'ws_digital_art_animation_2026',
    type: 'workshop',
    hasFullContent: true,
    startDate: '2026-05-21',
    endDate: '2026-05-24',
    place: 'Tashkent',
    coverImage: 'images/events/ws_digital_art_animation_2026/cover.webp',
    gallery: ['images/events/ws_digital_art_animation_2026/gallery-1.webp'],
    partnerIds: [],
    artistIds: [],
    machineTranslatedLangs: ['ru', 'uz'],
    title: {
      ru: 'Воркшоп по цифровому искусству и анимации с Петером Эршманном',
      uz: 'Peter Aerschmann bilan raqamli san’at va animatsiya vorkshopi',
      en: 'Digital Art & Animation Workshop with Peter Aerschmann',
    },
    description: {
      ru: 'Ведущий: Петер Эршманн (Швейцария). При поддержке Швейцарского совета по культуре Pro Helvetia и Университета Пучон в Ташкенте. Воркшоп проводится в рамках проекта «Art Station: перекрёсток свободы самовыражения, художественного творчества, инклюзивного диалога и развития общества», осуществляемого при многолетнем сотрудничестве с Центральноазиатской программой искусства и культуры (CAACP) Швейцарского агентства по развитию и сотрудничеству (SDC).\n\nЧетырёхдневный воркшоп по цифровому видео и анимации для художников, дизайнеров и медиапрактиков. Участники работали бок о бок с международно признанным художником Петером Эршманном, осваивали видео, анимацию и цифровые инструменты и экспериментировали с построением сцен, зацикленных движений и точных визуальных композиций, развивая собственный проект.\n\nДаты: 21–24 мая 2026, 13:30–18:00. Место: Ташкент. Приём заявок — до 10 мая 2026, число мест ограничено.',
      uz: 'Yetakchi: Peter Aerschmann (Shveytsariya). Shveytsariya madaniyat kengashi Pro Helvetia va Toshkentdagi Puchon universiteti ko‘magida. Vorkshop «Art Station: so‘z erkinligi, badiiy ijod, inklyuziv muloqot va jamiyat rivoji chorrahasi» loyihasi doirasida, Shveytsariya Taraqqiyot va Hamkorlik Agentligi (SDC)ning Markaziy Osiyo san’at va madaniyat dasturi (CAACP) bilan ko‘p yillik hamkorlikda o‘tkaziladi.\n\nRassomlar, dizaynerlar va media amaliyotchilari uchun raqamli video va animatsiya bo‘yicha to‘rt kunlik vorkshop. Ishtirokchilar xalqaro e’tirof etilgan rassom Peter Aerschmann bilan yonma-yon ishlab, video, animatsiya va raqamli vositalarni o‘rgandilar hamda sahnalar qurish, siklik harakatlar va aniq vizual kompozitsiyalar ustida tajriba o‘tkazib, o‘z loyihasini rivojlantirdilar.\n\nSanalar: 2026-yil 21–24-may, 13:30–18:00. Manzil: Toshkent. Arizalar 2026-yil 10-maygacha qabul qilindi, o‘rinlar soni cheklangan.',
      en: 'Facilitator: Peter Aerschmann (Switzerland). Supported by the Swiss Arts Council Pro Helvetia and Bucheon University in Tashkent. The workshop is conducted within the framework of the project “Art Station: Crossroads of Freedom of Expression, Artistic Creativity, Inclusive Dialogue and Community Development,” implemented in long-standing cooperation with the Central Asia Art and Culture Programme (CAACP) of the Swiss Agency for Development and Cooperation (SDC).\n\nA four-day workshop in digital video and animation for artists, designers, and media practitioners. Participants worked side by side with the internationally recognized artist Peter Aerschmann, explored video, animation, and digital tools, and experimented with building scenes, looped movements, and precise visual compositions while developing their own project.\n\nDates: 21–24 May 2026, 13:30–18:00. Location: Tashkent. Applications were open until 10 May 2026; places were limited.',
    },
  },
  {
    id: 'exh_marionettes_2026',
    type: 'exhibition',
    hasFullContent: true,
    startDate: '2026-05-20',
    endDate: '2026-07-31',
    place: 'ARTepa Gallery by Green University, Astronomy Park, Tashkent',
    coverImage: 'images/events/exh_marionettes_2026/cover.webp',
    gallery: ['images/events/exh_marionettes_2026/gallery-1.webp'],
    partnerIds: [],
    artistIds: [],
    machineTranslatedLangs: ['uz', 'en'],
    title: {
      ru: 'MARIONETTES — персональная выставка Петера Эршманна',
      uz: 'MARIONETTES — Peter Aerschmann shaxsiy ko‘rgazmasi',
      en: 'MARIONETTES — Solo Exhibition by Peter Aerschmann',
    },
    description: {
      ru: 'Художник: Петер Эршманн (Швейцария). Выставка проводится при поддержке Швейцарского совета по искусству Pro Helvetia и Национального комитета Республики Узбекистан по экологии и изменению климата, в рамках проекта «Art Station: перекрёсток свободы самовыражения, художественного творчества, инклюзивного диалога и развития общества» (в сотрудничестве с CAACP Швейцарского агентства по развитию и сотрудничеству, SDC).\n\nMarionettes — персональная выставка швейцарского видео- и медиахудожника Петера Эршманна: медитативное видео-пространство, где привычные движения превращаются в бесконечные циклы, а человек существует между контролем и свободой. Более 20 лет Эршманн исследует поведение человека через видеоинсталляции и цифровые tableaux vivants — «живые картины», персонажи которых повторяют жесты снова и снова, словно марионетки внутри систем: технологий, социальных норм, экономических процессов и экологических кризисов.\n\nОдна из центральных тем выставки — экология, не как отдельный образ природы, а как часть повседневных привычек, влияющих на окружающую среду. Через повторение, цикличность и замедленное движение выставка говорит о моделях потребления, ответственности и возможности перемен — о том, как даже маленькое отклонение от привычного ритма может стать началом трансформации.\n\nОткрытие: 20 мая 2026, 19:00. ARTepa Gallery by Green University, Astronomy Park, ул. Осиё, Ташкент. Выставка работает до 31 июля 2026.',
      uz: 'Rassom: Peter Aerschmann (Shveytsariya). Ko‘rgazma Shveytsariya san’at kengashi Pro Helvetia va O‘zbekiston Respublikasi Ekologiya va iqlim o‘zgarishi milliy qo‘mitasi ko‘magida, «Art Station: so‘z erkinligi, badiiy ijod, inklyuziv muloqot va jamiyat rivoji chorrahasi» loyihasi doirasida (Shveytsariya Taraqqiyot va Hamkorlik Agentligi, SDC ning CAACP dasturi bilan hamkorlikda) taqdim etiladi.\n\nMarionettes — shveytsariyalik video va media rassom Peter Aerschmannning shaxsiy ko‘rgazmasi: bu meditativ video-makon bo‘lib, unda odatiy harakatlar cheksiz sikllarga aylanadi, inson esa nazorat va erkinlik orasida yashaydi. Aerschmann 20 yildan ortiq vaqt davomida inson xatti-harakatini video installyatsiyalar va raqamli tableaux vivants — «jonli suratlar» orqali o‘rganadi; ularning qahramonlari imo-ishoralarni qayta-qayta takrorlaydi, xuddi tizimlar ichidagi qo‘g‘irchoqlardek: texnologiyalar, ijtimoiy me’yorlar, iqtisodiy jarayonlar va ekologik inqirozlar.\n\nKo‘rgazmaning markaziy mavzularidan biri — ekologiya, tabiatning alohida qiyofasi sifatida emas, balki atrof-muhitga ta’sir qiluvchi kundalik odatlarning bir qismi sifatida. Takror, siklik va sekinlashgan harakat orqali ko‘rgazma iste’mol modellari, mas’uliyat va o‘zgarish imkoniyati haqida so‘zlaydi — odatiy maromdan kichik chetlanish ham o‘zgarishning boshlanishi bo‘lishi mumkinligi haqida.\n\nOchilish: 2026-yil 20-may, 19:00. ARTepa Gallery by Green University, Astronomy Park, Osiyo ko‘chasi, Toshkent. Ko‘rgazma 2026-yil 31-iyulgacha ochiq.',
      en: 'Artist: Peter Aerschmann (Switzerland). The exhibition is presented with the support of the Swiss Arts Council Pro Helvetia and the National Committee of the Republic of Uzbekistan for Ecology and Climate Change, within the project “Art Station: Crossroads of Freedom of Expression, Artistic Creativity, Inclusive Dialogue and Community Development” (in cooperation with the CAACP of the Swiss Agency for Development and Cooperation, SDC).\n\nMarionettes is a solo exhibition by Swiss video and media artist Peter Aerschmann: a meditative video space where familiar movements turn into endless loops and the human figure exists between control and freedom. For more than 20 years Aerschmann has explored human behaviour through video installations and digital tableaux vivants — “living pictures” whose characters repeat their gestures again and again, like marionettes inside systems: technology, social norms, economic processes, and ecological crises.\n\nOne of the exhibition’s central themes is ecology — not as a separate image of nature, but as part of the everyday habits that affect the environment. Through repetition, cyclicality, and slowed-down motion, the exhibition speaks about patterns of consumption, responsibility, and the possibility of change — about how even a small deviation from a habitual rhythm can become the beginning of a transformation.\n\nOpening: 20 May 2026, 19:00. ARTepa Gallery by Green University, Astronomy Park, Osiyo street, Tashkent. On view until 31 July 2026.',
    },
  },
  {
    id: 'ws_earth_water_air_2026',
    type: 'workshop',
    hasFullContent: true,
    startDate: '2026-09-01',
    // Точная дата воркшопа не подтверждена (только «пять дней», без чисел) —
    // вместо конкретного числа показываем месяц. Итоговая выставка, на
    // которую эти воркшопы работали, теперь известна и датирована — см.
    // exh_interflows_2026 ниже.
    dateLabel: { ru: 'Сентябрь 2026', uz: '2026-yil sentabr', en: 'September 2026' },
    place: 'ARTepa Gallery by Green University, Tashkent',
    coverImage: 'images/events/ws_earth_water_air_2026/cover.webp',
    gallery: [],
    partnerIds: [],
    artistIds: [],
    machineTranslatedLangs: ['uz', 'en'],
    title: {
      ru: 'EARTH, WATER & AIR',
      uz: 'EARTH, WATER & AIR',
      en: 'EARTH, WATER & AIR',
    },
    description: {
      ru: 'Организаторы: Art Station и исследовательский коллектив DAVRA. При поддержке Национального комитета Республики Узбекистан по экологии и изменению климата и Швейцарского агентства по развитию и сотрудничеству (SDC) в рамках Central Asia Art and Culture Programme (CAACP) и проекта «Art Station: перекрёсток свободы самовыражения, художественного творчества, инклюзивного диалога и развития общества». Фото: Дарья Раскольникова.\n\nВ галерее ARTepa by Green University прошли воркшопы EARTH, WATER & AIR, участники которых в течение пяти дней работали над будущими проектами и перформансами. Художники из разных стран Центральной Азии объединились в совместные группы и начали создавать новые работы, исследуя общие для региона темы — землю, воду, воздух, климат, ландшафт и отношения человека с окружающей средой.\n\nПредварительный показ стал первой возможностью поделиться этими идеями со зрителями. Индивидуальные художественные практики постепенно превратились в совместный творческий процесс через обмен опытом и диалог. Представленные работы продолжат развиваться и станут частью выставки «Слияния» (Interflows), которая откроется в галерее ARTepa 18 сентября 2026 года.',
      uz: 'Tashkilotchilar: Art Station va DAVRA tadqiqot jamoasi. O‘zbekiston Respublikasi Ekologiya va iqlim o‘zgarishi milliy qo‘mitasi hamda Shveytsariya Taraqqiyot va Hamkorlik Agentligi (SDC) ko‘magida, Central Asia Art and Culture Programme (CAACP) va «Art Station: so‘z erkinligi, badiiy ijod, inklyuziv muloqot va jamiyat rivoji chorrahasi» loyihasi doirasida. Foto: Darya Raskolnikova.\n\nARTepa by Green University galereyasida EARTH, WATER & AIR vorkshoplari bo‘lib o‘tdi; ularning ishtirokchilari besh kun davomida bo‘lajak loyihalar va performanslar ustida ishladilar. Markaziy Osiyoning turli mamlakatlaridan kelgan rassomlar birgalikdagi guruhlarga birlashib, mintaqa uchun umumiy mavzularni — yer, suv, havo, iqlim, landshaft va inson bilan atrof-muhit munosabatlarini o‘rganib, yangi asarlar yarata boshladilar.\n\nDastlabki namoyish bu g‘oyalarni tomoshabinlar bilan bo‘lishishning birinchi imkoniyati bo‘ldi. Individual badiiy amaliyotlar tajriba almashish va muloqot orqali asta-sekin birgalikdagi ijodiy jarayonga aylandi. Namoyish etilgan asarlar rivojlanishda davom etadi va 2026-yil 18-sentabrda ARTepa galereyasida ochiladigan «O‘zaro oqimlar» (Interflows) ko‘rgazmasi tarkibiga kiradi.',
      en: 'Organizers: Art Station and the research collective DAVRA. Supported by the National Committee of the Republic of Uzbekistan for Ecology and Climate Change and the Swiss Agency for Development and Cooperation (SDC) within the Central Asia Art and Culture Programme (CAACP) and the project “Art Station: Crossroads of Freedom of Expression, Artistic Creativity, Inclusive Dialogue and Community Development.” Photo: Daria Raskolnikova.\n\nThe ARTepa Gallery by Green University hosted the EARTH, WATER & AIR workshops, whose participants spent five days working on future projects and performances. Artists from across Central Asia formed joint groups and began creating new works, exploring themes shared across the region — earth, water, air, climate, landscape, and the relationship between people and their environment.\n\nThe preview show was the first opportunity to share these ideas with an audience. Individual artistic practices gradually turned into a collective creative process through the exchange of experience and dialogue. The works shown will continue to develop and will become part of the exhibition “Interflows,” opening at the ARTepa Gallery on 18 September 2026.',
    },
  },
  {
    // Официальное название по-разному переведено источниками: в
    // собственном посте Art Station — «Слияния», у Нацкомэкологии
    // (gov.uz, пресс-релиз на 3 языках) — «Взаимные потоки». EN/UZ
    // названия и даты (18.09–15.12) совпадают в обоих источниках и на
    // обоих официальных постерах — берём их как подтверждённые.
    id: 'exh_interflows_2026',
    type: 'exhibition',
    hasFullContent: true,
    startDate: '2026-09-18',
    endDate: '2026-12-15',
    place: 'ARTepa Gallery by Green University, Astronomy Park, Osiyo street 30, Tashkent',
    coverImage: 'images/events/exh_interflows_2026/cover.webp',
    gallery: [],
    partnerIds: [],
    artistIds: [],
    machineTranslatedLangs: ['uz', 'en'],
    title: {
      ru: 'Слияния',
      uz: 'O‘zaro oqimlar',
      en: 'Interflows',
    },
    description: {
      ru: 'Организаторы: Art Station и исследовательский коллектив DAVRA, совместно с ARTepa Gallery by Green University. При поддержке Национального комитета Республики Узбекистан по экологии и изменению климата и Швейцарского агентства по развитию и сотрудничеству (SDC) в рамках Central Asia Art and Culture Programme (CAACP) и проекта «Art Station: перекрёсток свободы самовыражения, художественного творчества, инклюзивного диалога и развития общества».\n\n«Слияния» (Interflows) — выставка о воде и её роли в экологических, социальных и политических изменениях в Центральной Азии. Проект исследует отношения человека с реками и ландшафтами — их использование, преобразование и контроль.\n\nВ экспозиции представлены работы DAVRA Research Collective, включая фильм «Stains of Oxus» (2016) Саодат Исмаиловой, а также новые работы молодых художников Центральной Азии, созданные в рамках исследовательских программ и резиденций, включая программу EARTH, WATER & AIR в галерее ARTepa.\n\nВыставка будет развиваться и меняться на протяжении трёх месяцев, объединяя работы, идеи и результаты разных этапов исследования DAVRA. В центре «Слияний» — вопрос о том, как представить отношения с водой и ландшафтом за пределами эксплуатации и контроля и какие другие формы взаимодействия с окружающей средой возможны.\n\nОткрытие: 18 сентября 2026, 18:30. Вход свободный.',
      uz: 'Tashkilotchilar: Art Station va DAVRA tadqiqot jamoasi, ARTepa Gallery by Green University bilan hamkorlikda. O‘zbekiston Respublikasi Ekologiya va iqlim o‘zgarishi milliy qo‘mitasi hamda Shveytsariya Taraqqiyot va Hamkorlik Agentligi (SDC) ko‘magida, Central Asia Art and Culture Programme (CAACP) va «Art Station: so‘z erkinligi, badiiy ijod, inklyuziv muloqot va jamiyat rivoji chorrahasi» loyihasi doirasida.\n\n«O‘zaro oqimlar» (Interflows) — suv va uning Markaziy Osiyodagi ekologik, ijtimoiy va siyosiy o‘zgarishlardagi roliga bag‘ishlangan ko‘rgazma. Loyiha insonning daryolar va landshaftlar bilan munosabatini — ulardan foydalanish, o‘zgartirish va nazorat qilishni o‘rganadi.\n\nKo‘rgazmada DAVRA Research Collective asarlari, jumladan Saodat Ismoilovaning «Stains of Oxus» (2016) filmi, shuningdek tadqiqot dasturlari va rezidensiyalar — jumladan ARTepa galereyasidagi EARTH, WATER & AIR dasturi — doirasida yaratilgan Markaziy Osiyolik yosh rassomlarning yangi asarlari taqdim etiladi.\n\nKo‘rgazma uch oy davomida rivojlanib va o‘zgarib boradi, DAVRA tadqiqotining turli bosqichlaridagi asarlar, g‘oyalar va natijalarni birlashtiradi. «O‘zaro oqimlar»ning markazida savol turadi: suv va landshaft bilan munosabatlarni ekspluatatsiya va nazoratdan tashqarida qanday tasvirlash mumkin va atrof-muhit bilan qanday boshqa o‘zaro aloqa shakllari mavjud?\n\nOchilish: 2026-yil 18-sentabr, 18:30. Kirish bepul.',
      en: 'Organizers: Art Station and the DAVRA research collective, together with ARTepa Gallery by Green University. Supported by the National Committee of the Republic of Uzbekistan for Ecology and Climate Change and the Swiss Agency for Development and Cooperation (SDC), within the Central Asia Art and Culture Programme (CAACP) and the project “Art Station: Crossroads of Freedom of Expression, Artistic Creativity, Inclusive Dialogue and Community Development.”\n\n“Interflows” is an exhibition about water and its role in the ecological, social, and political transformations of Central Asia. The project explores human relationships with rivers and landscapes — their use, transformation, and control.\n\nThe exhibition presents works by the DAVRA Research Collective, including the film “Stains of Oxus” (2016) by Saodat Ismailova, alongside new works by young Central Asian artists created within research programmes and residencies, including the EARTH, WATER & AIR programme at the ARTepa Gallery.\n\nThe exhibition will keep developing and changing over three months, bringing together works, ideas, and results from different stages of DAVRA’s research. At the heart of “Interflows” is a question: how can our relationship with water and landscape be represented beyond exploitation and control, and what other forms of engagement with the environment are possible?\n\nOpening: 18 September 2026, 18:30. Free entry.',
    },
  },
]

/*
  Краткие события (EventShort) — те, для которых в отчёте нет отдельной
  страницы-разворота с описанием (прошли позже даты публикации отчёта,
  либо относятся к программе 2026 года, опубликованной частично).
  Название и дата — по разделу 3.3 брифа, без RU/UZ переводов: это
  осознанное решение схемы данных (PartialLocalizedText), не пропуск —
  карточка сама откатывается на английский, если текущий язык не
  заполнен (см. utils/localize.ts).
*/
interface ShortEventInput {
  title: string
  type: EventType
  start: string
  end?: string
  note?: string
  photo?: string
}

const shortEventInputs: ShortEventInput[] = [
  { title: 'Other Games. Improvisation', type: 'concert', start: '2025-11-15' },
  { title: 'Improvisation as a Superpower', type: 'workshop', start: '2025-11-16' },
  { title: 'Special Screenings of Short Films', type: 'filmScreening', start: '2025-11-17', end: '2025-11-18' },
  { title: 'GoNight in Khorezm', type: 'networking', start: '2025-11-20' },
  { title: 'Tour of the "LIK" Theatre Studio', type: 'theatre', start: '2025-11-28', end: '2025-11-29' },
  { title: 'Hello Uzbekistan: Techspressionism 2025', type: 'exhibition', start: '2025-12-12', end: '2025-12-16' },
  { title: 'WE HAVE SOMETHING TO SAY', type: 'exhibition', start: '2025-12-13', end: '2025-12-27' },
  { title: 'New Year Fair', type: 'fair', start: '2025-12-18', end: '2025-12-21' },

  // --- 2026 (программа опубликована частично; события с полными
  // описаниями вынесены в fullEvents выше) ---
  { title: 'Art Archive of Uzbekistan. Episode 1 — Tulagyan Erkulov', type: 'digitalArchive', start: '2026-06-22' },
]

const usedIds = new Set<string>(fullEvents.map((e) => e.id))
function uniqueId(base: string): string {
  let id = base
  let n = 2
  while (usedIds.has(id)) {
    id = `${base}-${n}`
    n += 1
  }
  usedIds.add(id)
  return id
}

export const shortEvents: EventShort[] = shortEventInputs.map(({ title, type, start, end, photo }) => ({
  id: uniqueId(`${type}-${slugify(title)}-${start.slice(0, 4)}`),
  type,
  hasFullContent: false,
  startDate: start,
  endDate: end,
  coverImage: photo ?? placeholderCover(title),
  title: { en: title },
}))

// По просьбе заказчика карточки без реального фото (плейсхолдер
// placehold.co) на сайте не показываем. Данные о событиях остаются в
// fullEvents/shortEvents — как только появится обложка, событие снова
// попадёт в выдачу.
const hasRealPhoto = (e: Event) => !e.coverImage.startsWith('https://placehold.co')

export const events: Event[] = [...fullEvents, ...shortEvents].filter(hasRealPhoto)

export function getEventById(id: string): Event | undefined {
  return events.find((e) => e.id === id)
}
