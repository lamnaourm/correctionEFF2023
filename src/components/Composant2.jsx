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
        <h1>Liste des Salariés</h1>
        <table>
            <tr>
                <th>nom</th>
                <th>prenom</th>
                <th>fonction</th>
                <th>service</th>
            </tr>
            {salaries.map(s => <tr>
                <td>{s.nomsal}</td>
                <td>{s.prenomsal}</td>
                <td>{s.fonction}</td>
                <td>{s.service.nomser}</td>
            </tr>)}
        </table>
    </div>
  )
}
