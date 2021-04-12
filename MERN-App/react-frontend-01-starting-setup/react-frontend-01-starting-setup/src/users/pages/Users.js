import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
const USERS = [
    {
        id: 'u1', 
        name: 'Laura Smith', 
        image:'https://www.google.com/search?q=laura+smith&sxsrf=ALeKk02k52MywA3dKf9bCOeNUPCJplZukQ:1618229595531&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjkj9OB1_jvAhWJUhUIHaL2AMEQ_AUoAXoECAEQAw&biw=1920&bih=880#imgrc=B5ovr6BnY_vqqM',
        places: '3',
    }
];

    return <UsersList items={USERS}/>
}

export default Users;