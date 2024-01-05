import './App.css';
import Login from './components/login/Login';
import SignUp from './components/signup/Signup';
import {Routes, Route} from "react-router-dom"
function App() {
  const handleLogin = (user) => {
    fetch("/login", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
    })

  }
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element = {<Login handleLogin = {handleLogin}/>}></Route>
        <Route path='/signup' element = {<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
