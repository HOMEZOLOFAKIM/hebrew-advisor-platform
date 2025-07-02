
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { SignOutButton } from '@/components/auth/SignOutButton'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              ברוך הבא, {advisor?.display_name || user.email}!
            </h1>
            <p className="mt-2 text-gray-600">
              לוח הבקרה שלך - נתחיל לעבוד
            </p>
          </div>
          <SignOutButton />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>פרופיל אישי</CardTitle>
              <CardDescription>נהל את פרטיך האישיים</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">אימייל: {user.email}</p>
              <p className="text-sm text-gray-600">תוכנית: {advisor?.plan || 'free_tier'}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>הגדרות הבוט</CardTitle>
              <CardDescription>התאם את הבוט שלך</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">בקרוב...</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>לידים</CardTitle>
              <CardDescription>נהל את הלידים שלך</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">בקרוב...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
