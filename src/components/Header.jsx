import React from 'react'
import './Header.css'

function Header() {

  return (
    <div>
      <div className="header">
        <div className="rt">
          <h1 className='fw-bolder ms-5' >Black Squad</h1>
        </div>
        <div className="lt">
          <div className="lt-nav">


            <ul className='menu5'>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Abouts</a>
              </li>
              <li>
                <a href="">Contacts</a>
              </li>
              <li>
                <a href="">Complaint</a>
              </li>
              <li>
                <a href="">LogIn</a>
              </li>
              <li>
                <a href="">LogOut</a>
              </li>
            </ul>


          </div>

        </div>
      </div>

      <div className="mob-nav">
        <div className="row al">
          <div className="mob-navmenu">

          </div>
          <div className="brand">
            <i class=" fas fa-bars i-s" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"></i>
            <div class="offcanvas offcanvas-top bg-black " tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
              <div class="offcanvas-header">
                <h5 id="offcanvasTopLabel" >Black Squad</h5>
                <button type="button" class="btn-close text-reset bt-color" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <div className="menu  ">
                  <div className="row align ms-3 mt-3">
                    <div className="col-md-4 color">

                      <ul>
                        <li  >
                          <a   href="http://">Home  </a>
                        </li>
                        <li className='' >
                          <a href="http://">Abouts  </a>
                        </li>
                        <li className='color' >
                          <a href="http://">Contacts  </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4 me-2">

                      <ul>
                        <li className='color' >
                          <a href="http://">Complaint  </a>
                        </li>
                        <li className='color' >
                          <a href="http://">LogIn  </a>
                        </li>
                        <li className='color' >
                          <a href="http://">LogOut  </a>
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