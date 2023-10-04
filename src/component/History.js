import { useDispatch, useSelector } from "react-redux";
import { getHistory, fetchdata } from "./redux/Action";
import { useEffect, useState } from "react";
import {Route,Routes, Link } from "react-router-dom";

const History=()=>{
    const [history,SetHistory]=useState('');
    const dispatch= useDispatch();
  useEffect(()=>{
   dispatch(getHistory());
   SetHistory('true');
 },[]);
 const dt=useSelector(state=>state);
   const search=(val)=>{
    SetHistory('');   
    dispatch(fetchdata(val)); 
   }
   console.log(dt.Reducer);
    return(
        <div>
            { history &&  <div>
            <h1> search History</h1>
            {dt.Reducer.map((val)=>(
                   <Link to='/WordDetail'> <p onClick={()=>search(val)}>{val}</p></Link>
                ))
             } </div> }
             
            
             </div>)
}
export default History;