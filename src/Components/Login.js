import React, {useState, useContext} from "react";
import axios from "axios";
import userContext from "../context/userContext";
import { useNavigate } from "react-router-dom";


const Login = () => {
   const [user, setUser] = useState({
    email: "", password: ""
   })

   const {setToken} = useContext(userContext);

   const {email, password} = user;

   const navigate = useNavigate();

   function handleInput(e){
         setUser({...user, [e.target.name]: e.target.value})
   }

   function handleSubmit(e){
       e.preventDefault();
       // validations: 
       if(  !email || !password ){
           alert("All fields are required");
        }
        else{

           axios.post("https://instagram-express-app.vercel.app/api/auth/login/" , {email,password})
           .then( response => {
                console.log(response.data);
               
                // from the context
                setToken(response.data.data.token);
                // add token to local storage
               localStorage.setItem("token", response.data.data.token);
               alert("Login successful")

               navigate("/dashboard");
           })

           .catch( err=> console.log(err.response.data.message))

        }
    }

    return(
        <div className="root">
          <div className="signup">
            <h1>Login<span style={{color:'tomato'}}>•</span></h1>
            <form onSubmit={handleSubmit}>
                 
                 <input type="text"  placeholder="Enter your email" name = "email"
                    value={user.email} onChange={handleInput} 
                 />
                 <input type="password"  placeholder="Enter your password" name = "password"
                    value={user.password} onChange={handleInput}
                 />
                 
                 <button className="btn" type="submit">Submit</button>
            </form>
            <p>Don't have an account? <a href="/">Signup</a></p>
        </div>
        </div>
        
    )
}

export default  Login;