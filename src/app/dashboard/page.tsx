
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { SignOutButton } from '@/components/auth/SignOutButton'
import { StatsCard } from '@/components/dashboard/StatsCard'
import { RecentLeads } from '@/components/dashboard/RecentLeads'
import { RecentActivity } from '@/components/dashboard/RecentActivity'
import { Users, Calendar, FileText, TrendingUp } from 'lucide-react'

export default async function DashboardPage() {
  const supabase = await createClient()

  // Get user session on server side
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // This shouldn't happen due to middleware, but extra safety
  if (!user) {
    redirect('/login')
  }

  // Get advisor profile
  const { data: advisor } = await supabase
    .from('advisors')
    .select('*')
    .eq('id', user.id)
    .single()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                לוח בקרה
              </h1>
              <p className="text-sm text-gray-600">
                ברוך הבא, {advisor?.display_name || user.email}!
              </p>
            </div>
            <SignOutButton />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="לידים חדשים"
            value="26"
            icon={<Users className="h-6 w-6" />}
            change="+12.5%"
          />
          <StatsCard
            title="פגישות החודש"
            value="12"
            icon={<Calendar className="h-6 w-6" />}
            change="+8.3%"
          />
          <StatsCard
            title="הצעות נשלחות"
            value="8"
            icon={<FileText className="h-6 w-6" />}
            change="+25.0%"
          />
          <StatsCard
            title="שיעור המרה"
            value="15.2%"
            icon={<TrendingUp className="h-6 w-6" />}
            change="-2.1%"
          />
        </div>

        {/* Recent Data Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentLeads />
          <RecentActivity />
        </div>
      </div>
    </div>
  )
}
