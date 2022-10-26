import './Card.css'

function Card() {
    return (
        <div className="row container-fluid d-flex justify-content-around mt-4">
          <div className="column col-sm-3 mt-3 p-0 border-0">
            <img className="card-img-top" src="https://img.ltwebstatic.com/images3_pi/2022/06/08/16546668675011fa3692865fce7bcd6738e6b1f8d4_thumbnail_900x.webp" alt="Card cap" />
            <div className="card-bottom d-flex justify-content-between">
            <div className="card-title mt-4">
              <h5>Tulipanes</h5>
              </div>
            <div className="card-body d-flex justify-content-end">
              <div className="card-price mr-3">
              <h2>5$</h2>
              </div>
              <a href="*" className="btn btn-light align-self-center "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg></a>
              </div>
            </div>
          </div>
           
          <div className="column col-sm-3 mt-3 p-0 border-0">
            <img className="card-img-top" src="https://img.ltwebstatic.com/images3_pi/2022/06/08/16546668675011fa3692865fce7bcd6738e6b1f8d4_thumbnail_900x.webp" alt="Card cap" />
            <div className="card-bottom d-flex justify-content-between">
            <div className="card-title mt-4">
              <h5>Tulipanes</h5>
              </div>
            <div className="card-body d-flex justify-content-end">
              <div className="card-price mr-3">
              <h2>5$</h2>
              </div>
              <a href="*" className="btn btn-light align-self-center "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg></a>
              </div>
            </div>
          </div>

          <div className="column col-sm-3 mt-3 p-0 border-0">
            <img className="card-img-top" src="https://img.ltwebstatic.com/images3_pi/2022/06/08/16546668675011fa3692865fce7bcd6738e6b1f8d4_thumbnail_900x.webp" alt="Card cap" />
            <div className="card-bottom d-flex justify-content-between">
            <div className="card-title mt-4">
              <h5>Tulipanes</h5>
              </div>
            <div className="card-body d-flex justify-content-end">
              <div className="card-price mr-3">
              <h2>5$</h2>
              </div>
              <a href="*" className="btn btn-light align-self-center "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg></a>
              </div>
            </div>
          </div>
        </div>
    )
};

export default Card;