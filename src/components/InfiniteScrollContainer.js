import React, { useEffect, useState } from 'react'
import InfiniteScroller from './InfiniteScroller'
import '../styles.css';

const InfiniteScrollContainer = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async ()=>{
    setIsLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products/?limit=${page*10}`);
      const data = await response.json();
      setProducts(data);
      setPage(page+1);
    } catch (error) {
      console.log("error", error);
    } finally{
      setIsLoading(false);
    }
        
  }

  const handleScroll = () =>{
    if(window.innerHeight+document.documentElement.scrollTop+500>document.documentElement.offsetHeight){
      fetchProducts();
    }
  }
  useEffect(()=>{
    fetchProducts();
  },[]);

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return ()=>window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const {products:allProducts} = products;
  return (
    <div>
      <InfiniteScroller />
      {allProducts?.length>0 && (
        <div className='products'>
          {allProducts?.map((prod)=>{
            return (
            <div className='single' key={prod.id}>
              <img src={prod.thumbnail} alt={prod.title}/>
              <span>{prod.title}</span>
            </div>
            )})}
        </div>
      )}
    </div>
  )
}

export default InfiniteScrollContainer
