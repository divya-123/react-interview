import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

const DebouncedInput = () => {

  const [inputText, setInputText] = useState("");
  const debouncedValue = useDebounce(inputText, 1000, async ()=>{
    const res = await fetch('https://dummyjson.com/products');
    const products = await res.json();
    console.log(products);
  });

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  }

  return <div>
    <input 
          value= {inputText}
          type="text" 
          placeholder="Search products..."     
          onChange={handleInputChange}/>
    <h2>{debouncedValue}</h2>
    <ul></ul>
  </div>
  
}

export default DebouncedInput;