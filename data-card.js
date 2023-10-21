import React from "react";
import { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import JsonTask from "./Json";

export default function DataCard() {
    const [datum, setdatum] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(details => setdatum(details))
    }, [])
    const csvdata = datum;
    return (
        <div className="container-fluid row justify-content-around" style={{ height: "100vh", width: "100vw" }}>
            <JsonTask />
            <CSVLink
                data={
                    csvdata.map((index, value) => (
                        {
                            Id: index.id,
                            Title: index.title,
                            Price: index.price,
                            Description: index.description,
                            Category: index.category,
                            Image: index.image,
                            Rate: index.rating.rate,
                            Count: index.rating.count,
                        }
                    ))
                }>
                <div class="text-center"><button className="dwnld btn btn-warning">Download CSV</button></div></CSVLink>
        </div>
    );
}