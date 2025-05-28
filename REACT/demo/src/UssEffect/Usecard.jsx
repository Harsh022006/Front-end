import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Usecard() {

    const [data, setdata] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("https://fakestoreapi.com/products")
        console.log(res.data)
        setdata(res.data)
    }
    return (
        <div className='container' style={{margin:'50px'}}>
            <div className="row" style={{gap:'30px'}}>
                { 
                data && data.map((product, index) =>{
                    return(
                
            <div className="card" key={index} style={{ width: '18rem', height:'450px' }}>
                <img src={product.image} style={{height:'300px'}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-id">{product.id}</h5>
                    <h5 className="card-title">{product.price}$</h5>
                    <p className="card-text">{product.description.slice(0,60)}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
            )
            })
            }
            </div>
        </div>

    )
}

export default Usecard
