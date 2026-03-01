import { motion } from 'motion/react'

// Main bio content
const HERO_CONTENT = {
  name: 'Marcelle Alves',
  role: 'Software Engineering Student',
  bio: 'Passionate about building scalable backend systems and exploring cloud infrastructure. Currently focusing on modern development practices and DevOps automation.',
  avatar: 'src/assets/pfp.jpg',
  buttons: [
    { label: 'View Projects', variant: 'primary' as const, href: '#projects' },
    { label: 'Download CV', variant: 'outline' as const, href: '#' }
  ]
}

// Code-style bio
const DEV_PROFILE = {
  name: 'Marcelle Alves',
  role: 'Backend Engineer',
  stack: ['Node.js', 'TypeScript'],
  learning: ['Docker', 'React'],
  available: true
}

// Color of the 'buttons' on the code editor
function WindowControls() {
  return (
    <div className="flex gap-2 mb-5 lg:mb-6">
      <div className="w-3 h-3 lg:w-3.5 lg:h-3.5 rounded-full bg-gradient-to-br from-red-500 to-red-600" />
      <div className="w-3 h-3 lg:w-3.5 lg:h-3.5 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600" />
      <div className="w-3 h-3 lg:w-3.5 lg:h-3.5 rounded-full bg-gradient-to-br from-green-500 to-green-600" />
    </div>
  )
}

type ButtonVariant = 'primary' | 'outline'

// Main buttons style
function HeroButton({
  label,
  variant,
  href
}: {
  label: string
  variant: ButtonVariant
  href: string
}) {
  const base =
    'px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-medium text-sm sm:text-base transition-all duration-300'

  const styles: Record<ButtonVariant, string> = {
    primary: `${base} bg-[#00FF88] text-[#0A0A0A] hover:shadow-[0_4px_20px_rgba(0,255,136,0.4)] hover:scale-105`,
    outline: `${base} border border-[#00FF88] text-[#00FF88] hover:bg-[rgba(0,255,136,0.1)] hover:shadow-[0_4px_20px_rgba(0,255,136,0.2)]`
  }

  return <a href={href} className={styles[variant]}>{label}</a>
}

// Avatar / profile photo
// Returns picture if true, otherwise, returns my initials.
function Avatar({ src, name }: { src: string; name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)

  return (
    <div className="flex justify-center lg:justify-start">
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full p-[2px] bg-gradient-to-br from-[#00FF88] to-[#38BDF8] shadow-[0_0_24px_rgba(0,255,136,0.35)]">
        <div className="w-full h-full rounded-full overflow-hidden bg-[#111]">
          {src ? (
            <img src={src} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-2xl sm:text-3xl font-bold text-gradient-logo select-none">
              {initials}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Syntax highlight color tokens
const keywordColor = 'text-[#38BDF8]'
const stringColor = 'text-[#9DF7BD]'
const symbolColor = 'text-white'

function StringValue({ value }: { value: string }) {
  return <span className={stringColor}>'{value}'</span>
}

function ArrayValue({ items }: { items: string[] }) {
  return (
    <>
      <span className={symbolColor}>[</span>
      {items.map((item, index) => (
        <span key={item}>
          <StringValue value={item} />
          {index < items.length - 1 && <span className={symbolColor}>, </span>}
        </span>
      ))}
      <span className={symbolColor}>]</span>
    </>
  )
}

// Renders DEV_PROFILE as a syntax-highlighted JS object
function CodeEditorCard() {
  const { name, role, stack, learning, available } = DEV_PROFILE

  return (
    <div className="glass-code-card rounded-[20px] p-4 sm:p-6 lg:p-7 overflow-x-auto">
      <WindowControls />
      <pre className="font-['JetBrains_Mono'] text-[11px] sm:text-[13px] lg:text-[14px] leading-relaxed">
        <code>
          <span className={keywordColor}>const</span>{' '}
          <span className={symbolColor}>developer</span>{' '}
          <span className={keywordColor}>=</span>{' '}
          <span className={symbolColor}>{'{'}</span>
          {'\n'}
          {'  '}
          <span className={symbolColor}>name:</span>{' '}
          <StringValue value={name} />
          <span className={symbolColor}>,</span>
          {'\n'}
          {'  '}
          <span className={symbolColor}>role:</span>{' '}
          <StringValue value={role} />
          <span className={symbolColor}>,</span>
          {'\n'}
          {'  '}
          <span className={symbolColor}>stack:</span>{' '}
          <ArrayValue items={stack} />
          <span className={symbolColor}>,</span>
          {'\n'}
          {'  '}
          <span className={symbolColor}>learning:</span>{' '}
          <ArrayValue items={learning} />
          <span className={symbolColor}>,</span>
          {'\n'}
          {'  '}
          <span className={symbolColor}>available:</span>{' '}
          <span className={keywordColor}>{String(available)}</span>
          {'\n'}
          <span className={symbolColor}>{'}'}</span>
          <span className={keywordColor}>;</span>
        </code>
      </pre>
    </div>
  )
}

// Hero
export function Hero() {
  const { name, role, bio, avatar, buttons } = HERO_CONTENT

  return (
    <section className="pt-24 pb-16 px-4 sm:pt-28 sm:pb-20 sm:px-6 lg:pt-32 lg:pb-24 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left — text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            <Avatar src={avatar} name={name} />

            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-tight text-gradient-white">
                {name}
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] text-[#00FF88]">
                {role}
              </h2>
              <p className="text-[#c7d2fe] text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                {bio}
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              {buttons.map((btn) => (
                <HeroButton key={btn.label} {...btn} />
              ))}
            </div>
          </motion.div>

          {/* Right — code card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CodeEditorCard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
