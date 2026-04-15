'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
});

const CARD: React.CSSProperties = {
  background: '#141414',
  border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: 16,
  overflow: 'hidden',
  position: 'relative',
  padding: '24px 26px',
  display: 'flex',
  flexDirection: 'column',
};

const ACCENT = '#c8602a';

const experiences = [
  {
    company: 'Vet Care AI',
    role: 'Full Stack Developer',
    type: 'Freelance',
    period: 'Aug 2025 – Mar 2026',
    location: 'Remote · UK',
    url: 'https://vetcare.ai',
    summary: 'Built an AI-powered veterinary SaaS end-to-end as a solo engineer for UK clinics.',
    bullets: [
      'Architected and shipped vetcare.ai — WhatsApp inbox management, appointment booking, emergency triage, and pet parent CRM.',
      'Designed RAG-based AI assistant using FastAPI, ChromaDB, and Gemini + LangChain for natural language queries over veterinary records.',
      'Integrated WhatsApp Business API for automated reminders and follow-ups — practices report 40–60% fewer no-shows.',
    ],
    stack: ['FastAPI', 'PostgreSQL', 'Redis', 'ChromaDB', 'Gemini', 'LangChain', 'React.js', 'Next.js', 'WhatsApp Business API', 'Docker', 'Vercel'],
    highlight: '40–60% fewer no-shows',
    index: '01',
  },
  {
    company: 'Fly Your Tech',
    role: 'Full Stack Developer Intern',
    type: 'Internship',
    period: 'Dec 2024 – Jul 2025',
    location: 'Remote',
    summary: 'Built production systems across a full-service product company spanning CRM, e-commerce, and real-time infrastructure.',
    bullets: [
      'Built CRM (Taxaflow), an e-commerce platform, and various service-layer applications across the full product stack.',
      'Integrated Razorpay payment gateway; built real-time features with Socket.IO and Redis pub/sub — 35% API response time reduction.',
      'Implemented event-driven data pipelines with Apache Kafka; worked across PostgreSQL and MongoDB.',
    ],
    stack: ['Node.js', 'TypeScript', 'React.js', 'Next.js', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'Socket.IO', 'Razorpay', 'Redux', 'Tailwind CSS', 'Docker', 'FastAPI', 'GSAP', 'REST APIs', 'Git'],
    highlight: '35% faster APIs',
    index: '02',
  },
  {
    company: 'Traceworks',
    role: 'Full Stack Developer Intern',
    type: 'Internship',
    period: 'Jul 2024 – Dec 2024',
    location: 'Remote',
    summary: 'Worked as a MERN stack developer building mobile-first UIs and secure REST APIs.',
    bullets: [
      'Built responsive mobile-first UIs with React and Tailwind CSS; designed REST APIs with Node.js and Express.',
      'Secured APIs with JWT authentication and RBAC; reduced production deployment issues by 40% through CI improvements.',
    ],
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'JWT', 'RBAC', 'REST APIs', 'Git', 'CI/CD'],
    highlight: '40% fewer deploy issues',
    index: '03',
  },
];

