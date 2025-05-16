import Link from "next/link";
import Image from "next/image";
import { DottedSeparator } from "./dotted-separator";
import Navigation from "./Navigation";
import WorkspaceSwitcher from "./WorkspaceSwitcher";

const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href="/">
        <div className="flex items-center gap-0.5">
          <Image
            src={"/logo.svg"}
            height={35}
            width={35}
            alt="logo"
          />
          <span className="font-bold text-2xl">JiraClone</span>
        </div>
      </Link>
      <DottedSeparator classname="h-0 my-4" />
      <WorkspaceSwitcher />
      <DottedSeparator classname="h-0 my-4" />
      <Navigation />
    </aside>
  );
};

export default Sidebar;
