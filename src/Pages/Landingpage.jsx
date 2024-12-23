import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

function Landingpage() {
  const navigateByUrl = useNavigate()
  return(
    <>
    <Row className="mt-5 align-items-center justify-content-between w-100">
<Col lg={5}className='m-5'>
<h1 style={{fontSize:'40px'}}>Welcome to <span className='text-warning'>Media-Player</span></h1>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quam mollitia! Velit a nobis exercitationem debitis. 
  Iure distinctio, facilis reiciendis accusamus unde accusantium recusandae temporibus? Temporibus quos blanditiis molestias cumque?</p>
<button  className='btn btn-info mt-4' onClick={()=>navigateByUrl('/home')} >Get Started</button> </Col>
<Col lg={5} >
<img src="https://img.freepik.com/free-photo/digital-art-portrait-person-listening-music-headphones_23-2151065120.jpg?t=st=1727411840~exp=1727415440~hmac=b1fbb77aae38a1534f85d20e9869b7ced9e82fe70bf6d2f50e0356a666503138&w=740" alt="" />
</Col>
<Col></Col>
</Row>


  <div className="container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column">
    <h3> Features</h3>
    <div className="cards my-5  d-flex align-items-center justify-content-between w-100">
      <Card style={{ width: '22rem' }} className='p-4 bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/6f/5f/f3/6f5ff36fd8ffefa40bf466df6c693ef1.gif" /> 
      <Card.Body>
  <Card.Title className='text-primary'>Managing Videos</Card.Title>
<Card.Text>
Some quick example text to build on the card title and make up the bulk of the card's content.
</Card.Text>
</Card.Body>
</Card>
<Card style={{ width: '22rem' }} className='p-4 bg-info'>

<Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
<Card.Body>
<Card.Title className='text-primary'>Categorized Video</Card.Title>
 <Card.Text>
Some quick example text to build on the card title and make up the
bulk of the card's content.
</Card.Text>
</Card.Body>
      </Card>

  
<Card style={{ width: '22rem' }} className='p-4 bg-info'> 
  <Card.Img variant="top" height={'300px'} width={'300px'}src="https://i.gifer.com/origin/7d/7d1c0015912d9b30038595971af2ad57_w200.gif" />
<Card.Body>
<Card.Title className='text-primary'>Watch History</Card.Title>
<Card.Text>
Some quick example text to build on the card title
and make up the
bulk of the card's content.
</Card.Text>
</Card.Body>
</Card>


    </div>
  </div>

  <div className="container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between W-100">
<div className="col-lg-5">
<h4 className='text-warning '>Simple, Powerful & Fast</h4>
<h6 className='mb-5 mt-3'><span className='text-warning fw-bolder '>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. 
     Assumenda voluptas dicta, repudiandae fugiat beatae eum doloribus natus, praesentium quos similique enim nostrum possimus. Nulla provident voluptatum tempore delectus suscipit? Neque?</h6>

<h6 className='mb-5 mt-3'><span className='text-warning fw-bolder '>Categorize Videos</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Assumenda voluptas dicta, repudiandae fugiat beatae eum doloribus natus, praesentium quos similique enim nostrum possimus. Nulla provident voluptatum tempore delectus suscipit? Neque?</h6>

<h6 className='mb-5 mt-3'><span className='text-warning fw-bolder '>Managing Videos</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit.
   Assumenda voluptas dicta, repudiandae fugiat beatae eum doloribus natus, praesentium quos similique enim nostrum possimus. Nulla provident voluptatum tempore delectus suscipit? Neque?</h6>
</div>
<div className="video col-lg-5 ">
<iframe width="100%" height="480" src="https://www.youtube.com/embed/ccpVpcP8m44" title="Best of Sushin Shyam 2823 | Audio Jukebox | Hits of Sushin Shyam | OST" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>
      
    

</>
  )
}

export default Landingpage
