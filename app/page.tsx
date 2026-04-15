'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './components/Icons';
import Link from 'next/link';

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
  })
};

export default function Home() {
  return (
    <div className="home-wrapper">
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1.7fr 1.05fr 1.2fr 1.3fr',
        gridTemplateRows: '1.1fr 1.1fr 0.8fr',
        gap: 10,
        minHeight: 0,
      }}>

        {/* ── HERO — full height left, real photo background ── */}
        <motion.div
          custom={0} variants={fade} initial="hidden" animate="show"
          style={{
            gridColumn: '1 / 2',
            gridRow: '1 / 4',
            position: 'relative',
            borderRadius: 16,
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.07)',
            background: '#111',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: 28,
          }}
        >
          {/* Diagonal texture */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(-55deg,transparent,transparent 40px,rgba(255,255,255,0.018) 40px,rgba(255,255,255,0.018) 41px)', pointerEvents: 'none', zIndex: 0 }} />

          {/* Real photo — right side, faded */}
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '60%', zIndex: 1 }}>
            <img
              src="/My_image.png"
              alt="Kanishk Soni"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(30%)', maskImage: 'linear-gradient(to left, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)', WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #111 0%, transparent 50%, transparent 100%)' }} />
          </div>

          {/* Content */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#888', marginBottom: 14 }}>
              Independent Developer
            </div>
            <h1 style={{ fontFamily: 'Instrument Serif, serif', fontSize: 'clamp(2.8rem, 5vw, 5.5rem)', fontWeight: 400, fontStyle: 'italic', lineHeight: 0.9, letterSpacing: '-0.02em', marginBottom: 20 }}>
              Kanishk<br/>Soni
            </h1>
            <div style={{ display: 'flex', gap: 18 }}>
              {[
                { href: 'https://github.com/kanishk1122', icon: <Github size={17} />, label: 'GitHub' },
                { href: 'https://linkedin.com/in/kanishk-21-soni', icon: <Linkedin size={17} />, label: 'LinkedIn' },
                { href: 'mailto:kanishk21soni@gmail.com', icon: <Mail size={17} />, label: 'Email' },
              ].map(({ href, icon, label }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" aria-label={label}
                  style={{ color: '#555', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#555')}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── PROJECTS ARCHIVE — top, spans 2 rows ── */}
        <motion.div
          custom={1} variants={fade} initial="hidden" animate="show"
          style={{ gridColumn: '2 / 3', gridRow: '1 / 3', position: 'relative', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', background: '#141414', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '22px 24px', cursor: 'pointer' }}
        >
          <Link href="/projects" style={{ position: 'absolute', inset: 0, zIndex: 10 }} aria-label="Projects Archive" />
          <div style={{ fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8602a' }}>Collections</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <h2 style={{ fontFamily: 'Instrument Serif, serif', fontSize: 'clamp(2rem, 3vw, 3.2rem)', fontStyle: 'italic', fontWeight: 400, lineHeight: 1.05 }}>
              Projects<br/>Archive
            </h2>
            <p style={{ fontSize: '0.75rem', color: '#777', lineHeight: 1.7, maxWidth: 180 }}>
              A curated selection of production systems and architectural interfaces.
            </p>
            <div style={{ height: 2, background: '#c8602a', width: 36, opacity: 0.5, transition: 'width 0.6s ease' }}
              onMouseEnter={e => (e.currentTarget.style.width = '100%')}
              onMouseLeave={e => (e.currentTarget.style.width = '36px')}
            />
          </div>
        </motion.div>

        {/* ── TECH ARSENAL — spans 2 rows ── */}
        <motion.div
          custom={2} variants={fade} initial="hidden" animate="show"
          style={{ gridColumn: '3 / 4', gridRow: '1 / 3', borderRadius: 16, border: '1px solid rgba(255,255,255,0.07)', background: '#141414', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '22px 24px' }}
        >
          <div style={{ fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8602a', marginBottom: 16 }}>Technical Arsenal</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1, justifyContent: 'center' }}>
            {[
              { label: 'Backend',       items: ['Node.js', 'Express.js', 'FastAPI', 'Python', 'Socket.IO', 'Kafka'] },
              { label: 'Frontend',      items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'GSAP'] },
              { label: 'Databases',     items: ['PostgreSQL', 'MongoDB', 'Redis', 'ChromaDB'] },
              { label: 'AI / RAG',      items: ['Gemini', 'LangChain', 'RAG Pipelines'] },
              { label: 'DevOps',        items: ['Docker', 'Vercel', 'AWS', 'CI/CD', 'GitHub'] },
            ].map(group => (
              <div key={group.label}>
                <div style={{ fontSize: '0.52rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#444', marginBottom: 5 }}>{group.label}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 8px' }}>
                  {group.items.map(t => (
                    <span key={t} style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 'clamp(0.8rem, 1.2vw, 1.25rem)', color: '#777', lineHeight: 1.5 }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: '0.58rem', color: '#3a3a3a', letterSpacing: '0.06em' }}>
            BCA · S.S. Jain Subodh · 2023—2026
          </div>
        </motion.div>

        {/* ── CONTACT — spans 2 rows ── */}
        <motion.div
          custom={3} variants={fade} initial="hidden" animate="show"
          style={{ gridColumn: '4 / 5', gridRow: '1 / 3', borderRadius: 16, border: '1px solid rgba(255,255,255,0.07)', background: '#141414', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '22px 24px' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#c8602a', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
            <div style={{ fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555' }}>Available for Inquiry</div>
          </div>
          <div>
            <h2 style={{ fontFamily: 'Instrument Serif, serif', fontSize: 'clamp(1.6rem, 2.8vw, 2.8rem)', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.05, marginBottom: 18 }}>
              Let&apos;s<br/>build.
            </h2>
            <a href="mailto:kanishk21soni@gmail.com"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, background: 'rgba(200,96,42,0.15)', borderRadius: 8, color: '#c8602a', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(200,96,42,0.3)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(200,96,42,0.15)')}
              aria-label="Send email"
            >
              <Mail size={17} />
            </a>
          </div>
        </motion.div>

        {/* ── EXPERIENCE — bottom row col 2 ── */}
        <motion.div
          custom={4} variants={fade} initial="hidden" animate="show"
          style={{ gridColumn: '2 / 3', gridRow: '3 / 4', position: 'relative', borderRadius: 16, border: '1px solid rgba(255,255,255,0.07)', background: '#141414', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '18px 22px', cursor: 'pointer' }}
        >
          <Link href="/tenure" style={{ position: 'absolute', inset: 0, zIndex: 10 }} aria-label="View Tenure" />
          <div style={{ fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8602a' }}>Experience</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {[['Vet Care AI', 'AUG 2025—MAR 2026'], ['Fly Your Tech', 'DEC 2024—JUL 2025'], ['Traceworks', 'JUL—DEC 2024']].map(([co, yr]) => (
              <div key={co} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 6 }}>
                <span style={{ fontSize: '0.85rem' }}>{co}</span>
                <span style={{ fontSize: '0.55rem', color: '#444', letterSpacing: '0.06em' }}>{yr}</span>
              </div>
            ))}
          </div>
          <div style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 'clamp(1.4rem, 2vw, 2rem)', color: '#fff' }}>Tenure</div>
        </motion.div>

        {/* ── ABOUT ME — bottom row col 3 ── */}
        <motion.div
          custom={5} variants={fade} initial="hidden" animate="show"
          style={{ gridColumn: '3 / 4', gridRow: '3 / 4', position: 'relative', borderRadius: 16, border: '1px solid rgba(255,255,255,0.07)', background: '#141414', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '18px 22px', cursor: 'pointer' }}
        >
          <Link href="/about" style={{ position: 'absolute', inset: 0, zIndex: 10 }} aria-label="About Me" />
          <div style={{ fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8602a' }}>About Me</div>
          <div>
            <p style={{ fontSize: '0.72rem', color: '#777', lineHeight: 1.7, marginBottom: 8 }}>
              Solo engineer. Built vetcare.ai end-to-end. BCA · Jaipur, India.
            </p>
            <span style={{ fontSize: '0.58rem', color: '#c8602a', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Full Profile →</span>
          </div>
        </motion.div>

        {/* ── GITHUB — bottom row col 4 ── */}
        <motion.div
          custom={6} variants={fade} initial="hidden" animate="show"
          style={{ gridColumn: '4 / 5', gridRow: '3 / 4', borderRadius: 16, border: '1px solid rgba(255,255,255,0.07)', background: '#141414', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '18px 22px' }}
        >
          <div style={{ fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8602a' }}>Open Source</div>
          <div>
            <a
              href="https://github.com/kanishk1122" target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#888', textDecoration: 'none', transition: 'color 0.2s', marginBottom: 6 }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#888')}
            >
              <Github size={15} />
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.08em' }}>kanishk1122</span>
            </a>
            <div style={{ fontSize: '0.58rem', color: '#3a3a3a', letterSpacing: '0.05em' }}>Jaipur · +91 9887163756</div>
          </div>
        </motion.div>

      </div>

      {/* ── Footer ── */}
      <footer className="footer">
        <span>© 2026 Kanishk Soni</span>
        <div className="footer-links">
          <Link href="/projects" style={{ color: 'inherit', textDecoration: 'none' }}>Archive</Link>
          <Link href="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link>
          <a href="mailto:kanishk21soni@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>Inquiry</a>
        </div>
      </footer>
    </div>
  );
}
