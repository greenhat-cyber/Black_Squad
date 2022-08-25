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


            <ul>
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

          <div className="brand">

            <h1 className='fw-bolder' >Black Squad</h1>
          </div>

        </div>
      </div>


    </div>

  )
}

export default Header