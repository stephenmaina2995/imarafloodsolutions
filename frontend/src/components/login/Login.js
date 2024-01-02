import react, { useState } from "react"

const Login = ({handleLogin}) => {
    const [user, setUser] = useState({
        username:"",
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
                <input type="email" value={user.email} name="email" id = "email" onChange={handleChange}/>
                <input type="password" value={user.password} name="password" id = "password" onChange={handleChange}/>
            </form>
        </div>
    )

}

export default Login