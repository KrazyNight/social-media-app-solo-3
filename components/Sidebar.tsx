import React from 'react'
import { BellIcon, BookmarkIcon, EllipsisHorizontalCircleIcon, HashtagIcon, HomeIcon, InboxIcon, UserIcon } from "@heroicons/react/24/outline"
import Image from 'next/image'

export default function Sidebar() {
  return (
    <>
    <nav className='h-screen
    hidden
    sm:flex flex-col 
    sticky top-0 
    p-3
    xl:ml-20
    xl:mr-10
    '>
      <div className='relative h-full  '>

        <div className='py-3 '>
          <Image
          src={"/assets/busybee-logo2.png"}
          width={52}
          height={52}
          alt="Logo"
          />
        </div>

        <ul>
          <SidebarLink Icon={HomeIcon} text="Home" />
          <SidebarLink Icon={HashtagIcon} text="Explore" />
          <SidebarLink Icon={BellIcon} text="Notifications" />
          <SidebarLink Icon={InboxIcon} text="Messages" />
          <SidebarLink Icon={BookmarkIcon} text="Bookmark" />
          <SidebarLink Icon={UserIcon} text="Profile" />
          <SidebarLink Icon={EllipsisHorizontalCircleIcon} text="More" />
          <button className=' hidden xl:block
          bg-yellow-400 text-white text-xl
          w-[200px]
          h-[52px]
          rounded-full
          shadow-lg
          cursor-pointer
          mt-2





          '>
            Bumble
          </button>

        </ul>

        <div className='absolute bottom-0'>
          user info
        </div>
      </div>

    </nav>
      
    </>
  )
}

interface SidebarLinkProps {
  text: string;
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string;
    titleId?: string;
} & React.RefAttributes<SVGSVGElement>>
}
function SidebarLink({ text, Icon }: SidebarLinkProps) {
  return (
    <>
    <li className='flex items-center text-xl mb-6 space-x-3 pl-3 '>

      <Icon className="h-7" />
      {/* npm install @heroicons/react@2.1.3 */}
      <span className='hidden md:block'> {text} </span>
    </li>
    </>
  )
}

// //step 4 perfect

// import React from "react";
// import {
//   BellIcon,
//   BookmarkIcon,
//   EllipsisHorizontalCircleIcon,
//   HashtagIcon,
//   HomeIcon,
//   InboxIcon,
//   UserIcon,
// } from "@heroicons/react/24/outline";
// import Image from "next/image";

// export default function Sidebar() {
//   return (
//     <>
//       <nav
//         className=" h-screen
//     hidden sm:flex flex-col sticky top-0 p-3 xl:ml-20 "
//     // what does it look without " xl:ml-20 ""
//       >
//         <div className="relative h-full">
//           <div className="py-3">
//             <Image
//               src={"/assets/busybee-logo2.png"}
//               height={52}
//               width={52}
//               alt="Logo"
//             />
//           </div>

//           <ul>
//             <SidebarLink Icon={HomeIcon} text="Home" />
//             <SidebarLink Icon={HashtagIcon} text="Exlpore" />
//             <SidebarLink Icon={BellIcon} text="Notifications" />
//             <SidebarLink Icon={InboxIcon} text="Messages" />
//             <SidebarLink Icon={BookmarkIcon} text="Bookmark" />
//             <SidebarLink Icon={UserIcon} text="Profile" />
//             <SidebarLink Icon={EllipsisHorizontalCircleIcon} text="More" />
//             <button
//               className=" hidden xl:block
//                 bg-[#f4af01] text-white text-xl w-[200px] h-[52px]
//                 rounded-full cursor-pointer shadow-md mt-2
//                 "
//             >
//               Bumble
//             </button>
//           </ul>

//           <div className="absolute bottom-0">user info</div>
//         </div>
//       </nav>
//     </>
//   );
// }

// interface SidebarLinkProps {
//   text: string;
//   Icon: React.ForwardRefExoticComponent<
//     Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
//       title?: string;
//       titleId?: string;
//     } & React.RefAttributes<SVGSVGElement>
//   >;
// }
// function SidebarLink({ text, Icon }: SidebarLinkProps) {
//   return (
//     <>
//       <li className="flex items-center text-xl mb-6 space-x-3 p-3">
//         <Icon className="h-7 " />
//         {/* npm install @heroicons/react@2.1.3 */}
//         <span className="hidden md:block  ">{text}</span>
//       </li>
//     </>
//   );
// }

