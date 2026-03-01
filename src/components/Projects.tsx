import { motion } from 'motion/react'
import { FaGithub } from 'react-icons/fa'
import { LuTerminal, LuExternalLink } from 'react-icons/lu'
import { TechPill } from './TechPill'
import {
  featuredProject,
  projects,
  type HttpMethod,
  type Route,
  type ProjectType,
  type FeaturedProjectData,
  type ProjectData
} from '../data/projects'

// --- Data ---
const methodColors: Record<HttpMethod, string> = {
  GET: '#38BDF8',
  POST: '#00FF88',
  PUT: '#F472B6',
  DELETE: '#F87171',
  PATCH: '#FBBF24'
}

// --- Sub-components ---
const typeConfig: Record<
  ProjectType,
  { label: string; color: string; bg: string }
> = {
  frontend: {
    label: 'Frontend',
    color: '#38BDF8',
    bg: 'rgba(56,189,248,0.08)'
  },
  backend: { label: 'Backend', color: '#00FF88', bg: 'rgba(0,255,136,0.08)' },
  fullstack: {
    label: 'Full Stack',
    color: '#A78BFA',
    bg: 'rgba(167,139,250,0.08)'
  }
}

function TypePill({ type }: { type: ProjectType }) {
  const { label, color, bg } = typeConfig[type]
  return (
    <span
      className="text-xs font-medium px-2.5 py-1 rounded-full border"
      style={{ color, background: bg, borderColor: `${color}44` }}
    >
      {label}
    </span>
  )
}

function LiveBadge() {
  return (
    <span className="flex items-center gap-1.5 text-xs font-medium text-[#00FF88]">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF88] opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF88]" />
      </span>
      Live
    </span>
  )
}

function SectionTitle() {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-[40px] font-bold text-gradient-white text-center mb-16"
    >
      Curated Projects
    </motion.h2>
  )
}

function TerminalRoute({ method, path }: Route) {
  return (
    <div>
      <span style={{ color: methodColors[method] }}>
        {method.padEnd(4, ' ')}
      </span>{' '}
      <span className="text-[#9DF7BD]">{path}</span>
    </div>
  )
}

function TerminalWindow({ routes }: { routes: Route[] }) {
  return (
    <div
      className="rounded-2xl p-7"
      style={{
        background: 'rgba(15, 15, 35, 0.6)',
        border: '1px solid rgba(0, 255, 136, 0.2)'
      }}
    >
      <div className="flex items-center gap-2 mb-6">
        <LuTerminal className="w-4 h-4 text-[#00FF88]" />
        <span
          className="font-['JetBrains_Mono'] text-[#00FF88] text-sm"
          style={{ textShadow: '0 0 10px rgba(0, 255, 136, 0.5)' }}
        >
          &gt;_ api.restaurant.local
        </span>
      </div>
      <pre className="font-['JetBrains_Mono'] text-sm leading-relaxed">
        <code className="flex flex-col gap-0.5">
          {routes.map((route) => (
            <TerminalRoute key={`${route.method}-${route.path}`} {...route} />
          ))}
        </code>
      </pre>
    </div>
  )
}

function FeaturedProjectInfo({
  title,
  description,
  tech,
  githubUrl,
  type,
  isLive
}: Omit<FeaturedProjectData, 'routes'>) {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <TypePill type={type} />
          {isLive && <LiveBadge />}
        </div>
        <h3 className="text-[28px] text-gradient-white mb-4">{title}</h3>
        <p className="text-[#c7d2fe] leading-relaxed mb-6">{description}</p>
        <ul className="flex flex-wrap gap-2.5 mb-6">
          {tech.map((t) => (
            <li key={t.name}>
              <TechPill icon={t.icon} name={t.name} />
            </li>
          ))}
        </ul>
      </div>
      <a
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 px-8 py-4 bg-[#00FF88] text-[#0A0A0A] rounded-xl font-medium transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,255,136,0.4)] hover:scale-105 w-full lg:w-auto"
      >
        View Code
      </a>
    </div>
  )
}

function FeaturedProject({
  title,
  description,
  tech,
  routes,
  type,
  isLive
}: FeaturedProjectData) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-[24px] p-10 mb-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <TerminalWindow routes={routes} />
        <FeaturedProjectInfo
          title={title}
          description={description}
          tech={tech}
          githubUrl={''}
          type={type}
          isLive={isLive}
        />
      </div>
    </motion.div>
  )
}

function ProjectCardThumbnail({
  type,
  imageUrl,
  title
}: {
  type: ProjectType
  imageUrl?: string
  title: string
}) {
  if (imageUrl) {
    return (
      <div
        className="h-[200px] rounded-t-[20px] overflow-hidden border-b"
        style={{ borderColor: 'rgba(0, 255, 136, 0.2)' }}
      >
        <img
          src={imageUrl}
          alt={`${title} screenshot`}
          className="w-full h-full object-cover"
        />
      </div>
    )
  }

  return (
    <div
      className="h-[200px] rounded-t-[20px] flex items-center justify-center border-b"
      style={{
        background:
          type === 'frontend'
            ? 'linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(0, 255, 136, 0.1) 100%)'
            : 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(244, 114, 182, 0.1) 100%)',
        borderColor: 'rgba(0, 255, 136, 0.2)'
      }}
    >
      {type === 'frontend' ? (
        <span className="font-['JetBrains_Mono'] text-[#38BDF8] opacity-50">
          [ Project Screenshot ]
        </span>
      ) : (
        <LuTerminal className="w-16 h-16 text-[#00FF88] opacity-50" />
      )}
    </div>
  )
}

function ProjectCardActions({
  githubUrl,
  demoUrl
}: {
  githubUrl: string
  demoUrl?: string
}) {
  return (
    <div className="flex gap-3">
      <a
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-transparent border border-[#00FF88] text-[#00FF88] rounded-lg text-sm font-medium transition-all duration-300 hover:bg-[rgba(0,255,136,0.1)]"
      >
        <FaGithub className="w-4 h-4" />
        Code
      </a>
      {demoUrl && (
        <a
          href={demoUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-transparent border border-[#38BDF8] text-[#38BDF8] rounded-lg text-sm font-medium transition-all duration-300 hover:bg-[rgba(56,189,248,0.1)]"
        >
          <LuExternalLink className="w-4 h-4" />
          Demo
        </a>
      )}
    </div>
  )
}

function ProjectCard({
  project,
  index
}: {
  project: ProjectData
  index: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="glass-card rounded-[20px] flex flex-col transition-all duration-300"
    >
      <ProjectCardThumbnail
        type={project.type}
        imageUrl={project.imageUrl}
        title={project.title}
      />
      <div className="p-7 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <TypePill type={project.type} />
          {project.isLive && <LiveBadge />}
        </div>
        <h3 className="text-[22px] text-gradient-white mb-3">
          {project.title}
        </h3>
        <p className="text-sm text-[#c7d2fe] leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>
        <ul className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <li key={t.name}>
              <TechPill icon={t.icon} name={t.name} />
            </li>
          ))}
        </ul>
        <ProjectCardActions
          githubUrl={project.githubUrl}
          demoUrl={project.demoUrl}
        />
      </div>
    </motion.article>
  )
}

function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" aria-label="Curated Projects" className="py-24 px-8">
      <div className="max-w-[1440px] mx-auto">
        <SectionTitle />
        <FeaturedProject {...featuredProject} />
        <ProjectsGrid />
      </div>
    </section>
  )
}
