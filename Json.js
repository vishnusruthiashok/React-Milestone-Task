import { useState, useEffect } from "react";
import StarRatings from "react-star-ratings";
import { CSVLink } from "react-csv";
export default function JsonTask() {
    const [dat, setdat] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(details => setdat(details))
    })
    const csvdata = dat;
    return (
        <>
            {
                dat.map((index, value) => (
                    <div className="card my-4 mx-1 text-center" style={{ width: "270px" }} >
                        <img src={index.image} class="w-50 mx-auto mt-3" style={{ height: "150px" }} />
                        <div className="card-body d-flex flex-column justify-content-between">
                            <h6 className="card-title">{index.title}</h6>
                            <h5 className="card-text">{index.price}</h5>
                            <p className="card-text">{index.category}</p>
                            <p className="card-text">{index.rating.rate}<br /><StarRatings
                                rating={index.rating.rate}
                                starDimension="15px"
                                starSpacing="1px"
                                starEmptyColor="grey"
                                starRatedColor="orange"
                            /></p>
                            <div>
                            <a href="#" class="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    
                )
                )
            }
        </>
    )
}