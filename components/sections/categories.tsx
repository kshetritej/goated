import { Badge } from "../ui/badge";
import {CategoryCard} from "../cards/category-card";

export function CategoriesSection() {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto p-4 md:p-8">
      <div>
        <Badge className="p-4">Europe</Badge>
      </div>
      <div className="grid md:grid-cols-4 gap-4 py-4">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
}
