import {configureStore} from "@reduxjs/toolkit"
import mystor from "../count/countSlice"
import Myuser from "../user/userSlice"

let store = configureStore({
    reducer : {
        mycounter : mystor,
        allUser:Myuser
    }
})

export default store