/**
 * Legal documents: content in IT (original / authoritative) and EN (translation).
 * Each doc has sections so we can render a sticky TOC.
 */

export type LegalSection = {
  id: string;
  heading: string;
  body: string; // markdown-ish: \n\n paragraph, "• " bullet
};

export type LegalDoc = {
  slug: 'privacy' | 'terms' | 'cookies' | 'dpa' | 'nda';
  title: string;
  subtitle?: string;
  lastUpdated: string;
  sections: LegalSection[];
};

const PRIVACY_IT: LegalDoc = {
  slug: 'privacy',
  title: 'Informativa Privacy',
  subtitle: 'Per i clienti finali: trattamento dei dati personali',
  lastUpdated: '22 Settembre 2026',
  sections: [
    {
      id: 'data',
      heading: 'Dati raccolti',
      body:
        "Quando effettui una prenotazione presso un ristorante che utilizza OvioPlus, alcuni dati personali possono essere raccolti per consentire la gestione della prenotazione.\n\nI dati possono comprendere:\n\n• nome e cognome\n• numero di telefono\n• indirizzo email (se fornito)\n• data e ora della prenotazione\n• numero di persone\n• eventuali richieste comunicate al ristorante",
    },
    {
      id: 'titolare',
      heading: 'Titolare del trattamento',
      body:
        "Il Titolare del trattamento è il ristorante presso cui è effettuata la prenotazione. OvioPlus opera quale Responsabile del trattamento ai sensi dell'art. 28 del GDPR e tratta i dati esclusivamente per conto del ristorante.",
    },
    {
      id: 'finalita',
      heading: 'Finalità del trattamento',
      body:
        'I dati sono trattati esclusivamente per:\n\n• registrare e gestire la prenotazione\n• comunicare eventuali modifiche\n• migliorare l\'organizzazione del servizio',
    },
    {
      id: 'allergie',
      heading: 'Allergie e informazioni sulla salute',
      body:
        "Se comunichi allergie, intolleranze o altre esigenze alimentari, tali informazioni costituiscono dati relativi alla salute ai sensi dell'art. 9 del GDPR e ricevono una tutela rafforzata.\n\nVengono raccolte soltanto se sei tu a fornirle spontaneamente, sulla base del tuo consenso esplicito, e per un'unica finalità: permettere alla cucina di prepararti il pasto in sicurezza. Non sono utilizzate per profilazione né per finalità di marketing, e non sono comunicate a terzi diversi dal ristorante.\n\nPuoi chiedere in qualsiasi momento che non vengano registrate, oppure che vengano cancellate.",
    },
    {
      id: 'assistente-ai',
      heading: 'Assistente AI',
      body:
        "La prenotazione può essere gestita da un assistente basato su intelligenza artificiale, via chat o al telefono. Ti viene sempre comunicato all'inizio dell'interazione che stai parlando con un sistema di IA, come previsto dall'art. 50 del Regolamento (UE) 2024/1689 (AI Act), e puoi chiedere in qualsiasi momento di essere messo in contatto con una persona.\n\nIl contenuto della conversazione è elaborato da un fornitore terzo per generare le risposte. Non viene adottata alcuna decisione automatizzata che produca effetti giuridici nei tuoi confronti ai sensi dell'art. 22 del GDPR.",
    },
    {
      id: 'conservazione',
      heading: 'Conservazione',
      body:
        'I dati sono conservati per il tempo necessario alle finalità per cui sono stati raccolti. Salvo diversa indicazione del Titolare, si applicano i seguenti termini:\n\n• trascrizioni delle conversazioni con l\'assistente AI: 90 giorni\n• note e richieste particolari collegate a una prenotazione, incluse le informazioni sulle allergie: 12 mesi dalla data della prenotazione\n• dati identificativi del cliente: 24 mesi dall\'ultima prenotazione, dopodiché sono resi anonimi in modo irreversibile\n\nIl ristorante, in qualità di Titolare, può stabilire termini diversi.',
    },
    {
      id: 'diritti',
      heading: "Diritti dell'interessato",
      body:
        "L'interessato può esercitare i diritti previsti dagli articoli 15-22 del GDPR, rivolgendosi direttamente al ristorante presso cui ha effettuato la prenotazione.\n\nPer informazioni sul funzionamento della piattaforma è possibile contattare OvioPlus tramite i recapiti indicati sul sito ufficiale.",
    },
  ],
};

