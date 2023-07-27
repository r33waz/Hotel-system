import { createSlice } from "@reduxjs/toolkit";

//creating a auth inter face 
interface authinterface{
    isLogedin: boolean,
    jwt: string,
    roles:string
}

//initilizating auth interface 
const initialState: authinterface={
    isLogedin: false,
    jwt:"",
    roles:''
}

//creating a slice 
const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        login: (state, data) => {
            state.isLogedin = true,
                state.jwt = data.payload.jwt,
                state.roles=data.payload.roles
        },
        logout: (state)=>{
            state.isLogedin = false,
                state.jwt = "",
                state.roles=""
        }
    }
})

export default authSlice.reducer
export const {login,logout} = authSlice.actions