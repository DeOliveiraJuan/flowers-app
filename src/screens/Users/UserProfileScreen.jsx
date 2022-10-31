import moment from 'moment';
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDetail } from '../../services/UserService'

const UserProfile = () => {
    const [user, setUser] = useState({})
    const [date, setDate] = useState(new Date())
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    useEffect(() => {
        getDetail(id)
        .then(user => {
            setUser(user)
        })
    }, [id, navigate])

    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <div className="container">
        <h1>Hello, {user.name}</h1>
        <p>{moment(date).format("HH:mm:ss")}</p>
        </div>
    )
}

export default UserProfile;