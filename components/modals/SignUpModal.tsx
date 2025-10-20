"use client"
import { closeSignUpModal, openSignUpModal } from "@/redux/slices/modalSlices";
import { AppDispatch, RootState } from "@/redux/store";
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Modal } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function SignUpModal() {
  const isOpen = useSelector((state: RootState) => state.modals.signUpModalOpen);
  const dispatch: AppDispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <button
        className="
      w-full h-[48px]
      md:w-[88px] md:h-[40px]
      bg-white 
      rounded-full
      text-lg md:text-sm font-bold
      hover:bg-gray-100 
      transition
      "
      onClick={() => dispatch(openSignUpModal())}
      >
        Sign Up
      </button>

      <Modal
      open={isOpen}
      onClose={() => dispatch(closeSignUpModal())}
      className="flex justify-center items-center
      "
      >
        <div className="
        bg-white
        w-full h-full
        sm:w-[600px] sm:h-fit
        sm:rounded-xl

        ">
          <XMarkIcon className="w-7 mt-5 ml-5 cursor-pointer
          "
          onClick={() => dispatch(closeSignUpModal())}
          />
          <div className="
          flex flex-col
          pt-10 pb-20 px-4 sm:px-20
          ">

            <h2 className="
            
            text-3xl font-bold
            mb-10
            ">
              Create your account
            </h2>
            <div className="
            w-full
            space-y-5
            mb-10
            ">
              <input className="
              w-full h-[54px]
              border border-gray-200 ps-3
              outline-none
              rounded-[4px]
              focus:border-[#f4a401]
              transition
              "
              placeholder="Name"
              type="text"
              />


              <input className="
              w-full h-[54px]
              border border-gray-200 ps-3
              outline-none
              rounded-[4px]
              focus:border-[#f4a401]
              transition
              "
              placeholder="Email"
              type="email"
              />

              <div className="
              w-full h-[54px]
                border border-gray-200 ps-3
                outline-none
                rounded-[4px]
                focus-within:border-[#f4a401]
                transition
                overflow-hidden
                flex items-center pr-3

                ">

                <input className="
                w-full h-full outline-none 
                "
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                /> 

                <div className="
                w-7 h-7 text-gray-500 cursor-pointer 

                "
                 onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeSlashIcon /> : <EyeIcon/> }
                </div>


              </div>













            </div>








            <button className="
            bg-[#f4a401] text-white
            w-full h-[48px] rounded-full
            shadow-md
            hover:shadow-xl transition
            mb-5

            ">
              Sign in
            </button>
            <span className="mb-5 mx-auto text-md">
              Or
            </span>
            <button className="
            bg-[#f4a401] text-white
            w-full h-[48px] rounded-full
            shadow-md
            hover:shadow-xl transition
            mb-5
            ">
              Log in as Guest
            </button>
          </div>
        </div>
      </Modal>

    </>
  );
}
