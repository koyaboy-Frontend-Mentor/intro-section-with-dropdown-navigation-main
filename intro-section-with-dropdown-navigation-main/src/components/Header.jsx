import React, { useRef } from "react"

export default function Header() {

    const MenuRef = useRef(null)
    const overlayRef = useRef(null)

    const openMenu = () => {
        MenuRef.current.style.display = "block"
        overlayRef.current.style.display = "block"
    }

    const closeMenu = () => {
        MenuRef.current.style.display = "none"
        overlayRef.current.style.display = "none"
    }

    return (
        <>
            <div className='overlay' ref={overlayRef}></div>
            <header>
                <h2 className="title">snap</h2>
                <div className="hamburger-menu-container" onClick={openMenu}>
                    <img src="./images/icon-menu.svg" alt="MENU" className="hamburger-menu" />
                </div>

                <div className="header-items" ref={MenuRef}>
                    <div className="close-btn-container" onClick={closeMenu}>
                        <img src="./images/icon-close-menu.svg" alt="close-btn" />
                    </div>
                    <div className="menu">
                        <nav>
                            <ul>
                                <li>
                                    <div className="dropdown">
                                        <div> Features</div>
                                        <img src="./images/icon-arrow-down.svg" alt="" />
                                    </div>

                                    <div className="dropdown-content">
                                        <div>
                                            <img src="./images/icon-todo.svg" alt="Todo img" />
                                            <a href="/">Todo List</a>
                                        </div>
                                        <div>
                                            <img src="./images/icon-calendar.svg" alt="Calendar img" />
                                            <a href="/">Calendar</a>
                                        </div>
                                        <div>
                                            <img src="./images/icon-reminders.svg" alt="Reminders img" />
                                            <a href="/">Reminders</a>
                                        </div>
                                        <div>
                                            <img src="./images/icon-planning.svg" alt="Planning img" />
                                            <a href="/">Planning</a>
                                        </div>

                                    </div>
                                </li>
                                <li>
                                    <div className="dropdown">
                                        <div>Company</div>
                                        <img src="./images/icon-arrow-down.svg" alt="" />
                                    </div>

                                    <div className="dropdown-content">
                                        <a href="/">History</a>
                                        <a href="/">Our Team</a>
                                        <a href="/">Blog</a>
                                    </div>
                                </li>
                                <li><a href="/">Careers</a></li>
                                <li><a href="/">About</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="auth-buttons">
                        <button className="login">Login</button>
                        <button className="register">Register</button>
                    </div>
                </div>
            </header>
        </>
    )
}