import { useState } from "react";



function Login(props){


    const[loginForm, setLoginForm] = useState(
        {email: "", password: ""}
    )

    const handleChange = (event) =>{
        setLoginForm({...loginForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(loginForm)
        login()
    }

    const login = async () =>{
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "auth": loginForm })
            };
            const response = await fetch(`${props.url}user_token`, requestOptions)
            const data = await response.json()
            localStorage.setItem("jwt", data.jwt)
            
            }
        
        
    

    return(
        <div>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input name="email" id="email" type="email" className="form-control" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input name="password" id="password" type="password" className="form-control" onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </div>
    )
}

export default Login