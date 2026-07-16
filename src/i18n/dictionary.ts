import type { Locale } from "@/i18n/routing";

export const dictionary = {
  ar: {
    nav: {
      menu: "القائمة",
      close: "إغلاق القائمة",
      switchTo: "English",
      request: "طلب استشارة"
    },
    actions: {
      requestConsultation: "احجز استشارة مبدئية",
      exploreServices: "استكشف الخدمات",
      callNow: "اتصل الآن",
      whatsapp: "محادثة واتساب",
      email: "أرسل بريدًا",
      directContact: "تواصل مباشر",
      viewService: "استعراض الخدمة",
      allServices: "عرض جميع الخدمات",
      backServices: "العودة إلى الخدمات",
      submit: "إرسال الطلب"
    },
    sections: {
      selectedServices: "مجالات الممارسة",
      quote: "تعهد مهني",
      about: "عن المكتب",
      services: "الخدمات القانونية",
      reasons: "لماذا تختارنا",
      journey: "رحلة التواصل",
      finalContact: "تواصل مباشر",
      legalPages: "الصفحات القانونية",
      contactData: "بيانات التواصل"
    },
    home: {
      intro: "مكتب أسامه بن أحمد بن محفوظ للمحاماة",
      aboutParagraphs: [
        "نؤمن بأن كل قضية تستحق دراسة دقيقة، وكل حق يستحق دفاعًا قائمًا على العلم والخبرة المهنية. لذلك نحرص على تقديم خدمات قانونية مبنية على فهم عميق للأنظمة واللوائح السعودية، مع دراسة كل قضية بعناية، ووضع الحلول القانونية المناسبة وفقًا لوقائعها.",
        "نعتمد في عملنا على الشفافية والوضوح مع عملائنا، ونلتزم بالمحافظة على سرية المعلومات، وإطلاع العميل على جميع مراحل العمل، وتقديم الرأي القانوني بكل أمانة ومهنية، بما يساعده على اتخاذ القرار المناسب بثقة.",
        "هدفنا هو بناء علاقة طويلة الأمد مع عملائنا، تقوم على الثقة والاحترافية، من خلال تقديم خدمات قانونية عالية الجودة، وتمثيل مصالحهم بأعلى درجات المسؤولية والالتزام."
      ],
      reasonsLead:
        "المبادئ التالية هي طريقة العمل في التواصل ومتابعة الطلبات، دون وعود بنتائج أو أرقام غير موثقة.",
      journeyLead:
        "مسار بسيط للتواصل وفهم الطلب ومراجعة التفاصيل، مع بقاء القنوات المباشرة متاحة في كل خطوة."
    },
    form: {
      title: "نموذج طلب استشارة",
      fullName: "الاسم الكامل",
      phone: "رقم الجوال",
      email: "البريد الإلكتروني",
      service: "الخدمة المطلوبة",
      message: "وصف مختصر",
      preferred: "طريقة التواصل المفضلة",
      preferredPhone: "اتصال",
      preferredWhatsapp: "واتساب",
      preferredEmail: "بريد إلكتروني",
      privacy: "أوافق على سياسة الخصوصية",
      success: "شكرًا لك. يمكنك متابعة الطلب عبر الواتساب أو الاتصال المباشر.",
      chooseService: "اختر الخدمة",
      errors: {
        name: "يرجى إدخال الاسم الكامل.",
        phone: "يرجى إدخال رقم الجوال.",
        email: "يرجى إدخال بريد إلكتروني صحيح.",
        service: "يرجى اختيار الخدمة المطلوبة.",
        message: "يرجى كتابة تفاصيل الطلب.",
        privacy: "يرجى الموافقة على سياسة الخصوصية."
      }
    },
    pages: {
      aboutTitle: "عن المكتب",
      servicesTitle: "الخدمات القانونية",
      contactTitle: "التواصل وطلب الاستشارة",
      privacyTitle: "سياسة الخصوصية",
      disclaimerTitle: "إخلاء المسؤولية القانونية",
      notFoundTitle: "الصفحة غير موجودة",
      notFoundText: "قد يكون الرابط غير صحيح أو تم نقله. يمكنك العودة للرئيسية أو استعراض الخدمات القانونية."
    },
    legal: {
      privacyIntro:
        "توضح هذه السياسة كيفية التعامل مع المعلومات التي قد يشاركها الزائر عند استخدام الموقع أو التواصل المباشر مع المكتب.",
      privacyItems: [
        "عند استخدام الهاتف أو الواتساب أو البريد، تنتقل بيانات التواصل عبر الخدمة التي يختارها الزائر."
      ],
      disclaimerIntro:
        "المعلومات المنشورة في هذا الموقع للتعريف بالمكتب وخدماته القانونية، ولا تعد استشارة قانونية خاصة بأي حالة.",
      disclaimerItems: [
        "لا ينشأ تمثيل قانوني أو علاقة مهنية بمجرد تصفح الموقع أو إرسال نموذج.",
        "تحتاج كل مسألة قانونية إلى مراجعة تفاصيلها ومستنداتها قبل تحديد الرأي أو الخطوة المناسبة.",
        "لا يقدم الموقع ضمانًا لنتيجة قانونية أو حكم أو تسوية.",
        "يرجى استخدام وسائل التواصل لطلب مراجعة أولية للمسألة."
      ]
    },
    footer: {
      rights: "جميع الحقوق محفوظة"
    }
  },
  en: {
    nav: {
      menu: "Menu",
      close: "Close menu",
      switchTo: "العربية",
      request: "Request Consultation"
    },
    actions: {
      requestConsultation: "Book an Initial Consultation",
      exploreServices: "Explore Services",
      callNow: "Call Now",
      whatsapp: "WhatsApp Chat",
      email: "Send Email",
      directContact: "Direct Contact",
      viewService: "View Service",
      allServices: "View All Services",
      backServices: "Back to Services",
      submit: "Send Request"
    },
    sections: {
      selectedServices: "Practice Areas",
      quote: "Professional Commitment",
      about: "About the Firm",
      services: "Legal Services",
      reasons: "Why Choose Us",
      journey: "Contact Journey",
      finalContact: "Direct Contact",
      legalPages: "Legal Pages",
      contactData: "Contact Details"
    },
    home: {
      intro: "Osama bin Ahmed bin Mahfouz Law Firm",
      aboutParagraphs: [
        "We believe that every case deserves careful examination, and that every right deserves a defence founded on sound legal knowledge and professional experience. We therefore provide legal services grounded in a thorough understanding of Saudi laws and regulations, carefully assessing the facts of each matter and developing the appropriate legal solutions accordingly.",
        "Our practice is founded on transparency and clear communication with our clients. We are committed to maintaining the confidentiality of all information, keeping clients informed throughout every stage of their matter, and providing legal advice with integrity and professionalism to enable them to make informed decisions with confidence.",
        "Our objective is to build long-term relationships with our clients based on trust and professionalism by delivering high-quality legal services and representing their interests with the highest standards of responsibility and commitment."
      ],
      reasonsLead:
        "The following principles guide communication and request follow-up, without unverified promises, numbers, or claims.",
      journeyLead:
        "A simple path for contact, understanding the request, and reviewing details while direct channels remain available at every step."
    },
    form: {
      title: "Consultation Request Form",
      fullName: "Full Name",
      phone: "Mobile Number",
      email: "Email",
      service: "Requested Service",
      message: "Brief Description",
      preferred: "Preferred Contact Method",
      preferredPhone: "Phone",
      preferredWhatsapp: "WhatsApp",
      preferredEmail: "Email",
      privacy: "I agree to the privacy policy",
      success: "Thank you. You can continue through WhatsApp or direct phone contact.",
      chooseService: "Choose a service",
      errors: {
        name: "Please enter your full name.",
        phone: "Please enter your phone number.",
        email: "Please enter a valid email address.",
        service: "Please choose the required service.",
        message: "Please enter the request details.",
        privacy: "Please agree to the privacy policy."
      }
    },
    pages: {
      aboutTitle: "Legal Representation & Advisory",
      servicesTitle: "Legal Services",
      contactTitle: "Contact and Consultation Request",
      privacyTitle: "Privacy Policy",
      disclaimerTitle: "Legal Disclaimer",
      notFoundTitle: "Page Not Found",
      notFoundText: "The link may be incorrect or moved. You can return home or review the legal services."
    },
    legal: {
      privacyIntro:
        "This policy explains how information may be handled when a visitor uses the website or contacts the firm directly.",
      privacyItems: [
        "When using phone, WhatsApp, or email, contact information is transferred through the service selected by the visitor."
      ],
      disclaimerIntro:
        "The information published on this website introduces the firm and its legal services, and does not constitute legal advice for any specific matter.",
      disclaimerItems: [
        "No legal representation or professional relationship is created merely by browsing the website or sending a form.",
        "Each legal matter requires review of its details and documents before an opinion or suitable step is determined.",
        "The website does not guarantee any legal result, judgment, or settlement.",
        "Please use the contact channels to request an initial review of the matter."
      ]
    },
    footer: {
      rights: "All rights reserved"
    }
  }
} as const;

export type Dictionary = (typeof dictionary)[Locale];

export function getDictionary(locale: Locale) {
  return dictionary[locale];
}
