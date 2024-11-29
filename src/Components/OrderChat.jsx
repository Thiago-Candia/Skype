import React from 'react'
import { Icons } from '../Assets/Icons/Icons'

const OrderChat = () => {
    return (
    <div className='order-chat'>
        <button className='btn-config'>
            <span className='text'>Chat recientes</span>
            <i><Icons.Arrowdown/></i>
        </button>
    </div>
    )
}

export default OrderChat