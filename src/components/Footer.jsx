import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { profile } from '../data/resume'

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-28 px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-elevated via-void to-[#0d1520] p-8 sm:p-12 md:p-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-accent/20 blur-[80px] animate-pulse-glow" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-violet/20 blur-[70px]" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Let&apos;s build something <span className="gradient-text">remarkable</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              Reach out for data analyst roles, analytics collaborations, or full-stack product work.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <motion.a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-medium text-white transition hover:border-accent/40 hover:bg-accent/10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="h-5 w-5 text-accent" aria-hidden />
                {profile.email}
              </motion.a>
              <motion.a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-medium text-white transition hover:border-violet/40 hover:bg-violet/10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="h-5 w-5 text-violet" aria-hidden />
                {profile.phone}
              </motion.a>
            </div>

            <div className="mt-8 flex gap-4">
              <motion.a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-accent/40 hover:text-accent"
                whileHover={{ y: -3 }}
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-violet/40 hover:text-violet"
                whileHover={{ y: -3 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        <p className="mt-10 text-center text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. Crafted with React, Vite & Tailwind.
        </p>
      </div>
    </footer>
  )
}