const PRIVACY_EN: LegalDoc = {
  slug: 'privacy',
  title: 'Privacy Policy',
  subtitle: 'For end customers: processing of personal data',
  lastUpdated: 'September 22, 2026',
  sections: [
    {
      id: 'data',
      heading: 'Data we collect',
      body:
        'When you make a reservation at a restaurant using OvioPlus, certain personal data may be collected to enable the management of your reservation.\n\nData may include:\n\n• first and last name\n• phone number\n• email address (if provided)\n• date and time of reservation\n• number of guests\n• any requests communicated to the restaurant',
    },
    {
      id: 'titolare',
      heading: 'Data controller',
      body:
        'The Data Controller is the restaurant where the reservation is made. OvioPlus acts as Data Processor under Art. 28 of the GDPR and processes data exclusively on behalf of the restaurant.',
    },
    {
      id: 'finalita',
      heading: 'Purposes of processing',
      body:
        'Data is processed exclusively to:\n\n• register and manage the reservation\n• communicate any changes\n• improve service organization',
    },
    {
      id: 'allergie',
      heading: 'Allergies and health information',
      body:
        "If you tell us about allergies, intolerances or other dietary requirements, that information is health data under Art. 9 of the GDPR and receives heightened protection.\n\nIt is collected only if you volunteer it, on the basis of your explicit consent, and for a single purpose: letting the kitchen prepare your meal safely. It is not used for profiling or marketing, and is not shared with anyone other than the restaurant.\n\nYou can ask at any time for it not to be recorded, or to have it deleted.",
    },
    {
      id: 'assistente-ai',
      heading: 'AI assistant',
      body:
        "Your reservation may be handled by an artificial-intelligence assistant, by chat or by phone. You are always told at the start of the interaction that you are speaking with an AI system, as required by Art. 50 of Regulation (EU) 2024/1689 (the AI Act), and you can ask to be put through to a person at any point.\n\nThe content of the conversation is processed by a third-party provider in order to generate replies. No automated decision producing legal effects concerning you is taken within the meaning of Art. 22 of the GDPR.",
    },
    {
      id: 'conservazione',
      heading: 'Retention',
      body:
        'Data is retained for as long as necessary for the purposes it was collected for. Unless the Controller specifies otherwise, the following periods apply:\n\n• transcripts of conversations with the AI assistant: 90 days\n• notes and special requests attached to a reservation, including allergy information: 12 months from the reservation date\n• guest identifying data: 24 months from the last reservation, after which it is irreversibly anonymised\n\nThe restaurant, as Controller, may set different periods.',
    },
    {
      id: 'diritti',
      heading: 'Your rights',
      body:
        'You may exercise the rights provided by Articles 15-22 of the GDPR by contacting directly the restaurant where you made the reservation.\n\nFor information about how the platform works, you can contact OvioPlus through the channels listed on the official website.',
    },
  ],
};

