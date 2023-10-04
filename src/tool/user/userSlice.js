import {createSlice} from "@reduxjs/toolkit"



let UserReducer = createSlice({
    name:"User",
    initialState:{
        user:[{name:"asad",roll:1245},{name:"riyad",roll:4578},{name:"anis",roll:3265}],
        len:3
    },
    reducers:{
        addUser:function(state,action){
            state.user = [...state.user,action.payload.data];
            state.len += 1
        },

        edituser:function(state,action){
            state.user.splice(action.payload.indx,1,action.payload.data)
        },
        deleteUser:function(state,action){
            state.user.splice(action.payload.indx,1)
        }

    }
})


export const {addUser,edituser,deleteUser} = UserReducer.actions;
export default UserReducer.reducer