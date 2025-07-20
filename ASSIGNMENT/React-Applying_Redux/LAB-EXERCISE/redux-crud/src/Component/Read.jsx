import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteadmin, showadmin, updateadmin } from '../Slicedata/adminSlice'
import { Link } from 'react-router-dom'

function Read() {
  const admins = useSelector((state) => state.admins.admin)

    // console.log(users)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(showadmin())
    }, [])

    

    return (
        <div className='container'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        admins && admins.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>
                                        <button className='btn btn-info'>View</button>
                                        <Link to={`/edit/${data.id}`} className='btn btn-success mx-2'>Edit</Link>
                                        {/* <button className='btn btn-success' onClick={()=>dispatch(updateadmin(data))}>Edit</button> */}
                                        <button className='btn btn-danger' onClick={()=>dispatch(deleteadmin(data.id))}>Delete</button>
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

export default Read
