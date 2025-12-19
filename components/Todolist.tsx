"use client";

import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

const Todolist = () => {
  const [todoItems, setTodoItems] = useState<
    {
      id: number;
      title: string;
      description: string;
      checked: boolean;
    }[]
  >([
    {
      id: 1,
      title: "Complete Admin Panel",
      description: "Replicate a admin look-alike panel for management purposes",
      checked: false,
    },
    {
      id: 2,
      title: "Learn Advance Tailwind",
      description: "Learn Tailwind CSS while using shadcn components",
      checked: false,
    },
    {
      id: 3,
      title: "Fuzzy-Trends frontend",
      description: "Create a frontend for fuzzy-trends project",
      checked: false,
    },
    {
      id: 4,
      title: "Fuzzy-Trends backend",
      description: "Create a backend for fuzzy-trends project using fastify",
      checked: false,
    },
    {
      id: 5,
      title: "Fuzzy-Trends backend",
      description: "Learn how to work with fastify and integrate with frontend",
      checked: false,
    },
  ]);
  const [date, setDate] = useState<Date | undefined>();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDate(new Date());
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const toggleTodoItem = (id: number) => {
    setTodoItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Todos</h1>
      {/* Calender */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Select Date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        {todoItems.map((item) => (
          <Card key={item.id} className="mb-2 p-0 border-0">
            <Label
              htmlFor={`item-${item.id}`}
              className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-aria-checked:border-green-600 has-aria-checked:bg-green-50 dark:has-aria-checked:border-green-900 dark:has-aria-checked:bg-green-950"
            >
              <Checkbox
                id={`item-${item.id}`}
                checked={item.checked}
                onCheckedChange={() => toggleTodoItem(item.id)}
                className="data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 data-[state=checked]:text-white dark:data-[state=checked]:border-green-700 dark:data-[state=checked]:bg-green-700"
              />
              <div className="grid gap-1.5">
                <p className="leading-none">{item.title}</p>
                <p className="text-sm text-muted-foreground font-normal">
                  {item.description}
                </p>
              </div>
            </Label>
          </Card>
        ))}
      </ScrollArea>
    </div>
  );
};

export default Todolist;
