import React, { useRef, useState, useEffect } from "react"

export default function Header() {

    const [features, setFeatures] = useState(false)
    const [company, setCompany] = useState(false)
    const [featuresDropdownArrow, setFeaturesDropdownArrow] = useState(false)
    const [companyDropdownArrow, setCompanyDropdownArrow] = useState(false)

    const MenuRef = useRef(null)
    const overlayRef = useRef(null)
    const featuresDropdownRef = useRef(null)
    const companyDropdownRef = useRef(null)
    const featuresArrowRef = useRef(null)
    const companyArrowRef = useRef(null)

    const openMenu = () => {
        MenuRef.current.style.display = "block"
        overlayRef.current.style.display = "block"
    }

    const closeMenu = () => {
        MenuRef.current.style.display = "none"
        overlayRef.current.style.display = "none"
    }

    const openDropdown = (dropdownType) => {
        if (dropdownType === "features") {
            setFeatures((prevFeatures) => !prevFeatures);
            setFeaturesDropdownArrow((prevArrow) => !prevArrow);
        } else if (dropdownType === "company") {
            setCompany((prevCompany) => !prevCompany);
            setCompanyDropdownArrow((prevArrow) => !prevArrow);
        }
    };

    useEffect(() => {
        if (featuresDropdownRef.current) {
            featuresDropdownRef.current.style.display = features ? "flex" : "none";
            featuresDropdownRef.current.style.flexDirection = "column";
        }

        if (featuresArrowRef.current) {
            featuresArrowRef.current.src = featuresDropdownArrow
                ? "./images/icon-arrow-up.svg"
                : "./images/icon-arrow-down.svg";
        }
    }, [features, featuresDropdownArrow]);

    useEffect(() => {
        if (companyDropdownRef.current) {
            companyDropdownRef.current.style.display = company ? "flex" : "none";
            companyDropdownRef.current.style.flexDirection = "column";
        }
        if (companyArrowRef.current) {
            companyArrowRef.current.src = companyDropdownArrow
                ? "./images/icon-arrow-up.svg"
                : "./images/icon-arrow-down.svg";
        }
    }, [company, companyDropdownArrow]);


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
                                    <div className="dropdown" onClick={() => openDropdown("features")}>
                                        <div> Features</div>
                                        <img src="./images/icon-arrow-down.svg" alt="arrow-down" ref={featuresArrowRef} />
                                    </div>

                                    <div className="dropdown-content" ref={featuresDropdownRef}>
                                        <div className="feature-items">
                                            <img src="./images/icon-todo.svg" alt="Todo img" />
                                            <a href="/">Todo List</a>
                                        </div>
                                        <div className="feature-items">
                                            <img src="./images/icon-calendar.svg" alt="Calendar img" />
                                            <a href="/">Calendar</a>
                                        </div>
                                        <div className="feature-items">
                                            <img src="./images/icon-reminders.svg" alt="Reminders img" />
                                            <a href="/">Reminders</a>
                                        </div>
                                        <div className="feature-items">
                                            <img src="./images/icon-planning.svg" alt="Planning img" />
                                            <a href="/">Planning</a>
                                        </div>

                                    </div>
                                </li>
                                <li>
                                    <div className="dropdown" onClick={() => openDropdown("company")}>
                                        <div>Company</div>
                                        <img src="./images/icon-arrow-down.svg" alt="arrow-up" ref={companyArrowRef} />
                                    </div>

                                    <div className="dropdown-content company" ref={companyDropdownRef}>
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