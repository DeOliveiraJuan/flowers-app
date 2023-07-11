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
           <div className='row py-5'>
               <div className='col-2'>
               <Filterbar />
               </div>
               <div className='col-10'>
                   <div className='row'>
                       <div className='d-flex justify-content-center align-items-center flex-wrap'>
                       {plants.map((plant) => <ProductCard key={plant.id} product={plant}/>)}
                       </div>
                   </div>
               </div>
           </div>
       </div>
    )
}

export default PlantsScreen;