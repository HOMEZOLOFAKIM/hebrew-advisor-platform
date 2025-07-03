
'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/server'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Users, Plus, Search, Phone, Mail, Calendar } from 'lucide-react'

interface Lead {
  id: string
  name: string
  email: string | null
  phone: string | null
  status: 'new' | 'contacted' | 'qualified' | 'converted'
  source: string | null
  notes: string | null
  created_at: string
  updated_at: string
}

const mockLeads: Lead[] = [
  {
    id: '1',
    name: 'אבי כהן',
    email: 'avi@example.com',
    phone: '050-1234567',
    status: 'new',
    source: 'אתר אינטרנט',
    notes: 'מעוניין במשכנתא ראשונה',
    created_at: '2024-01-15T10:30:00Z',
    updated_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    name: 'יעל לוי',
    email: 'yael@example.com',
    phone: '052-9876543',
    status: 'contacted',
    source: 'המלצה',
    notes: 'רוצה לשפר תנאי משכנתא קיימת',
    created_at: '2024-01-14T14:20:00Z',
    updated_at: '2024-01-15T09:15:00Z'
  },
  {
    id: '3',
    name: 'משה ישראלי',
    email: 'moshe@example.com',
    phone: '054-5555555',
    status: 'qualified',
    source: 'פייסבוק',
    notes: 'לקוח פוטנציאלי חזק, יש לו הכנסה גבוהה',
    created_at: '2024-01-13T16:45:00Z',
    updated_at: '2024-01-14T11:30:00Z'
  },
  {
    id: '4',
    name: 'שרה דוד',
    email: 'sara@example.com',
    phone: '053-7777777',
    status: 'converted',
    source: 'גוגל',
    notes: 'עסקה הושלמה בהצלחה',
    created_at: '2024-01-10T09:00:00Z',
    updated_at: '2024-01-12T15:45:00Z'
  }
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

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>(mockLeads)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [isAddLeadOpen, setIsAddLeadOpen] = useState(false)

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (lead.email && lead.email.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesFilter = filterStatus === 'all' || lead.status === filterStatus
    return matchesSearch && matchesFilter
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Users className="h-6 w-6 text-blue-600 ml-2" />
              <h1 className="text-2xl font-bold text-gray-900">ניהול לידים</h1>
            </div>
            <Dialog open={isAddLeadOpen} onOpenChange={setIsAddLeadOpen}>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  הוסף ליד חדש
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>הוסף ליד חדש</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="leadName">שם מלא</Label>
                    <Input id="leadName" className="text-right" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="leadEmail">אימייל</Label>
                    <Input id="leadEmail" type="email" className="text-right" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="leadPhone">טלפון</Label>
                    <Input id="leadPhone" className="text-right" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="leadSource">מקור</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="בחר מקור" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="website">אתר אינטרנט</SelectItem>
                        <SelectItem value="referral">המלצה</SelectItem>
                        <SelectItem value="facebook">פייסבוק</SelectItem>
                        <SelectItem value="google">גוגל</SelectItem>
                        <SelectItem value="other">אחר</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="leadNotes">הערות</Label>
                    <Textarea id="leadNotes" className="text-right" />
                  </div>
                  <Button className="w-full">שמור ליד</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="חפש לידים..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10 text-right"
            />
          </div>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="סנן לפי סטטוס" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">כל הסטטוסים</SelectItem>
              <SelectItem value="new">חדש</SelectItem>
              <SelectItem value="contacted">יצר קשר</SelectItem>
              <SelectItem value="qualified">מוכשר</SelectItem>
              <SelectItem value="converted">הומר</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Leads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLeads.map((lead) => (
            <Card key={lead.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{lead.name}</CardTitle>
                  <Badge variant="secondary" className={getStatusColor(lead.status)}>
                    {getStatusText(lead.status)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {lead.email && (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="h-4 w-4" />
                    {lead.email}
                  </div>
                )}
                {lead.phone && (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="h-4 w-4" />
                    {lead.phone}
                  </div>
                )}
                {lead.source && (
                  <div className="text-sm text-gray-600">
                    <strong>מקור:</strong> {lead.source}
                  </div>
                )}
                {lead.notes && (
                  <div className="text-sm text-gray-600">
                    <strong>הערות:</strong> {lead.notes}
                  </div>
                )}
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="h-3 w-3" />
                  נוצר: {new Date(lead.created_at).toLocaleDateString('he-IL')}
                </div>
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline">
                    ערוך
                  </Button>
                  <Button size="sm">
                    צור קשר
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredLeads.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">אין לידים להצגה</h3>
            <p className="text-gray-600">נסה לשנות את הפילטרים או הוסף לידים חדשים</p>
          </div>
        )}
      </div>
    </div>
  )
}
