
import Header from './components/Header.jsx';
import Addcontact from './components/Addcontact.jsx'
import Createcontact from './components/Createcontact.jsx'
import Sidebar from './components/Sidebar.jsx';
import {nanoid} from 'nanoid';
import './index';
import { useState } from 'react';

function App() {
  
  const [contacts,setContacts] = useState([
    {
      id:nanoid(),
      fname:'Kishan',
      lname:'kumar',
      status:'active',
    }
  ]);
   
  const addContact =(fname,lname) =>{
    const newContact ={
      id:nanoid(),
      fname:fname,
      lname:lname
    }
    const newContacts = [...contacts,newContact];
    setContacts(newContacts);
  }

  return (
    <>
      <Header />
      <div className='App flex w-full'>
        <Sidebar /> 
        {/* <Createcontact handleCreateContact={addContact}/> */}
    </div>
    <Addcontact />
    </>
  );
}

export default App;
