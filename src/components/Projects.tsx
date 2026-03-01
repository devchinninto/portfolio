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

const methodStatus: Record<HttpMethod, string> = {
  GET: '200 OK',
  POST: '201 Created',
  PUT: '200 OK',
  DELETE: '204 No Content',
  PATCH: '200 OK'
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
      className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-gradient-white text-center mb-8 sm:mb-12 lg:mb-16"
    >
      Curated Projects
    </motion.h2>
  )
}

function TerminalWindow({ routes }: { routes: Route[] }) {
  return (
    <div
      className="w-full rounded-lg overflow-hidden shadow-2xl"
      style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      {/* Window Header */}
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{ background: '#1A1A1A', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs font-mono text-gray-500">terminal</span>
      </div>

      {/* Terminal Output */}
      <div className="p-3 sm:p-4 lg:p-5 font-['JetBrains_Mono'] text-[10px] sm:text-xs lg:text-sm space-y-1.5 overflow-x-auto">
        {/* Command */}
        <div>
          <span className="text-[#00FF88]">$ </span>
          <span className="text-[#00FF88] font-bold">npm start</span>
        </div>

        {/* Startup logs */}
        <div className="text-gray-500">Starting server...</div>
        <div>
          <span className="text-[#38BDF8]">[INFO] </span>
          <span className="text-gray-300">Server running on port </span>
          <span className="text-[#00FF88]">3000</span>
        </div>
        <div>
          <span className="text-[#00FF88]">[SUCCESS] </span>
          <span className="text-gray-300">Database connected</span>
        </div>
        <div>
          <span className="text-[#00FF88]">[SUCCESS] </span>
          <span className="text-gray-300">All routes loaded</span>
        </div>

        {/* Spacer */}
        <div className="py-0.5" />

        {/* Routes as request logs */}
        {routes.map((route) => (
          <div key={`${route.method}-${route.path}`} className="flex items-center gap-1.5 sm:gap-2">
            <span
              className="font-bold w-12 sm:w-14 shrink-0"
              style={{ color: methodColors[route.method] }}
            >
              {route.method}
            </span>
            <span className="text-gray-300">{route.path}</span>
            <span className="text-gray-600">→</span>
            <span className="text-gray-500">{methodStatus[route.method]}</span>
          </div>
        ))}

        {/* Cursor */}
        <div className="flex items-center pt-0.5">
          <span className="inline-block w-2 h-4 bg-gray-400 animate-pulse" />
        </div>
      </div>
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
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <TypePill type={type} />
          {isLive && <LiveBadge />}
        </div>
        <h3 className="text-[28px] text-gradient-white mb-4">{title}</h3>
        <p className="text-[#c7d2fe] leading-relaxed">{description}</p>
      </div>
      <div className="mt-5 sm:mt-0">
        <ul className="flex flex-wrap gap-2.5 mb-5">
          {tech.map((t) => (
            <li key={t.name}>
              <TechPill icon={t.icon} name={t.name} />
            </li>
          ))}
        </ul>
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#00FF88] hover:text-[#00FF88] text-gray-300 text-sm font-medium transition-colors w-full justify-center"
        >
          <FaGithub className="w-4 h-4" />
          View Code
        </a>
      </div>
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
      className="glass-card rounded-[24px] p-5 sm:p-8 lg:p-10 mb-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
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
        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#00FF88] hover:text-[#00FF88] text-gray-300 text-sm font-medium transition-colors"
      >
        <FaGithub className="w-4 h-4" />
        Code
      </a>
      {demoUrl && (
        <a
          href={demoUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#00FF88] text-black text-sm font-medium hover:bg-[#00FF88]/90 transition-colors"
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
    <section id="projects" aria-label="Curated Projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <SectionTitle />
        <FeaturedProject {...featuredProject} />
        <ProjectsGrid />
      </div>
    </section>
  )
}
