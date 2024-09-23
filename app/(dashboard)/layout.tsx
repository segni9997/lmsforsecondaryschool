import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div className="h-full overflow-auto flex">
        {/* left */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] bg-base-200 p-4  ">
          <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
          <Image src="/assets/images/logoMeti.jpg" alt="logo" width={32} height={32} className="rounded-full"/>
           <span className="hidden lg:block">Metishengo</span>
          </Link>
          <Menu/>
        </div>
        {/* right */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] bg-[#F7F8FA]  ">
          <Navbar/>
          {children}
        </div>
        {/* {children} */}
      </div>
   
  );
}
