import { useState, useEffect} from 'react'

import './App.css'
import UserCard from './components/userCard/userCard'

function App() {
 const [contacts, setCOntacts]= useState ([])

 const fetchContacts = async () => {
  try{
    const response = await fetch('localhost:3001/api/contacts_')
    if (!response.ok) {
      throw new Error('error al obtener contactos')
    }
    const data = await response.json()
    setCOntacts(data)
  }catch(error){
    console.log('error al obtener contactos')
 }
 }

 useEffect (()=> {
  fetchContacts()
 },[])

  return (
    <>
      <UserCard/>
      <UserCard/>
      <UserCard/>
      <div className='container'>
        {contacts.map((p)=>(
          <div>
            <h3>{p.nombre}</h3>
            <p>{p.celular}</p>
          </div>
        ))}
      </div>

    </>
  )
}

export default App
