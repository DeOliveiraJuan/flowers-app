import { useEffect, useState } from 'react';
import  ProductCard from '../../../components/misc/Cards/ProductCard';
import Filterbar from '../../../components/misc/Filterbar/Filterbar'
import { getPlants } from '../../../services/ProductService';
import './PlantsScreen.css'

const PlantsScreen = () => {
    const [plants, setPlants] = useState([])

    useEffect(() => {
        getPlants()
            .then(response => {
                setPlants(response);
            })
    }, [])

    return (
        <div className='container'>
         <h1 className='text-start ml-4 pt-4'>PLANTAS</h1>
            <div className='row d-flex justify-content-around'>
                <div className='col-3'>
                <Filterbar />
                </div>

                <div className='card-container col-8 d-flex flex-wrap justify-content-between align-content-start py-5'>
                    <div className='row'>
                        {plants.map((plant) => <ProductCard key={plant.id} product={plant}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlantsScreen;