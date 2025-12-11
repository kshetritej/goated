import GuideCard from "../cards/guide-card";

export default function Guides() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-4 md:p-8">
      <h4 className="text-3xl font-bold">Meet Our Team</h4>
      <div className="grid md:grid-cols-2 gap-4 container mx-auto">
        <GuideCard />
        <GuideCard />
        <GuideCard />
        <GuideCard />
      </div>
    </div>
  );
}
