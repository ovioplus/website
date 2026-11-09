'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

/*
 * Coded replicas of the real OvioPlus screens (app.ovioplus.ai), simplified.
 * Colours match the product: amber = seated, cyan = arriving soon, wood =
 * free. Names are invented. If a screen changes in the app, change it here.
 */

function useL() {
  const { lang } = useLanguage();
  return (it: string, en: string) => (lang === 'it' ? it : en);
}

const SEATED = { fill: '#fdeecd', stroke: '#f59e0b', text: '#92400e' };
const SOON = { fill: '#eef8fd', stroke: '#2cabe6', text: '#0c4a6e' };
const FREE = { fill: '#f6ead3', stroke: '#c9a874', text: '#5b4426' };

type T = { id: string; x: number; y: number; w: number; h: number; round?: boolean; state: 'seated' | 'soon' | 'free'; sub?: string; count?: number };

function Table({ t }: { t: T }) {
  const c = t.state === 'seated' ? SEATED : t.state === 'soon' ? SOON : FREE;
  const cx = t.x + t.w / 2;
  const cy = t.y + t.h / 2;
  const chairs = t.round
    ? [0, 90, 180, 270].map((a) => {
        const r = t.w / 2 + 9;
        const rad = (a * Math.PI) / 180;
        return <circle key={a} cx={cx + r * Math.cos(rad)} cy={cy + r * Math.sin(rad)} r={6} fill="#e7dccb" />;
      })
    : [
        <rect key="t1" x={t.x + t.w * 0.2} y={t.y - 12} width={t.w * 0.22} height={8} rx={3} fill="#e7dccb" />,
        <rect key="t2" x={t.x + t.w * 0.58} y={t.y - 12} width={t.w * 0.22} height={8} rx={3} fill="#e7dccb" />,
        <rect key="b1" x={t.x + t.w * 0.2} y={t.y + t.h + 4} width={t.w * 0.22} height={8} rx={3} fill="#e7dccb" />,
        <rect key="b2" x={t.x + t.w * 0.58} y={t.y + t.h + 4} width={t.w * 0.22} height={8} rx={3} fill="#e7dccb" />,
      ];
  return (
    <g>
      {chairs}
      {t.round ? (
        <circle cx={cx} cy={cy} r={t.w / 2} fill={c.fill} stroke={c.stroke} strokeWidth={2} />
      ) : (
        <rect x={t.x} y={t.y} width={t.w} height={t.h} rx={10} fill={c.fill} stroke={c.stroke} strokeWidth={2} />
      )}
      <text x={cx} y={t.sub ? cy - 2 : cy + 4} textAnchor="middle" fill={c.text} style={{ fontSize: 13, fontWeight: 700 }}>
        {t.id}
      </text>
      {t.sub && (
        <text x={cx} y={cy + 13} textAnchor="middle" fill={c.text} style={{ fontSize: 9.5, fontWeight: 500 }}>
          {t.sub}
        </text>
      )}
      {t.count ? (
        <g>
          <circle cx={t.x + t.w - 2} cy={t.y + t.h - 2} r={9} fill="#0f172a" stroke="#fff" strokeWidth={2} />
          <text x={t.x + t.w - 2} y={t.y + t.h + 1.5} textAnchor="middle" fill="#fff" style={{ fontSize: 9, fontWeight: 700 }}>
            {t.count}
          </text>
        </g>
      ) : null}
    </g>
  );
}

function StatusChip({ kind, label }: { kind: 'seated' | 'confirmed' | 'pending'; label: string }) {
  const cls = kind === 'pending' ? 'bg-amber-50 text-amber-700' : kind === 'seated' ? 'bg-blue-50 text-blue-700' : 'bg-slate-100 text-slate-600';
  return <span className={`shrink-0 rounded-full px-2 py-0.5 text-[9px] font-semibold ${cls}`}>{label}</span>;
}

/* ------------------------------------------------------------- Service */

