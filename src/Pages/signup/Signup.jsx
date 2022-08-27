import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="bg-image">
            <div className="login ">
              <div className="container">

                <div class="row g-3 ps">
                  <h1>Sign Up <hr/></h1>
                  <div class="col-12">
                    <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                  </div>
                  <div class="col-12">
                    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                  </div>
                  <div class="col-12">
                    <input type="text" class="form-control" placeholder="User name" aria-label="User name" />
                  </div>
                  <div class="col-12">
                    <input type="Password" class="form-control" placeholder="Password" aria-label="Password" />
                  </div>
                  <div class="col-12">
                    <input type="Password" class="form-control" placeholder="Confirm Password" aria-label="Confirm Password" />
                  </div>
                  <div class="col-12">
                    <input type="email" class="form-control" placeholder="Email" aria-label="Email" />
                  </div>
                  <div class="col-12">
                    <button type="button" class="btn btn-dark" >SignUp</button>
                  </div>
                    <p style={{color:'#fff'}}>Already have an account ? <a href="http://" style={{color:'#0373fc'}}>Log in</a></p>
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup