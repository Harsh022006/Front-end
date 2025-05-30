import React, { Component } from 'react'

export class Card extends Component {
    constructor (props){
        super(props);
        this.data=props;
    }
    render() {
        return (
            <div className='d-flex aligns-items-center justify-content-center text-center w-75 mx-auto'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={this.data.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Name : {this.data.name}</h5>
                        <h5 className="card-title">Age : {this.data.age}</h5>
                        <h5 className="card-title">Location : {this.data.Location}</h5>
                        
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>

            </div>
        )
    }
}

export default Card
