import React  from 'react';
import {Card,Row,Col} from 'react-bootstrap'

export function Contact(){
 return( <Row className="row-cols-1 row-cols-md-3 mb-3 text-center">
    <Col>
      <Card className="mb-4 shadow-sm">
      <Card.Header>
        <h4 className="my-0 fw-normal">Free</h4>
      </Card.Header>
      <Card.Body>
        <Card.Title><h1 class="card-title pricing-card-title">R0 <small className="text-muted">/ mo</small></h1></Card.Title>
        <ul class="list-unstyled mt-3 mb-4">
          <li>10 users included</li>
          <li>Email support</li>
          <li>Help center access</li>
        </ul>
        <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
      </Card.Body>
    </Card>
    </Col>
    </Row>

 );
}

// <Container>
// <Row className="center-text">
// <h1 className="display-4">Contact us</h1>
// <Col className="mx-auto pt-3 pb-3">
//  <input type="text" name="name" placeholder="Name"/>
//  <input type="email" name="emailAddress" placeholder="Email Address"/>
//  <input type="text-area" name="message" palceholder="Message"/>
// </Col>
// <Col className="mx-auto pt-3 pb-3">
// <Button type="Submit">SEND MESSAGE</Button>
// </Col>
// </Row>
// </Container>