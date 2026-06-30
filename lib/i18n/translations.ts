export type Lang = 'en' | 'it';

export const translations = {
  en: {
    nav: {
      features: 'Features',
      how: 'How it works',
      pricing: 'Pricing',
      faq: 'FAQ',
      bookDemo: 'Book a demo',
    },
    hero: {
      badge: 'AI Receptionist for Restaurants',
      title1: 'Never miss',
      title2: 'another',
      titleHighlight: 'booking',
      titlePeriod: '.',
      subtitle:
        'OvioPlus answers every phone call, chat, and web booking — 24 hours a day. Built for restaurants that want every table filled and every guest remembered.',
      cta1: 'Book a 30-min demo',
      cta2: 'See how it works',
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
        'Same calendar. Same data. Same brain. Whether they call, chat, or click — they always get the same instant, accurate response.',
      cards: [
        {
          eyebrow: 'Web',
          title: 'Visual booking',
          description:
            'Customers see your actual floor plan and pick their exact table — like choosing a seat on a flight, but for dinner.',
        },
        {
          eyebrow: 'Embed',
          title: 'AI chat',
          description:
            "Drop a widget on your site. Customers type 'a table for 4 tomorrow at 8' — the AI handles the rest, in Italian or English.",
        },
        {
          eyebrow: 'Phone',
          title: 'AI voice',
          description:
            'Keep your existing number. Forward calls to our AI — it answers in a natural voice, books the table, sends confirmation.',
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
        { title: 'Availability checked', body: 'Live table inventory — never overbooks.' },
        { title: 'Reservation created', body: 'Saved in your dashboard instantly.' },
        { title: 'Confirmation sent', body: 'Customer + owner notified by email.' },
      ],
    },
    dashboard: {
      eyebrow: 'Owner dashboard',
      title1: 'Total control.',
      titleHighlight: 'Zero learning curve.',
      subtitle:
        'Every booking, table, and customer in one calm interface. Built so your staff can use it in 60 seconds, not 60 minutes.',
      features: [
        { title: 'Live calendar', body: 'Day, week, month — click any date to see who is coming.' },
        { title: 'Table management', body: 'Add, edit, mark occupied. AI respects your seating plan.' },
        { title: 'Operating hours', body: 'Per-day open / close. Holidays and special closures.' },
        { title: 'Auto-confirm rules', body: 'Approve manually or set rules — AI handles the routine.' },
        { title: 'Reservation history', body: 'Search by name, phone, date. Recognize your regulars.' },
        { title: 'Daily summary email', body: "Every morning: today's load, tomorrow's preview." },
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
      footer: 'Setup fee €149 one-time · waived for first 20 partners · all plans on a monthly contract',
      plans: [
        {
          name: 'Starter',
          price: '€99',
          period: '/ month',
          description: 'Web booking + AI text chat. Perfect for small restaurants.',
          features: [
            'Web booking page',
            'AI text chat (IT + EN)',
            'Email confirmations',
            'Admin dashboard',
            'Calendar view',
            'Unlimited reservations',
            'Email support',
          ],
        },
        {
          name: 'Pro',
          price: '€249',
          period: '/ month',
          description: 'Adds the AI voice receptionist. Most popular.',
          features: [
            'Everything in Starter',
            'AI voice receptionist',
            'Works with your existing number',
            '300 voice minutes included',
            'Operating hours management',
            'Priority email support',
            'Overage: €0.40 / extra minute',
          ],
        },
        {
          name: 'Scale',
          price: '€499',
          period: '/ month',
          description: 'For busy restaurants — high call volume.',
          features: [
            'Everything in Pro',
            '1,500 voice minutes included',
            'Multi-channel routing rules',
            'Custom IVR menu',
            'Advanced analytics',
            'Dedicated onboarding',
            'Overage: €0.35 / extra minute',
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
          q: 'What happens if the AI cannot handle a call?',
          a: 'Our IVR menu has an option to reach a human (your staff). Calls can also fall back to your existing phone after a customizable timeout.',
        },
        {
          q: 'Can I cancel anytime?',
          a: 'Yes. No lock-in contracts. Monthly billing. Export all your data with one click.',
        },
        {
          q: 'How fast can I go live?',
          a: 'Typical onboarding is 5 days. Day 1 discovery, Day 2 setup, Day 3 AI training, Day 4 pilot test, Day 5 go live.',
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
      errorMessage: 'Something went wrong. Please email hello@ovioplus.com instead.',
      gdprNote: "We'll never share your details. GDPR-compliant.",
    },
    footer: {
      tagline:
        'An AI receptionist for restaurants. Phone, chat, and web bookings — handled 24/7.',
      product: 'Product',
      company: 'Company',
      madeIn: 'Made with ♥ in Italy',
      privacy: 'Privacy',
      terms: 'Terms',
      gdpr: 'GDPR',
    },
  },

  it: {
    nav: {
      features: 'Funzionalità',
      how: 'Come funziona',
      pricing: 'Prezzi',
      faq: 'Domande',
      bookDemo: 'Prenota una demo',
    },
    hero: {
      badge: 'Receptionist AI per Ristoranti',
      title1: 'Non perdere',
      title2: 'mai più una',
      titleHighlight: 'prenotazione',
      titlePeriod: '.',
      subtitle:
        'OvioPlus risponde a ogni telefonata, chat e prenotazione web — 24 ore su 24. Pensato per i ristoranti che vogliono ogni tavolo pieno e ogni ospite ricordato.',
      cta1: 'Prenota una demo di 30 min',
      cta2: 'Scopri come funziona',
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
        "Stesso calendario. Stessi dati. Stesso cervello. Che chiamino, scrivano o clicchino — la risposta è sempre immediata e precisa.",
      cards: [
        {
          eyebrow: 'Web',
          title: 'Prenotazione visiva',
          description:
            "Il cliente vede la pianta del tuo locale e sceglie il tavolo esatto — come scegliere il posto sull'aereo, ma per cena.",
        },
        {
          eyebrow: 'Embed',
          title: 'Chat AI',
          description:
            "Un widget sul tuo sito. Il cliente scrive 'un tavolo per 4 domani alle 20' — l'AI fa il resto, in italiano o inglese.",
        },
        {
          eyebrow: 'Telefono',
          title: 'Voice AI',
          description:
            "Mantieni il numero attuale. Inoltra le chiamate alla nostra AI — risponde con voce naturale, prenota e conferma.",
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
        { title: 'Disponibilità verificata', body: 'Inventario tavoli in tempo reale — niente overbooking.' },
        { title: 'Prenotazione creata', body: 'Salvata istantaneamente nel tuo gestionale.' },
        { title: 'Conferma inviata', body: 'Cliente e titolare notificati via email.' },
      ],
    },
    dashboard: {
      eyebrow: 'Pannello del titolare',
      title1: 'Controllo totale.',
      titleHighlight: 'Zero curva di apprendimento.',
      subtitle:
        'Ogni prenotazione, tavolo e cliente in un\'unica interfaccia. Lo staff lo usa in 60 secondi, non 60 minuti.',
      features: [
        { title: 'Calendario live', body: 'Giorno, settimana, mese — clicca per vedere chi arriva.' },
        { title: 'Gestione tavoli', body: 'Aggiungi, modifica, marca occupato. L\'AI rispetta la tua piantina.' },
        { title: 'Orari di apertura', body: 'Apertura/chiusura per giorno. Festivi e chiusure speciali.' },
        { title: 'Regole automatiche', body: 'Approva manualmente o imposta regole — l\'AI gestisce la routine.' },
        { title: 'Storico prenotazioni', body: 'Cerca per nome, telefono, data. Riconosci i clienti abituali.' },
        { title: 'Riepilogo giornaliero', body: 'Ogni mattina: carico di oggi, anteprima di domani.' },
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
      footer: 'Setup €149 una tantum · gratuito per i primi 20 partner · tutti i piani mensili',
      plans: [
        {
          name: 'Starter',
          price: '€99',
          period: '/ mese',
          description: 'Prenotazione web + chat AI. Perfetto per piccoli ristoranti.',
          features: [
            'Pagina di prenotazione web',
            'Chat AI (IT + EN)',
            'Conferme via email',
            'Pannello di gestione',
            'Vista calendario',
            'Prenotazioni illimitate',
            'Supporto via email',
          ],
        },
        {
          name: 'Pro',
          price: '€249',
          period: '/ mese',
          description: 'Aggiunge il receptionist AI vocale. Il più scelto.',
          features: [
            'Tutto di Starter',
            'Receptionist AI vocale',
            'Funziona con il tuo numero',
            '300 minuti voce inclusi',
            'Gestione orari',
            'Supporto prioritario',
            'Extra: €0.40 / minuto',
          ],
        },
        {
          name: 'Scale',
          price: '€499',
          period: '/ mese',
          description: 'Per ristoranti con alto volume di chiamate.',
          features: [
            'Tutto di Pro',
            '1.500 minuti voce inclusi',
            'Routing multi-canale',
            'Menu IVR personalizzato',
            'Analytics avanzate',
            'Onboarding dedicato',
            'Extra: €0.35 / minuto',
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
          q: 'Cosa succede se l\'AI non riesce a gestire una chiamata?',
          a: 'Il menu IVR include sempre un\'opzione per parlare con uno staff umano. Le chiamate possono anche tornare al numero originale dopo un timeout configurabile.',
        },
        {
          q: 'Posso disdire in qualsiasi momento?',
          a: 'Sì. Nessun vincolo contrattuale. Fatturazione mensile. Esporta tutti i dati con un clic.',
        },
        {
          q: 'Quanto ci vuole per partire?',
          a: "L'onboarding tipico è di 5 giorni. Giorno 1 scoperta, Giorno 2 setup, Giorno 3 training AI, Giorno 4 test pilota, Giorno 5 in produzione.",
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
      errorMessage: 'Qualcosa è andato storto. Scrivici a hello@ovioplus.com.',
      gdprNote: 'I tuoi dati restano riservati. Conforme al GDPR.',
    },
    footer: {
      tagline:
        'Un receptionist AI per ristoranti. Telefono, chat e prenotazioni web — gestiti 24/7.',
      product: 'Prodotto',
      company: 'Azienda',
      madeIn: 'Fatto con ♥ in Italia',
      privacy: 'Privacy',
      terms: 'Termini',
      gdpr: 'GDPR',
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
