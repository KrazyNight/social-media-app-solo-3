"use client"
import { closeSignUpModal, openSignUpModal } from "@/redux/slices/modalSlices";
import { AppDispatch, RootState } from "@/redux/store";
import { Modal } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";


export default function SignUpModal() {
  const isOpen = useSelector((state: RootState) => state.modals.signUpModalOpen);
  const dispatch: AppDispatch = useDispatch();

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
      >
        <div>
          modal
        </div>

      </Modal>

    </>
  );
}
