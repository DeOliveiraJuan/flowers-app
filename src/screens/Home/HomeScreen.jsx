import { useEffect, useState } from 'react'
import './HomeScreen.css'
import { getFlowers, getPlants } from '../../services/ProductService'
import ProductCard from '../../components/misc/Cards/ProductCard'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  const [flowers, setFlowers] = useState([])
  const [plants, setPlants] = useState([])
  
  useEffect(() => {
    getFlowers()
    getPlants()
        .then(response => {
            setFlowers(response);
            setPlants(response)
        })
}, [])

  return (
    <div>
      <div className="home">
        <div className="hero-image">
          <div className="hero-text">
            <h1 className="hero-title">Flores<br />a domicilio</h1>
            <h4>Del floricultor a tu casa</h4>
            <p>👨🏻‍🌾 ➜ 💐🪴 ➜ 🏡</p>
            <Link to='/products/flowers'><button type="button" className="btn btn-submit font-weight-bold btn-lg">Compra aquí</button></Link>
          </div>
        </div>
      </div>
      <h1 className='top-sales d-flex justify-content-center my-4 mt-5 font-weight-bold'>Encuentra el regalo perfecto</h1>
      <div className='row col-12 d-flex justify-content-center py-4'>
      <div className='row'>
              {flowers.map((flower) => <ProductCard key={flower.id} product={flower}/>)}
          </div>
      </div>
      <div className='btn-seemore d-flex justify-content-center'>
      <Link to='/products/flowers' ><button className='btn btn-submit font-weight-bold btn-lg'>Ver más ramos</button></Link>
      </div>
      <div className='container-midpage mt-5'>
        <div className='midpage-text font-weight-bold'>
        <h2>Flores frescas y de temporada, directas del floricultor</h2>
        <p>Reducimos los intermediarios en el traslado del campo a la ciudad para<br /> poder garantizar dos cosas: flores frescas y precios justos para los floricultores.</p>
        </div>
        <div className='midpage-images '>
          <div className='image-1'>
          <img className="midpage-images" src={require('../../images/floricultor.png')} alt="floricultor"/>
          </div>
          <div className='image-2'>
          <img className='midpage-images' src={require('../../images/petuniaTruck.png')} alt="truck"/>
          </div>
          <div className='image-3'>
          <img className='midpage-images' src={require('../../images/casa.png')} alt="home"/>
          </div>
        </div>
        <div className='midpage-floricultor'>
          <img className="midpage-image-floricultor" src={require('../../images/DSCN1503-scaled (1).jpeg')} alt="floricultor-grande"/>
        </div>
      </div>
      <div className='endpage'>
          <div className='endpage-text'>
          <h2 className='top-sales d-flex justify-content-center my-4 mt-5 font-weight-bold'>Decora tu hogar con plantas</h2>
      <div className='row col-12 d-flex justify-content-center py-4'>
      <div className='row'>
              {plants.map((plant) => <ProductCard key={plant.id} product={plant}/>)}
          </div>
      </div>
      <div className='btn-seemore d-flex justify-content-center'>
      <Link to='/products/plants' ><button className='btn btn-submit font-weight-bold btn-lg'>Ver más plantas</button></Link>
      </div>
          </div>
        </div>
    </div>
      )
    }

    export default HomeScreen;