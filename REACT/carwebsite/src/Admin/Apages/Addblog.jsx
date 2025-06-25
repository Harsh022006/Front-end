import React, { useState } from 'react'
import Header from '../Acommon/Header'
import Navbar from '../Acommon/Navbar'
import axios from 'axios'
import { redirect, useNavigate } from 'react-router-dom'

function Addblog() {

  const redirect = useNavigate()

  const [form, setform] = useState({
    id: "",
    name: "",
    title: "",
    comment: "",
    date: "",
    description: "",
    img: ""
  })


  // handling form 
  const getchange = (e) => {
    setform({
      ...form,
      // new id create
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value
    })
    console.log(form)

  }
  // submit form 


  const handlingblog = async (e) => {
    e.preventDefault()

    const res = await axios.post("http://localhost:3000/Blog", form)
    console.log(res.data)
    redirect("/Blog-Manager")

    setform({
      id: "",
      name: "",
      title: "",
      Comment: "",
      date: "",
      description: "",
      img: ""
    })
  }
  return (
    <div>
      <Header />
      <Navbar title="ADD BLOGS" name="Add-Blog" />



      <div className="col-xl-10 wow fadeInUp m-auto p-5" data-wow-delay="0.1s" >
        <div className="bg-secondary p-5 rounded">
          <h4 className="text-primary mb-4">Send Your Blog</h4>
          <form onSubmit={handlingblog}>
            <div className="row g-4">
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input type="text" value={form.name} name='name' onChange={getchange} className="form-control" id="name" placeholder="Your Name" />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input type="text" value={form.title} name='title' onChange={getchange} className="form-control" id="title" placeholder="title" />
                  <label htmlFor="text">Your title</label>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input type="text" value={form.comment} name='comment' onChange={getchange} className="form-control" id="comment" placeholder="comment" />
                  <label htmlFor="comment">Your comment</label>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input type="date" value={form.date} name='date' onChange={getchange} className="form-control" id="date" placeholder="date" />
                  <label htmlFor="date">date</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input type="img" value={form.img} name='img' onChange={getchange} className="form-control" id="img" placeholder="img" />
                  <label htmlFor="img">img</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea className="form-control" value={form.description} name='description' onChange={getchange} placeholder="Leave a message here" id="message" style={{ height: 160 }} defaultValue={""} />
                  <label htmlFor="description">description</label>
                </div>
              </div>
              <div className="col-6">
                <button className="btn btn-light w-100 py-3">ADD BLOG</button>
              </div>
              <div className="col-6">
                <button className="btn btn-light w-100 py-3">CANCEL BLOG</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Addblog
