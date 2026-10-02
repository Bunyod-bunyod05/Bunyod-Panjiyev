// ---------------------------------------------------------------------------
// All editable site content lives here. Update contact info, taglines,
// project details, and translations in this single file — the components
// simply render whatever's in here.
// ---------------------------------------------------------------------------

export const site = {
  name: "BUNYOD PANJIYEV",
  firstName: "Bunyod",
  email: "bunyodpanjiyev48@gmail.com",
  emailAlt: "luktolder@gmail.com",
  phone: "+998 91 906 19 77",
  phoneHref: "+998919061977",
  telegramHandle: "@bunyod_yurist",
  telegramHref: "https://t.me/bunyod_yurist",
  github: "https://github.com/Bunyod-bunyod05",
  instagramHandle: "@bunyod.yurist",
  instagramHref: "https://www.instagram.com/bunyod.yurist/",
  linkedinName: "Bunyod Panjiyev",
  linkedinHref: "https://www.linkedin.com/in/bunyod-panjiyev/",
  liveDemo: "https://bperro.streamlit.app/",
  repo: "https://github.com/Bunyod-bunyod05/legal-multiagent",
  cvEn: "/cv/Bunyod_Panjiyev_CV_EN.pdf",
  cvRu: "/cv/Bunyod_Panjiyev_CV_RU.pdf",
  location: "Tashkent, Uzbekistan",
} as const;

export const projectStack = [
  "LangGraph",
  "LangChain",
  "Qdrant Cloud",
  "fastembed",
  "Groq · Llama 3.3 70B",
  "OpenRouter",
  "Tavily",
  "PyMuPDF",
  "Streamlit",
] as const;

export const projectAgents = ["Supervisor", "Retriever", "Web", "Code"] as const;

// ---------------------------------------------------------------------------
// Translations. Three languages: English, O'zbek, Русский.
// Tech terms (LangGraph, Qdrant, LiteLLM, etc.) are kept in Latin script
// across all three since that's how developers refer to them.
// ---------------------------------------------------------------------------

export type Lang = "en" | "uz" | "ru";

export const languages: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "uz", label: "UZ" },
  { code: "ru", label: "RU" },
];

