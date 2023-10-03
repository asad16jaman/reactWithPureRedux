


let initialstate = {
    count: 1001
}

const countReducer = (state=initialstate,action)=>{
    switch(action.type){
        case "INCREASE":
            return {
                count : state.count +1
            }
        
        case "DECRESE":
            return {
                count : state.count - 1
            }
        case "RESET":
            return {
                count : 0
            }
        default :
          return state
        
    }
}

export default countReducer
