import React, { useState } from 'react'

export default function Composant1() {

    const [matricule, setMatricule] = useState();
    const [marque, setMarque] = useState();
    const [dateMis, setDateMis] = useState();
    const [couleur, setCouleur] = useState();

    const handleClick = () => {
        document.getElementById('res').innerHTML= `<li>Matricule : ${matricule}</li>`
        document.getElementById('res').innerHTML+= `<li>Marque : ${marque}</li>`
        document.getElementById('res').innerHTML+= `<li>Date Mise en Circulation : ${dateMis}</li>`
        document.getElementById('res').innerHTML+= `<li>Couleur : ${couleur}</li>`
    }

  return (
    <div>
        <h1>Gestion Voitures</h1>
        <div>
            Matricule :
            <input type="text" name="matricule" id="matricule" value={matricule} onChange={(e) => setMatricule(e.target.value)}/>
        </div>
        <div>
            Marque :
            <input type="text" name="marque" id="marque" value={marque} onChange={(e) => setMarque(e.target.value)} />
        </div>
        <div>
            Date mise en circulation :
            <input type="date" name="dateMis" id="dateMis" value={dateMis} onChange={(e) => setDateMis(e.target.value)} />
        </div>
        <div>
            Couleur :
            <input type="text" name="couleur" id="couleur" value={couleur} onChange={(e) => setCouleur(e.target.value)} />
        </div>
        <div>
            <input type="button" value='Confirmer' onClick={handleClick}/>
        </div>
        <div>
            <h2>Recapitulatif des informations</h2>
            <ul id='res'>
            </ul>
        </div>
    </div>
  )
}
