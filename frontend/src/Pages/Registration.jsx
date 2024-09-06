import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Bgg from '../upload/background.webp';

import { Link } from 'react-router-dom';

import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {

  const navigate = useNavigate();
  const [UserName, setUserName] = useState('');
  const [UserEmail, setUserEmail] = useState('');
  const [UserPassword, setUserPassword] = useState('');
  const [UserCPassword, setUserCPassword] = useState('');

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


  const HandleSubmit = async (e) => {
    e.preventDefault();


    if (UserPassword !== UserCPassword) {
      toastMessage("Password  not matched with Confirm Password ","error")
    }

    const newUser = {
      userName: UserName,
      userEmail: UserEmail,
      userPassword: UserPassword
    }
    try{
    const CreateAccount_Response = await axios.post("http://localhost:5000/api/useraccount/",newUser);
   

    if(CreateAccount_Response.status===200){
      toastMessage("Account Register Successfully","Success");

      setTimeout(() => {
        navigate('/login')
      }, 3000);
    }
  }catch(error){
    toastMessage(error.response.data.error,"error")

  }


  }


  return (
    <section className="vh-100 bg-image"
      style={{ backgroundImage: `url(${Bgg})` }}>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                  <form onSubmit={HandleSubmit}>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example1cg">Name</label>
                      <input type="text" onChange={(e) => setUserName(e.target.value)} id="form3Example1cg" className="form-control form-control-lg" />
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example3cg">Email</label>
                      <input type="email" onChange={(e) => setUserEmail(e.target.value)} id="form3Example3cg" className="form-control form-control-lg" />
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4cg">Password</label>
                      <input type="password" onChange={(e) => setUserPassword(e.target.value)} id="form3Example4cg" className="form-control form-control-lg" />
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                      <input type="password" id="form3Example4cdg" onChange={(e) => setUserCPassword(e.target.value)} className="form-control form-control-lg" />
                    </div>



                    <div className="d-flex justify-content-center">
                      <button type="submit" data-mdb-button-init
                        data-mdb-ripple-init className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                    </div>

                    <p className="text-center text-muted mt-3 mb-0">Have already an account? <Link to="/login"
                      className="fw-bold text-body"><u>Login here</u></Link></p>

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

export default Registration