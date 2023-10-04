import {useSelector,useDispatch} from "react-redux"
import {decrese,increse,reset} from "./countSlice"

export default function CountView(){
    const {cnt} = useSelector(state=> state.mycounter)
    console.log(cnt)

    const dispatch = useDispatch()

    return <div>
        count is : {cnt}
        <button onClick={()=> dispatch(increse())}>increase</button>
        <button onClick={()=> dispatch(decrese())}>decrease</button>
        <button onClick={()=> dispatch(reset())}>reset</button>
        <br></br>
       
    </div>
}