
import { ReactNode } from 'react'
import { Card, CardContent } from '@/components/ui/card'

interface StatsCardProps {
  title: string
  value: string
  icon: ReactNode
  change: string
}

export function StatsCard({ title, value, icon, change }: StatsCardProps) {
  const isPositive = change.startsWith('+')
  const isNegative = change.startsWith('-')
  
  return (
    <Card className="bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
            <p className="text-2xl font-bold text-gray-900 mb-2">{value}</p>
            <p className={`text-sm font-medium ${
              isPositive ? 'text-green-600' : 
              isNegative ? 'text-red-600' : 
              'text-gray-600'
            }`}>
              {change}
            </p>
          </div>
          <div className="text-gray-400 mr-4">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
