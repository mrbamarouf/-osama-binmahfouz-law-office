import type { Locale } from "@/i18n/routing";

export type LocalizedText = Record<Locale, string>;

export type Service = {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  detail: LocalizedText;
  image: string;
};

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://osama-binmahfouz-law-office.example";

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
    ar: "أسامه بن أحمد بن سالم بن محفوظ",
    en: "Osama bin Ahmed bin Salem bin Mahfouz"
  } satisfies LocalizedText,
  role: {
    ar: "المحامي والمستشار القانوني",
    en: "Lawyer and Legal Consultant"
  } satisfies LocalizedText,
  practice: {
    ar: "للمحاماة والاستشارات القانونية",
    en: "Law Office and Legal Consultations"
  } satisfies LocalizedText
};

export const coreCopy = {
  headline: {
    ar: "معك في كل خطوة.. حتى يصل حقك",
    en: "With you at every step, until your rights are protected."
  } satisfies LocalizedText,
  support: {
    ar: "نقدم لك استشارات وحلولًا قانونية واضحة وفعالة، نضع خبرتنا بين يديك لتحصل على أفضل النتائج بأعلى درجات الاحترافية والسرية.",
    en: "We provide clear and effective legal consultations and solutions, placing our experience in your hands so you can obtain the best possible results with the highest levels of professionalism and confidentiality."
  } satisfies LocalizedText,
  quote: {
    ar: "حقوقكم ليست محل مساومة، وثقتكم ليست محل تهاون؛ لذلك نلتزم بخدمتكم بتمثيل قانوني قوي، وحلول مدروسة، ودفاع لا يتزعزع.",
    en: "Your rights are not negotiable, and your trust is never taken lightly. We are committed to strong legal representation, considered solutions, and unwavering advocacy."
  } satisfies LocalizedText,
  closing: {
    ar: "ثقتك أمانة.. ورضاك هدفنا",
    en: "Your trust is our responsibility. Your satisfaction is our goal."
  } satisfies LocalizedText
};

