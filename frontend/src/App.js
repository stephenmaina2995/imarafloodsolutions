import './App.css';
import Login from './components/login/Login';
import SignUp from './components/signup/Signup';
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element = {<Login />}></Route>
        <Route path='/signup' element = {<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
