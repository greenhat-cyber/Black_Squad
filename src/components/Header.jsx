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
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Complaint</a>
              </li>
              <li>
                <a href="">Log in</a>
              </li>
              <li>
                <a href="">Log out</a>
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
            <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
              <div class="offcanvas-header">
                <h5 id="offcanvasTopLabel">Offcanvas top</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                ...
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