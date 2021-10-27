import React from "react"; 
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav id="nav-bar">
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/Contacts">Contacts</Link>
            </li>
            <li>
            <Link to="/PriorityX">Priority-X</Link>
            </li>                        
        </ul>
</nav>
    
  )
}

export default Navbar