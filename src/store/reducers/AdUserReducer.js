import * as actionTypes from '../actions/actionTypes'
import {UpdateObject} from '../utility'
const initialState={
    userList:[]
}
const addUser=(state,action)=>{
    const data=action.userData
    const updatedUserList=[data,...state.userList]
    return UpdateObject(state,{
      userList:updatedUserList
    })
}
const clearAll=(state,action)=>{
    return UpdateObject(state,{
        userList:[]
    })
}
const deleteData=(state,action)=>{
    const updatedList=state.userList.filter(item=>item.id!==action.id)
    return UpdateObject(state,{
        userList:updatedList
    })
}
const editData=(state,action)=>{
    const elIndex=state.userList.findIndex(element=>element.id===action.id)
    const newList=[...state.userList]
   newList[elIndex]={...newList[elIndex],...action.data}
   return UpdateObject(state,{
       userList:newList
   })

}
export const AddUserReducer=(state=initialState,action)=>{
switch(action.type){
    case actionTypes.ADD_USER:return addUser(state,action);
    case actionTypes.CLEAR_ALL:return clearAll(state,action);
    case actionTypes.DELETE_DATA:return deleteData(state,action);
    case actionTypes.EDIT_DATA :return editData(state,action)
    default:return state;
}
}
export default AddUserReducer