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
  telegramHandle: "@BPanjiyev",
  telegramHref: "https://t.me/BPanjiyev",
  github: "https://github.com/Bunyod-bunyod05",
  liveDemo:
    "https://legal-multiagent-emrb5d6kjgrh4ackkvp6f4.streamlit.app/",
  repo: "https://github.com/Bunyod-bunyod05/legal-multiagent",
  location: "Tashkent, Uzbekistan",
} as const;

export const projectStack = [
  "LangGraph",
  "LangChain",
  "Qdrant",
  "Gemini",
  "LiteLLM",
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
    tagline: "Lawyer · AI Consultant · LegalTech",
    location: "Tashkent, Uzbekistan",
  },
  nav: {
    home: "Home",
    about: "About",
    practice: "Practice",
    work: "Cases",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Portfolio — 2026",
    quote: "The limits of my language mean the limits of my world.",
    attribution: "Ludwig Wittgenstein",
    intro:
      "I build AI systems for the legal field — reasoning grounded in the source text, not memory.",
  },
  cards: {
    demo: {
      label: "Try it",
      title: "Live Demo",
      body: "Multi-agent legal analyst, live in your browser",
    },
    repo: {
      label: "Source",
      title: "View Repository",
      body: "Full code on GitHub — LangGraph, Qdrant, Gemini",
    },
    consult: {
      label: "Talk",
      title: "Book Consultation",
      body: "Discuss your legal-AI project via Telegram",
    },
  },
  why: {
    eyebrow: "Why work with me",
    heading: "Legal AI needs more than a chatbot.",
    body1:
      "A general-purpose language model will confidently fabricate an article number and misquote a statute that never existed. In a legal context, that is not a rounding error — it is malpractice.",
    body2:
      "My systems ground every answer in the actual code, route arithmetic to real code rather than next-token prediction, search the web only when the source runs out, and keep model calls behind a proxy so keys and providers stay under control.",
  },
  practice: {
    eyebrow: "Practice areas",
    heading: "What I build",
    intro:
      "The four disciplines behind every legal-AI system I ship — from ingest to inference to infrastructure.",
    items: [
      {
        title: "Legal AI Development",
        body: "End-to-end legal analyst systems: statutory ingestion, retrieval-grounded answers, and citations that trace back to source articles rather than model memory.",
      },
      {
        title: "Multi-Agent Systems",
        body: "Supervisor-worker agent graphs where each specialist has one clear job — retrieval, web search, computation — instead of one prompt trying to do everything at once.",
      },
      {
        title: "Vector Retrieval for Legal Corpora",
        body: "Chunking, embedding, and indexing statutes, case law, and internal documents so a model can find the right article in milliseconds and cite it exactly.",
      },
      {
        title: "LLM Infrastructure",
        body: "Proxy layers, tool routing, prompt design and evaluation — the plumbing that turns a demo into something an actual firm can rely on.",
      },
    ],
  },
  about: {
    eyebrow: "About",
    heading: "Counsel of record",
    body1:
      "I build applied AI systems that have to be right, not just fluent. My focus is the intersection of law and machine learning: retrieval-grounded answers over legal source texts, multi-agent systems that plan before they speak, and infrastructure that keeps costs and keys under control.",
    body2:
      "Based in Tashkent, working with legal teams and technology firms across Uzbekistan and beyond.",
  },
  cases: {
    eyebrow: "Case files",
    heading: "Featured matter",
    docket: "No. AI-2026-01",
    status: "Lead case",
    caseTitle: "Legal AI Consultant",
    caseSubtitle:
      "Multi-Agent Legal Analyst for the Civil Code and Civil Procedure Code of Uzbekistan",
    jurisdictionLabel: "Jurisdiction",
    jurisdiction:
      "Civil Code and Civil Procedure Code of the Republic of Uzbekistan",
    panelLabel: "Panel",
    counselLabel: "Counsel of record",
    summary: [
      "A Supervisor agent reads the question and assigns it to the right specialist rather than answering everything itself.",
      "The Retriever agent grounds answers in the actual text of the Civil Code and Civil Procedure Code, ingested from source PDFs into a Qdrant vector store — so responses cite the code instead of guessing at it.",
      "When a question falls outside the ingested statute, a Web agent backed by Tavily searches live rather than returning a confident wrong answer.",
      "A Code agent handles anything numeric — computing penalties and fines — so arithmetic runs in actual code, not next-token prediction.",
      "All model calls route through a LiteLLM proxy, keeping API keys and provider choice out of the client entirely.",
    ],
    liveDemo: "Live demo",
    viewRepo: "View repository",
  },
  contact: {
    eyebrow: "Retain counsel",
    heading: "Open a matter",
    body: "Building something that needs an agent, a retrieval pipeline, or an LLM system someone can actually trust? Get in touch — I read every brief.",
    labels: {
      email: "Email",
      emailAlt: "Alt. email",
      telegram: "Telegram",
      phone: "Phone",
      github: "GitHub",
      location: "Location",
    },
  },
  footer: {
    tagline: "AI Systems · LegalTech",
    rights: "All rights reserved.",
  },
};

