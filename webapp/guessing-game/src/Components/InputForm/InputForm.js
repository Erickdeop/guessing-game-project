import { useState } from "react";
import Button from '@mui/material/Button';

const InputForm = ({onAddNumber}) => {
    const [number, setNumber] = useState("");


    const handleClick = () => {
        onAddNumber(number);
        setNumber("");
    }
    return (
        <div className='Guess-number-box'>
            <label htmlFor = "number">
                <input onChange={(e) => setNumber(e.target.value)}
                    id="number"
                    value={number}
                    placeholder="Input your guess"
                />
            </label>
            <Button 
                onClick={(handleClick)}
                variant="contained"       
            >Guess!</Button>
        </div>
    )
}

export default InputForm;