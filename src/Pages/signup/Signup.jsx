import React from 'react'
import './Signup.css'
import { NavLink } from "react-router-dom"

function Signup() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="bg-image">
            <div className="signup" data-aos="flip-left" data-aos-duration="1200">
              <div className="container">

                <form>
                  <div className="row g-3 ps">
                    <h1>Sign Up <hr /></h1>

                    <div className="col-12">
                      <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div className="col-12">
                      <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                    </div>
                    <div className="col-12">
                      <input type="text" className="form-control" placeholder="User name" aria-label="User name" />
                    </div>
                    <div className="col-12">
                      <input type="Password" className="form-control" placeholder="Password" aria-label="Password" />
                    </div>
                    <div className="col-12">
                      <input type="Password" className="form-control" placeholder="Confirm Password" aria-label="Confirm Password" />
                    </div>
                    <div className="col-12">
                      <input type="email" className="form-control" placeholder="Email" aria-label="Email" />
                    </div>
                    <div className="col-12">
                      <button type="button" className="btn btn-dark pe-5 ps-5" >SignUp</button>
                    </div>
                    <p style={{ color: '#fff' }}>Already have an account ? <NavLink to="/login" style={{ color: '#0373fc' }}>Log in</NavLink></p>

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

export default Signup