


const namState = {
    user:[{name:"asad",roll:1245},{name:"riyad",roll:4578},{name:"anis",roll:3265}],
    len:3
}

let namReducer =(state=namState,action)=>{
    switch(action.type){
        case "EDIT":{
            state.user.splice(action.payload.indx,1,action.payload.data);
            return {
                ...state
            }
        }
            
        case "ADD":
            return {
                user:[...state.user,action.payload.data],
                len:state.len+1
            }
        case "SUB":{
            state.user.splice(action.payload.indx,1);
            return{
                ...state,
                len:state.len-1
            }
        }

            
        default :
            return state
    }
}

export default namReducer
