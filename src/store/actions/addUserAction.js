import * as actionTypes from './actionTypes'

export const addUser=(data)=>{
    return {
       type:actionTypes.ADD_USER,
       userData:data
    }
}

