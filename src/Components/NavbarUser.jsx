import React from 'react'
import '../Styles/styles.css'
import { Icons } from '../Assets/Icons/Icons'
import { Link, Navigate, useNavigate } from 'react-router-dom'


const NavbarUser = ({selectedContact}) => {

    const navigate = useNavigate()

    const goBack = () => {
        return navigate(-1)
    }

return (
    <div className='navbar-user-box'>
        <div className='navbar-btn-back-mobile'>
            <button onClick={goBack} className='btn-config'>
                <i>
                    <Icons.BackArrow/>
                </i>
            </button>
        </div>
        <div className='navbar-user-item'>
            <div className='user-img-box'>
                <img src={selectedContact 
                    ? selectedContact.img 
                    : ""
                }/>
            </div>
            <div className='navbar-user-name'>
                <div className='navbar-name_icon'>
                    <button className='btn-config'>
                        <span className='name-user'>
                            {selectedContact 
                                ? selectedContact.nombre 
                                : 'Usuario'
                            }
                        </span>
                        <i>
                            <Icons.Gear/>
                        </i>
                    </button>
                </div>
                    <button className='btn-config'>
                        <span className='estado-navbar'>Estado</span>
                    </button>
            </div>
        </div>
        <div className='navbar-btn-action'>
            <button className='btn-config btn-config-mobile'>
                <i>
                    <Icons.MagnifyingGlass/>
                </i>
            </button>
            <button className='btn-config btn-config-mobile'>
                <i>
                    <Icons.Gallery/>
                </i>
            </button>
            <button className='btn-config btn-config-mobile'>
                <i>
                    <Icons.AddUser/>
                </i>
            </button>
            <button className='btn-config btn-action'>
                <i>
                    <Icons.VideoCamera/>
                </i>
            </button>
            <button className='btn-config btn-action'>
                <i>
                    <Icons.Telephone/>
                </i>
            </button>
            <button className='btn-config btn-options-mobile'>
                <i>
                    <Icons.VerticalOptions/>
                </i>
            </button>
        </div>
    </div>
)
}

export default NavbarUser