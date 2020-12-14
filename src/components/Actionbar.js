import React, { useState } from 'react'
import './Actionbar.css'
import { useStateValue } from './StateProvider'
function Actionbar() {
    const [{toUpload},dispatch] = useStateValue()

    const Upload = () =>{
        dispatch({
            type: "UPLOAD_CHECK",
            state: !toUpload
        })
    }
    return (
        <div className="actionbar">
            <button onClick={Upload}>
                {!toUpload ? "Upload" : "Cancle"}
            </button>
        </div>
    )
}

export default Actionbar
