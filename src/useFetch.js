import { useEffect, useState } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setISPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch(url)
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
        setISPending(false);
        setError(err.message);
      })
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;