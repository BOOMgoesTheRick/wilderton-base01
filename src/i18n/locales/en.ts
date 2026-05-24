import type { Translations } from '../types';

export const en: Translations = {
  meta: {
    title: 'Wilderton Advisory — Strategic IT Consulting',
    description:
      'Strategic IT advisory for digital transformation, cybersecurity, Microsoft 365 architecture, and governance. 50+ projects delivered across industries.',
  },
  nav: {
    services: 'Services',
    about: 'About',
    practice: 'Practice',
    portfolio: 'Portfolio',
    contact: 'Contact',
    book: 'Book a Call',
    theme_light: 'LT',
    theme_dark: 'DK',
    theme_light_label: 'Light mode',
    theme_dark_label: 'Dark mode',
  },
  hero: {
    eyebrow: 'Strategic IT Advisory',
    headline: 'Technology Leadership for Organizations That Demand Excellence',
    subheadline:
      'From digital transformation to cybersecurity architecture — we help executives align IT with strategy, reduce risk, and build systems built to last.',
    cta_primary: 'Explore Services',
    cta_secondary: 'Schedule a Consultation',
    stat1_value: '50+',
    stat1_label: 'Transformations Delivered',
    stat2_value: '10',
    stat2_label: 'Areas of Expertise',
    stat3_value: '100%',
    stat3_label: 'Executive-Focused',
  },
  services: {
    eyebrow: 'Advisory Services',
    headline: 'Ten Competencies. One Strategic Partner.',
    subheadline:
      "Every engagement is tailored to your organization's maturity, risk profile, and executive priorities.",
    items: [
      {
        number: '01',
        title: 'IT Strategy & Digital Transformation',
        description:
          'Modernize technology, governance, and workflows through structured digital transformation. Combining IT architecture, cybersecurity, compliance, and operational efficiency — aligned with your executive vision. 50+ transformation projects delivered.',
        tags: ['Digital Roadmap', 'IT Architecture', 'Board Governance'],
      },
      {
        number: '02',
        title: 'Microsoft 365 Architecture & Migration',
        description:
          'Design, migration, and optimization of M365 environments including Exchange Online, SharePoint, Teams, OneDrive, Entra ID, Intune, and Defender. Structured, secure, and cost-optimized for professional organizations.',
        tags: ['Exchange Online', 'SharePoint', 'Entra ID'],
      },
      {
        number: '03',
        title: 'Cybersecurity & Zero-Trust Implementation',
        description:
          'Layered cybersecurity architectures using a Zero-Trust approach. Identity protection, endpoint security, network filtering, monitoring, and compliance. Security is built as a system — not assembled from products.',
        tags: ['Zero Trust', 'Conditional Access', 'EDR'],
      },
      {
        number: '04',
        title: 'Endpoint Management & Modern Deployment',
        description:
          'Transition from traditional imaging to cloud-based device management via Intune and Windows Autopilot. Centralized policy, compliance enforcement, application packaging, and secure onboarding for hybrid workforces.',
        tags: ['Intune', 'Autopilot', 'MDM'],
      },
      {
        number: '05',
        title: 'Infrastructure & Network Architecture',
        description:
          'Design and management of hybrid infrastructures: Windows Server, Hyper-V, Meraki, FortiGate, VPN architectures, and secure remote access. Focused on resilience, cost control, and long-term sustainability.',
        tags: ['Hyper-V', 'FortiGate', 'VPN'],
      },
      {
        number: '06',
        title: 'IT Governance & Compliance',
        description:
          'Advisory for IT governance, Loi 25 compliance, privacy regulations, and board-level risk oversight. We bridge the gap between technical systems and executive accountability — from maturity assessments to DLP strategy.',
        tags: ['Loi 25', 'Risk Management', 'DLP'],
      },
      {
        number: '07',
        title: 'Custom SaaS & Web Application Development',
        description:
          'Design and development of custom SaaS platforms, CRMs, and data-driven web applications. From multi-tenant architectures and automated ingestion pipelines to admin dashboards and bilingual storefronts — built for scale, performance, and long-term maintainability.',
        tags: ['Next.js', 'Supabase', 'SaaS'],
      },
      {
        number: '08',
        title: 'Process Automation & Scripting',
        description:
          'Automation of repetitive IT tasks using PowerShell, Microsoft Graph API, Intune scripts, and RMM integrations. Automation increases security consistency, reduces operational risk, and frees your team for strategic work.',
        tags: ['PowerShell', 'Graph API', 'RMM'],
      },
      {
        number: '09',
        title: 'Email & Collaboration Architecture',
        description:
          'Design of secure, structured email and collaboration environments. Special focus on shared mailboxes, delegate management, email authentication (SPF/DKIM/DMARC), banner filtering, and Power Automate compatibility.',
        tags: ['SPF/DKIM/DMARC', 'Shared Mailboxes', 'Power Automate'],
      },
      {
        number: '10',
        title: 'Backup & Business Continuity',
        description:
          'Strategic backup design beyond "just backups." Focus on business continuity, ransomware resilience, and recovery speed — Microsoft 365 backup, Veeam implementations, and tested disaster recovery planning.',
        tags: ['Veeam', 'M365 Backup', 'Disaster Recovery'],
      },
    ],
  },
  about: {
    eyebrow: 'About Wilderton',
    headline: 'Senior IT Advisor.\nExecutive Partner.\nTrusted Architect.',
    body: 'Wilderton Advisory was built on a simple conviction: organizations deserve an IT advisory practice that speaks both technical and executive language fluently. With over 50 transformation projects delivered across industries, we bring enterprise-grade rigor with boutique agility.',
    body2:
      'Every engagement starts with listening — to your strategy, your constraints, and your risk tolerance. The result is always a solution designed for your organization, not adapted from a template.',
    signature: 'Wilderton Advisory',
  },
  whyus: {
    eyebrow: 'Why Wilderton',
    headline: 'What Sets This Practice Apart',
    labels: ['A · Executive', 'B · Systemic', 'C · Direct', 'D · Audit-Ready'],
    items: [
      {
        title: 'Executive Fluency',
        description:
          'We communicate with boards, CFOs, and operations leads — not just IT staff. Every recommendation is anchored in business context, financial reality, and strategic direction.',
      },
      {
        title: 'Architecture First',
        description:
          'No band-aids. Every solution is designed as a system — secure, scalable, and sustainable from day one. We build for the organization you are becoming, not just the one you are today.',
      },
      {
        title: 'Boutique Accountability',
        description:
          'You work directly with the senior advisor throughout the engagement — not a rotating team of juniors. Continuity, ownership, and accountability are non-negotiable.',
      },
      {
        title: 'Compliance Ready',
        description:
          'Deep expertise in Loi 25, cybersecurity frameworks, and risk management means your organization is always audit-ready — and your leadership team is always informed.',
      },
    ],
  },
  portfolio: {
    eyebrow: 'Selected Work',
    headline: 'Web projects.',
    subheadline: 'A selection of digital products designed and built end-to-end.',
    items: [
      {
        name: 'DeskAbroad',
        url: 'deskabroad.co',
        href: 'https://www.deskabroad.co/',
        category: 'Directory · Travel',
        description: 'Global coworking, coliving, and café directory for digital nomads. Automated data ingestion pipeline collects, scores, and publishes venues at scale — paired with editorial city guides.',
        tags: ['Next.js', 'TypeScript', 'Automated Ingestion', 'Data Pipeline'],
      },
      {
        name: 'Skylevels',
        url: 'skylevels.co',
        href: 'https://www.skylevels.co/',
        category: 'Directory · Lifestyle',
        description: 'Worldwide rooftop bar and restaurant directory covering 1,880+ venues across 9 languages. Automated venue collection and full SEO architecture.',
        tags: ['Next.js', 'TypeScript', '9 Languages', '1,880+ Venues'],
      },
    ],
  },
  contact: {
    eyebrow: 'Get in Touch',
    headline: 'Start the Conversation',
    subheadline:
      'Whether you are planning a transformation, navigating a compliance challenge, or simply need a seasoned second opinion — we are here.',
    form: {
      name: 'Full Name',
      name_placeholder: 'Jean Dupont',
      org: 'Organization',
      org_placeholder: 'Your Company',
      email: 'Email Address',
      email_placeholder: 'jean@yourcompany.com',
      subject: 'Subject',
      subject_placeholder: 'How can I help you?',
      message: 'Message',
      message_placeholder: 'Tell me about your project or challenge...',
      submit: 'Send Message',
      disclaimer: 'Your information is confidential and will never be shared.',
      sent: 'Message sent successfully. We will be in touch shortly.',
      error: 'Something went wrong. Please try again or email directly at info@wilderton-advisory.com',
    },
  },
  footer: {
    tagline: 'Strategic IT Advisory',
    rights: '© 2026 Wilderton Advisory. All rights reserved.',
    privacy: 'Privacy Policy',
    links: {
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
  },
};
