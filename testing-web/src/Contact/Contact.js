import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Theme/Theme.scss"




const Contact = () => {

    // const [data, setData] = useState(null)
    const dataJson = require("../json/data-json.json")
    const data = dataJson.results
    const defaultCol = ["Full Name", "Mobile Number", "company", "Time Stamp"]
    var obj = data[0]
    var objKey = Object.keys(obj)
    var pageSize = 3
    const [limit, setLimit] = useState(15);
    const [statePageGroup, setStatePageGroup] = useState(1);
    const [statePage, setStatePage] = useState(1);
    
    
    var pageList = []

    const itemsGroup = data.map((e, i) => {
        return i % limit === 0 ? data.slice(i, i + limit) : null;
    }).filter(e => { return e; });
    // console.log("Items Groups: ", itemsGroup)


    for (var i = 0; i < itemsGroup.length; i++) {
        pageList.push(i)
    }
    var pageGroupSize = pageList.length / (pageList.length / pageSize)

    const pagesGroup = pageList.map((e, i) => {
        return i % pageGroupSize === 0 ? pageList.slice(i, i + pageGroupSize) : null;
    }).filter(e => { return e; });
    

    var res = Object.keys(obj).reduce((prev, curr, index) => {
        function isUpperCase(aCharacter) {
            return (aCharacter >= 'A') && (aCharacter <= 'Z');
        }
        function isUpper(str) {
            return (/[A-Z]/.test(str));
        }


        const firstAlphabet = objKey[index].substring(0, 1).toUpperCase()
        // var nextUpperCaseCharector = 0
        var firstWord = ""
        var nextWord = ""
        var newColKey = ""
        if (isUpper(objKey[index])) {
            for (var j = 0; j < objKey[index].length; j++) {
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

    // let filteredCol = res
    // let indexDefaultCol =[]

    // for(let i = 0; i < defaultCol.length; i++){
    //     indexDefaultCol.push(res.indexOf(defaultCol[i]))
    // }

    // console.log("filteredCol: ",indexDefaultCol)




    const tableList = () => {
        var itemRow = itemsGroup[statePage - 1]
        if (statePage === 1) {
            return (
                <tbody>

                    {
                        itemRow.length > 0
                            ? itemRow.map((key, index) => {
                                return (
                                    <tr>
                                        <td>
                                            {itemRow[index].fullName}
                                        </td>
                                        <td>
                                            {"0" + itemRow[index].mobileNumber}
                                        </td>
                                        <td>
                                            {itemRow[index].company}
                                        </td>
                                        <td>
                                            {itemRow[index].timeStamp}
                                        </td>
                                        <td>
                                            <button data-bs-toggle="button" className="btn-page-style">
                                                <span className="bi bi-three-dots"></span>
                                            </button>
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
                                            {itemRow[index].fullName}
                                        </td>
                                        <td>
                                            {"0" + itemRow[index].mobileNumber}
                                        </td>
                                        <td>
                                            {itemRow[index].company}
                                        </td>
                                        <td>
                                            {itemRow[index].timeStamp}
                                        </td>
                                        <td>
                                            <button data-bs-toggle="button" className="btn-page-style">
                                                <span className="bi bi-three-dots"></span>
                                            </button>
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
                                            {itemRow[index].fullName}
                                        </td>
                                        <td>
                                            {"0" + itemRow[index].mobileNumber}
                                        </td>
                                        <td>
                                            {itemRow[index].company}
                                        </td>
                                        <td>
                                            {itemRow[index].timeStamp}
                                        </td>
                                        <td>
                                            <button data-bs-toggle="button" className="btn-page-style">
                                                <span className="bi bi-three-dots"></span>
                                            </button>
                                        </td>
                                    </tr>)
                            }) : ''
                    }


                </tbody>
            )
        }

    }

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
   



    return (
        <>
            <div className="contact-table">
                <div >
                    <table className="table table-light table-hover">
                        <thead>
                            <tr>
                                {
                                    defaultCol.length > 0
                                        ? defaultCol.map((key, index) => {
                                            return (
                                                <th>
                                                    {defaultCol[index]}
                                                </th>
                                            )
                                        }) : ''
                                }
                                <th>
                                    <button data-bs-toggle="button" className="btn-page-style">
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
                </div>
            </div>
        </>
    )




}




export default Contact;



