import Card from '../../components/misc/Card/Card';
import Filterbar from '../../components/misc/Filterbar/Filterbar'
import './PlantsScreen.css'

const PlantsScreen = () => {
    return (
        <div className='container'>
         <h1 className='text-center'>PLANTAS</h1>
            <div className='row d-flex justify-content-around'>
            <div className='col-2'>
                <Filterbar />
                </div>
                <div className='col-8 card-container d-flex '>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
      
        </div>
    )
}

export default PlantsScreen;