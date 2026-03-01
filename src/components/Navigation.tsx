import { motion } from 'motion/react'

const navItems = ['Projects', 'Technical Skillset', 'Thoughts']

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

function NavLink({ item }: { item: string }) {
  return (
    <a
      href={`#${item.toLowerCase()}`}
      className="text-[#e0e7ff] relative group cursor-pointer"
    >
      {item}
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00FF88] to-[#38BDF8] transition-all duration-300 group-hover:w-full" />
    </a>
  )
}

function NavSeparator() {
  return <span className="text-[#00FF88] opacity-30 select-none text-xs">●</span>
}

function NavLinks() {
  return (
    <div className="flex items-center gap-6">
      {navItems.flatMap((item, index) =>
        index === 0
          ? [<NavLink key={item} item={item} />]
          : [<NavSeparator key={`sep-${index}`} />, <NavLink key={item} item={item} />]
      )}
    </div>
  )
}

function NavContent() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-8 h-20 flex items-center justify-between">
      <Logo />
      <NavLinks />
    </div>
  )
}

export function Navigation() {
  return (
    <motion.nav
      {...navAnimation}
      className="fixed top-0 left-0 right-0 z-50 navbar-glass"
    >
      <NavContent />
    </motion.nav>
  )
}
