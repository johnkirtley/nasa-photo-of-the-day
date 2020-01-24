import React, { useState, useEffect } from "react";
import CardPage from "./CardPage";
import axios from "axios";

export default function ImageList() {
    const [images, setImages] = useState([]);
    const [day, setDay] = useState()

    const dt = new Date();
    const defaultDate = dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate();


    const ChangeDate = () => {
        const date = document.querySelector('#datepicker');
        setDay(date.value);
    }

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DmCR5nVfoXyDYmhE5zgdZaUMwJkcmvt64q5Pte48&date=${day || defaultDate}`)
            .then(res => {
                setImages(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [day, defaultDate]);




    return (
        <>
            <CardPage
                title={images.title}
                date={images.date}
                url={images.hdurl}
                description={images.explanation}
                day={ChangeDate}
            />
            />
        </>
    );

}