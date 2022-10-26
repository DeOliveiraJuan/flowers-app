import Card from '../../components/misc/Card/Card';
import './HomeScreen.css'

const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <div className="hero-image">
        <div className="hero-text">
          <h1 className="display-4">Del floricultor a tu casa</h1>
          <p className="lead">🚜</p>
          <hr className="my-4" />
          <button type="button" class="btn btn-outline-light">Compra aqui</button>
        </div>
      </div>
      <h1 className="subtitle d-flex justify-content-center m-4">Top ventas</h1>
      <Card />
      <Card />
    </div>
  );
};

export default HomeScreen;