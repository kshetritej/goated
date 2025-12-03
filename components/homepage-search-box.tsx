import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function HomepageSearchBox() {
    return (
        <div className="bg-background p-8 w-5xl rounded-2xl flex gap-4 mt-8">
            <p className="font-bold text-foreground text-xl text-left">Find that one special trekking</p>
            <div className="flex justify-between bg-accent items-center relative rounded-4xl">
                <Input className="p-8 w-2xl"/>
                <Button size={'lg'} className="absolute right-2 px-8 py-6">Search</Button>
            </div>
        </div>
    )
}