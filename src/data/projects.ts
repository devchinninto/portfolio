import type { IconType } from 'react-icons'
import { IoLogoNodejs } from 'react-icons/io5'
import { FaCss3 } from 'react-icons/fa'
// import { RiNextjsLine } from 'react-icons/ri'
import {
  SiExpress,
  SiFastify,
  SiPostgresql,
  // SiPrisma,
  SiJavascript,
  SiGooglegemini,
  SiSqlite,
  SiKnexdotjs,
  // SiRailway,
  // SiSwagger,
  SiTypescript
} from 'react-icons/si'

// --- Types ---
export type Tech = { icon: IconType; name: string }
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
export type Route = { method: HttpMethod; path: string }
export type ProjectType = 'frontend' | 'backend' | 'fullstack'

export type FeaturedProjectData = {
  title: string
  description: string
  tech: Tech[]
  routes: Route[]
  githubUrl: string
  type: ProjectType
  isLive?: boolean
}

export type ProjectData = {
  title: string
  description: string
  tech: Tech[]
  type: ProjectType
  githubUrl: string
  demoUrl?: string
  imageUrl?: string
  isLive?: boolean
}

// --- Data ---
export const featuredProject: FeaturedProjectData = {
  title: 'Restaurant Management API',
  description:
    'A REST API for restaurant management, handling products, tables, table sessions, and orders. Built with Node.js, Express, and TypeScript.',
  tech: [
    { icon: SiTypescript, name: 'TypeScript' },
    { icon: IoLogoNodejs, name: 'Node.js' },
    { icon: SiExpress, name: 'Express' },
    { icon: SiSqlite, name: 'Sqlite3' },
    { icon: SiKnexdotjs, name: 'Knex' }
    // { icon: SiRailway, name: 'Railway' },
    // { icon: SiSwagger, name: 'Swagger' }
  ],
  routes: [
    { method: 'GET', path: '/api/v1/orders' },
    { method: 'POST', path: '/api/v1/orders' },
    { method: 'GET', path: '/api/v1/tables' },
    { method: 'PUT', path: '/api/v1/tables/:id' },
    { method: 'POST', path: '/api/v1/products' }
  ],
  githubUrl: '#',
  type: 'backend',
  isLive: true
}

export const projects: ProjectData[] = [
  {
    title: 'Gaming AI Assistant',
    description: 'An AI assistant to improve gaming sessions.',
    tech: [
      { icon: SiJavascript, name: 'JavaScript' },
      { icon: FaCss3, name: 'CSS' },
      { icon: SiGooglegemini, name: 'Gemini' }
    ],
    type: 'frontend',
    githubUrl: '#',
    demoUrl: '#',
    imageUrl: 'src/assets/project-1.png',
    isLive: true
  },
  {
    title: 'Daily Diet API',
    description:
      "REST API for tracking daily meals and diet compliance. Built as a practical challenge from Rocketseat's Node.js course.",
    tech: [
      { icon: IoLogoNodejs, name: 'Node.js' },
      { icon: SiFastify, name: 'Fastify' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiPostgresql, name: 'PostgreSQL' }
    ],
    type: 'backend',
    githubUrl: '#'
  }
  // {
  //   title: 'E-commerce Platform',
  //   description:
  //     'Full-stack e-commerce solution with payment processing, inventory management, and admin dashboard.',
  //   tech: [
  //     { icon: RiNextjsLine, name: 'Next.js' },
  //     { icon: SiPrisma, name: 'Prisma' },
  //     { icon: SiMongodb, name: 'MongoDB' }
  //   ],
  //   type: 'fullstack',
  //   githubUrl: '#',
  //   demoUrl: '#'
  // }
]
