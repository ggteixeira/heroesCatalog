import React, { useState, useEffect } from 'react';
// import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

// APIs keys
const timeStamp = '1595465427'
const apiKey = '4d83457e38505c349716636eea8d24d5' // public key
const md5 = '33ffba8f09b558e72e11ab67e2f80ba4'

function Catalog() {
  const [characterInfos, setCharacterInfos] = useState([])

  // console.log(`https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&orderBy=name&limit=100`)

  // make a request
  useEffect(() => {
    fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&orderBy=name&limit=10`)
      .then(response => response.json())
      .then(data => data.data.results)
      .then(data => setCharacterInfos(data))

  }, [])
  return (
    <div className="w-full flex flex-wrap space-x-2 justify-start">
      {characterInfos.map(hero => (
        <div 
        className="bg-gray-500 max-w-sm m-3 rounded overflow-hidden shadow-lg"
        >
          


          <img className="h-48 w-full" src={hero.thumbnail.path + '/standard_xlarge.jpg'} alt="Sunset in the mountains"></img>
          
            <div class="font-bold text-sm m-2">
          
              <p className="text-center">{hero.name}</p>
              
          
            </div>
            <p className="text-center hover:bg-gray-600 border border-gray-400 px-4 py-2 text-gray-800"><Link to="/details">Details</Link></p>
          </div>

      ))}
    </div>
  )
}

// className="flex justify-between flex-wrap"
{/* <img className="w-full" src={hero.thumbnail.path + '/portrait_medium.jpg'}></img> */}

export default Catalog

