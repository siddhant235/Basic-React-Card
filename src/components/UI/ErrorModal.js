import React from "react";
import Card from "./Card";
import Button from "./Button";
import ReactDOM from 'react-dom'
import classes from "./ErrorModal.module.css"
const Backdrop=(props)=>{
  return  <div className={classes.backdrop} onClick={props.close}/>

}
const ModalOverlay=(props)=>{
  return(
    <Card className={classes.modal}>
    <header className={classes.header}><h2>{props.title}</h2></header>
    <div className={classes.content}>{props.message}</div>
    <footer className={classes.actions}><Button close={props.close}>Okay</Button></footer>
  </Card>
  )
}
const ErrorModal = (props) => {
  return (
     <>
{ReactDOM.createPortal(<Backdrop close={props.close}/>,document.getElementById('backdrop-root'))}
{ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message}/>,document.getElementById('overlay-root'))}
     </>
   
  );
};

export default ErrorModal;
