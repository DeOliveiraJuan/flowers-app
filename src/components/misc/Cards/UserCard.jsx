import './UserCard.css'
import React from 'react'

function UserCard(user) {
    return (
      <div className='card-container col-8 d-flex flex-wrap justify-content-between align-content-start py-5'>
        <div className='row'>
         <div className="card mx-2 my-2">
          <div className="card-body p-0" style={{width: 400}} >
              <div className="card-title p-3 m-0">
               <h5><b>Datos personales</b></h5>
               <hr/>
               </div>
               <ul>
                    <li name={user.name}><b>Nombre:</b> {user.name}</li>
                    <li lastName={user.lastName}><b>Apellido:</b> {user.lastName}</li>
                    <li phoneNumber={user.phoneNumber}> <b>Teléfono:</b> {user.phoneNumber}</li>
                    <li email={user.email}><b>Email:</b> {user.email}</li>
               </ul>
              </div>
              <button type="submit" className="btn btn-cart btn-block align-self-center mt-0 mb-2 p-2">Ver</button>
            </div>
            
              </div>
        </div>
    )
};

export default UserCard;