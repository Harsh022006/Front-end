import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Usecart() {
    const [data, setdata] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])
    const fetchdata = async () => {
        const res = await axios.get("https://dummyjson.com/carts")
        console.log(res.data.carts)
        setdata(res.data.carts)

    }
    return (
        <div>
            <div className='container'>
                <div className="row">

                    {
                        data && data.map((cart, index) => {
                            console.log(cart)
                            return (
                                <div className="col-md-4">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src="..." className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{cart.products.title}</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Usecart