const TERMS_IT: LegalDoc = {
  slug: 'terms',
  title: 'Termini e Condizioni',
  subtitle: 'Condizioni di utilizzo della piattaforma OvioPlus',
  lastUpdated: '27 Giugno 2026',
  sections: [
    { id: 'oggetto', heading: 'Art. 1: Oggetto', body: 'Le presenti Condizioni disciplinano l\'utilizzo della piattaforma software OvioPlus, accessibile tramite il dominio ovioplus.com, destinata alla gestione delle prenotazioni, delle chiamate e dei servizi correlati per ristoranti e attività di ristorazione.' },
    { id: 'registrazione', heading: 'Art. 2: Registrazione', body: 'L\'accesso ai servizi è riservato agli utenti registrati. Il Cliente garantisce che tutte le informazioni fornite sono veritiere, aggiornate e complete.' },
    { id: 'licenza', heading: 'Art. 3: Licenza d\'uso', body: 'OvioPlus concede al Cliente una licenza personale, non esclusiva, non trasferibile e revocabile per l\'utilizzo della piattaforma durante la validità del contratto.' },
    { id: 'uso', heading: 'Art. 4: Utilizzo corretto', body: 'Il Cliente si impegna a utilizzare il servizio nel rispetto delle normative vigenti e a non utilizzare la piattaforma per finalità illecite, fraudolente o che possano compromettere il funzionamento del servizio.' },
    { id: 'disponibilita', heading: 'Art. 5: Disponibilità del servizio', body: 'OvioPlus si impegna ad adottare ogni ragionevole misura per garantire la continuità del servizio. Potranno verificarsi interruzioni dovute a manutenzione programmata, aggiornamenti, guasti tecnici, problemi di rete, servizi di terze parti o cause di forza maggiore.' },
    { id: 'limitazione', heading: 'Art. 6: Limitazione di responsabilità', body: 'Nei limiti consentiti dalla legge, OvioPlus non risponde di danni diretti o indiretti derivanti da:\n\n• interruzioni della connessione Internet\n• indisponibilità temporanea della piattaforma\n• guasti imputabili a fornitori terzi\n• utilizzo improprio del servizio da parte del Cliente\n• eventi di forza maggiore\n\nOvioPlus non garantisce l\'assenza assoluta di errori o interruzioni.' },
    { id: 'assistenza', heading: 'Art. 7: Assistenza tecnica', body: 'L\'assistenza viene fornita secondo il piano sottoscritto dal Cliente. Gli interventi possono essere inclusi nel canone, fatturati separatamente oppure effettuati gratuitamente quando previsto dal contratto o autorizzato da OvioPlus.' },
    { id: 'proprieta', heading: 'Art. 8: Proprietà intellettuale', body: 'Il software, il codice sorgente, il marchio OvioPlus, la documentazione e ogni contenuto della piattaforma sono protetti dalle norme sulla proprietà intellettuale e rimangono di esclusiva proprietà di OvioPlus.' },
    { id: 'modifiche', heading: 'Art. 9: Modifiche', body: 'OvioPlus potrà modificare le presenti Condizioni. Le nuove versioni saranno pubblicate sul sito.' },
    { id: 'legge', heading: 'Art. 10: Legge applicabile', body: 'Le presenti Condizioni sono disciplinate dalla legge italiana. Per quanto non espressamente previsto si applicano le disposizioni di legge vigenti.' },
  ],
};

const TERMS_EN: LegalDoc = {
  slug: 'terms',
  title: 'Terms & Conditions',
  subtitle: 'Terms of use of the OvioPlus platform',
  lastUpdated: 'June 27, 2026',
  sections: [
    { id: 'oggetto', heading: 'Art. 1: Subject', body: 'These Terms govern the use of the OvioPlus software platform, accessible at ovioplus.com, intended for managing reservations, calls, and related services for restaurants and dining establishments.' },
    { id: 'registrazione', heading: 'Art. 2: Registration', body: 'Access to the services is reserved for registered users. The Customer warrants that all information provided is truthful, current, and complete.' },
    { id: 'licenza', heading: 'Art. 3: License of use', body: 'OvioPlus grants the Customer a personal, non-exclusive, non-transferable, and revocable license to use the platform for the duration of the contract.' },
    { id: 'uso', heading: 'Art. 4: Acceptable use', body: 'The Customer agrees to use the service in compliance with applicable regulations and not to use the platform for unlawful, fraudulent purposes or in ways that could compromise the service.' },
    { id: 'disponibilita', heading: 'Art. 5: Service availability', body: 'OvioPlus undertakes to adopt every reasonable measure to ensure service continuity. Interruptions may occur due to scheduled maintenance, updates, technical failures, network issues, third-party services, or force majeure.' },
    { id: 'limitazione', heading: 'Art. 6: Limitation of liability', body: 'To the extent permitted by law, OvioPlus is not liable for direct or indirect damages resulting from:\n\n• Internet connection interruptions\n• temporary platform unavailability\n• failures attributable to third-party suppliers\n• improper use by the Customer\n• force majeure events\n\nOvioPlus does not guarantee the absolute absence of errors or interruptions.' },
    { id: 'assistenza', heading: 'Art. 7: Technical support', body: 'Support is provided according to the plan subscribed by the Customer. Interventions may be included in the fee, billed separately, or provided free of charge when so determined by contract or authorized by OvioPlus.' },
    { id: 'proprieta', heading: 'Art. 8: Intellectual property', body: 'The software, source code, OvioPlus trademark, documentation, and all platform content are protected by intellectual property laws and remain the exclusive property of OvioPlus.' },
    { id: 'modifiche', heading: 'Art. 9: Changes', body: 'OvioPlus may modify these Terms. New versions will be published on the website.' },
    { id: 'legge', heading: 'Art. 10: Governing law', body: 'These Terms are governed by Italian law. For matters not expressly provided for, current legal provisions apply.' },
  ],
};

