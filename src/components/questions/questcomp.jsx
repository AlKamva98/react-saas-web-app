import React from 'react';
import{Container, Col, Form, ProgressBar} from 'react-bootstrap'
import QAccordion from './QAccordion'
import './questions.css';

 function QuestionsComp(){
 return(
      <Container className =" overflow-hidden p-5  bg-light">
        <Col className="col-md-12">
        <h3>Please fill in the following questionnaire</h3> 
      <ProgressBar animated variant="success" label="3/10" now={30} /><br/>
        </Col>
        <QAccordion/>
        <span className="fw-bold fs-2">Need to consult a colleague on this answer? Send an internal message directly to them for a quick response. <button type="button" className="btn btn-link">Consult a colleague</button></span>
    
    </Container>
 )
}

export default QuestionsComp;