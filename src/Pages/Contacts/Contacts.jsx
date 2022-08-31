import React from 'react'
import "./Contacts.css"

function Contacts() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="bg-image">
                        <div className="signup" style={{height:"500px"}} data-aos="flip-left" data-aos-duration="1200">
                            <div className="container">

                                <form>
                                    <div className="row g-3 ps ">
                                        <h1>Contact Us <hr /></h1>

                                        <div className="col-12">
                                            <input type="text" className="form-control" placeholder="Your name" aria-label="Your name" />
                                        </div>
                                        <div className="col-12">
                                            <input type="text" className="form-control" placeholder="Your Place" aria-label="Your Place" />
                                        </div>
                                        <div className="col-12">
                                            <input type="email" className="form-control" placeholder="Email" aria-label="Email" />
                                        </div>
                                        <div className="col-12">
                                            <input type="tel" className="form-control" placeholder="Mobile no" aria-label="Mobile no" />
                                        </div>
                                        <div className="col-12">
                                            <input type="text" className="form-control" placeholder="Message" aria-label="Message" />
                                        </div>
                                        <div className="col-12">
                                            <button type="button" className="btn btn-dark pe-5 ps-5" >Send</button>
                                        </div>

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

export default Contacts
