import React from 'react'
import './Header.css'
import {NavLink} from "react-router-dom"

function Header() {

  return (
    <div>
      <div className="header ind">
        <div className="rt">
          <h1 className='fw-bolder ms-5'data-aos="fade-right" data-aos-duration="1200" >Black Squad</h1>
        </div>
        <div className="lt">
          <div className="lt-nav" >


            <ul className='menu5' data-aos="fade-left" data-aos-duration="1200">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">Abouts</NavLink>
              </li>
              <li>
                <NavLink to="/contacts">Contacts</NavLink>
              </li>
              <li>
                <NavLink to="/complaint">Complaint</NavLink>
              </li>
              <li>
                <NavLink to="/signup">SignUp/LogIn</NavLink>
              </li>

            </ul>
          </div>
        </div>
      </div>
      <div className="mob-nav ind">
        <div className="row al">
          <div className="brand">
            <i class=" fas fa-bars i-s" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"></i>
            <div class="offcanvas offcanvas-top bg-black" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
              <div class="offcanvas-header">
                <h5 id="offcanvasTopLabel">Black Squad</h5>
                <button type="button" class="btn-close text-reset bt-color" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <div className="menu">
                  <div className="row align ms-3 mt-3" data-bs-dismiss="offcanvas">
                    <div className="col-md-4 color" data-aos="fade-left" data-aos-duration="1200">
                      <ul>
                        <li  >
                          <NavLink to="/">Home  </NavLink>
                        </li>
                        <li className='' >
                          <NavLink to="/about">Abouts  </NavLink>
                        </li>
                        <li className='color' >
                          <NavLink to="/contacts">Contacts  </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4 me-2">
                      <ul>
                        <li className='color' >
                          <NavLink to="/complaint">Complaint  </NavLink>
                        </li>
                        <li className='color' >
                          <NavLink to="/signup">SignUp/LogIn  </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className='fw-bolder' >Black Squad</h1>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Header