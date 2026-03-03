import { motion } from 'motion/react'
import type { IconType } from 'react-icons'
import { TechPill } from './TechPill'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../i18n/translations'
import { RiJavaLine, RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { IoLogoNodejs } from 'react-icons/io5'
import {
  SiFastify,
  SiPostgresql,
  SiPrisma,
  SiInsomnia,
  SiJsonwebtokens,
  SiExpress,
  SiJavascript,
  SiTypescript
} from 'react-icons/si'
import { TbBrandMysql } from 'react-icons/tb'
import { FaReact, FaCss3, FaDocker, FaGithub, FaGitAlt } from 'react-icons/fa'
import { AiOutlineHtml5 } from 'react-icons/ai'

type Skill = { icon: IconType | string; name: string; emoji?: boolean }
type SkillCategoryKey = 'languages' | 'backend' | 'frontend' | 'devTools'
type SkillCategory = { key: SkillCategoryKey; skills: Skill[] }

const skillCategories: SkillCategory[] = [
  {
    key: 'languages',
    skills: [
      { icon: RiJavaLine, name: 'Java' },
      { icon: SiJavascript, name: 'JavaScript' },
      { icon: SiTypescript, name: 'TypeScript' }
    ]
  },
  {
    key: 'backend' as const,
    skills: [
      { icon: IoLogoNodejs, name: 'Node.js' },
      { icon: SiFastify, name: 'Fastify' },
      { icon: SiExpress, name: 'Express' },
      { icon: TbBrandMysql, name: 'MySQL' },
      { icon: FaDocker, name: 'Docker' },
      { icon: SiPrisma, name: 'Prisma' },
      { icon: SiPostgresql, name: 'PostgreSQL' }
    ]
  },
  {
    key: 'frontend' as const,
    skills: [
      { icon: FaReact, name: 'React' },
      { icon: RiNextjsLine, name: 'Next.js' },
      { icon: RiTailwindCssFill, name: 'Tailwind' },
      { icon: AiOutlineHtml5, name: 'HTML' },
      { icon: FaCss3, name: 'CSS' }
    ]
  },
  {
    key: 'devTools' as const,
    skills: [
      { icon: FaGitAlt, name: 'Git' },
      { icon: FaGithub, name: 'Github' },
      { icon: SiInsomnia, name: 'Insomnia' },
      { icon: SiJsonwebtokens, name: 'JWT' }
    ]
  }
]

export function SkillsSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="py-16 md:py-24 px-4 sm:px-8"
    >
      <div className="max-w-[1440px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-[40px] font-bold text-gradient-white text-center mb-12 md:mb-16"
        >
          {t.skills.heading}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-center">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, borderColor: 'rgba(0, 255, 136, 0.4)' }}
              className="glass-card-dark rounded-[20px] p-6 md:p-8 transition-all duration-300"
            >
              <h3 className="text-base md:text-lg font-semibold text-gradient-cyan-green mb-4 md:mb-5">
                {t.skills.categories[category.key]}
              </h3>
              <ul className="flex flex-wrap gap-2 md:gap-2.5 justify-center">
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    <TechPill
                      icon={skill.icon}
                      name={skill.name}
                      emoji={skill.emoji}
                    />
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
