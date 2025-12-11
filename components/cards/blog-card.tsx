import { GOAT_IMAGE } from "@/constants/goat";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function BlogCard() {
  return (
    <Card className="flex flex-col md:flex-row w-full p-0 m-0">
      <CardContent className="p-0 m-0">
        <img src={GOAT_IMAGE.src} className="w-3xl rounded-l-md" alt="" />
      </CardContent>
      <CardHeader className="w-full text-left flex flex-col gap-4 p-4 md:p-8">
        <CardTitle className="text-2xl">
          Alta Via 1: Map, Difficulty & Complete Route in the Dolomites
        </CardTitle>
        <CardDescription>
          <p className="font-bold">By Charisa Kailey-Le</p>
          <p className="text-lg">
            Alta Via 1, often hailed as the queen of all Alta Vias — a Dolomites
            classic — is on your bucket list. Of course, it is! This isn’t just
            another trail; it’s a journey through some of Italy's most dramatic
            limestone peaks.
          </p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
