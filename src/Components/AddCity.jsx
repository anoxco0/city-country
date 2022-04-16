import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Addnewcity } from '../Redux/AddCity/action'

export const AddCity = () => {

const [city, setCity] = useState("")
const [population, setPopulation] = useState("")
const [country, setCountry] = useState("")    
const dispatch = useDispatch();

    const handleSubmit = () => {
        const payload = {
            city,
            population,
            country
        }
        dispatch(Addnewcity(payload))   
        setCity('')
        setPopulation('')
        setCountry('')
    }
    
        

  return (
    <div>
        <h1>add city</h1>
        <input type="text"
        placeholder='city'
        value={city}
        onChange={(e) => setCity(e.target.value)}
        />
        <br />
        <br />
        <input type="text"
        placeholder='population'
        value={population}
        onChange={(e) => setPopulation(e.target.value)}
        />
        <br /><br />
        <input type="text"
        placeholder='country'
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        />
        <br /><br />
        <button onClick={handleSubmit}>add city</button>
    </div>
  )
}

