/* ==========================================================
   EDIT THIS FILE to update your contact details and projects.
   ========================================================== */

window.SITE = {
  name: "Ilxom Xudoyberdiyev",
  monogram: "IX",

  // Contact details used by the About buttons and the Contact section.
  contact: {
    email: "nuu.design.ilhom@gmail.com",            // opens the mail app (mailto:)
    telegram: "https://t.me/Xudoyberdiyev_I_X",
    telegramHandle: "@Xudoyberdiyev_I_X",
    instagram: "https://www.instagram.com/ix.group/",
    instagramHandle: "@ix.group",

    // >>> LINKEDIN: replace the placeholder below with the full profile URL, e.g. "https://www.linkedin.com/in/..."
    // While it is not a real https:// URL, LinkedIn is NOT shown on the site (no dead or fake link).
    linkedin: "[LINKEDIN_PROFILE_URL_BU_YERGA_KIRITILADI]"
  },

  // How many projects appear on the homepage preview.
  homePreviewCount: 3
};

/* ----------------------------------------------------------
   PROJECTS
   - Add a new project by copying one block and giving it a
     unique "id". The grid adjusts automatically.
   - image: path to a preview image, e.g. "assets/marketplace.jpg".
     Leave "" to show a placeholder.
   - Titles/descriptions below are PLACEHOLDERS, not real client work.
   ---------------------------------------------------------- */
