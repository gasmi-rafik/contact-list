import { GET_CONTACTS } from "./actionTypes"
import axios from 'axios'
export const getContacts=()=>dispatch=>{
    axios.get('/api/example/getuser')
    .then( res=>dispatch({type:GET_CONTACTS , payload:res.data}))
    .then(res=>console.log("res" ,res))
    .catch(err=>console.log(err))
}

export const addContact =(newContact)=> dispatch=>{
    axios.post('/api/example/adduser' ,newContact)
    .then( res=>dispatch(getContacts()))
    .catch(err=>console.log(err))

}

export const deleteContact =(idcontact)=> dispatch=>{
    axios.delete(`/api/example/deleteuser/${idcontact}`)
    .then( res=>dispatch(getContacts()))
    .catch(err=>console.log(err))
}

export const putContact=(idContact , updatedContact)=>dispatch=>{
    axios.put(`/api/example/updateuser/${idContact}`,updatedContact)
    .then( res=>dispatch(getContacts()))
    .catch(err=>console.log(err))
}