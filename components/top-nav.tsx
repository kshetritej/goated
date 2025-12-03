import { LucideMail, LucidePhone } from "lucide-react";
import { Button } from "./ui/button";
import TripAdvisorBadge from "./tripadvisor-badge";

export default function TopNav() {
  return (
    <div className="flex justify-between">
      <div>
        <TripAdvisorBadge />
      </div>
      <div className="flex gap-2">
        <Button size={'lg'}>
          <LucideMail />
          contact@bookatrekking.com
        </Button>
        <Button size={'lg'} variant={'secondary'}>
          <LucidePhone />
          +977 9841328947
        </Button>
      </div>
    </div>
  );
}
