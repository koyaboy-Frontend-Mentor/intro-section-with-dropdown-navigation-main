import React from "react"

export default function Header() {
    return (
        <>
            <header>
                <h2 className="title">snap</h2>
                <div className="hamburger-menu-container">
                    <img src="./images/icon-menu.svg" alt="MENU" className="hamburger-menu" />
                </div>
            </header>
        </>
    )
}