import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Anavbar from '../Acommon/Anavbar'
import axios from 'axios'

function Roommanage() {

    const [room,setroom] = useState([])

    useEffect(()=>{
        fetchdata()
    })

    const fetchdata = async ()=>{
        const res = await axios.get("http://localhost:3000/room")
        console.log(res.data)
        setroom(res.data)
    }

    // view data 

    const removedata = async(id)=>{
      const res = await axios.delete(`http://localhost:3000/room/${id}`)
        console.log(res.data)
        fetchdata()
      
    }

  return (
    <div>
      <Aheader />
      <Anavbar title="Room Manage" name="Room Manage" />
        <table className="container table table-dark table-hover text-center ">
        <thead>
          <tr className='text-center'>
            <th scope="col">#Id</th>
            
            <th scope="col">title</th>
            <th scope="col">price</th>
            <th scope="col">bed</th>
            <th scope="col">Bath</th>
            <th scope='col'>Action</th>

          </tr>
        </thead>
        <tbody>
        {
            room && room.map((data)=>{
                console.log(data)
                return(
                     <tr>
                  <th scope="row">{data.id}</th>
                  
                  <td>{data.title}</td>
                  <td>{data.price}</td>
                  <td>{data.bed}</td>
                  <td>{data.Bath}</td>
                  <td>
                    <button className='btn btn-info ' data-bs-toggle="modal" data-bs-target="#exampleModal" >VIEW</button>
                    <button className='btn btn-success mx-2'>EDIT</button>
                    <button className='btn btn-danger' onClick={()=> removedata(data.id) } >DELETE</button>
                  </td>
                </tr>
                )
            })
        }
        </tbody>
        </table>
    </div>
  )
}

export default Roommanage
