import type { LocalizedText } from '../types'

/*
  Весь контент этого файла — прямой перевод текста официального годового
  отчёта ART_STATION_AnnualReport24-25 (EN).pdf (Foreword, Mission and
  Strategic Goals, Portfolio, Audience, 2025 Visitor Survey Results,
  Important Announcement — стр. 2-7, 67-69). Английский вариант — почти
  дословная цитата отчёта; RU и UZ — авторский перевод (сделан мной,
  Claude, а не профессиональным переводчиком) для соответствия
  многоязычности сайта, TODO(редактору): при желании заменить на
  профессиональный перевод.
*/

export const foreword: {
  intro: LocalizedText
  ministerQuote: LocalizedText
  ministerName: string
  ministerPhoto: string
  directorQuote: LocalizedText
  directorName: string
  directorPhoto: string
} = {
  intro: {
    ru: 'Art Station при Международном университете туризма и культурного наследия «Шёлковый путь» в Самарканде — это культурная платформа и образовательный центр, объединяющий лекционные залы, пространства для открытых дискуссий, студии, лаборатории и выставочные залы — всё в стенах бережно отреставрированного архитектурного памятника конца XIX века. Art Station создаёт среду для творческого и профессионального развития, обмена знаниями и междисциплинарного сотрудничества, предлагая возможности для обучения, исследовательских проектов, образовательных программ и общественных инициатив. Платформа соединяет местных и международных профессионалов, студентов и жителей города, укрепляя культурный диалог и культурный потенциал региона.',
    uz: "Samarqanddagi Ipak yo'li xalqaro turizm va madaniy meros universiteti qoshidagi Art Station — ma'ruza zallari, ochiq muhokama maydonlari, studiyalar, laboratoriyalar va ko'rgazma zallarini birlashtiruvchi madaniy platforma va ta'lim markazi bo'lib, XIX asr oxiriga oid ehtiyotkorlik bilan ta'mirlangan me'moriy yodgorlik binosida joylashgan. Art Station ijodiy va professional rivojlanish, bilim almashish va fanlararo hamkorlik uchun muhit yaratadi, ta'lim, tadqiqot loyihalari, ta'lim dasturlari va jamoat tashabbuslari uchun imkoniyatlar taqdim etadi. Platforma mahalliy va xalqaro mutaxassislarni, talabalarni va jamiyat a'zolarini bog'laydi, madaniy muloqotni va mintaqaning madaniy salohiyatini mustahkamlaydi.",
    en: 'Art Station by the Silk Road International University of Tourism and Cultural Heritage in Samarkand, is a cultural platform and educational center that brings together lecture halls, open discussion spaces, studios, laboratories, and exhibition areas — all located within a carefully restored architectural heritage building from the late 19th century. Art Station creates an environment for creative and professional development, knowledge exchange, and interdisciplinary collaboration, offering opportunities for learning, research projects, educational programs, and community initiatives. The platform connects local and international professionals, students, and community members, fostering cultural dialogue and strengthening the cultural potential of the region.',
  },
  ministerQuote: {
    ru: 'Образовательные, культурные и экологические инициативы закладывают основу для устойчивого развития, помогают молодым людям раскрыть свой потенциал и укрепляют профессиональное сообщество.',
    uz: "Ta'lim, madaniyat va ekologiya sohasidagi tashabbuslar barqaror rivojlanish uchun zamin yaratadi, yoshlarga o'z salohiyatini ochishga yordam beradi va professional jamoani mustahkamlaydi.",
    en: 'Educational, cultural, and environmental initiatives lay the groundwork for sustainable development, help young people realize their potential, and strengthen the professional community.',
  },
  ministerName: 'Азиз Абдухакимов — министр экологии, охраны окружающей среды и изменения климата Республики Узбекистан',
  ministerPhoto: 'images/about/aziz-abdukhakimov.webp',
  directorQuote: {
    ru: 'Когда у тебя сильная команда и надёжная поддержка, можно добиться многого! Для меня Art Station — это, прежде всего, пространство для обучения и обмена знаниями, где я расту вместе с командой и где рождаются новые возможности для профессионального развития и открытого диалога. Всё, чего мы достигли, стало возможным благодаря нашей команде и поддержке наших партнёров.',
    uz: "Kuchli jamoa va ishonchli qo'llab-quvvatlash bo'lsa, katta natijalarga erishish mumkin! Men uchun Art Station — bu, avvalambor, o'rganish va bilim almashish maydoni, u yerda men jamoam bilan birga o'sib boraman va professional rivojlanish hamda ochiq muloqot uchun yangi imkoniyatlar yaratiladi. Biz erishgan barcha natijalar jamoamiz va hamkorlarimiz qo'llab-quvvatlashi tufayli mumkin bo'ldi.",
    en: 'When you have a strong team and reliable support, you can achieve great things! For me, Art Station is, above all, a space for learning and knowledge sharing, where I grow together with the team, and where new opportunities for professional development and open dialogue are created. Everything we have accomplished has been made possible thanks to our team and the support of our partners.',
  },
  directorName: 'Дона Кулматова — директор Art Station',
  directorPhoto: 'images/about/dona-kulmatova.webp',
}

export const mission: LocalizedText = {
  ru: 'Миссия Art Station — развивать культурный потенциал общества через образовательные и художественные программы, посвящённые изучению, интерпретации и продвижению культурного наследия. В рамках этой миссии Art Station создаёт открытое, многофункциональное и междисциплинарное пространство для выставок, культурных мероприятий и образовательных инициатив. Арт-кластер стремится стать примером для нового поколения культурных деятелей Центральной Азии, продвигая высокие стандарты культурного менеджмента. В основе его работы — принцип «никого не оставлять без внимания», отражающий ценности мирного сосуществования и взаимной поддержки.',
  uz: "Art Stationning maqsadi — madaniy merosni o'rganish, talqin qilish va targ'ib qilishga bag'ishlangan ta'lim va ijodiy dasturlar orqali jamiyatning madaniy salohiyatini rivojlantirishdir. Shu maqsad doirasida Art Station ko'rgazmalar, madaniy tadbirlar va ta'lim tashabbuslari uchun ochiq, ko'p funksiyali va fanlararo maydon yaratadi. Art klasteri Markaziy Osiyoning yangi avlod madaniyat mutaxassislari uchun namuna bo'lishga, madaniy menejmentning yuqori standartlarini targ'ib qilishga intiladi. Uning faoliyati \"hech kimni e'tibordan chetda qoldirmaslik\" tamoyiliga asoslanadi — bu tinch-totuv yashash va o'zaro qo'llab-quvvatlash qadriyatlarini aks ettiradi.",
  en: 'The mission of Art Station is to develop the cultural potential of society through educational and artistic programs dedicated to the study, interpretation, and promotion of cultural heritage. Within this mission, Art Station creates an open, multifunctional, and multidisciplinary space for exhibitions, cultural events, and educational initiatives. The art cluster aims to serve as an example for a new generation of cultural practitioners in Central Asia, promoting high standards of cultural management. Its work is guided by the principle of "Leaving no one behind," reflecting the values of peaceful coexistence and mutual support.',
}

export const strategicGoals: { title: LocalizedText; items: LocalizedText[] } = {
  title: {
    ru: 'Стратегические цели',
    uz: 'Strategik maqsadlar',
    en: 'Strategic goals',
  },
  items: [
    { ru: 'Продвигать', uz: "Targ'ib qilish", en: 'Promote' },
    { ru: 'Укреплять', uz: 'Mustahkamlash', en: 'Strengthen' },
    { ru: 'Вовлекать', uz: 'Jalb qilish', en: 'Engage' },
  ],
}

export interface PortfolioItem {
  title: LocalizedText
  text: LocalizedText
}

