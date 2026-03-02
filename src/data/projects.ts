import type { IconType } from 'react-icons'
import project1Img from '../assets/project-1.png'
import project2Img from '../assets/project-2.gif'
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
  routes?: Route[]
  isLive?: boolean
}

// --- Data ---
export const featuredProject: FeaturedProjectData = {
  title: 'Restaurant Management API',
  description:
    'A REST API for restaurant management, handling products, tables, table sessions, and orders.',
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
  githubUrl: 'https://github.com/devchinninto/restaurant_api',
  type: 'backend',
  isLive: true
}

export const projects: ProjectData[] = [
  {
    title: 'Daily Diet API',
    description: 'REST API for tracking daily meals and diet compliance.',
    tech: [
      { icon: IoLogoNodejs, name: 'Node.js' },
      { icon: SiFastify, name: 'Fastify' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiPostgresql, name: 'PostgreSQL' }
    ],
    type: 'backend',
    githubUrl: 'https://github.com/devchinninto/daily-diet-api',
    routes: [
      { method: 'POST', path: '/meals' },
      { method: 'GET', path: '/meals' },
      { method: 'PUT', path: '/meals/:id' },
      { method: 'DELETE', path: '/meals/:id' },
      { method: 'GET', path: '/meals/summary' }
    ]
  },
  {
    title: 'Gaming AI Assistant',
    description: 'An AI assistant to improve gaming sessions.',
    tech: [
      { icon: SiJavascript, name: 'JavaScript' },
      { icon: FaCss3, name: 'CSS' },
      { icon: SiGooglegemini, name: 'Gemini' }
    ],
    type: 'frontend',
    githubUrl: 'https://github.com/devchinninto/a_gaming',
    demoUrl: 'https://devchinninto.github.io/a_gaming/',
    imageUrl: project1Img,
    isLive: true
  },
  {
    title: 'PetShop Scheduling System',
    description:
      "Appointment management system for a pet shop, developed as a hands-on project for Rocketseat's Full-Stack Training course.",
    tech: [
      { icon: SiJavascript, name: 'JavaScript' },
      { icon: FaCss3, name: 'CSS' }
    ],
    type: 'fullstack',
    imageUrl: project2Img,
    githubUrl: 'https://github.com/devchinninto/mundo-pet'
  }
]
