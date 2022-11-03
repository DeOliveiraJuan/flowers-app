import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserCard from '../../components/misc/Cards/UserCard';
import { getDetail } from '../../services/UserService'

const UserDetailScreen = () => {
 const [user, setUser] = useState({})
 const [date, setDate] = useState(new Date())
 const { id } = useParams()
 const navigate = useNavigate()

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
    console.log(user)
 }, [user])

  return (
    <div>
      <div className="jumbotron bg-light text-dark jumbotron-fluid p-4">
        <div className="container">
          <h4>Mi perfil</h4>
          <hr />
          <h1>Hola <b>{user.name}</b>, bienvenido a tú perfil.</h1>
          <UserCard name={user.name} lastName={user.lastName} phoneNumber={user.phoneNumber} email={user.email}/>
          <p>Son las: {moment(date).format("HH:mm:ss")}</p>
        </div>
      </div>

    </div>
  )
}

export default UserDetailScreen;