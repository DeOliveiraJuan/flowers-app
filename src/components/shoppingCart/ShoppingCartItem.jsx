import React from 'react'


const ShoppingCartItem = ({ product }) => {  
  return (
    <div className='container d-flex flex-row justify-content-between'>
        <div className='product-image'>
        <p>{product.photo}</p>
        </div>
        <div className='product-description'>
        <p>{product.price}</p>
        </div>
        <button className='remove-product'>
        <p>-</p>
        </button>
        <button type='add-product'>
        <p>+</p>
        </button>
        <div className='total'>
        <p>TOTAL</p>
        </div>
    </div>
  )
}

export default ShoppingCartItem;
