import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container">
                <NavLink className="navbar-brand" to="/">{props.title}</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                    </ul>
                    {/* <div className={`form-check mx-2 form-switch text-${props.mode==='light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onChange={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div> */}
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" className="btn btn-primary border" datacolor="light" onClick={()=>props.toggleMode("light")}></button>
                        <button type="button" className="btn btn-dark border" datacolor="dark" onClick={()=>props.toggleMode("dark")}></button>
                        <button type="button" className="btn btn-danger border" datacolor="red" onClick={()=>props.toggleMode("red")}></button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title : PropTypes.string,
    aboutText : PropTypes.string
}

Navbar.defaultProps = {
    title : "Set Title",
    aboutText : "Set About Text"
}
