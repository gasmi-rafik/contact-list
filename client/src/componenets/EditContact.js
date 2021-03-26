import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { putContact } from '../redux/action/action'
const EditContact = ({name , email , phone , setName , setEmail , setPhone , _id}) => {
    const dispatch = useDispatch()
    const editContactt =()=>{
     dispatch(putContact(_id ,{name , email, phone}))
    }
    return (
        <div>
        <input type='text'  placeholder='enter you name ' value={name}  onChange={(e)=>setName(e.target.value)} />
         <input type='text'  placeholder='enter you email ' value={email} onChange={(e)=>setEmail(e.target.value)} />
         <input type='text'  placeholder='enter you phone' value={phone}  onChange={(e)=>setPhone(e.target.value)}/>
        <Link to="contact-list"> <button onClick={editContactt}> edit Contact</button> </Link>
        </div>
    )
}

export default EditContact
