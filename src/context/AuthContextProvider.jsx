
import React,{createContext,useEffect,useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
        const [token, setToken] = useState(null);
        const navigate = useNavigate()
        const location = useLocation()


      useEffect(()=>{
         console.log(location)
      }, [location])  

      useEffect(()=>{
       console.log(token)
      },[token])  

     const login = (AuthToken)=>{
        console.log(token)
       setIsAuthenticated(true)  //set authentication as TRUE
       setToken(AuthToken)
       localStorage.setItem("token", AuthToken)
       navigate(location.state.from || "/")

     }
     
     const logout = () => {
      setToken(null)
            setIsAuthenticated(false)
            localStorage.removeItem("token")


      navigate("/login")
     };

  return(
   <AuthContext.Provider value={{login, logout, isAuthenticated, token}}>
    {children}
    </AuthContext.Provider>
   )
};

export default AuthContextProvider