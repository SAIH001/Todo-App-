import React from 'react'

const Login = () => {

    const [UserEmail , setUserEmail] = useState('');
    const [UserPassword , setUserPassword] = useState('');



  return (
    <section class="vh-100 bg-image"
  style={{backgroundImage: `url(${Bgg})`}}>
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style={{borderRadius: "15px;"}}>
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Login an account</h2>

              <form>

              

                <div data-mdb-input-init class="form-outline mb-4">
                  <label class="form-label" for="form3Example3cg">Email</label>
                  <input type="email" onChange={(e)=>setUserEmail(e.target.value)} id="form3Example3cg" class="form-control form-control-lg" />
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <label class="form-label" for="form3Example4cg">Password</label>
                  <input type="password" onChange={(e)=>setUserPassword(e.target.value)} id="form3Example4cg" class="form-control form-control-lg" />
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                  <input type="password" id="form3Example4cdg" class="form-control form-control-lg" />
                </div>

              

                <div class="d-flex justify-content-center">
                  <button  type="button" data-mdb-button-init
                    data-mdb-ripple-init class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">dont have an account? <a href="#!"
                    class="fw-bold text-body"><u>Register here</u></a></p>

              </form>

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