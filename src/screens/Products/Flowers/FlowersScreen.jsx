import { useEffect, useState } from 'react'
import Filterbar from '../../../components/misc/Filterbar/Filterbar'
import './FlowersScreen.css'
import { getFlowers } from '../../../services/ProductService';
import ProductCard from '../../../components/misc/Cards/ProductCard';

const FlowersScreen = () => {
    const [flowers, setFlowers] = useState([])

    useEffect(() => {
        getFlowers()
            .then(response => {
                setFlowers(response);
            })
    }, [])

    return (
        <div className='container'>
         <h1 className='text-start ml-4 pt-4'>RAMOS</h1>
            <div className='row d-flex justify-content-around'>
                <div className='col-3'>
                <Filterbar />
                </div>
                <div className='card-container col-8 d-flex flex-wrap justify-content-between align-content-start py-5'>
                    <div className='row'>
                        {flowers.map((flower) => <ProductCard key={flower.id} product={flower}/>)}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FlowersScreen;