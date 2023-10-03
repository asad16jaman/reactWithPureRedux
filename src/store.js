import {createStore,combineReducers} from "redux"
import countReducer from "./service/reducers/countReducer"
import namReducer from "./service/reducers/namereducer"


let allReducers = combineReducers({
    countData:countReducer,
    userData:namReducer
})

let store = createStore(allReducers)

export default store