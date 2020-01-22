import React, { useState, useEffect } from "react";
import CardPage from "./CardPage";
import axios from "axios";

export default function ImageList() {
    const [images, setImages] = useState([]);



    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=DmCR5nVfoXyDYmhE5zgdZaUMwJkcmvt64q5Pte48&date=2020-1-5")
            .then(res => {
                setImages(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);


    return (
        <>

            <CardPage
                title={images.title}
                date={images.date}
                url={images.hdurl}
                description={images.explanation}
            />

        </>
    );

}