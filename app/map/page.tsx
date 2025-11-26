'use client'

import dynamic from 'next/dynamic'
import DashboardLayout from '@/components/DashboardLayout'
import { Globe } from 'lucide-react'

const WorldMap = dynamic(() => import('@/components/WorldMap'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center bg-slate-900">
      <div className="text-slate-400 flex flex-col items-center gap-2">
        <Globe className="h-8 w-8 animate-pulse" />
        <p>Loading map...</p>
      </div>
    </div>
  ),
})

export default function MapPage() {
  return (
    <DashboardLayout>
      <div className="h-full w-full bg-slate-900">
        <WorldMap />
      </div>
    </DashboardLayout>
  )
}
