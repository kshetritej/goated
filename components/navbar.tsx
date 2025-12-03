import BottomNav from "./bottom-nav";
import TopNav from "./top-nav";

export default function Navbar() {
  return (
    <div className="p-8 container mx-auto bg-background rounded-2xl z-9999">
      <TopNav />
      <BottomNav/>
    </div>
  );
}
