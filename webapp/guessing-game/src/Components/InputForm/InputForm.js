import { useState } from "react";

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
            <button onClick={(handleClick)}>Guess!</button>
        </div>
    )
}

export default InputForm;