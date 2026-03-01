import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const navItems = [
  { label: 'Projects', id: 'projects' },
  { label: 'Technical Skillset', id: 'skills' }
  // { label: 'Thoughts', id: 'thoughts' }
]

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

function NavLinks() {
  return (
    <div className="hidden md:flex items-center gap-6">
      {navItems.flatMap((item, index) =>
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
  onClose
}: {
  isOpen: boolean
  onClose: () => void
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
            {navItems.map((item) => (
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
  onToggle
}: {
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-8 h-20 flex items-center justify-between">
      <Logo />
      <NavLinks />
      <HamburgerButton isOpen={isOpen} onClick={onToggle} />
    </div>
  )
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      {...navAnimation}
      className="fixed top-0 left-0 right-0 z-50 navbar-glass"
    >
      <NavContent isOpen={isOpen} onToggle={() => setIsOpen((prev) => !prev)} />
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </motion.nav>
  )
}
