"use client";
import { HomepageSearchBox } from "./homepage-search-box";
import "@/public/css/hero.css";
import Navbar from "./navbar";

export default function HomepageHero() {
  return (
    <div className="heroBackground flex justify-center items-center flex-col  gap-4 text-center">
      <Navbar />
      <h1 className="uppercase font-extrabold text-5xl text-background mt-8">
        The world at your feet
      </h1>
      <p className="text-xl text-background">Find your next adventure</p>
      <HomepageSearchBox />
    </div>
  );
}
