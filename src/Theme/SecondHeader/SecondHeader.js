import React from 'react'
import '../Theme.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "../NavBar/NavBar"




const SecondHeader = () => {

    return (
        <>
            
            <div className="second-header">
                <div className="left-group-second-header">
                    <div>
                        <Navbar />
                    </div>
                    <div className="btn-group">
                        <div className="dropdown ">
                            <button className="btn dropdown-style dropdown-toggle" style={{fontSize:"20px"}} type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
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
                <div className="right-group-second-header"> 
                    <div className="btn-style">
                        <span className="bi bi-plus-lg"/>
                        <button>Add Contact Person</button>
                    </div>
                    <div className="btn-style">
                        <span className="bi bi-upload"/>
                        <button>Imported</button>
                    </div>
                    <div className="btn-style">
                        <span className="bi bi-gear" style={{fontSize:"25px", marginRight:"20px"}}/>
                    </div>
                </div>

            </div>

        </>

    )

}

export default SecondHeader