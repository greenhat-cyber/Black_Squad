import React from 'react'
import './Login.css'
import { NavLink } from "react-router-dom"

function Login() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="bg-image">
            <div className="login" data-aos="flip-left" data-aos-duration="1200">
              <div className="container">

                <form>
                  <div class="row g-4 ps">
                    <h1>Log In <hr /></h1>
                    

                      <div class="col-12 ps2">
                        <input type="text" class="form-control" placeholder="User name" aria-label="User name" />
                      </div>
                      <div class="col-12 ps2">
                        <input type="Password" class="form-control" placeholder="Password" aria-label="Password" />
                      </div>

                      <div class="col-12 ps2">
                        <button type="button" class="btn btn-dark" >Log in</button>
                      </div>
                      <p className='ps2' style={{ color: '#fff' }}>Don't have an account ? <NavLink to="/signup" style={{ color: '#0373fc' }}>Sign Up</NavLink></p>
                    

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login