const en = {
  top: {
    tagline: "Lawyer · LegalTech · AI",
    location: "Tashkent, Uzbekistan",
  },
  nav: {
    home: "Home",
    about: "About",
    practice: "Focus",
    work: "Projects",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Portfolio — 2026",
    quote: "The limits of my language mean the limits of my world.",
    attribution: "Ludwig Wittgenstein",
    subheading: "I build AI systems for law",
    intro:
      "Systems that show not only the answer, but also its legal basis.",
  },
  cards: {
    demo: {
      label: "Try it",
      title: "Live demo",
      body: "Multi-agent legal analyst — see how the system works in practice.",
    },
    repo: {
      label: "Code",
      title: "Repository",
      body: "Open-source code and technical architecture on GitHub — LangGraph, Qdrant and Groq.",
    },
    consult: {
      label: "Contact",
      title: "Project discussion",
      body: "Let's discuss your AI and LegalTech project.",
    },
  },
  why: {
    eyebrow: "Why work with me",
    heading: "Legal AI is not just a chatbot.",
    body1:
      "In law, a model citing a norm or court decision that looks convincing but does not exist is not a mere technical glitch. Such a conclusion can lead to a wrong legal decision.",
    body2:
      "That is why I build legal AI systems on the principles of source grounding, verifiability, and control.",
    listLead: "My systems:",
    points: [
      "link answers to the relevant legal sources;",
      "hand calculations to deterministic code, not to the LLM;",
      "use external search when the internal sources have no answer;",
      "manage model providers and API keys in a separate infrastructure layer.",
    ],
  },
  practice: {
    eyebrow: "What I work on",
    heading: "Focus areas",
    intro:
      "The three areas behind my legal-AI projects — from ingesting the source to drawing the conclusion.",
    items: [
      {
        title: "Legal AI Systems",
        body: "AI systems built on legislation and other legal sources, delivering source-linked answers and verifiable citations.",
      },
      {
        title: "Multi-Agent Legal Analysis",
        body: "Controlled AI architectures that split search, legal analysis, calculations and other tasks across separate agents.",
      },
      {
        title: "Legal Information Retrieval",
        body: "Systems for indexing legislation, case law and internal documents, semantic search, and pinpointing the right legal source.",
      },
    ],
  },
  about: {
    eyebrow: "About",
    heading: "Lawyer · AI · LegalTech",
    paragraphs: [
      "I am a fourth-year law student, and in my spare time I build applied AI systems for the legal field.",
      "My focus is AI systems that rely on legal sources, produce verifiable answers, and are designed for use in real workflows. I work on retrieval pipelines, multi-agent architectures, and LLM infrastructure.",
      "My goal is not chatbots that merely give polished answers, but systems that show the legal source, let you verify the basis of a conclusion, and keep costs and technical resources under control.",
      "I am based in Tashkent and work on projects at the intersection of law and technology.",
    ],
  },
  cases: {
    eyebrow: "Projects",
    heading: "Featured project",
    docket: "No. AI-2026-01",
    status: "LegalTech · 2026",
    caseTitle: "Legal Multi-Agent",
    caseSubtitle:
      "Civil Code AI assistant — answers questions on the Civil Code of Uzbekistan (Parts 1 and 2, ~1,200 articles) and shows which article each answer is based on.",
    jurisdictionLabel: "Scope",
    jurisdiction: "Civil Code of the Republic of Uzbekistan, Parts 1 and 2 (~1,200 articles)",
    panelLabel: "Agents",
    counselLabel: "Technologies",
    summary: [
      "Every answer comes with a reference to a specific article of the Code, so the conclusion can be checked against the source.",
      "Even when a question is asked in plain language (“the seller refuses to take back a defective product”), the system translates it into legal terms and finds the relevant articles.",
      "Correctly distinguishes amended and inserted articles (26¹, 173⁷), which ordinary search confuses with Articles 261 or 1737.",
      "Contract analysis: upload a contract as a PDF, and it shows the contract type, parties, key terms and risky clauses, linked to Civil Code articles.",
      "Penalty calculator: computes contractual penalties from the amount, rate and days overdue (Civil Code, Articles 324–333). The calculation is done by code, not by the model.",
      "Does not guess at questions outside civil law (criminal, administrative, labour) — it politely declines.",
      "Provides legal information, not legal advice.",
    ],
    liveDemo: "Live demo",
    viewRepo: "View repository",
  },
  contact: {
    eyebrow: "Contact",
    heading: "Propose a project",
    body: "Working on an agent, a retrieval pipeline, or a reliable LLM system? Write to me — I review every message personally.",
    labels: {
      email: "Email",
      emailAlt: "Alt. email",
      telegram: "Telegram",
      phone: "Phone",
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      location: "Location",
    },
  },
  cv: {
    label: "Download CV",
    en: "English",
    ru: "Russian",
  },
  footer: {
    tagline: "Lawyer · LegalTech · AI",
    rights: "All rights reserved.",
  },
};

