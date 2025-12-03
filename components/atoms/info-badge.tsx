import React from "react";
import { Badge } from "../ui/badge";

export default function InfoBadge({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <Badge variant={'secondary'} className="flex gap-2 items-center p-3">{children}</Badge>;
}
