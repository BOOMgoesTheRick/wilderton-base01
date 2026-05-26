import type { Translations } from '../types';

export const en: Translations = {
  meta: {
    title: 'Wilderton Advisory — Strategic IT Consulting',
    description:
      'Strategic IT advisory for digital transformation, cybersecurity, Microsoft 365 architecture, and governance. 50+ projects delivered across industries.',
  },
  nav: {
    brand: 'Advisory',
    services: 'Services',
    about: 'About',
    practice: 'Practice',
    portfolio: 'Portfolio',
    diagnostic: 'Diagnostic',
    contact: 'Contact',
    book: 'Book a Call',
    theme_light: 'LT',
    theme_dark: 'DK',
    theme_light_label: 'Light mode',
    theme_dark_label: 'Dark mode',
  },
  hero: {
    eyebrow: 'Strategic IT Advisory',
    headline: 'Microsoft 365 security and Law 25 compliance — for Québec organizations.',
    subheadline:
      'A senior advisor who speaks to executives as fluently as to systems. We identify your security risks and compliance gaps, then fix them — no jargon, no runaround.',
    cta_primary: 'Explore Services',
    cta_secondary: 'Schedule a Consultation',
    stat1_value: '50+',
    stat1_label: 'Transformations Delivered',
    stat2_value: '10',
    stat2_label: 'Areas of Expertise',
    stat3_value: '100%',
    stat3_label: 'Executive-Focused',
    booking: 'Booking · Q3',
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
    card_title: '// Practice Snapshot',
    stat_projects: 'Projects',
    stat_domains: 'Domains',
    status_label: 'STATUS',
    status_value: '● Available · Q3',
    uptime_label: 'UPTIME',
    response_label: 'RESPONSE',
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
  questions: {
    eyebrow: 'Diagnostic',
    headline: 'Questions worth asking',
    items: [
      {
        question: 'Do I have the right person making technical decisions?',
        description: 'More often than not, critical technical decisions are made by people with little or no technical background. Poor governance here doesn\'t just slow projects down. It compounds into security gaps, wasted spend, and systems no one can maintain.',
      },
      {
        question: 'Do I actually know where my data lives?',
        description: 'Most organizations can\'t answer this precisely, which means they also can\'t answer who has access to it, where it\'s backed up, or whether it crosses borders. Under Loi 25, "we\'re not sure" is not a defensible position.',
      },
      {
        question: 'If we were hit by ransomware tomorrow, how long until we\'re operational?',
        description: 'Many leaders assume "we have backups" is the same as "we can recover." It isn\'t. The real question is recovery time, and most discover the gap only when it\'s too late to fix.',
      },
      {
        question: 'Am I buying products, or building a system?',
        description: 'Security and infrastructure assembled from disconnected purchases leave seams, and attackers live in the seams. A coherent architecture costs less over time than a drawer full of tools that don\'t talk to each other.',
      },
      {
        question: 'Who is accountable when something breaks?',
        description: 'If the honest answer is "it depends" or "the vendor," you have a governance gap, not a technical one. Accountability that lives everywhere lives nowhere.',
      },
      {
        question: 'Is our IT spend aligned with our actual risk?',
        description: 'Budgets are often shaped by habit, vendor relationships, or last year\'s crisis, rather than a clear-eyed view of what would genuinely hurt the organization most.',
      },
      {
        question: 'When the person who set this up leaves, what happens?',
        description: 'Undocumented systems and tribal knowledge are silent liabilities. If one departure can paralyze your operations, you don\'t have infrastructure. You have a dependency.',
      },
      {
        question: 'Are we using Microsoft 365, or just paying for it?',
        description: 'Most organizations license a fraction of what they own and configure even less. The gap between what M365 can do and what you\'ve actually deployed is usually where both your security risk and your wasted spend are hiding.',
      },
      {
        question: 'How are we still deploying devices, by hand?',
        description: 'If onboarding a new employee means someone manually imaging a laptop, you\'re paying senior time for work that should be automated. Modern deployment isn\'t a luxury. It\'s the difference between a hire being productive on day one or day five.',
      },
      {
        question: 'Who can access our systems from outside, and should they?',
        description: 'Remote access tends to accumulate quietly: a VPN rule here, a shared login there. Over time the perimeter you think you have and the one you actually have drift apart. Attackers find the difference before you do.',
      },
      {
        question: 'Can our email actually be trusted, by us and by everyone we send to?',
        description: 'Without proper authentication (SPF, DKIM, DMARC), your domain can be spoofed, your legitimate mail lands in spam, and your brand becomes a vector for fraud. Most organizations don\'t check until a client asks why they received a fake invoice "from you."',
      },
      {
        question: 'How much of my team\'s week is spent on work a script could do?',
        description: 'Repetitive manual tasks aren\'t just a productivity cost. Every manual step is a place where something gets done inconsistently, or forgotten. Automation isn\'t only faster. It\'s how you make security and process actually repeatable.',
      },
      {
        question: 'If we need a tool that doesn\'t exist, what are our options?',
        description: 'Many organizations bend their processes to fit off-the-shelf software, or stitch together subscriptions that almost work. Sometimes the right answer is to build, but only if someone can tell you honestly when building is worth it and when it isn\'t.',
      },
      {
        question: 'Does our technology fit the organization we\'re becoming, or the one we were?',
        description: 'Systems chosen three years ago quietly become constraints. Growth, new regulations, hybrid work: the question isn\'t whether your IT works today, but whether it can carry where you\'re headed.',
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
  diagnostic: {
    eyebrow: 'Start here',
    headline: 'The Microsoft 365 Security & Law 25 Diagnostic',
    subheadline: 'Fixed scope. Fixed price. Delivered in 4 to 6 weeks.',
    body1: 'Most organizations don\'t know exactly where their security gaps are, or how exposed they are under Law 25 — until an incident, an auditor, or a client asks. The Diagnostic answers that question before someone else does.',
    body2: 'Over a few weeks, we review your Microsoft 365 environment, your identity and access, your real recovery capability, and your Law 25 exposure. You get a clear, risk-ranked picture, written to be understood by your leadership and your IT team alike.',
    list_heading: 'You walk away with:',
    list_items: [
      'A written report with findings ranked by risk level;',
      'A prioritized 30/60/90-day remediation roadmap;',
      'A one-page summary for your leadership;',
      'A readout session to walk you through what matters, and why.',
    ],
    price: 'From $4,500 CAD. No obligation to continue. The diagnostic is yours, whether you do the remediation with us or not.',
    button: 'Book a diagnostic',
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
    desc: 'Strategic IT Advisory. Architecture, governance, and security for executives who demand excellence.',
    nav_heading: 'Navigation',
    lang_heading: 'Language',
    legal_heading: 'Legal',
    rights: '© 2026 Wilderton Advisory. All rights reserved.',
    privacy: 'Privacy Policy',
    links: {
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
  },
};
