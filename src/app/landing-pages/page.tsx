
'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Globe, Plus, Eye, Settings, Copy } from 'lucide-react'

interface LandingPage {
  id: string
  page_name: string
  is_published: boolean
  created_at: string
  updated_at: string
  views?: number
  conversions?: number
}

const mockLandingPages: LandingPage[] = [
  {
    id: '1',
    page_name: 'משכנתא ראשונה',
    is_published: true,
    created_at: '2024-01-10T10:00:00Z',
    updated_at: '2024-01-15T14:30:00Z',
    views: 145,
    conversions: 12
  },
  {
    id: '2',
    page_name: 'שיפור תנאי משכנתא',
    is_published: true,
    created_at: '2024-01-08T09:15:00Z',
    updated_at: '2024-01-14T16:45:00Z',
    views: 89,
    conversions: 7
  },
  {
    id: '3',
    page_name: 'משכנתא למשקיעים',
    is_published: false,
    created_at: '2024-01-12T11:30:00Z',
    updated_at: '2024-01-12T11:30:00Z',
    views: 0,
    conversions: 0
  }
]

export default function LandingPagesPage() {
  const [landingPages, setLandingPages] = useState<LandingPage[]>(mockLandingPages)
  const [isCreatePageOpen, setIsCreatePageOpen] = useState(false)

  const togglePublished = (id: string) => {
    setLandingPages(pages => 
      pages.map(page => 
        page.id === id 
          ? { ...page, is_published: !page.is_published }
          : page
      )
    )
  }

  const copyPageUrl = (pageName: string) => {
    const url = `${window.location.origin}/landing/${pageName.replace(/\s+/g, '-').toLowerCase()}`
    navigator.clipboard.writeText(url)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Globe className="h-6 w-6 text-purple-600 ml-2" />
              <h1 className="text-2xl font-bold text-gray-900">דפי נחיתה</h1>
            </div>
            <Dialog open={isCreatePageOpen} onOpenChange={setIsCreatePageOpen}>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  צור דף נחיתה חדש
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>צור דף נחיתה חדש</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="pageName">שם הדף</Label>
                    <Input id="pageName" placeholder="לדוגמה: משכנתא ראשונה" className="text-right" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pageTemplate">תבנית</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="בחר תבנית" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">בסיסי</SelectItem>
                        <SelectItem value="professional">מקצועי</SelectItem>
                        <SelectItem value="modern">מודרני</SelectItem>
                        <SelectItem value="minimal">מינימליסטי</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pageColor">צבע ראשי</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="בחר צבע" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="blue">כחול</SelectItem>
                        <SelectItem value="green">ירוק</SelectItem>
                        <SelectItem value="purple">סגול</SelectItem>
                        <SelectItem value="orange">כתום</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">צור דף</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {landingPages.map((page) => (
            <Card key={page.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{page.page_name}</CardTitle>
                  <Badge 
                    variant={page.is_published ? "default" : "secondary"}
                    className={page.is_published ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}
                  >
                    {page.is_published ? 'פורסם' : 'טיוטה'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="font-semibold text-blue-900">{page.views || 0}</div>
                    <div className="text-blue-600">צפיות</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="font-semibold text-green-900">{page.conversions || 0}</div>
                    <div className="text-green-600">המרות</div>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500">
                  נוצר: {new Date(page.created_at).toLocaleDateString('he-IL')}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={page.is_published}
                      onCheckedChange={() => togglePublished(page.id)}
                    />
                    <span className="text-sm">פורסם</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye className="h-4 w-4 ml-1" />
                    תצוגה מקדימה
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Settings className="h-4 w-4 ml-1" />
                    ערוך
                  </Button>
                </div>
                
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="w-full"
                  onClick={() => copyPageUrl(page.page_name)}
                >
                  <Copy className="h-4 w-4 ml-1" />
                  העתק קישור
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {landingPages.length === 0 && (
          <div className="text-center py-12">
            <Globe className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">אין דפי נחיתה</h3>
            <p className="text-gray-600">צור את דף הנחיתה הראשון שלך</p>
          </div>
        )}
      </div>
    </div>
  )
}
