"use client"
import { db } from '@/firebase';
import { closeCommentModal, setCommentDetails } from '@/redux/slices/modalSlices';
import { AppDispatch, RootState } from '@/redux/store';
import { CalendarIcon, ChartBarIcon, FaceSmileIcon, MapPinIcon, PhotoIcon } from '@heroicons/react/24/outline'
import { addDoc, arrayUnion, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

interface PostInputProps {
  insideModal?: boolean
}

export default function PostInput({ insideModal }: PostInputProps ) {
  const [text, setText] = useState("");
  const user = useSelector((state: RootState) => state.user);
  const commentDetails = useSelector((state: RootState) => state.modals.commentPostDetails)
  const dispatch: AppDispatch = useDispatch();

  async function sendPost() {
    await addDoc(collection(db, "posts"), {
      name: user.name,
      username: user.username,
      timestamp: serverTimestamp(),
      text: text,
      likes: [],
      commnets: [],
    })
    setText("")
  };

  async function sendComment() {
    const postRef = doc(db, "posts", commentDetails.id )

    await updateDoc(postRef, {
      comments: arrayUnion({
        name: user.name,
        username: user.username,
        text: text, 

      })
    })
    setText("");
    dispatch(closeCommentModal());
  }




  return (
    <>
    <div className='flex p-3 space-x-6 border-b-2 '>
      <Image
      src={insideModal ? "/assets/profile-pic.png " : "/assets/busybee-logo2.png"}
      width={44}
      height={44}
      alt={insideModal ? "Profile-Pic" : "Logo"}
      className='w-11 h-11 z-10 '

      />

      <div className='w-full  '>

        <textarea className='
        w-full min-h-[50px] text-lg
        resize-none outline-none
        border-b-2
        '
        placeholder={insideModal ? "Send your reply ": "What's happening!? "}

        onChange={(event) => setText(event.target.value)}
        value={text}

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
          disabled:bg-opacity-60

          '
          disabled={!text}
          onClick={() => insideModal ? sendComment() : sendPost()}
          >
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
