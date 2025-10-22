"use client"
import { auth } from '@/firebase'
import { closeLogInModal, closeSignUpModal } from '@/redux/slices/modalSlices'
import { signOutUser } from '@/redux/slices/userSlices'
import { AppDispatch, RootState } from '@/redux/store'
import { signOut } from 'firebase/auth'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function SidebarUserInfo() {
    const user = useSelector((state:RootState) => state.user)
    const dispatch: AppDispatch = useDispatch();

    async function handleSignOut() {
        //firebase signout
        await signOut(auth)

        //redux signout 
        dispatch(signOutUser())

        dispatch(closeSignUpModal())
        dispatch(closeLogInModal())


    }
  return (
    <>
    <div className='absolute bottom-3
    flex items-center 
    justify-start
    w-full lg:w-[210px]
    rounded-full 

    space-x-2 xl:p-3 xl:pr-6
    hover:bg-gray-500 hover:bg-opacity-10
    transition cursor-pointer

    
    '
    onClick={() => handleSignOut()}
    >
        
        <Image 
        src={'/assets/profile-pic.png'}
        width={48}
        height={48}
        alt="Profile Picture"
        className="w-9 h-9"
        />
    
        <div className="
        hidden
        xl:flex flex-col
        text-sm max-w-40
        ">
            <span className="inline-block whitespace-nowrap overflow-hidden text-ellipsis font-bold ">{user.name}</span>
            <span className="inline-block whitespace-nowrap overflow-hidden text-ellipsis text-gray-500">@{user.username}</span>
        </div>
    </div>
    </>
  )
}
