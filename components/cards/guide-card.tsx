import { GOAT_IMAGE } from "@/constants/goat";
import { Badge } from "../ui/badge";
import { LucideMountain } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

export default function GuideCard() {
  return (
    <Card className="p-4 md:p-8">
      <div className="flex flex-col  gap-12">
        <div className="size-46 aspect-square rounded-full">
          <img
            src={GOAT_IMAGE.src}
            alt=""
            className="rounded-full aspect-square object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-2xl">Lorem Ipsum</h4>
          <div className="flex gap-2">
            <Badge className="p-2">
              <LucideMountain />
              Adventure
            </Badge>
            <Badge className="p-2">
              <LucideMountain />
              Adventure
            </Badge>
            <Badge className="p-2">
              <LucideMountain />
              Adventure
            </Badge>
          </div>
          <div className="flex gap-4 pt-4">
            <Button size={"lg"}>Contact</Button>
            <Button size={"lg"}>About</Button>
          </div>
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          magni recusandae facere cupiditate autem, illum commodi maiores
          excepturi laboriosam, dolorum nisi voluptatem facilis officia
          blanditiis, veniam voluptatum atque mollitia. Quidem, molestiae quas.
        </p>
      </div>
    </Card>
  );
}
