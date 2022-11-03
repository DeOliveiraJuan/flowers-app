import UserCard from '../../components/misc/Cards/UserCard';
import './HomeScreen.css'

const HomeScreen = () => {
  return (
    <div>
      <div className="HomeScreen">
        <div className="hero-image">
          <div className="hero-text">
            <h1 className="hero-title">Del floricultor<br />a tu casa</h1>
            <p>👨🏻‍🌾 ➜ 💐🪴 ➜ 🏡</p>
            <button type="button" className="btn btn-submit font-weight-bold mt-5">Compra aquí</button>
          </div>
        </div>
      </div>

      <h1 className="subtitle d-flex justify-content-center">Top ventas</h1>
      <div className='row col-12 d-flex justify-content-center py-3'>
          <UserCard />
      </div>
    </div>
      )
    }

    export default HomeScreen;