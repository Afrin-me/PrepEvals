import React, {useContext, useState} from 'react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContextProvider'

const Login=()=> {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const {login} = useContext(AuthContext)

    const handleSubmit=async (e)=>{
        e.preventDefault()

        try{
           const response = await axios.post(
             `https://little-spot-politician.glitch.me/login`
           ,{
            username, password
           })
           if(response.data.success){
            console.log(response.data.token, "response")  //if login get success you will get a token

           
            const {token} = response.data

            //This is object destructuring in JavaScript.
            // It extracts the token property from response.data and assigns it to a variable called token

            login(token) //this login function is from authcontext to set the token. this token will use as a AuthToken.
           }
        }
        catch(error){
            setError(error.response.data.message)

        }
    }
      return (
        <div>
          <h2>Login Form</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="Login" />
          </form>
        </div>
      );
}

export default Login