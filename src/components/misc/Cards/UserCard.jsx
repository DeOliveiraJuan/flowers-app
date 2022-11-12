import './UserCard.css'


function UserCard(user) {
    return (
    
         <div className="card card-user mx-2 my-4 card-border">
          <div className="card-body">
              <div className="card-title">
               <h4><b>Datos personales</b></h4>
               <hr/>
               </div>
               <ul>
                    <li name={user.name}><b>Nombre:</b> {user.name}</li>
                    <li lastname={user.lastName}><b>Apellido:</b> {user.lastName}</li>
                    <li phonenumber={user.phoneNumber}> <b>Teléfono:</b> {user.phoneNumber}</li>
                    <li email={user.email}><b>Email:</b> {user.email}</li>
               </ul>
              </div>
              <button type="submit" className="btn btn-edit align-self-end m-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
              </svg></button>
            </div>
    )
};

export default UserCard;