import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error,setError]=useState("")
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
          title:'Invalid Input',
          message:'Please enter a valid name and age (non-empty values).'
      })
    }
    if (+enteredAge < 1) {
      setError({
        title:'Invalid Input',
        message:'Please enter a valid age greater than 0.'
    })
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };
  const usernameChangehandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangehandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler=()=>{
    setError(null)
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
            onChange={usernameChangehandler}
            value={enteredUsername}
          />

          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            onChange={ageChangehandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