const uz: typeof en = {
  top: {
    tagline: "Yurist · AI Konsultant · LegalTech",
    location: "Toshkent, O'zbekiston",
  },
  nav: {
    home: "Bosh sahifa",
    about: "Men haqimda",
    practice: "Faoliyat",
    work: "Ish hujjatlari",
    contact: "Aloqa",
  },
  hero: {
    eyebrow: "Portfolio — 2026",
    quote: "Mening tilimning chegaralari — mening dunyomning chegaralaridir.",
    attribution: "Ludwig Wittgenstein",
    intro:
      "Huquq sohasi uchun AI tizimlarini quraman — xulosalar xotiradan emas, manba matnidan chiqariladi.",
  },
  cards: {
    demo: {
      label: "Sinash",
      title: "Jonli demo",
      body: "Multi-agentli huquqiy tahlilchi — brauzeringizda",
    },
    repo: {
      label: "Kod",
      title: "Repozitoriy",
      body: "GitHub'da to'liq kod — LangGraph, Qdrant, Gemini",
    },
    consult: {
      label: "Suhbat",
      title: "Konsultatsiya",
      body: "AI loyihangizni Telegram orqali muhokama qilamiz",
    },
  },
  why: {
    eyebrow: "Nima uchun men bilan",
    heading: "Huquqiy AI chatbotdan ko'proq narsa.",
    body1:
      "Umumiy til modellari mavjud bo'lmagan modda raqamini ishonchli tarzda o'ylab topib, hech qachon bo'lmagan qonunni noto'g'ri keltiradi. Huquqiy kontekstda bu xato emas — bu jiddiy mas'uliyatsizlikdir.",
    body2:
      "Mening tizimlarim har bir javobni haqiqiy kodeksga bog'laydi, arifmetikani keyingi tokenni bashorat qilishga emas, haqiqiy kodga yo'naltiradi, manba tugagandagina veb-qidiruvni ishga tushiradi va model chaqiruvlarini proksi orqasida saqlaydi — kalitlar va provayder tanlovi nazorat ostida qoladi.",
  },
  practice: {
    eyebrow: "Faoliyat sohalari",
    heading: "Nimalar quraman",
    intro:
      "Har bir yetkazib berayotgan huquqiy AI tizimimning ortidagi to'rtta soha — manba yuklashdan tortib xulosa chiqarishgacha.",
    items: [
      {
        title: "Huquqiy AI ishlab chiqish",
        body: "To'liq huquqiy tahlilchi tizimlar: qonunlarni yuklash, manbaga bog'langan javoblar va model xotirasi emas, manba moddalariga aniq havola qiluvchi tsitatalar.",
      },
      {
        title: "Multi-Agentli tizimlar",
        body: "Bitta prompt hamma narsani qilishga urinishi o'rniga, har bir mutaxassisga aniq bitta vazifa — qidiruv, veb, hisob-kitob — yuklatiladigan supervisor-worker agent graflari.",
      },
      {
        title: "Huquqiy korpuslar uchun vektor qidiruv",
        body: "Qonunlar, sud amaliyoti va ichki hujjatlarni chunklash, embedding va indekslash — model kerakli moddani millisekundlarda topib, aniq havola qiladi.",
      },
      {
        title: "LLM Infratuzilmasi",
        body: "Proksi qatlamlar, tool routing, prompt dizayni va baholash — demoni haqiqiy firma tayanchi bo'la oladigan mahsulotga aylantiradigan asos.",
      },
    ],
  },
  about: {
    eyebrow: "Men haqimda",
    heading: "Vakil",
    body1:
      "Men shunchaki chiroyli emas, to'g'ri javob berishi kerak bo'lgan amaliy AI tizimlarini yarataman. Diqqat markazim — huquq va machine learning kesishmasi: huquqiy manba matnlariga bog'langan javoblar, gapirishdan oldin rejalashtiradigan multi-agentli tizimlar va xarajatlar hamda kalitlarni nazorat ostida ushlaydigan infratuzilma.",
    body2:
      "Toshkentda joylashganman, O'zbekiston va undan tashqaridagi huquqiy jamoalar hamda texnologiya firmalari bilan ishlayman.",
  },
  cases: {
    eyebrow: "Ish hujjatlari",
    heading: "Asosiy loyiha",
    docket: "No. AI-2026-01",
    status: "Asosiy ish",
    caseTitle: "Legal AI Consultant",
    caseSubtitle:
      "O'zbekiston Fuqarolik va Fuqarolik-protsessual kodekslari uchun multi-agentli huquqiy tahlilchi",
    jurisdictionLabel: "Yurisdiktsiya",
    jurisdiction:
      "O'zbekiston Respublikasi Fuqarolik va Fuqarolik-protsessual kodekslari",
    panelLabel: "Agentlar",
    counselLabel: "Texnologiyalar",
    summary: [
      "Supervisor agent savolni o'qib, javob berishga urinish o'rniga uni to'g'ri mutaxassisga yo'naltiradi.",
      "Retriever agent javoblarni haqiqiy Fuqarolik va Fuqarolik-protsessual kodekslari matnida topadi — manba PDF'lar Qdrant vektor bazasiga yuklangan, javoblar taxmin qilish o'rniga kodeksga aniq havola qiladi.",
      "Savol yuklangan qonundan tashqarida bo'lsa, Tavily bilan quvvatlangan Web agent ishonchli noto'g'ri javob berish o'rniga jonli qidiruv o'tkazadi.",
      "Code agent barcha raqamli hisob-kitoblar — jarima va penyalar — bilan shug'ullanadi, shuning uchun arifmetika bashorat emas, haqiqiy kodda ishlaydi.",
      "Barcha model chaqiruvlari LiteLLM proksi orqali o'tadi — API kalitlar va provayder tanlovi mijozdan tashqarida qoladi.",
    ],
    liveDemo: "Jonli demo",
    viewRepo: "Repozitoriy",
  },
  contact: {
    eyebrow: "Vakil yollash",
    heading: "Ish ochish",
    body: "Agent, retrieval pipeline yoki ishonchli LLM tizimiga muhtoj narsa quryapsizmi? Yozing — men har bir xatni o'qiyman.",
    labels: {
      email: "Email",
      emailAlt: "Qo'shimcha email",
      telegram: "Telegram",
      phone: "Telefon",
      github: "GitHub",
      location: "Manzil",
    },
  },
  footer: {
    tagline: "AI Tizimlari · LegalTech",
    rights: "Barcha huquqlar himoyalangan.",
  },
};