export const portfolio: PortfolioItem[] = [
  {
    title: { ru: 'Выставки', uz: "Ko'rgazmalar", en: 'Exhibition' },
    text: {
      ru: 'Продвижение культурного разнообразия и межкультурного диалога через выставки, объединяющие местную аудиторию и международных гостей — от признанных художников до новых имён.',
      uz: "Mahalliy tomoshabinlarni va xalqaro mehmonlarni birlashtiruvchi, tan olingan xalqaro va milliy rassomlar hamda yosh iste'dodlarni namoyish etuvchi ko'rgazmalar orqali madaniy xilma-xillik va madaniyatlararo muloqotni targ'ib qilish.",
      en: 'Promoting cultural diversity and intercultural dialogue through exhibitions that bring together local audiences and international guests, featuring renowned international and national artists as well as emerging talents from various fields.',
    },
  },
  {
    title: { ru: 'Резиденции', uz: 'Rezidensiyalar', en: 'Residencies' },
    text: {
      ru: 'Мастерские и творческие студии, где художники разных направлений создают новые работы и обмениваются опытом. Полная поддержка начинающих узбекских художников и рабочее пространство для международных исследователей, кураторов и дизайнеров.',
      uz: "Turli yo'nalishdagi rassomlar yangi asarlar yaratadigan va tajriba almashadigan ustaxonalar va ijodiy studiyalar. Yosh o'zbek rassomlariga to'liq qo'llab-quvvatlash va xalqaro tadqiqotchilar, kuratorlar hamda dizaynerlar uchun ish maydoni.",
      en: 'Workshops and creative studios where artists of various disciplines create new works and share experiences. The program provides full support for emerging Uzbek artists and offers international professionals — researchers, curators, and designers — working space and communication support, fostering creative exchange and professional development.',
    },
  },
  {
    title: { ru: 'Образование', uz: "Ta'lim", en: 'Education' },
    text: {
      ru: 'Лекции, тренинги, семинары, образовательные резиденции, кинопоказы и образовательные поездки для молодёжи и любителей искусства.',
      uz: "Yoshlar va san'at ishqibozlari uchun ma'ruzalar, treninglar, seminarlar, ta'lim rezidensiyalari, kinoseanslar va ta'lim sayohatlari.",
      en: 'Lectures, trainings, seminars, educational residencies, film screenings, and educational trips for youth and art enthusiasts.',
    },
  },
  {
    title: { ru: 'Арт-интервенции', uz: 'San\'at interventsiyalari', en: 'Art Interventions' },
    text: {
      ru: 'Культурные события, вовлекающие местную аудиторию, студентов и незащищённые группы, — вклад в участие в искусстве и создание творческих сообществ.',
      uz: "Mahalliy tomoshabinlarni, talabalarni va ehtiyojmand guruhlarni jalb qiluvchi madaniy tadbirlar — san'atda ishtirok etish va ijodiy jamoalarni shakllantirish.",
      en: 'Cultural events engaging local audiences, students, and underserved groups, fostering participation in the arts and building creative communities.',
    },
  },
  {
    title: { ru: 'Исследования', uz: 'Tadqiqotlar', en: 'Research' },
    text: {
      ru: 'Культурное картирование, полевые и социальные исследования, сбор и анализ данных в поддержку образовательных программ.',
      uz: "Madaniy xaritalash, dala va ijtimoiy tadqiqotlar, ta'lim dasturlarini qo'llab-quvvatlash uchun ma'lumot yig'ish va tahlil qilish.",
      en: 'Cultural mapping, field and social studies, data collection and analysis in support of educational programs.',
    },
  },
  {
    title: { ru: 'Пространства', uz: 'Maydonlar', en: 'Spaces' },
    text: {
      ru: 'Выставочная площадь свыше 3300 м² и полностью оборудованные образовательные помещения, а также летнее пространство под открытым небом с собственным садом.',
      uz: "3300 m² dan ortiq ko'rgazma maydoni va to'liq jihozlangan ta'lim xonalari, shuningdek o'z bog'iga ega ochiq havodagi yozgi maydon.",
      en: 'An exhibition area of over 3,300 m² and fully equipped educational facilities, as well as an open-air summer art space with its own garden.',
    },
  },
]

export const audienceTitle: LocalizedText = { ru: 'Аудитория', uz: 'Auditoriya', en: 'Audience' }

