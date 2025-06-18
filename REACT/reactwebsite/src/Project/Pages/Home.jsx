import React from 'react'
// import Header from '../Common/Header'

function Home() {
  return (
    <div>
      {/* <Header /> */}
      {/* Carousel wrapper */}
      <div id="carouselMDExample" data-mdb-carousel-init className="carousel slide carousel-fade" data-mdb-ride="carousel">
        {/* Slides */}
        <div className="carousel-inner mb-5 shadow-1-strong rounded-3">
          <div className="carousel-item active">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(88).webp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(121).webp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(31).webp" className="d-block w-100" alt="..." />
          </div>
        </div>
        {/* Slides */}
        {/* Controls */}
        <button data-mdb-button-init className="carousel-control-prev" type="button" data-mdb-target="#carouselMDExample" data-mdb-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button data-mdb-button-init className="carousel-control-next" type="button" data-mdb-target="#carouselMDExample" data-mdb-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
        {/* Controls */}
        {/* Thumbnails */}
        <div className="carousel-indicators" style={{ marginBottom: '-20px' }}>
          <button type="button" data-mdb-button-init data-mdb-target="#carouselMDExample" data-mdb-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" style={{ width: 100 }}>
            <img className="d-block w-100 shadow-1-strong rounded" src="https://mdbcdn.b-cdn.net/img/Photos/Others/Carousel-thumbs/img%20(88).webp" />
          </button>
          <button type="button" data-mdb-button-init data-mdb-target="#carouselMDExample" data-mdb-slide-to={1} aria-label="Slide 2" style={{ width: 100 }}>
            <img className="d-block w-100 shadow-1-strong rounded" src="https://mdbcdn.b-cdn.net/img/Photos/Others/Carousel-thumbs/img%20(121).webp" />
          </button>
          <button type="button" data-mdb-button-init data-mdb-target="#carouselMDExample" data-mdb-slide-to={2} aria-label="Slide 3" style={{ width: 100 }}>
            <img className="d-block w-100 shadow-1-strong rounded" src="https://mdbcdn.b-cdn.net/img/Photos/Others/Carousel-thumbs/img%20(31).webp" />
          </button>
        </div>
        {/* Thumbnails */}
      </div>

    </div>


  )
}

export default Home
