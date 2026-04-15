'use client';

import { useParams } from 'next/navigation';
import { projects } from '../../data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Layers, Code } from 'lucide-react';

export default function ProjectDetail() {
  const params = useParams();
  const project = projects.find(p => p.id === params.id);

  if (!project) return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555' }}>
      Project not found
    </div>
  );

  return (
    <main style={{ minHeight: '100vh', padding: '96px 40px 60px', background: '#0d0d0d' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#666', textDecoration: 'none', marginBottom: 16 }}>
            <ArrowLeft size={11} /> Back to Archive
          </Link>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: '0.65rem', color: '#c8602a', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Project // {project.year}
            </span>
            <h1 style={{ fontFamily: 'Instrument Serif, serif', fontSize: 'clamp(4rem, 9vw, 8rem)', fontStyle: 'italic', fontWeight: 400, lineHeight: 0.9 }}>
              {project.title}
            </h1>
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16, marginBottom: 16 }}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            style={{ aspectRatio: '16/9', borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>

          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <h3 style={{ fontFamily: 'Instrument Serif, serif', fontSize: '1.5rem', fontStyle: 'italic', fontWeight: 400, marginBottom: 14 }}>Overview</h3>
            <p style={{ color: '#888', lineHeight: 1.8, fontSize: '0.85rem' }}>{project.longDescription}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
              {project.stack.slice(0, 4).map(s => (
                <span key={s} style={{ padding: '4px 10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '999px', fontSize: '0.65rem', color: '#777' }}>
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Architecture + Implementation */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 28 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ padding: 8, background: 'rgba(200,96,42,0.1)', borderRadius: 8, color: '#c8602a' }}>
                <Layers size={18} />
              </div>
              <h3 style={{ fontFamily: 'Instrument Serif, serif', fontSize: '1.4rem', fontStyle: 'italic', fontWeight: 400 }}>Architecture</h3>
            </div>
            <p style={{ color: '#888', lineHeight: 1.8, fontSize: '0.85rem' }}>{project.architecture}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 28 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ padding: 8, background: 'rgba(200,96,42,0.1)', borderRadius: 8, color: '#c8602a' }}>
                <Code size={18} />
              </div>
              <h3 style={{ fontFamily: 'Instrument Serif, serif', fontSize: '1.4rem', fontStyle: 'italic', fontWeight: 400 }}>Implementation</h3>
            </div>
            <p style={{ color: '#888', lineHeight: 1.8, fontSize: '0.85rem' }}>{project.implementation}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 20 }}>
              {project.stack.map(s => (
                <span key={s} style={{ fontSize: '0.6rem', fontFamily: 'monospace', color: '#555', padding: '3px 8px', background: 'rgba(255,255,255,0.04)', borderRadius: 4 }}>
                  #{s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
