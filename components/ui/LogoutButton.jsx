"use client";

import { useRouter } from "next/navigation";

import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";

const LogoutButton = ({ collapsed }) => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("edubuddy-user");

    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="
      flex
      items-center
      gap-4
      
      w-full
      
      px-4
      py-3.5
      
      rounded-2xl
      
      text-red-500
      
      hover:bg-red-50
      hover:text-red-600
      
      transition-all
      duration-300
      "
    >
      <div
        className="
        w-10
        h-10
        
        rounded-xl
        
        bg-red-50
        
        flex
        items-center
        justify-center
        "
      >
        <HiOutlineArrowRightOnRectangle className="text-xl" />
      </div>

      {!collapsed && <span className="font-semibold">Logout</span>}
    </button>
  );
};

export default LogoutButton;
