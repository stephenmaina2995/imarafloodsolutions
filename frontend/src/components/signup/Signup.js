import { useState } from "react"
import {Link} from "react-router-dom"
import "./signup.css"

const SignUp = ({handleSignUp}) => {
    const [user, setUser] = useState({
        username:"",
        email:"",
        password:""
    })
    function handleSubmit(event){
        event.preventDefault()
        handleSignUp(user)

    }

    function handleChange(event){
        const input = event.target.name
        const value = event.target.value

        setUser(prev => {return {...prev, [input]:value}})

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <p>Sign up</p>
                <label>Email Address</label>
                <input type="email" value={user.email} name="email" id = "email" onChange={handleChange}/>
                <label>Username</label>
                <input type="username" value={user.username} name="username" id = "username" onChange={handleChange}/>
                <label>Password</label>
                <input type="password" value={user.password} name="password" id = "password" onChange={handleChange}/>
                <Link className="link" to="/login">Login</Link>
            </form>
            
        </div>
    )

}

export default SignUp