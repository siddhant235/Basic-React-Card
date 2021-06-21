import React,{useState} from 'react'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'
const App = () => {
  
  return (
    <div>
      <AddUser/>
      <UsersList/>
    </div>
  )
}

export default App
