import React from 'react'
import '../userCard/UserCard.css'
import ButtonsCard from './Buttons/ButtonsCard'

function UserCard() {
  return (
    <>
    <div className='Card'>
        <img src="/prueba-tecnica-juliangaviria-04092024/public/contact-book.png" alt="FOTO DE PERFIL" />
        <p>Nombre</p>
        <p>Apellido</p>
        <p>correo</p>
        <p>telefono</p>
        <p>direccion</p>
        <p>edad</p>
        <ButtonsCard/>
    </div>
    </>
  )
}

export default UserCard