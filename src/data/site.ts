import type { Locale } from "@/i18n/routing";

export type LocalizedText = Record<Locale, string>;

export type Service = {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  detail: LocalizedText;
  image: string;
};

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://obmlawfirm.com";

export const contact = {
  phoneDisplay: "0537515551",
  phoneHref: "tel:+966537515551",
  whatsappDisplay: "0505608181",
  whatsappHref: "https://wa.me/966505608181",
  email: "binmahfouz.osama@gmail.com",
  emailHref: "mailto:binmahfouz.osama@gmail.com",
  licenseDisplay: {
    ar: "رقم الترخيص: 441316",
    en: "License number: 441316"
  } satisfies LocalizedText,
  city: {
    ar: "جدة، المملكة العربية السعودية",
    en: "Jeddah, Saudi Arabia"
  } satisfies LocalizedText
};

export const identity = {
  name: {
    ar: "أسامه بن أحمد بن محفوظ",
    en: "Osama bin Ahmed bin Mahfouz"
  } satisfies LocalizedText,
  role: {
    ar: "المحامي والمستشار القانوني",
    en: "Lawyer and Legal Consultant"
  } satisfies LocalizedText,
  practice: {
    ar: "للمحاماة والاستشارات القانونية",
    en: "Law Firm and Legal Consultations"
  } satisfies LocalizedText
};

export const coreCopy = {
  headline: {
    ar: "معك في كل خطوة.. حتى يصل حقك",
    en: "With you through each legal step."
  } satisfies LocalizedText,
  support: {
    ar: "نقدم لك استشارات وحلولًا قانونية واضحة وفعالة، نضع خبرتنا بين يديك لتحصل على أفضل النتائج بأعلى درجات الاحترافية والسرية.",
    en: "We provide clear legal consultations and practical legal services, applying our experience with professionalism and confidentiality."
  } satisfies LocalizedText,
  quote: {
    ar: "حقوقكم ليست محل مساومة، وثقتكم ليست محل تهاون؛ لذلك نلتزم بخدمتكم بتمثيل قانوني قوي، وحلول مدروسة، ودفاع لا يتزعزع.",
    en: "Your rights deserve careful legal handling. We handle matters with considered representation, studied solutions, and firm advocacy."
  } satisfies LocalizedText,
  closing: {
    ar: "ثقتك أمانة.. ورضاك هدفنا",
    en: "Your trust is our responsibility. Professional service is our commitment."
  } satisfies LocalizedText
};

