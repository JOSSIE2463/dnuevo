
// Importa los hooks useState y useEffect de React


import { useState, useEffect } from 'react'

// Importa el componente Layout desde la ruta proporcionada

import Layout from '../../components/layout/'


// Importa el componente Card desde la ruta proporcionada

import Card from '../../components/card'

// Importa React (aunque parece no ser necesario)

import React from 'react'

// Define el componente funcional Player


function Player() {
 
  // Define un estado 'items' utilizando el hook useState con valor inicial null
  
  const [items, setItems] = useState(null)

 
  // Utiliza el hook useEffect para realizar una solicitud de datos cuando el componente se monta
  
  useEffect(() => {
 
    // Realiza una solicitud fetch a la API especificada

  
    // https://fakeapi.platzi.com/
    fetch('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Football_Player/')
    .then(response => response.json())
    .then(data => setItems(data) )

  }, [])
 
  // Retorna la estructura del componente usando JSX

  return (
    <>
      <Layout>
        <br />
        <div className='grid gap-4 grid-cols-3 m-10 w-full max-w-screen-lg'>
            {
                items?.map(item => (
                    <Card key={item.id} data = {item}/>
                ))
            }

        </div>
      </Layout>
    </>
  )
}
// Exporta el componente Player como el componente principal de este archivo

export default Player