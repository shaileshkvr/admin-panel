import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";

const todoItems: {
  id: number;
  title: string;
  description: string;
  checked: boolean;
}[] = [
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
];

const Todolist = () => {
  return (
    <div className="">
      Calender
      {/* List */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        {todoItems.map((item) => (
          <Card key={item.id} className="mb-2 p-0 border-0">
            <Label
              htmlFor={`item-${item.id}`}
              className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-aria-checked:border-green-600 has-aria-checked:bg-green-50 dark:has-aria-checked:border-green-900 dark:has-aria-checked:bg-green-950"
            >
              <Checkbox
                id={`item-${item.id}`}
                // checked={item.checked}
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