export const services: Service[] = [
  {
    slug: "legal-consultations",
    title: {
      ar: "الاستشارات القانونية",
      en: "Legal Consultations"
    },
    summary: {
      ar: "نقدم استشارات قانونية مبنية على دراسة دقيقة للأنظمة واللوائح السعودية، بهدف تمكين عملائنا من اتخاذ القرارات القانونية السليمة وحماية مصالحهم.",
      en: "We provide legal consultations based on a careful review of Saudi laws and regulations, enabling our clients to make sound legal decisions and protect their interests."
    },
    detail: {
      ar: "نقدم استشارات قانونية مبنية على دراسة دقيقة للأنظمة واللوائح السعودية، بهدف تمكين عملائنا من اتخاذ القرارات القانونية السليمة وحماية مصالحهم.",
      en: "We provide legal consultations based on a careful review of Saudi laws and regulations, enabling our clients to make sound legal decisions and protect their interests."
    },
    image: "/images/services/consultations-contracts-v3.webp"
  },
  {
    slug: "litigation-legal-representation",
    title: {
      ar: "الترافع والتمثيل القضائي",
      en: "Litigation and Legal Representation"
    },
    summary: {
      ar: "نمثل عملاءنا أمام مختلف المحاكم والجهات القضائية وشبه القضائية، مع إعداد استراتيجية قانونية تتناسب مع طبيعة كل قضية.",
      en: "We represent clients before various courts, judicial authorities, and quasi-judicial bodies, while preparing a legal strategy suited to the nature of each case."
    },
    detail: {
      ar: "نمثل عملاءنا أمام مختلف المحاكم والجهات القضائية وشبه القضائية، مع إعداد استراتيجية قانونية تتناسب مع طبيعة كل قضية.",
      en: "We represent clients before various courts, judicial authorities, and quasi-judicial bodies, while preparing a legal strategy suited to the nature of each case."
    },
    image: "/images/services/criminal-courts-v3.webp"
  },
  {
    slug: "drafting-contracts-agreements",
    title: {
      ar: "صياغة العقود والاتفاقيات",
      en: "Drafting Contracts and Agreements"
    },
    summary: {
      ar: "إعداد وصياغة ومراجعة العقود والاتفاقيات بما يحفظ الحقوق ويقلل من المخاطر القانونية.",
      en: "We prepare, draft, and review contracts and agreements in a manner that preserves rights and reduces legal risks."
    },
    detail: {
      ar: "إعداد وصياغة ومراجعة العقود والاتفاقيات بما يحفظ الحقوق ويقلل من المخاطر القانونية.",
      en: "We prepare, draft, and review contracts and agreements in a manner that preserves rights and reduces legal risks."
    },
    image: "/images/services/consultations-contracts-v3.webp"
  },
  {
    slug: "pleadings-legal-memoranda",
    title: {
      ar: "إعداد اللوائح والمذكرات القانونية",
      en: "Preparation of Pleadings and Legal Memoranda"
    },
    summary: {
      ar: "صياغة اللوائح، والمذكرات، والاعتراضات، والاستئنافات، والالتماسات، والنقض بصياغة قانونية احترافية.",
      en: "We draft pleadings, legal memoranda, objections, appeals, petitions for reconsideration, and cassation submissions with professional legal drafting."
    },
    detail: {
      ar: "صياغة اللوائح، والمذكرات، والاعتراضات، والاستئنافات، والالتماسات، والنقض بصياغة قانونية احترافية.",
      en: "We draft pleadings, legal memoranda, objections, appeals, petitions for reconsideration, and cassation submissions with professional legal drafting."
    },
    image: "/images/legal-papers-v3.webp"
  },
  {
    slug: "commercial-disputes",
    title: {
      ar: "القضايا التجارية",
      en: "Commercial Disputes"
    },
    summary: {
      ar: "تمثيل الشركات والأفراد في المنازعات التجارية، والمطالبات المالية، وقضايا الشركات والعقود التجارية.",
      en: "We represent companies and individuals in commercial disputes, financial claims, corporate cases, and commercial contracts."
    },
    detail: {
      ar: "تمثيل الشركات والأفراد في المنازعات التجارية، والمطالبات المالية، وقضايا الشركات والعقود التجارية.",
      en: "We represent companies and individuals in commercial disputes, financial claims, corporate cases, and commercial contracts."
    },
    image: "/images/services/civil-commercial-cases-v3.webp"
  },
  {
    slug: "civil-disputes",
    title: {
      ar: "القضايا المدنية",
      en: "Civil Disputes"
    },
    summary: {
      ar: "المطالبات المالية، والتعويضات، والمنازعات المدنية، وإثبات الحقوق والمطالبة بها.",
      en: "We handle financial claims, compensation claims, civil disputes, and the establishment and assertion of rights."
    },
    detail: {
      ar: "المطالبات المالية، والتعويضات، والمنازعات المدنية، وإثبات الحقوق والمطالبة بها.",
      en: "We handle financial claims, compensation claims, civil disputes, and the establishment and assertion of rights."
    },
    image: "/images/services/civil-commercial-cases-v3.webp"
  },
  {
    slug: "labor-disputes",
    title: {
      ar: "القضايا العمالية",
      en: "Labor Disputes"
    },
    summary: {
      ar: "تمثيل أصحاب العمل والعاملين في المنازعات العمالية، والمطالبة بالمستحقات المالية والتعويضات.",
      en: "We represent employers and employees in labor disputes, and in claims for financial entitlements and compensation."
    },
    detail: {
      ar: "تمثيل أصحاب العمل والعاملين في المنازعات العمالية، والمطالبة بالمستحقات المالية والتعويضات.",
      en: "We represent employers and employees in labor disputes, and in claims for financial entitlements and compensation."
    },
    image: "/images/services/labor-cases-v3.webp"
  },
  {
    slug: "criminal-cases",
    title: {
      ar: "القضايا الجزائية",
      en: "Criminal Cases"
    },
    summary: {
      ar: "الدفاع والتمثيل في مختلف القضايا الجزائية، ودراسة ملف القضية، وإعداد الدفاع القانوني وفق الأنظمة المعمول بها.",
      en: "We provide defense and representation in various criminal cases, review case files, and prepare legal defenses in accordance with applicable laws."
    },
    detail: {
      ar: "الدفاع والتمثيل في مختلف القضايا الجزائية، ودراسة ملف القضية، وإعداد الدفاع القانوني وفق الأنظمة المعمول بها.",
      en: "We provide defense and representation in various criminal cases, review case files, and prepare legal defenses in accordance with applicable laws."
    },
    image: "/images/services/criminal-cases-v3.webp"
  },
  {
    slug: "personal-status-matters",
    title: {
      ar: "قضايا الأحوال الشخصية",
      en: "Personal Status Matters"
    },
    summary: {
      ar: "الطلاق، والخلع، والفسخ، والنفقة، والحضانة، والزيارة، وإثبات الزواج، والمواريث، والوصايا، وقسمة التركات.",
      en: "We handle divorce, khul', annulment, maintenance, custody, visitation, proof of marriage, inheritance, wills, and estate division."
    },
    detail: {
      ar: "الطلاق، والخلع، والفسخ، والنفقة، والحضانة، والزيارة، وإثبات الزواج، والمواريث، والوصايا، وقسمة التركات.",
      en: "We handle divorce, khul', annulment, maintenance, custody, visitation, proof of marriage, inheritance, wills, and estate division."
    },
    image: "/images/office-meeting.jpg"
  },
  {
    slug: "enforcement-proceedings",
    title: {
      ar: "قضايا التنفيذ",
      en: "Enforcement Proceedings"
    },
    summary: {
      ar: "تنفيذ الأحكام والسندات التنفيذية، ومتابعة إجراءات التنفيذ، والحجز التنفيذي، والإفصاح عن الأموال، وجميع الإجراءات المتعلقة بالتنفيذ.",
      en: "We enforce judgments and enforceable instruments, follow up enforcement procedures, attachment orders, disclosure of assets, and all procedures related to enforcement."
    },
    detail: {
      ar: "تنفيذ الأحكام والسندات التنفيذية، ومتابعة إجراءات التنفيذ، والحجز التنفيذي، والإفصاح عن الأموال، وجميع الإجراءات المتعلقة بالتنفيذ.",
      en: "We enforce judgments and enforceable instruments, follow up enforcement procedures, attachment orders, disclosure of assets, and all procedures related to enforcement."
    },
    image: "/images/services/enforcement-courts-v3.webp"
  },
  {
    slug: "real-estate-disputes",
    title: {
      ar: "القضايا العقارية",
      en: "Real Estate Disputes"
    },
    summary: {
      ar: "المنازعات العقارية، وإفراغ العقارات، ونزاعات الملكية، وعقود البيع والإيجار، وقضايا المقاولات.",
      en: "We handle real estate disputes, property conveyance, ownership disputes, sale and lease contracts, and construction disputes."
    },
    detail: {
      ar: "المنازعات العقارية، وإفراغ العقارات، ونزاعات الملكية، وعقود البيع والإيجار، وقضايا المقاولات.",
      en: "We handle real estate disputes, property conveyance, ownership disputes, sale and lease contracts, and construction disputes."
    },
    image: "/images/jeddah-courtyard-v3.webp"
  },
  {
    slug: "administrative-disputes",
    title: {
      ar: "القضايا الإدارية",
      en: "Administrative Disputes"
    },
    summary: {
      ar: "التمثيل أمام القضاء الإداري في دعاوى إلغاء القرارات الإدارية، والتعويض، والعقود الإدارية، والحقوق الوظيفية.",
      en: "We provide representation before the administrative judiciary in claims for annulment of administrative decisions, compensation, administrative contracts, and employment rights."
    },
    detail: {
      ar: "التمثيل أمام القضاء الإداري في دعاوى إلغاء القرارات الإدارية، والتعويض، والعقود الإدارية، والحقوق الوظيفية.",
      en: "We provide representation before the administrative judiciary in claims for annulment of administrative decisions, compensation, administrative contracts, and employment rights."
    },
    image: "/images/services/regulations-bylaws-v3.webp"
  },
  {
    slug: "corporate-matters",
    title: {
      ar: "قضايا الشركات",
      en: "Corporate Matters"
    },
    summary: {
      ar: "تأسيس الشركات، وتعديل عقود التأسيس، وإعادة الهيكلة، وحوكمة الشركات، وتسوية النزاعات بين الشركاء.",
      en: "We handle company incorporation, amendments to articles of association, restructuring, corporate governance, and the settlement of disputes between partners."
    },
    detail: {
      ar: "تأسيس الشركات، وتعديل عقود التأسيس، وإعادة الهيكلة، وحوكمة الشركات، وتسوية النزاعات بين الشركاء.",
      en: "We handle company incorporation, amendments to articles of association, restructuring, corporate governance, and the settlement of disputes between partners."
    },
    image: "/images/atelier-signing.jpg"
  },
  {
    slug: "intellectual-property",
    title: {
      ar: "الملكية الفكرية",
      en: "Intellectual Property"
    },
    summary: {
      ar: "تسجيل العلامات التجارية، وحماية حقوق المؤلف، وبراءات الاختراع، ومباشرة المنازعات المتعلقة بالملكية الفكرية.",
      en: "We handle trademark registration, protection of copyright, patents, and disputes relating to intellectual property."
    },
    detail: {
      ar: "تسجيل العلامات التجارية، وحماية حقوق المؤلف، وبراءات الاختراع، ومباشرة المنازعات المتعلقة بالملكية الفكرية.",
      en: "We handle trademark registration, protection of copyright, patents, and disputes relating to intellectual property."
    },
    image: "/images/legal-books.jpg"
  },
  {
    slug: "legal-documentation-regulatory-procedures",
    title: {
      ar: "التوثيق والأعمال النظامية",
      en: "Legal Documentation and Regulatory Procedures"
    },
    summary: {
      ar: "إعداد الإقرارات، ومراجعة المستندات القانونية، ومتابعة الإجراءات النظامية لدى الجهات المختصة.",
      en: "We prepare declarations, review legal documents, and follow up regulatory procedures before the competent authorities."
    },
    detail: {
      ar: "إعداد الإقرارات، ومراجعة المستندات القانونية، ومتابعة الإجراءات النظامية لدى الجهات المختصة.",
      en: "We prepare declarations, review legal documents, and follow up regulatory procedures before the competent authorities."
    },
    image: "/images/legal-files.jpg"
  },
  {
    slug: "review-violations-regulatory-action",
    title: {
      ar: "مراجعة المخالفات واتخاذ الإجراءات النظامية",
      en: "Review of Violations and Regulatory Action"
    },
    summary: {
      ar: "نقوم بمراجعة المخالفات والقرارات الإدارية، وتقييم الموقف القانوني، واتخاذ الإجراءات النظامية المناسبة، وتمثيل العملاء أمام الجهات المختصة عند الحاجة.",
      en: "We review violations and administrative decisions, assess the legal position, take the appropriate regulatory actions, and represent clients before the competent authorities when needed."
    },
    detail: {
      ar: "نقوم بمراجعة المخالفات والقرارات الإدارية، وتقييم الموقف القانوني، واتخاذ الإجراءات النظامية المناسبة، وتمثيل العملاء أمام الجهات المختصة عند الحاجة.",
      en: "We review violations and administrative decisions, assess the legal position, take the appropriate regulatory actions, and represent clients before the competent authorities when needed."
    },
    image: "/images/services/regulations-bylaws-v3.webp"
  }
];

