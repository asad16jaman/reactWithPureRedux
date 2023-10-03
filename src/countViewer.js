import {useSelector,useDispatch} from "react-redux"
import ViewCompo from "./viewUser"


export default function CountView(){
    const {count} = useSelector(state=> state.countData)
    const dispatch = useDispatch()

    return <div>
        count is : {count}
        <button onClick={()=> dispatch({type:"INCREASE"})}>increase</button>
        <button onClick={()=> dispatch({type:"DECRESE"})}>decrease</button>
        <button onClick={()=> dispatch({type:"RESET"})}>reset</button>
        <br></br>
        <br></br>
        <br></br>
        <ViewCompo />
    </div>
}