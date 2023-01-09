import logo from './logo.svg';
import './App.css';
import InputForm from './InputForm';
import UseInput from './UseInput';
import NumberList from './NumberList';
import useInput from './UseInput';

const App = () => {
  const { numbers, addNumber } = useInput();

  return (
    <header>
      <div className='initial'>
        <h1>Guessing Game!</h1>
        <InputForm onAddNumber={addNumber}/>

        <ol className='number-list'>
          Numbers tried: 
          {numbers.map((number) => (
            <NumberList key={number.id} number={number.number} />
            ))}
        </ol>     
      </div>
    </header>
  );
}

export default App;