const COOKIES_IT: LegalDoc = {
  slug: 'cookies',
  title: 'Cookie Policy',
  subtitle: 'Come utilizziamo i cookie su ovioplus.com',
  lastUpdated: '27 Giugno 2026',
  sections: [
    { id: 'cosa', heading: 'Cosa sono i cookie', body: 'I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo dell\'utente (computer, smartphone o tablet) durante la navigazione di un sito web. I cookie consentono al sito di funzionare correttamente, migliorare l\'esperienza dell\'utente, ricordare preferenze e raccogliere informazioni statistiche anonime sull\'utilizzo del sito.' },
    { id: 'tecnici', heading: 'Cookie tecnici', body: 'Sono indispensabili per il corretto funzionamento del sito. Questi cookie non richiedono il consenso dell\'utente.' },
    { id: 'funzionali', heading: 'Cookie funzionali', body: 'Consentono di ricordare le preferenze espresse dall\'utente. L\'utilizzo di questi cookie migliora l\'esperienza di navigazione.' },
    { id: 'analitici', heading: 'Cookie analitici', body: 'Utilizziamo strumenti statistici (ad esempio Google Analytics o servizi equivalenti) per raccogliere informazioni aggregate e anonime sul traffico del sito, come:\n\n• numero di visitatori\n• pagine visualizzate\n• tempo di permanenza\n• provenienza del traffico\n\nI dati vengono utilizzati esclusivamente per finalità statistiche e di miglioramento del servizio.' },
    { id: 'marketing', heading: 'Cookie di marketing', body: 'Previo consenso dell\'utente, possono essere utilizzati cookie di terze parti per:\n\n• personalizzare gli annunci pubblicitari\n• effettuare attività di remarketing\n• misurare l\'efficacia delle campagne pubblicitarie\n\nQuesti cookie possono essere installati da piattaforme come Google, Meta (Facebook e Instagram), TikTok o altri partner pubblicitari.' },
    { id: 'social', heading: 'Cookie dei social network', body: 'Il sito può integrare pulsanti o contenuti provenienti da social network che consentono all\'utente di condividere contenuti o interagire direttamente con le piattaforme social. L\'utilizzo di tali servizi può comportare l\'installazione di cookie da parte dei rispettivi fornitori.' },
    { id: 'gestione', heading: 'Gestione dei cookie', body: 'L\'utente può modificare in qualsiasi momento le proprie preferenze attraverso il banner dei cookie presente sul sito oppure tramite le impostazioni del proprio browser. La disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito.' },
    { id: 'titolare', heading: 'Titolare del trattamento', body: 'OvioPlus, Email: contact@ovioplus.com' },
    { id: 'aggiornamenti', heading: 'Aggiornamenti', body: 'La presente Cookie Policy potrà essere modificata in qualsiasi momento per adeguarsi a eventuali aggiornamenti normativi.' },
  ],
};

