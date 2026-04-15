'use client';

import { motion } from 'framer-motion';
import { projects } from '../data';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
});

export default function Projects() {
  const [jewellers, pickmypet, drafted, vetCare] = projects;

  return (
    <div style={{
      height: '100vh',
      overflow: 'hidden',
      background: '#0d0d0d',
      display: 'flex',
      flexDirection: 'column',
      padding: '72px 18px 16px',
    }}>

      {/* ── Header ── */}
      <motion.div
        {...fade(0)}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 4px 12px',
          flexShrink: 0,
        }}
      >
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#555', textDecoration: 'none' }}>
          <ArrowLeft size={10} /> Home
        </Link>
        <span style={{ fontSize: '0.58rem', color: '#333', letterSpacing: '0.1em', textTransform: 'uppercase' }}>4 Projects · 2024—2026</span>
      </motion.div>

      {/* ── Bento Grid ──
           Three columns, two rows — asymmetric weights
           col: 1fr | 1.5fr | 1fr
           row: 1.15fr | 0.85fr

           [Vet Care AI – tall, left]  [drafted.jobs – top right, spans 2 cols    ]
           [Vet Care AI – tall, left]  [Shubham – mid ] [PickMyPet – small accent ]
      ── */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1.5fr 1fr',
        gridTemplateRows: '1.15fr 0.85fr',
        gap: 10,
        minHeight: 0,
      }}>

        {/* ── Vet Care AI — tall left ── */}
        <motion.div
          {...fade(0.04)}
          style={{ gridColumn: '1 / 2', gridRow: '1 / 3', position: 'relative', borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', cursor: 'pointer' }}
        >
          <Link href={`/projects/${vetCare.id}`} style={{ position: 'absolute', inset: 0, zIndex: 20 }} />
          <img
            src={vetCare.image}
            alt={vetCare.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(60%) brightness(0.6)', transition: 'filter 0.6s, transform 0.7s' }}
            onMouseEnter={e => { e.currentTarget.style.filter = 'grayscale(0%) brightness(0.75)'; e.currentTarget.style.transform = 'scale(1.04)'; }}
            onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(60%) brightness(0.6)'; e.currentTarget.style.transform = 'scale(1)'; }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)', zIndex: 1 }} />

          {/* Top badge */}
          <div style={{ position: 'absolute', top: 18, left: 18, zIndex: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#c8602a', animation: 'pulse 2s ease infinite' }} />
            <span style={{ fontSize: '0.55rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888' }}>Live · vetcare.ai</span>
          </div>

          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '22px 22px', zIndex: 10 }}>
            <div style={{ fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8602a', marginBottom: 7 }}>
              {vetCare.role} · {vetCare.year}
            </div>
            <h2 style={{ fontFamily: 'Instrument Serif, serif', fontSize: 'clamp(1.4rem, 2.2vw, 2.2rem)', fontStyle: 'italic', fontWeight: 400, lineHeight: 1.08, marginBottom: 10 }}>
              {vetCare.title}
            </h2>
            <p style={{ fontSize: '0.7rem', color: '#999', lineHeight: 1.65, marginBottom: 12 }}>
              {vetCare.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {vetCare.stack.slice(0, 4).map(s => (
                <span key={s} style={{ fontSize: '0.52rem', color: '#666', padding: '2px 7px', background: 'rgba(255,255,255,0.05)', borderRadius: 999 }}>{s}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── drafted.jobs — wide top (spans 2 cols) ── */}
        <motion.div
          {...fade(0.08)}
          style={{ gridColumn: '2 / 4', gridRow: '1 / 2', position: 'relative', borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', cursor: 'pointer', background: '#111' }}
        >
          <Link href={`/projects/${drafted.id}`} style={{ position: 'absolute', inset: 0, zIndex: 20 }} />
          <img
            src={drafted.image}
            alt={drafted.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(50%) brightness(0.45)', transition: 'filter 0.6s, transform 0.7s' }}
            onMouseEnter={e => { e.currentTarget.style.filter = 'grayscale(0%) brightness(0.6)'; e.currentTarget.style.transform = 'scale(1.03)'; }}
            onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(50%) brightness(0.45)'; e.currentTarget.style.transform = 'scale(1)'; }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 100%)', zIndex: 1 }} />

          <div style={{ position: 'absolute', inset: 0, padding: '24px 28px', zIndex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* Top row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8602a', marginBottom: 8 }}>
                  {drafted.role} · {drafted.year}
                </div>
                <h2 style={{ fontFamily: 'Instrument Serif, serif', fontSize: 'clamp(2rem, 3.5vw, 4rem)', fontStyle: 'italic', fontWeight: 400, lineHeight: 0.95 }}>
                  {drafted.title}
                </h2>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.55rem', color: '#555', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#c8602a', animation: 'pulse 2s ease infinite' }} />
                Active
              </div>
            </div>
            {/* Bottom row */}
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16 }}>
              <p style={{ fontSize: '0.72rem', color: '#999', lineHeight: 1.7, maxWidth: 480 }}>
                {drafted.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, maxWidth: 220, justifyContent: 'flex-end', flexShrink: 0 }}>
                {drafted.stack.slice(0, 5).map(s => (
                  <span key={s} style={{ fontSize: '0.52rem', color: '#666', padding: '2px 7px', background: 'rgba(255,255,255,0.05)', borderRadius: 999 }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Shubham Jewellers — mid bottom ── */}
        <motion.div
          {...fade(0.12)}
          style={{ gridColumn: '2 / 3', gridRow: '2 / 3', position: 'relative', borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', cursor: 'pointer' }}
        >
          <Link href={`/projects/${jewellers.id}`} style={{ position: 'absolute', inset: 0, zIndex: 20 }} />
          <img
            src={jewellers.image}
            alt={jewellers.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(60%) brightness(0.5)', transition: 'filter 0.6s, transform 0.7s' }}
            onMouseEnter={e => { e.currentTarget.style.filter = 'grayscale(0%) brightness(0.7)'; e.currentTarget.style.transform = 'scale(1.04)'; }}
            onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(60%) brightness(0.5)'; e.currentTarget.style.transform = 'scale(1)'; }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)', zIndex: 1 }} />

          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '18px 20px', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <div style={{ fontSize: '0.52rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8602a', marginBottom: 5 }}>{jewellers.role}</div>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', fontSize: 'clamp(1.1rem, 1.8vw, 1.7rem)', fontStyle: 'italic', fontWeight: 400 }}>
                {jewellers.title}
              </h2>
            </div>
            {'url' in jewellers && jewellers.url && (
              <a
                href={jewellers.url as string}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.58rem', color: '#c8602a', textDecoration: 'none', zIndex: 30, position: 'relative' }}
                onClick={e => e.stopPropagation()}
              >
                Live <ArrowUpRight size={10} />
              </a>
            )}
          </div>
        </motion.div>

        {/* ── PickMyPet — small accent bottom-right ── */}
        <motion.div
          {...fade(0.16)}
          style={{ gridColumn: '3 / 4', gridRow: '2 / 3', position: 'relative', borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', cursor: 'pointer' }}
        >
          <Link href={`/projects/${pickmypet.id}`} style={{ position: 'absolute', inset: 0, zIndex: 20 }} />
          <img
            src={pickmypet.image}
            alt={pickmypet.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(60%) brightness(0.5)', transition: 'filter 0.6s, transform 0.7s' }}
            onMouseEnter={e => { e.currentTarget.style.filter = 'grayscale(0%) brightness(0.75)'; e.currentTarget.style.transform = 'scale(1.05)'; }}
            onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(60%) brightness(0.5)'; e.currentTarget.style.transform = 'scale(1)'; }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)', zIndex: 1 }} />

          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '18px 20px', zIndex: 10 }}>
            <div style={{ fontSize: '0.52rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8602a', marginBottom: 5 }}>{pickmypet.role}</div>
            <h2 style={{ fontFamily: 'Instrument Serif, serif', fontSize: 'clamp(1.1rem, 1.8vw, 1.7rem)', fontStyle: 'italic', fontWeight: 400, marginBottom: 8 }}>
              {pickmypet.title}
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {pickmypet.stack.slice(0, 3).map(s => (
                <span key={s} style={{ fontSize: '0.5rem', color: '#666', padding: '2px 6px', background: 'rgba(255,255,255,0.05)', borderRadius: 999 }}>{s}</span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      {/* ── Footer ── */}
      <motion.div
        {...fade(0.2)}
        style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 4px 0', fontSize: '0.56rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2e2e2e', flexShrink: 0 }}
      >
        <span>© 2026 Kanishk Soni</span>
        <span>Full Stack Developer</span>
      </motion.div>
    </div>
  );
}
