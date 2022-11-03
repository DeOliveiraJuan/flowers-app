import './Filterbar.css'

function Filterbar() {
    return (
        <div className="container">
        <div className="row py-5">
            <div className="col-2 order-2" id="sticky-sidebar">
                <div className="sticky-top">  
                </div>
            </div>
            <div className="col-12" id="main">
                <h5 className="font-weight-bold">Precio</h5>
                <form>
                    <input type="checkbox" id="price-1" name="price-1" className='mr-2' />
                    <label htmlFor="price-1">10$ a 20$</label><br/>
                    <input type="checkbox" id="price-2" name="price-2" className='mr-2'/>
                    <label htmlFor="price-2">21$ a 30$</label><br/>
                    <input type="checkbox" id="price-3" name="price-3" className='mr-2'/>
                    <label htmlFor="price-3">31$ o más</label><br/>
                </form>
                <hr/>
                <h5 className="font-weight-bold">Flor</h5>
                <form>
                    <input type="checkbox" id="rosas" name="rosas" className='mr-2' />
                    <label htmlFor="rosas">Rosas</label><br/>
                    <input type="checkbox" id="claveles" name="claveles" className='mr-2' />
                    <label htmlFor="claveles">Claveles</label><br/>
                    <input type="checkbox" id="margaritas" name="margaritas" className='mr-2' />
                    <label htmlFor="margaritas">Margaritas</label><br/>
                    <input type="checkbox" id="petunias" name="petunias" className='mr-2' />
                    <label htmlFor="petunias">Petunias</label><br/>
                </form>
                <hr/>
                <h5 className="font-weight-bold">Entrega</h5>
                <form>
                    <input type="checkbox" id="delivery-today" name="delivery-today" className='mr-2' />
                    <label htmlFor="delivery-today">Hoy</label><br/>
                    <input type="checkbox" id="delivery-planned" name="delivery-planned" className='mr-2' />
                    <label htmlFor="delivery-planned">Programada</label><br/>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Filterbar;