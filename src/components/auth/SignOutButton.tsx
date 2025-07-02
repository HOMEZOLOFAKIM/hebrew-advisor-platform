
'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useToast } from '@/hooks/use-toast'

export function SignOutButton() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const router = useRouter()
  const supabase = createClient()

  const handleSignOut = async () => {
    try {
      setIsLoading(true)
      
      const { error } = await supabase.auth.signOut()
      
      if (error) {
        toast({
          title: 'שגיאה',
          description: error.message,
          variant: 'destructive',
        })
        return
      }

      toast({
        title: 'התנתקת בהצלחה',
        description: 'נתראה בקרוב!',
      })
      
      router.push('/login')
      router.refresh()
    } catch (error) {
      toast({
        title: 'שגיאה',
        description: 'אירעה שגיאה בהתנתקות',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      onClick={handleSignOut}
      disabled={isLoading}
      variant="outline"
      size="sm"
    >
      {isLoading ? 'מתנתק...' : 'התנתק'}
    </Button>
  )
}