const COOKIES_EN: LegalDoc = {
  slug: 'cookies',
  title: 'Cookie Policy',
  subtitle: 'How we use cookies on ovioplus.com',
  lastUpdated: 'June 27, 2026',
  sections: [
    { id: 'cosa', heading: 'What cookies are', body: 'Cookies are small text files stored on the user\'s device (computer, smartphone, or tablet) while browsing a website. Cookies enable the site to function properly, improve user experience, remember preferences, and collect anonymous statistical information about site usage.' },
    { id: 'tecnici', heading: 'Technical cookies', body: 'Essential for the proper functioning of the site. These cookies do not require user consent.' },
    { id: 'funzionali', heading: 'Functional cookies', body: 'Allow the site to remember preferences expressed by the user. The use of these cookies improves the browsing experience.' },
    { id: 'analitici', heading: 'Analytics cookies', body: 'We use statistical tools (such as Google Analytics or equivalent services) to collect aggregated and anonymous information about site traffic, such as:\n\n• number of visitors\n• pages viewed\n• time spent\n• traffic origin\n\nData is used exclusively for statistical and service improvement purposes.' },
    { id: 'marketing', heading: 'Marketing cookies', body: 'With user consent, third-party cookies may be used to:\n\n• personalize advertising\n• carry out remarketing activities\n• measure advertising campaign effectiveness\n\nThese cookies may be installed by platforms like Google, Meta (Facebook and Instagram), TikTok, or other advertising partners.' },
    { id: 'social', heading: 'Social network cookies', body: 'The site may integrate buttons or content from social networks that allow users to share content or interact directly with social platforms. Use of these services may result in the installation of cookies by their respective providers.' },
    { id: 'gestione', heading: 'Managing cookies', body: 'You can modify your preferences at any time through the cookie banner on the site or through your browser settings. Disabling technical cookies may impair the proper functioning of the site.' },
    { id: 'titolare', heading: 'Data controller', body: 'OvioPlus, Email: contact@ovioplus.com' },
    { id: 'aggiornamenti', heading: 'Updates', body: 'This Cookie Policy may be modified at any time to adapt to regulatory updates.' },
  ],
};

const DPA_IT: LegalDoc = {
  slug: 'dpa',
  title: 'Accordo sul Trattamento dei Dati (DPA)',
  subtitle: 'Ai sensi dell\'art. 28 del Regolamento (UE) 2016/679 (GDPR)',
  lastUpdated: '22 Settembre 2026',
  sections: [
    { id: 'parti', heading: 'Parti', body: 'Il presente Accordo disciplina il trattamento dei dati personali effettuato da OvioPlus quale Responsabile del trattamento per conto del Cliente, Titolare del trattamento, ai sensi dell\'art. 28 del Regolamento (UE) 2016/679 (GDPR).' },
    { id: 'oggetto', heading: 'Oggetto', body: 'OvioPlus tratta i dati esclusivamente per fornire il servizio di gestione delle prenotazioni e delle comunicazioni con i clienti del ristorante.' },
    { id: 'categorie', heading: 'Categorie di dati', body: '• Nome e cognome\n• Numero di telefono\n• Indirizzo email (se raccolto)\n• Data e ora della prenotazione\n• Numero di coperti\n• Eventuali note relative alla prenotazione\n• Informazioni su allergie, intolleranze o esigenze alimentari, se comunicate dal cliente: si tratta di dati relativi alla salute ai sensi dell\'art. 9 GDPR, trattati sulla base del consenso esplicito dell\'interessato e per la sola finalità di consentire una preparazione sicura del pasto\n• Trascrizioni delle conversazioni con l\'assistente AI' },
    { id: 'finalita', heading: 'Finalità', body: 'I dati sono trattati esclusivamente per:\n\n• gestione delle prenotazioni\n• assistenza tecnica\n• manutenzione della piattaforma\n• sicurezza del servizio\n\nOvioPlus non utilizza tali dati per finalità di marketing proprie, salvo consenso espresso o diversa base giuridica.' },
    { id: 'sicurezza', heading: 'Misure di sicurezza', body: 'OvioPlus adotta misure tecniche e organizzative adeguate, tra cui:\n\n• connessioni cifrate (HTTPS/TLS)\n• autenticazione degli utenti\n• controllo degli accessi\n• backup periodici\n• monitoraggio della sicurezza' },
    { id: 'subresponsabili', heading: 'Sub-responsabili del trattamento', body: "Per erogare il servizio, OvioPlus si avvale dei seguenti sub-responsabili, autorizzati ai sensi dell\u2019art. 28, par. 2 e 4, del GDPR:\n\n\u2022 Vercel \u2014 hosting dell\u2019applicazione\n\u2022 Neon \u2014 database (archiviazione nella regione UE)\n\u2022 Clerk \u2014 autenticazione degli account del ristorante\n\u2022 OpenAI \u2014 elaborazione delle conversazioni dell\u2019assistente AI\n\u2022 Twilio \u2014 telefonia e instradamento delle chiamate\n\u2022 Resend \u2014 invio delle email transazionali (conferme e promemoria)\n\u2022 Upstash \u2014 limitazione del traffico e contatori di utilizzo\n\u2022 Stripe \u2014 pagamento dell\u2019abbonamento del ristorante; non tratta dati dei clienti finali\n\nAlcuni di questi fornitori possono trattare dati al di fuori dello Spazio Economico Europeo. In tali casi il trasferimento avviene sulla base delle Clausole Contrattuali Tipo adottate dalla Commissione europea.\n\nOvioPlus comunicher\u00e0 al Cliente ogni modifica relativa all\u2019aggiunta o alla sostituzione di un sub-responsabile con ragionevole preavviso, riconoscendo al Cliente il diritto di opporsi." },
    { id: 'breach', heading: 'Data Breach', body: 'In caso di violazione dei dati personali, OvioPlus informerà il Cliente senza ingiustificato ritardo, fornendo le informazioni necessarie per gli adempimenti previsti dal GDPR.' },
    { id: 'durata', heading: 'Durata', body: 'Il presente Accordo resta efficace per tutta la durata del rapporto contrattuale tra le parti.' },
  ],
};

