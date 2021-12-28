import React from 'react'

const DCarousel = ({ handleSubmit, department, mat, image, text }) => {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header font-weight-bold text-primary text-left">
                    {department}
                </div>
                <img src={image} style={{maxHeight: 200}} className="card-img-top" alt="image"/>
                <div className="card-body text-dark text-left">
                    <h5 className="card-title text-capitalize">About</h5>
                    <p className="card-text">
                        {text}
                    </p>
                    <form onSubmit={(e) => handleSubmit(e, department, mat)}>
                        <button type="submit" className="btn btn-primary">Apply Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DCarousel
