import React, { useEffect, useState } from 'react'

function Useusertable() {
    const [data, setdata] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const result = await res.json()
        console.log(result)
        setdata(result)
        
    }
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">phone</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Company</th>
                        <th scope="col">Website</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((user,index) => {
                            console.log(user)
                            return (

                                <tr>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.email}</td>
                                    <td>{user.company.name}</td>
                                    <td>{user.website}</td>
                                </tr>
                            )
                        }
                        )

                    }
                </tbody>
            </table>
        </div>

    )
}

export default Useusertable
