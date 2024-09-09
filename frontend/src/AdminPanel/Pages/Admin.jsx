import React, { useEffect } from 'react'
import AddTodo from './AddTodo'



import Cookies from 'js-cookie';
import { Outlet, useNavigate } from 'react-router-dom';


const Admin = () => {

  const role = Cookies.get('userRole');
  const navigate = useNavigate();


  useEffect(()=>{
    if (role !== 'admin') {
      navigate('/login');
    }
  }, [role, navigate]);


  return (
   

<>

    <h1>hfhd</h1>
      <Outlet/>
    
    </>

  )
}

export default Admin