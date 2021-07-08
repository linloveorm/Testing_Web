import React, { useState, useEffect } from 'react';




const Contact = () => {

    // const [data, setData] = useState(null)
    const dataJson = require("../json/data-json.json")
    const data = dataJson.results
    const objKey = Object.keys(data)
    const colList = []
    const defaultCol = ["fullName", "mobileNumber", "company", "timeStamp"]

    function isUpperCase(aCharacter) {
        return (aCharacter >= 'A') && (aCharacter <= 'Z');
    }

    for (var i = 0; i < objKey.length; i++) {
        const firstAlphabet = objKey[i].substring(0, 1).toUpperCase()
        var nextUpperCaseCharector = 0
        for (var j = 0; j < objKey[i].length; j++) {
            if (isUpperCase(objKey[i].charAt(j))) {
                nextUpperCaseCharector = j
            }
        }
        const newKey = firstAlphabet

    }






    return (
        <div>
            <div>
                <table className="table">
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
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )

    // return (
    //     <div>
    //        {
    //            data.length > 0
    //            ? data.map((id,index)=>{
    //                return(
    //                  <div key={index}>
    //                     {data[index].id}
    //                  </div>
    //                  )
    //            }):''
    //        }
    //     </div>
    // );



}

export default Contact;