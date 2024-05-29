import React, { useState } from 'react'

export default function Composant3({ salaries }) {
    const [filter, setFilter] = useState()
    const [salariesFiltred, setSalariesFiltred] = useState([])

    const handleClick = () => {
        setSalariesFiltred(salaries.filter(s => s.service.nomser == filter))
    }

    return (
        <div>
            <h2>Recherche par service : </h2>
            Entrer le nom du service :
            <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
            <input type="button" onClick={handleClick} />
            <h2>Resultat :</h2>
            <ul>
                {salariesFiltred.map(s => <li>
                    nom : {s.nomsal} Prenom : {s.prenomsal}
                </li>)}
            </ul>
        </div>
    )
}
