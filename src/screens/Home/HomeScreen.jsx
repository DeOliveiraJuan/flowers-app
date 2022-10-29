import Card from '../../components/misc/Card/Card';
import './HomeScreen.css'

const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <div className="hero-image">
        <div className="hero-text">
          <h1 className="display-4">Del floricultor a tu casa</h1>
          <p>🚜 → 🏡</p>
          <button type="button" className="btn btn-submit font-weight-bold">Compra aquí</button>
        </div>
      </div>
      <h1 className="subtitle d-flex justify-content-center">Top ventas</h1>
      <div className='container card-container d-flex justify-content-center'>
      <Card />
      <Card />
      <Card />
      </div>
    <footer className="bg-light text-center text-white">
      <div className="text-center p-3" style={{backgroundColor: "blue"}}>
        © 2022 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/"> Ironhack - PetuniaFlowers</a>
      </div>
    </footer>
        </div>
      )
    }

    export default HomeScreen;