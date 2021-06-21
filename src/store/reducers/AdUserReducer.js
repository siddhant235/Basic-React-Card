import * as actionTypes from '../actions/actionTypes'
import {UpdateObject} from '../utility'
const initialState={
    userList:[]
}
export const addUser=(state,action)=>{
    const data=action.userData
    const updatedUserList=[data,...state.userList]
    return UpdateObject(state,{
      userList:updatedUserList
    })
}

export const AddUserReducer=(state=initialState,action)=>{
switch(action.type){
    case actionTypes.ADD_USER:return addUser(state,action);
    default:return state;
}
}
export default AddUserReducer