export default function Tenure() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden', background: '#0d0d0d', display: 'flex', flexDirection: 'column', padding: '72px 18px 16px' }}>

      {/* ── Header ── */}
      <motion.div {...fade(0)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 4px 12px', flexShrink: 0 }}>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#555', textDecoration: 'none' }}>
          <ArrowLeft size={10} /> Home
        </Link>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <span style={{ fontSize: '0.58rem', color: '#333', letterSpacing: '0.1em', textTransform: 'uppercase' }}>3 Roles · Jul 2024—Mar 2026</span>
        </div>
      </motion.div>

      {/* ── BENTO GRID ──
          cols: 1.6fr  1.1fr  0.9fr
          rows: 1.05fr  1.05fr  0.9fr

          [Vet Care AI (col1, rows 1-2, tall)] [FlyTech (col2, row1)]     [Stats (col3, rows 1-2)]
          [Vet Care AI]                        [Traceworks (col2, row2)]   [Stats]
          [Heading (col1, row3)]         [Education (col2-3, row3)]
      ── */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1.6fr 1.1fr 0.9fr',
        gridTemplateRows: '1.05fr 1.05fr 0.9fr',
        gap: 10,
        minHeight: 0,
      }}>

        {/* ── Vet Care AI — tall left, most prominent ── */}
        <motion.div {...fade(0.05)} style={{ ...CARD, gridColumn: '1/2', gridRow: '1/3', justifyContent: 'space-between' }}>
          {/* Subtle number watermark */}
          <div style={{ position: 'absolute', top: 20, right: 24, fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: '5rem', color: 'rgba(255,255,255,0.03)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>01</div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
              <span style={{ fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT }}>{experiences[0].type}</span>
              <span style={{ fontSize: '0.55rem', letterSpacing: '0.08em', color: '#444' }}>{experiences[0].period}</span>
            </div>
            <h2 style={{ fontFamily: 'Instrument Serif, serif', fontSize: 'clamp(2rem, 3.5vw, 3.8rem)', fontStyle: 'italic', fontWeight: 400, lineHeight: 0.95, marginBottom: 8 }}>
              {experiences[0].company}
            </h2>
            <div style={{ fontSize: '0.7rem', color: '#666', marginBottom: 18 }}>{experiences[0].role} · {experiences[0].location}</div>
            <p style={{ fontSize: '0.78rem', color: '#888', lineHeight: 1.8, marginBottom: 18 }}>{experiences[0].summary}</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {experiences[0].bullets.map((b, i) => (
                <li key={i} style={{ fontSize: '0.72rem', color: '#777', lineHeight: 1.7, paddingLeft: 14, position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, top: 7, width: 4, height: 4, borderRadius: '50%', background: ACCENT, display: 'block' }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div style={{ padding: '10px 14px', background: 'rgba(200,96,42,0.08)', border: '1px solid rgba(200,96,42,0.15)', borderRadius: 8, display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: ACCENT, animation: 'pulse 2s ease infinite' }} />
              <span style={{ fontSize: '0.62rem', color: ACCENT, letterSpacing: '0.06em' }}>{experiences[0].highlight}</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 6px' }}>
              {experiences[0].stack.map(s => (
                <span key={s} style={{ fontSize: '0.52rem', color: '#555', padding: '2px 8px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 999 }}>{s}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Fly Your Tech — mid top ── */}
        <motion.div {...fade(0.08)} style={{ ...CARD, gridColumn: '2/3', gridRow: '1/2', justifyContent: 'space-between' }}>
          <div style={{ position: 'absolute', top: 18, right: 20, fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: '3.5rem', color: 'rgba(255,255,255,0.03)', lineHeight: 1, pointerEvents: 'none' }}>02</div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
              <span style={{ fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT }}>{experiences[1].type}</span>
              <span style={{ fontSize: '0.52rem', color: '#444', letterSpacing: '0.06em' }}>{experiences[1].period}</span>
            </div>
            <h3 style={{ fontFamily: 'Instrument Serif, serif', fontSize: 'clamp(1.3rem, 2.2vw, 2.4rem)', fontStyle: 'italic', fontWeight: 400, lineHeight: 1.05, marginBottom: 6 }}>
              {experiences[1].company}
            </h3>
            <div style={{ fontSize: '0.65rem', color: '#666', marginBottom: 12 }}>{experiences[1].role} · {experiences[1].location}</div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {experiences[1].bullets.map((b, i) => (
                <li key={i} style={{ fontSize: '0.7rem', color: '#777', lineHeight: 1.65, paddingLeft: 12, position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, top: 6, width: 4, height: 4, borderRadius: '50%', background: ACCENT, display: 'block' }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 5px' }}>
            {experiences[1].stack.map(s => (
              <span key={s} style={{ fontSize: '0.5rem', color: '#555', padding: '2px 7px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 999 }}>{s}</span>
            ))}
          </div>
        </motion.div>

        {/* ── Traceworks — mid bottom ── */}
        <motion.div {...fade(0.1)} style={{ ...CARD, gridColumn: '2/3', gridRow: '2/3', justifyContent: 'space-between' }}>
          <div style={{ position: 'absolute', top: 18, right: 20, fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: '3.5rem', color: 'rgba(255,255,255,0.03)', lineHeight: 1, pointerEvents: 'none' }}>03</div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
              <span style={{ fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT }}>{experiences[2].type}</span>
              <span style={{ fontSize: '0.52rem', color: '#444', letterSpacing: '0.06em' }}>{experiences[2].period}</span>
            </div>
            <h3 style={{ fontFamily: 'Instrument Serif, serif', fontSize: 'clamp(1.3rem, 2.2vw, 2.4rem)', fontStyle: 'italic', fontWeight: 400, lineHeight: 1.05, marginBottom: 6 }}>
              {experiences[2].company}
            </h3>
            <div style={{ fontSize: '0.65rem', color: '#666', marginBottom: 12 }}>{experiences[2].role} · {experiences[2].location}</div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {experiences[2].bullets.map((b, i) => (
                <li key={i} style={{ fontSize: '0.7rem', color: '#777', lineHeight: 1.65, paddingLeft: 12, position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, top: 6, width: 4, height: 4, borderRadius: '50%', background: ACCENT, display: 'block' }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 5px' }}>
            {experiences[2].stack.map(s => (
              <span key={s} style={{ fontSize: '0.5rem', color: '#555', padding: '2px 7px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 999 }}>{s}</span>
            ))}
          </div>
        </motion.div>

        {/* ── Stats — right full height ── */}
        <motion.div {...fade(0.06)} style={{ ...CARD, gridColumn: '3/4', gridRow: '1/3', justifyContent: 'space-between' }}>
          <div style={{ fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT }}>Career Stats</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { val: '3', label: 'Companies' },
              { val: '20+', label: 'Months Experience' },
              { val: '4', label: 'Projects Shipped' },
              { val: '35–60%', label: 'Avg. Performance Gain' },
            ].map(({ val, label }) => (
              <div key={label} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 16 }}>
                <div style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 'clamp(1.6rem, 2.5vw, 2.8rem)', color: '#fff', lineHeight: 1, marginBottom: 4 }}>{val}</div>
                <div style={{ fontSize: '0.58rem', color: '#555', letterSpacing: '0.08em' }}>{label}</div>
              </div>
            ))}
          </div>
          <Link href="/about" style={{ fontSize: '0.6rem', color: '#444', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#444')}
          >
            Full Profile →
          </Link>
        </motion.div>

        {/* ── Title strip — bottom left ── */}
        <motion.div {...fade(0.12)} style={{ ...CARD, gridColumn: '1/2', gridRow: '3/4', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(2rem, 3vw, 3.5rem)', lineHeight: 0.9 }}>
            Tenure
          </h1>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.55rem', color: '#555', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>Period</div>
            <div style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: '0.9rem', color: '#777' }}>Jul 2024 — Mar 2026</div>
          </div>
        </motion.div>

        {/* ── Education strip — bottom center + right ── */}
        <motion.div {...fade(0.14)} style={{ ...CARD, gridColumn: '2/4', gridRow: '3/4', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <div style={{ fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT, marginBottom: 8 }}>Education</div>
            <div style={{ fontSize: '0.9rem', marginBottom: 4 }}>Bachelor of Computer Applications (BCA)</div>
            <div style={{ fontSize: '0.68rem', color: '#666' }}>S.S. Jain Subodh College of Global Excellence · Jaipur</div>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <div style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: '1.5rem', color: ACCENT, lineHeight: 1 }}>7.8</div>
            <div style={{ fontSize: '0.55rem', color: '#555', marginTop: 4, letterSpacing: '0.06em' }}>CGPA · 2023—2026</div>
          </div>
        </motion.div>

      </div>

      {/* ── Footer ── */}
      <motion.div {...fade(0.2)} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 4px 0', fontSize: '0.56rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2a2a2a', flexShrink: 0 }}>
        <span>© 2026 Kanishk Soni</span>
        <Link href="/projects" style={{ color: '#2a2a2a', textDecoration: 'none' }}>View Projects →</Link>
      </motion.div>
    </div>
  );
}
