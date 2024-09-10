import { useState } from "react";

const useCounter = ({initialcount=0, step=1}) => {

    const [count, setCount] = useState(initialcount);

    const increment = () =>{
        setCount(count+step);
    }
    const decrement = () =>{
        setCount(count-step);
    }
    const reset = () =>{
        setCount(initialcount);
    }

    return {
        increment,
        decrement,
        reset,
        count
    }
}

export default useCounter;