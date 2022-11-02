import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactFormInputType, InitialContactStateType } from "../data/types";

const initialState: InitialContactStateType = {
    data: {
        name: "",
        phone: "",
        email: "",
        message:""
 },
  loading: false,
  error:""
};

export const contactSlice = createSlice({
    name: "contactUs",
    initialState,
    reducers: {
        postMessage: (
            state: InitialContactStateType,
            action: PayloadAction<ContactFormInputType>
        ) => {
            return { ...state, data: action.payload };
        },
        setLoading: (
            state: InitialContactStateType,
            action: PayloadAction<boolean>
        ) => {
            return { ...state, loading: action.payload };
        },
         setError: (
            state: InitialContactStateType,
            action: PayloadAction<string>
        ) => {
            return { ...state, error: action.payload };
        },
    }
})
export const { postMessage, setError, setLoading } = contactSlice.actions;
export default contactSlice.reducer;
