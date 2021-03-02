import React from 'react';
import{Container, Row, Col, Form,  Button, ProgressBar} from 'react-bootstrap'
import QAccordion from './QAccordion'
import './questions.css';

 function QuestionsComp(){
 return(
      <Container className =" overflow-hidden p-5  bg-light">
        
        <Col className="col-md-12">
        <h3>Please fill in the following questionnaire</h3>
        </Col>

        <Form method ="POST">
        </Form>
    
        
        <QAccordion/>
        <span className="fw-bold fs-5">Don't know the answers? Click the "Send" button to send email to some one who knows</span>
        <div className="progress" >
              <ProgressBar className=" bg-success w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</ProgressBar>
        </div>
    </Container>



 )
}

export default QuestionsComp;