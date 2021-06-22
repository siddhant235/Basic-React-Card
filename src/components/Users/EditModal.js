import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Card from '../UI/Card'
import Button from '../UI/Button'
import * as AddUserAction from '../../store/actions/addUserAction'
import {useDispatch} from 'react-redux'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
    const dispatch=useDispatch()
  const classes = useStyles();
 const [name,setname]=useState()
 const [age,setAge]=useState()

useEffect(()=>{
setname(props.user?.name)
setAge(props.user?.age)
},[props.user?.id,props.user?.name,props.user?.age])

const submitHandler=(event)=>{
event.preventDefault();
props.handleClose()
dispatch(AddUserAction.editData(props.user.id,{"name":name,"age":age}))
}
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
          <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>&nbsp;
          <input
            id="username"
            type="text"
            value={name}
            onChange={(e)=>setname(e.target.value)}
          />&nbsp;&nbsp;&nbsp;

          <label htmlFor="age">Age</label>&nbsp;
          <input
            id="age"
            type="number"
         value={age}
         onChange={(e)=>setAge(e.target.value)}
          />   &nbsp;&nbsp;&nbsp;&nbsp;
          <Button type="submit">Update</Button>
          {/* <span style={{display :'flex',float:'right' ,padding:"10px",color:"salmon"}} onClick={clearAllHandle}><strong>clear All</strong> <ClearAllIcon/></span> */}
        </form>
     
      </Card>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
