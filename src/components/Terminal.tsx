import type { ReactNode } from 'react'
import type { HttpMethod, Route } from '../data/projects'

// --- Shared chrome ---
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

export function TerminalShell({
  title,
  children
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div
      className="w-full rounded-lg overflow-hidden shadow-2xl"
      style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{ background: '#1A1A1A', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs font-mono text-gray-500">{title}</span>
      </div>
      {children}
    </div>
  )
}

// --- API routes terminal ---
export function TerminalWindow({ routes }: { routes: Route[] }) {
  return (
    <TerminalShell title="terminal">
      <div className="p-3 sm:p-4 lg:p-5 font-['JetBrains_Mono'] text-[10px] sm:text-xs lg:text-sm space-y-1.5 overflow-x-auto">
        <div>
          <span className="text-[#00FF88]">$ </span>
          <span className="text-[#00FF88] font-bold">npm start</span>
        </div>
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
        <div className="py-0.5" />
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
        <div className="flex items-center pt-0.5">
          <span className="inline-block w-2 h-4 bg-gray-400 animate-pulse" />
        </div>
      </div>
    </TerminalShell>
  )
}
