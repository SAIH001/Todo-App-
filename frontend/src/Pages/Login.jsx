import React, { useState } from 'react'
import Bgg from '../upload/background.webp';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cookies from 'js-cookie';
import {jwtDecode}  from 'jwt-decode';

import { Link } from 'react-router-dom';

const Login = () => {

    const Navigate = useNavigate();
    const [UserEmail , setUserEmail] = useState('');
    const [UserPassword , setUserPassword] = useState('');
   
    const toastMessage = (message,type) => {
      (type==="error")?(
      toast.error(message, {
        position: "top-right"
      })
  
    ):(
      toast.success(message, {
        position: "top-right"
      })
   
    )
    }
  

  const HandleLogin =async(e)=>{
    e.preventDefault();

    const userData = {
      userEmail:UserEmail,
      userPassword:UserPassword
    } 

    try{

      const LoginResponse = await axios.post("http://localhost:5000/api/useraccount/login/",userData);
      
      if(LoginResponse.status === 200){
        const token = LoginResponse.data.token;
      
        
        const decodedToken = jwtDecode(token);
        
        const userDecodeData = {
          authtoken:token,
          role:decodedToken.userAuth.userRole
        }
        
        Cookies.set('userData',token, { expires: 7 });
        Cookies.set('userRole', decodedToken.userAuth.userRole, { expires: 7 });
        toastMessage("Login Successfully !!" ,"Success")
       if(decodedToken.userAuth.userRole==="admin"){

        setTimeout(() => {
          
          Navigate('/admindashboard');
        }, 3000);
       }

      }






    }catch(error){

      console.log(error)
    }
  }  


  return (
    <section className="vh-100 bg-image"
  style={{backgroundImage: `url(${Bgg})`}}>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: "15px"}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Login an account</h2>

              <form onSubmit={HandleLogin}>

              

                <div data-mdb-input-init className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3cg">Email</label>
                  <input type="email" onChange={(e)=>setUserEmail(e.target.value)} id="form3Example3cg" className="form-control form-control-lg" />
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example4cg">Password</label>
                  <input type="password" onChange={(e)=>setUserPassword(e.target.value)} id="form3Example4cg" className="form-control form-control-lg" />
                </div>

       
              

                <div className="d-flex justify-content-center">
                  <button  type="submit" data-mdb-button-init
                    data-mdb-ripple-init className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">dont have an account? <Link to="/"
                    className="fw-bold text-body"><u>Register here</u></Link></p>

              </form>
              <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"

                  />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Login