import React from 'react'
import { useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteContact } from '../redux/action/action'

const ContactCard = ({contact , getPerson}) => {
    const dispatch = useDispatch()
    const deletContactt =()=>{
        dispatch(deleteContact(contact._id))
    }
    return (
        <div style={{border:"solid red" , width:"350px" , flexDirection:"column"}}>
            <p> name : {contact.name}</p>
            <p> email :{contact.email}</p>
            <p> phone {contact.phone}</p>
           <Link to="/edit-contact"> <button onClick={()=>getPerson(contact)}> edit </button> </Link>
            <button onClick={deletContactt}> delete </button>
        </div>
    )
}

export default ContactCard
