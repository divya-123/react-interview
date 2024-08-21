import React, { useEffect, useState } from 'react'

const Autocomplete = ({
    placeholder, 
    staticData,
    fetchSuggestions,
    dataKey,
    customLoading="Loading...",
    onSelect=()=>{},
    onChange=()=>{},
    onBlur=()=>{},
    onFocus=()=>{},
    customStyles}) => {
    const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
        onChange(e.target.value);
    }

    const getSuggestions = async (query) =>{
        setError(null);
        setLoading(true);
        try {
            let result;
            if(staticData){
                result = staticData.filter((data)=>{
                    return data.lowercase().includes(query.toLowerCase());
                })
            } else if(fetchSuggestions){
                result = await fetchSuggestions(query);
            }
            setSuggestions(result);
        } catch (error) {
            setError("Failed to fetch suggestions.");
            setSuggestions([]);
        } finally {
            setLoading(false);
        }
    }
    console.log(suggestions);

    useEffect(()=>{
        if(inputValue.length > 1){
            getSuggestions(inputValue);
        } else{
            setSuggestions([]);
        }
    },[inputValue]);
  return (
    <div className='container'>
        <input type='text' 
               placeholder={placeholder} 
               style={customStyles}
               value={inputValue}
               onBlur={onBlur}
               onFocus={onFocus}
               onChange={handleInputChange}/>
      
    </div>
  )
}

export default Autocomplete
