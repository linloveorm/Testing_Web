import React from 'react'
import '../Theme.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";




const NavBar = () => {
    
    return (
        <>
            <div className="nav-btn-style">
                <button className="burger-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                    <span className="burger-menu"></span>
                    <span className="burger-menu"></span>
                    <span className="burger-menu"></span>
                </button>
            </div>


            <div className="offcanvas offcanvas-start nav-menu-style" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <div className="menu-header-text-style">Contact</div>
                    <button type="button " className="bi bi-x-lg menu-header-text-style" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div className="side-menu-setting">
                        <span className="bi bi-columns-gap menu-text-style"></span>
                        <button className="menu-text-style " >Dashboard</button>
                    </div>
                    <div className="side-menu-setting">
                        <span className="bi bi-file-earmark-person menu-text-style"></span>
                        <button className="menu-text-style">Contact Person List</button>
                    </div>
                    <div className="side-menu-setting">
                        <span className="bi bi-file-text menu-text-style"></span>
                        <button className="menu-text-style">Report</button>
                    </div>
                    <div>
                        <div className="dropdown" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <span className="bi bi-gear menu-text-style"></span>
                            <button className="btn dropdown-style dropdown-toggle menu-text-style" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                Setting
                            </button>
                            <ul className="dropdown-menu" style={{ background: "transparent" }} aria-labelledby="dropdownMenu2">
                                <li className="setting-dropdown">
                                    <span className="bi bi-circle menu-icon-style"></span>
                                    <button className="dropdown-item setting-button" type="button">Manage Layout</button>
                                </li>
                                <li className="setting-dropdown">
                                    <span className="bi bi-circle menu-icon-style"></span>
                                    <button className="dropdown-item setting-button" type="button">Member</button>
                                </li>
                                <li className="setting-dropdown">
                                    <span className="bi bi-circle menu-icon-style"></span>
                                    <button className="dropdown-item setting-button" type="button">Data Access</button>
                                </li>
                                <li className="setting-dropdown">
                                    <span className="bi bi-circle menu-icon-style"></span>
                                    <button className="dropdown-item setting-button" type="button">System Log</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>





            {/* <div className="container">
                <div className="burger-side-bar">
                    <nav className="navbar" >
                        <div className="nav-bar-style">
                            <button className="burger-btn" onClick={checkStatus}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </nav>
                    {open ?
                        "" :
                        <div className="side-bar-container">
                            <div className="side-bar-style">
                                <div className="side-menu-setting">
                                    <span className="bi bi-clipboard-data menu-text-style"></span>
                                    <button className="menu-text-style " >Dashboard</button>
                                </div>
                                <div className="side-menu-setting">
                                    <span className="bi bi-file-earmark-person menu-text-style"></span>
                                    <button className="menu-text-style">Contact Person List</button>
                                </div>
                                <div className="side-menu-setting">
                                    <span className="bi bi-file-text menu-text-style"></span>
                                    <button className="menu-text-style">Report</button>
                                </div>
                                <div>
                                    <div className="dropdown" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                        <span className="bi bi-gear menu-text-style"></span>
                                        <button className="btn dropdown-style dropdown-toggle menu-text-style" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                            Setting
                                        </button>
                                        <ul className="dropdown-menu" style={{ background: "transparent" }} aria-labelledby="dropdownMenu2">
                                            <li className="setting-dropdown">
                                                <span className="bi bi-circle menu-icon-style"></span>
                                                <button className="dropdown-item setting-button" type="button">Manage Layout</button>
                                            </li>
                                            <li className="setting-dropdown">
                                                <span className="bi bi-circle menu-icon-style"></span>
                                                <button className="dropdown-item setting-button" type="button">Member</button>
                                            </li>
                                            <li className="setting-dropdown">
                                                <span className="bi bi-circle menu-icon-style"></span>
                                                <button className="dropdown-item setting-button" type="button">Data Access</button>
                                            </li>
                                            <li className="setting-dropdown">
                                                <span className="bi bi-circle menu-icon-style"></span>
                                                <button className="dropdown-item setting-button" type="button">System Log</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }


                </div>


            </div> */}
        </>
    )
}

export default NavBar