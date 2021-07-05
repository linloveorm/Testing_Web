import React from 'react'
import '../Theme.scss'
import "bootstrap-icons/font/bootstrap-icons.css";


const Header = () =>{

 return(
    <nav className="header-bar">
        <div>
            <div className="header-style">
                <img className="logo-img" src="https://i.ibb.co/BtNnDbS/Dummy-Logo.png" alt="Logo"/>
            </div>
        </div>        
        <div className="left-group">
            <div className="row-style">
                <div className="col-left">
                    <div className="left-input"> 
                        <span className="bi bi-search"/>
                        <input type="text" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1"/>
                        
                    </div>
                </div>
                <div className="col-right">
                    <div className="btn-group">
                        <button className="icon-btn">
                            <span className="bi bi-chat-dots"></span>
                        </button>
                        <div className="icon-bell-btn">
                            <button >
                                <span className="bi bi-bell"></span>
                            </button>
                        </div>                        
                        <button className="icon-btn">
                            <span class="bi bi-question-circle"></span>
                        </button>
                        <div className="icon-all-app-btn">
                            <button >
                                <div>
                                    <span className="bi bi-circle"></span>
                                    <span className="bi bi-circle"></span>
                                    <span className="bi bi-circle"></span>
                                </div>
                                <div>
                                    <span className="bi bi-circle"></span>
                                    <span className="bi bi-circle"></span>
                                    <span className="bi bi-circle"></span>
                                </div>
                                <div>
                                    <span className="bi bi-circle"></span>
                                    <span className="bi bi-circle"></span>
                                    <span className="bi bi-circle"></span>
                                </div>
                                
                            </button>
                        </div>
                        <button className="icon-btn">
                            <span className="bi bi-person-circle"></span>
                        </button>
                    </div>
                </div>
            </div>
            
            
            
            
        </div>
    </nav>
    
    )
    
}

export default Header