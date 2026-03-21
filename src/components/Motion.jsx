import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

const motionMap = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  header: motion.header,
  footer: motion.footer,
  nav: motion.nav,
  ul: motion.ul,
  li: motion.li,
}

export function FadeIn({ children, className = '', delay = 0, as = 'div', ...props }) {
  const reduce = useReducedMotion()
  const MotionTag = motionMap[as] ?? motion.div
  return (
    <MotionTag
      className={className}
      initial={reduce ? undefined : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={reduce ? undefined : { duration: 0.65, delay, ease }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}

export function Stagger({ children, className = '', stagger = 0.08 }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : 'hidden'}
      whileInView={reduce ? undefined : 'show'}
      viewport={{ once: true, margin: '-40px' }}
      variants={
        reduce
          ? undefined
          : {
              hidden: {},
              show: {
                transition: { staggerChildren: stagger, delayChildren: 0.05 },
              },
            }
      }
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={
        reduce
          ? undefined
          : {
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
            }
      }
    >
      {children}
    </motion.div>
  )
}
