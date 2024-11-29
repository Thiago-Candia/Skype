import React, { useState } from 'react'
import '../Styles/styles.css'
import { GrKey } from "react-icons/gr"
import { Link, useNavigate } from 'react-router-dom'
import { Icons } from '../Assets/Icons/Icons'

const Login = () => {
    //Estado para manejar la etapa de inicio de sesión
    const [step, setStep] = useState('email');
    const [userData, setUserData] = useState({ email: '' })

    //Mostrar opcion de inicio de sesion
    const [showOptions, setShowOptions] = useState(true)

    // Manejador para la navegación al paso de contraseña
    const handleContinue = (evento) => {
        evento.preventDefault()
        const form = evento.target
        const email = form.email.value

        if (email) {
            setUserData({ email })
            setStep('password')
        } else {
            alert('Por favor ingrese un correo electrónico válido.')
        }

        setShowOptions(false)
    }

    return (
        <div className='screen-login'>
            <div className='login-box'>
                <div className='img-skype-box'>
                    <img src="https://logincdn.msftauth.net/shared/5/images/44_08ed657e48f1458641b5.png" alt="" />
                </div>
                {step === 'email' && (
                    <div className='login'>
                        <div className='login-box-element'>
                            <div className='microsoft-img-box'>
                                <img src="https://logincdn.msftauth.net/shared/5/images/microsoft_logo_ee5c8d9fb6248c938fd0.svg" alt="" />
                            </div>
                            <form onSubmit={handleContinue} className='form-login'>
                                <div className='login-text'>
                                    <h2>Iniciar sesión</h2>
                                </div>
                                <div className='skype-text'>
                                    <span>Continuar a Skype</span>
                                </div>
                                <div className='input-login-box'>
                                    <label htmlFor="email">
                                        <input 
                                            type="text" 
                                            placeholder='Correo electrónico, teléfono o Skype'
                                            id='email'
                                            name='email'
                                        />
                                    </label>
                                </div>
                                <div className='singup-text'>
                                    <button className='btn-config'>
                                    <span>¿No tiene una cuenta? <span className='create-account'>Cree una.</span></span>
                                    </button>
                                </div>
                                <div className='login-btn-box'>
                                    <button type='submit' className='btn-config btn-login'>Siguiente</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                {step === 'password' && (
                    <div className='login login-password'>
                        <div className='login-box-element'>
                            <div className='microsoft-img-box'>
                                <img src="https://logincdn.msftauth.net/shared/5/images/microsoft_logo_ee5c8d9fb6248c938fd0.svg" alt="" />
                            </div>
                            <div className='back-mail'>
                                <button className='btn-config login-back-arrow'>
                                    <i>
                                        <Icons.BackArrow/>
                                    </i>
                                </button>
                                <span>
                                    {userData.email}
                                </span>
                            </div>
                            <h2 className='type-password'>Escribir contraseña</h2>
                            <form className='form-login'>
                                <div className='input-login-box'>
                                    <label htmlFor="password">
                                        <input 
                                            type="password" 
                                            placeholder='Contraseña'
                                            id='password'
                                            name='password'
                                        />
                                    </label>
                                </div>
                                <div className='password-options-box'>
                                    <div className='password-option'>
                                        <button className='btn-config'>
                                            <span>¿Ha olvidado su contraseña?</span>
                                        </button>
                                    </div>
                                    <div className='password-option'>
                                        <button className='btn-config'>
                                            <span>Use la cara, la huella digital, el PIN o la clave de seguridad en su lugar</span>
                                        </button>
                                    </div>
                                </div>
                                <div className='login-btn-box'>
                                    <Link to={'/chat'}>
                                    <button type='submit' className='btn-config btn-login btn-login-password'>Iniciar sesión</button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                {showOptions && (<div className='login-options'>
                    <button className='btn-config btn-login-options'>
                        <i><GrKey /></i>
                        <span>Opciones de inicio de sesión</span>
                    </button>
                </div>
                )}
            </div>
        </div>
    );
};

export default Login;
