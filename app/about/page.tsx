'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }
});

const CARD: React.CSSProperties = {
  background: '#141414',
  border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: 16,
  overflow: 'hidden',
  position: 'relative',
  padding: '22px 24px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const LABEL: React.CSSProperties = {
  fontSize: '0.58rem',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: '#c8602a',
  marginBottom: 12,
};

export default function About() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden', background: '#0d0d0d', display: 'flex', flexDirection: 'column', padding: '72px 18px 16px' }}>

      {/* ── Header ── */}
      <motion.div {...fade(0)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 4px 12px', flexShrink: 0 }}>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#555', textDecoration: 'none' }}>
          <ArrowLeft size={10} /> Home
        </Link>
        <span style={{ fontSize: '0.58rem', color: '#333', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Full Stack Developer · 2024—2026</span>
      </motion.div>

      {/* ── BENTO GRID ──
           3 cols × 3 rows
           cols: 1.5fr | 1.1fr | 1fr
           rows: 1fr | 1fr | 0.85fr

           [Bio (col1, rows 1-2)]    [Vet Care AI exp (col2, r1)]    [Skills (col3, rows 1-2)]
           [Bio (col1, rows 1-2)]    [FlyTech exp (col2, r2)]  [Skills]
           [Education (col1, r3)]    [Traceworks (col2, r3)]   [CTA (col3, r3)]
      ── */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1.5fr 1.1fr 1fr',
        gridTemplateRows: '1fr 1fr 0.85fr',
        gap: 10,
        minHeight: 0,
      }}>

        {/* ── Bio — tall left ── */}
        <motion.div {...fade(0.04)} style={{ ...CARD, gridColumn: '1/2', gridRow: '1/3', justifyContent: 'flex-end', overflow: 'hidden' }}>
          {/* Diagonal texture */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(-55deg, transparent, transparent 40px, rgba(255,255,255,0.012) 40px, rgba(255,255,255,0.012) 41px)', pointerEvents: 'none', zIndex: 0 }} />

          {/* Real photo */}
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '55%', zIndex: 1 }}>
            <img
              src="/My_image.png"
              alt="Kanishk Soni"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(20%)', WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)', maskImage: 'linear-gradient(to left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #141414 0%, transparent 60%, transparent 100%)' }} />
          </div>

          <div style={{ position: 'absolute', top: 22, left: 24, right: 24, zIndex: 2 }}>
            <div style={LABEL}>Kanishk Soni</div>
            <h1 style={{ fontFamily: 'Instrument Serif, serif', fontSize: 'clamp(2.2rem, 4vw, 4.5rem)', fontStyle: 'italic', fontWeight: 400, lineHeight: 0.9, marginBottom: 20 }}>
              Full Stack<br/>Developer
            </h1>
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <p style={{ fontSize: '0.78rem', color: '#888', lineHeight: 1.8, marginBottom: 20 }}>
              Hands-on experience building and shipping production systems — from AI-powered SaaS to real-time applications and e-commerce. Comfortable owning the full stack. Built{' '}
              <a href="https://vetcare.ai" target="_blank" rel="noopener noreferrer" style={{ color: '#c8602a', textDecoration: 'none' }}>vetcare.ai</a>{' '}
              end-to-end as a solo engineer.
            </p>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="mailto:kanishk21soni@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#666', textDecoration: 'none', fontSize: '0.68rem', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = '#fff')} onMouseLeave={e => (e.currentTarget.style.color = '#666')}>
                <Mail size={13} /> kanishk21soni@gmail.com
              </a>
              <a href="https://linkedin.com/in/kanishk-21-soni" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#666', textDecoration: 'none', fontSize: '0.68rem', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = '#fff')} onMouseLeave={e => (e.currentTarget.style.color = '#666')}>
                <Linkedin size={13} />
              </a>
              <a href="https://github.com/kanishk1122" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#666', textDecoration: 'none', fontSize: '0.68rem', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = '#fff')} onMouseLeave={e => (e.currentTarget.style.color = '#666')}>
                <Github size={13} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Vet Care AI exp — top center ── */}
        <motion.div {...fade(0.08)} style={{ ...CARD, gridColumn: '2/3', gridRow: '1/2' }}>
          <div>
            <div style={LABEL}>Experience · Aug 2025 – Mar 2026</div>
            <div style={{ fontSize: '0.95rem', marginBottom: 6 }}>Vet Care AI</div>
            <div style={{ fontSize: '0.65rem', color: '#666', marginBottom: 12 }}>Full Stack Developer (Freelance) · Remote, UK</div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                'Built vetcare.ai solo — WhatsApp inbox, booking, triage & CRM.',
                'RAG AI assistant with FastAPI, ChromaDB, Gemini + LangChain.',
                'WhatsApp Business API integration — 40–60% fewer no-shows.',
              ].map((b, i) => (
                <li key={i} style={{ fontSize: '0.7rem', color: '#888', lineHeight: 1.65, paddingLeft: 12, position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#c8602a', fontSize: '0.5rem', top: 5 }}>◆</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {['FastAPI', 'PostgreSQL', 'ChromaDB', 'Gemini', 'Next.js'].map(s => (
              <span key={s} style={{ fontSize: '0.52rem', color: '#555', padding: '2px 7px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 999 }}>{s}</span>
            ))}
          </div>
        </motion.div>

        {/* ── Fly Your Tech exp — mid center ── */}
        <motion.div {...fade(0.1)} style={{ ...CARD, gridColumn: '2/3', gridRow: '2/3' }}>
          <div>
            <div style={LABEL}>Experience · Dec 2024 – Jul 2025</div>
            <div style={{ fontSize: '0.95rem', marginBottom: 6 }}>Fly Your Tech</div>
            <div style={{ fontSize: '0.65rem', color: '#666', marginBottom: 12 }}>Full Stack Developer Intern · Remote</div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                'Built CRM (Taxaflow), e-commerce platform & service-layer apps.',
                'Razorpay payments + Socket.IO/Redis pub-sub — 35% faster responses.',
                'Event-driven pipelines with Apache Kafka.',
              ].map((b, i) => (
                <li key={i} style={{ fontSize: '0.7rem', color: '#888', lineHeight: 1.65, paddingLeft: 12, position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#c8602a', fontSize: '0.5rem', top: 5 }}>◆</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {['Node.js', 'Kafka', 'Redis', 'Socket.IO', 'Razorpay'].map(s => (
              <span key={s} style={{ fontSize: '0.52rem', color: '#555', padding: '2px 7px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 999 }}>{s}</span>
            ))}
          </div>
        </motion.div>

        {/* ── Skills — tall right ── */}
        <motion.div {...fade(0.06)} style={{ ...CARD, gridColumn: '3/4', gridRow: '1/3' }}>
          <div style={LABEL}>Technical Skills</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1, justifyContent: 'center' }}>
            {[
              { label: 'Backend', items: ['Node.js', 'Express.js', 'FastAPI', 'Python', 'REST APIs', 'Socket.IO', 'Apache Kafka'] },
              { label: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Redux', 'Three.js', 'GSAP'] },
              { label: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'ChromaDB'] },
              { label: 'AI / RAG', items: ['Google Gemini', 'LangChain', 'ChromaDB', 'RAG Pipelines'] },
              { label: 'DevOps & Tools', items: ['Docker', 'AWS', 'Vercel', 'Git', 'GitHub', 'CI/CD', 'Razorpay'] },
            ].map(group => (
              <div key={group.label}>
                <div style={{ fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555', marginBottom: 5 }}>{group.label}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                  {group.items.map(s => (
                    <span key={s} style={{ fontSize: '0.65rem', color: '#888', padding: '2px 8px', background: 'rgba(255,255,255,0.04)', borderRadius: 999 }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Education — bottom left ── */}
        <motion.div {...fade(0.12)} style={{ ...CARD, gridColumn: '1/2', gridRow: '3/4' }}>
          <div style={LABEL}>Education</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 12 }}>
            <div>
              <div style={{ fontSize: '0.85rem', marginBottom: 4 }}>Bachelor of Computer Applications</div>
              <div style={{ fontSize: '0.68rem', color: '#666' }}>S.S. Jain Subodh College · Jaipur</div>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontSize: '0.7rem', color: '#c8602a', fontFamily: 'Instrument Serif, serif', fontStyle: 'italic' }}>CGPA 7.8</div>
              <div style={{ fontSize: '0.58rem', color: '#444', marginTop: 2 }}>Aug 2023 – Jul 2026</div>
            </div>
          </div>
        </motion.div>

        {/* ── Traceworks — bottom center ── */}
        <motion.div {...fade(0.14)} style={{ ...CARD, gridColumn: '2/3', gridRow: '3/4' }}>
          <div style={LABEL}>Experience · Jul – Dec 2024</div>
          <div>
            <div style={{ fontSize: '0.9rem', marginBottom: 4 }}>Traceworks</div>
            <div style={{ fontSize: '0.65rem', color: '#666', marginBottom: 8 }}>Full Stack Developer Intern · Remote</div>
            <p style={{ fontSize: '0.68rem', color: '#888', lineHeight: 1.65 }}>
              MERN stack dev — mobile-first UIs, REST APIs, JWT + RBAC auth. Reduced deployment issues 40% via CI improvements.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            {['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'].map(s => (
              <span key={s} style={{ fontSize: '0.5rem', color: '#555', padding: '2px 6px', background: 'rgba(255,255,255,0.04)', borderRadius: 999 }}>{s}</span>
            ))}
          </div>
        </motion.div>

        {/* ── CTA — bottom right ── */}
        <motion.div {...fade(0.16)} style={{ ...CARD, gridColumn: '3/4', gridRow: '3/4', background: 'linear-gradient(135deg, #1a1a1a 0%, #141414 100%)', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#c8602a', animation: 'pulse 2s ease infinite', marginTop: 3 }} />
            <div style={{ fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555' }}>Available</div>
          </div>
          <div>
            <h3 style={{ fontFamily: 'Instrument Serif, serif', fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', fontStyle: 'italic', fontWeight: 400, marginBottom: 12 }}>
              Let&apos;s build<br/>something.
            </h3>
            <div style={{ display: 'flex', gap: 8 }}>
              <a href="mailto:kanishk21soni@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 14px', background: '#c8602a', borderRadius: 8, fontSize: '0.65rem', color: '#fff', textDecoration: 'none' }}>
                <Mail size={11} /> Email
              </a>
              <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', padding: '8px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, fontSize: '0.65rem', color: '#888', textDecoration: 'none' }}>
                Projects
              </Link>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ── Footer ── */}
      <motion.div {...fade(0.2)} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 4px 0', fontSize: '0.56rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2a2a2a', flexShrink: 0 }}>
        <span>© 2026 Kanishk Soni</span>
        <span>kanishk21soni@gmail.com</span>
      </motion.div>
    </div>
  );
}
