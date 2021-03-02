import React from 'react'
import {Button, Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export function ExJumbo(){
 return (
  <Container className="position-relative overflow-hidden p-3 p-md-5 m-md-3">
 <Row>
  <Col className="mx-auto my-auto">
   <h1 className="display-4 fw-normal d-md-block text-center text-secondary">Welcome Back </h1>
    <div className="col-md-12 p-lg-5 my-3">
      <p className="lead fw-normal text-secondary">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
      <Link to="/"><Button className="mx-4">View Questionaires</Button></Link>
      <Link to="/"><Button className="mx-4"></Button></Link>
</div>
  </Col>
  <Col className="mx-auto my-auto">
  <img className="img-fluid" src="./img/vector.png" width="450" height="450"></img>
  </Col>
 </Row>
</Container>
 )
}