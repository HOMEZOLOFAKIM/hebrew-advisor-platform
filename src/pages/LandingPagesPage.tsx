
import { Navigation } from '@/components/layout/Navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Plus, Globe, Eye, BarChart3, Settings } from 'lucide-react'

export default function LandingPagesPage() {
  const landingPages = [
    { 
      id: 1, 
      name: 'משכנתא לצעירים', 
      url: 'young-mortgage.com', 
      status: 'פעיל', 
      visits: 1234, 
      conversions: 45,
      conversionRate: 3.6
    },
    { 
      id: 2, 
      name: 'רפיננסינג חכם', 
      url: 'smart-refinancing.com', 
      status: 'פעיל', 
      visits: 890, 
      conversions: 23,
      conversionRate: 2.6
    },
    { 
      id: 3, 
      name: 'משכנתא למשקיעים', 
      url: 'investor-mortgage.com', 
      status: 'טיוטה', 
      visits: 0, 
      conversions: 0,
      conversionRate: 0
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'פעיל': return 'bg-green-100 text-green-800'
      case 'טיוטה': return 'bg-gray-100 text-gray-800'
      case 'מושבת': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">דפי נחיתה</h1>
            <p className="text-gray-600">צור ונהל דפי נחיתה להגדלת הלידים</p>
          </div>
          <Button className="flex items-center">
            <Plus className="h-4 w-4 ml-2" />
            דף נחיתה חדש
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">דפים פעילים</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">2</div>
              <p className="text-xs text-gray-500">מתוך 3</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">ביקורים השבוע</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">2,124</div>
              <p className="text-xs text-gray-500">+12% מהשבוע שעבר</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">המרות השבוע</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">68</div>
              <p className="text-xs text-gray-500">+8% מהשבוע שעבר</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">אחוז המרה ממוצע</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">3.2%</div>
              <p className="text-xs text-gray-500">מעולה!</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="h-5 w-5 ml-2" />
              דפי הנחיתה שלך
            </CardTitle>
            <CardDescription>נהל וערוך את דפי הנחיתה שלך</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {landingPages.map((page) => (
                <div key={page.id} className="flex items-center justify-between p-4 bg-white border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="font-semibold text-lg">{page.name}</h3>
                      <Badge className={getStatusColor(page.status)}>
                        {page.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-gray-600 mb-2">
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 ml-1" />
                        {page.url}
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 ml-1 text-blue-500" />
                        <span className="font-medium">{page.visits.toLocaleString()}</span>
                        <span className="text-gray-500 mr-1">ביקורים</span>
                      </div>
                      <div className="flex items-center">
                        <BarChart3 className="h-4 w-4 ml-1 text-green-500" />
                        <span className="font-medium">{page.conversions}</span>
                        <span className="text-gray-500 mr-1">המרות</span>
                      </div>
                      <div className="text-purple-600 font-medium">
                        {page.conversionRate}% המרה
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Settings className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">תצוגה מקדימה</Button>
                    <Button size="sm">עריכה</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
