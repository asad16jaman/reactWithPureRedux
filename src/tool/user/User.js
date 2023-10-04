import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {edituser,deleteUser} from "./userSlice"

export default function User({ele}) {
    let {user} = useSelector(state=>state.allUser)
    let dispatch = useDispatch()
    let handleEdit = ()=>{
       let myob = user.findIndex(data=>{
        return data.roll===ele.roll
       })
       dispatch(edituser({
        indx:myob,
        data:{
            ...ele,
            name:"name is edited.."
        }
       }))
    }
    const handleDelete=()=>{
        let myob = user.findIndex(data=>{
            return data.roll===ele.roll
           })
           dispatch(deleteUser({indx:myob}))
    }
  return (
    <div>name is :{ele.name}... roll is {ele.roll}
        <button onClick={handleEdit}>edit</button>
        <button onClick={handleDelete}>Delete</button>
        <br></br>
        <br></br>
    </div>
  )
}
