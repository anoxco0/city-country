import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getcity } from '../Redux/AddCity/action'

export const Home = () => {

    const [data , setData] = useState([])
    const dispatch =  useDispatch()
    const navigat = useNavigate();
     
    useEffect(()=>{
        axios.get("http://localhost:8080/cities").then(res => {
            setData(res.data)
        })
    },[])

    const handlesortasc = ()=>{
        axios.get("http://localhost:8080/cities").then((res)=>{
            setData(res.data.sort((a,b)=>{
              return  a.population-b.population;
            }))
        })
    }
    const handlesortdesc = ()=>{
        axios.get("http://localhost:8080/cities").then((res)=>{
            setData(res.data.sort((a,b)=>{
              return  b.population-a.population;
            }))
        })
    }

    
    const editdata = (id) => {

    }
    const deletedata = (id) => {
        axios.delete(`http://localhost:8080/cities/${id}`).then(res => {
            setData(data.filter(item => item.id !== id))
           dispatch(getcity()) 
        })
        console.log(id)
    }

  return (
    <div>
        <button onClick={handlesortasc}>asc</button>
        <button onClick={handlesortdesc}>desc</button>
        
        <div>
            <table>
                <thead >
                    <tr>
                        <th>id</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Poppulation</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.country}</td>
                        <td>{item.city}</td>
                        <td>{item.population}</td>
                        <td button onClick={editdata}>Edit</td>
                        <td onClick={()=>deletedata(item.id)}>Delete</td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}
