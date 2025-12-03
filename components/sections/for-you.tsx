import ForYouCard from "../cards/for-you-card";

export default function ForYouSection() {
  return (
    <div className="container mx-auto py-8 flex flex-col justify-center text-center">
      <h2 className="uppercase font-extrabold text-4xl mb-8">Just for you</h2>
      <div className="grid grid-cols-2 gap-4">
        <ForYouCard />
        <ForYouCard />
      </div>
    </div>
  );
}
