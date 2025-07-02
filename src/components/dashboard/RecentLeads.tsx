
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft } from 'lucide-react'

interface Lead {
  id: string
  name: string
  status: 'new' | 'contacted' | 'qualified' | 'converted'
  lastContact: string
}

const mockLeads: Lead[] = [
  { id: '1', name: 'אבי כהן', status: 'new', lastContact: 'לפני שעה' },
  { id: '2', name: 'יעל לוי', status: 'contacted', lastContact: 'לפני 5 שעות' },
  { id: '3', name: 'משה ישראלי', status: 'new', lastContact: 'לפני יום' },
]

const getStatusColor = (status: Lead['status']) => {
  switch (status) {
    case 'new':
      return 'bg-blue-100 text-blue-800'
    case 'contacted':
      return 'bg-yellow-100 text-yellow-800'
    case 'qualified':
      return 'bg-green-100 text-green-800'
    case 'converted':
      return 'bg-purple-100 text-purple-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const getStatusText = (status: Lead['status']) => {
  switch (status) {
    case 'new':
      return 'חדש'
    case 'contacted':
      return 'יצר קשר'
    case 'qualified':
      return 'מוכשר'
    case 'converted':
      return 'הומר'
    default:
      return status
  }
}

export function RecentLeads() {
  return (
    <Card className="bg-white shadow-sm border border-gray-200">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-900">
            לידים אחרונים
          </CardTitle>
          <Link 
            href="/dashboard/leads" 
            className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
          >
            הצג הכל
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockLeads.map((lead) => (
            <div key={lead.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{lead.name}</h4>
                <p className="text-sm text-gray-500 mt-1">{lead.lastContact}</p>
              </div>
              <Badge variant="secondary" className={getStatusColor(lead.status)}>
                {getStatusText(lead.status)}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
