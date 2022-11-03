import React from 'react';
import UserList from '../../components/users/UserList/UserList';
import { useAuthContext } from '../../contexts/AuthContext'

const UsersListScreen = () => {
    const { user } = useAuthContext()

    return (
    <div>
     <h1 className='text-center mt-2'>Lista de usuarios registrados</h1>
      <UserList />
    </div>
    )
}

export default UsersListScreen;
