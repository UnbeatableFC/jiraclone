import UserButton from "@/features/auth/components/UserButton";
import Image from "next/image";
import Link from "next/link";

interface StandaloneLayoutProps {
  children: React.ReactNode;
}

const StandaloneLayout = ({ children }: StandaloneLayoutProps) => {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center h-[73px]">
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
          <UserButton />
        </nav>
        <div className="flex flex-col items-center justify-center py-4">
          {children}
        </div>
      </div>
    </main>
  );
};

export default StandaloneLayout;