export const reasons = [
  {
    title: { ar: "التزام واحترافية", en: "Commitment and Professionalism" },
    text: {
      ar: "نلتزم بالمصداقية والشفافية والعمل بجد لتحقيق مصالحك.",
      en: "We commit to credibility, transparency, and diligent work to serve your interests."
    }
  },
  {
    title: { ar: "متابعة دقيقة", en: "Precise Follow-up" },
    text: {
      ar: "متابعة مستمرة لقضيتك حتى تحقيق أفضل النتائج.",
      en: "Ongoing follow-up on your matter with clear communication at each appropriate step."
    }
  },
  {
    title: { ar: "خبرة واسعة", en: "Broad Experience" },
    text: {
      ar: "فريق قانوني متخصص بخبرة متنوعة في مختلف المجالات القانونية.",
      en: "A specialized legal team with varied experience across legal fields."
    }
  },
  {
    title: { ar: "سرية تامة", en: "Complete Confidentiality" },
    text: {
      ar: "نلتزم بحماية بياناتك ومعلوماتك بسرية كاملة.",
      en: "We are committed to protecting your data and information with complete confidentiality."
    }
  },
  {
    title: { ar: "حلول عملية", en: "Practical Solutions" },
    text: {
      ar: "نركز على النتائج ونقدم حلولًا عملية وفعالة.",
      en: "We focus on practical legal approaches suited to each matter."
    }
  }
];

