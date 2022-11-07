//import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AddressCard from '../../components/misc/Cards/AddressCard';
import UserCard from '../../components/misc/Cards/UserCard';
import { getDetail } from '../../services/UserService'
import { getAddresses } from '../../services/ShippingAddressService';

const UserDetailScreen = () => {
 const [user, setUser] = useState({})
 const [addresses, setAddresses] = useState({})
 const [date, setDate] = useState(new Date())
 const { id } = useParams()
 const navigate = useNavigate()
 console.log(date)

 useEffect(() => {
    const intervalId = setInterval(() => {
        setDate(new Date());
    }, 1000);

    return () => {
        clearInterval(intervalId)
    };
 }, []);

 useEffect(() => {
    getDetail(id)
    .then(user => {
        setUser(user)
    })
 }, [id, navigate]) // ¿Que está haciendo este navigate?

 useEffect(() => {
    getAddresses(user)
    .then(addresses => {
      setAddresses(addresses)
      console.log(addresses)
    })
 }, [user])

 useEffect(() => {
    console.log(user)
 }, [user])

  return (
    <div>
      <div className="jumbotron bg-light text-dark jumbotron-fluid p-4">
        <div className="container">
        <h1 className='mt-4 mb-4'>Hola <b>{user.name}</b>, bienvenido a tú perfil.</h1>
          <hr />
          <h3 className='font-weight-bold'>Información básica</h3>
          <UserCard name={user.name} lastName={user.lastName} phoneNumber={user.phoneNumber} email={user.email}/>
          <hr />
          <h3 className='font-weight-bold'>Mis direcciones de envío</h3>
          {addresses.map((address) => 
            <AddressCard street={address.street} streetnumber={address.streetNumber} floor={address.floor} door={address.door} city={address.city} zipcode={address.zipCode} />
          )}
          <hr />
          <h3 className='font-weight-bold'>Mis pedidos</h3>
        </div>
      </div>

    </div>
  )
}

export default UserDetailScreen;