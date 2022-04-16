import axios from 'axios'
import React, { useEffect, useState } from 'react'


export const AddCountry = () => {
    const [country, setCountry] = useState('')
    
    const handlechange = (e)=>{
      setCountry(e.target.value)
    }
   

  return (
    
    <div>
          <input type="text"
          placeholder='Country'
            value={country}
            onChange={e=>handlechange(e)}
          />
          <button onClick={()=>{}}>Save</button>
    </div>
  )
}
