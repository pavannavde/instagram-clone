import React,{useState, useContext, useEffect} from "react"; 
import axios from "axios";
import userContext from "../context/userContext";
import { useNavigate } from "react-router-dom";



const Dashboard = () => {

    const [joke, setJoke] = useState("")
    const [name, setName] = useState("")

    const {token,setToken} = useContext(userContext)
    const navigate = useNavigate();


    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token){
            setToken(token);
        }
        if(!token){
                navigate("/login")
        }
         getjoke()
         
    },[token])

    async function getjoke(){
        try{
            const response = await axios.get("https://instagram-express-app.vercel.app/api/auth/zuku",{
                headers: {
                    authorization:  `Bearer ${token}`
                }
            })
            console.log(response.data)
            setJoke(response.data.data.message)
            setName(response.data.data.user.name)
            
        }
        catch(e){
            console.log(e)
        }

    }

    async function handleLogout(){
          try{
             const response = await   axios.delete("https://instagram-express-app.vercel.app/api/auth/logout",{
                    headers: {
                        authorization:  `Bearer ${token}`
                    }
                })
                console.log("Logout",response.data)
                setToken(null)
                setJoke("")
                setName("")
                // remove token from local storage 
                localStorage.removeItem("token");
          }
            catch(e){
                console.log(e)
            }
    }


    return(
        <div>

            <h1>Welcome {name}</h1>
            <p>{joke}</p>

            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}


export default Dashboard;