const DPA_EN: LegalDoc = {
  slug: 'dpa',
  title: 'Data Processing Agreement (DPA)',
  subtitle: 'Pursuant to Art. 28 of Regulation (EU) 2016/679 (GDPR)',
  lastUpdated: 'September 22, 2026',
  sections: [
    { id: 'parti', heading: 'Parties', body: 'This Agreement governs the processing of personal data carried out by OvioPlus as Data Processor on behalf of the Customer, Data Controller, pursuant to Art. 28 of Regulation (EU) 2016/679 (GDPR).' },
    { id: 'oggetto', heading: 'Subject', body: 'OvioPlus processes data exclusively to provide the reservation management service and communications with restaurant customers.' },
    { id: 'categorie', heading: 'Data categories', body: '• First and last name\n• Phone number\n• Email address (if collected)\n• Reservation date and time\n• Number of covers\n• Any notes related to the reservation\n• Allergy, intolerance or dietary information where the guest provides it: this is health data under Art. 9 GDPR, processed on the basis of the data subject\u2019s explicit consent and for the sole purpose of allowing the meal to be prepared safely\n• Transcripts of conversations with the AI assistant' },
    { id: 'finalita', heading: 'Purposes', body: 'Data is processed exclusively for:\n\n• reservation management\n• technical support\n• platform maintenance\n• service security\n\nOvioPlus does not use this data for its own marketing purposes, except with express consent or under a different legal basis.' },
    { id: 'sicurezza', heading: 'Security measures', body: 'OvioPlus adopts appropriate technical and organizational measures, including:\n\n• encrypted connections (HTTPS/TLS)\n• user authentication\n• access control\n• regular backups\n• security monitoring' },
    { id: 'subresponsabili', heading: 'Sub-processors', body: "To deliver the service, OvioPlus uses the following sub-processors, authorised under Art. 28(2) and (4) of the GDPR:\n\n\u2022 Vercel \u2014 application hosting\n\u2022 Neon \u2014 database (stored in the EU region)\n\u2022 Clerk \u2014 authentication of restaurant accounts\n\u2022 OpenAI \u2014 processing of AI assistant conversations\n\u2022 Twilio \u2014 telephony and call routing\n\u2022 Resend \u2014 transactional email delivery (confirmations and reminders)\n\u2022 Upstash \u2014 rate limiting and usage counters\n\u2022 Stripe \u2014 restaurant subscription payments; does not process end-guest data\n\nSome of these providers may process data outside the European Economic Area. Where that happens, the transfer relies on the Standard Contractual Clauses adopted by the European Commission.\n\nOvioPlus will give the Customer reasonable notice of any addition or replacement of a sub-processor, and the Customer has the right to object." },
    { id: 'breach', heading: 'Data Breach', body: 'In case of personal data breach, OvioPlus will inform the Customer without undue delay, providing the necessary information for GDPR compliance.' },
    { id: 'durata', heading: 'Duration', body: 'This Agreement remains effective for the entire duration of the contractual relationship between the parties.' },
  ],
};

