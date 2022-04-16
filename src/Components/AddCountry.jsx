import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddNewCountry } from '../Redux/Addcountry/action'


export const AddCountry = () => {
    const [country, setCountry] = useState('')
    const [payload, setPayload] = useState([]);
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
      axios.get('http://localhost:8080/country').then((res)=>setPayload(...res.data[0].country, ))
      dispatch(AddNewCountry(country));
      setCountry('')
    }
   

  return (
    
    <div>
          <input type="text"
          placeholder='Country'
            value={country}
            onChange={e=>setCountry(e.target.value)}
          />
          <button onClick={()=>{handleSubmit()}}>Save</button>
    </div>
  )
}
