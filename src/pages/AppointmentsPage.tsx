
import { Navigation } from '@/components/layout/Navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Plus, Calendar, Clock, User } from 'lucide-react'

export default function AppointmentsPage() {
  const appointments = [
    { 
      id: 1, 
      title: 'פגישת ייעוץ משכנתא', 
      client: 'יוסי כהן', 
      date: '2024-07-04', 
      time: '14:00', 
      status: 'מתוכנן',
      duration: '60 דקות'
    },
    { 
      id: 2, 
      title: 'בדיקת מסמכים', 
      client: 'שרה לוי', 
      date: '2024-07-05', 
      time: '10:30', 
      status: 'מאושר',
      duration: '45 דקות'
    },
    { 
      id: 3, 
      title: 'חתימה על הסכם', 
      client: 'דוד ישראל', 
      date: '2024-07-06', 
      time: '16:00', 
      status: 'ממתין לאישור',
      duration: '30 דקות'
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'מתוכנן': return 'bg-blue-100 text-blue-800'
      case 'מאושר': return 'bg-green-100 text-green-800'
      case 'ממתין לאישור': return 'bg-yellow-100 text-yellow-800'
      case 'בוטל': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('he-IL', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">ניהול פגישות</h1>
            <p className="text-gray-600">תזמן ונהל את הפגישות שלך עם לקוחות</p>
          </div>
          <Button className="flex items-center">
            <Plus className="h-4 w-4 ml-2" />
            פגישה חדשה
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">פגישות היום</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">3</div>
              <p className="text-xs text-gray-500">מתוכננות</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">השבוע</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">12</div>
              <p className="text-xs text-gray-500">פגישות</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">ממתינות לאישור</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">2</div>
              <p className="text-xs text-gray-500">פגישות</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 ml-2" />
              פגישות קרובות
            </CardTitle>
            <CardDescription>הפגישות המתוכננות שלך לימים הקרובים</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-4 bg-white border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="font-semibold text-lg">{appointment.title}</h3>
                      <Badge className={getStatusColor(appointment.status)}>
                        {appointment.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-gray-600">
                      <div className="flex items-center">
                        <User className="h-4 w-4 ml-1" />
                        {appointment.client}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 ml-1" />
                        {formatDate(appointment.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 ml-1" />
                        {appointment.time} ({appointment.duration})
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">עריכה</Button>
                    <Button size="sm">הצטרף</Button>
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
