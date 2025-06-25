import React, { useEffect, useState } from 'react'
import Header from '../Acommon/Header'
import Navbar from '../Acommon/Navbar'
import axios from 'axios'

function Blogmanager() {
  const [Blogmanager, setblogmanager] = useState([])

  useEffect(() => {
    fetchdata()
  }, [])

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/Blog")
    console.log(res.data)
    setblogmanager(res.data)
  }



  const [blogdata, setblogdata] = useState({
    id: "",
    title: "",
    desc: "",
    comment: "",
    name: "",
    date: "",
    img: ""
  })

  // get individual product 
  const viewdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/Blog/${id}`)
    console.log(res.data)
    setblogdata(res.data)
  }

  const removedata = async (id) => {
    const res = await axios.delete(`http://localhost:3000/Blog/${id}`)
    console.log(res.data)
    fetchdata()
  }



  return (
    <div>
      <Header />
      <Navbar title="BLOG-MANAGE" name="Blogmanager" />
      <h1 className='text-center m-3'><i>BLOG - MANAGE</i></h1>
      <table className="container table table-dark table-hover text-center ">
        <thead>
          <tr className='text-center'>
            <th scope="col">#Id</th>
            <th scope="col">Name</th>
            <th scope="col">title</th>
            <th scope="col">date</th>
            <th scope="col">comment</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>

          {
            Blogmanager && Blogmanager.map((data) => {
              console.log(data)
              return (
                <tr>
                  <th scope="row">{data.id}</th>
                  <td>{data.name}</td>
                  <td>{data.title}</td>
                  <td>{data.date}</td>
                  <td>{data.comment}</td>
                  <td>
                    <button className='btn btn-info ' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => viewdata(data.id)} >VIEW</button>
                    <button className='btn btn-success mx-2'>EDIT</button>
                    <button className='btn btn-danger' onClick={() => removedata(data.id)}>DELETE</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

      {/* view model */}

      {/* <!-- Button trigger modal --> */}
      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

      {/* <!-- Modal --> */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div className="blog-item">
              <div className="blog-img">
                <img src={blogdata.img} className="img-fluid rounded-top w-100" style={{ height: "450px" }} alt="Image" />
              </div>
              <div className="blog-content rounded-bottom p-4">
                <div className="blog-date">{blogdata.date}</div>
                <div className="blog-comment my-3">
                  <div className="small"><span className="fa fa-user text-primary" /><span className="ms-2">{blogdata.name}</span></div>
                  <div className="small"><span className="fa fa-comment-alt text-primary" /><span className="ms-2">{blogdata.comment}</span></div>
                </div>
                {/* <a href="#" className="h4 d-block mb-3">Rental Cars how to check driving fines?</a> */}
                <h5 className='mb-3'>{blogdata.title}</h5>
                <p className="mb-3" style={{}}>{blogdata.description}</p>
                {/* <a href="#" className>Read More  <i className="fa fa-arrow-right" /></a> */}
              </div>
            </div>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            {/* <button type="button" class="btn btn-primary">Save changes</button> */}
          </div>
        </div>
      </div>
    </div>


  )
}

export default Blogmanager
