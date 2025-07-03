
'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar, Plus, Clock, User, MapPin, Video } from 'lucide-react'

interface Appointment {
  id: string
  title: string
  description: string | null
  start_time: string
  end_time: string
  status: 'scheduled' | 'completed' | 'cancelled'
  lead_name: string
  meeting_type: 'in_person' | 'video' | 'phone'
  location?: string
}

const mockAppointments: Appointment[] = [
  {
    id: '1',
    title: 'פגישת ייעוץ משכנתא',
    description: 'פגישה ראשונה עם אבי כהן לבדיקת אפשרויות משכנתא',
    start_time: '2024-01-16T10:00:00Z',
    end_time: '2024-01-16T11:00:00Z',
    status: 'scheduled',
    lead_name: 'אבי כהן',
    meeting_type: 'video'
  },
  {
    id: '2',
    title: 'סיכום הצעות בנקים',
    description: 'סקירת הצעות מהבנקים השונים עם יעל לוי',
    start_time: '2024-01-16T14:30:00Z',
    end_time: '2024-01-16T15:30:00Z',
    status: 'scheduled',
    lead_name: 'יעל לוי',
    meeting_type: 'in_person',
    location: 'המשרד, רחוב הרצל 15'
  },
  {
    id: '3',
    title: 'חתימה על מסמכים',
    description: 'חתימה סופית על מסמכי המשכנתא',
    start_time: '2024-01-15T16:00:00Z',
    end_time: '2024-01-15T17:00:00Z',
    status: 'completed',
    lead_name: 'משה ישראלי',
    meeting_type: 'in_person',
    location: 'בנק הפועלים, סניף ראשי'
  }
]

const getStatusColor = (status: Appointment['status']) => {
  switch (status) {
    case 'scheduled':
      return 'bg-blue-100 text-blue-800'
    case 'completed':
      return 'bg-green-100 text-green-800'
    case 'cancelled':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const getStatusText = (status: Appointment['status']) => {
  switch (status) {
    case 'scheduled':
      return 'מתוכנן'
    case 'completed':
      return 'הושלם'
    case 'cancelled':
      return 'בוטל'
    default:
      return status
  }
}

const getMeetingTypeIcon = (type: Appointment['meeting_type']) => {
  switch (type) {
    case 'video':
      return <Video className="h-4 w-4" />
    case 'phone':
      return <Clock className="h-4 w-4" />
    case 'in_person':
      return <MapPin className="h-4 w-4" />
    default:
      return <Calendar className="h-4 w-4" />
  }
}

const getMeetingTypeText = (type: Appointment['meeting_type']) => {
  switch (type) {
    case 'video':
      return 'פגישת וידאו'
    case 'phone':
      return 'שיחת טלפון'
    case 'in_person':
      return 'פגישה פרונטלית'
    default:
      return type
  }
}

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>(mockAppointments)
  const [isAddAppointmentOpen, setIsAddAppointmentOpen] = useState(false)

  const sortedAppointments = appointments.sort((a, b) => 
    new Date(a.start_time).getTime() - new Date(b.start_time).getTime()
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Calendar className="h-6 w-6 text-blue-600 ml-2" />
              <h1 className="text-2xl font-bold text-gray-900">פגישות</h1>
            </div>
            <Dialog open={isAddAppointmentOpen} onOpenChange={setIsAddAppointmentOpen}>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  קבע פגישה חדשה
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>קבע פגישה חדשה</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="appointmentTitle">כותרת הפגישה</Label>
                    <Input id="appointmentTitle" className="text-right" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="appointmentLead">לקוח</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="בחר לקוח" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="avi">אבי כהן</SelectItem>
                        <SelectItem value="yael">יעל לוי</SelectItem>
                        <SelectItem value="moshe">משה ישראלי</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="appointmentDate">תאריך</Label>
                      <Input id="appointmentDate" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="appointmentTime">שעה</Label>
                      <Input id="appointmentTime" type="time" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="meetingType">סוג פגישה</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="בחר סוג פגישה" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="in_person">פגישה פרונטלית</SelectItem>
                        <SelectItem value="video">פגישת וידאו</SelectItem>
                        <SelectItem value="phone">שיחת טלפון</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="appointmentLocation">מקום (אופציונלי)</Label>
                    <Input id="appointmentLocation" className="text-right" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="appointmentDescription">תיאור</Label>
                    <Textarea id="appointmentDescription" className="text-right" />
                  </div>
                  <Button className="w-full">קבע פגישה</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {sortedAppointments.map((appointment) => (
            <Card key={appointment.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg mb-1">{appointment.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="h-4 w-4" />
                      {appointment.lead_name}
                    </div>
                  </div>
                  <Badge variant="secondary" className={getStatusColor(appointment.status)}>
                    {getStatusText(appointment.status)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    {new Date(appointment.start_time).toLocaleDateString('he-IL')}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    {new Date(appointment.start_time).toLocaleTimeString('he-IL', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })} - {new Date(appointment.end_time).toLocaleTimeString('he-IL', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    {getMeetingTypeIcon(appointment.meeting_type)}
                    {getMeetingTypeText(appointment.meeting_type)}
                  </div>
                </div>
                
                {appointment.location && (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    {appointment.location}
                  </div>
                )}
                
                {appointment.description && (
                  <p className="text-sm text-gray-700">{appointment.description}</p>
                )}
                
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline">
                    ערוך
                  </Button>
                  {appointment.status === 'scheduled' && (
                    <>
                      <Button size="sm" variant="outline">
                        בטל
                      </Button>
                      <Button size="sm">
                        סמן כמושלם
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedAppointments.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">אין פגישות מתוכננות</h3>
            <p className="text-gray-600">קבע פגישה חדשה כדי להתחיל</p>
          </div>
        )}
      </div>
    </div>
  )
}