const uz: typeof en = {
  top: {
    tagline: "Yurist · LegalTech · AI",
    location: "Toshkent, O‘zbekiston",
  },
  nav: {
    home: "Bosh sahifa",
    about: "Men haqimda",
    practice: "Yo‘nalishlar",
    work: "Loyihalar",
    contact: "Aloqa",
  },
  hero: {
    eyebrow: "Portfolio — 2026",
    quote: "Mening tilimning chegaralari — mening dunyomning chegaralaridir.",
    attribution: "Ludwig Wittgenstein",
    subheading: "Huquq uchun AI tizimlarini ishlab chiqaman",
    intro:
      "Nafaqat javobni, balki uning huquqiy asosini ham ko‘rsatadigan tizimlar.",
  },
  cards: {
    demo: {
      label: "Sinash",
      title: "Jonli demo",
      body: "Multi-agent huquqiy tahlilchi — tizim qanday ishlashini amalda ko‘ring.",
    },
    repo: {
      label: "Kod",
      title: "Repozitoriy",
      body: "GitHub'dagi ochiq kod va texnik arxitektura — LangGraph, Qdrant va Groq.",
    },
    consult: {
      label: "Bog‘lanish",
      title: "Loyiha haqida suhbat",
      body: "AI va LegalTech loyihangizni muhokama qilamiz.",
    },
  },
  why: {
    eyebrow: "Nima uchun men bilan",
    heading: "Huquqiy AI — oddiy chatbot emas.",
    body1:
      "Huquqiy sohada modelning ishonchli ko‘rinadigan, ammo mavjud bo‘lmagan norma yoki sud amaliyotini keltirishi oddiy texnik xato emas. Bunday xulosa noto‘g‘ri huquqiy qarorga olib kelishi mumkin.",
    body2:
      "Shu sababli men huquqiy AI tizimlarini manbaga tayanish, tekshiriluvchanlik va nazorat tamoyillari asosida ishlab chiqaman.",
    listLead: "Tizimlarim:",
    points: [
      "javoblarni tegishli huquqiy manbalar bilan bog‘laydi;",
      "hisob-kitoblarni LLMga emas, deterministik kodga topshiradi;",
      "ichki manbada javob topilmaganda tashqi qidiruvdan foydalanadi;",
      "model provayderlari va API kalitlarini alohida infratuzilma qatlamida boshqaradi.",
    ],
  },
  practice: {
    eyebrow: "Nima ustida ishlayman",
    heading: "Yo‘nalishlarim",
    intro:
      "Huquqiy AI loyihalarim asosidagi uchta yo‘nalish — manbani yuklashdan tortib xulosa chiqarishgacha.",
    items: [
      {
        title: "Huquqiy AI tizimlari",
        body: "Qonunchilik va boshqa huquqiy manbalar asosida ishlaydigan, manbaga bog‘langan javoblar va tekshiriladigan iqtiboslarni taqdim etuvchi AI tizimlari.",
      },
      {
        title: "Multi-agent huquqiy tahlil",
        body: "Qidiruv, huquqiy tahlil, hisob-kitob va boshqa vazifalarni alohida agentlarga ajratadigan boshqariladigan AI arxitekturalari.",
      },
      {
        title: "Huquqiy ma’lumotlarni qidirish",
        body: "Qonunchilik, sud amaliyoti va ichki hujjatlarni indekslash, semantik qidiruv va kerakli huquqiy manbani aniqlash tizimlari.",
      },
    ],
  },
  about: {
    eyebrow: "Men haqimda",
    heading: "Yurist · AI · LegalTech",
    paragraphs: [
      "Men 4-kurs huquq talabasi bo‘lib, bo‘sh vaqtimda huquq sohasi uchun amaliy AI tizimlarini ishlab chiqaman.",
      "Asosiy e’tiborim — huquqiy manbalarga tayangan, javoblarini tekshirish mumkin bo‘lgan va real ish jarayonlarida foydalanishga mo‘ljallangan AI tizimlari. Retrieval pipeline, multi-agent arxitekturalar va LLM infratuzilmasi ustida ishlayman.",
      "Maqsadim shunchaki chiroyli javob beradigan chatbotlar emas, huquqiy manbani ko‘rsatadigan, xulosaning asosini tekshirish imkonini beradigan va xarajat hamda texnik resurslarni nazorat qilish mumkin bo‘lgan tizimlar yaratish.",
      "Toshkentda joylashganman va huquq hamda texnologiya kesishmasidagi loyihalar ustida ishlayman.",
    ],
  },
  cases: {
    eyebrow: "Loyihalar",
    heading: "Asosiy loyiha",
    docket: "No. AI-2026-01",
    status: "LegalTech · 2026",
    caseTitle: "Legal Multi-Agent",
    caseSubtitle:
      "Fuqarolik kodeksi bo‘yicha AI yordamchi — O‘zbekiston Fuqarolik kodeksi (1- va 2-qism, ~1200 modda) bo‘yicha savollarga javob beradi va har bir javob qaysi moddaga asoslanganini ko‘rsatadi.",
    jurisdictionLabel: "Qamrov",
    jurisdiction: "O‘zbekiston Respublikasi Fuqarolik kodeksi, 1- va 2-qism (~1200 modda)",
    panelLabel: "Agentlar",
    counselLabel: "Texnologiyalar",
    summary: [
      "Har bir javob kodeksning aniq moddasiga havola bilan beriladi, xulosani manbadan tekshirish mumkin.",
      "Savol oddiy tilda berilsa ham (“sotuvchi nuqsonli tovarni qaytarib olmayapti”), tizim uni huquqiy atamalarga o‘girib, tegishli moddalarni topadi.",
      "Tahrirlangan va qo‘shimcha moddalarni (26¹, 173⁷) to‘g‘ri ajratadi. Oddiy qidiruvda ular 261- yoki 1737-modda bilan adashtirilib ketadi.",
      "Shartnoma tahlili: PDF shartnoma yuklansa, uning turi, tomonlari, muhim shartlari va xatarli bandlarini FK moddalariga bog‘lab ko‘rsatadi.",
      "Penya kalkulyatori: summa, stavka va kechiktirilgan kunlar bo‘yicha neustoykani hisoblaydi (FK 324–333-moddalar). Hisobni model emas, kod bajaradi.",
      "Fuqarolik huquqidan tashqaridagi savollarga (jinoyat, ma’muriy, mehnat) taxmin bilan javob bermaydi, muloyim rad etadi.",
      "Huquqiy ma’lumot beradi, yuridik maslahat emas.",
    ],
    liveDemo: "Jonli demo",
    viewRepo: "Repozitoriyni ko‘rish",
  },
  contact: {
    eyebrow: "Aloqa",
    heading: "Loyiha taklif qilish",
    body: "Agent, retrieval pipeline yoki ishonchli LLM tizimini ishlab chiqish ustida ishlayapsizmi? Yozing — xabaringizni o‘zim ko‘rib chiqaman.",
    labels: {
      email: "Email",
      emailAlt: "Qo‘shimcha email",
      telegram: "Telegram",
      phone: "Telefon",
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      location: "Manzil",
    },
  },
  cv: {
    label: "CV yuklab olish",
    en: "Inglizcha",
    ru: "Ruscha",
  },
  footer: {
    tagline: "Yurist · LegalTech · AI",
    rights: "Barcha huquqlar himoyalangan.",
  },
};

