import { CalendarIcon, ChartBarIcon, FaceSmileIcon, MapPinIcon, PhotoIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

export default function PostInput() {
  return (
    <>
    <div className='flex p-3 space-x-6 border-b-2 '>
      <Image
      src={"/assets/busybee-logo2.png"}
      width={44}
      height={44}
      alt='Logo'
      className='w-11 h-11'

      />

      <div className='w-full  '>

        <textarea className='
        w-full min-h-[50px] text-lg
        resize-none outline-none
        border-b-2
        '
        placeholder="What's happening!? "
        />

        <div className='flex justify-between pt-5'>
          <div className='flex space-x-2'>
            <PhotoIcon className='w-5 h-5 text-[#f4af01] '/>
            <ChartBarIcon className='w-5 h-5 text-[#f4af01] '/>
            <FaceSmileIcon className='w-5 h-5 text-[#f4af01] '/>
            <CalendarIcon className='w-5 h-5 text-[#f4af01] '/>
            <MapPinIcon className='w-5 h-5 text-[#f4af01] '/>
          </div>
          <button className='
          bg-[#f4af01] text-white text-sm
          w-[80px] h-[36px]
          rounded-full cursor-pointer

          '>
            Bumble
          </button>
        </div>
      </div>
      



    </div>     
    </>
  )
}

// //Final
// import { CalendarIcon, ChartBarIcon, FaceSmileIcon, MapPinIcon, PhotoIcon } from '@heroicons/react/24/outline'
// import Image from 'next/image'
// import React from 'react'

// export default function PostInput() {
//   return (
//     <>
//     <div className='flex p-3 space-x-6 border-b-2'>
//         <Image
//         src={"/assets/busybee-logo2.png"}
//         height={44}
//         width={44}
//         alt="Logo"
//         className='h-[44px] w-[44px] '
//         / >
//         <div className='w-full'>
//             <textarea className='w-full min-h-[50px] text-lg
//             resize-none outline-none
//             border-b-2
//             '
//             placeholder="What's happening!?"
//             />

//             <div className='flex justify-between pt-5'>
//                 <div className='flex space-x-2'>
//                     <PhotoIcon className='h-5 w-5 text-[#f4af01] ' />
//                     <ChartBarIcon className='h-5 w-5 text-[#f4af01] ' />
//                     <FaceSmileIcon className='h-5 w-5 text-[#f4af01] ' />
//                     <CalendarIcon className='h-5 w-5 text-[#f4af01] ' />
//                     <MapPinIcon className='h-5 w-5 text-[#f4af01] ' />
//                 </div>

//                 <button className=' w-[80px] h-[36px]
//                  bg-[#f4af01] text-white text-sm
//                  rounded-full cursor-pointer
                
//                 '>
//                     Bumble
//                 </button>
//             </div>

//         </div>

//     </div>
//     </>
//   )
// }



// // //Step 1
// // import { CalendarIcon, ChartBarIcon, FaceSmileIcon, MapPinIcon, PhotoIcon } from '@heroicons/react/24/outline'
// // import Image from 'next/image'
// // import React from 'react'

// // export default function PostInput() {
// //   return (
// //     <>
// //     <div className='flex space-x-5 p-3 '>
// //         <Image
// //         src={"/assets/busybee-logo2.png"}
// //         width={44}
// //         height={44}
// //         alt="Logo"
// //         className='w-11 h-11'
// //         />
// //         <div className='w-full '>
// //             <textarea className='
// //             resize-none  
// //             w-full min-h-[50px] text-lg
// //             '
// //             placeholder="What's happening!?"
// //             />

// //             <div className='flex justify-between'>
// //                 <div className='flex space-x-3'>
// //                     <PhotoIcon className='w-[22px] h-[22px] text-[#f4af01] ' />
// //                     <ChartBarIcon className='w-[22px] h-[22px] text-[#f4af01] ' />
// //                     <FaceSmileIcon className='w-[22px] h-[22px] text-[#f4af01] ' />
// //                     <CalendarIcon className='w-[22px] h-[22px] text-[#f4af01] ' />
// //                     <MapPinIcon className='w-[22px] h-[22px] text-[#f4af01] ' />

// //                 </div>
// //                 <button className='
// //                 bg-[#f4af01] text-white text-sm
// //                 w-[80px] h-[36px]
// //                 rounded-full cursor-pointer
// //                 '>
// //                     Bumble
// //                 </button>
// //             </div>


// //         </div>
// //     </div>
      
// //     </>
// //   )
// // }
