import { EllipsisHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

export default function Widgets() {
  return (
    <>
    <div className='hidden lg:block'>

      <div className='
      
      p-3
      w-[400px]
      flex flex-col space-y-4
      '>

        <div className='flex
        bg-gray-100 text-gray-700
        rounded-full space-x-3
        items-center
        h-[40px]

        '>
          <MagnifyingGlassIcon className='
          w-[20px] h-[20px]
          ml-4
          ' />
          <input type="text" 
          placeholder='Search Busy Bee'
          className='bg-transparent outline-none '
          />

        </div>

        <div className='bg-gray-100
        p-3
        rounded-lg 
        '>
          <h1 className='text-black font-bold text-xl mb-2'>What's Happening ?</h1>




          <div className='flex flex-col py-3  '>
            <div className='flex justify-between
            text-gray-700
            text-[15px]
            '>
              <span>Trending in Australia</span>
              <EllipsisHorizontalIcon className='w-[22px] h-[22px]' />
            </div>
            <span className='text-md font-bold text-black'>#React</span>
            <span className='text-xs'>240K Bumbles</span>
          </div>

                  <div className='flex flex-col py-3  '>
            <div className='flex justify-between
            text-gray-700
            text-[15px]
            '>
              <span>Trending in Australia</span>
              <EllipsisHorizontalIcon className='w-[22px] h-[22px]' />
            </div>
            <span className='text-md font-bold text-black'>#React</span>
            <span className='text-xs'>240K Bumbles</span>
          </div>

                  <div className='flex flex-col py-3  '>
            <div className='flex justify-between
            text-gray-700
            text-[15px]
            '>
              <span>Trending in Australia</span>
              <EllipsisHorizontalIcon className='w-[22px] h-[22px]' />
            </div>
            <span className='text-md font-bold text-black'>#React</span>
            <span className='text-xs'>240K Bumbles</span>
          </div>

                  <div className='flex flex-col py-3  '>
            <div className='flex justify-between
            text-gray-700
            text-[15px]
            '>
              <span>Trending in Australia</span>
              <EllipsisHorizontalIcon className='w-[22px] h-[22px]' />
            </div>
            <span className='text-md font-bold text-black'>#React</span>
            <span className='text-xs'>240K Bumbles</span>
          </div>
        </div>


        
        <div className='bg-gray-100
        p-3
        rounded-lg 
        '>
                  <h1 className='text-black font-bold text-xl mb-2'> Who to Follow ?</h1>

                  <div className='flex justify-between items-center py-3  '>
                    <div className='flex space-x-3 items-center  '>
                      <Image
                      src={"/assets/erik.jpg.jpg"}
                      width={44}
                      height={44}
                      alt='Profile-Pic of Erik'
                      className='h-[44px] w-[44px] rounded-full '
                      />
                      <div className='flex flex-col text-sm'>
                        <span className='text-black'>Name</span>
                        <span>Username</span>
                      </div>
                    </div>

                    <button className='
                    bg-black text-white 
                    w-[72px] h-[40px]
                    rounded-full 
                    '>
                      Follow
                    </button>
                  </div>

                  <div className='flex justify-between items-center py-3  '>
                    <div className='flex space-x-3 items-center  '>
                      <Image
                      src={"/assets/erik.jpg.jpg"}
                      width={44}
                      height={44}
                      alt='Profile-Pic of Erik'
                      className='h-[44px] w-[44px] rounded-full '
                      />
                      <div className='flex flex-col text-sm'>
                        <span className='text-black'>Name</span>
                        <span>Username</span>
                      </div>
                    </div>

                    <button className='
                    bg-black text-white 
                    w-[72px] h-[40px]
                    rounded-full 
                    '>
                      Follow
                    </button>
                  </div>

                  <div className='flex justify-between items-center py-3  '>
                    <div className='flex space-x-3 items-center  '>
                      <Image
                      src={"/assets/erik.jpg.jpg"}
                      width={44}
                      height={44}
                      alt='Profile-Pic of Erik'
                      className='h-[44px] w-[44px] rounded-full '
                      />
                      <div className='flex flex-col text-sm'>
                        <span className='text-black'>Name</span>
                        <span>Username</span>
                      </div>
                    </div>

                    <button className='
                    bg-black text-white 
                    w-[72px] h-[40px]
                    rounded-full 
                    '>
                      Follow
                    </button>
                  </div>

                  


        </div>






      </div>
    </div>
    </>
  )
}

// //Final
// import { EllipsisHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
// import Image from 'next/image'
// import React from 'react'

// export default function Widgets() {
//   return (
//     <>
//     <div className='hidden lg:block'>

//       <div className='
      
//       p-3
//       w-[400px]
//       flex flex-col space-y-4
//       '>

//         <div className='flex
//         bg-gray-100 text-gray-700
//         rounded-full space-x-3
//         items-center
//         h-[40px]

//         '>
//           <MagnifyingGlassIcon className='
//           w-[20px] h-[20px]
//           ml-4
//           ' />
//           <input type="text" 
//           placeholder='Search Busy Bee'
//           className='bg-transparent outline-none '
//           />

//         </div>

//         <div className='bg-gray-100
//         p-3
//         rounded-lg 
//         '>
//           <h1 className='text-black font-bold text-xl mb-2'>What's Happening ?</h1>




//           <div className='flex flex-col py-3  '>
//             <div className='flex justify-between
//             text-gray-700
//             text-[15px]
//             '>
//               <span>Trending in Australia</span>
//               <EllipsisHorizontalIcon className='w-[22px] h-[22px]' />
//             </div>
//             <span className='text-md font-bold text-black'>#React</span>
//             <span className='text-xs'>240K Bumbles</span>
//           </div>

//                   <div className='flex flex-col py-3  '>
//             <div className='flex justify-between
//             text-gray-700
//             text-[15px]
//             '>
//               <span>Trending in Australia</span>
//               <EllipsisHorizontalIcon className='w-[22px] h-[22px]' />
//             </div>
//             <span className='text-md font-bold text-black'>#React</span>
//             <span className='text-xs'>240K Bumbles</span>
//           </div>

//                   <div className='flex flex-col py-3  '>
//             <div className='flex justify-between
//             text-gray-700
//             text-[15px]
//             '>
//               <span>Trending in Australia</span>
//               <EllipsisHorizontalIcon className='w-[22px] h-[22px]' />
//             </div>
//             <span className='text-md font-bold text-black'>#React</span>
//             <span className='text-xs'>240K Bumbles</span>
//           </div>

//                   <div className='flex flex-col py-3  '>
//             <div className='flex justify-between
//             text-gray-700
//             text-[15px]
//             '>
//               <span>Trending in Australia</span>
//               <EllipsisHorizontalIcon className='w-[22px] h-[22px]' />
//             </div>
//             <span className='text-md font-bold text-black'>#React</span>
//             <span className='text-xs'>240K Bumbles</span>
//           </div>
//         </div>


        
//         <div className='bg-gray-100
//         p-3
//         rounded-lg 
//         '>
//                   <h1 className='text-black font-bold text-xl mb-2'> Who to Follow ?</h1>

//                   <div className='flex justify-between items-center py-3  '>
//                     <div className='flex space-x-3 items-center  '>
//                       <Image
//                       src={"/assets/erik.jpg.jpg"}
//                       width={44}
//                       height={44}
//                       alt='Profile-Pic of Erik'
//                       className='h-[44px] w-[44px] rounded-full '
//                       />
//                       <div className='flex flex-col text-sm'>
//                         <span className='text-black'>Name</span>
//                         <span>Username</span>
//                       </div>
//                     </div>

//                     <button className='
//                     bg-black text-white 
//                     w-[72px] h-[40px]
//                     rounded-full 
//                     '>
//                       Follow
//                     </button>
//                   </div>

//                   <div className='flex justify-between items-center py-3  '>
//                     <div className='flex space-x-3 items-center  '>
//                       <Image
//                       src={"/assets/erik.jpg.jpg"}
//                       width={44}
//                       height={44}
//                       alt='Profile-Pic of Erik'
//                       className='h-[44px] w-[44px] rounded-full '
//                       />
//                       <div className='flex flex-col text-sm'>
//                         <span className='text-black'>Name</span>
//                         <span>Username</span>
//                       </div>
//                     </div>

//                     <button className='
//                     bg-black text-white 
//                     w-[72px] h-[40px]
//                     rounded-full 
//                     '>
//                       Follow
//                     </button>
//                   </div>

//                   <div className='flex justify-between items-center py-3  '>
//                     <div className='flex space-x-3 items-center  '>
//                       <Image
//                       src={"/assets/erik.jpg.jpg"}
//                       width={44}
//                       height={44}
//                       alt='Profile-Pic of Erik'
//                       className='h-[44px] w-[44px] rounded-full '
//                       />
//                       <div className='flex flex-col text-sm'>
//                         <span className='text-black'>Name</span>
//                         <span>Username</span>
//                       </div>
//                     </div>

//                     <button className='
//                     bg-black text-white 
//                     w-[72px] h-[40px]
//                     rounded-full 
//                     '>
//                       Follow
//                     </button>
//                   </div>

                  


//         </div>






//       </div>
//     </div>
//     </>
//   )
// }


// // //Step 2 creating What's happening and Follow chart
// // import { EllipsisHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
// // import Image from 'next/image'
// // import React from 'react'

// // export default function Widgets() {
// //   return (
// //     <>
// //       {/* hidden sm:block */}
// //     <div className='
// //     p-3
// //     bg-black
// //     flex flex-col space-y-4
// //     w-[400px]

// //     '>

// //       <div className='
// //       flex
// //       bg-gray-100 text-gray-600
// //       h-[44px] items-center
// //       rounded-full space-x-3 pl-5



// //         '>
// //         <MagnifyingGlassIcon className='
// //         h-[20px] w-[20px]
  
// //         '/>
// //         <input type="text" 
// //         placeholder='Search Busy Bee '
// //         className=' 
// //         bg-transparent outline-none

// //         '
// //         />
// //       </div>

      
// //       <div className=' 
// //       bg-gray-100 
// //       rounded-xl p-3
// //       '>
// //         <h1 className='
// //         text-xl font-bold mb-2
// //         '> What's happening?</h1>

// //         <div className='flex flex-col py-3'>
// //           <div className='flex justify-between
// //           text-gray-700
// //           text-[13px]
// //           '>
// //             <span>Trending in Austrilia </span>
// //             <EllipsisHorizontalIcon className='w-[20px] h-[20px] '/>
// //           </div>

// //           <span className='text-black text-md font-bold'>#Reactjs</span>

// //           <span className='text-gray-700 text-xs'>240k Bumbles</span>

// //         </div>

// //         <div className='flex flex-col py-3'>
// //           <div className='flex justify-between
// //           text-gray-700
// //           text-[13px]
// //           '>
// //             <span>Trending in Austrilia </span>
// //             <EllipsisHorizontalIcon className='w-[20px] h-[20px] '/>
// //           </div>

// //           <span className='text-black text-md font-bold'>#Reactjs</span>

// //           <span className='text-gray-700 text-xs'>240k Bumbles</span>

// //         </div>

// //         <div className='flex flex-col py-3'>
// //           <div className='flex justify-between
// //           text-gray-700
// //           text-[13px]
// //           '>
// //             <span>Trending in Austrilia </span>
// //             <EllipsisHorizontalIcon className='w-[20px] h-[20px] '/>
// //           </div>

// //           <span className='text-black text-md font-bold'>#Reactjs</span>

// //           <span className='text-gray-700 text-xs'>240k Bumbles</span>

// //         </div>

// //         <div className='flex flex-col py-3'>
// //           <div className='flex justify-between
// //           text-gray-700
// //           text-[13px]
// //           '>
// //             <span>Trending in Austrilia </span>
// //             <EllipsisHorizontalIcon className='w-[20px] h-[20px] '/>
// //           </div>

// //           <span className='text-black text-md font-bold'>#Reactjs</span>

// //           <span className='text-gray-700 text-xs'>240k Bumbles</span>

// //         </div>
// //       </div>


// //       <div className=' 
// //       bg-gray-100 
// //       rounded-xl p-3
// //       '>
// //         <h1 className='
// //         text-xl font-bold mb-2
// //         '> Who to Follow?</h1>


// //         <div className='flex justify-between items-center py-3 '>
// //           <div className='flex items-center space-x-3'>
// //             <Image
// //             src={"/assets/erik.jpg.jpg"}
// //             width={44}
// //             height={44}
// //             alt="Profile-Pic of Erik"
// //             className='w-11 h-11 rounded-full'
// //             />
// //             <div className='flex flex-col text-sm'>
// //               <span className='text-black font-bold'>Name</span>
// //               <span>Username</span>
// //             </div>
// //           </div>

// //           <button className='
// //           bg-black text-white 
// //           w-[72px] h-[40px] rounded-full text-sm 
// //           '>
// //             Follow 
// //           </button>
// //         </div>



// //       </div>



// //     </div>
// //     </>
// //   )
// // }

// // // //Step 1:Creating the Seachbar
// // // import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
// // // import React from 'react'

// // // export default function Widgets() {
// // //   return (
// // //     <>
// // //     {/* hidden sm:block */}
// // //     <div className='
// // //     p-3

// // //     '>
// // //       <div className='flex 
// // //       bg-gray-100 text-gray-600 
// // //       h-[44px]
// // //       items-center space-x-3
// // //       rounded-full pl-5
      
// // //       '>
// // //         <MagnifyingGlassIcon className='
// // //         w-[20px] h-[20px]
// // //         ' />
// // //         <input type="text" 
// // //         placeholder='Search Busy Bee'
// // //         className='bg-transparent outline-none  '
// // //         />
// // //       </div>
// // //       Widgets
// // //     </div>
// // //     </>
// // //   )
// // // }
