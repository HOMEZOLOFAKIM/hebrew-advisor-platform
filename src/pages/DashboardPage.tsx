
import { Navigation } from '@/components/layout/Navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Calendar, Globe, Bot, Plus } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">לוח הבקרה</h1>
          <p className="text-gray-600">ברוך הבא לפלטפורמת יועצי המשכנתאות</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">לידים חדשים</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">12</div>
              <p className="text-xs text-gray-500">השבוע</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">פגישות היום</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">3</div>
              <p className="text-xs text-gray-500">מתוכננות</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">דפי נחיתה</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">5</div>
              <p className="text-xs text-gray-500">פעילים</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">שיחות בוט</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">47</div>
              <p className="text-xs text-gray-500">השבוע</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 ml-2" />
                לידים אחרונים
              </CardTitle>
              <CardDescription>הלקוחות החדשים שנרשמו לאחרונה</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">יוסי כהן</div>
                    <div className="text-sm text-gray-500">yossi@email.com</div>
                  </div>
                  <Button size="sm" variant="outline">פרטים</Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">שרה לוי</div>
                    <div className="text-sm text-gray-500">sara@email.com</div>
                  </div>
                  <Button size="sm" variant="outline">פרטים</Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">דוד ישראל</div>
                    <div className="text-sm text-gray-500">david@email.com</div>
                  </div>
                  <Button size="sm" variant="outline">פרטים</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 ml-2" />
                פגישות קרובות
              </CardTitle>
              <CardDescription>הפגישות הקרובות שלך</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <div className="font-medium">פגישה עם יוסי כהן</div>
                    <div className="text-sm text-gray-500">היום 14:00</div>
                  </div>
                  <Button size="sm">הצטרף</Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">ייעוץ משכנתא - שרה</div>
                    <div className="text-sm text-gray-500">מחר 10:30</div>
                  </div>
                  <Button size="sm" variant="outline">פרטים</Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">בדיקת מסמכים</div>
                    <div className="text-sm text-gray-500">יום ג' 16:00</div>
                  </div>
                  <Button size="sm" variant="outline">פרטים</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
