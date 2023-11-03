  import React from 'react'; 
  import Logo from '../assets/Logo.png';
  import login from '../assets/login.png';

 const Navbar = () => {

    return (
        
        <nav className="navbar">
            <div>
            <img src={Logo} alt='Logo'/>
            <h1>Instagram</h1>
            </div>
           <a href='/login'><img src={login} alt='login'/></a> 
        </nav>
    ); 

 

 } 
  export default Navbar;