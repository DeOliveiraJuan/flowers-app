import { Link } from 'react-router-dom';
import { useContext } from 'react';
import './ProductCard.css'
import ShoppingCartContext from '../../../contexts/ShoppingCartContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(ShoppingCartContext)

    return (
      <div className="card mx-2 my-2 shadow-sm border-0"  style={{width: 250}}>
        <div className="card-body p-0 ">
          <Link to={`/products/${product.id}`}>
          <img className="card-img-top" src={product.images?.[0]} alt="Card cap" />
          </Link>
          <div className="card-bottom border-bottom m-2 p-0 pb-2 d-flex justify-content-between align-items-center">
            <div className="card-title p-0 m-0">
              <p className='font-weight-bold p-0 m-0'>{product.name}</p>
            </div>
            <div className="card-price p-0 m-0">
              <p className='font-italic p-0 m-0'>{product.price}$</p>
            </div>
          </div>
        </div>
        <button onClick={() => addToCart(product.id)} type="submit" className="btn btn-cart btn-block align-self-center mt-0 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 20">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    )
};

export default ProductCard;
