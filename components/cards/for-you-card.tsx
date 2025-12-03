import { GOAT_IMAGE } from "@/constants/goat";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  LucideCompass,
  LucideFootprints,
  LucideMapPin,
  LucideMountain,
  LucideRoute,
} from "lucide-react";
import InfoBadge from "../atoms/info-badge";
import { Button } from "../ui/button";

export default function ForYouCard() {
  return (
    <Card className="p-0 overflow-hidden m-0 text-left hover:-translate-y-0.5 ease-in-out transform-all">
      <CardHeader className="p-0">
        <div className="rounded-t-3xl bg-amber-400 p-4 flex gap-2 items-center -mb-4 text-accent">
          <LucideMountain size={32} fill="white" stroke="white" />
          <div className="flex flex-col text-left">
            <p className="font-bold -mb-1">Intermediate</p>
            <p>Our most loved adventure</p>
          </div>
        </div>
        <img src={GOAT_IMAGE.src} className="w-full h-[200px] object-cover" />
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <CardTitle className="text-xl">Classic Dolorama Weg</CardTitle>
        <CardDescription className="flex gap-4 items-center -ml-3">
          <Button
            variant={"link"}
            className="flex gap-1 items-center justify-center"
          >
            <LucideCompass /> Bookatrekking.com Trips
          </Button>
          <Button
            variant={"link"}
            className="flex gap-1 items-center justify-center"
          >
            <LucideMapPin />
            Switzerland
          </Button>
        </CardDescription>
        <div className="flex gap-4 flex-wrap">
          <InfoBadge>
            <LucideCompass /> Duration: 4 Days
          </InfoBadge>
          <InfoBadge>
            <LucideFootprints /> Trails : T2 Trails
          </InfoBadge>
          <InfoBadge>
            <LucideRoute /> Distance: 10-15km per day
          </InfoBadge>
          <InfoBadge>
            <LucideMountain /> Ascent per day: 500-100m ascent per day
          </InfoBadge>
        </div>
      </CardContent>
      <CardFooter className="pb-4">
        <Button size={"lg"} className="w-full py-6">
          Start your journey
        </Button>
      </CardFooter>
    </Card>
  );
}
