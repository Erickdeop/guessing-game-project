import './App.css';
import InputForm from './Components/InputForm/InputForm';
import UseInput from './Components/InputForm/UseInput';
import NumberList from './Components/InputForm/NumberList';
import useInput from './Components/InputForm/UseInput';
import Sidebar from './Components/Sidebar/Sidebar';
import DrawerAppBar from './Components/DrawerAppBar/DrawerAppBar';

const App = () => {
  const { numbers, addNumber } = useInput();

  return (
      <main className='App'>
        <nav className='Sidebar'>
          <Sidebar/>

        </nav>
        <div className='Game-form'>
          <h1>Guessing Game!</h1>
          <InputForm onAddNumber={addNumber}/>

          <ol className='number-list'>
            Numbers tried: 
            {numbers.map((number) => (
              <NumberList key={number.id} number={number.number} />
              ))}
          </ol>     
        </div>
        <div className='Falling-numbers'>08948349328598345</div>
      </main>
  );
}

export default App;
