import {useSelector,useDispatch} from "react-redux"
import User from "./User";
import {addUser} from "./userSlice"

export default function ViewCompo() {
    let {user,len} = useSelector(state=> state.allUser);

    let dispatch = useDispatch()
    
    let handlefun = ()=>{
        let nameArr = ["rakib","sarib","saif","rifat","muid","kawser","arman"];
        let ob = {name:nameArr[len-3],roll:len+2};
        dispatch(addUser({data:ob}))
    }

  return (
    <div>
        <p>Number of User is : {len}</p>
        {user.map((ele,ind)=>{
            return <User key={ind} ele={ele}/>
        })}

        <button onClick={handlefun}>click to add user</button>
    </div>
  )
}