const ru: typeof en = {
  top: {
    tagline: "Юрист · AI Консультант · LegalTech",
    location: "Ташкент, Узбекистан",
  },
  nav: {
    home: "Главная",
    about: "Обо мне",
    practice: "Практика",
    work: "Дела",
    contact: "Контакты",
  },
  hero: {
    eyebrow: "Портфолио — 2026",
    quote: "Границы моего языка означают границы моего мира.",
    attribution: "Людвиг Витгенштейн",
    intro:
      "Создаю AI-системы для правовой сферы — рассуждения, основанные на источнике, а не на памяти.",
  },
  cards: {
    demo: {
      label: "Попробовать",
      title: "Живое демо",
      body: "Мульти-агентный правовой аналитик — прямо в браузере",
    },
    repo: {
      label: "Код",
      title: "Репозиторий",
      body: "Полный код на GitHub — LangGraph, Qdrant, Gemini",
    },
    consult: {
      label: "Связаться",
      title: "Консультация",
      body: "Обсудить ваш legal-AI проект в Telegram",
    },
  },
  why: {
    eyebrow: "Почему я",
    heading: "Правовой AI — это больше, чем чатбот.",
    body1:
      "Универсальная языковая модель уверенно придумает правдоподобный номер статьи и точно процитирует закон, которого никогда не существовало. В правовом контексте это не погрешность — это халатность.",
    body2:
      "Мои системы привязывают каждый ответ к реальному кодексу, направляют арифметику в настоящий код, а не в предсказание токенов, обращаются к веб-поиску только когда источник заканчивается, и держат вызовы моделей за прокси — ключи и провайдеры остаются под контролем.",
  },
  practice: {
    eyebrow: "Направления практики",
    heading: "Что я делаю",
    intro:
      "Четыре дисциплины, стоящие за каждой правовой AI-системой, которую я поставляю — от загрузки данных до вывода и инфраструктуры.",
    items: [
      {
        title: "Разработка правового AI",
        body: "Полные системы правового анализа: загрузка законов, ответы с привязкой к источнику и цитаты, ведущие к конкретным статьям, а не к памяти модели.",
      },
      {
        title: "Мульти-агентные системы",
        body: "Графы агентов supervisor-worker, где у каждого специалиста одна чёткая задача — поиск, веб, вычисления — вместо одного промпта, пытающегося делать всё сразу.",
      },
      {
        title: "Векторный поиск по правовым корпусам",
        body: "Чанкинг, эмбеддинг и индексация законов, судебной практики и внутренних документов — модель находит нужную статью за миллисекунды и точно её цитирует.",
      },
      {
        title: "LLM Инфраструктура",
        body: "Прокси-слои, tool routing, дизайн и оценка промптов — вся основа, превращающая демо в то, на что реальная фирма может положиться.",
      },
    ],
  },
  about: {
    eyebrow: "Обо мне",
    heading: "Представитель",
    body1:
      "Создаю прикладные AI-системы, которые должны быть точными, а не просто складными. Мой фокус — на пересечении права и машинного обучения: ответы с привязкой к правовым источникам, мульти-агентные системы, планирующие прежде чем говорить, и инфраструктура, держащая расходы и ключи под контролем.",
    body2:
      "Базируюсь в Ташкенте, работаю с юридическими командами и технологическими компаниями в Узбекистане и за его пределами.",
  },
  cases: {
    eyebrow: "Дела",
    heading: "Основной проект",
    docket: "No. AI-2026-01",
    status: "Основное дело",
    caseTitle: "Legal AI Consultant",
    caseSubtitle:
      "Мульти-агентный правовой аналитик по Гражданскому и Гражданско-процессуальному кодексам Узбекистана",
    jurisdictionLabel: "Юрисдикция",
    jurisdiction:
      "Гражданский и Гражданско-процессуальный кодексы Республики Узбекистан",
    panelLabel: "Агенты",
    counselLabel: "Технологии",
    summary: [
      "Supervisor-агент читает вопрос и направляет его нужному специалисту, а не пытается ответить сам.",
      "Retriever-агент находит ответы в реальном тексте Гражданского и Гражданско-процессуального кодексов — исходные PDF загружены в векторное хранилище Qdrant, поэтому ответы цитируют кодекс, а не угадывают его.",
      "Когда вопрос выходит за пределы загруженного закона, Web-агент на базе Tavily ищет вживую, а не выдаёт уверенный неверный ответ.",
      "Code-агент занимается всеми числовыми расчётами — штрафами и пенями — так что арифметика выполняется в настоящем коде, а не в предсказании токенов.",
      "Все вызовы моделей идут через прокси LiteLLM — ключи API и выбор провайдера остаются вне клиента.",
    ],
    liveDemo: "Живое демо",
    viewRepo: "Репозиторий",
  },
  contact: {
    eyebrow: "Нанять представителя",
    heading: "Открыть дело",
    body: "Строите что-то, где нужен агент, retrieval-пайплайн или LLM-система, которой можно доверять? Напишите — я читаю каждое обращение.",
    labels: {
      email: "Email",
      emailAlt: "Доп. email",
      telegram: "Telegram",
      phone: "Телефон",
      github: "GitHub",
      location: "Локация",
    },
  },
  footer: {
    tagline: "AI-Системы · LegalTech",
    rights: "Все права защищены.",
  },
};

export const translations = { en, uz, ru } as const;
export type Translation = typeof en;
