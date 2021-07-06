import React from 'react'
import '../Theme.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "../NavBar/NavBar"




const Header = () => {

    return (
        <>
            <nav className="header-bar">
                <div>
                    <div className="header-style">
                        <img className="logo-img" src="https://i.ibb.co/BtNnDbS/Dummy-Logo.png" alt="Logo" />
                    </div>
                </div>
                <div className="left-group">
                    <div className="row-style">
                        <div className="col-left">
                            <div className="left-input">
                                <span className="bi bi-search" />
                                <input type="text" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />

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
            <div className="second-header">
                <div>
                    <div>
                        <Navbar />
                    </div>
                    <div className="btn-group">

                        <div className="dropdown ">
                            <button className="btn dropdown-style dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                Contact Personal List
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button className="dropdown-item" type="button">Action</button></li>
                                <li><button className="dropdown-item" type="button">Another action</button></li>
                                <li><button className="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div > 
                    <div className="btn-style">
                        <span className="bi bi-plus"/>
                        <button>Add Contact Person</button>
                    </div>
                    <div className="btn-style">
                        <span className="bi bi-upload"/>
                        <button>Imported</button>
                    </div>
                    <div className="btn-style">
                        <span className="bi bi-gear"/>
                    </div>
                </div>

            </div>

        </>

    )

}

export default Header