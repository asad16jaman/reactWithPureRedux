import {createSlice} from "@reduxjs/toolkit"

let myStore = createSlice({
    name:"count",
    initialState:{cnt:1001},
    reducers:{
        increse:function(state){
            state.cnt += 1
        },
        decrese:function(state){
            state.cnt -= 1
        },
        reset:function(state){
            state.cnt = 0
        }
    }
})


export const {increse,decrese,reset} = myStore.actions;
export default myStore.reducer
