import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUsers, deleteUser } from '../../../services/UserService'

const UserList = () => {
    const [users, setUsers] = useState([])

    const handleDelete = (id) => {
        deleteUser(id)
        .then(deletedUser => {
            const newUsers = users.filter(user => user.id !== deletedUser.id)
            setUsers(newUsers)
        })
    }

    useEffect(() => {
        getUsers()
        .then(usersData => {
            setUsers(usersData);
        })
    }, [])

    return (
        <ul className="list-group container mt-4">
        {users.map((user) => (
          <li key={user.id} className="mb-2 list-group-item d-flex justify-content-between align-items-center">
            <Link className="link-unstyled" to={`/users/${user.id}`}>
              {user.name}
            </Link >
            <div className="badge">
              <Link className="link-unstyled me-3" to={`/users/edit/${user.id}`}>
                <span className="badge badge-primary bg-primary badge-pill">Editar</span>
              </Link>
              <a onClick={() => handleDelete(user.id)} className="btn badge badge-danger text-light bg-danger badge-pill">Eliminar</a>
            </div>
          </li >
        ))
        }
      </ul >
    )
}

export default UserList;