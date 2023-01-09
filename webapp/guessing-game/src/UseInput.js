import { useState } from "react";

const useInput = () => {
    const[numbers, setNumbers] = useState([]);
    
    const addNumber = (number) => {
        const numberObject = {
            number,
            id: crypto.randomUUID(),
        };
        setNumbers([...numbers, numberObject]);
    };

    return {
        numbers,
        addNumber
    };
};

export default useInput;