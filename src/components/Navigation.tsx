import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../i18n/translations'

const navAnimation = {
  initial: { y: -100 },
  animate: { y: 0 },
  transition: { duration: 0.6 }
}

function Logo() {
  return (
    <div className="font-['JetBrains_Mono'] text-lg text-gradient-logo">
      &gt;_ chinninto.dev.br
    </div>
  )
}

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="font-['JetBrains_Mono'] text-xs flex items-center gap-1.5 cursor-pointer"
      aria-label="Toggle language"
    >
      <span
        className={
          language === 'en'
            ? 'text-[#00FF88]'
            : 'text-[#8892b0] hover:text-[#e0e7ff] transition-colors'
        }
      >
        EN
      </span>
      <span className="text-[#00FF88] opacity-30 select-none">·</span>
      <span
        className={
          language === 'pt'
            ? 'text-[#00FF88]'
            : 'text-[#8892b0] hover:text-[#e0e7ff] transition-colors'
        }
      >
        PT
      </span>
    </button>
  )
}

function NavLink({
  item,
  onClick
}: {
  item: { label: string; id: string }
  onClick?: () => void
}) {
  return (
    <a
      href={`#${item.id}`}
      onClick={onClick}
      className="text-[#e0e7ff] relative group cursor-pointer"
    >
      {item.label}
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00FF88] to-[#38BDF8] transition-all duration-300 group-hover:w-full" />
    </a>
  )
}

function NavSeparator() {
  return (
    <span className="text-[#00FF88] opacity-30 select-none text-xs">●</span>
  )
}

function NavLinks({ items }: { items: { label: string; id: string }[] }) {
  return (
    <div className="hidden md:flex items-center gap-6">
      {items.flatMap((item, index) =>
        index === 0
          ? [<NavLink key={item.id} item={item} />]
          : [
              <NavSeparator key={`sep-${index}`} />,
              <NavLink key={item.id} item={item} />
            ]
      )}
    </div>
  )
}

function HamburgerButton({
  isOpen,
  onClick
}: {
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer"
      aria-label="Toggle menu"
    >
      <motion.span
        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.2 }}
        className="block w-6 h-0.5 bg-[#00FF88] origin-center"
      />
      <motion.span
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="block w-6 h-0.5 bg-[#00FF88]"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.2 }}
        className="block w-6 h-0.5 bg-[#00FF88] origin-center"
      />
    </button>
  )
}

function MobileMenu({
  isOpen,
  onClose,
  items
}: {
  isOpen: boolean
  onClose: () => void
  items: { label: string; id: string }[]
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden overflow-hidden border-t border-[#00FF88]/20"
        >
          <div className="flex flex-col items-center gap-7 py-7 px-8">
            {items.map((item) => (
              <NavLink key={item.id} item={item} onClick={onClose} />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function NavContent({
  isOpen,
  onToggle,
  items
}: {
  isOpen: boolean
  onToggle: () => void
  items: { label: string; id: string }[]
}) {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-8 h-20 flex items-center justify-between">
      <Logo />
      <div className="flex items-center gap-5">
        <NavLinks items={items} />
        <LanguageToggle />
        <HamburgerButton isOpen={isOpen} onClick={onToggle} />
      </div>
    </div>
  )
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  const navItems = [
    { label: t.nav.projects, id: 'projects' },
    { label: t.nav.skills, id: 'skills' }
  ]

  return (
    <motion.nav
      {...navAnimation}
      className="fixed top-0 left-0 right-0 z-50 navbar-glass"
    >
      <NavContent
        isOpen={isOpen}
        onToggle={() => setIsOpen((prev) => !prev)}
        items={navItems}
      />
      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={navItems}
      />
    </motion.nav>
  )
}
