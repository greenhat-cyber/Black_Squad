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
                  <div className="row g-4 ps">
                    <h1>Log In <hr /></h1>
                    

                      <div className="col-12 ps2">
                        <input type="text" className="form-control" placeholder="User name" aria-label="User name" />
                      </div>
                      <div className="col-12 ps2">
                        <input type="Password" className="form-control" placeholder="Password" aria-label="Password" />
                      </div>

                      <div className="col-12 ps2">
                        <button type="button" className="btn btn-dark pe-5 ps-5" >Log in</button>
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