const NDA_IT: LegalDoc = {
  slug: 'nda',
  title: 'Accordo di Riservatezza (NDA)',
  subtitle: 'Obblighi di riservatezza tra le parti',
  lastUpdated: '27 Giugno 2026',
  sections: [
    { id: 'oggetto', heading: 'Oggetto', body: 'Le parti si impegnano a mantenere riservate tutte le informazioni tecniche, commerciali, economiche e strategiche scambiate nell\'ambito delle trattative o dell\'esecuzione del rapporto contrattuale relativo a OvioPlus.' },
    { id: 'informazioni', heading: 'Informazioni riservate', body: 'Sono considerate riservate, a titolo esemplificativo:\n\n• codice sorgente\n• documentazione tecnica\n• funzionalità della piattaforma\n• strategie commerciali\n• listini prezzi non pubblici\n• dati dei clienti\n• informazioni finanziarie' },
    { id: 'obblighi', heading: 'Obblighi', body: 'La parte ricevente si impegna a:\n\n• utilizzare le informazioni esclusivamente per le finalità concordate\n• non divulgarle a terzi senza autorizzazione scritta\n• adottare adeguate misure di sicurezza per proteggerle' },
    { id: 'eccezioni', heading: 'Eccezioni', body: 'Gli obblighi di riservatezza non si applicano alle informazioni:\n\n• già di pubblico dominio\n• ricevute legittimamente da terzi\n• divulgate per obbligo di legge' },
    { id: 'durata', heading: 'Durata', body: 'L\'obbligo di riservatezza permane per cinque (5) anni dalla cessazione del rapporto, salvo diversa previsione contrattuale.' },
    { id: 'legge', heading: 'Legge applicabile', body: 'Il presente Accordo è regolato dalla legge italiana.' },
  ],
};

const NDA_EN: LegalDoc = {
  slug: 'nda',
  title: 'Non-Disclosure Agreement (NDA)',
  subtitle: 'Confidentiality obligations between parties',
  lastUpdated: 'June 27, 2026',
  sections: [
    { id: 'oggetto', heading: 'Subject', body: 'The parties undertake to keep confidential all technical, commercial, economic, and strategic information exchanged in the context of negotiations or execution of the contractual relationship relating to OvioPlus.' },
    { id: 'informazioni', heading: 'Confidential information', body: 'Confidential information includes, by way of example:\n\n• source code\n• technical documentation\n• platform functionalities\n• commercial strategies\n• non-public price lists\n• customer data\n• financial information' },
    { id: 'obblighi', heading: 'Obligations', body: 'The receiving party undertakes to:\n\n• use the information exclusively for the agreed purposes\n• not disclose it to third parties without written authorization\n• adopt adequate security measures to protect it' },
    { id: 'eccezioni', heading: 'Exceptions', body: 'Confidentiality obligations do not apply to information that:\n\n• is already in the public domain\n• was legitimately received from third parties\n• is disclosed by legal obligation' },
    { id: 'durata', heading: 'Duration', body: 'The confidentiality obligation remains in force for five (5) years after the termination of the relationship, unless otherwise contractually agreed.' },
  ],
};

export const LEGAL_DOCS = {
  it: { privacy: PRIVACY_IT, terms: TERMS_IT, cookies: COOKIES_IT, dpa: DPA_IT, nda: NDA_IT },
  en: { privacy: PRIVACY_EN, terms: TERMS_EN, cookies: COOKIES_EN, dpa: DPA_EN, nda: NDA_EN },
} as const;

export const LEGAL_INDEX = [
  { slug: 'privacy', icon: 'shield', en: 'Privacy', it: 'Privacy' },
  { slug: 'terms', icon: 'file-text', en: 'Terms', it: 'Termini' },
  { slug: 'cookies', icon: 'cookie', en: 'Cookies', it: 'Cookie' },
  { slug: 'dpa', icon: 'lock', en: 'DPA', it: 'DPA' },
  { slug: 'nda', icon: 'key', en: 'NDA', it: 'NDA' },
] as const;
