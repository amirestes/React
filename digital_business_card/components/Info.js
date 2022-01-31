import React from "react"

export default function Info() {
    return (
        <header className="header">
            <div className="image">
                <img src="./images/alice.jpeg" />
            </div>
            <h1>Alice Mirestes</h1>
            <h3>Front End Developer</h3>
            <p>amirestes.com</p>
            <div className="button">
                <button className="email"><img src="./images/Icon.png" className="email"/>Email</button>
                <button className="linkedin"><img src="./images/linkedin.png" className="linkedin" />LinkedIn</button>
            </div>
        </header>
    )
}