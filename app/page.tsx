import Footer from "@/components/footer";
import HomepageHero from "@/components/hero";
import AboutUsSection from "@/components/sections/about-us";
import { CategoriesSection } from "@/components/sections/categories";
import ForYouSection from "@/components/sections/for-you";
import Guides from "@/components/sections/guides-section";
import Inspirations from "@/components/sections/inspirations";

export default function Home() {
  return (
    <>
      <HomepageHero/>
      <ForYouSection/>
      <CategoriesSection/>
      <Inspirations/>
      <AboutUsSection/>
      <Guides/>
      <Footer/>
    </>
  );
}
