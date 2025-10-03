import React from 'react'

export default function Sidebar() {
  return (
    <>
    <nav>
        <div>
            Logo
        </div>

        <ul>
            <SidebarLink Icon={HomeIcon} text="home" />
            <SidebarLink Icon={HomeIcon} text="home" />
            <SidebarLink Icon={HomeIcon} text="home" />
            <SidebarLink Icon={HomeIcon} text="home" />
            <SidebarLink Icon={HomeIcon} text="home" />
            <SidebarLink Icon={HomeIcon} text="home" />
            <SidebarLink Icon={HomeIcon} text="home" />
        </ul>

        <div> user info</div>
    </nav>
      
    </>
  )
}

//npm install @heroicons/react@2.1.3
function SidebarLink({text, Icon}) {
    return (
        <>
        <li>
            <Icon className="h-7 " />
            {text}
        </li>
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
