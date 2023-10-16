import React, { useContext } from 'react';
import { TbShoppingCartHeart } from 'react-icons/tb';
import './ProductCard.css';
import propTypes from 'prop-types'
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function ProductCard({ data }) {

    const { title, thumbnail, price} = data;
    const {cartItems, setCartItems} =  useContext(AppContext);

    const handleAddCart = () => setCartItems([...cartItems, data]);
    return ( 
        <section className='product-card'>
           
           <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
           alt="product"
           className="card_imagem"/>

           <div className='card_infos'>
            <h2 className='card_preco'>{formatCurrency(price, 'BRL')} </h2>
            
            <h2 className='card_titulo'>{title}</h2>
           </div>

           <button type='button' className='button_add-cart' onClick={handleAddCart}>
            <TbShoppingCartHeart/>
           </button>

        </section>
     );
}

export default ProductCard;

ProductCard.propTypes = {
    data: propTypes.shape({}),
}.isRequired;