export const journey = [
  {
    title: { ar: "التواصل الأولي", en: "Initial Contact" },
    text: {
      ar: "تواصل مباشر عبر الهاتف أو الواتساب أو البريد لعرض الطلب.",
      en: "Direct contact by phone, WhatsApp, or email to present the request."
    }
  },
  {
    title: { ar: "فهم الطلب", en: "Understanding the Request" },
    text: {
      ar: "توضيح نطاق المسألة والمعلومات الأساسية المطلوبة.",
      en: "Clarifying the matter's scope and the essential information needed."
    }
  },
  {
    title: { ar: "مراجعة التفاصيل", en: "Reviewing Details" },
    text: {
      ar: "مراجعة المستندات والتفاصيل المتاحة لتحديد الخطوة المناسبة.",
      en: "Reviewing available documents and details to determine the suitable next step."
    }
  },
  {
    title: { ar: "المتابعة والتواصل", en: "Follow-up and Communication" },
    text: {
      ar: "متابعة مستمرة وتواصل واضح بحسب طبيعة الطلب.",
      en: "Ongoing follow-up and clear communication according to the nature of the request."
    }
  }
];

export const pages = {
  home: { ar: "الرئيسية", en: "Home" },
  about: { ar: "عن المكتب", en: "About" },
  services: { ar: "الخدمات القانونية", en: "Legal Services" },
  why: { ar: "لماذا نحن", en: "Why Us" },
  contact: { ar: "تواصل معنا", en: "Contact" },
  privacy: { ar: "سياسة الخصوصية", en: "Privacy Policy" },
  disclaimer: { ar: "إخلاء المسؤولية القانونية", en: "Legal Disclaimer" },
  consultation: { ar: "طلب استشارة", en: "Request Consultation" }
} satisfies Record<string, LocalizedText>;

export const seo = {
  description: {
    ar: "موقع مكتب أسامه بن أحمد بن محفوظ، المحامي والمستشار القانوني في جدة، لخدمات قانونية واضحة وتواصل مباشر.",
    en: "Website of Osama bin Ahmed bin Mahfouz, lawyer and legal consultant in Jeddah, for clear legal services and direct contact."
  },
  keywords: {
    ar: ["مكتب محاماة في جدة", "محامي ومستشار قانوني في جدة", "خدمات قانونية في جدة"],
    en: ["Law firm in Jeddah", "Lawyer and legal consultant in Jeddah", "Legal services in Jeddah"]
  }
};

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
