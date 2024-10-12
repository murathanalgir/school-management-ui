import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mrthn School Management Dashboard",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className=" h-screen flex">
        {/* left */}
      <div className="w-[15%] md:w-[8%] lg:w-[16%] xl:w-[13%] p-5">
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">SchoolMrthn</span>
        </Link>
        <Menu />
      </div>
      {/* right */}
      <div className="w-[85%] md:w-[92%] lg:w-[84%] xl:w-[87%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
      </div>
    </html>
  );
}
