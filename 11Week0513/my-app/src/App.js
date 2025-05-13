import AttendanceBook from './ex1/ex1'
import SignUp from './ex1/ex2'
import './App.css';
import TemperatureInput from './ex1/TemperatureInput';
import Calculator from './ex1/Calculator';
import Card from './ex1/Card';
import ProfileCard from './ex1/ProfileCard';

function App() {
  return (
    <div>
      <AttendanceBook />
      <SignUp />
      <TemperatureInput />
      <Calculator />
      <Card />
      <ProfileCard />
    </div>
  );
}

export default App;
