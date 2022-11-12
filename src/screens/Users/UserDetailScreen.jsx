//import moment from 'moment';
import React, { useEffect, useState } from "react";
import AddressCard from "../../components/misc/Cards/AddressCard";
import UserCard from "../../components/misc/Cards/UserCard";
import {
  createAddress,
  getAddresses,
} from "../../services/ShippingAddressService";
import { useAuthContext } from "../../contexts/AuthContext";
import './UserDetailScreen.css'
import { Link } from "react-router-dom";

const UserDetailScreen = () => {
  const { user } = useAuthContext();
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    getAddresses()
      .then((addresses) => {
      console.log(addresses);
      setAddresses(addresses);
    });
  }, [user]);

  useEffect(() => {
    createAddress();
  }, [user]);

  return (
    <div>
      <div className="jumbotron bg-light text-dark jumbotron-fluid p-4">
        <div className="container">
          <h1 className="mt-4 mb-4">
            Hola <b>{user.name}</b>, bienvenido a tú perfil.
          </h1>

          <hr />
          <h3 className="font-weight-bold"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
          </svg> Información básica </h3>
          <UserCard
            name={user.name}
            lastName={user.lastName}
            phoneNumber={user.phoneNumber}
            email={user.email}
          />
          <hr />
          <div className="segment d-flex justify-content-between">
          <h3 className="font-weight-bold"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-map" viewBox="0 2 20 16">
          <path fillRule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/>
          </svg> Mis direcciones de envío</h3>
          <Link to='/users/addresses'><button className="btn btn-add">+ Agregar dirección </button></Link>
          </div>
          <div className="d-flex flex-row flex-wrap justify-content-between">
          {addresses.map((address) => ( 
            <AddressCard key={address.id}
              addressname={address.addressName}
              street={address.street}
              streetnumber={address.streetNumber}
              floor={address.floor}
              door={address.door}
              city={address.city}
              zipcode={address.zipCode}
            />
          ))}
          </div>
          <hr />
          <h3 className="font-weight-bold"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bag-check-fill" viewBox="0 1 18 16">
          <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
          </svg> Mis pedidos</h3>
        </div>
      </div>
    </div>
  );
};

export default UserDetailScreen;
