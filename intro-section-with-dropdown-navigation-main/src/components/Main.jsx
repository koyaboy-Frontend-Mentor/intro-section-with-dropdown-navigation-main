import React, { useState, useEffect } from "react";

export default function Main() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Determine which image source to use based on screen width
    const imageSrc = windowWidth >= 800 && windowWidth <= 1440
        ? "./images/image-hero-desktop.png"
        : "./images/image-hero-mobile.png";
    return (
        <div className="main-container">
            <main>
                <div className="main-image-container">
                    <img
                        // src="./images/image-hero-mobile.png"
                        src={imageSrc}
                        alt="Content-Image"
                        className="main-image" />
                </div>
                <div className="main-text-content">
                    <h2>Make remote work</h2>
                    <div className="pyramid-text">
                        <p>Get your team in sync, no matter your</p>
                        <p> location. Streamline processes, create</p>
                        <p> team rituals, and watch
                            productivity soar.</p>
                    </div>


                    <button>Learn more</button>
                    <div className="clients">
                        <div>
                            <img
                                src="./images/client-databiz.svg"
                                alt="databiz"
                            />
                        </div>
                        <div>
                            <img
                                src="./images/client-audiophile.svg"
                                alt="audiophile"
                            />
                        </div>
                        <div>
                            <img
                                src="./images/client-meet.svg"
                                alt="meet"
                            />
                        </div>
                        <div>
                            <img
                                src="./images/client-maker.svg"
                                alt="maker"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}