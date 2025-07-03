
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            פלטפורמת יועצי המשכנתאות
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            מערכת ניהול מתקדמת המאפשרת ליועצי משכנתאות לנהל לקוחות, לזמן פגישות ולהפעיל בוט AI חכם
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button size="lg" className="text-lg px-8 py-3">
                התחל עכשיו
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                לוח הבקרה
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">בוט AI חכם</h3>
            <p className="text-gray-600">בוט מותאם אישית שעונה על שאלות לקוחות ומזמן פגישות</p>
          </div>

          <div className="text-center p-6">
            <div className="bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">ניהול לקוחות</h3>
            <p className="text-gray-600">עקוב אחר לידים, נהל פגישות וארגן את המידע בצורה יעילה</p>
          </div>

          <div className="text-center p-6">
            <div className="bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">דפי נחיתה</h3>
            <p className="text-gray-600">צור דפי נחיתה מקצועיים ומותאמים אישית</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