export const audience: LocalizedText[] = [
  {
    ru: 'Студенты, стремящиеся к развитию, обучению и поиску собственного творческого голоса',
    uz: "Rivojlanish, o'rganish va o'z ijodiy ovozini izlashga intilayotgan talabalar",
    en: 'Students striving for development, learning, and discovering their own artistic voice',
  },
  {
    ru: 'Художники и культурные профессионалы — практикующие специалисты в поиске пространства для творчества, обмена опытом и профессионального роста',
    uz: "Rassomlar va madaniyat mutaxassislari — ijod, tajriba almashish va professional o'sish uchun maydon izlayotgan amaliyotchi mutaxassislar",
    en: 'Artists and cultural professionals — practicing specialists seeking space for creativity, exchange, and professional growth',
  },
  {
    ru: 'Туристы — местные и иностранные — заинтересованные в качественных культурных событиях и знакомстве с местным искусством',
    uz: "Turistlar — mahalliy va xorijiy — sifatli madaniy tadbirlar va mahalliy san'at bilan tanishishga qiziquvchilar",
    en: 'Tourists — both local and international — interested in high-quality cultural events and engagement with local art',
  },
  {
    ru: 'Международные делегации, эксперты и исследователи, участвующие в межкультурных проектах и программах',
    uz: 'Madaniyatlararo loyiha va dasturlarda ishtirok etuvchi xalqaro delegatsiyalar, ekspertlar va tadqiqotchilar',
    en: 'International delegations, experts, and researchers participating in intercultural projects and programs',
  },
  {
    ru: 'Представители государственных органов и культурных институций, заинтересованные в обмене знаниями и внедрении лучших практик',
    uz: "Bilim almashish va ilg'or tajribalarni joriy etishga qiziqqan davlat organlari va madaniyat muassasalari vakillari",
    en: 'Representatives of government bodies and cultural institutions interested in knowledge exchange and the implementation of best practices',
  },
  {
    ru: 'Местные жители, ищущие насыщенную культурную и образовательную жизнь',
    uz: 'Faol madaniy va ta\'lim hayotini izlayotgan mahalliy aholi',
    en: 'Local residents seeking a vibrant cultural and educational life',
  },
  {
    ru: 'Дети с ограниченными возможностями, вовлечённые в адаптированные образовательные и творческие программы',
    uz: "Moslashtirilgan ta'lim va ijodiy dasturlarga jalb qilingan nogironligi bo'lgan bolalar",
    en: 'Children with disabilities engaged in adapted educational and creative programs',
  },
]

