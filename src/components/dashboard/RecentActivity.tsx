
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Users, FileText } from 'lucide-react'

interface Activity {
  id: string
  text: string
  time: string
  type: 'meeting' | 'lead' | 'proposal'
}

const mockActivities: Activity[] = [
  { id: '1', text: 'נקבעה פגישה עם יעל לוי', time: 'לפני 10 דקות', type: 'meeting' },
  { id: '2', text: 'ליד חדש התקבל מאתר האינטרנט', time: 'לפני שעה', type: 'lead' },
  { id: '3', text: 'שלחת הצעה לאבי כהן', time: 'לפני 3 שעות', type: 'proposal' },
]

const getActivityIcon = (type: Activity['type']) => {
  switch (type) {
    case 'meeting':
      return <Calendar className="h-4 w-4 text-blue-500" />
    case 'lead':
      return <Users className="h-4 w-4 text-green-500" />
    case 'proposal':
      return <FileText className="h-4 w-4 text-purple-500" />
    default:
      return <FileText className="h-4 w-4 text-gray-500" />
  }
}

export function RecentActivity() {
  return (
    <Card className="bg-white shadow-sm border border-gray-200">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-gray-900">
          פעילות אחרונה
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockActivities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3 py-2">
              <div className="mt-1 flex-shrink-0">
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 mb-1">
                  {activity.text}
                </p>
                <p className="text-xs text-gray-500">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
