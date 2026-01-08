'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { ScheduleCallModal } from '@/components/schedule-call-modal'

interface CollaborationCTAProps {
  variant?: 'inline' | 'section'
  text?: string
  showIcon?: boolean
}

export function CollaborationCTA({ 
  variant = 'inline',
  text = 'Get Started',
  showIcon = true
}: CollaborationCTAProps) {
  const [showScheduleModal, setShowScheduleModal] = useState(false)

  return (
    <>
      <Button 
        onClick={() => setShowScheduleModal(true)}
        className={variant === 'section' 
          ? "bg-white text-cyan-600 hover:bg-slate-100" 
          : "w-full bg-cyan-500 hover:bg-cyan-600 text-white group-hover:shadow-lg transition-all"}
        size={variant === 'section' ? 'lg' : 'default'}
      >
        {text}
        {showIcon && <ArrowRight className="w-4 h-4 ml-2" />}
      </Button>
      
      <ScheduleCallModal open={showScheduleModal} onOpenChange={setShowScheduleModal} />
    </>
  )
}
