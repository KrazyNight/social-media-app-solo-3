import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    signUpModalOpen: false,
    logInModalOpen: false,


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

    openLogInModal: (state) => {
        state.logInModalOpen = true;
    },
    closeLogInModal: (state) => {
        state.logInModalOpen = false;
    },
    


  }
});

export const {
    openSignUpModal,
    closeSignUpModal,
    openLogInModal,
    closeLogInModal,


    
} = modalSlices.actions

export default modalSlices.reducer