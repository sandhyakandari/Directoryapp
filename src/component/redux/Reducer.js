import { ADDITEM,GETHISTORY, SEARCHDATA } from "./ActionTypes";

const initial=[];
let history=[];

const Reducer=(state=initial,action)=>{
    switch(action.type){
        case ADDITEM:
               history= [...history,action.payload]
               return history;
        case GETHISTORY:return history;
        case SEARCHDATA:return action.payload
        default:return state
    }
}
export default Reducer;