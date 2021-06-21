import React from 'react'
import Card from '../UI/Card'
import classes from './UsersList.module.css'
import {useSelector} from 'react-redux'

const UsersList = (props) => {
    const userList=useSelector((state)=>state.user)
    return (
      
        <ul >
            {
                userList.userList.map(user=>  <Card className={classes.root}><li key={user.id}>{user.name} {user.age} years old</li>  </Card>)
            }
        </ul>
      
    )
}

export default UsersList
