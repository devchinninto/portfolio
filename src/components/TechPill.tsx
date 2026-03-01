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
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full cursor-default bg-white/5 border border-white/10"
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <span className="w-[16px] h-[16px] shrink-0 flex items-center justify-center">
        {IconComponent ? (
          <IconComponent size={14} className="text-[#38BDF8]" />
        ) : (
          <span className={emoji ? 'text-sm' : 'text-[10px] font-bold text-[#38BDF8]'}>
            {icon as string}
          </span>
        )}
      </span>
      <span className="text-xs font-medium text-gray-300 whitespace-nowrap">
        {name}
      </span>
    </motion.span>
  )
}
