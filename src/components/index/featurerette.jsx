import React from "react";
import { Container, Row, Col} from 'react-bootstrap';
import './index.css'

export function Featurerette (){
 return(
  <Container className= "cont featurette bg-light">
  <Row >
    <Col className="order-md-2">
      <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
      <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
    </Col>
    <Col className="order-md-1">
      <img src="img/featurette.jpg" className=" img-fluid mx-auto mt-5 pt-4 " width="700" height="700"   focusable="false">
    </img>
  </Col>
  </Row>
  </Container>

 )
}