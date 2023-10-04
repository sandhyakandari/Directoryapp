import { useSelector } from "react-redux"

const WordDetail=()=>{
    const data=useSelector(state=>state);
    console.log(data);
  
    return(
         <div> 
            {
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
                                )) ):<></> }
                                
                                { val.antonyms? 
                                 (
                                    val.antonyms.map((de)=>(
                                 <span>{de},</span>
                                ))) :<></> }
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

            </div> )) }  </div>

        )
}
export default WordDetail;