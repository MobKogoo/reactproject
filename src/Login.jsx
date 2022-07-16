import { useState } from "react"
import Register from "./Registration"
import Home from "./Home"

const Login=()=>{
    const [username, setusername]= useState('')
    const [password, setpassword]= useState('')
     
    const [errorLogin, setErrorLogin]=useState(false)
    const [LoginPage, setLoginPage]=useState(false)
    const [LogoutPage, setLogoutPage]=useState(false)
    
    const name = JSON.parse(localStorage.getItem('username'))
    const passcode = JSON.parse(localStorage.getItem('password'))
    const LoginFunc=(e)=>{
        e.preventDefault()
        if(name === username && passcode === password){
            setLoginPage(true)
        }else if(name !== username && passcode !== password)
        {
            setErrorLogin(true)
        }
    }
    const Logout=(e)=>{
      e.preventDefault();
      setLogoutPage(true)
      
    }
    return(
        <>
        <button onClick={Logout}>Log out</button>
        {!LoginPage ? (
        <div>
        <form action="" onSubmit={LoginFunc}>
            <input type="text" placeholder="username" onChange={(e)=> setusername(e.currentTarget.value)} />
            <input type="password" placeholder="password" onChange={(e)=> setpassword(e.currentTarget.value)}/>
            <button type="submit">შესვლა</button>
        </form>
        
        <div>
        {errorLogin && (  
            <p>ჯერ დარეგისტრირდი</p>
        )}
        </div>
        </div>
        ): LogoutPage ? (
            <Register/>
        ):(
            <Home/>
        )
        }
        </>
    ) 
}

export default Login