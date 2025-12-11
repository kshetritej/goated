import { GOAT_IMAGE } from "@/constants/goat";
import { Button } from "../ui/button";

export default function AboutUsSection() {
  return (
    <div className="flex gap-4 container mx-auto p-8">
      <div className="flex flex-col items-start gap-4">
        <h4 className="text-3xl font-bold">About us</h4>
        <p>
          About Us At Bookatrekking.com, you will find the trek that will make
          your life unforgettable. Whether you want to explore the Inca Trail or
          climb Kilimanjaro. Bookatrekking.com has a wide and varied range of
          first-class treks. No false promises are made here. Transparent prices
          and bookings are fixed instantly. Find, compare, book and trek!
        </p>
        <Button>Read more about us</Button>
      </div>
      <div className="w-420 hidden md:block">
        <img src={GOAT_IMAGE.src} className="rounded-sm"/>
      </div>
    </div>
  );
}
