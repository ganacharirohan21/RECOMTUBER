import React, {useState} from "react";
import "./Navbar.css";

function Navbar() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <div className="navbar">
                <div className="navbar-container">
                    {/* Logo */}
                    <div className="logo">
                        <a href="#home">
                            <span>R</span>                         
                            
                        </a>
                    </div>
                    {/* Buttons */}
                    <div className="nav-buttons"> 
                         <ul>
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#recommendations">Recommendations</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                        </ul> 
                    </div>
                </div>
            </div>
     
     
        {/* Dropdown */}

 <div
 className="hamburger-menu"
 onClick={(e) => setShowMediaIcons(!showMediaIcons)}>
    =
 </div>
 {showMediaIcons && (
      <div className="nav-buttonsmobile">
       <ul>
        <li>
         <a href="#home">Home</a>
        </li>
        <li>
         <a href="#about">About</a>
        </li>
        <li>
         <a href="#contact">Contact</a>
        </li>
        <li>
         <a href="#beta">Beta</a>
        </li>
        <li>
        </li>
       </ul>
       </div>
    )}
        </>
    );

}

export default Navbar;

