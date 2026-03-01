import type { IconType } from 'react-icons'
import { IoLogoNodejs } from 'react-icons/io5'
import { FaCss3 } from 'react-icons/fa'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { RiNextjsLine } from 'react-icons/ri'
import {
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
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
    'A comprehensive RESTful API for restaurant operations including order management, inventory tracking, and customer analytics. Built with scalability and performance in mind.',
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
    { method: 'GET', path: '/api/v1/menu' },
    { method: 'PUT', path: '/api/v1/menu/:id' }
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
      { icon: AiOutlineHtml5, name: 'HTML' },
      { icon: SiGooglegemini, name: 'Gemini' }
    ],
    type: 'frontend',
    githubUrl: '#',
    demoUrl: '#',
    imageUrl: 'src/assets/project-1.png',
    isLive: true
  },
  {
    title: 'Authentication Microservice',
    description:
      'Secure authentication service with JWT, refresh tokens, role-based access control, and OAuth2 integration.',
    tech: [
      { icon: IoLogoNodejs, name: 'Node.js' },
      { icon: SiNestjs, name: 'NestJS' },
      { icon: SiPostgresql, name: 'PostgreSQL' }
    ],
    type: 'backend',
    githubUrl: '#'
  },
  {
    title: 'E-commerce Platform',
    description:
      'Full-stack e-commerce solution with payment processing, inventory management, and admin dashboard.',
    tech: [
      { icon: RiNextjsLine, name: 'Next.js' },
      { icon: SiPrisma, name: 'Prisma' },
      { icon: SiMongodb, name: 'MongoDB' }
    ],
    type: 'fullstack',
    githubUrl: '#',
    demoUrl: '#'
  }
]
