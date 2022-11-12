import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../../services/ProductService'
import './ProductDetailScreen.css'
import ShoppingCartContext from '../../contexts/ShoppingCartContext'

const ProductDetailScreen = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()
    const { addToCart } = useContext(ShoppingCartContext)
    console.log(product)

    useEffect(() => {
        getProductDetail(id)
        .then(response => {
            setProduct(response);
        })
    }, [id])

  return (
    <div className='container'>
        <div className='row'>
             <div className='content-container d-flex flex-row justify-content-between'>
                <div className='images-carousel-container w-50 mt-5 mb-5'>
                 <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src={product.images} alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={product.images} alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={product.images} alt="Third slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            </div>
        <div className='description-container d-flex flex-column justify-content-between align-items-center m-5'>
            <h2>{product.name}</h2>
            <div className='description-text'>
                <h5><b>Descripción:</b></h5>
                <p>Aqui va la descripción de todo el producto</p>
            </div>
            <button onClick={() => addToCart(product.id)} type="submit"className="btn btn-cart-detail d-flex btn-block justify-content-between align-items-center mb-4"><p className='m-0 p-0'>Agregar al carrito</p>   
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16"> 
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>
        </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductDetailScreen;
