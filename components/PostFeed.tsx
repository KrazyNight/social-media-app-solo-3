import React from 'react'
import PostInput from './PostInput'
import Post from './Post'

export default function PostFeed() {
  return (
    <>
    <div className='
    flex-grow
    max-w-2xl
    border border-black

    '>
      <div className='
      py-4 px-4
      text-lg sm:text-xl text-black font-bold
      sticky top-0 z-50
      bg-white bg-opacity-25 backdrop-blur-sm
      border border-black

      '>
        Home
      </div>
      <PostInput />
      <Post />


    </div> 
    </>
  )
}


// // Final
// import React from 'react'
// import PostInput from './PostInput'
// import Post from './Post'

// export default function PostFeed() {
//   return (
//     <>
//     <div className='
//     flex-grow
//     max-w-2xl
//     border
//     border-black
//     '>
//       <div className=' 
//       py-4 px-4
//       text-lg sm:text-xl
//       stick top-0 z-50 
//       bg-white bg-opacity-80 backdrop-blur-sm
//       border border-black
//       '>
//         Home
//       </div>

//       <PostInput />
//       <Post />
//     </div>
    
//     </>
//   )
// }
