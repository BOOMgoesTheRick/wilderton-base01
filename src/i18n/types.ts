export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface WhyUsItem {
  title: string;
  description: string;
}

export interface QuestionItem {
  question: string;
  description: string;
}

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    services: string;
    about: string;
    practice: string;
    portfolio: string;
    contact: string;
    book: string;
    theme_light: string;
    theme_dark: string;
    theme_light_label: string;
    theme_dark_label: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    cta_primary: string;
    cta_secondary: string;
    stat1_value: string;
    stat1_label: string;
    stat2_value: string;
    stat2_label: string;
    stat3_value: string;
    stat3_label: string;
  };
  services: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    items: ServiceItem[];
  };
  about: {
    eyebrow: string;
    headline: string;
    body: string;
    body2: string;
    signature: string;
  };
  whyus: {
    eyebrow: string;
    headline: string;
    labels: string[];
    items: WhyUsItem[];
  };
  questions: {
    eyebrow: string;
    headline: string;
    items: QuestionItem[];
  };
  portfolio: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    items: {
      name: string;
      url: string;
      href: string;
      category: string;
      description: string;
      tags: string[];
    }[];
  };
  contact: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    form: {
      name: string;
      name_placeholder: string;
      org: string;
      org_placeholder: string;
      email: string;
      email_placeholder: string;
      subject: string;
      subject_placeholder: string;
      message: string;
      message_placeholder: string;
      submit: string;
      disclaimer: string;
      sent: string;
      error: string;
    };
  };
  footer: {
    tagline: string;
    rights: string;
    privacy: string;
    links: {
      services: string;
      about: string;
      contact: string;
    };
  };
}
