import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Composant2() {
    const [salaries, setSalaries] = useState([])

    useEffect(() => {
        const getData = async () =>{
            const res = await axios.get('http://localhost:8000/salaries')
            return  res.data
        }

        getData().then((sales) => setSalaries(sales) )
    }, [])
  return (
    <div>
        
    </div>
  )
}
