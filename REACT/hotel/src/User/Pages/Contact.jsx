import React from 'react'
import Header from '../Common/Header'
import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'

function Contact() {
  return (
    <div>
      <Header />
      <Navbar title="Conatct" name="Contact" />
      <div>
        {/* Booking Start */}
        {/* <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s">
          <div className="container">
            <div className="bg-white shadow" style={{ padding: 35 }}>
              <div className="row g-2">
                <div className="col-md-10">
                  <div className="row g-2">
                    <div className="col-md-3">
                      <div className="date" id="date1" data-target-input="nearest">
                        <input type="text" className="form-control datetimepicker-input" placeholder="Check in" data-target="#date1" data-toggle="datetimepicker" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="date" id="date2" data-target-input="nearest">
                        <input type="text" className="form-control datetimepicker-input" placeholder="Check out" data-target="#date2" data-toggle="datetimepicker" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <select className="form-select">
                        <option selected>Adult</option>
                        <option value={1}>Adult 1</option>
                        <option value={2}>Adult 2</option>
                        <option value={3}>Adult 3</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <select className="form-select">
                        <option selected>Child</option>
                        <option value={1}>Child 1</option>
                        <option value={2}>Child 2</option>
                        <option value={3}>Child 3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-primary w-100">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Booking End */}
        {/* Contact Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title text-center text-primary text-uppercase">Contact Us</h6>
              <h1 className="mb-5"><span className="text-primary text-uppercase">Contact</span> For Any Query</h1>
            </div>
            <div className="row g-4">
              <div className="col-12">
                <div className="row gy-4">
                  <div className="col-md-4">
                    <h6 className="section-title text-start text-primary text-uppercase">Booking</h6>
                    <p><i className="fa fa-envelope-open text-primary me-2" />book@example.com</p>
                  </div>
                  <div className="col-md-4">
                    <h6 className="section-title text-start text-primary text-uppercase">General</h6>
                    <p><i className="fa fa-envelope-open text-primary me-2" />info@example.com</p>
                  </div>
                  <div className="col-md-4">
                    <h6 className="section-title text-start text-primary text-uppercase">Technical</h6>
                    <p><i className="fa fa-envelope-open text-primary me-2" />tech@example.com</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{ minHeight: 350, border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
              </div>
              <div className="col-md-6">
                <div className="wow fadeInUp" data-wow-delay="0.2s">
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="text" className="form-control" id="name" placeholder="Your Name" />
                          <label htmlFor="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="email" className="form-control" id="email" placeholder="Your Email" />
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input type="text" className="form-control" id="subject" placeholder="Subject" />
                          <label htmlFor="subject">Subject</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: 150 }} defaultValue={""} />
                          <label htmlFor="message">Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
      </div>

      <Footer />
    </div>
  )
}

export default Contact
