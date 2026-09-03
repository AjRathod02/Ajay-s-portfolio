import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react'
import { profile } from '../data/resume'

export function Hero() {
  const reduce = useReducedMotion()
  const [titleIndex, setTitleIndex] = useState(0)

  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => {
      setTitleIndex((i) => (i + 1) % profile.titles.length)
    }, 2800)
    return () => clearInterval(id)
  }, [reduce])

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 mesh-bg" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[100px] animate-float-slow" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-[380px] w-[380px] rounded-full bg-violet/25 blur-[90px] animate-float-delayed" />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-[0.35]"
        style={{
          backgroundImage: `linear-gradient(rgba(45,212,191,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45,212,191,0.08) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          maskImage: 'linear-gradient(to bottom, transparent, black)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-[-50%] bottom-[-20%] h-[60%] animate-grid-drift opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(167,139,250,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167,139,250,0.12) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent sm:text-sm"
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
          Data analyst & full-stack — open to analytics and product-minded roles
        </motion.div>

        <motion.h1
          className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.name}
        </motion.h1>

        <div className="mt-4 h-[2.5rem] sm:h-12 md:h-14">
          <motion.p
            key={titleIndex}
            className="font-display text-xl font-semibold text-accent sm:text-2xl md:text-3xl"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            {profile.titles[titleIndex]}
          </motion.p>
        </div>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-accent"
          >
            <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden />
            {profile.email}
          </a>
          <span className="hidden h-4 w-px bg-white/15 sm:block" aria-hidden />
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-violet" aria-hidden />
            {profile.location}
          </span>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-linear-to-r from-accent to-teal-400 px-7 py-3.5 text-sm font-bold text-void shadow-lg shadow-accent/25"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="absolute inset-0 bg-white/20 opacity-0 transition group-hover:opacity-100" />
            View projects
            <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" aria-hidden />
          </motion.a>
          <motion.a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-accent/40 hover:bg-white/10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="h-4 w-4" aria-hidden />
            GitHub
          </motion.a>
          <motion.a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-violet/50 hover:bg-white/10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Linkedin className="h-4 w-4" aria-hidden />
            LinkedIn
          </motion.a>
        </motion.div>

        <motion.div
          className="absolute bottom-[-4rem] left-1/2 hidden -translate-x-1/2 md:block lg:bottom-[-5rem]"
          animate={reduce ? undefined : { y: [0, 10, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted hover:text-accent"
            aria-label="Scroll to about"
          >
            Scroll
            <span className="flex h-10 w-6 justify-center rounded-full border border-white/20 pt-2">
              <motion.span
                className="h-2 w-1 rounded-full bg-accent"
                animate={reduce ? undefined : { y: [0, 12, 0], opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
