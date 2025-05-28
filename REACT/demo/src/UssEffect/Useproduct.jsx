import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Useproduct() {

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
    <div className='container' style={{ margin: '50px' }}>
      <div className="row" style={{ gap: '30px' }}>

        {
          data && data.map((product,index) => {
            return (
              <div className="card" style={{ width: '18rem' }}>
                <img src="" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.id}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>

            )


          })
        }




      </div>
    </div>

  )
}

export default Useproduct

