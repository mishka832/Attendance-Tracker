import { LayoutIcon, GraduationCap, Hand } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutIcon,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Students",
      icon: GraduationCap,
      path: "/dashboard/students",
    },
    {
      id: 3,
      name: "Attendance",
      icon: Hand,
      path: "/dashboard/attendance",
    },
  ];

  return (
    <div className="border shadow-md h-screen p-5 bg-black">
      {/* Logo Section */}
      <div className="mb-5 flex justify-center">
        <Link href="/">
          <Image
            src="/images/logo.jpg"  // Updated path to logo image
            width={150}              // Larger width for the logo
            height={150}             // Larger height for the logo
            alt="Logo"
            className="rounded-full" // This will make the logo round
          />
        </Link>
      </div>

      <hr className="my-5 border-gray-600" />

      {/* Menu List */}
      <ul className="space-y-4">
        {menuList.map((item) => (
          <li
            key={item.id}
            className="group flex items-center space-x-3 p-3 rounded-md cursor-pointer hover:bg-gray-700"
          >
            <Link href={item.path} className="flex items-center space-x-3 w-full">
              <item.icon className="w-6 h-6 text-cyan-400 group-hover:text-yellow-400" />
              <span className="text-lg text-slate-400 font-medium group-hover:text-yellow-400">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideNav;



