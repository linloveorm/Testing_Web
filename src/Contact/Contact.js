import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import "../Theme/Theme.scss";

const Contact = () => {

    // const [data, setData] = useState(null)
    const dataJson = require("../json/data-json.json")
    const data = dataJson.results
    let defaultCol = ["Full Name", "Mobile Number", "Company", "Time Stamp"]
    let obj = data[0]
    let objKey = Object.keys(obj)
    let pageSize = 3
    const [limit, setLimit] = useState(15);
    const [statePageGroup, setStatePageGroup] = useState(1);
    const [statePage, setStatePage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false)


    let pageList = []

    //wrap table by limit items
    const itemsGroup = data.map((e, i) => {
        return i % limit === 0 ? data.slice(i, i + limit) : null;
    }).filter(e => { return e; });


    //get index of table page
    for (let i = 0; i < itemsGroup.length; i++) {
        pageList.push(i)
    }
    let pageGroupSize = pageList.length / (pageList.length / pageSize)

    //wrap page button group by page size
    const pagesGroup = pageList.map((e, i) => {
        return i % pageGroupSize === 0 ? pageList.slice(i, i + pageGroupSize) : null;
    }).filter(e => { return e; });

    //edit object key
    let res = Object.keys(obj).reduce((prev, curr, index) => {
        function isUpperCase(aCharacter) {
            return (aCharacter >= 'A') && (aCharacter <= 'Z');
        }
        function isUpper(str) {
            return (/[A-Z]/.test(str));
        }


        const firstAlphabet = objKey[index].substring(0, 1).toUpperCase()
        // let nextUpperCaseCharector = 0
        let firstWord = ""
        let nextWord = ""
        let newColKey = ""
        if (isUpper(objKey[index])) {
            for (let j = 0; j < objKey[index].length; j++) {
                if (isUpperCase(objKey[index].charAt(j))) {
                    // nextUpperCaseCharector = j
                    nextWord = objKey[index].substring(j, (objKey[index].length))
                    firstWord = objKey[index].substring(1, j)
                    newColKey = firstAlphabet + firstWord + " " + nextWord
                }
            }
        }
        else {
            newColKey = firstAlphabet + objKey[index].substring(1, (objKey[index].length))
        }

        return { ...prev, [newColKey]: obj[curr] }
    }, {});

    //filter only key in data
    let oldListColName = Object.keys(obj)

    //filter only key in res
    let newListColName = Object.keys(res)
    let listRemainColName = newListColName.filter(function (obj) { return defaultCol.indexOf(obj) === -1 })
    

    //Display Table
    const tableList = () => {
        
        let itemRow = itemsGroup[statePage - 1]
        if (statePage === 1) {
            return (
                <tbody>

                    {
                        itemRow.length > 0
                            ? itemRow.map((key, index) => {
                                return (
                                    <tr>
                                        <td>
                                            <div className="table-body-style">
                                                {itemRow[index].fullName}
                                            </div>
                                            
                                        </td>
                                        <td>
                                            <div className="table-body-style">
                                                {"0" + itemRow[index].mobileNumber}
                                            </div>
                                            
                                        </td>
                                        <td>
                                            <div className="table-body-style">
                                                {itemRow[index].company}
                                            </div>
                                            
                                        </td>
                                        <td>
                                            <div className="table-body-style">
                                                {itemRow[index].timeStamp}
                                            </div>
                                            
                                        </td>
                                        <td>
                                            <div className="dot-style">
                                                <span className="bi bi-three-dots"></span>
                                            </div>
                                        </td>
                                    </tr>)
                            }) : ''
                    }


                </tbody>
            )
        }
        else if (statePage > 1 && statePage < itemsGroup.length) {
            return (
                <tbody>

                    {
                        itemRow.length > 0
                            ? itemRow.map((key, index) => {
                                return (
                                    <tr>
                                        <td>
                                            <div className="table-body-style">
                                                {itemRow[index].fullName}
                                            </div>
                                            
                                        </td>
                                        <td>
                                            <div className="table-body-style">
                                                {"0" + itemRow[index].mobileNumber}
                                            </div>
                                            
                                        </td>
                                        <td>
                                            <div className="table-body-style">
                                                {itemRow[index].company}
                                            </div>
                                            
                                        </td>
                                        <td>
                                            <div className="table-body-style">
                                                {itemRow[index].timeStamp}
                                            </div>
                                            
                                        </td>
                                        <td>
                                            <div className="dot-style">
                                                <span className="bi bi-three-dots"></span>
                                            </div>
                                        </td>
                                    </tr>)
                            }) : ''
                    }


                </tbody>
            )
        }
        else if (statePage === itemsGroup.length) {

            return (
                <tbody>

                    {
                        itemRow.length > 0
                            ? itemRow.map((key, index) => {
                                return (
                                    <tr>
                                        <td>
                                            <div className="table-body-style">
                                                {itemRow[index].fullName}
                                            </div>
                                            
                                        </td>
                                        <td>
                                            <div className="table-body-style">
                                                {"0" + itemRow[index].mobileNumber}
                                            </div>
                                            
                                        </td>
                                        <td>
                                            <div className="table-body-style">
                                                {itemRow[index].company}
                                            </div>
                                            
                                        </td>
                                        <td>
                                            <div className="table-body-style">
                                                {itemRow[index].timeStamp}
                                            </div>
                                            
                                        </td>
                                        <td>
                                            <div className="dot-style">
                                                <span className="bi bi-three-dots"></span>
                                            </div>
                                        </td>
                                    </tr>)
                            }) : ''
                    }


                </tbody>
            )
        }

    }

    //Display page number button group
    const pageNumber = () => {
        if (statePageGroup === 1) {
            return (
                <div >
                    <div className="button-group">

                        {
                            pagesGroup[statePageGroup - 1].length > 0
                                ? pagesGroup[statePageGroup - 1].map((key, index) => {
                                    return (
                                        <button className="btn-page-style" data-bs-toggle="button" onClick={() => setStatePage(key + 1)}>{key + 1}</button>
                                    )
                                }) : ''
                        }
                        {
                            btnNextPage()
                        }
                    </div>
                </div>
            )
        }
        else if (statePageGroup > 1) {
            return (
                <div>
                    <div className="button-group">
                        {
                            btnPreviousPage()
                        }
                        {
                            pagesGroup[statePageGroup - 1].length > 0
                                ? pagesGroup[statePageGroup - 1].map((key, index) => {
                                    return (
                                        <button data-bs-toggle="button" className="btn-page-style" onClick={() => setStatePage(key + 1)}>{key + 1}</button>
                                    )
                                }) : ''
                        }
                        {
                            btnNextPage()
                        }

                    </div>
                </div>

            )
        }
        else if (statePageGroup === pagesGroup.length) {
            return (
                <div>
                    <div className="button-group">
                        {
                            btnPreviousPage()
                        }

                        {
                            pagesGroup[statePageGroup - 1].length > 0
                                ? pagesGroup[statePageGroup - 1].map((key, index) => {
                                    return (
                                        <button data-bs-toggle="button" className="btn-page-style" onClick={() => setStatePage(key + 1)}>{key + 1}</button>
                                    )
                                }) : ''
                        }
                    </div>
                </div>
            )
        }

    }

    //Display next page button
    const btnNextPage = () => {
        if (statePageGroup === 1) {

            return (
                <div>
                    <button
                        data-bs-toggle="button"
                        className="btn-page-style"
                        onClick={() => {

                            setStatePageGroup(statePageGroup + 1)
                            setStatePage(pagesGroup[statePageGroup][0])
                        }}>
                        <span className="bi bi-chevron-double-right"></span>
                    </button>
                </div>
            )
        }
        else if (statePageGroup < pagesGroup.length) {
            return (
                <div>
                    <button
                        data-bs-toggle="button"
                        className="btn-page-style"
                        onClick={() => {

                            setStatePageGroup(statePageGroup + 1)
                            setStatePage(pagesGroup[statePageGroup][0])
                        }}>
                        <span className="bi bi-chevron-double-right"></span>
                    </button>
                </div>
            )
        }
    }

    //Display previous page button
    const btnPreviousPage = () => {
        if (statePageGroup > 0) {
            return (
                <div>
                    <button
                        data-bs-toggle="button"
                        className="btn-page-style"
                        onClick={() => {
                            setStatePageGroup(statePageGroup - 1)
                            setStatePage(pagesGroup[statePageGroup - 1][0])
                        }}>
                        <span className="bi bi-chevron-double-left"></span>
                    </button>
                </div>
            )
        }
    }

    //filter the remaining names
    

    const handleAddCol = (value)=>{
        defaultCol.push(value)
    }


    return (
        <>
            <div className="contact-table">
                <div >
                    <table className="table  table-striped">
                        <thead>
                            <tr>
                                {
                                    defaultCol.length > 0
                                        ? defaultCol.map((key, index) => {
                                            return (
                                                <th>
                                                    <div className="table-col-style">
                                                    {defaultCol[index]}
                                                    </div>
                                                    
                                                </th>
                                            )
                                        }) : ''
                                }
                                <th>
                                    <button type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop"
                                        className="btn-page-style">
                                        <span className="bi bi-three-dots"></span>
                                    </button>
                                </th>
                            </tr>
                        </thead>

                        {tableList()}



                    </table>
                </div>
                <div className="page-group">

                    <div className="dropdown-btn">
                        <div className="dropdown" style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "50px" }}>
                            <button
                                className="btn dropdown-style dropdown-toggle menu-text-style"
                                type="button"
                                id="dropdownMenu2"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{ marginRight: "10px", borderColor: "#B2B2B2", borderRadius: "10px" }}>
                                {limit}
                            </button>
                            <ul className="dropdown-menu" style={{ background: "white" }} aria-labelledby="dropdownMenu2">
                                <li className="setting-dropdown">
                                    <button className="dropdown-item setting-button" onClick={() => setLimit(15)}>15</button>
                                </li>
                                <li className="setting-dropdown">
                                    <button className="dropdown-item setting-button" onClick={() => setLimit(30)}>30</button>
                                </li>
                                <li className="setting-dropdown">
                                    <button className="dropdown-item setting-button" onClick={() => setLimit(75)} >75</button>
                                </li>
                                <li className="setting-dropdown">
                                    <button className="dropdown-item setting-button" onClick={() => setLimit(data.length)} >show all</button>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="btn-group">
                        {pageNumber()}
                    </div>
                    <div>
                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog" >
                                <div className="modal-content" >
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">Add Column Name</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setIsModalOpen(false)}></button>
                                    </div>
                                    <div className="modal-body">
                                        {

                                            listRemainColName.length > 0
                                                ? listRemainColName.map((key, i) => {
                                                    return (
                                                        <div className="container-modal-btn">
                                                            <button className="modal-column-btn" onClick={() => handleAddCol(key)}>
                                                                <span className="bi bi-plus" style={{fontSize:"28px",alignItems:"center"}} />
                                                                <div className="align-col-name">
                                                                    {
                                                                        key
                                                                    }
                                                                </div>
                                                            </button>
                                                        </div>)
                                                }) : ''
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )




}




export default Contact;



