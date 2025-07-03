
import { useState } from 'react'
import { createClient } from '@/integrations/supabase/client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const supabase = createClient()

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true)
      
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
        },
      })

      if (error) {
        toast({
          title: 'שגיאה בהתחברות',
          description: error.message,
          variant: 'destructive',
        })
      }
    } catch (error) {
      toast({
        title: 'שגיאה',
        description: 'אירעה שגיאה בהתחברות עם גוגל',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            ברוכים הבאים
          </CardTitle>
          <CardDescription>
            התחברו לפלטפורמת יועצי המשכנתאות
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full"
            size="lg"
          >
            {isLoading ? 'מתחבר...' : 'התחבר עם חשבון גוגל'}
          </Button>
          
          <p className="mt-4 text-center text-sm text-gray-600">
            על ידי התחברות, אתם מסכימים לתנאי השימוש ומדיניות הפרטיות
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
