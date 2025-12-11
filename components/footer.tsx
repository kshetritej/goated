import { Button } from "./ui/button";

const trekkingTypes = [
  "Hut to hut Trekking",
  "Hut to hut hiking",
  "Walking Holidays",
  "Climb Everest",
  "Hut to Hut Hiking Nepal",
  "Hut to Hut Hiking Austria",
];

export default function Footer() {
  return (
    <div className="h-[40vh] p-4 md:p-8 border-t border-secondary mt-4">
      <div className="grid md:grid-cols-3 container mx-auto gap-8">
        <div>
          {trekkingTypes.map((ttype: string) => {
            return <li className="list-none" key={ttype}>{ttype}</li>;
          })}
        </div>
        <div>
          {trekkingTypes.map((ttype: string) => {
            return <li className="list-none" key={ttype}>{ttype}</li>;
          })}
        </div>
        <div>
          {trekkingTypes.map((ttype: string) => {
            return <li className="list-none" key={ttype}>{ttype}</li>;
          })}
        </div>
      </div>
      <div className="flex justify-between container mx-auto py-4 border-t border-secondary mt-8">
        <p>Excellent in Trustpilot</p>
        <Button>Contact</Button>
      </div>
    </div>
  );
}
