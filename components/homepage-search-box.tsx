import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function HomepageSearchBox() {
  return (
    <div className="bg-background p-8 md:w-5xl rounded-2xl flex flex-col md:flex-row gap-4 mt-8">
      <p className="font-bold text-foreground text-xl text-left">
        Find that one special trekking
      </p>
      <div className="flex justify-between bg-accent items-center relative">
        <Input className="p-8 md:w-2xl" />
        <Button size={"lg"} className="absolute right-2 px-8 py-6">
          Search
        </Button>
      </div>
    </div>
  );
}
