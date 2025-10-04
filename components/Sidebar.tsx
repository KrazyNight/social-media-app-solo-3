import React from 'react'
import {
    BellIcon,
    BookmarkIcon,
    EllipsisHorizontalCircleIcon,
    HashtagIcon,
    HomeIcon,
    InboxIcon,
    UserIcon,


} from "@heroicons/react/24/outline"

export default function Sidebar() {
  return (
    <>
    <nav>
        <div>
            Logo
        </div>

        <ul>
            <SidebarLink Icon={HomeIcon} text="Home" />
            <SidebarLink Icon={HashtagIcon} text="Explore" />
            <SidebarLink Icon={BellIcon} text="Notifications" />
            <SidebarLink Icon={InboxIcon} text="Messages" />
            <SidebarLink Icon={BookmarkIcon} text="Bookmarks" />
            <SidebarLink Icon={UserIcon} text="Profile" />
            <SidebarLink Icon={EllipsisHorizontalCircleIcon} text="More" />
            {/* npm install @heroicons/react@2.1.3 */}
        </ul>

        <div>
            user Info
        </div>
    </nav>
      
    </>
  )
}



function SidebarLink({ text, Icon }) {
    return (
        <>
        <Icon className="h-7" />
        {text}
        
        </>
    )
}


// //step 2
// import React from 'react'
// // import {} from "@heroicons/react/24/outline"

// export default function Sidebar() {
//   return (
//     <>
//         <nav>
//             <div>
//                 logo
//             </div>

//             <ul>
//                 <SidebarLink Icon={HomeIcon} text="Home" />
//                 <SidebarLink Icon={HomeIcon} text="Home" />
//                 <SidebarLink Icon={HomeIcon} text="Home" />
//                 <SidebarLink Icon={HomeIcon} text="Home" />
//                 <SidebarLink Icon={HomeIcon} text="Home" />
//                 <SidebarLink Icon={HomeIcon} text="Home" />
//                 <SidebarLink Icon={HomeIcon} text="Home" />
//                 {/* npm intall @heroicons/react@2.1.3 */}
//             </ul>

//             <div>
//                 user info
//             </div>
//         </nav>
//     </>
//   )
// }

// function SidebarLink({ text, Icon }) {
//     return (
//         <>
//         <li className='flex items-center text-xl' >
//             <Icon className="h-7" />
//             {text}
//         </li>
//         </>
//     )
// }



//step 1
// import React from 'react'

// export default function Sidebar() {
//   return (
//     <>
//     <nav>
//         <div>
//             Logo
//         </div>

//         <ul>
//             <li>Home</li>
//             <li>Home</li>
//             <li>Home</li>
//             <li>Home</li>
//             <li>Home</li>
//             <li>Home</li>
//             <li>Home</li>
//         </ul>

//         <div>
//             user info
//         </div>
//     </nav>
//     </>
//   )
// }
