import { motion } from 'framer-motion'
import {
  Award,
  Briefcase,
  Code2,
  GraduationCap,
  Layers,
  Medal,
  Rocket,
} from 'lucide-react'
import {
  achievements,
  certifications,
  education,
  experience,
  projects,
  skillGroups,
  summary,
} from '../data/resume'
import { FadeIn, Stagger, StaggerItem } from './Motion'

export function AboutSection() {
  return (
    <FadeIn as="section" id="about" className="scroll-mt-28 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">About</p>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Building products that <span className="gradient-text">move metrics</span>
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">{summary}</p>
      </div>
    </FadeIn>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet">Stack</p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Technical skills</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Languages, frameworks, and practices I use to ship reliable software.
          </p>
        </FadeIn>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <StaggerItem key={group.title}>
              <motion.div
                className="card-glass group h-full p-6"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent ring-1 ring-accent/25">
                    <Layers className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">{group.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="inline-block rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-foreground/90 transition group-hover:border-accent/20 group-hover:bg-accent/5">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Career</p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Experience</h2>
        </FadeIn>

        <div className="relative mt-14 space-y-10 pl-0 sm:pl-8 md:pl-12">
          <div
            className="absolute left-[11px] top-2 bottom-2 hidden w-px bg-linear-to-b from-accent via-violet/50 to-transparent sm:block md:left-[15px]"
            aria-hidden
          />
          {experience.map((job, i) => (
            <FadeIn key={job.company} delay={i * 0.08} className="relative">
              <span className="absolute left-0 top-2 hidden h-3 w-3 rounded-full border-2 border-accent bg-void shadow-[0_0_12px_rgba(45,212,191,0.8)] sm:block md:left-1" />
              <div className="card-glass p-6 sm:ml-4 sm:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{job.role}</h3>
                    <p className="mt-1 flex items-center gap-2 text-accent">
                      <Briefcase className="h-4 w-4" aria-hidden />
                      {job.company}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-muted">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-6 space-y-3 text-muted">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-[15px] leading-relaxed sm:text-base">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-accent to-violet" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet">Selected work</p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Projects</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Full-stack systems, commerce, and analytics—built for real users and business outcomes.
          </p>
        </FadeIn>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <StaggerItem key={p.name}>
              <motion.article
                className="card-glass group relative flex h-full flex-col overflow-hidden p-6 sm:p-8"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 380, damping: 22 }}
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent/20" />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-dim text-violet ring-1 ring-violet/30">
                      <Rocket className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">{p.name}</h3>
                      <p className="text-sm font-medium text-accent">{p.tag}</p>
                    </div>
                  </div>
                  <Code2 className="h-5 w-5 text-white/20 transition group-hover:text-accent/80" aria-hidden />
                </div>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted sm:text-base">{p.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-white/10 bg-void/50 px-2.5 py-1 text-xs font-medium text-foreground/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <FadeIn>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Education</p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Learning path</h2>
          <ul className="mt-10 space-y-6">
            {education.map((ed) => (
              <li key={ed.degree} className="card-glass flex gap-4 p-5 sm:p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <GraduationCap className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{ed.degree}</h3>
                  <p className="text-muted">{ed.school}</p>
                  {(ed.period || ed.detail) && (
                    <p className="mt-2 text-sm text-foreground/70">
                      {[ed.period, ed.detail].filter(Boolean).join(' · ')}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet">Credentials</p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Certifications</h2>
          <ul className="mt-10 space-y-3">
            {certifications.map((c) => (
              <li
                key={c}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-accent/25"
              >
                <Award className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <span className="text-[15px] text-foreground/90 sm:text-base">{c}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 card-glass border-accent/20 bg-accent/5 p-6 sm:p-8">
            <div className="flex items-center gap-3 text-accent">
              <Medal className="h-6 w-6" aria-hidden />
              <h3 className="font-display text-lg font-bold text-white">Achievements</h3>
            </div>
            <ul className="mt-4 space-y-2 text-muted">
              {achievements.map((a) => (
                <li key={a} className="flex gap-2 text-[15px] sm:text-base">
                  <span className="text-accent">✦</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
