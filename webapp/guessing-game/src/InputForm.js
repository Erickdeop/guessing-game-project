import { useState } from "react";

const InputForm = ({onAddNumber}) => {
    const [number, setNumber] = useState("");
    const [item, setItem] = useState("");

    const handleClick = () => {
        onAddNumber(number);
        setNumber("");
    }
    return (
        <div className='guess-number-box'>
            <label htmlFor = "number">
                <input onChange={(e) => setNumber(e.target.value)}
                    id="number"
                    value={number}
                    placeholder="Number"
                />
            </label>
            <button onClick={(handleClick)}>Guess!</button>
        </div>
    )
}

export default InputForm;