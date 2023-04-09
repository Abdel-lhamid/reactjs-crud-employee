import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employeelisting from './components/Employeelisting';
import CreateEmployee from './components/CreateEmployee';
import EditEmployee from './components/EditEmployee';
import EmployeeDetails from './components/EmployeeDetails';

function App() {
  return (
    <div className="App">
      <h1>React Js CRUD Employee</h1>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Employeelisting/>}></Route>
        <Route path='/employee/create' element={<CreateEmployee/>}></Route>
        <Route path='/employee/edit/:employeeid' element={<EditEmployee/>}></Route>
        <Route path='/employee/detail/:employeeid' element={<EmployeeDetails/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
