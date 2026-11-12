export type Lang = 'en' | 'it';

export const translations = {
  en: {
    nav: {
      features: 'Features',
      how: 'How it works',
      pricing: 'Pricing',
      faq: 'FAQ',
      platform: 'Platform',
      signIn: 'Sign in',
      bookDemo: 'Book a demo',
    },
    hero: {
      badge: 'AI Receptionist for Restaurants',
      title1: 'Never miss',
      title2: 'another',
      titleHighlight: 'booking',
      titlePeriod: '.',
      subtitle:
        'OvioPlus answers every phone call, chat and web booking, 24 hours a day, and gives your staff one screen for the whole service: the live floor plan and every booking from every channel.',
      cta1: 'Try it free for 14 days',
      cta2: 'Book a demo',
      trialNote: 'No credit card needed.',
      stat1Label: 'Live now',
      stat1Calls: 'calls',
      stat2Label: 'Tonight',
      stat2Covers: 'covers',
      stat2Confirmed: 'Confirmed',
      stat2Pending: 'Pending',
      stat2Voice: 'Voice AI booked',
      stat3Label: 'Main hall',
      stat3Free: 'free',
      stat3Occupied: 'occupied',
    },
    channels: {
      eyebrow: 'Three channels, one brain',
      title1: 'Wherever your customer reaches you,',
      titleHighlight: 'we answer.',
      subtitle:
        'Same calendar. Same data. Same brain. Whether they call, chat, or click, they always get the same instant, accurate response.',
      cards: [
        {
          eyebrow: 'Web',
          title: 'Visual booking',
          description:
            'Customers see your actual floor plan and pick their exact table, like choosing a seat on a flight, but for dinner.',
        },
        {
          eyebrow: 'Embed',
          title: 'AI chat',
          description:
            "Drop a widget on your site. Customers type 'a table for 4 tomorrow at 8': the AI handles the rest, in Italian or English.",
        },
        {
          eyebrow: 'Phone',
          title: 'AI voice',
          description:
            'Keep your existing number. Forward calls to our AI. It answers in a natural voice, books the table, sends confirmation.',
        },
      ],
    },
    how: {
      eyebrow: 'How it works',
      title1: 'From hello to confirmed table',
      titleHighlight: 'in 90 seconds.',
      footer: 'You do nothing. The AI does everything. Your tables fill up.',
      steps: [
        { title: 'Customer reaches out', body: 'Phone, chat, or web form.' },
        { title: 'AI collects details', body: 'Date, time, guests, name, email, phone.' },
        { title: 'Availability checked', body: 'Live table inventory: never overbooks.' },
        { title: 'Reservation created', body: 'Saved in your dashboard instantly.' },
        { title: 'Confirmation sent', body: 'Customer + owner notified by email.' },
      ],
    },

    problem: {
      eyebrow: 'The problem',
      title1: 'The phone rings.',
      titleHighlight: 'Right in the middle of service.',
      subtitle: 'Every restaurant knows these three moments. They cost tables every week.',
      cards: [
        {
          title: 'Calls missed at 8:30 pm',
          body: 'Nobody can pick up during service. Every unanswered call is a table that goes to the restaurant down the street.',
        },
        {
          title: 'Bookings scattered everywhere',
          body: 'Phone, WhatsApp, Instagram, the paper book. One slip and the same table is promised twice.',
        },
        {
          title: 'No clear picture of the night',
          body: 'Who arrives when, at which table, with which allergy? Without one screen, the room runs on memory.',
        },
      ],
    },
    video: {
      eyebrow: 'In 40 seconds',
      title1: 'A Saturday night,',
      titleHighlight: 'before and after OvioPlus.',
      soundOn: 'Turn sound on',
      soundOff: 'Mute',
      ariaLabel: 'OvioPlus video: a busy Saturday night, missed calls, then the AI answering and the live floor plan.',
    },
    platform: {
      eyebrow: 'The platform in action',
      title1: 'One screen for the whole service.',
      titleHighlight: 'From the first call to the last table.',
      subtitle:
        'The AI answers guests. Your staff get a live view of the room, every booking from every channel, and an assistant that answers questions about the night.',
      items: [
        {
          eyebrow: 'Service view',
          title: 'Your room, live',
          body: 'The floor plan at any time of the evening: who is seated, who arrives in the next hour, which tables are free. Tap a free table to seat a walk-in.',
          bullets: ['Map and timeline of the whole day', 'Slide through the evening, minute by minute', 'Map zoomed to your room, full screen when you need it'],
        },
        {
          eyebrow: 'Every channel',
          title: 'Phone, WhatsApp, walk-in: one calendar',
          body: 'Bookings that arrive outside the AI take seconds to add, and they land in the same calendar. Move a guest to another table or change any detail without starting over.',
          bullets: ['Change table in one tap', 'Edit date, time, guests and notes', 'No double bookings, ever: one calendar for everyone'],
        },
        {
          eyebrow: 'Calendar',
          title: 'Jump to any date',
          body: 'Open the calendar and see how many covers each day already has, before you open it. Busy Saturdays stand out weeks ahead.',
          bullets: ['Covers per day at a glance', 'Closed days marked', 'Search any guest by name or phone, on any date'],
        },
        {
          eyebrow: 'Ask Ovio',
          title: 'An assistant for you, not just for guests',
          body: '"Who arrives tonight?" "Any allergies today?" "Move Rossi to 9 pm." Ask in plain words. Ovio answers from your real bookings and changes nothing until you confirm.',
          bullets: ['Answers from your own data', 'Proposes changes, you confirm', 'Undo in one tap'],
        },
        {
          eyebrow: 'Booking page',
          title: 'A booking page in your style',
          body: 'Your colours, your fonts, your floor plan. Guests pick a table or chat with the AI, in Italian or English, and get an email confirmation straight away.',
          bullets: ['Form or AI chat first: you choose', 'Guests pick their exact table', 'Instant email confirmation'],
        },
      ],
    },
    advantages: {
      eyebrow: 'Why OvioPlus',
      title1: 'Built for restaurants.',
      titleHighlight: 'Not adapted to them.',
      items: [
        { title: 'Made for Italian restaurants', body: 'Italian first, English when guests need it. Designed with restaurant owners, so staff use it from the first night.' },
        { title: 'One calendar, zero double bookings', body: 'AI, web and staff bookings share the same tables and the same rules. The system refuses a table that is already taken.' },
        { title: 'Keep your phone number', body: 'Forward calls when you want: always, after hours, or only when nobody picks up. Guests dial the number they already know.' },
        { title: 'Data in Europe, transparent AI', body: 'GDPR by design. Guests are told they are talking to an AI, as the European AI Act requires.' },
        { title: 'Live the same day', body: 'Draw your floor plan, set your hours, share your link. Try it free for 14 days, no card needed.' },
      ],
    },
    clients: { eyebrow: 'Trusted by restaurants across Italy' },
    pricing: {
      eyebrow: 'Pricing',
      title1: 'Simple plans.',
      titleHighlight: 'No surprises.',
      subtitle: 'Pick the plan that fits today. Change it anytime. Cancel whenever.',
      mostPopular: 'Most Popular',
      cta: 'Get started',
      monthly: 'Monthly',
      yearly: 'Yearly',
      yearlyDiscountPercent: '10',
      perMonth: '/ month',
      billedAnnually: 'billed {{total}} / year',
      trialLine: 'Not sure yet? Try OvioPlus free for 14 days: booking page, AI chat and the full dashboard. No card needed.',
      trialCta: 'Start the free trial',
      footer: 'Setup fee €149 one-time · waived for first 20 partners · yearly plans save 10%',
      plans: [
        {
          name: 'Starter',
          price: '€99',
          priceYearly: '€89',
          priceYearlyTotal: '€1,068',
          period: '/ month',
          description: 'Web booking + AI text chat. Perfect for small restaurants.',
          features: [
            { text: 'Web booking page', note: '' },
            { text: 'AI text chat (IT + EN)', note: '' },
            {
              text: '1,000 AI-assisted bookings / month',
              note: '€19 → +1,500 bookings',
            },
            { text: 'Email confirmations', note: '' },
            { text: 'Live floor plan, timeline and calendar', note: '' },
            { text: 'Add phone, WhatsApp and walk-in bookings', note: 'Unlimited, never counted against your AI allowance.' },
            { text: 'Ask Ovio, the assistant for your dashboard', note: '10 questions a day' },
            { text: 'Email support', note: '' },
          ],
        },
        {
          name: 'Pro',
          price: '€249',
          priceYearly: '€224',
          priceYearlyTotal: '€2,688',
          period: '/ month',
          description: 'Adds AI voice and a dedicated phone line. Most popular.',
          features: [
            { text: 'Everything in Starter', note: '' },
            { text: 'AI voice + phone receptionist', note: '' },
            {
              text: 'Dedicated OvioPlus phone number',
              note: 'Keep your existing number: just forward it to your new one. No porting, guests dial what they already know.',
            },
            { text: '1,500 AI chat bookings / month', note: '' },
            { text: '200 AI voice/phone minutes / month', note: '' },
            { text: 'Priority email support', note: '' },
            {
              text: 'Buy more anytime, no upgrade needed',
              note: '€19 → +1,500 bookings or +125 min',
            },
          ],
        },
        {
          name: 'Scale',
          price: '€499',
          priceYearly: '€449',
          priceYearlyTotal: '€5,388',
          period: '/ month',
          description: 'For busy restaurants, high call volume.',
          features: [
            { text: 'Everything in Pro', note: '' },
            { text: '3,000 AI chat bookings / month', note: '' },
            { text: '500 AI voice/phone minutes / month', note: '' },
            { text: 'Floor plan drawn for you by our team', note: '' },
            { text: 'Dedicated onboarding', note: '' },
            { text: 'Priority support', note: '' },
            {
              text: 'Buy more anytime, no upgrade needed',
              note: '€19 → +1,500 bookings or +125 min',
            },
          ],
        },
      ],
    },
    testimonials: {
      eyebrow: 'Trusted by restaurants',
      title1: 'They stopped missing calls.',
      titleHighlight: 'Their tables filled up.',
    },
    faq: {
      eyebrow: 'Common questions',
      title: 'Questions,',
      titleHighlight: 'answered',
      items: [
        {
          q: 'Do I need to change my phone number?',
          a: 'No. You keep your existing number. Set up call-forwarding (always-on, after-hours, or only-on-no-answer) to our routing endpoint. Customers see no change.',
        },
        {
          q: 'What languages does the AI speak?',
          a: 'Italian and English at launch. The AI detects the caller language automatically and responds accordingly.',
        },
        {
          q: 'How do you handle data privacy and GDPR?',
          a: 'All data is hosted in the EU (Frankfurt). We sign a Data Processing Agreement with every restaurant. Customers can request data deletion at any time.',
        },
        {
          q: 'Can I try it for free?',
          a: 'Yes. Every new restaurant gets 14 days free, with no credit card: the booking page, the AI chat (up to 10 AI bookings), the web voice assistant (5 minutes) and the full dashboard. After 14 days you choose a plan to keep the AI on. Your booking page keeps taking bookings through the form either way.',
        },
        {
          q: 'Some bookings still arrive by phone, WhatsApp or at the door. Can I add them?',
          a: 'Yes, in seconds. On the Service page, tap a free table or "New booking" and note where it came from. It lands in the same calendar as the AI bookings, so the same table can never be booked twice.',
        },
        {
          q: 'Can my staff still answer the phone?',
          a: 'Yes. You decide when calls reach the AI with standard call forwarding on your line: always, only after hours, or only when nobody picks up. During service your staff can keep answering first.',
        },
        {
          q: 'Can I cancel anytime?',
          a: 'Yes. No lock-in contracts. Pay monthly or yearly and cancel from your billing page whenever you want.',
        },
        {
          q: 'How fast can I go live?',
          a: 'The same day. Sign up, draw your floor plan, set your opening hours and share your booking link. For the phone line we help you set up call forwarding.',
        },
      ],
    },
    contact: {
      eyebrow: 'Book a demo',
      title1: "Let's fill",
      titleHighlight: 'your tables.',
      subtitle:
        "30-minute call. No commitment. We'll show the AI taking a real call, walk through your floor plan, and help you decide if OvioPlus fits.",
      bullets: [
        'Live demo of voice AI on your real phone number',
        'Walk-through of the owner dashboard',
        'Custom pricing for your restaurant size',
        'No contract until you say yes',
      ],
      fieldName: 'Your name',
      fieldRestaurant: 'Restaurant name',
      fieldEmail: 'Email',
      fieldPhone: 'Phone (optional)',
      fieldMessage: 'Tell us about your restaurant',
      submit: 'Request demo',
      submitSending: 'Sending...',
      successTitle: 'Thank you!',
      successBody: "Your demo request is in. We'll be in touch within 24 hours.",
      successAgain: 'Send another',
      errorMessage: 'Something went wrong. Please email contact@ovioplus.com instead.',
      gdprNote: "We'll never share your details. GDPR-compliant.",
    },
    footer: {
      tagline:
        'An AI receptionist for restaurants. Phone, chat, and web bookings, handled 24/7.',
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      contactUs: 'Contact us',
      madeIn: 'Made with ♥ in Italy',
      privacy: 'Privacy',
      terms: 'Terms',
      gdpr: 'GDPR',
      newsletter: {
        title: 'Get restaurant AI insights, monthly.',
        subtitle: 'Product updates, restaurant case studies, and industry trends.',
        placeholder: 'Enter your email',
        cta: 'Subscribe',
        note: 'Unsubscribe anytime. We respect your inbox.',
        successTitle: 'Thanks, you\'re in!',
        successBody: 'Check your inbox for a confirmation.',
        errorMessage: 'Something went wrong. Please try again.',
      },
      productLinks: {
        features: 'Features',
        how: 'How it works',
        pricing: 'Pricing',
        faq: 'FAQ',
        demo: 'Book a demo',
      },
      companyLinks: {
        about: 'About',
        trust: 'AI Trust & Compliance',
        blog: 'Blog',
        partnerships: 'Partnerships',
        sitemap: 'Sitemap',
        contact: 'Contact',
      },
      legalLinks: {
        privacy: 'Privacy Policy',
        terms: 'Terms & Conditions',
        cookies: 'Cookie Policy',
        dpa: 'DPA (GDPR)',
        nda: 'NDA',
      },
    },
    cookies: {
      title: 'Cookies & privacy',
      body: 'We use cookies to make the site work and to understand how you use it. You can choose which ones to allow.',
      acceptAll: 'Accept all',
      rejectAll: 'Reject all',
      manage: 'Manage preferences',
      save: 'Save preferences',
      readMore: 'Cookie policy',
      close: 'Close',
      changePrefs: 'Cookie settings',
      categories: {
        necessary: {
          name: 'Strictly necessary',
          desc: 'Required for the site to function. These cookies enable core features like language preference and session security. Cannot be disabled.',
        },
        analytics: {
          name: 'Analytics',
          desc: 'Anonymous stats about how visitors use the site (page views, session length). Helps us improve the product.',
        },
        marketing: {
          name: 'Marketing',
          desc: 'Enables personalized ads and campaign measurement. Only used with your consent.',
        },
      },
    },
    pages: {
      backHome: 'Back to home',
      trust: {
        eyebrow: 'AI Trust & Compliance',
        title: 'AI built with transparency, security and responsibility.',
        subtitle:
          'Adopting AI in hospitality only works if it is built on transparency, security, privacy and responsible governance. OvioPlus brings AI Voice, AI Chat and reservation management into one platform, so restaurants can automate guest conversations while keeping control of their operations.',
        pillars: {
          heading: 'How we approach it',
          items: [
            {
              title: 'Responsible AI',
              body: 'Transparency is a design principle, not a disclaimer. Anyone speaking or writing to an OvioPlus assistant is told, at the first interaction and in their own language, that they are interacting with an AI system, and can ask to be passed to a member of staff at any point.',
            },
            {
              title: 'Privacy and data protection',
              body: 'Guest data is stored in the European Union. We publish the retention period for every category of data we hold, name every sub-processor in our DPA, and apply appropriate technical and organisational measures under the GDPR (EU) 2016/679.',
            },
            {
              title: 'European AI Act',
              body: 'We track the requirements of Regulation (EU) 2024/1689, in particular the Article 50 transparency obligations that apply to systems interacting directly with people. Our review covers AI interactions, customer disclosures, documentation and operational processes as the framework develops.',
            },
            {
              title: 'Security and continuous improvement',
              body: 'Compliance is a process, not a certificate. We keep evaluating the platform, the infrastructure and the AI workflows to find risks, strengthen safeguards and improve the reliability of the service.',
            },
          ],
        },
        specifics: {
          heading: 'What that means in practice',
          items: [
            'Guests are told they are speaking with an AI at the first interaction, on the phone and in chat, in Italian and English.',
            'Ask the assistant whether it is human and it will tell you plainly that it is not.',
            'Allergy information is health data. It is collected only if you volunteer it, used solely so the kitchen can cook safely for you, and never used for profiling or marketing.',
            'Conversation transcripts are deleted after 90 days; reservation notes after 12 months; guest records are anonymised after 24 months of inactivity.',
            'No automated decision producing legal effects is taken about a guest.',
          ],
          docsLead: 'The detail is in the documents, not just on this page:',
        },
        commitment: {
          eyebrow: 'Our commitment',
          heading: 'Transparency. Security. Privacy. Responsible AI.',
          body: 'These principles guide how OvioPlus is built. Our aim is AI that restaurants can adopt with confidence: powerful enough to automate, transparent enough to trust, and designed with responsibility at its core.',
        },
      },
      about: {
        eyebrow: 'About',
        title: 'Building the AI that fills tables.',
        subtitle: 'OvioPlus started with a simple observation: independent restaurants lose bookings every single day because no one can answer the phone. We\'re fixing that.',
        mission: {
          heading: 'Our mission',
          body: 'Give every restaurant, from a family trattoria to a busy Michelin room, a receptionist that never sleeps, never misses a call, and never forgets a regular. So owners can focus on food and hospitality, not admin.',
        },
        values: {
          heading: 'What we care about',
          items: [
            { title: 'Trust', body: 'Restaurants trust us with their guests. We treat that like a sacred duty.' },
            { title: 'Simplicity', body: 'If a 65-year-old owner can\'t use it in 60 seconds, we redesign it.' },
            { title: 'Italian roots', body: 'Built for Italian hospitality. Then the rest of the world.' },
            { title: 'Craft', body: 'AI that feels human. Software that stays out of the way.' },
          ],
        },
        vision: {
          eyebrow: 'Our vision',
          heading: 'AI, shaping the future of hospitality.',
          slogan: 'Your AI Receptionist. Always on. Always warm.',
          body: 'We believe the next decade of restaurant technology belongs to AI that feels human: reservations answered like a real maître d\', regulars remembered by name, and owners freed from admin to focus on the food. OvioPlus is our contribution to that future.',
        },
      },
      blog: {
        eyebrow: 'Blog',
        title: 'Restaurant AI, unpacked.',
        subtitle: 'Product updates, restaurant case studies, and industry trends. Written for people who run restaurants.',
        emptyTitle: 'First post coming soon.',
        emptyBody: 'We\'re working on our first articles. Subscribe below to get them the moment they go live.',
      },
      sitemap: {
        eyebrow: 'Sitemap',
        title: 'Everything on ovioplus.ai',
        subtitle: 'A quick map of every page on the site. Handy for finding what you need, or seeing what we\'ve built.',
        sections: {
          main: 'Main',
          company: 'Company',
          legal: 'Legal',
        },
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Let\'s talk.',
        subtitle: 'Book a demo, ask a question, or just say hi. We reply within 24 hours on business days.',
        methods: {
          demo: { title: 'Book a demo', body: '30 minutes. See the AI take a real call. No commitment.', cta: 'Book now →' },
          email: { title: 'Email us', body: 'General questions or partnership ideas.', cta: 'Write to us →' },
          call: { title: 'Call us', body: 'Prefer to hear a voice? We do too.', cta: 'Call now →' },
        },
      },
      partnerships: {
        eyebrow: 'Partnerships',
        title: 'Together, we are building the future of the restaurant industry.',
        subtitle: 'At OvioPlus, we believe that innovation stems from collaboration. That is why we work alongside software developers, consulting firms, technology companies, hospitality suppliers, and professionals who share our vision: making restaurant management smarter, more efficient, and more connected.',
        introHeading: 'Partnerships that create mutual value',
        introBody: 'Our partnerships are designed to create mutual value by offering innovative solutions that enhance the experience for both restaurateurs and their customers. We are looking for partners who want to grow with us.',
        whoHeading: 'Who we partner with',
        whoIntro: 'We build lasting relationships with companies and professionals across the restaurant ecosystem:',
        whoItems: [
          { title: 'Restaurant management software', body: 'Bring AI voice, chat, and web booking into your existing platform.' },
          { title: 'POS and checkout systems', body: 'Sync reservations and covers directly with the point of sale.' },
          { title: 'Reservation platforms', body: 'Extend your channels with a 24/7 AI receptionist layer.' },
          { title: 'Consulting and digitalization firms', body: 'Give your clients an AI-first path to more filled tables.' },
          { title: 'Technology integrators', body: 'Ship OvioPlus as part of larger hospitality tech stacks.' },
          { title: 'Hospitality agencies and consultants', body: 'Bundle our AI receptionist into your service offering.' },
        ],
        whyHeading: 'Why partner with OvioPlus?',
        whyItems: [
          'Expand your offering with Artificial Intelligence solutions.',
          'Deliver greater value to your customers.',
          'Access new business opportunities.',
          'Build innovative solutions for the European market together.',
        ],
        principlesHeading: 'Trust, transparency, and shared vision',
        principlesBody: 'We believe in partnerships based on trust, transparency, and a shared vision of innovation. OvioPlus is not looking for simple collaborations. We build lasting relationships.',
        origin: 'Built in Italy. Designed for Europe.',
        ctaHeading: 'Let\'s build something together.',
        ctaBody: 'Tell us about your company and the customers you serve. We will get back to you within 48 hours.',
        ctaEmail: 'Email the partnerships team',
        ctaContact: 'Send a message',
      },
    },
  },

  it: {
    nav: {
      features: 'Funzionalità',
      how: 'Come funziona',
      pricing: 'Prezzi',
      faq: 'Domande',
      platform: 'Piattaforma',
      signIn: 'Accedi',
      bookDemo: 'Prenota una demo',
    },
    hero: {
      badge: 'Receptionist AI per Ristoranti',
      title1: 'Non perdere',
      title2: 'mai più una',
      titleHighlight: 'prenotazione',
      titlePeriod: '.',
      subtitle:
        'OvioPlus risponde a ogni telefonata, chat e prenotazione web, 24 ore su 24, e dà al tuo staff un solo schermo per tutto il servizio: la sala in tempo reale e ogni prenotazione, da ogni canale.',
      cta1: 'Provalo gratis per 14 giorni',
      cta2: 'Prenota una demo',
      trialNote: 'Nessuna carta di credito richiesta.',
      stat1Label: 'In diretta',
      stat1Calls: 'chiamate',
      stat2Label: 'Stasera',
      stat2Covers: 'coperti',
      stat2Confirmed: 'Confermati',
      stat2Pending: 'In attesa',
      stat2Voice: 'Voice AI',
      stat3Label: 'Sala principale',
      stat3Free: 'liberi',
      stat3Occupied: 'occupati',
    },
    channels: {
      eyebrow: 'Tre canali, un cervello unico',
      title1: "Ovunque ti contatti il cliente,",
      titleHighlight: 'noi rispondiamo.',
      subtitle:
        "Stesso calendario. Stessi dati. Stesso cervello. Che chiamino, scrivano o clicchino, la risposta è sempre immediata e precisa.",
      cards: [
        {
          eyebrow: 'Web',
          title: 'Prenotazione visiva',
          description:
            "Il cliente vede la pianta del tuo locale e sceglie il tavolo esatto, come scegliere il posto sull'aereo, ma per cena.",
        },
        {
          eyebrow: 'Embed',
          title: 'Chat AI',
          description:
            "Un widget sul tuo sito. Il cliente scrive 'un tavolo per 4 domani alle 20': l'AI fa il resto, in italiano o inglese.",
        },
        {
          eyebrow: 'Telefono',
          title: 'Voice AI',
          description:
            "Mantieni il numero attuale. Inoltra le chiamate alla nostra AI. Risponde con voce naturale, prenota e conferma.",
        },
      ],
    },
    how: {
      eyebrow: 'Come funziona',
      title1: 'Dal saluto al tavolo confermato',
      titleHighlight: 'in 90 secondi.',
      footer: 'Tu non fai nulla. L\'AI fa tutto. I tuoi tavoli si riempiono.',
      steps: [
        { title: 'Il cliente contatta', body: 'Telefono, chat o modulo web.' },
        { title: "L'AI raccoglie i dati", body: 'Data, ora, ospiti, nome, email, telefono.' },
        { title: 'Disponibilità verificata', body: 'Inventario tavoli in tempo reale: niente overbooking.' },
        { title: 'Prenotazione creata', body: 'Salvata istantaneamente nel tuo gestionale.' },
        { title: 'Conferma inviata', body: 'Cliente e titolare notificati via email.' },
      ],
    },

    problem: {
      eyebrow: 'Il problema',
      title1: 'Il telefono squilla.',
      titleHighlight: 'Proprio in pieno servizio.',
      subtitle: 'Ogni ristorante conosce questi tre momenti. Costano tavoli ogni settimana.',
      cards: [
        {
          title: 'Chiamate perse alle 20:30',
          body: 'Durante il servizio nessuno può rispondere. Ogni chiamata persa è un tavolo che va al ristorante accanto.',
        },
        {
          title: 'Prenotazioni sparse ovunque',
          body: 'Telefono, WhatsApp, Instagram, il quaderno. Basta una svista e lo stesso tavolo viene promesso due volte.',
        },
        {
          title: 'Nessuna visione della serata',
          body: 'Chi arriva e quando, a quale tavolo, con quale allergia? Senza un unico schermo, la sala si gestisce a memoria.',
        },
      ],
    },
    video: {
      eyebrow: 'In 40 secondi',
      title1: 'Un sabato sera,',
      titleHighlight: 'prima e dopo OvioPlus.',
      soundOn: 'Attiva l’audio',
      soundOff: 'Disattiva l’audio',
      ariaLabel: 'Video OvioPlus: un sabato sera pieno, chiamate perse, poi l’AI che risponde e la sala in tempo reale.',
    },
    platform: {
      eyebrow: 'La piattaforma in azione',
      title1: 'Un solo schermo per tutto il servizio.',
      titleHighlight: 'Dalla prima chiamata all’ultimo tavolo.',
      subtitle:
        'L’AI risponde agli ospiti. Il tuo staff ha la sala in tempo reale, ogni prenotazione da ogni canale e un assistente che risponde alle domande sulla serata.',
      items: [
        {
          eyebrow: 'Servizio',
          title: 'La tua sala, in tempo reale',
          body: 'La piantina a qualsiasi ora della serata: chi è al tavolo, chi arriva nella prossima ora, quali tavoli sono liberi. Tocca un tavolo libero per far sedere chi arriva senza prenotazione.',
          bullets: ['Mappa e timeline di tutta la giornata', 'Scorri la serata minuto per minuto', 'Mappa centrata sulla tua sala, a tutto schermo quando serve'],
        },
        {
          eyebrow: 'Ogni canale',
          title: 'Telefono, WhatsApp, di persona: un solo calendario',
          body: 'Le prenotazioni che non passano dall’AI si inseriscono in pochi secondi e finiscono nello stesso calendario. Sposta un ospite su un altro tavolo o modifica qualsiasi dettaglio senza ricominciare.',
          bullets: ['Cambia tavolo con un tocco', 'Modifica data, ora, ospiti e note', 'Mai doppie prenotazioni: un calendario per tutti'],
        },
        {
          eyebrow: 'Calendario',
          title: 'Vai a qualsiasi data',
          body: 'Apri il calendario e vedi quanti coperti ha già ogni giorno, prima ancora di aprirlo. I sabati pieni si notano con settimane di anticipo.',
          bullets: ['Coperti per giorno a colpo d’occhio', 'Giorni di chiusura evidenziati', 'Cerca un ospite per nome o telefono, in qualsiasi data'],
        },
        {
          eyebrow: 'Chiedi a Ovio',
          title: 'Un assistente per te, non solo per gli ospiti',
          body: '“Chi arriva stasera?” “Ci sono allergie oggi?” “Sposta Rossi alle 21.” Chiedi a parole. Ovio risponde dalle tue prenotazioni reali e non cambia nulla finché non confermi.',
          bullets: ['Risponde dai tuoi dati', 'Propone le modifiche, tu confermi', 'Annulli con un tocco'],
        },
        {
          eyebrow: 'Pagina di prenotazione',
          title: 'Una pagina di prenotazione con il tuo stile',
          body: 'I tuoi colori, i tuoi caratteri, la tua piantina. Gli ospiti scelgono il tavolo o chattano con l’AI, in italiano o in inglese, e ricevono subito la conferma via email.',
          bullets: ['Prima il modulo o prima la chat AI: scegli tu', 'Gli ospiti scelgono il tavolo esatto', 'Conferma immediata via email'],
        },
      ],
    },
    advantages: {
      eyebrow: 'Perché OvioPlus',
      title1: 'Nato per la ristorazione.',
      titleHighlight: 'Non adattato.',
      items: [
        { title: 'Pensato per i ristoranti italiani', body: 'Prima l’italiano, l’inglese quando serve agli ospiti. Progettato con i ristoratori, così lo staff lo usa dalla prima sera.' },
        { title: 'Un calendario, zero doppie prenotazioni', body: 'Prenotazioni da AI, web e staff condividono gli stessi tavoli e le stesse regole. Il sistema rifiuta un tavolo già occupato.' },
        { title: 'Mantieni il tuo numero', body: 'Inoltra le chiamate quando vuoi: sempre, fuori orario o solo quando nessuno risponde. Gli ospiti chiamano il numero che già conoscono.' },
        { title: 'Dati in Europa, AI trasparente', body: 'GDPR fin dalla progettazione. Gli ospiti sanno di parlare con un’AI, come richiede l’AI Act europeo.' },
        { title: 'Operativo in giornata', body: 'Disegna la piantina, imposta gli orari, condividi il link. Provalo gratis per 14 giorni, senza carta.' },
      ],
    },
    clients: { eyebrow: 'Scelto dai ristoranti di tutta Italia' },
    pricing: {
      eyebrow: 'Prezzi',
      title1: 'Piani semplici.',
      titleHighlight: 'Nessuna sorpresa.',
      subtitle: 'Scegli il piano che ti serve oggi. Cambialo quando vuoi. Disdici in qualsiasi momento.',
      mostPopular: 'Più Scelto',
      cta: 'Inizia ora',
      monthly: 'Mensile',
      yearly: 'Annuale',
      yearlyDiscountPercent: '10',
      perMonth: '/ mese',
      billedAnnually: 'fatturato {{total}} / anno',
      trialLine: 'Vuoi provarlo prima? 14 giorni gratis: pagina di prenotazione, chat AI e tutta la dashboard. Senza carta.',
      trialCta: 'Inizia la prova gratuita',
      footer: 'Setup €149 una tantum · gratuito per i primi 20 partner · i piani annuali risparmiano il 10%',
      plans: [
        {
          name: 'Starter',
          price: '€99',
          priceYearly: '€89',
          priceYearlyTotal: '€1.068',
          period: '/ mese',
          description: 'Prenotazione web + chat AI. Perfetto per piccoli ristoranti.',
          features: [
            { text: 'Pagina di prenotazione web', note: '' },
            { text: 'Chat AI (IT + EN)', note: '' },
            {
              text: '1.000 prenotazioni assistite da AI / mese',
              note: '€19 → +1.500 prenotazioni',
            },
            { text: 'Conferme via email', note: '' },
            { text: 'Sala in tempo reale, timeline e calendario', note: '' },
            { text: 'Inserisci prenotazioni da telefono, WhatsApp e di persona', note: 'Illimitate, non consumano il budget AI.' },
            { text: 'Chiedi a Ovio, l’assistente della tua dashboard', note: '10 domande al giorno' },
            { text: 'Supporto via email', note: '' },
          ],
        },
        {
          name: 'Pro',
          price: '€249',
          priceYearly: '€224',
          priceYearlyTotal: '€2.688',
          period: '/ mese',
          description: 'Aggiunge voce AI e un numero dedicato. Il più scelto.',
          features: [
            { text: 'Tutto di Starter', note: '' },
            { text: 'Receptionist AI vocale + telefonico', note: '' },
            {
              text: 'Numero di telefono OvioPlus dedicato',
              note: 'Mantieni il tuo numero: basta deviarlo verso il nuovo. Nessuna portabilità, i clienti chiamano il numero che già conoscono.',
            },
            { text: '1.500 prenotazioni chat AI / mese', note: '' },
            { text: '200 minuti voce/telefono AI / mese', note: '' },
            { text: 'Supporto prioritario', note: '' },
            {
              text: 'Acquista extra in ogni momento, nessun upgrade richiesto',
              note: '€19 → +1.500 prenotazioni o +125 min',
            },
          ],
        },
        {
          name: 'Scale',
          price: '€499',
          priceYearly: '€449',
          priceYearlyTotal: '€5.388',
          period: '/ mese',
          description: 'Per ristoranti con alto volume di chiamate.',
          features: [
            { text: 'Tutto di Pro', note: '' },
            { text: '3.000 prenotazioni chat AI / mese', note: '' },
            { text: '500 minuti voce/telefono AI / mese', note: '' },
            { text: 'Piantina disegnata per te dal nostro team', note: '' },
            { text: 'Onboarding dedicato', note: '' },
            { text: 'Supporto prioritario', note: '' },
            {
              text: 'Acquista extra in ogni momento, nessun upgrade richiesto',
              note: '€19 → +1.500 prenotazioni o +125 min',
            },
          ],
        },
      ],
    },
    testimonials: {
      eyebrow: 'Scelto dai ristoratori',
      title1: 'Hanno smesso di perdere chiamate.',
      titleHighlight: 'I tavoli si sono riempiti.',
    },
    faq: {
      eyebrow: 'Domande frequenti',
      title: 'Domande,',
      titleHighlight: 'risposte',
      items: [
        {
          q: 'Devo cambiare il numero di telefono?',
          a: 'No. Mantieni il numero attuale. Configuri l\'inoltro chiamate (sempre attivo, fuori orario, o solo se non rispondi) verso il nostro endpoint. Il cliente non si accorge di nulla.',
        },
        {
          q: 'Quali lingue parla l\'AI?',
          a: 'Italiano e inglese al lancio. L\'AI rileva automaticamente la lingua del chiamante e risponde di conseguenza.',
        },
        {
          q: 'Come gestite la privacy e il GDPR?',
          a: 'Tutti i dati sono ospitati in UE (Francoforte). Firmiamo un DPA con ogni ristorante. I clienti possono richiedere la cancellazione dei dati in qualsiasi momento.',
        },
        {
          q: 'Posso provarlo gratis?',
          a: 'Sì. Ogni nuovo ristorante ha 14 giorni gratis, senza carta di credito: pagina di prenotazione, chat AI (fino a 10 prenotazioni AI), assistente vocale sul web (5 minuti) e tutta la dashboard. Dopo 14 giorni scegli un piano per tenere attiva l’AI. La pagina di prenotazione continua comunque a ricevere prenotazioni dal modulo.',
        },
        {
          q: 'Alcune prenotazioni arrivano ancora per telefono, WhatsApp o di persona. Posso inserirle?',
          a: 'Sì, in pochi secondi. Nella pagina Servizio tocca un tavolo libero o “Nuova prenotazione” e indica da dove è arrivata. Finisce nello stesso calendario delle prenotazioni AI, quindi lo stesso tavolo non può mai essere prenotato due volte.',
        },
        {
          q: 'Il mio staff può continuare a rispondere al telefono?',
          a: 'Sì. Decidi tu quando le chiamate arrivano all’AI con il normale inoltro di chiamata sulla tua linea: sempre, solo fuori orario o solo quando nessuno risponde. Durante il servizio lo staff può continuare a rispondere per primo.',
        },
        {
          q: 'Posso disdire in qualsiasi momento?',
          a: 'Sì. Nessun vincolo contrattuale. Paghi mensilmente o annualmente e disdici dalla pagina di fatturazione quando vuoi.',
        },
        {
          q: 'Quanto ci vuole per partire?',
          a: 'Si parte in giornata. Ti registri, disegni la piantina, imposti gli orari e condividi il link di prenotazione. Per la linea telefonica ti aiutiamo a configurare l’inoltro di chiamata.',
        },
      ],
    },
    contact: {
      eyebrow: 'Prenota una demo',
      title1: 'Riempiamo',
      titleHighlight: 'i tuoi tavoli.',
      subtitle:
        'Chiamata di 30 minuti. Nessun impegno. Ti mostriamo l\'AI gestire una chiamata reale, esploriamo la tua piantina e decidi se OvioPlus fa per te.',
      bullets: [
        'Demo live della voce AI sul tuo numero reale',
        'Tour del pannello di gestione',
        'Prezzo personalizzato per la tua dimensione',
        'Nessun contratto finché non dici sì',
      ],
      fieldName: 'Il tuo nome',
      fieldRestaurant: 'Nome del ristorante',
      fieldEmail: 'Email',
      fieldPhone: 'Telefono (facoltativo)',
      fieldMessage: 'Raccontaci del tuo ristorante',
      submit: 'Richiedi demo',
      submitSending: 'Invio...',
      successTitle: 'Grazie!',
      successBody: 'La richiesta è arrivata. Ti contattiamo entro 24 ore.',
      successAgain: 'Invia un\'altra',
      errorMessage: 'Qualcosa è andato storto. Scrivici a contact@ovioplus.com.',
      gdprNote: 'I tuoi dati restano riservati. Conforme al GDPR.',
    },
    footer: {
      tagline:
        'Un receptionist AI per ristoranti. Telefono, chat e prenotazioni web, gestiti 24/7.',
      product: 'Prodotto',
      company: 'Azienda',
      legal: 'Legale',
      contactUs: 'Contattaci',
      madeIn: 'Fatto con ♥ in Italia',
      privacy: 'Privacy',
      terms: 'Termini',
      gdpr: 'GDPR',
      newsletter: {
        title: 'Notizie sull\'AI per ristoranti, ogni mese.',
        subtitle: 'Aggiornamenti prodotto, casi studio e tendenze del settore.',
        placeholder: 'La tua email',
        cta: 'Iscriviti',
        note: 'Disiscriviti quando vuoi. Rispettiamo la tua casella.',
        successTitle: 'Grazie, sei dentro!',
        successBody: 'Controlla la tua email per la conferma.',
        errorMessage: 'Qualcosa è andato storto. Riprova.',
      },
      productLinks: {
        features: 'Funzionalità',
        how: 'Come funziona',
        pricing: 'Prezzi',
        faq: 'FAQ',
        demo: 'Prenota una demo',
      },
      companyLinks: {
        about: 'Chi siamo',
        trust: 'AI, fiducia e conformità',
        blog: 'Blog',
        partnerships: 'Partnership',
        sitemap: 'Mappa del sito',
        contact: 'Contatti',
      },
      legalLinks: {
        privacy: 'Informativa Privacy',
        terms: 'Termini e Condizioni',
        cookies: 'Cookie Policy',
        dpa: 'DPA (GDPR)',
        nda: 'NDA',
      },
    },
    cookies: {
      title: 'Cookie e privacy',
      body: 'Usiamo i cookie per far funzionare il sito e capire come lo usi. Puoi scegliere quali autorizzare.',
      acceptAll: 'Accetta tutti',
      rejectAll: 'Rifiuta tutti',
      manage: 'Gestisci preferenze',
      save: 'Salva preferenze',
      readMore: 'Cookie policy',
      close: 'Chiudi',
      changePrefs: 'Impostazioni cookie',
      categories: {
        necessary: {
          name: 'Strettamente necessari',
          desc: 'Necessari per il funzionamento del sito. Abilitano funzioni base come la preferenza di lingua e la sicurezza della sessione. Non disattivabili.',
        },
        analytics: {
          name: 'Analytics',
          desc: 'Statistiche anonime su come i visitatori usano il sito (pagine viste, durata della visita). Ci aiuta a migliorare il prodotto.',
        },
        marketing: {
          name: 'Marketing',
          desc: 'Abilita annunci personalizzati e misurazione delle campagne. Usati solo con il tuo consenso.',
        },
      },
    },
    pages: {
      backHome: 'Torna alla home',
      trust: {
        eyebrow: 'AI, fiducia e conformità',
        title: 'Un\'AI costruita su trasparenza, sicurezza e responsabilità.',
        subtitle:
          'L\'adozione dell\'intelligenza artificiale nella ristorazione funziona solo se poggia su trasparenza, sicurezza, privacy e una governance responsabile. OvioPlus riunisce AI Voice, AI Chat e gestione delle prenotazioni in un\'unica piattaforma, così i ristoranti automatizzano le conversazioni con i clienti mantenendo il controllo del proprio servizio.',
        pillars: {
          heading: 'Il nostro approccio',
          items: [
            {
              title: 'AI responsabile',
              body: 'La trasparenza è un principio di progettazione, non una nota a piè di pagina. Chi parla o scrive a un assistente OvioPlus viene informato, fin dalla prima interazione e nella propria lingua, che sta interagendo con un sistema di intelligenza artificiale, e può chiedere in qualsiasi momento di essere messo in contatto con una persona.',
            },
            {
              title: 'Privacy e protezione dei dati',
              body: 'I dati dei clienti sono archiviati nell\'Unione Europea. Pubblichiamo i tempi di conservazione per ogni categoria di dati, indichiamo nel nostro DPA tutti i sub-responsabili del trattamento e adottiamo misure tecniche e organizzative adeguate ai sensi del GDPR (UE) 2016/679.',
            },
            {
              title: 'AI Act europeo',
              body: 'Seguiamo i requisiti del Regolamento (UE) 2024/1689, in particolare gli obblighi di trasparenza dell\'art. 50 applicabili ai sistemi che interagiscono direttamente con le persone. La nostra revisione riguarda le interazioni AI, le informative ai clienti, la documentazione e i processi operativi, con l\'evolversi del quadro normativo.',
            },
            {
              title: 'Sicurezza e miglioramento continuo',
              body: 'La conformità è un processo, non un certificato. Continuiamo a valutare piattaforma, infrastruttura e flussi AI per individuare rischi, rafforzare le tutele e migliorare l\'affidabilità del servizio.',
            },
          ],
        },
        specifics: {
          heading: 'Cosa significa in concreto',
          items: [
            'Il cliente viene informato di parlare con un\'AI fin dalla prima interazione, al telefono e in chat, in italiano e in inglese.',
            'Se chiede all\'assistente se sia una persona, riceve una risposta chiara: non lo è.',
            'Le informazioni sulle allergie sono dati sanitari. Vengono raccolte solo se è il cliente a fornirle, usate unicamente per permettere alla cucina di preparare il pasto in sicurezza, mai per profilazione o marketing.',
            'Le trascrizioni delle conversazioni sono cancellate dopo 90 giorni, le note di prenotazione dopo 12 mesi, i dati identificativi resi anonimi dopo 24 mesi di inattività.',
            'Non viene adottata alcuna decisione automatizzata che produca effetti giuridici sul cliente.',
          ],
          docsLead: 'Il dettaglio è nei documenti, non solo in questa pagina:',
        },
        commitment: {
          eyebrow: 'Il nostro impegno',
          heading: 'Trasparenza. Sicurezza. Privacy. AI responsabile.',
          body: 'Questi principi guidano lo sviluppo di OvioPlus. L\'obiettivo è un\'AI che i ristoranti possano adottare con fiducia: abbastanza potente da automatizzare, abbastanza trasparente da meritare fiducia, e progettata con la responsabilità al centro.',
        },
      },
      about: {
        eyebrow: 'Chi siamo',
        title: 'Costruiamo l\'AI che riempie i tavoli.',
        subtitle: 'OvioPlus nasce da un\'osservazione semplice: i ristoranti indipendenti perdono prenotazioni ogni giorno perché nessuno può rispondere al telefono. Lo risolviamo noi.',
        mission: {
          heading: 'La nostra missione',
          body: 'Dare a ogni ristorante, dalla trattoria di famiglia alla sala stellata, un receptionist che non dorme mai, non perde una chiamata e non dimentica un cliente. Così i titolari si concentrano su cibo e ospitalità, non sull\'amministrazione.',
        },
        values: {
          heading: 'A cosa teniamo',
          items: [
            { title: 'Fiducia', body: 'I ristoranti ci affidano i loro ospiti. Lo trattiamo come un dovere sacro.' },
            { title: 'Semplicità', body: 'Se un titolare di 65 anni non lo usa in 60 secondi, lo riprogettiamo.' },
            { title: 'Radici italiane', body: 'Costruito per l\'ospitalità italiana. Poi il resto del mondo.' },
            { title: 'Artigianalità', body: 'AI che sembra umana. Software che si fa da parte.' },
          ],
        },
        vision: {
          eyebrow: 'La nostra visione',
          heading: 'L\'AI che ridisegna l\'ospitalità.',
          slogan: 'Il tuo receptionist AI. Sempre attivo. Sempre umano.',
          body: 'Crediamo che il prossimo decennio della tecnologia per ristoranti appartenga a un\'AI che sembra umana: prenotazioni gestite come un vero maître, clienti abituali riconosciuti per nome, e titolari liberati dall\'amministrazione per concentrarsi sul cibo. OvioPlus è il nostro contributo a questo futuro.',
        },
      },
      blog: {
        eyebrow: 'Blog',
        title: 'AI per ristoranti, spiegata.',
        subtitle: 'Aggiornamenti prodotto, casi studio e tendenze del settore. Scritto per chi gestisce ristoranti.',
        emptyTitle: 'Primo articolo in arrivo.',
        emptyBody: 'Stiamo lavorando ai primi articoli. Iscriviti sotto per riceverli appena escono.',
      },
      sitemap: {
        eyebrow: 'Mappa del sito',
        title: 'Tutto su ovioplus.ai',
        subtitle: 'Una mappa rapida di ogni pagina del sito. Utile per trovare quello che ti serve, o vedere cosa abbiamo costruito.',
        sections: {
          main: 'Principale',
          company: 'Azienda',
          legal: 'Legale',
        },
      },
      contact: {
        eyebrow: 'Contatti',
        title: 'Parliamone.',
        subtitle: 'Prenota una demo, fai una domanda, o semplicemente saluta. Rispondiamo entro 24 ore nei giorni lavorativi.',
        methods: {
          demo: { title: 'Prenota una demo', body: '30 minuti. Vedi l\'AI gestire una vera chiamata. Nessun impegno.', cta: 'Prenota ora →' },
          email: { title: 'Scrivici', body: 'Domande generali o idee di partnership.', cta: 'Scrivi ora →' },
          call: { title: 'Chiamaci', body: 'Preferisci sentire una voce? Anche noi.', cta: 'Chiama ora →' },
        },
      },
      partnerships: {
        eyebrow: 'Partnership',
        title: 'Insieme stiamo costruendo il futuro della ristorazione.',
        subtitle: 'In OvioPlus crediamo che l\'innovazione nasca dalla collaborazione. Per questo lavoriamo al fianco di sviluppatori software, società di consulenza, aziende tecnologiche, fornitori del settore ospitalità e professionisti che condividono la nostra visione: rendere la gestione del ristorante più intelligente, efficiente e connessa.',
        introHeading: 'Partnership che creano valore reciproco',
        introBody: 'Le nostre partnership sono pensate per creare valore reciproco, offrendo soluzioni innovative che migliorano l\'esperienza sia dei ristoratori sia dei loro clienti. Cerchiamo partner che vogliano crescere con noi.',
        whoHeading: 'Con chi collaboriamo',
        whoIntro: 'Costruiamo relazioni durature con aziende e professionisti di tutto l\'ecosistema della ristorazione:',
        whoItems: [
          { title: 'Software di gestione ristoranti', body: 'Porta AI voce, chat e prenotazione web nella tua piattaforma.' },
          { title: 'Sistemi POS e casse', body: 'Sincronizza prenotazioni e coperti direttamente con la cassa.' },
          { title: 'Piattaforme di prenotazione', body: 'Estendi i tuoi canali con un receptionist AI 24/7.' },
          { title: 'Società di consulenza e digitalizzazione', body: 'Offri ai tuoi clienti una via AI-first per riempire i tavoli.' },
          { title: 'Integratori tecnologici', body: 'Distribuisci OvioPlus come parte di stack tecnologici più ampi.' },
          { title: 'Agenzie e consulenti dell\'ospitalità', body: 'Includi il nostro receptionist AI nella tua offerta di servizi.' },
        ],
        whyHeading: 'Perché diventare partner di OvioPlus?',
        whyItems: [
          'Espandi la tua offerta con soluzioni di Intelligenza Artificiale.',
          'Offri maggiore valore ai tuoi clienti.',
          'Accedi a nuove opportunità di business.',
          'Costruisci insieme soluzioni innovative per il mercato europeo.',
        ],
        principlesHeading: 'Fiducia, trasparenza e visione condivisa',
        principlesBody: 'Crediamo in partnership fondate su fiducia, trasparenza e una visione condivisa dell\'innovazione. OvioPlus non cerca semplici collaborazioni. Costruiamo relazioni durature.',
        origin: 'Nato in Italia. Progettato per l\'Europa.',
        ctaHeading: 'Costruiamo qualcosa insieme.',
        ctaBody: 'Raccontaci della tua azienda e dei clienti che servi. Ti rispondiamo entro 48 ore.',
        ctaEmail: 'Scrivi al team partnership',
        ctaContact: 'Invia un messaggio',
      },
    },
  },
} as const;

// Widen literal types from `as const` so both EN and IT satisfy the same shape.
// (Without this, "Features" and "Funzionalità" would be incompatible literal types.)
type DeepWiden<T> =
  T extends string ? string
  : T extends number ? number
  : T extends boolean ? boolean
  : T extends readonly (infer U)[] ? readonly DeepWiden<U>[]
  : T extends object ? { readonly [K in keyof T]: DeepWiden<T[K]> }
  : T;

export type Translations = DeepWiden<(typeof translations)['en']>;
