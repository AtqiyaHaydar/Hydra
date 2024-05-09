"use client"

import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import NotificationsCard from "@/components/NotificationsCard";
import { ScrollArea } from "@/components/ui/scroll-area";

// Dummy data
const tasks = [
  {
    date: 12,
    month: 5,
    task: "Landing Page Website",
    project: "Website INFEST"
  },
  {
    date: 12,
    month: 5,
    task: "Admin Dashboard",
    project: "Website PTD"
  },
  {
    date: 14,
    month: 5,
    task: "Tasks Page",
    project: "Website PTD"
  },
  {
    date: 17,
    month: 5,
    task: "Handbook Page",
    project: "Website PTD"
  },
  {
    date: 20,
    month: 5,
    task: "Subject Page Design",
    project: "Website PTD"  
  }
]

export default function Home() {
  const [date, setDate] = useState<Date | undefined>()

  const formatDate = (date: Date | undefined) => {
    if (!date) return null;
  
    const day = date.getDate();
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${day} ${monthNames[monthIndex]} ${year}`;
  };

  return (
    <main className="wrapper space-y-8">
      <div className="space-y-2">
        <h1 className="font-bold text-2xl">Hello, Atqiya!</h1>
        <p className="font-light">Here's your agenda today</p>
      </div>

      <div className="flex flex-row gap-x-6">
        <Calendar 
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border w-[280px] h-[350px]"
        />
        <div className="rounded-md border py-4 px-8 w-full min-w-[500px] flex flex-col gap-y-4">
          <h3 className="font-bold text-xl">Your Tasks {date && "Deadline on : " + formatDate(date)} </h3>
          <ul className="overflow-hidden">
            <ScrollArea className="overflow-hidden h-[250px]">
            {date !== undefined ? 
              tasks
                .filter(task => task.date === date.getDate() && task.month === date.getMonth() + 1)
                .map((task, index) => (
                  <li key={index} className="mb-2">
                    <NotificationsCard 
                      date={task.date}
                      month={task.month}
                      task={task.task}
                      project={task.project}
                      backgroundColor={task.date - new Date().getDate() <= 7 ? "bg-gradient-to-r gradient-3" : "bg-gradient-to-l gradient-2"}
                    />
                  </li>
                ))
              : tasks.map((task, index) => (
                  <li key={index} className="mb-2">
                    <NotificationsCard 
                      date={task.date}
                      month={task.month}
                      task={task.task}
                      project={task.project}
                      backgroundColor={task.date - new Date().getDate() <= 7 ? "bg-gradient-to-r gradient-3" : "bg-gradient-to-l gradient-2"}
                    />
                  </li>
                ))
            }
            </ScrollArea>
          </ul>
        </div>
      </div>
      
    </main>
  );
}
