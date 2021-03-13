import React from 'react';
import {Container, Row,Column,Button} from 'react-bootstrap';

export function RnCquest(){
  
const [formState, updateFormState] = useState(initialFormState);
const [showFollowupQs, setShowFollupQs] = useState(false);
 
const FollowupQs = () =>{
          return(
      <div className="followupQs"> 
      <label className="label" id ="labelquestA"  key={index.toString() }> {questitem.questa}</label><br/>
      <input type="text" className="form-control" id={ansA} />    
      <label className="label" id ="labelquestB" key={index.toString()}>{questitem.questb}</label><br/>
      <input type="text" className="form-control" id={ansB} />    
      <label className="label" id ="labelquestC" key={index.toString()}>{questitem.questc}</label><br/>
      <input type="text" className="form-control" id={ansC} />    
      </div>
          )};


 return(
  <Container className="respncontr">
  <Row>
  <Column>
      <div>
      <label className="label" id ="mainQ" key={index.toString()}>{}</label>
      </div><br/>
      <div className="radio">
      <input className="rd" type="radio" value="Yes" name="Qmain"  onClick={() => setShowFollowupQs(true)} /> Yes
      <input className="rd"  type="radio" value="No" name="Qmain"  onClick={() => setShowFollowupQs(false)} /> No
      </div>
  </Column>
  </Row>
  </Container>
 )
}