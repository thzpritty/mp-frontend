import React from 'react'
import { Container,Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className='text-danger fw-bolder' href="#home" >
            <Link to={'/'} style={{textDecoration:"none",color:"red"}}>
           
          <i class="fa-solid fa-circle-play">   </i>
          </Link>
            Media Player
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
