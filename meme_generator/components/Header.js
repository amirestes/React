import React from "react"

export default function Header() {
    return (
        <header>
            <div className="header--logo">
                <img 
                    src="../images/troll-face.png"
                    alt="Header image"
                />
                <h1>Meme Generator</h1>
            </div>
            <h2>React Course - Project 3</h2>
        </header>
    )
}