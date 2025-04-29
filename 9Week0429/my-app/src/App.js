import './App.css';
import Component from './Component/Component';
import InputComponent from './Component/InputComponent';
import MyButton from './Component/MyButton';
import Parent from './Component/Parent';
import Toggle from './Component/Toggle';
import LandingPage from './Component/LandingPage';

function App() {
  return (
    <div>
      <Component />
      <InputComponent />
      <Parent />
      <Toggle />
      <MyButton /><br></br>
      <hr></hr> <p>구분선</p> <hr></hr>
      <LandingPage />
    </div>
  );
}

export default App;
