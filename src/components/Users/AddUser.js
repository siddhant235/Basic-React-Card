import React, { useState,useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import {useDispatch} from 'react-redux'
import uuid from 'react-uuid'
import ClearAllIcon from '@material-ui/icons/ClearAll';
import * as AddUserAction from '../../store/actions/addUserAction' 
const AddUser = (props) => {
  const dispatch=useDispatch();
  const nameInputRef=useRef();
  const myAgeRef=useRef();

  const [error,setError]=useState("")
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName=nameInputRef.current.value
    const enteredUserAge=myAgeRef.current.value
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
          title:'Invalid Input',
          message:'Please enter a valid name and age (non-empty values).'
      })
    }
    if (+enteredUserAge < 1) {
      setError({
        title:'Invalid Input',
        message:'Please enter a valid age greater than 0.'
    })
    }
    dispatch(AddUserAction.addUser({id:uuid(),name:enteredName,age:enteredUserAge}))
  nameInputRef.current.value=''
  myAgeRef.current.value=''
  };
      
  const errorHandler=()=>{
    setError(null)
  }
  const clearAllHandle=()=>{
    dispatch(AddUserAction.clearData())
  }
  return (
    <>
     {error && <ErrorModal title={error.title} message={error.message} close={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />

          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            ref={myAgeRef}
          />
          <Button type="submit">Add User</Button>
          <span style={{display :'flex',float:'right' ,padding:"10px",color:"salmon"}} onClick={clearAllHandle}><strong>clear All</strong> <ClearAllIcon/></span>
        </form>
     
      </Card>
    </>
  );
};

export default AddUser;
