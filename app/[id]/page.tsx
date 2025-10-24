import { PostHeader } from '@/components/Post'
import Sidebar from '@/components/Sidebar'
import SignUpPrompt from '@/components/SignUpPrompt'
import Widgets from '@/components/Widgets'
import { db } from '@/firebase'
import { ArrowLeftIcon, ArrowUpTrayIcon, ChartBarIcon, ChatBubbleOvalLeftEllipsisIcon, EllipsisHorizontalIcon, HeartIcon } from '@heroicons/react/24/outline'
import { doc, getDoc } from 'firebase/firestore'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const fetchPostComment = async (id: string) => {
  const postRef = doc(db, "posts", id)
  
  const postSnap = await getDoc(postRef)

  return postSnap.data()

  
  // const postRef = doc(db, "posts", id)

  //   const postSnap = await getDoc(postRef)
  //   return postSnap.data()
}


interface PageProps {
    params: {
        id: string 
    }
}

interface Comment {
    name: string;
    text: string;
    username: string;
}

export default async function page({ params }: PageProps) {
  console.log(params)
  const { id } = params
  const postComment =  await fetchPostComment(id)
  console.log(postComment)


    // const { id } = params 
    // const postComment = await fetchPostComment(id)
    // console.log(postComment)


  return (
    <>
    <div className="
        text-[#0f1419]
        bg-white
        min-h-screen
        max-w-[1400px]
        mx-auto
        border-2 border-black
        flex 
        justify-center
    
    
        ">
          <Sidebar />

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
            flex 

            '>
                <Link href="/"  >
                    <ArrowLeftIcon className='w-7 h-7 mr-3' />
                </Link>
                Bumble
            </div>


            <div className="flex flex-col p-3 space-y-5 border-b border-gray-300 ">
            <div className="flex justify-between items-center mb-1.5  ">
              <div className="flex space-x-3   ">
                <Image
                  src={"/assets/profile-pic.png"}
                  width={44}
                  height={44}
                  alt="Profile Picture"
                  className="w-11 h-11"
                />
                <div className="flex flex-col text-[15px]  ">
                  <span
                    className="font-bold
                        inline-block whitespace-nowrap overflow-hidden text-ellipsis 
                        max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px]
                        sm:max-w-[160p]
                        "
                  >
                    {postComment?.name}
                  </span>
                  <span
                    className="text-[#707E89] 
                        inline-block whitespace-nowrap overflow-hidden text-ellipsis 
                        max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px]
                        sm:max-w-[160p]
                        "
                  >
                    {postComment?.username}
                  </span>
                </div>
              </div>

              <EllipsisHorizontalIcon className="w-5 h-5" />
            </div>
            <span className="text-[15px] ">{postComment?.text}</span>
          </div>


          <div className="border-b border-gray-100 p-3 text-[15px] ">
            <span className="font-bold ">0</span> Likes
          </div>

          <div
            className="border-b border-gray-300 p-3 text-[15px]
          flex justify-evenly
          "
          >
            <ChatBubbleOvalLeftEllipsisIcon
              className="w-[22px] h-[22px]
            text-[#707E89] cursor-not-allowed 
              "
            />
            <HeartIcon
              className="w-[22px] h-[22px]
            text-[#707E89] cursor-not-allowed 
              "
            />
            <ChartBarIcon
              className="w-[22px] h-[22px]
            text-[#707E89] cursor-not-allowed 
              "
            />
            <ArrowUpTrayIcon
              className="w-[22px] h-[22px]
            text-[#707E89] cursor-not-allowed 
              "
            />
          </div>

          {/* {
            postComment?.comments.map((comment: Comment) => (
            <Comment
            name={comment.name}
            username={comment.username}
            text={comment.text}
            />))
          } */}

          {
            postComment?.comments.map((comment:Comment) => (
              <Comment
              name={comment.name}
              username={comment.username}
              text={comment.text}
              />

            ))
          }
















          </div>
          <Widgets />
          
        </div>
        <SignUpPrompt />
      
    </>
  )
}










interface CommentProps {
    name: string;
    username: string;
    text: string;
}

function Comment({ name, username, text }: CommentProps) {
  return (
    <div className="border-b border-gray-300  ">
      <PostHeader name={name} username={username} text={text} />

      <div className="flex space-x-14 p-3 ms-16  ">
        <ChatBubbleOvalLeftEllipsisIcon
          className="w-[22px] h-[22px]
             cursor-not-allowed 
              "
        />
        <HeartIcon
          className="w-[22px] h-[22px]
             cursor-not-allowed 
              "
        />
        <ChartBarIcon
          className="w-[22px] h-[22px]
             cursor-not-allowed 
              "
        />
        <ArrowUpTrayIcon
          className="w-[22px] h-[22px]
             cursor-not-allowed 
              "
        />
      </div>
    </div>
  );
}
