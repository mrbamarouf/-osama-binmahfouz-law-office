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
      intro: "مكتب أسامه بن محفوظ للمحاماة",
      aboutText:
        "مكتب قانوني في جدة يقدم خدمات المحاماة والاستشارات القانونية وفق معلومات واضحة وتواصل مباشر، مع التركيز على السرية والاحترافية وفهم تفاصيل كل طلب.",
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
      chooseService: "اختر الخدمة"
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
      about: "About the Office",
      services: "Legal Services",
      reasons: "Why Choose Us",
      journey: "Contact Journey",
      finalContact: "Direct Contact",
      legalPages: "Legal Pages",
      contactData: "Contact Details"
    },
    home: {
      intro: "Osama Bin Mahfouz Law Office",
      aboutText:
        "A law office in Jeddah providing advocacy and legal consultation services through clear information and direct communication, with attention to confidentiality, professionalism, and understanding the details of each request.",
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
      chooseService: "Choose a service"
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
        "This policy explains how information may be handled when a visitor uses the website or contacts the office directly.",
      privacyItems: [
        "When using phone, WhatsApp, or email, contact information is transferred through the service selected by the visitor."
      ],
      disclaimerIntro:
        "The information published on this website introduces the office and its legal services, and does not constitute legal advice for any specific matter.",
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
