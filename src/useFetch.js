import { useEffect,useState } from "react";

const useFetch = (url)=>{

    const [data,setData]=useState(null);
    const [isPending, setisPending]=useState(true);
    const [error,setError]=useState(null);


    useEffect(()=>{
        const abortcontroller=new AbortController();
        fetch(url,{ signal: abortcontroller.signal })
        .then(respnseObject => {
            if(!respnseObject.ok){
                throw Error("Could not fetch Data");
            }
            return respnseObject.json();
        })
        .then(data =>{
            setData(data);
            setisPending(false);
            setError(null);
        })
        .catch((err)=>{
            if(err.name !=='AbortError'){
            setisPending(false);
            setError(err.message);
            }
        })
        return ()=> abortcontroller.abort();
    },[url]);
        
    return {data,isPending,error}
}
export default useFetch;