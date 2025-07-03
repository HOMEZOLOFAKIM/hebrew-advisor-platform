
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Globe, 
  Bot,
  Menu,
  X
} from 'lucide-react'
import { useState } from 'react'

const navigation = [
  { name: 'לוח בקרה', href: '/dashboard', icon: LayoutDashboard },
  { name: 'לידים', href: '/leads', icon: Users },
  { name: 'פגישות', href: '/appointments', icon: Calendar },
  { name: 'דפי נחיתה', href: '/landing-pages', icon: Globe },
  { name: 'בוט AI', href: '/bot', icon: Bot },
]

export function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex items-center px-4 text-sm font-medium text-gray-900">
                פלטפורמת יועצי המשכנתאות
              </Link>
            </div>
            <div className="flex space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      pathname === item.href
                        ? 'border-blue-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                      'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                    )}
                  >
                    <Icon className="h-4 w-4 ml-2" />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden bg-white border-b border-gray-200">
        <div className="px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-lg font-semibold text-gray-900">
              יועצי משכנתאות
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="bg-white border-t border-gray-200">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      pathname === item.href
                        ? 'bg-blue-50 border-blue-500 text-blue-700'
                        : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
                      'block pr-3 pl-4 py-2 border-r-4 text-base font-medium'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      <Icon className="h-5 w-5 ml-3" />
                      {item.name}
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
