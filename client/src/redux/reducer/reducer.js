import { GET_CONTACTS } from "../action/actionTypes"

const initState ={
    contacts :[]
}

export const  reducer =(state=initState , action)=>{

    switch (action.type) {

        case GET_CONTACTS :
        return {...state, contacts : action.payload}

        default : return state
    }
}