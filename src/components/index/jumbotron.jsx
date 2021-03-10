import React from "react";
import {Button, Image,Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './jumbo.css'

export function Jumbotron(){

 return(
<Container className="position-relative overflow-hidden p-3 p-md-5 m-md-3">
 <Row>
  <Col className="mx-auto my-auto order-md-1">
   <h1 className="display-4 fw-normal d-md-block text-center text-secondary">Welcome to Critical Infrastructure Security </h1>
    <div className="col-md-12 p-lg-5 my-3">
      <p className="lead fw-normal text-secondary">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
      <Link to="/about"><Button className="mx-4">Learn more</Button></Link>
      <Link to="/questions"><Button className="mx-4">Take Questionaire</Button></Link>
</div>
  </Col>
  <Col className="mx-auto my-auto order-md-2">
  <Image className="img-fluid" src="./images/vector.png" width="450" height="450"/>
  </Col>
 </Row>
</Container>
 ) 
}