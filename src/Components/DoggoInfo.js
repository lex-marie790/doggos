import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoggoCard from './DoggoCard.js';

const Doggos = props => {
    const [doggo, setDoggo] = useState([]);

    useEffect(() => {
        axios
        .get('https://api.thedogapi.com/v1/images/search')
        .then(res => {
            setDoggo(res.data)
            console.log(res)
        })
        .catch(err => {
            console.log('Cant get Doggos')
        });
    },[]);

    return(
        <div>
            <DoggoCard img = {doggo.url} breeds = {doggo.breeds} name = {doggo.name} temperament = {doggo.temperament} />
        </div>
    )
}

export default Doggos;