export const survey: { title: LocalizedText; paragraphs: LocalizedText[] } = {
  title: {
    ru: 'Результаты опроса посетителей 2025',
    uz: '2025-yilgi tashrif buyuruvchilar so\'rovi natijalari',
    en: '2025 Visitor Survey Results',
  },
  paragraphs: [
    {
      ru: 'В 2025 году Art Station подтвердила репутацию современного культурного пространства, которое ценят за атмосферу, надёжность и неподдельную заботу о каждом госте. Больше половины посетителей — 57% — узнали о нас по личным рекомендациям, что говорит о силе доверия и «сарафанного радио». Ещё 32% пришли благодаря Instagram — он остаётся ключевым инструментом продвижения искусства. Ещё 7% узнали об Art Station из СМИ, а 4% — случайно, на улице или по баннерам.',
      uz: "2025-yilda Art Station o'zining zamonaviy madaniy makon sifatidagi obro'sini — muhiti, ishonchliligi va har bir mehmonga bo'lgan samimiy g'amxo'rligi bilan — yana bir bor tasdiqladi. Tashrif buyuruvchilarning yarmidan ko'pi — 57% — biz haqida shaxsiy tavsiyalar orqali bilib olgan, bu esa ishonch va \"og'izdan og'izga\" tarqalishning kuchini ko'rsatadi. Yana 32% Instagram tufayli kelgan — u san'atni targ'ib qilishning asosiy vositasi bo'lib qolmoqda. 7% Art Station haqida OAV orqali, 4% esa tasodifan — ko'chada yoki bannerlar orqali bilib olgan.",
      en: 'In 2025, Art Station reaffirmed its reputation as a contemporary cultural space valued for its atmosphere, reliability, and genuine care for every guest. More than half of the visitors — 57% — learned about us through personal recommendations, demonstrating the power of trust and word-of-mouth. Another 32% came thanks to Instagram, which remains a key tool for promoting art. Additionally, 7% discovered Art Station through the media, and 4% — by chance, on the street or via banners.',
    },
    {
      ru: 'Заметно выросла и вовлечённость в общение: доля посетителей, отметивших внимательность и отзывчивость команды, выросла с 56% до 69%. Профессионализм персонала отметили почти три четверти опрошенных, а 80% гостей почувствовали неподдельную заботу и доброжелательность.',
      uz: "Muloqotdagi jalb etilganlik ham sezilarli darajada o'sdi: jamoaning e'tiborliligi va javobgarligini qayd etgan mehmonlar ulushi 56%dan 69%gacha ko'tarildi. So'ralganlarning deyarli to'rtdan uch qismi xodimlarning professionalligini qayd etdi, 80% mehmon esa samimiy g'amxo'rlik va mehribonlikni his qildi.",
      en: 'Engagement in communication has also increased noticeably: the share of visitors who appreciate the team\'s attentiveness and responsiveness rose from 56% to 69%. The professionalism of the staff deserves special recognition: nearly three-quarters of respondents highlighted the team\'s confidence and courtesy, and 80% of guests feel genuine care and kindness.',
    },
    {
      ru: '80% посетителей описали атмосферу Art Station как вдохновляющую и тёплую, а 100% опрошенных сказали, что порекомендуют Art Station друзьям.',
      uz: "Tashrif buyuruvchilarning 80% Art Station muhitini ilhomlantiruvchi va iliq deb ta'rifladi, so'ralganlarning 100% esa Art Stationni do'stlariga tavsiya qilishlarini aytdi.",
      en: '80% of visitors described the atmosphere as inspiring and warm, and 100% of respondents said they would recommend Art Station to their friends.',
    },
  ],
}

export const importantAnnouncement: { title: LocalizedText; text: LocalizedText } = {
  title: {
    ru: 'Важное объявление',
    uz: "Muhim e'lon",
    en: 'Important Announcement',
  },
  text: {
    ru: 'На момент публикации этого годового отчёта Art Station прошла через организационные изменения, повлиявшие на формат дальнейшей работы. На новом этапе Art Station продолжает реализовывать свои программы и проекты вне привязки к постоянной площадке, используя разные форматы и партнёрские пространства, расширяя партнёрства и профессиональные инициативы в разных регионах Республики Узбекистан. Стратегические приоритеты, ценности и основные направления деятельности Art Station остаются неизменными и по-прежнему сосредоточены на развитии образовательных, междисциплинарных и культурных инициатив.',
    uz: "Ushbu yillik hisobot chop etilayotgan vaqtda Art Station kelgusi faoliyat formatiga ta'sir ko'rsatgan tashkiliy o'zgarishlarni boshdan kechirdi. Yangi bosqichda Art Station o'z dasturlari va loyihalarini doimiy maydonga bog'lanmagan holda, turli formatlar va hamkor maydonlardan foydalangan holda amalga oshirishda davom etmoqda, O'zbekiston Respublikasining turli mintaqalarida hamkorlik va professional tashabbuslarni kengaytirmoqda. Art Stationning strategik ustuvorliklari, qadriyatlari va asosiy faoliyat yo'nalishlari o'zgarishsiz qolmoqda va ta'lim, fanlararo hamda madaniy tashabbuslarni rivojlantirishga qaratilgan.",
    en: 'At the time of publication of this annual report, Art Station underwent organizational changes that affected the format of its future operations. As part of a new phase, Art Station continues to implement its programs and projects independently of a fixed venue, using various formats and partner spaces, and expanding partnerships and professional initiatives across various regions of the Republic of Uzbekistan. Art Station\'s strategic priorities, values, and core areas of activity remain unchanged and continue to focus on the development of educational, interdisciplinary, and cultural initiatives.',
  },
}
