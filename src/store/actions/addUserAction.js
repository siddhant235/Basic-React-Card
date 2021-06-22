import * as actionTypes from './actionTypes'

export const addUser=(data)=>{
    return {
       type:actionTypes.ADD_USER,
       userData:data
    }
}
export const deleteData=(id)=>{
    return{
    type:actionTypes.DELETE_DATA,
    id:id
    }
}
export const clearData=()=>{
    return{
        type:actionTypes.CLEAR_ALL
    }
}

export const editData=(id,data)=>{
    return{
        type:actionTypes.EDIT_DATA,
        id:id,
        data:data
    }
}