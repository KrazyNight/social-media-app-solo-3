//step 3 ICONS vid: 1:09:00
import { ArrowUpTrayIcon, ChartBarIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

export default function Post() {
  return (
    <>
    <div>
        <PostHeader />

        <div className='ml-16 p-3 flex space-x-14 '>

            <div className='relative  '>
                <ChatBubbleOvalLeftEllipsisIcon className='
                w-[22px] h-[22px] cursor-pointer
                hover:text-[#f4af01] transition
                ' />
                <span className='absolute text-xs top-0 -right-3  '>
                    2
                </span>
            </div>
            <div className='relative  '>
                <HeartIcon className='
                w-[22px] h-[22px] cursor-pointer
                hover:text-[#f4af01] transition
                ' />
                <span className='absolute text-xs top-0 -right-3  '>
                    2
                </span>
            </div>
            <div className='relative  '>
                <ChartBarIcon className='
                w-[22px] h-[22px] cursor-not-allowed
                hover:text-[red] transition
                ' />
            </div>
            <div className='relative  '>
                <ArrowUpTrayIcon className='
                w-[22px] h-[22px] cursor-not-allowed
                hover:text-[red] transition
                ' />
                
            </div>



        </div>



        
    </div>
      
    </>
  )
}







        // <div className="ml-16 p-3 flex ">
        //     <div className='relative'>
        //         <ChatBubbleOvalLeftEllipsisIcon className='
        //         w-[22px] h-[22px] cursor-pointer
        //         hover:text-[#f4af01] transition
        //         '/>
        //         <span className='absolute text-xs top-0 -right-3 '>
        //             2
        //         </span>
                


        //     </div>
        // </div>

export function PostHeader() {
    return (
        <>
        <div className='flex p-3 space-x-6 '>
            <Image
            src={"/assets/profile-pic.png"}
            width={44}
            height={44}
            alt='Profile-Pic'
            className='h-11 w-11  '
            />

            <div className='text-[15px] flex flex-col space-y-2   '>
                <div className='flex space-x-3 text-[#707e89] '>
                    <span className='text-black font-bold
                    inline-block
                    
    
                    whitespace-nowrap overflow-hidden text-ellipsis
                
                    max-w-[60px]
                    min-[400px]:max-w-[100px]
                    min-[500px]:max-w-[140px]
                    sm:max-w-[160px]
                    
                    '>Guest: uidshguihsdiughdsiughuidsghiithoerjgioe</span>
                    <span className='
                    
                    inline-block
                    whitespace-nowrap overflow-hidden text-ellipsis

                    max-w-[60px]
                    min-[400px]:max-w-[100px]
                    min-[500px]:max-w-[140px]
                    sm:max-w-[160px]
                    '>Username: sdfuhguidshgiuadhsguiahsidjagshu</span>
                    <span> · </span>
                    <span> a day ago </span>

                </div>
                <span>text </span>
            </div>
        </div>
        </>
    )

    //              inline-block
    //                 
    //                 whitespace-nowrap overflow-hidden text-ellipsis
                
    //                 max-w-[60px]
    //                 min-[400px]:max-w-[100px]
    //                 min-[500px]:max-w-[140px]
    //                 sm:max-w-[160px]

    //- inline-block: allows to access the <span> and set max-width ::::remember span are inline elements
    // whitespace-nowrap: makes sure that our text never goes onto multiple lines
    // overflow-hidden:  we don't want our text going past our max-width  
    // text-ellipsis: when out text goes past max-width, we wil display ellipsis
                    
}




// //step 2 text response vid: 1:04:00
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
//             className='h-11 w-11  '
//             />

//             <div className='text-[15px] flex flex-col space-y-2   '>
//                 <div className='flex space-x-3 text-[#707e89] '>
//                     <span className='text-black font-bold
//                     inline-block
                    
    
//                     whitespace-nowrap overflow-hidden text-ellipsis
                
//                     max-w-[60px]
//                     min-[400px]:max-w-[100px]
//                     min-[500px]:max-w-[140px]
//                     sm:max-w-[160px]
                    
//                     '>Guest: uidshguihsdiughdsiughuidsghiithoerjgioe</span>
//                     <span className='
                    
//                     inline-block
//                     whitespace-nowrap overflow-hidden text-ellipsis

//                     max-w-[60px]
//                     min-[400px]:max-w-[100px]
//                     min-[500px]:max-w-[140px]
//                     sm:max-w-[160px]
//                     '>Username: sdfuhguidshgiuadhsguiahsidjagshu</span>
//                     <span> · </span>
//                     <span> a day ago </span>

//                 </div>
//                 <span>text </span>
//             </div>
//         </div>
//         </>
//     )

//     //              inline-block
//     //                 
//     //                 whitespace-nowrap overflow-hidden text-ellipsis
                
//     //                 max-w-[60px]
//     //                 min-[400px]:max-w-[100px]
//     //                 min-[500px]:max-w-[140px]
//     //                 sm:max-w-[160px]

//     //- inline-block: allows to access the <span> and set max-width ::::remember span are inline elements
//     // whitespace-nowrap: makes sure that our text never goes onto multiple lines
//     // overflow-hidden:  we don't want our text going past our max-width  
//     // text-ellipsis: when out text goes past max-width, we wil display ellipsis
                    
// }


// inline-block
// whitespace-nowrap
// overflow-hidden text-ellipsis
// max-w-[60px]
// min-[400px]:max-w-[100px]
//min-[500px]:max-w-[140px]
//sm:max-w-[160px]
//

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
