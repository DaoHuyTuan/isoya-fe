import Image from "next/image";
import { Connect } from "../Connect";
import { Separator } from "@/components/ui/separator";

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-[10px] border-b">
      <div className="flex items-center space-x-4">
        <Image
          src={"/logo.png"}
          alt="logo"
          height={30}
          width="100"
          className="w-full h-[20px]"
        />
      </div>
      <nav className="flex items-center space-x-4">
        {/* <a href="#" className="text-gray-600 hover:text-gray-900">
          Home
        </a> */}
      </nav>
      <div className="flex gap-[10px] items-center">
        <Connect />
        {/* <Separator orientation="vertical" className="h-[inherit]" /> */}
        
      </div>
    </header>
  );
};
