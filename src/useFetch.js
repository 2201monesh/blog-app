import { useEffect, useState } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setISPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

      const abortCont = new AbortController();

      fetch(url, { signal: abortCont.signal })
      .then(res => {
        if(!res.ok){
          throw Error("Could not fetch the data rn");
        }
        return res.json();
      })
      .then(data => {
        setData(data)
        setISPending(false)
        setError(null)
      })
      .catch(err => {
        if(err.name === "AbortError"){
          console.log("fetch aborted");
        }
        else{
          setISPending(false);
          setError(err.message);
        }
        
      })
      return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;