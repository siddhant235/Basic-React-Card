import React,{useState,useEffect} from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";
import {useSelector,useDispatch} from "react-redux";
import * as AddUserAction from '../../store/actions/addUserAction'
import DeleteIcon from "@material-ui/icons/Delete";
import EditModal from './EditModal'
import EditIcon from '@material-ui/icons/Edit';
const UsersList = () => {
  const [open, setOpen] = React.useState(false);
  const userList = useSelector((state) => state.user);
  const [userData,setUserData]=useState()
  const handleOpen = () => {
    setOpen(true);
  };
  useEffect(()=>{},[userData])
const EditHandler=(data)=>{
  handleOpen();

    setUserData(data)
}
  const handleClose = () => {
    setOpen(false);
  };
  const dispatch=useDispatch()
  const deleteHandler=(id)=>{
   dispatch(AddUserAction.deleteData(id));
  }
  
  return (
    <>
    <EditModal open={open} handleClose={handleClose} handleOpen={handleOpen} user={userData}/>
    <ul>
      {userList.userList.map((user) => (
        <>
   
   <Card className={classes.root} key={user.id}>
          <li >
            {user.name} {user.age} years old
          </li>
          <span>
              
            <DeleteIcon style={{ color: "salmon" }} onClick={()=>deleteHandler(user.id)} /> &nbsp;&nbsp;&nbsp;
         <EditIcon style={{ color: "#999" }} onClick={()=>EditHandler(user)}  />
          </span>
        </Card>
     </>
      ))}
    </ul>
    </>
  );
};

export default UsersList;
