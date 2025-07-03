
import { Navigation } from '@/components/layout/Navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Plus, Search, Filter, Phone, Mail } from 'lucide-react'

export default function LeadsPage() {
  const leads = [
    { id: 1, name: 'יוסי כהן', email: 'yossi@email.com', phone: '050-1234567', status: 'חדש', source: 'דף נחיתה' },
    { id: 2, name: 'שרה לוי', email: 'sara@email.com', phone: '052-9876543', status: 'בטיפול', source: 'המלצה' },
    { id: 3, name: 'דוד ישראל', email: 'david@email.com', phone: '054-5555555', status: 'לקוח', source: 'בוט AI' },
    { id: 4, name: 'רחל אברהם', email: 'rachel@email.com', phone: '053-7777777', status: 'חדש', source: 'פייסבוק' },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'חדש': return 'bg-blue-100 text-blue-800'
      case 'בטיפול': return 'bg-yellow-100 text-yellow-800'
      case 'לקוח': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">ניהול לידים</h1>
            <p className="text-gray-600">נהל את הלקוחות הפוטנציאליים שלך</p>
          </div>
          <Button className="flex items-center">
            <Plus className="h-4 w-4 ml-2" />
            הוסף ליד חדש
          </Button>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>חיפוס ומיון</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input placeholder="חפש לפי שם, אימייל או טלפון..." className="pr-10" />
                </div>
              </div>
              <Button variant="outline" className="flex items-center">
                <Filter className="h-4 w-4 ml-2" />
                סינון
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>רשימת לידים</CardTitle>
            <CardDescription>סך הכל {leads.length} לידים במערכת</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leads.map((lead) => (
                <div key={lead.id} className="flex items-center justify-between p-4 bg-white border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="font-semibold text-lg">{lead.name}</h3>
                      <Badge className={getStatusColor(lead.status)}>
                        {lead.status}
                      </Badge>
                      <span className="text-sm text-gray-500">מקור: {lead.source}</span>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 ml-1" />
                        {lead.email}
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 ml-1" />
                        {lead.phone}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">עריכה</Button>
                    <Button size="sm">צור פגישה</Button>
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
