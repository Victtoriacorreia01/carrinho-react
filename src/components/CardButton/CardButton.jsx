import React, { useContext } from 'react';
import { TbShoppingCartHeart } from 'react-icons/tb'
import './CardButton.css'
import AppContext  from '../../context/AppContext';

function CardButton() {

    const{ cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);
    return ( 
        <button type='button' className='card_button'
        onClick={() => setIsCartVisible(!isCartVisible)}>
            <TbShoppingCartHeart />
            { cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
        </button>
     );
}

export default CardButton;