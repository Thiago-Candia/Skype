import React, { useState } from "react"
import "../Styles/styles.css"

const SectionProfile = () => {
    const [menuVisible, setMenuVisible] = useState(false)

    //alternar la visibilidad del menú
    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <div className="profile-section">
            <div className="profile-box-img">
                <button className="btn-config" onClick={toggleMenu}>
                    <img
                        src="https://i1.sndcdn.com/artworks-000042815326-h1yfa1-t500x500.jpg"
                        alt="Mi imagen"
                    />
                </button>
            </div>
            <div className="profile-information">
                <div className="profile-name_credit">
                    <div className="profile-name">
                        <button className="btn-config" onClick={toggleMenu}>
                            <span className="text">Thiago Candia</span>
                        </button>
                    </div>
                    <div className="profile-credit">
                        <button className="btn-config">
                            <span className="text">$0.00</span>
                        </button>
                    </div>
                </div>
                <div className="profile-status">
                    <button className="btn-config">
                        <span className="text">Establecer un estado</span>
                    </button>
                </div>
            </div>
            <div className="profile-options">
                <button className="text btn-config">
                    <i className="bi bi-three-dots"></i>
                </button>
            </div>
            {menuVisible && (
                <nav className="profile-dropdown">
                    <ul>
                        <li>
                            <button onClick={() => alert("Cambiar foto")}>Cambiar foto</button>
                        </li>
                        <li>
                            <button onClick={() => alert("Cambiar estado")}>Cambiar estado</button>
                        </li>
                        <li>
                            <button onClick={() => alert("Cerrar sesión")}>Cerrar sesión</button>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    )
}

export default SectionProfile