// // //step 3

// // import React from "react";
// // import {
// //   BellIcon,
// //   BookmarkIcon,
// //   EllipsisHorizontalCircleIcon,
// //   HashtagIcon,
// //   HomeIcon,
// //   InboxIcon,
// //   UserIcon,
// // } from "@heroicons/react/24/outline";
// // import Image from "next/image";

// // export default function Sidebar() {
// //   return (
// //     <>
// //       <nav className=" h-screen
// //       hidden sm:flex flex-col sticky top-0 p-3 xl:ml-20 ">
// //         <div className="relative h-full  ">

// //             <div className="py-3 ">
// //             <Image
// //                 src={"/assets/busybee-logo2.png"}
// //                 width={42}
// //                 height={42}
// //                 alt="Logo"
// //             />
// //             </div>

// //             <ul>
// //             <SidebarLink Icon={HomeIcon} text="Home" />
// //             <SidebarLink Icon={HashtagIcon} text="Explore" />
// //             <SidebarLink Icon={BellIcon} text="Notifications" />
// //             <SidebarLink Icon={InboxIcon} text="Messages" />
// //             <SidebarLink Icon={BookmarkIcon} text="Bookmarks" />
// //             <SidebarLink Icon={UserIcon} text="Profile" />
// //             <SidebarLink Icon={EllipsisHorizontalCircleIcon} text="More" />
// //             {/* npm install @heroicons/react@2.1.3 */}

// //             <button className="hidden xl:block
// //              bg-[#f4af01] w-[200px] h-[52px]
// //             rounded-full text-white font-medium cursor-pointer shadow-md mt-2
// //             ">
// //                 Bumble
// //             </button>
// //             </ul>

// //             <div className="absolute bottom-0  ">user Info</div>
// //         </div>

// //       </nav>
// //     </>
// //   );
// // }

// // interface SidebarLinkProps {
// //   text: string;
// //   Icon: React.ForwardRefExoticComponent<
// //     Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
// //       title?: string;
// //       titleId?: string;
// //     } & React.RefAttributes<SVGSVGElement>
// //   >;
// // }

// // function SidebarLink({ text, Icon }: SidebarLinkProps) {
// //   return (
// //     <>
// //       <li className="flex items-center text-xl mb-6 space-x-3 p-3 ">
// //         <Icon className="h-7" />
// //         <span className="hidden md:block">{text}</span>
// //       </li>
// //     </>
// //   );
// // }

// // // //step 2
// // // import React from 'react'
// // // // import {} from "@heroicons/react/24/outline"

// // // export default function Sidebar() {
// // //   return (
// // //     <>
// // //         <nav>
// // //             <div>
// // //                 logo
// // //             </div>

// // //             <ul>
// // //                 <SidebarLink Icon={HomeIcon} text="Home" />
// // //                 <SidebarLink Icon={HomeIcon} text="Home" />
// // //                 <SidebarLink Icon={HomeIcon} text="Home" />
// // //                 <SidebarLink Icon={HomeIcon} text="Home" />
// // //                 <SidebarLink Icon={HomeIcon} text="Home" />
// // //                 <SidebarLink Icon={HomeIcon} text="Home" />
// // //                 <SidebarLink Icon={HomeIcon} text="Home" />
// // //                 {/* npm intall @heroicons/react@2.1.3 */}
// // //             </ul>

// // //             <div>
// // //                 user info
// // //             </div>
// // //         </nav>
// // //     </>
// // //   )
// // // }

// // // function SidebarLink({ text, Icon }) {
// // //     return (
// // //         <>
// // //         <li className='flex items-center text-xl' >
// // //             <Icon className="h-7" />
// // //             {text}
// // //         </li>
// // //         </>
// // //     )
// // // }

// // //step 1
// // // import React from 'react'

// // // export default function Sidebar() {
// // //   return (
// // //     <>
// // //     <nav>
// // //         <div>
// // //             Logo
// // //         </div>

// // //         <ul>
// // //             <li>Home</li>
// // //             <li>Home</li>
// // //             <li>Home</li>
// // //             <li>Home</li>
// // //             <li>Home</li>
// // //             <li>Home</li>
// // //             <li>Home</li>
// // //         </ul>

// // //         <div>
// // //             user info
// // //         </div>
// // //     </nav>
// // //     </>
// // //   )
// // // }
