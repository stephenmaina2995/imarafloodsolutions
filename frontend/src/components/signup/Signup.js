import { useState } from "react"
import {Link} from "react-router-dom"

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
                <input type="email" value={user.email} name="email" id = "email" onChange={handleChange}/>
                <input type="username" value={user.username} name="username" id = "username" onChange={handleChange}/>
                <input type="password" value={user.password} name="password" id = "password" onChange={handleChange}/>
            </form>
            <Link to="/login">Login</Link>
        </div>
    )

}

export default SignUp