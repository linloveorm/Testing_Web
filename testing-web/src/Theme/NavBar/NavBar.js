import React from 'react'
import '../Theme.scss'
import "bootstrap-icons/font/bootstrap-icons.css";

const NavBar = () =>{

    return(
        <div>
            <div>
                <nav className="navbar">
                    <div className="nav-bar-style">
                        <button className="burger-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </nav> 
            </div>
            <div>
                <div className="dropdown">
                    <button className="dropdown-toggle" type="button" id="dropdown-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Contact Person List
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="Google.com" >Google</a>
                        <a className="dropdown-item" href="facebook.com" >Facebook</a>
                        <a className="dropdown-item" href="twitter.com">Twitter</a>
                    </div>

                </div>
            </div>
        </div>
        

    )
    
    
    
}

export default NavBar