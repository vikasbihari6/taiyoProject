import React from 'react'
// import CancelIcon from '@mui/icons-material/Cancel';

const Createcontact = () => {
  return (
    <>
       <div className='flex flex-col items-center border-2 border-black justify-center w-[85%] h-[91.2vh]'>
         <div className='mb-[50px] bg-slate-300'>
            <button type='submit' className='border-2 border-black text-2xl w-[200px] h-[45px]'>Create contact</button>
         </div>
         <div className='flex items-center justify-center border-2 border-black text-2xl w-[400px] h-[150px] text-center bg-slate-300'>
            
            <div className=''>
              {/* <CancelIcon fontSize='large' color='black'/> */}
            </div>
            <div className=''>
             <p> No Contact found create contact fron create contact button</p>
            </div>
         </div>
     </div>
    </>
  )
}

export default Createcontact
