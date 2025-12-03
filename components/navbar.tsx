import BottomNav from "./bottom-nav";
import TopNav from "./top-nav";

export default function Navbar() {
  return (
    <div className="p-8">
      <TopNav />
      <BottomNav/>
    </div>
  );
}
