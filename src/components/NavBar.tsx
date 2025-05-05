import UserButton from "@/features/auth/components/UserButton";
import MobileSidebar from "./MobileSidebar";

const NavBar = () => {

  return (
    <nav className="pt-4 px-6 flex items-center justify-between">
      <div className="lg:flex flex-col hidden">
        <h1 className="text-[22px] font-semibold">Home</h1>
        <p className="text-muted-foreground">Monitor all of your projects and tasks here</p>
      </div>
      <MobileSidebar />
      <UserButton />
    </nav>
  );
};

export default NavBar;
