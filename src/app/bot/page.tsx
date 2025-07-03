
'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Bot, Settings, MessageSquare, Zap, Palette, Brain } from 'lucide-react'

interface BotMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

const mockConversation: BotMessage[] = [
  {
    id: '1',
    role: 'user',
    content: 'שלום, אני מעוניין במשכנתא ראשונה',
    timestamp: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    role: 'assistant',
    content: 'שלום! אשמח לעזור לך עם המשכנתא הראשונה. בואו נתחיל בכמה שאלות בסיסיות: מה הסכום שאתה מעוניין ולוות?',
    timestamp: '2024-01-15T10:30:15Z'
  },
  {
    id: '3',
    role: 'user',
    content: 'אני מעוניין ללוות כ-800,000 שקל',
    timestamp: '2024-01-15T10:31:00Z'
  },
  {
    id: '4',
    role: 'assistant',
    content: 'מעולה! סכום של 800,000 שקל הוא סכום משמעותי. מה ההכנסה החודשית שלך? וכמה הון עצמי יש לך לרכישת הנכס?',
    timestamp: '2024-01-15T10:31:30Z'
  }
]

export default function BotPage() {
  const [botSettings, setBotSettings] = useState({
    businessName: 'יועץ המשכנתאות המוביל',
    isActive: true,
    systemPrompt: 'אתה יועץ משכנתאות מקצועי ומנוסה. אתה עוזר ללקוחות למצוא את המשכנתא המתאימה ביותר עבורם. אתה מדבר בעברית, בצורה ידידותית ומקצועית.',
    welcomeMessage: 'שלום! אני הבוט של יועץ המשכנתאות. אשמח לעזור לך למצוא את המשכנתא המתאימה ביותר. איך אוכל לעזור?',
    chatColor: 'blue',
    autoScheduling: true
  })

  const [testMessage, setTestMessage] = useState('')
  const [conversation, setConversation] = useState<BotMessage[]>(mockConversation)

  const handleSendTestMessage = () => {
    if (!testMessage.trim()) return

    const newMessage: BotMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: testMessage,
      timestamp: new Date().toISOString()
    }

    setConversation([...conversation, newMessage])
    setTestMessage('')

    // Simulate bot response
    setTimeout(() => {
      const botResponse: BotMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'תודה על השאלה! זהו מענה אוטומטי מהבוט. בהגדרות האמיתיות, הבוט יגיב באמצעות AI מתקדם.',
        timestamp: new Date().toISOString()
      }
      setConversation(prev => [...prev, botResponse])
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Bot className="h-6 w-6 text-green-600 ml-2" />
              <h1 className="text-2xl font-bold text-gray-900">בוט AI</h1>
              <Badge 
                variant={botSettings.isActive ? "default" : "secondary"}
                className={`mr-3 ${botSettings.isActive ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
              >
                {botSettings.isActive ? 'פעיל' : 'לא פעיל'}
              </Badge>
            </div>
            <Button>
              שמור הגדרות
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="settings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              הגדרות
            </TabsTrigger>
            <TabsTrigger value="test" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              בדיקה
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              סטטיסטיקות
            </TabsTrigger>
          </TabsList>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Basic Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    הגדרות בסיסיות
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">שם העסק</Label>
                    <Input 
                      id="businessName" 
                      value={botSettings.businessName}
                      onChange={(e) => setBotSettings({...botSettings, businessName: e.target.value})}
                      className="text-right" 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="isActive">בוט פעיל</Label>
                    <Switch
                      id="isActive"
                      checked={botSettings.isActive}
                      onCheckedChange={(checked) => setBotSettings({...botSettings, isActive: checked})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="welcomeMessage">הודעת ברוכים הבאים</Label>
                    <Textarea 
                      id="welcomeMessage" 
                      value={botSettings.welcomeMessage}
                      onChange={(e) => setBotSettings({...botSettings, welcomeMessage: e.target.value})}
                      className="text-right"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="autoScheduling">תיאום פגישות אוטומטי</Label>
                    <Switch
                      id="autoScheduling"
                      checked={botSettings.autoScheduling}
                      onCheckedChange={(checked) => setBotSettings({...botSettings, autoScheduling: checked})}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* AI Configuration */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    הגדרות AI
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="systemPrompt">הוראות למערכת</Label>
                    <Textarea 
                      id="systemPrompt" 
                      value={botSettings.systemPrompt}
                      onChange={(e) => setBotSettings({...botSettings, systemPrompt: e.target.value})}
                      className="text-right h-32"
                      placeholder="תאר כיצד הבוט צריך להתנהג..."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="apiKey">מפתח API של Gemini</Label>
                    <Input 
                      id="apiKey" 
                      type="password"
                      placeholder="הכנס את מפתח ה-API"
                      className="text-right" 
                    />
                    <p className="text-xs text-gray-500">המפתח נשמר באופן מוצפן</p>
                  </div>
                </CardContent>
              </Card>

              {/* Appearance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="h-5 w-5" />
                    עיצוב וחזות
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>צבע הצ'אט</Label>
                    <div className="flex gap-2">
                      {['blue', 'green', 'purple', 'orange'].map((color) => (
                        <button 
                          key={color}
                          className={`w-8 h-8 rounded-full border-2 ${
                            botSettings.chatColor === color ? 'border-gray-800' : 'border-gray-200'
                          } ${
                            color === 'blue' ? 'bg-blue-500' :
                            color === 'green' ? 'bg-green-500' :
                            color === 'purple' ? 'bg-purple-500' :
                            'bg-orange-500'
                          }`}
                          onClick={() => setBotSettings({...botSettings, chatColor: color})}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="test" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Chat Interface */}
              <Card className="h-96">
                <CardHeader>
                  <CardTitle>בדיקת הבוט</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                    {conversation.map((message) => (
                      <div 
                        key={message.id} 
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.role === 'user' 
                              ? 'bg-blue-500 text-white' 
                              : 'bg-gray-200 text-gray-800'
                          }`}
                        >
                          {message.content}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Input 
                      value={testMessage}
                      onChange={(e) => setTestMessage(e.target.value)}
                      placeholder="כתוב הודעה..."
                      className="text-right"
                      onKeyPress={(e) => e.key === 'Enter' && handleSendTestMessage()}
                    />
                    <Button onClick={handleSendTestMessage}>שלח</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Bot Preview */}
              <Card>
                <CardHeader>
                  <CardTitle>תצוגה מקדימה של הבוט</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg p-4 bg-white shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Bot className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium">{botSettings.businessName}</div>
                        <div className="text-sm text-gray-500">בוט אונליין</div>
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 text-sm">
                      {botSettings.welcomeMessage}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-2xl font-bold">147</div>
                  <div className="text-sm text-gray-600">שיחות החודש</div>
                  <div className="text-xs text-green-600">+12.3%</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="text-2xl font-bold">23</div>
                  <div className="text-sm text-gray-600">לידים שנוצרו</div>
                  <div className="text-xs text-green-600">+8.7%</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="text-2xl font-bold">15.6%</div>
                  <div className="text-sm text-gray-600">שיעור המרה</div>
                  <div className="text-xs text-red-600">-2.1%</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="text-2xl font-bold">4.2</div>
                  <div className="text-sm text-gray-600">דירוג שביעות רצון</div>
                  <div className="text-xs text-green-600">+0.3</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
