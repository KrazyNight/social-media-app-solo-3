"use client"

import { closeCommentModal } from '@/redux/slices/modalSlices'
import { AppDispatch, RootState } from '@/redux/store'
import { Modal } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostHeader } from '../Post'
import PostInput from '../PostInput'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function CommentModal() {
    const isOpen = useSelector((state: RootState) => state.modals.commentModalOpen )
    const dispatch: AppDispatch = useDispatch();
    const commentDetails = useSelector((state: RootState) => state.modals.commentPostDetails)


  return (
    <>
    <Modal
    open={isOpen}
    onClose={() => dispatch(closeCommentModal())}
    className='flex items-center justify-center '
    >
        <div className='
        bg-white
        w-[600px] h-fit
        sm:rounded-xl outline-none
        relative    

        '>
          <XMarkIcon
            className="w-7 mt-5 ml-5 cursor-pointer"
            onClick={() => dispatch(closeCommentModal())}
          />
          <div className='
          pt-5 pb-10 px-5 
          flex flex-col
          
          '>
            <PostHeader
            name={commentDetails.name}
            username={commentDetails.username}
            text={commentDetails.text}
            replyTo={commentDetails.username}

            />
            <div className='mt-4'>

              <PostInput insideModal={true} />
            </div>

            <div className='
            absolute
            w-0.5 h-32 bg-gray-300
            top-20 left-[52px] z-0
            '>

            </div>

          </div>

        </div>

    </Modal>
      
    </>
  )
}
