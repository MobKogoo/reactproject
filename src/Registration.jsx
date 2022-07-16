import { useState } from "react"
import Login from './Login'


const Register=()=>{
    const [userName, setUserName]=useState('')
    const [userEmail, setUserEmail]=useState('')
    const [userPassword, setUserPassword]=useState('');
     
   
    const [error, setError]=useState(false)
    const [login, setLogin]=useState(false)
    
    const SubmitFunc=(e)=>{
        e.preventDefault()
        if(userName==='' || userEmail==='' || userPassword ===''){
            setError(true)
        }
        else{
            setLogin(true)
            localStorage.setItem('username',JSON.stringify(userName) )
            localStorage.setItem('password',JSON.stringify(userPassword) )
        }
    }
    return(
        <>
            {!login ? (
            <div>   
            <form action="" onSubmit={SubmitFunc}>
                <input type="text" placeholder="userName" onChange={(e)=> setUserName(e.currentTarget.value)} />
                <input type="email" placeholder="email" onChange={(e)=> setUserEmail(e.currentTarget.value)} />
                <input type="password" placeholder="password" onChange={(e)=> setUserPassword(e.currentTarget.value)} />
                <button type="submit">დარეგისტრირდი</button>
            </form>
                <div>
                { error &&(
                <p>შეავსე ყველა სავალდებულო ველი</p>
                )}
                </div>
            </div>
            ):(
            <Login/>
            ) }  

       </>
        
    )
}

export default Register