export const services: Service[] = [
  {
    slug: "criminal-cases",
    title: {
      ar: "القضايا الجنائية",
      en: "Criminal Cases"
    },
    summary: {
      ar: "الدفاع في جميع مراحل الدعوى الجزائية، وحماية الحقوق وضمان تحقيق العدالة.",
      en: "Defense through all stages of criminal proceedings, protecting rights and ensuring justice is achieved."
    },
    detail: {
      ar: "يركز المكتب على الدفاع في مراحل الدعوى الجزائية المختلفة، مع حماية الحقوق ومتابعة ما يلزم لضمان تحقيق العدالة وفق المعلومات المتاحة في كل حالة.",
      en: "The office focuses on defense through the different stages of criminal proceedings, protecting rights and following what is needed to ensure justice according to the information available in each case."
    },
    image: "/images/court-interior.jpg"
  },
  {
    slug: "consultations-contracts",
    title: {
      ar: "الاستشارات والعقود",
      en: "Consultations and Contracts"
    },
    summary: {
      ar: "صياغة ومراجعة العقود والاتفاقيات، ووضع الشروط والأحكام، وتقديم استشارات قانونية دقيقة.",
      en: "Drafting and reviewing contracts and agreements, setting terms and conditions, and providing precise legal consultations."
    },
    detail: {
      ar: "تغطي الخدمة صياغة ومراجعة العقود والاتفاقيات ووضع الشروط والأحكام، إلى جانب تقديم استشارات قانونية دقيقة تساعد على وضوح الالتزامات وحماية المصالح.",
      en: "This service covers drafting and reviewing contracts and agreements, setting terms and conditions, and providing precise legal consultations that clarify obligations and protect interests."
    },
    image: "/images/legal-books.jpg"
  },
  {
    slug: "labor-cases",
    title: {
      ar: "القضايا العمالية",
      en: "Labor Cases"
    },
    summary: {
      ar: "حماية حقوق العاملين وأصحاب العمل، وإنهاء الخدمات، والفصل التعسفي، وتسوية النزاعات.",
      en: "Protecting the rights of employees and employers, end-of-service matters, unfair dismissal, and dispute settlement."
    },
    detail: {
      ar: "تعنى الخدمة بحماية حقوق العاملين وأصحاب العمل، وما يرتبط بإنهاء الخدمات والفصل التعسفي وتسوية النزاعات العمالية.",
      en: "This service addresses the rights of employees and employers, including end-of-service matters, unfair dismissal, and the settlement of labor disputes."
    },
    image: "/images/office-meeting.jpg"
  },
  {
    slug: "civil-commercial-cases",
    title: {
      ar: "القضايا المدنية والتجارية",
      en: "Civil and Commercial Cases"
    },
    summary: {
      ar: "حل النزاعات المدنية والتجارية، والمطالبات المالية، والتعويضات، والوكالات التجارية.",
      en: "Resolving civil and commercial disputes, financial claims, compensation, and commercial agencies."
    },
    detail: {
      ar: "تشمل الخدمة التعامل مع النزاعات المدنية والتجارية، والمطالبات المالية، والتعويضات، والوكالات التجارية، من خلال معالجة قانونية واضحة.",
      en: "This service includes handling civil and commercial disputes, financial claims, compensation, and commercial agencies through clear legal handling."
    },
    image: "/images/atelier-palm-museum.jpg"
  },
  {
    slug: "regulations-bylaws",
    title: {
      ar: "الأنظمة واللوائح",
      en: "Regulations and Bylaws"
    },
    summary: {
      ar: "تقديم الحلول القانونية المتوافقة مع الأنظمة واللوائح لحماية مصالحك وتجنب المخاطر.",
      en: "Providing legal solutions aligned with regulations and bylaws to protect your interests and avoid risks."
    },
    detail: {
      ar: "تقوم الخدمة على تقديم حلول قانونية متوافقة مع الأنظمة واللوائح، بما يساعد على حماية المصالح وتجنب المخاطر النظامية.",
      en: "This service provides legal solutions aligned with regulations and bylaws, helping protect interests and avoid regulatory risks."
    },
    image: "/images/legal-files.jpg"
  },
  {
    slug: "criminal-courts",
    title: {
      ar: "المحاكم الجنائية",
      en: "Criminal Courts"
    },
    summary: {
      ar: "خبرة في الدفاع والتحقيق وتمثيل الموكلين أمام جميع أنواع المحاكم الجنائية.",
      en: "Experience in defense, investigation, and representing clients before all types of criminal courts."
    },
    detail: {
      ar: "تختص الخدمة بالدفاع والتحقيق وتمثيل الموكلين أمام جميع أنواع المحاكم الجنائية، ضمن نطاق الوقائع والمستندات ذات الصلة.",
      en: "This service concerns defense, investigation, and representing clients before all types of criminal courts within the scope of relevant facts and documents."
    },
    image: "/images/legal-gavel.jpg"
  },
  {
    slug: "enforcement-courts",
    title: {
      ar: "محاكم التنفيذ",
      en: "Enforcement Courts"
    },
    summary: {
      ar: "متابعة وتنفيذ الأحكام والسندات التنفيذية، وإجراءات الحجز وبيع المنقول والعقار.",
      en: "Following up and enforcing judgments and enforceable instruments, including attachment procedures and the sale of movable and real estate property."
    },
    detail: {
      ar: "تشمل الخدمة متابعة وتنفيذ الأحكام والسندات التنفيذية، وإجراءات الحجز وبيع المنقول والعقار وفق ما تتطلبه الحالة.",
      en: "This service includes following up and enforcing judgments and enforceable instruments, including attachment procedures and the sale of movable and real estate property as required by the case."
    },
    image: "/images/atelier-corridor.jpg"
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
      en: "Continuous follow-up on your case until the best possible results are achieved."
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
      en: "We focus on results and provide practical, effective solutions."
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
    ar: "موقع مكتب أسامه بن أحمد بن سالم بن محفوظ، المحامي والمستشار القانوني في جدة، لخدمات قانونية واضحة وتواصل مباشر.",
    en: "Website of Osama bin Ahmed bin Salem bin Mahfouz, lawyer and legal consultant in Jeddah, for clear legal services and direct contact."
  },
  keywords: {
    ar: ["مكتب محاماة في جدة", "محامي ومستشار قانوني في جدة", "خدمات قانونية في جدة"],
    en: ["Law office in Jeddah", "Lawyer and legal consultant in Jeddah", "Legal services in Jeddah"]
  }
};

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
