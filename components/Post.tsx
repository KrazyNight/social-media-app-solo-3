import React from 'react'

export default function Post() {
  return (
    <>
    <div>
        <PostHeader />
    </div>
      
    </>
  )
}


export function PostHeader() {
    return (
        <>
        <div>
            Postheader
        </div>
        </>
    )
}


// //Step 1
// import Image from 'next/image'
// import React from 'react'

// export default function Post() {
//   return (
//     <>
//     <div>
//         <PostHeader />
//     </div>

      
//     </>
//   )
// }

// export function PostHeader() {
//     return (
//         <>
//         <div className='flex p-3 space-x-6 '>
//             <Image
//             src={"/assets/profile-pic.png"}
//             width={44}
//             height={44}
//             alt='Profile-Pic'
//             className='h-[44px] w-[44px] '
//             />
            
//             <div className='text-[15px] flex flex-col space-y-2  '>

//                 <div className='flex space-x-2 text-[#707e89] '>
//                     <span className='text-black font-bold'>Guest</span>
//                     <span>Username</span>
//                     <span> · </span>
//                     <span> a day ago</span>
//                 </div>
//                 <span>text hiupghieohguiehgiuheiuqb ghiueahgiuhqiueagijgewgiowe </span>

//             </div>

//         </div>

//         </>
//     )
// }
