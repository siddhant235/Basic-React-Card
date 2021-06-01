import React,{useState} from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from "./AddUser.module.css"
const AddUser = (props) => {
    const [enteredUsername,setEnteredUsername]=useState('');
    const [enteredAge,setEnteredAge]=useState('');
    const addUserHandler=event=>{
        event.preventDefault();
        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
            return;
        }if(+enteredAge<1){
            return
        }
        console.log(enteredAge,enteredUsername)
        setEnteredUsername('')
        setEnteredAge('')
      }
      const usernameChangehandler=(event)=>{
          setEnteredUsername(event.target.value)
}
const ageChangehandler=(event)=>{
    setEnteredAge(event.target.value)
}
    return (
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username"  type="text" onChange={usernameChangehandler} value={enteredUsername}/>

            <label htmlFor="age">Username</label>
            <input id="age" type="number" onChange={ageChangehandler} value={enteredAge}/>
            <Button type="submit">Add User</Button>
            </form>
            </Card>
    )
}

export default AddUser