window.PROJECTS = [
  /* ---- REAL PROJECT: LMS Dashboard (images in assets/lms/) ----
     image / imagePosition : card cover (16:9 hero, framed from the left so the title stays visible)
     gallery[]             : case-study images. src = desktop (16:9), mobileSrc = phone (4:5).
                             narrow:true shows a portrait image centered at a smaller width. */
  {
    id: "lms-dashboard",
    image: "assets/lms/hero-16x9.png",
    imagePosition: "0% 50%",
    category: { uz: "LMS platformasi", ru: "LMS-платформа" },
    title: { uz: "LMS Dashboard", ru: "LMS Dashboard" },
    description: {
      uz: "Ta’lim akademiyasi uchun o‘quv boshqaruv tizimi: Student, Instructor va Manager rollari.",
      ru: "Система управления обучением для образовательной академии: роли Student, Instructor и Manager."
    },
    summary: {
      uz: "Ta’lim akademiyasi uchun o‘quv boshqaruv tizimi (LMS). Interfeys Student, Instructor va Manager rollari uchun loyihalangan.",
      ru: "Система управления обучением (LMS) для образовательной академии. Интерфейс разработан для ролей Student, Instructor и Manager."
    },
    roles: "Student / Instructor / Manager",
    hero: { src: "assets/lms/hero-16x9.png", mobileSrc: "assets/lms/hero-4x5.png" },
    gallery: [
      {
        src: "assets/lms/student-16x9.png", mobileSrc: "assets/lms/student-4x5.png",
        label: { uz: "Student", ru: "Student" },
        caption: {
          uz: "Balans, davomat, ballar, topshiriqlar, imtihonlar va e’lonlar bir ko‘rinishda.",
          ru: "Баланс, посещаемость, баллы, задания, экзамены и объявления в одном окне."
        }
      },
      {
        src: "assets/lms/instructor-16x9.png", mobileSrc: "assets/lms/instructor-4x5.png",
        label: { uz: "Instructor", ru: "Instructor" },
        caption: {
          uz: "Darslar, vazifalar, davomat va talabalar natijalari.",
          ru: "Занятия, задачи, посещаемость и успеваемость студентов."
        }
      },
      {
        src: "assets/lms/manager-16x9.png", mobileSrc: "assets/lms/manager-4x5.png",
        label: { uz: "Manager", ru: "Manager" },
        caption: {
          uz: "Qabul, davomat, qarz, vazifalar va moliya ko‘rsatkichlari.",
          ru: "Набор, посещаемость, задолженность, задачи и финансы."
        }
      },
      {
        src: "assets/lms/manager-details-4x5.png", narrow: true,
        label: { uz: "Manager · batafsil", ru: "Manager · детали" },
        caption: {
          uz: "Semestr ko‘rsatkichlari, davomat, qabul dinamikasi va moliya.",
          ru: "Показатели семестра, посещаемость, динамика набора и финансы."
        }
      },
      {
        src: "assets/lms/student-profile-16x9.png", mobileSrc: "assets/lms/student-profile-4x5.png",
        label: { uz: "Talaba profili", ru: "Профиль студента" },
        caption: {
          uz: "Shaxsiy ma’lumotlar, guruhlar, to‘lovlar tarixi va izohlar.",
          ru: "Личные данные, группы, история платежей и комментарии."
        }
      },
      {
        src: "assets/lms/global-overview-16x9.png", mobileSrc: "assets/lms/global-overview-4x5.png",
        label: { uz: "Global ko‘rinish", ru: "Глобальный обзор" },
        caption: {
          uz: "Filiallar holati, o‘sish ko‘rsatkichlari va ogohlantirishlar.",
          ru: "Состояние филиалов, показатели роста и оповещения."
        }
      }
    ]
  },
  /* ---- REAL PROJECT: Online Marketplace (images in assets/marketplace/) ----
     Presentation pages keep their own aspect ratio (natural: true) so nothing is cropped or stretched.
     src = 2x desktop image, mobileSrc = 1x (phones), ratio = width / height (reserves space while loading). */
  {
    id: "marketplace",
    image: "assets/marketplace/cover-4x3.webp",
    category: { uz: "UI/UX Design", ru: "UI/UX Design" },
    title: { uz: "Online Marketplace", ru: "Online Marketplace" },
    description: {
      uz: "E-commerce marketplace uchun veb-interfeys: bosh sahifa, katalog, mahsulot sahifasi va savat.",
      ru: "Веб-интерфейс e-commerce маркетплейса: главная, каталог, страница товара и корзина."
    },
    summary: {
      uz: "E-commerce marketplace uchun veb-interfeys. Loyiha bosh sahifa, katalog, mahsulot sahifasi va savat ekranlarini o‘z ichiga oladi.",
      ru: "Веб-интерфейс e-commerce маркетплейса. Проект включает главную страницу, каталог, страницу товара и корзину."
    },
    direction: { uz: "E-commerce marketplace", ru: "E-commerce маркетплейс" },
    meta: [
      {
        label: { uz: "Ekranlar", ru: "Экраны" },
        value: { uz: "Bosh sahifa · Katalog · Mahsulot · Savat", ru: "Главная · Каталог · Товар · Корзина" }
      }
    ],
    hero: { src: "assets/marketplace/home-2x.webp", mobileSrc: "assets/marketplace/home-1x.webp", natural: true, ratio: "1280 / 2340" },
    gallery: [
      {
        src: "assets/marketplace/catalog-2x.webp", mobileSrc: "assets/marketplace/catalog-1x.webp", natural: true, ratio: "1280 / 1840",
        label: { uz: "Katalog", ru: "Каталог" },
        caption: {
          uz: "Filtrlar, faol teglar va sahifalashli mahsulotlar to‘ri.",
          ru: "Фильтры, активные теги и сетка товаров с пагинацией."
        }
      },
      {
        src: "assets/marketplace/product-2x.webp", mobileSrc: "assets/marketplace/product-1x.webp", natural: true, ratio: "1280 / 1840",
        label: { uz: "Mahsulot sahifasi", ru: "Страница товара" },
        caption: {
          uz: "Galereya, xotira hajmi, muddatli to‘lov, yetkazib berish va xususiyatlar.",
          ru: "Галерея, объём памяти, рассрочка, доставка и характеристики."
        }
      },
      {
        src: "assets/marketplace/cart-2x.webp", mobileSrc: "assets/marketplace/cart-1x.webp", natural: true, ratio: "1280 / 1840",
        label: { uz: "Savat", ru: "Корзина" },
        caption: {
          uz: "Buyurtma tarkibi, miqdorni boshqarish, yetkazib berish va muddatli to‘lov.",
          ru: "Состав заказа, управление количеством, доставка и рассрочка."
        }
      },
      {
        src: "assets/marketplace/system-2x.webp", mobileSrc: "assets/marketplace/system-1x.webp", natural: true, ratio: "1280 / 1496",
        label: { uz: "To‘rt ekran, bitta tizim", ru: "Четыре экрана, одна система" },
        caption: {
          uz: "Umumiy header, mahsulot kartalari, tugmalar va footer hamda interfeysdagi ranglar.",
          ru: "Общие хедер, карточки товаров, кнопки и футер, а также цвета интерфейса."
        }
      },
      {
        src: "assets/marketplace/overview-2x.webp", mobileSrc: "assets/marketplace/overview-1x.webp", natural: true, ratio: "1280 / 2620",
        label: { uz: "Yakuniy ko‘rinish", ru: "Итоговый обзор" },
        caption: {
          uz: "Bosh sahifadan savatgacha bo‘lgan to‘liq yo‘l.",
          ru: "Весь путь от главной страницы до корзины."
        }
      }
    ]
  },
  /* ---- REAL PROJECT: HandPay (images in assets/handpay/) ----
     Presentation pages keep their own aspect ratio (natural: true), so nothing is cropped or stretched. */
  {
    id: "handpay",
    image: "assets/handpay/cover-4x3.webp",
    category: { uz: "UI/UX Design", ru: "UI/UX Design" },
    title: { uz: "HandPay", ru: "HandPay" },
    description: {
      uz: "Kaft bilan to‘lov uchun biometrik texnologiyaga asoslangan mobil fintech ilova.",
      ru: "Мобильное fintech-приложение на основе биометрической технологии оплаты по ладони."
    },
    summary: {
      uz: "Kaft biometrikasi orqali to‘lovga asoslangan mobil fintech ilova. Foydalanuvchi bank kartalarini ulaydi va metro kabi qo‘llab-quvvatlanadigan joylarda kontaktsiz to‘lov qiladi.",
      ru: "Мобильное fintech-приложение на основе оплаты по биометрии ладони. Пользователь подключает банковские карты и платит бесконтактно в поддерживаемых местах, например в метро."
    },
    direction: { uz: "Fintech mobil ilova", ru: "Fintech мобильное приложение" },
    meta: [
      { label: { uz: "Mavzular", ru: "Темы" }, value: { uz: "Light · Dark", ru: "Light · Dark" } }
    ],
    hero: { src: "assets/handpay/home-light-2x.webp", mobileSrc: "assets/handpay/home-light-1x.webp", natural: true, ratio: "1600 / 1000" },
    gallery: [
      {
        src: "assets/handpay/home-dark-2x.webp", mobileSrc: "assets/handpay/home-dark-1x.webp", natural: true, ratio: "1600 / 1000",
        label: { uz: "Bosh ekran · Dark", ru: "Главный экран · Dark" },
        caption: {
          uz: "Bosh ekran qorong‘i mavzuda: balans, kartalar, yangiliklar va oxirgi tranzaksiyalar.",
          ru: "Главный экран в тёмной теме: баланс, карты, новости и последние транзакции."
        }
      },
      {
        src: "assets/handpay/cards-2x.webp", mobileSrc: "assets/handpay/cards-1x.webp", natural: true, ratio: "1600 / 1000",
        label: { uz: "Kartalar, o‘tkazmalar va QR", ru: "Карты, переводы и QR" },
        caption: {
          uz: "Karta qo‘shish, o‘tkazma oluvchisini tanlash va QR skaner.",
          ru: "Добавление карты, выбор получателя перевода и QR-сканер."
        }
      },
      {
        src: "assets/handpay/history-2x.webp", mobileSrc: "assets/handpay/history-1x.webp", natural: true, ratio: "1600 / 1000",
        label: { uz: "O‘tkazmalar tarixi", ru: "История переводов" },
        caption: {
          uz: "Sana bo‘yicha guruhlangan tranzaksiyalar va filtrlar, ikkala mavzuda.",
          ru: "Транзакции, сгруппированные по датам, и фильтры, в обеих темах."
        }
      },
      {
        src: "assets/handpay/profile-2x.webp", mobileSrc: "assets/handpay/profile-1x.webp", natural: true, ratio: "1600 / 1000",
        label: { uz: "Profil", ru: "Профиль" },
        caption: {
          uz: "Hisob ma’lumotlari va asosiy bo‘limlar, ikkala mavzuda.",
          ru: "Данные аккаунта и основные разделы, в обеих темах."
        }
      }
    ]
  },
  {
    id: "dashboard",
    image: "",
    category: { uz: "Boshqaruv tizimi", ru: "Система управления" },
    title: { uz: "Dashboard va boshqaruv tizimi", ru: "Дашборд и система управления" },
    description: {
      uz: "Qisqa loyiha tavsifi shu yerga qo‘shiladi.",
      ru: "Краткое описание проекта будет добавлено здесь."
    }
  },
  {
    id: "banking",
    image: "",
    category: { uz: "Bank platformasi", ru: "Банковская платформа" },
    title: { uz: "Bank platformasi", ru: "Банковская платформа" },
    description: {
      uz: "Qisqa loyiha tavsifi shu yerga qo‘shiladi.",
      ru: "Краткое описание проекта будет добавлено здесь."
    }
  },
  {
    id: "university",
    image: "",
    category: { uz: "Veb-sayt", ru: "Веб-сайт" },
    title: { uz: "Universitet veb-sayti", ru: "Веб-сайт университета" },
    description: {
      uz: "Qisqa loyiha tavsifi shu yerga qo‘shiladi.",
      ru: "Краткое описание проекта будет добавлено здесь."
    }
  },
  {
    id: "korean-lms",
    image: "",
    category: { uz: "LMS platformasi", ru: "LMS-платформа" },
    title: { uz: "Koreys LMS platformasi", ru: "Корейская LMS-платформа" },
    description: {
      uz: "Qisqa loyiha tavsifi shu yerga qo‘shiladi.",
      ru: "Краткое описание проекта будет добавлено здесь."
    }
  },
  {
    id: "other",
    image: "",
    category: { uz: "Veb va mobil", ru: "Веб и мобильные" },
    title: { uz: "Boshqa veb va mobil mahsulot", ru: "Другой веб- и мобильный продукт" },
    description: {
      uz: "Qisqa loyiha tavsifi shu yerga qo‘shiladi.",
      ru: "Краткое описание проекта будет добавлено здесь."
    }
  }
];
