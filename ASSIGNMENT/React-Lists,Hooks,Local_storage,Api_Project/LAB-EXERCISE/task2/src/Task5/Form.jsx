import React, { useState } from 'react'

function Form() {
    const[name,setname] = useState("")
    const[contact,setcontact] = useState("")
    const[city,setcity] = useState("")
    const[email,setemail] = useState("")
    const[password,setpassword] = useState("")
    return (
        <div className='container'>
            <form>
                <h1 className='text-center'>REGISTER FORM</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Enter Your Name :</label>
                    <input type="text" value={name} onChange={(h)=> setname(h.target.value)} className="form-control" id="exampleInputPassword1" />
                    <div id="emailHelp" className="form-text">Enter Your Full Name</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contact No :</label>
                    <input type="tel" value={contact} onChange={(h)=> setcontact(h.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Enter Your City</label>
                    <input type="text" value={city} onChange={(h)=> setcity(h.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address :</label>
                    <input type="email" value={email} onChange={(h)=> setemail(h.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password :</label>
                    <input type="password" value={password} onChange={(h)=> setpassword(h.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-info">Submit</button>
            </form>

        </div>
    )
}

export default Form