const ru: typeof en = {
  top: {
    tagline: "Юрист · LegalTech · AI",
    location: "Ташкент, Узбекистан",
  },
  nav: {
    home: "Главная",
    about: "Обо мне",
    practice: "Направления",
    work: "Проекты",
    contact: "Контакты",
  },
  hero: {
    eyebrow: "Портфолио — 2026",
    quote: "Границы моего языка означают границы моего мира.",
    attribution: "Людвиг Витгенштейн",
    subheading: "Разрабатываю AI-системы для права",
    intro:
      "Системы, которые показывают не только ответ, но и его правовое основание.",
  },
  cards: {
    demo: {
      label: "Попробовать",
      title: "Живое демо",
      body: "Мультиагентный правовой аналитик — посмотрите, как система работает на практике.",
    },
    repo: {
      label: "Код",
      title: "Репозиторий",
      body: "Открытый код и техническая архитектура на GitHub — LangGraph, Qdrant и Groq.",
    },
    consult: {
      label: "Связь",
      title: "Обсуждение проекта",
      body: "Обсудим ваш AI- и LegalTech-проект.",
    },
  },
  why: {
    eyebrow: "Почему я",
    heading: "Правовой AI — это не просто чатбот.",
    body1:
      "В правовой сфере ссылка модели на правдоподобную, но несуществующую норму или судебную практику — не просто техническая ошибка. Такой вывод может привести к неверному правовому решению.",
    body2:
      "Поэтому я разрабатываю правовые AI-системы на принципах опоры на источник, проверяемости и контроля.",
    listLead: "Мои системы:",
    points: [
      "связывают ответы с соответствующими правовыми источниками;",
      "передают расчёты детерминированному коду, а не LLM;",
      "используют внешний поиск, когда во внутренних источниках ответа нет;",
      "управляют провайдерами моделей и API-ключами на отдельном инфраструктурном уровне.",
    ],
  },
  practice: {
    eyebrow: "Над чем я работаю",
    heading: "Мои направления",
    intro:
      "Три направления, лежащие в основе моих правовых AI-проектов — от загрузки источника до формирования вывода.",
    items: [
      {
        title: "Правовые AI-системы",
        body: "AI-системы, работающие на основе законодательства и других правовых источников, с ответами, привязанными к источнику, и проверяемыми цитатами.",
      },
      {
        title: "Мультиагентный правовой анализ",
        body: "Управляемые AI-архитектуры, распределяющие поиск, правовой анализ, расчёты и другие задачи между отдельными агентами.",
      },
      {
        title: "Поиск правовой информации",
        body: "Системы индексации законодательства, судебной практики и внутренних документов, семантического поиска и определения нужного правового источника.",
      },
    ],
  },
  about: {
    eyebrow: "Обо мне",
    heading: "Юрист · AI · LegalTech",
    paragraphs: [
      "Я студент 4-го курса юридического факультета и в свободное время разрабатываю прикладные AI-системы для правовой сферы.",
      "Мой основной фокус — AI-системы, которые опираются на правовые источники, дают проверяемые ответы и рассчитаны на использование в реальных рабочих процессах. Я работаю над retrieval pipeline, мультиагентными архитектурами и LLM-инфраструктурой.",
      "Моя цель — не чатботы, которые просто красиво отвечают, а системы, которые показывают правовой источник, позволяют проверить основание вывода и держат под контролем затраты и технические ресурсы.",
      "Я живу в Ташкенте и работаю над проектами на стыке права и технологий.",
    ],
  },
  cases: {
    eyebrow: "Проекты",
    heading: "Основной проект",
    docket: "No. AI-2026-01",
    status: "LegalTech · 2026",
    caseTitle: "Legal Multi-Agent",
    caseSubtitle:
      "AI-ассистент по Гражданскому кодексу — отвечает на вопросы по Гражданскому кодексу Узбекистана (части 1 и 2, ~1200 статей) и показывает, на какой статье основан каждый ответ.",
    jurisdictionLabel: "Охват",
    jurisdiction: "Гражданский кодекс Республики Узбекистан, части 1 и 2 (~1200 статей)",
    panelLabel: "Агенты",
    counselLabel: "Технологии",
    summary: [
      "Каждый ответ сопровождается ссылкой на конкретную статью кодекса, поэтому вывод можно проверить по источнику.",
      "Даже если вопрос задан простым языком («продавец отказывается принять обратно бракованный товар»), система переводит его в юридические термины и находит нужные статьи.",
      "Корректно различает изменённые и дополнительные статьи (26¹, 173⁷), которые обычный поиск путает со статьями 261 или 1737.",
      "Анализ договора: при загрузке договора в PDF показывает его вид, стороны, существенные условия и рискованные положения со ссылками на статьи ГК.",
      "Калькулятор неустойки: рассчитывает неустойку по сумме, ставке и дням просрочки (ГК, статьи 324–333). Расчёт выполняет код, а не модель.",
      "Не угадывает ответы на вопросы вне гражданского права (уголовное, административное, трудовое) — вежливо отказывает.",
      "Даёт правовую информацию, а не юридическую консультацию.",
    ],
    liveDemo: "Живое демо",
    viewRepo: "Открыть репозиторий",
  },
  contact: {
    eyebrow: "Контакты",
    heading: "Предложить проект",
    body: "Работаете над агентом, retrieval pipeline или надёжной LLM-системой? Напишите — я лично рассмотрю ваше сообщение.",
    labels: {
      email: "Email",
      emailAlt: "Доп. email",
      telegram: "Telegram",
      phone: "Телефон",
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      location: "Локация",
    },
  },
  cv: {
    label: "Скачать резюме",
    en: "Английский",
    ru: "Русский",
  },
  footer: {
    tagline: "Юрист · LegalTech · AI",
    rights: "Все права защищены.",
  },
};

export const translations = { en, uz, ru } as const;
export type Translation = typeof en;
