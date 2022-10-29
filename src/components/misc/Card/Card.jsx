import './Card.css'


function Card() {
    return (
        <div className="row d-flex justify-content-around mt-2 mr-2 align-items-center">
          <div className="card mt-2 mr-4 p-0 border-0">
            <img className="card-img-top" src="https://img.ltwebstatic.com/images3_pi/2022/06/08/16546668675011fa3692865fce7bcd6738e6b1f8d4_thumbnail_900x.webp" alt="Card cap" />
            <div className="card-bottom d-flex align-items flex-direction: column">
            <div className='card-title-price mt-2 pl-1'>
            <div className="card-title">
              <h5 className='font-weight-bold'>Tulipanes</h5>
              </div>
              <div className="card-price">
              <h5 className='font-italic'>5$</h5>
              </div>
              </div>
            <div className="card-body d-flex justify-content-end">
              <button type="submit" className="btn btn-light align-self-center mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 20">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg></button>
              </div>
            </div>
          </div>
        </div>

    )
};

export default Card;