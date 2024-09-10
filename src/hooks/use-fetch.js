import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchProducts = async()=>{
      setLoading(true);
      try{
        const response = await fetch(url);
        if(!response.ok) {
          throw new Error("Network request failed to fetch.")
        }
        const list = await response.json();
        setData(list);
      }catch(error){
        setError(error);
      }finally{
        setLoading(false);
      }
    }

    if(url){
      fetchProducts();
    }
  }, [url])

  return {data, loading, error};
}


export default useFetch;