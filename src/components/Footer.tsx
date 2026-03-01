import { motion } from 'motion/react'

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8"
      style={{
        borderTop: '1px solid rgba(0, 255, 136, 0.2)',
        background: 'rgba(10, 10, 10, 0.5)',
        backdropFilter: 'blur(20px)'
      }}
    >
      <div className="max-w-[1440px] mx-auto text-center">
        <p className="text-sm text-[#00FF88]">
          © 2026 Marcelle Alves. Fueled by caffeine, curiosity, and the
          occasional existential crisis about semicolons.
        </p>
      </div>
    </motion.footer>
  )
}
