import React from 'react'
import {useSelector,useDispatch} from "react-redux"

export default function User({ele}) {
    let aarr = useSelector(state=>state.userData.user)
    let dispatch = useDispatch()

    let handleEdit = ()=>{
       let myob = aarr.findIndex(data=>{
        return data.roll===ele.roll
       })
       dispatch({
        type:"EDIT",
        payload:{
            indx:myob,
            data:{
                ...ele,
                name:"name is Edited.."
            }
        }
       })
    }

    const handleDelete=()=>{
        let myob = aarr.findIndex(data=>{
            return data.roll===ele.roll
           })
           dispatch({
            type:"SUB",
            payload:{
                indx:myob,
            }
           })
    }


  return (
    <div>name is :{ele.name}... roll is {ele.roll}
        <button onClick={handleEdit}>edit</button>
        <button onClick={handleDelete}>delete</button>
        <br></br>
        <br></br>
    </div>
  )
}
