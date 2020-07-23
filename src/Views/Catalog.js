import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom'

// APIs keys
const timeStamp = '1595465427'
const apiKey = '4d83457e38505c349716636eea8d24d5' // public key
const md5 = '33ffba8f09b558e72e11ab67e2f80ba4'

// base URL: `https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`


function Catalog() {
    const [heroes, setHeroes] = useState([])
    
    useEffect(() => {

        // axios({
        //     method: 'GET',
        //     url: `https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`
        // }).then(res => {
        //     setHeroes(res.name)
        // })
        axios
        .get(`https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`)
        .then(response => {
            console.log(response)
        })
        .catch( err => console.log(err))

        // Set State
    })

    return (
        <h1>Heroes Page</h1>
        )
}

export default Catalog

