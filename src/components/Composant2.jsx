import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Composant2({salaries}) {
    
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
