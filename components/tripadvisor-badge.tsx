import { LucideStar } from "lucide-react";

export default function TripAdvisorBadge() {
  return (
    <div className="flex gap-1">
        Rated
      {new Array(5).fill(0).map((_, index) => (
        <div key={index} className="size-6 p-1 bg-green-600 flex items-center justify-center text-white">
          <LucideStar />
        </div>
      ))}
      on TripAdvisor
    </div>
  );
}
