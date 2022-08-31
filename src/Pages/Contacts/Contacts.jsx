import React from 'react'
import "./Contacts.css"

function Contacts() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="bg-image">
                        <div className="signup"  data-aos="flip-left" data-aos-duration="1200">
                            <div className="container">

                                <form>
                                    <div className="row g-3 ps ">
                                        <h1 data-aos="fade-up">Contact Us <hr /></h1>

                                        <div className="col-12">
                                            <input required data-aos="fade-up" type="text" className="form-control" placeholder="Your name" aria-label="Your name" />
                                        </div>
                                        <div className="col-12">
                                            <input required data-aos="fade-up" type="text" className="form-control" placeholder="Your Place" aria-label="Your Place" />
                                        </div>
                                        <div className="col-12">
                                            <input required data-aos="fade-up" type="email" className="form-control" placeholder="Email" aria-label="Email" />
                                        </div>
                                        <div className="col-12">
                                            <input required data-aos="fade-up" pattern="[0-9]{10}" title="Please enter valid number." type="tel" className="form-control" placeholder="Mobile no" aria-label="Mobile no" />
                                        </div>
                                        <div className="col-12">
                                            <textarea
                                                data-aos="fade-up"
                                                name="user_message"
                                                rows="4"
                                                className="form-control"
                                                placeholder="Your Message" required
                                            ></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button data-aos="fade-up" type="submit" className="btn btn-dark pe-5 ps-5 mt-3" >Send</button>
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
