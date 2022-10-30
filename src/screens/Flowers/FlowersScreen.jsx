import Card from '../../components/misc/Card/Card';
import Filterbar from '../../components/misc/Filterbar/Filterbar'
import './FlowersScreen.css'

const FlowersScreen = () => {
    return (
        <div className='container'>
         <h1 className='text-start ml-4 pt-4'>FLORES</h1>
            <div className='row d-flex justify-content-around'>
                <div className='col-3'>
                <Filterbar />
                </div>
                <div className='card-container col-8 d-flex flex-wrap justify-content-between align-content-start py-5'>
                <div className='row'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlowersScreen;