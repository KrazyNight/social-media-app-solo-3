import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="text-[#0f1419] min-h-screen
    border-2 border-black
    max-w-[1400px] mx-auto
    ">

      <Sidebar />
      {/* <PostFeed /> 
      <Widgets /> */}
    </div>
    
    </>
  );
}

// <div className=" text-blue
//   min-h-screen
//   max-w-[1400px]
//   mx-auto
//   border-2 border-black

// ">
//   <span>hit</span>
// </div>
