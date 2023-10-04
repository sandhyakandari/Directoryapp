import { GETHISTORY,SEARCHDATA, ADDITEM } from "./ActionTypes";
import axios from "axios";
export const getHistory=()=>{
            return {
                type:GETHISTORY
            }
}
export const Searchdata=(res)=>{
    return{
        type:SEARCHDATA,
        payload:res
    }
}
export const AddItem=(name)=>{
    return{
        type:ADDITEM,
        payload:name
    }
}
export const fetchdata=(item)=>{
    return(dispatch)=>{
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${item}`)
        .then((res)=>{
            console.log(res.data)
            dispatch(Searchdata(res.data))})
        .catch((err)=>alert(err.response.data.title))
    }
}