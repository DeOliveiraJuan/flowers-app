import { useEffect, useState } from 'react'
import './HomeScreen.css'
import { getFlowers } from '../../services/ProductService'
import ProductCard from '../../components/misc/Cards/ProductCard'

const HomeScreen = () => {
  const [flowers, setFlowers] = useState([])

  useEffect(() => {
    getFlowers()
        .then(response => {
            setFlowers(response);
        })
}, [])

  return (
    <div>
      <div className="HomeScreen">
        <div className="hero-image">
          <div className="hero-text">
            <h1 className="hero-title">Flores<br />a domicilio</h1>
            <h4>Del floricultor a tu casa</h4>
            <p>👨🏻‍🌾 ➜ 💐🪴 ➜ 🏡</p>
            <button type="button" className="btn btn-submit font-weight-bold btn-lg">Compra aquí</button>
          </div>
        </div>
      </div>

      <h1 className="subtitle d-flex justify-content-center">Top ventas</h1>
      <div className='row col-12 d-flex justify-content-center py-3'>
      <div className='row'>
              {flowers.map((flower) => <ProductCard key={flower.id} product={flower}/>)}
          </div>
      </div>
    </div>
      )
    }

    export default HomeScreen;