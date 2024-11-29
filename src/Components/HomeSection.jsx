import React from 'react'
import '../Styles/styles.css'

const HomeSection = () => {
    return (
    <div className="home-section">
        <div>
            <div className='welcome-box'>
                <div className='welcome-box-img'>
                    <img src="https://i1.sndcdn.com/artworks-000042815326-h1yfa1-t500x500.jpg" alt="" />
                </div>
                <div className='home-welcome-box'>
                    <div>
                        <span className="text welcome-text">¡Bienvenido!</span>
                    </div>
                    <div>
                        <span className="text welcome-name">Thiago Candia</span>
                    </div>
                </div>
                <div className='btn-share-profile'>
                    <button className='btn-config'>
                        <span className="text">Compartir perfil</span>
                    </button>
                </div>
            </div>
            <div className='welcome-box'>
                <div>
                    <p className="text">Estas son algunas de las acciones rápidas para comenzar a trabajar</p>
                </div>
            </div>
        </div>
    <div className='home-cards'>
        <div className="home-card-item">
            <div className='welcome-card-item welcome-card-box-img'>
                <img src="./src/Assets/Img/surf.png" alt="" />
            </div>
            <div className='welcome-card-item'>
                <h3 className="text">Reuniones sencillas con cualquier persona</h3>
            </div>
            <div className='welcome-card-item'>
                <p className="text">Comparte la invitación con cualquier persona, incluso si no están en Skype. No se requiere ninguna descarga ni registrarse.</p>
            </div>
            <div className='welcome-card-item'>
                <button className='btn-config btn-card-home'>
                    <i></i>
                    <span className="text">Reunirte ahora</span>
                    <i></i>
                </button>
            </div>
        </div>
        <div className="home-card-item">
            <div className='welcome-card-item welcome-card-box-img'>
                <img src="./src/Assets/Img/cel.png" alt="" />
            </div>
            <div className='welcome-card-item'>
                <h3 className="text">Llamar a teléfonos fijos y móviles</h3>
            </div>
            <div className='welcome-card-item'>
                <p className="text">Las llamadas entre usuarios de Skype son siempre gratuitas, pero también puedes llamar a teléfonos móviles y fijos desde Skype a tarifas realmente bajas.</p>
            </div>
            <div className='welcome-card-item'>
                <button className='btn-config btn-card-home'>
                    <span className="text">Abrir teclado de marcado</span>
                </button>
            </div>
        </div>
        
    </div>
    </div>
    )
}

export default HomeSection