import {useEffect , useState} from 'react'
import {BrowserRouter as Router , Link , Route} from 'react-router-dom'
import ContactCard from './componenets/ContactCard'
import {useDispatch , useSelector} from 'react-redux'
import { addContact, getContacts } from './redux/action/action'
import AddContact from './componenets/AddContact'
import EditContact from './componenets/EditContact'
function App() {
 const [name , setName]= useState("") ;
 const [email , setEmail]= useState("") ;
 const [phone , setPhone]= useState("") ;
 const [id , setId]=useState(0)
  const dispatch = useDispatch()
  const  contacts = useSelector(state => state.contacts)
  useEffect(() => {
    dispatch(getContacts())
  },[])
  const AddContactt =()=>{
    dispatch(addContact({name , email , phone}))
  }

  const getPerson =(contact)=> {
    setEmail(contact.email)
    setName(contact.name)
    setPhone(contact.phone)
    setId(contact._id)
  }
  return (
    <Router>
    <div className="App">
      <Link to ="/contact-list">
    <button> Contact list </button>
    </Link>
    <Link to ="/add-contact">
    <button> add contact</button>
    </Link>

    <Route  path="/contact-list" render={()=> 
    <div style={{display:"flex" }}>
    {
      contacts.map(contact => <ContactCard contact={contact}  getPerson={getPerson}/>)
    }
    
    </div>
  } />
    <Route path="/add-contact" render={()=> <AddContact
    name={name}
    email={email}
    phone={phone}
    setName={setName}
    setEmail={setEmail}
    setPhone={setPhone}
    AddContactt ={AddContactt}

    />   } />

<Route path="/edit-contact" render={()=> <EditContact
    name={name}
    email={email}
    phone={phone}
    setName={setName}
    setEmail={setEmail}
    setPhone={setPhone}
    _id={id}
    />   } />
    </div>
    </Router>
  );
}

export default App;
