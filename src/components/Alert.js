import React from 'react'

function Alert(props) {

    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        props.alert && 
        <>
            <div className="container">
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show position-fixed bottom-0 end-0 w-100 m-0`} role="alert">
                    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                </div>
            </div>
        </>
    )
}

export default Alert