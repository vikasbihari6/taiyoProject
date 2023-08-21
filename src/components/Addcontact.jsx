import React,{useState} from 'react'

  const Addcontact = () => {
    const [contacts, setContacts] = useState([]);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [status, setStatus] = useState('');

    const handlefNameChange = (event) => {
      console.log(event);
      setFname(event.target.value);
    };
  
    const handlelNameChange = (event) => {
      setLname(event.target.value);
    };
    const handleStatusChange = (event) =>{
      setStatus(event.target.value);
    };
  
    const handleCreateContact = () => {
      const newContact = {
        fname: fname,
        lname: lname,
        status:status,
      };
      setContacts([...contacts, newContact]);
      setFname('');
      setLname('');
    };
   return (
     <>
     <div>
        <div className='mb-[50px] bg-slate-300'>
        <button type='submit' onSubmit={handleCreateContact} className='border-2 border-black text-2xl w-[200px] h-[45px]'>Create contact</button>
        </div>
       <div className='flex flex-col items-center justify-center w-[85%] h-[91.2vh]'>
             <div className='flex flex-col w-[450px] h-[400px] items-center justify-center'>
              <h1 className='text-2xl font-bold p-3'>Create Contact Screen</h1>
                 <div className='flex flex-col flex-wrap items-center border-2 border-black h-[200px]'>
                     <div>
                         <label for="fname" className='m-3 text-2xl font-bold'>First name: </label>
                         <input type="text" id="fname" name="fname" value={fname} onChange={handlefNameChange}  className='border-2 border-black w-[250px] h-[35px] mr-3 mt-5' /><br></br>
                         <label for="lname" className='m-3 text-2xl font-bold'>Last name: </label>
                         <input type="text" id="lname" name="lname" value={lname} onChange={handlelNameChange}  className='border-2 border-black w-[250px] h-[35px] mr-3 mt-5' />
                           <div className='flex gap-10'>
                             <label for="radiobut" className='m-3 text-2xl font-bold'>Status: </label>
                                 <div className=''>
                                     <label for="radiobut" className='m-3 text-xl font-bold'>Active</label>
                                     <input type="radio" id="radiobut" name="radiobut" value={status} onChange={handleStatusChange} className='border-2 border-black w-[20px] h-[20px] mr-3 mt-5' />
                                     <label for="radiobut" className='m-3 text-xl font-bold'>Inactive</label>
                                     <input type="radio" id="radiobut" name="radiobut" value={status} onChange={handleStatusChange} className='border-2 border-black w-[20px] h-[20px] mr-3 mt-5' />
                                 </div>
                           </div>
                    </div>
                 </div>
                 <div className='flex item-center justify-center text-[1.1vw] w-[120px] h-[35px] border-2 border-black font-bold mt-10'>
                     <button type='submit' className='text-center'>Save Contact</button>
                 </div>
             </div>
       </div>
        <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.fname} - {contact.lname}
          </li>
        ))}
       </ul>
       </div>
    </>
  );
};

export default Addcontact

// import React, { useState } from 'react';

// const Createcontact = () => {
//   const [contacts, setContacts] = useState([]);
//   const [fname, setFname] = useState('');
//   const [lname, setLname] = useState('');

//   const handleNameChange = (event) => {
//     setFname(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setLname(event.target.value);
//   };

//   const handleCreateContact = () => {
//     const newContact = {
//       fname: fname,
//       lname: lname,
//     };

//     setContacts([...contacts, newContact]);
//     setFname('');
//     setLname('');
//   };

//   return (
//     <div>
//       <h1>Contact Page</h1>
//       <div>
//         <label>Name:</label>
//         <input type="text" value={fname} onChange={handleNameChange} />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input type="text" value={lname} onChange={handleEmailChange} />
//       </div>
//       <button onClick={handleCreateContact}>Create</button>
//       <h2>Contacts:</h2>
//       <ul>
//         {contacts.map((contact, index) => (
//           <li key={index}>
//             {contact.fname} - {contact.lname}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Createcontact;
