import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
function ModeChange() {

    const blackMode = useSelector((store) => store.app.blackMode)

    function ChangeBackColor() {
        const body = document.querySelector("body")
        if (blackMode) {

            body.style.backgroundColor = 'rgba(32, 31, 31, 1)';

        }
        else {

            body.style.backgroundColor = 'rgba(255, 255, 255, 1)';

        }

    }
    useEffect(() => {
        ChangeBackColor(blackMode);
    }, [blackMode])

    return (<div></div>)
}

export default ModeChange