"use client"
import React, { useEffect, useState } from 'react'
import PostInput from './PostInput'
import Post from './Post'
import { collection, DocumentData, onSnapshot, orderBy, query, QueryDocumentSnapshot } from 'firebase/firestore';
import { db } from '@/firebase';

export default function PostFeed() {
  const [posts, setPosts] = useState<QueryDocumentSnapshot<DocumentData, DocumentData>[]>([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"))

    const unsubscribe = onSnapshot(q, (snapshot) => {
      console.log(snapshot)
      const snapshotDocs = snapshot.docs
      setPosts(snapshotDocs)
    })
    return unsubscribe 
  }, [])

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

      {
        posts.map((post) => <Post
        key={post.id}
        data={post.data()}
        id={post.id}
        />)
      }

      {/* <Post /> */}


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
