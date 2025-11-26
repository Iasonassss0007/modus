'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Cpu,
  Server,
  FolderOpen,
  GitMerge,
  Activity,
  Lock,
  Menu,
  Settings,
  MapPin
} from 'lucide-react'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const pathname = usePathname()

  const navItems = [
    { icon: Cpu, label: 'Agents', path: '/' },
    { icon: GitMerge, label: 'Workflows', path: '/workflows' },
    { icon: FolderOpen, label: 'Documents', path: '/documents' },
    { icon: Server, label: 'Data Sources', path: '/data' },
    { icon: MapPin, label: 'Map', path: '/map' },
    { icon: Activity, label: 'Analytics', path: '/analytics' },
    { icon: Lock, label: 'Security', path: '/security' },
  ]

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-slate-900 text-slate-100 transition-all duration-300 ease-in-out flex flex-col overflow-hidden`}
      >
        <div className="p-4 border-b border-slate-800 flex items-center min-h-[73px]">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex items-center gap-2 flex-1 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-slate-700 rounded-sm flex items-center justify-center flex-shrink-0">
              <span className="font-bold text-sm">M</span>
            </div>
            <span
              className={`font-semibold text-lg whitespace-nowrap transition-all duration-300 ${
                sidebarOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0'
              }`}
            >
              MODUS
            </span>
          </button>
          {sidebarOpen && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(false)}
              className="hover:bg-slate-800 text-slate-300 flex-shrink-0"
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-hidden">
          {navItems.map((item) => {
            const isActive = pathname === item.path
            return (
              <Link
                key={item.label}
                href={item.path}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 text-sm ${
                  isActive
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <item.icon className="h-4 w-4 flex-shrink-0" />
                <span
                  className={`flex-1 text-left font-medium whitespace-nowrap transition-all duration-300 ${
                    sidebarOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            )
          })}
        </nav>

        <div className="p-3 border-t border-slate-800">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-slate-800 transition-all duration-200 text-slate-400 hover:text-slate-200 text-sm">
            <Settings className="h-4 w-4 flex-shrink-0" />
            <span
              className={`font-medium whitespace-nowrap transition-all duration-300 ${
                sidebarOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0'
              }`}
            >
              Settings
            </span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        {children}
      </main>
    </div>
  )
}
