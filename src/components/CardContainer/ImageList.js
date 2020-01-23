import React, { useState, useEffect } from "react";
import CardPage from "./CardPage";
import axios from "axios";

export default function ImageList() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DmCR5nVfoXyDYmhE5zgdZaUMwJkcmvt64q5Pte48&date=2015-2-${day()}`)
            .then(res => {
                setImages(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const day = () => {
        let num = Math.round((Math.random() * 30));
        if (num === 0) { num = 1 };
        console.log(num)
        return num;
    }


    return (
        <>

            <CardPage
                title={images.title}
                date={images.date}
                url={images.hdurl}
                description={images.explanation}
                day={day}
            />

        </>
    );

}