export function ServiceMapMock() {
  const L = useL();
  const tables: T[] = [
    { id: 'T1', x: 40, y: 50, w: 74, h: 50, state: 'seated', sub: `Rossi · 4`, count: 2 },
    { id: 'T2', x: 150, y: 50, w: 74, h: 50, state: 'free' },
    { id: 'T3', x: 260, y: 50, w: 74, h: 50, state: 'soon', sub: '20:45 · Conti', count: 1 },
    { id: 'T4', x: 52, y: 160, w: 54, h: 54, round: true, state: 'free' },
    { id: 'T5', x: 162, y: 160, w: 54, h: 54, round: true, state: 'seated', sub: 'Verdi · 2', count: 3 },
    { id: 'T6', x: 272, y: 160, w: 54, h: 54, round: true, state: 'seated', sub: 'Ferri · 3', count: 2 },
    { id: 'T7', x: 40, y: 262, w: 120, h: 52, state: 'soon', sub: '21:00 · Greco', count: 1 },
    { id: 'T8', x: 214, y: 262, w: 120, h: 52, state: 'free' },
  ];
  const rows = [
    { time: '19:30', name: 'Rossi', meta: `4 ${L('coperti', 'covers')} · T1`, dot: '#2cabe6', status: 'seated' as const },
    { time: '20:00', name: 'Verdi', meta: `2 ${L('coperti', 'covers')} · T5`, dot: '#8b5cf6', status: 'seated' as const },
    { time: '20:15', name: 'Ferri', meta: `3 ${L('coperti', 'covers')} · T6`, dot: '#f59e0b', status: 'seated' as const },
    { time: '20:45', name: 'Conti', meta: `2 ${L('coperti', 'covers')} · T3`, dot: '#2cabe6', status: 'confirmed' as const },
    { time: '21:00', name: 'Greco', meta: `6 ${L('coperti', 'covers')} · T7`, dot: '#10b981', status: 'confirmed' as const },
    { time: '21:30', name: 'Marino', meta: `2 ${L('coperti', 'covers')} · ${L('senza tavolo', 'no table')}`, dot: '#8b5cf6', status: 'pending' as const },
  ];
  const statusLabel = { seated: L('Al tavolo', 'Seated'), confirmed: L('Confermata', 'Confirmed'), pending: L('In attesa', 'Pending') };

  return (
    <div className="bg-[#f7f9fc] p-4 sm:p-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="font-display text-xl font-semibold text-text-primary">{L('Servizio', 'Service')}</span>
          <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-medium text-slate-700 shadow-sm">
            📅 {L('sabato 14 novembre', 'Saturday 14 November')} ▾
          </span>
          <span className="hidden rounded-full bg-slate-900 px-2.5 py-1 text-[10px] font-medium text-white sm:inline">{L('Oggi', 'Today')}</span>
        </div>
        <div className="inline-grid grid-cols-2 rounded-full border border-slate-200 bg-white p-0.5 text-[10px] font-medium">
          <span className="rounded-full bg-slate-900 px-3 py-1 text-white">{L('Mappa', 'Map')}</span>
          <span className="px-3 py-1 text-slate-500">Timeline</span>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_190px]">
        <div className="space-y-2.5">
          <div className="rounded-xl border border-slate-100 bg-white p-2.5 shadow-sm">
            <div className="mb-1.5 flex items-center justify-between text-[10px] text-slate-500">
              <span>
                {L('Alle', 'At')} <span className="font-display text-base font-semibold text-text-primary">20:30</span>
              </span>
              <span className="rounded-full bg-rose-50 px-2 py-0.5 font-semibold text-rose-600">● {L('Adesso', 'Now')}</span>
            </div>
            <div className="relative h-1.5 rounded-full bg-slate-100">
              <div className="absolute inset-y-0 left-0 w-[62%] rounded-full bg-brand-cyan" />
              <div className="absolute top-1/2 left-[62%] h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-brand-cyan shadow" />
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-slate-200/70">
            <svg viewBox="0 0 374 340" className="block h-auto w-full" role="img" aria-label={L('Piantina della sala', 'Floor plan')}>
              <rect width="374" height="340" fill="#f3ead9" />
              <rect x="352" y="70" width="14" height="200" rx="4" fill="#cbb48c" />
              <text x="359" y="175" textAnchor="middle" transform="rotate(90 359 175)" fill="#6b5435" style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2 }}>
                BAR
              </text>
              {tables.map((t) => (
                <Table key={t.id} t={t} />
              ))}
            </svg>
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-[9px] text-slate-500">
            <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-amber-500" />{L('Al tavolo', 'Seated')}</span>
            <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-brand-cyan" />{L('In arrivo', 'Arriving')}</span>
            <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-[#c9a874]" />{L('Libero', 'Free')}</span>
          </div>
        </div>

        <div className="hidden space-y-2 md:block">
          <div className="rounded-xl bg-slate-900 py-2 text-center text-[10px] font-semibold text-white">+ {L('Nuova prenotazione', 'New booking')}</div>
          <div className="rounded-xl border border-slate-200 bg-white px-2.5 py-2 text-[10px] text-slate-400">{L('Cerca ospite, telefono…', 'Search guest, phone…')}</div>
          <div className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
            <div className="flex justify-between border-b border-slate-100 px-2.5 py-1.5 text-[8px] font-semibold tracking-wider text-slate-400 uppercase">
              <span>{L('Prenotazioni', 'Bookings')}</span>
              <span>6</span>
            </div>
            {rows.map((r) => (
              <div key={r.name} className="flex items-center gap-1.5 border-b border-slate-50 px-2.5 py-1.5 last:border-0">
                <span className="w-7 text-[10px] font-semibold text-text-primary tabular-nums">{r.time}</span>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: r.dot }} />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[10px] font-medium text-text-primary">{r.name}</span>
                  <span className="block truncate text-[8px] text-slate-500">{r.meta}</span>
                </span>
                <StatusChip kind={r.status} label={statusLabel[r.status]} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- Edit / change table */

export function BookingEditMock() {
  const L = useL();
  const opts = [
    { id: 'T3', s: '2-4', state: 'current' },
    { id: 'T4', s: '2-4', state: 'free' },
    { id: 'T5', s: '2-2', state: 'taken' },
    { id: 'T7', s: '4-6', state: 'free' },
  ];
  return (
    <div className="relative bg-gradient-to-br from-[#eef6fd] to-[#f7f9fc] p-5 sm:p-7">
      {/* The new-booking sheet, peeking behind */}
      <div className="absolute top-5 right-5 hidden w-56 rotate-2 rounded-2xl border border-slate-100 bg-white p-3.5 opacity-90 shadow-lg sm:block">
        <div className="mb-2 font-display text-sm font-semibold text-text-primary">{L('Nuova prenotazione', 'New booking')}</div>
        <div className="mb-1 text-[9px] font-medium text-slate-500">{L('Arrivata via', 'Came in by')}</div>
        <div className="flex flex-wrap gap-1">
          {[L('Telefono', 'Phone'), 'WhatsApp', L('Di persona', 'Walk-in'), 'Instagram'].map((o, i) => (
            <span key={o} className={`rounded-full border px-2 py-0.5 text-[9px] font-medium ${i === 1 ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 text-slate-600'}`}>
              {o}
            </span>
          ))}
        </div>
      </div>

      <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl">
        <div className="flex items-start gap-3 border-b border-slate-100 bg-gradient-to-br from-brand-cyan/10 to-transparent p-4">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-cyan-light font-display text-lg font-semibold text-white">G</div>
          <div className="min-w-0 flex-1">
            <div className="font-display text-lg font-semibold text-text-primary">Giulia Verdi</div>
            <div className="mt-0.5 flex flex-wrap items-center gap-1.5">
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-medium text-emerald-800">{L('Confermata', 'Confirmed')}</span>
              <span className="text-[9px] text-slate-500">{L('via whatsapp', 'via whatsapp')}</span>
            </div>
          </div>
          <span className="text-slate-300">✕</span>
        </div>
        <div className="space-y-2.5 p-4">
          <div className="grid grid-cols-4 gap-1.5">
            {[
              [L('Data', 'Date'), L('sab 14', 'Sat 14')],
              [L('Ora', 'Time'), '20:30'],
              [L('Ospiti', 'Guests'), '4'],
              [L('Tavolo', 'Table'), 'T3'],
            ].map(([k, v]) => (
              <div key={k} className="rounded-lg border border-slate-100 bg-slate-50/60 px-2 py-1.5">
                <div className="text-[7.5px] font-medium tracking-wider text-slate-400 uppercase">{k}</div>
                <div className="text-[11px] font-semibold text-slate-800">{v}</div>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-2.5">
            <div className="mb-1.5 text-[8px] font-medium tracking-wider text-slate-400 uppercase">{L('Scegli un tavolo', 'Choose a table')}</div>
            <div className="grid grid-cols-4 gap-1.5">
              {opts.map((o) => (
                <div
                  key={o.id}
                  className={`rounded-lg border px-1.5 py-1 ${
                    o.state === 'current' ? 'border-brand-cyan bg-brand-cyan/10' : o.state === 'taken' ? 'bg-slate-100 opacity-50' : o.id === 'T7' ? 'border-brand-cyan bg-white ring-2 ring-brand-cyan/30' : 'bg-white'
                  }`}
                >
                  <div className="text-[11px] font-semibold text-text-primary">{o.id}</div>
                  <div className="text-[8px] text-slate-500">{o.state === 'taken' ? L('Occupato', 'Taken') : `${o.s} ${L('posti', 'seats')}`}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 py-1.5 text-center text-[11px] font-medium text-slate-700">✎ {L('Modifica', 'Edit booking')}</div>
          <div className="flex gap-2 rounded-xl bg-amber-50 px-3 py-2 text-[10px] text-amber-900 ring-1 ring-amber-200/60">
            <span>✦</span>
            {L('Allergia alle noci · compleanno', 'Nut allergy · birthday')}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- Calendar */

export function CalendarMock() {
  const L = useL();
  const { lang } = useLanguage();
  const covers: Record<number, number> = { 3: 22, 4: 18, 6: 40, 7: 64, 8: 38, 10: 20, 11: 26, 12: 30, 13: 48, 14: 86, 15: 52, 18: 16, 19: 24, 20: 34, 21: 58, 22: 41, 25: 12, 26: 20, 27: 28, 28: 44, 29: 31 };
  const closed = new Set([2, 9, 16, 23, 30]); // Mondays
  const weekdays = lang === 'it' ? ['L', 'M', 'M', 'G', 'V', 'S', 'D'] : ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const lead = 6; // 1 November 2026 is a Sunday
  const cells: (number | null)[] = [...Array<null>(lead).fill(null), ...Array.from({ length: 30 }, (_, i) => i + 1)];
  return (
    <div className="bg-[#f7f9fc] p-5 sm:p-7">
      <div className="mb-3 flex flex-wrap items-center gap-1.5">
        <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-medium text-slate-800 shadow-sm">📅 {L('sabato 14 novembre', 'Saturday 14 November')} ▾</span>
        <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] font-medium text-slate-600">{L('Oggi', 'Today')}</span>
        <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] font-medium text-slate-600">{L('Domani', 'Tomorrow')}</span>
      </div>
      <div className="w-full max-w-[330px] rounded-2xl border border-slate-100 bg-white p-3 shadow-xl">
        <div className="mb-2 flex items-center justify-between px-1">
          <span className="text-slate-400">‹</span>
          <span className="text-xs font-semibold text-text-primary capitalize">{L('novembre 2026', 'November 2026')}</span>
          <span className="text-slate-400">›</span>
        </div>
        <div className="grid grid-cols-7 gap-0.5 text-center">
          {weekdays.map((w, i) => (
            <span key={i} className="py-1 text-[9px] font-semibold text-slate-400">{w}</span>
          ))}
          {cells.map((d, i) =>
            d === null ? (
              <span key={`e${i}`} />
            ) : (
              <span
                key={d}
                className={`flex h-9 flex-col items-center justify-center rounded-lg text-[11px] tabular-nums ${
                  d === 14 ? 'bg-slate-900 text-white' : closed.has(d) ? 'bg-[repeating-linear-gradient(135deg,transparent_0_4px,rgb(241_245_249)_4px_6px)] text-slate-300' : d < 9 ? 'text-slate-300' : 'text-slate-800'
                } ${d === 9 ? 'ring-1 ring-brand-cyan ring-inset' : ''}`}
              >
                <span className="leading-none font-medium">{d}</span>
                {covers[d] && <span className={`mt-0.5 text-[8px] leading-none font-semibold ${d === 14 ? 'text-white/80' : d < 9 ? 'text-slate-300' : 'text-brand-cyan-dark'}`}>{covers[d]}</span>}
              </span>
            ),
          )}
        </div>
        <div className="mt-2 border-t border-slate-100 pt-2 text-[9px] text-slate-500">{L('Il numerino indica i coperti prenotati.', 'The small number is covers booked.')}</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- Ask Ovio */

export function AskOvioMock() {
  const L = useL();
  return (
    <div className="bg-gradient-to-b from-[#f2f8fe] to-white p-5 sm:p-7">
      <div className="mx-auto max-w-md space-y-3">
        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-[11px] text-slate-400 shadow-sm">
          <span className="text-brand-cyan">✦</span>
          {L('Chiedi a Ovio qualsiasi cosa sulle prenotazioni…', 'Ask Ovio anything about your bookings…')}
          <span className="ml-auto rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-medium text-slate-500">7/10</span>
        </div>
        <div className="ml-auto w-fit rounded-2xl rounded-br-md bg-slate-900 px-3.5 py-2 text-[11px] text-white">{L('Chi arriva stasera?', 'Who is coming tonight?')}</div>
        <div className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-md">
          <p className="mb-2.5 text-[11px] leading-relaxed text-slate-700">
            {L('Stasera 18 prenotazioni, 64 coperti. Due richieste speciali: allergia alle noci al T3 e un compleanno al T7.', 'Tonight: 18 bookings, 64 covers. Two special requests: a nut allergy at T3 and a birthday at T7.')}
          </p>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              [L('Prenotazioni', 'Bookings'), '18'],
              [L('Coperti', 'Covers'), '64'],
              [L('Richieste', 'Requests'), '2'],
            ].map(([k, v]) => (
              <div key={k} className="rounded-lg bg-slate-50 px-2 py-1.5">
                <div className="text-[8px] font-medium tracking-wider text-slate-400 uppercase">{k}</div>
                <div className="font-display text-base font-semibold text-text-primary">{v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="ml-auto w-fit rounded-2xl rounded-br-md bg-slate-900 px-3.5 py-2 text-[11px] text-white">{L('Sposta Rossi alle 21', 'Move Rossi to 9 pm')}</div>
        <div className="rounded-2xl border border-brand-cyan/30 bg-white p-3.5 shadow-md">
          <div className="text-[10px] font-semibold text-text-primary">{L('Sposta questa prenotazione', 'Move this booking')}</div>
          <div className="mt-1 text-[11px] text-slate-600">
            Rossi · 4 · <span className="line-through">20:00</span> → <span className="font-semibold text-text-primary">21:00</span> · T1
          </div>
          <div className="mt-1 text-[9px] text-slate-400">{L('L’ospite riceve un’email con il nuovo orario.', 'The guest gets an email with the new time.')}</div>
          <div className="mt-2.5 flex gap-1.5">
            <span className="rounded-full bg-slate-900 px-3.5 py-1 text-[10px] font-semibold text-white">{L('Conferma', 'Confirm')}</span>
            <span className="rounded-full px-3 py-1 text-[10px] font-medium text-slate-500">{L('Non ora', 'Not now')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- Guest booking page */

export function BookingPageMock() {
  const L = useL();
  return (
    <div className="bg-[#faf7f2] pb-5">
      <div className="bg-gradient-to-br from-[#7a3b2e] to-[#a45a3f] px-4 pt-9 pb-5 text-white">
        <div className="text-[9px] font-medium tracking-[0.2em] uppercase opacity-80">{L('Prenotazioni', 'Reservations')}</div>
        <div className="mt-1 font-display text-xl font-semibold">Trattoria da Marco</div>
        <div className="mt-1 text-[10px] opacity-80">● {L('Aperto oggi', 'Open today')} · 12:00-15:00, 19:00-23:30</div>
      </div>
      <div className="-mt-3 space-y-2.5 px-3">
        <div className="rounded-2xl bg-white p-3 shadow-md">
          <div className="mb-2 flex items-center justify-center gap-1.5">
            {[L('Quando', 'When'), L('Tavolo', 'Table'), L('Dati', 'Details')].map((s, i) => (
              <span key={s} className={`rounded-full px-2 py-0.5 text-[8px] font-semibold ${i === 0 ? 'bg-[#7a3b2e] text-white' : 'bg-slate-100 text-slate-400'}`}>
                {i + 1} {s}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              [L('Data', 'Date'), L('sab 14', 'Sat 14')],
              [L('Ora', 'Time'), '20:30'],
              [L('Ospiti', 'Guests'), '4'],
            ].map(([k, v]) => (
              <div key={k} className="rounded-lg border border-slate-200 px-2 py-1.5">
                <div className="text-[8px] text-slate-400">{k}</div>
                <div className="text-[11px] font-semibold text-slate-800">{v}</div>
              </div>
            ))}
          </div>
          <div className="mt-2.5 rounded-full bg-[#7a3b2e] py-2 text-center text-[11px] font-semibold text-white">{L('Trova un tavolo', 'Find a table')}</div>
        </div>
        <div className="flex items-center gap-2 rounded-2xl border border-[#7a3b2e]/15 bg-white px-3 py-2.5 shadow-sm">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#7a3b2e]/10 text-[#7a3b2e]">✦</span>
          <span className="text-[10px] leading-tight text-slate-700">
            <span className="block font-semibold">{L('Preferisci chattare?', 'Rather chat?')}</span>
            {L('Chiedi al nostro assistente AI', 'Ask our AI assistant')}
          </span>
        </div>
      </div>
    </div>
  );
}
