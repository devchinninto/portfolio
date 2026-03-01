import { motion } from 'motion/react'
import type { IconType } from 'react-icons'

interface TechPillProps {
  icon: IconType | string
  name: string
  emoji?: boolean
}

export function TechPill({ icon, name, emoji = false }: TechPillProps) {
  const isComponent = typeof icon === 'function'
  const IconComponent = isComponent ? (icon as IconType) : null

  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.05 }}
      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cursor-default"
      style={{
        background: 'rgba(56, 189, 248, 0.08)',
        border: '1px solid rgba(56, 189, 248, 0.2)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <span
        className={`w-[18px] h-[18px] shrink-0 flex items-center justify-center rounded ${
          emoji || isComponent
            ? ''
            : 'bg-gradient-to-br from-[rgba(56,189,248,0.2)] to-[rgba(0,255,136,0.2)]'
        }`}
      >
        {IconComponent ? (
          <IconComponent size={16} className="text-[#38BDF8]" />
        ) : (
          <span
            className={
              emoji ? 'text-sm' : 'text-[10px] font-bold text-[#38BDF8]'
            }
          >
            {icon as string}
          </span>
        )}
      </span>
      <span className="text-[13px] font-medium text-white whitespace-nowrap">
        {name}
      </span>
    </motion.span>
  )
}
