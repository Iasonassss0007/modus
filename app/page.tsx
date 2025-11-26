'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Cpu,
  Server,
  GitMerge,
  Activity,
  Search,
  Plus,
  ArrowRight,
  Circle,
  Lock
} from 'lucide-react'

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <DashboardLayout>
      <div className="flex flex-col h-full overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search agents, workflows, documents..."
                  className="pl-10 bg-slate-50 border-slate-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-3 ml-4">
              <Button variant="outline" size="icon" className="border-slate-300">
                <Lock className="h-4 w-4" />
              </Button>
              <Button className="bg-slate-900 hover:bg-slate-800">
                <Plus className="h-4 w-4 mr-2" />
                New Agent
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-6 bg-slate-50">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-slate-900 mb-1">Enterprise AI Platform</h1>
            <p className="text-slate-600">
              Intelligent automation and decision-making infrastructure
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* AI Assistant */}
            <Card className="lg:col-span-2 border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900">AI Assistant</CardTitle>
                <CardDescription className="text-slate-600">
                  Natural language interface for platform operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="relative">
                    <Input
                      placeholder="Describe what you need to accomplish..."
                      className="pr-12 bg-white border-slate-200"
                    />
                    <Button
                      size="icon"
                      className="absolute right-1 top-1 h-7 w-7 bg-slate-900 hover:bg-slate-800"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="border-slate-300 text-slate-700">
                      Create Agent
                    </Button>
                    <Button variant="outline" size="sm" className="border-slate-300 text-slate-700">
                      Analyze Data
                    </Button>
                    <Button variant="outline" size="sm" className="border-slate-300 text-slate-700">
                      Build Workflow
                    </Button>
                    <Button variant="outline" size="sm" className="border-slate-300 text-slate-700">
                      Connect Source
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Access */}
            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900">Quick Access</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    { icon: Cpu, label: 'Agent Studio', path: '/agents' },
                    { icon: GitMerge, label: 'Workflow Builder', path: '/workflows' },
                    { icon: Server, label: 'Data Integration', path: '/data' },
                    { icon: Activity, label: 'Analytics', path: '/analytics' },
                  ].map((item) => (
                    <button
                      key={item.label}
                      className="w-full flex items-center gap-3 p-3 rounded-md border border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                      <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center">
                        <item.icon className="h-4 w-4 text-slate-700" />
                      </div>
                      <span className="flex-1 text-left text-sm font-medium text-slate-900">
                        {item.label}
                      </span>
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Getting Started */}
            <Card className="lg:col-span-3 border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900">Getting Started</CardTitle>
                <CardDescription className="text-slate-600">
                  Begin building your AI-powered workflows
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: 'Create Your First Agent',
                      description: 'Build an AI agent tailored to your business needs',
                      action: 'Create Agent',
                      icon: Cpu,
                    },
                    {
                      title: 'Connect Data Sources',
                      description: 'Integrate databases, APIs, and file storage',
                      action: 'Add Source',
                      icon: Server,
                    },
                    {
                      title: 'Design a Workflow',
                      description: 'Automate processes with visual workflow builder',
                      action: 'Build Workflow',
                      icon: GitMerge,
                    },
                  ].map((step) => (
                    <div
                      key={step.title}
                      className="p-4 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors"
                    >
                      <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center mb-3">
                        <step.icon className="h-5 w-5 text-slate-700" />
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-600 mb-4">{step.description}</p>
                      <Button variant="outline" size="sm" className="border-slate-300 text-slate-700">
                        {step.action}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card className="lg:col-span-2 border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900">Platform Status</CardTitle>
                <CardDescription className="text-slate-600">
                  System health and performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { label: 'API Services', status: 'Operational' },
                    { label: 'Data Processing', status: 'Operational' },
                    { label: 'Agent Runtime', status: 'Operational' },
                    { label: 'Storage Systems', status: 'Operational' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Circle className="w-2 h-2 fill-emerald-600 text-emerald-600" />
                        <span className="text-sm font-medium text-slate-900">{item.label}</span>
                      </div>
                      <span className="text-sm text-slate-600">{item.status}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Documentation */}
            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900">Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { title: 'API Reference', link: '/docs/api' },
                    { title: 'Agent SDK', link: '/docs/sdk' },
                    { title: 'Security Guide', link: '/docs/security' },
                    { title: 'Best Practices', link: '/docs/practices' },
                  ].map((doc) => (
                    <button
                      key={doc.title}
                      className="w-full flex items-center justify-between p-2 rounded hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-sm text-slate-700">{doc.title}</span>
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
