import React, { useState, useEffect } from "react";
import CardPage from "./CardPage";
import axios from "axios";

export default function ImageList() {
    const [images, setImages] = useState([]);
    const [day, setDay] = useState()

    const ChangeDay = () => {
        let num = Math.round((Math.random() * 30));
        if (num === 0) { num = 1 };
        setDay(num);
        return num;
    }

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DmCR5nVfoXyDYmhE5zgdZaUMwJkcmvt64q5Pte48&date=2019-4-${day || 1}`)
            .then(res => {
                setImages(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [day]);




    return (
        <>
            <CardPage
                title={images.title}
                date={images.date}
                url={images.hdurl}
                description={images.explanation}
                day={ChangeDay}
            />
            />
        </>
    );

}