import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div>
                  {/* Topbar Start */}
                <div className="container-fluid topbar bg-secondary d-none d-xl-block w-100">
                    <div className="container">
                        <div className="row gx-0 align-items-center" style={{ height: 45 }}>
                            <div className="col-lg-6 text-center text-lg-start mb-lg-0">
                                <div className="d-flex flex-wrap">
                                    <a href="#" className="text-muted me-4"><i className="fas fa-map-marker-alt text-primary me-2" />Find A Location</a>
                                    <a href="tel:+01234567890" className="text-muted me-4"><i className="fas fa-phone-alt text-primary me-2" />+01234567890</a>
                                    <a href="mailto:example@gmail.com" className="text-muted me-0"><i className="fas fa-envelope text-primary me-2" />Example@gmail.com</a>
                                </div>
                            </div>
                            <div className="col-lg-6 text-center text-lg-end">
                                <div className="d-flex align-items-center justify-content-end">
                                    <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3"><i className="fab fa-facebook-f" /></a>
                                    <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3"><i className="fab fa-twitter" /></a>
                                    <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3"><i className="fab fa-instagram" /></a>
                                    <a href="#" className="btn btn-light btn-sm-square rounded-circle me-0"><i className="fab fa-linkedin-in" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Topbar End */}
      {/* Navbar & Hero Start */}
                <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <a href className="navbar-brand p-0">
                                <h1 className="display-6 text-primary"><i className="fas fa-car-alt me-3" />Cental</h1>
                                {/* <img src="img/logo.png" alt="Logo"> */}
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="fa fa-bars" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <div className="navbar-nav mx-auto py-0">
                                    <NavLink to="/Dashboard" className="nav-item nav-link">Dashboard</NavLink>
                                    

                                     <div className="nav-item dropdown">
                                        <NavLink to="pages" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Manage Data</NavLink>
                                        <div className="dropdown-menu m-0">
                                            {/* <NavLink to="/managedata" className="nav-item nav-link">Manage Data</NavLink> */}
                                            <NavLink to="/blog-Manager" className="dropdown-item">Blog-Manage</NavLink>
                                            <NavLink to="*" className="dropdown-item">car-Manage</NavLink>
                                            <NavLink to="*" className="dropdown-item">team-Manage</NavLink>
                                            
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="nav-item dropdown">
                                        <NavLink to="pages" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Add Data</NavLink>
                                        <div className="dropdown-menu m-0">
                                            <NavLink to="/addblog" className="dropdown-item">Add-Blogs</NavLink>
                                            <NavLink to="/addcar" className="dropdown-item">Add Car</NavLink>
                                            <NavLink to="/addteam" className="dropdown-item">Add Team</NavLink>
                                            
                                        </div>
                                    </div>
                                    <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                                </div>
                                <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Get Started</a>
                            </div>
                        </nav>
                    </div>
                </div>
                {/* Navbar & Hero End */}
            
            </div>
    </div>
  )
}

export default Header
