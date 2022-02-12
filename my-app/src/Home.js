import React from 'react'


export let HomePage = (props) => {
    return(
        <div className="title-screen">
            <div className="title-body">
                <h1 className="title-screen-title">Hi, I am Jacob</h1>
                <div className="btn-container">
                    <ul className="btn-list">
                        <li className="btn-list-item"><a href="#" className="btn">Projects</a></li>
                        <li className="btn-list-item"><a href="#" className="btn">Resume</a></li>
                        <li className="btn-list-item"><a href="#" className="btn">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}