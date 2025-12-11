import ForYouCard from "../cards/for-you-card";

export default function ForYouSection() {
  return (
    <div className="container mx-auto p-4 md:p-8 flex flex-col justify-center text-center">
      <h2 className="uppercase font-extrabold text-4xl mb-8">most popular trekking</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <ForYouCard />
        <ForYouCard />
      </div>
    </div>
  );
}
