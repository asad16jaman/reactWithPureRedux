import {useSelector,useDispatch} from "react-redux"
import User from "./User";

export default function ViewCompo() {
    let users = useSelector(state=> state.userData);

    let dispatch = useDispatch()
    
    let handlefun = ()=>{
        let nameArr = ["rakib","sarib","saif","rifat","muid","kawser","arman"];

        let ob = {name:nameArr[users.len-3],roll:users.len+2};
        dispatch({
            type:"ADD",
            payload:{
                data:ob
            }

        })
    }

  return (
    <div>
        <p>Number of User is : {users.len}</p>
        {users.user.map(ele=>{
            return <User ele={ele} key={ele.roll}/>
        })}

        <button onClick={handlefun}>click to add user</button>
    </div>
  )
}
