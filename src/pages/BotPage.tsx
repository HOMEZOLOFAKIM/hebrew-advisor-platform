
import { Navigation } from '@/components/layout/Navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Bot, MessageCircle, Settings, BarChart3, Zap } from 'lucide-react'

export default function BotPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">בוט AI חכם</h1>
          <p className="text-gray-600">הגדר ונהל את הבוט החכם שלך לשירות לקוחות</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">שיחות היום</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">47</div>
              <p className="text-xs text-gray-500">+15% מאתמול</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">לידים מהבוט</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">12</div>
              <p className="text-xs text-gray-500">השבוע</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">שביעות רצון</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">4.8</div>
              <p className="text-xs text-gray-500">מתוך 5</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">זמן תגובה</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">1.2</div>
              <p className="text-xs text-gray-500">שניות</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="settings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="settings" className="flex items-center">
              <Settings className="h-4 w-4 ml-2" />
              הגדרות
            </TabsTrigger>
            <TabsTrigger value="conversations" className="flex items-center">
              <MessageCircle className="h-4 w-4 ml-2" />
              שיחות
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center">
              <BarChart3 className="h-4 w-4 ml-2" />
              ניתוח
            </TabsTrigger>
            <TabsTrigger value="integration" className="flex items-center">
              <Zap className="h-4 w-4 ml-2" />
              אינטגרציה
            </TabsTrigger>
          </TabsList>

          <TabsContent value="settings">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>הגדרות כלליות</CardTitle>
                  <CardDescription>הגדר את האישיות והתנהגות של הבוט</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="botName">שם הבוט</Label>
                    <Input id="botName" placeholder="יועץ המשכנתאות החכם" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="greeting">הודעת ברכה</Label>
                    <Textarea 
                      id="greeting" 
                      placeholder="שלום! אני הבוט החכם שלכם. איך אוכל לעזור לכם היום?"
                      rows={3}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>בוט פעיל</Label>
                      <p className="text-sm text-gray-500">האם הבוט זמין לשיחות</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>העברה לבן אדם</Label>
                      <p className="text-sm text-gray-500">אפשר העברה לנציג אנושי</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>בסיס ידע</CardTitle>
                  <CardDescription>הגדר את המידע שהבוט יכול לשתף</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="knowledge">תוכן בסיס הידע</Label>
                    <Textarea 
                      id="knowledge" 
                      placeholder="הכניסו כאן מידע על השירותים שלכם, מחירים, תנאים וכו'..."
                      rows={8}
                    />
                  </div>
                  
                  <Button className="w-full">שמור שינויים</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="conversations">
            <Card>
              <CardHeader>
                <CardTitle>שיחות אחרונות</CardTitle>
                <CardDescription>עיין בשיחות האחרונות עם הבוט</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-medium">לקוח אנונימי</div>
                      <div className="text-sm text-gray-500">לפני 2 שעות</div>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><strong>לקוח:</strong> מה הריבית הנוכחית למשכנתא?</p>
                      <p><strong>בוט:</strong> הריבית הנוכחית נעה בין 3.5% ל-4.2% תלוי בפרופיל האשראי שלכם...</p>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-medium">שרה כהן</div>
                      <div className="text-sm text-gray-500">לפני 5 שעות</div>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><strong>לקוח:</strong> אני רוצה לקבוע פגישה</p>
                      <p><strong>בוט:</strong> בשמחה! אני אעביר אותך לטופס קביעת פגישה...</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>סטטיסטיקות שיחות</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>סך הכל שיחות</span>
                      <span className="font-bold">1,247</span>
                    </div>
                    <div className="flex justify-between">
                      <span>שיחות השבוע</span>
                      <span className="font-bold">143</span>
                    </div>
                    <div className="flex justify-between">
                      <span>לידים שנוצרו</span>
                      <span className="font-bold">47</span>
                    </div>
                    <div className="flex justify-between">
                      <span>פגישות שנקבעו</span>
                      <span className="font-bold">23</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>ביצועים</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>זמן תגובה ממוצע</span>
                      <span className="font-bold">1.2 שניות</span>
                    </div>
                    <div className="flex justify-between">
                      <span>שביעות רצון</span>
                      <span className="font-bold">4.8/5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>שיחות שהועברו לבן אדם</span>
                      <span className="font-bold">12%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>אחוז המרה ללידים</span>
                      <span className="font-bold">3.8%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="integration">
            <Card>
              <CardHeader>
                <CardTitle>הטמעת הבוט באתר</CardTitle>
                <CardDescription>הוסף את הבוט לאתר שלך</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>קוד להטמעה</Label>
                  <div className="p-4 bg-gray-100 rounded-lg font-mono text-sm">
                    {`<script src="https://bot.yoursite.com/widget.js"></script>
<script>
  BotWidget.init({
    botId: "your-bot-id",
    theme: "rtl"
  });
</script>`}
                  </div>
                </div>
                
                <Button>העתק קוד</Button>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium mb-2">הוראות התקנה:</h4>
                  <ol className="text-sm space-y-1 list-decimal list-inside">
                    <li>העתק את הקוד למעלה</li>
                    <li>הדבק אותו לפני סגירת תג ה-body באתר שלך</li>
                    <li>הבוט יופיע אוטומטית בפינה הימנית התחתונה</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
