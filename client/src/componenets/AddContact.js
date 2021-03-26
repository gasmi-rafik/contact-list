import React from 'react'
import { Link } from 'react-router-dom'

const AddContact = ({setName , setEmail , setPhone , AddContactt }) => {
    return (
        <div>
         <input type='text'  placeholder='enter you name '   onChange={(e)=>setName(e.target.value)} />
         <input type='text'  placeholder='enter you email '  onChange={(e)=>setEmail(e.target.value)} />
         <input type='text'  placeholder='enter you phone'   onChange={(e)=>setPhone(e.target.value)}/>
        <Link to="contact-list"> <button onClick={AddContactt}> add Contact</button> </Link>
        </div>
    )
}

export default AddContact
