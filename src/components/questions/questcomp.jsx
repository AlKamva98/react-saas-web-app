import React from 'react';
import{Container, Col, ProgressBar} from 'react-bootstrap'
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
        <span className="fw-bold fs-2">Need to consult a colleague on this answer? Send an internal message directly to them for a quick response. <p className="btn-link pointer">Consult a colleague</p></span>
    
    </Container>
 )
}

export default QuestionsComp;