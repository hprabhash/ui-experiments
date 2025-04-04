"use client"

import { useEffect, useState } from "react"
import { useCalendarContext } from "@/components/event-calendar/calendar-context"
import { Calendar } from "@/components/ui/calendar"

interface SidebarCalendarProps {
  className?: string
}

export default function SidebarCalendar({ className }: SidebarCalendarProps) {
  // Use the shared calendar context
  const { currentDate, setCurrentDate } = useCalendarContext()
  
  // Track the month to display in the calendar
  const [calendarMonth, setCalendarMonth] = useState<Date>(currentDate)
  
  // Update the calendar month whenever currentDate changes
  useEffect(() => {
    setCalendarMonth(currentDate)
  }, [currentDate])

  // Handle date selection
  const handleSelect = (date: Date | undefined) => {
    if (date) {
      setCurrentDate(date)
    }
  }

  return (
    <div className="w-full flex justify-center">
      <Calendar
        mode="single"
        selected={currentDate}
        onSelect={handleSelect}
        month={calendarMonth}
        onMonthChange={setCalendarMonth}
        classNames={{
          day_button: "transition-none!",
          today: "*:after:transition-none"
        }}
      />
    </div>
  )
}
