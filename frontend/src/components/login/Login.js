import { useState } from "react"
import {Link} from "react-router-dom"

const Login = ({handleLogin}) => {
    
    const [user, setUser] = useState({
        email:"",
        password:""
    })
    
    function handleSubmit(event){
        event.preventDefault()
        handleLogin(user)

    }

    function handleChange(event){
        const input = event.target.name
        const value = event.target.value

        setUser(prev => {return {...prev, [input]:value}})

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <p>Login</p>
                <label>Email Address</label>
                <input type="email" value={user.email} name="email" id = "email" onChange={handleChange}/>
                <label>Password</label>
                <input type="password" value={user.password} name="password" id = "password" onChange={handleChange}/>
                <Link className="link" to="/signup">Signup</Link>
            </form>
        </div>
    )

}

export default Login