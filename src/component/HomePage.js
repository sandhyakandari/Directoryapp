
import { AddItem, fetchdata } from "./redux/Action";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
const HomePage=()=>{
    const dispatch=useDispatch();
    const data=useSelector(state=>state)
    const[searchitem,SetSEarch]=useState('');
    const[result,SetResult]=useState();
    const[load,SetLoading]=useState();
    function search(){
        SetLoading('true');
        dispatch(AddItem(searchitem))
        dispatch(fetchdata(searchitem));
        SetResult('true');
    }
    console.log(data.Reducer[0]);
    return (
            <div className="homepage">
               <div className="searchbar"> <input type='text' value={searchitem} onChange={(e)=>SetSEarch(e.target.value)}></input>
                <button onClick={search}>Search</button></div>
              { load && <div class="loader"></div>}
              {
                result && 
                data.Reducer.map((val)=>(
                           <div className="datadetail"> <h2>{val.word}</h2>
                            <p>{val.phonetic}</p>
                            {val.meanings?(val.meanings.map((val)=>(
                                <div>
                                <h4>{val.partOfSpeech}</h4>
                        { val.definitions? 
                                (val.definitions.map((de)=>(
                                 <p>{de.definition}</p>
                                ))):<></> }
                               
                               { val.synonyms? 
                                (
                               val.synonyms.map((de)=>(
                                 <span>{de},</span>
                                ))):<></> }
                                
                                { val.antonyms? 
                                 (val.antonyms.map((de)=>(
                                 <span>{de},</span>
                                )) ) :<></> }
                                </div>
                            )) ):<></>
                                }
                        {val.phonetics?(val.phonetics.map((val)=>(
                                <div>
                                <h4>{val.text}</h4>
                                <audio controls>
  <source src={val.audio} type="audio/ogg" />
</audio>
                                </div>
                            )) ):<></>
                                }

                        </div> )) }
            </div>
    )
}
export default HomePage;