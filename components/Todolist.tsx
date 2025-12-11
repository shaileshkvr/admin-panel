import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";

const Todolist = () => {
  return (
    <div className="">
      Calender
      {/* List */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <Card className="p-4 mb-2">
          <div className="flex items-center gap-4">
            <Checkbox id="item-1" />
            <label htmlFor="item-1">
              <p>Click to Check</p>
              <p className="text-sm text-muted-foreground">Foreground text</p>
            </label>
          </div>
        </Card>
        <Card className="p-4 mb-2">
          <div className="flex items-center gap-4">
            <Checkbox id="item-1" />
            <label htmlFor="item-1">
              <p>Click to Check</p>
              <p className="text-sm text-muted-foreground">Foreground text</p>
            </label>
          </div>
        </Card>
        <Card className="p-4 mb-2">
          <div className="flex items-center gap-4">
            <Checkbox id="item-2" />
            <label htmlFor="item-2">
              <p>Click to Check</p>
              <p className="text-sm text-muted-foreground">Foreground text</p>
            </label>
          </div>
        </Card>
        <Card className="p-4 mb-2">
          <div className="flex items-center gap-4">
            <Checkbox id="item-3" />
            <label htmlFor="item-3">
              <p>Click to Check</p>
              <p className="text-sm text-muted-foreground">Foreground text</p>
            </label>
          </div>
        </Card>
        <Card className="p-4 mb-2">
          <div className="flex items-center gap-4">
            <Checkbox id="item-4" />
            <label htmlFor="item-4">
              <p>Click to Check</p>
              <p className="text-sm text-muted-foreground">Foreground text</p>
            </label>
          </div>
        </Card>
      </ScrollArea>
    </div>
  );
};

export default Todolist;
