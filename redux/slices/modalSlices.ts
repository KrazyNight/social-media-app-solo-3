import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    signUpModalOpen: false,


}

const modalSlices = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSignUpModal: (state) => {
        state.signUpModalOpen = true;
    },
    closeSignUpModal: (state) => {
        state.signUpModalOpen = false;
    },
    


  }
});

export const {
    openSignUpModal,
    closeSignUpModal,


    
} = modalSlices.actions

export default modalSlices.reducer