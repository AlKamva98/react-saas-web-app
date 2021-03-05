import React, {useState} from 'react';
import {Form, Accordion, Button, Container, Card} from 'react-bootstrap';
import {API, graphqlOperations} from 'aws-amplify'
import {graphqlMutations} from 'aws-appsync-react'
import {graphql, compose} from 'react-apollo'
import QuestionsList from '../../testData/QuestionsList.json';
import './questions.css'



function QAccordion(){

  // async arrow function to get questions from the DynamoDB 

 const [questions, setQuestions] = useState([]);

   const [showFollowupQs, setShowFollowupQs] = useState(false);
    


    //Handle when the user clicks the submit button
    // const handleSubmit = (form)=>{
    //   let answer = form.ansb.toString();
    //   alert(answer);
    // }

    //handle when the user inputs data into the input fields
    const handleAnsAChange = () => {

    }
      const handleSubmit = (event)=>{
      
    } 

 return(
    <Accordion className="accordion" defaultActiveKey="0">
  <div>
    {QuestionsList.map((questitem, index)=>{
      let ansA = "ansA"+ questitem.id.toString();
      let ansB = "ansB"+ questitem.id.toString();
      let ansC = "ansC"+ questitem.id.toString();

     
      let rdY = "rdY"+ questitem.id.toString();
      let rdN = "rdN"+ questitem.id.toString();
      

    
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

return<>
      <Card>
    <Accordion.Toggle as={Card.Header} eventKey={index.toString()}>
    {questitem.questionNum}
    </Accordion.Toggle>
    <Accordion.Collapse eventKey={index.toString()}>
    <Card.Body>
      <Form onSubmit={this.handleSubmit}>
      <div>
      <label className="label" id ="mainQ" key={index.toString()}>{questitem.mainquest}</label>
      </div><br/>
      <div className="radio">
      <input className="rd" type="radio" value="Yes" name="Qmain" id={rdY} onClick={() => setShowFollowupQs(true)} /> Yes
      <input className="rd"  type="radio" value="No" name="Qmain" id={rdN} onClick={() => setShowFollowupQs(false)} /> No
      </div>
      
      {
        showFollowupQs ? (<FollowupQs/>)
          :(null )
      }
        <Container className="btndiv">
        <Button className="btn " id="btnSend" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Send</Button> 
        <Button type ="Submit" className="btn mx-5 align-text-right"  id="btnSubmit" >Submit</Button></Container>
      </Form>
     </Card.Body>
    </Accordion.Collapse>
  </Card>
      </>
    })}
    </div>
</Accordion>
  );
}

export default QAccordion;



{/*
   <div>
  {QuestionsList.map((questitem, index)=>{
    return (<>
     <div>
      <label className="label" id ="mainQ" key={index}>{questitem.mainquest}</label>
      </div><br/>
      <div className="radio">
      <input className="rd" type="radio" value="Yes" name="Qmain" /> Yes
      <input className="rd" type="radio" value="No" name="Qmain" /> No
      </div>
      <div>
      <label className="label" id ="mainQ" key={index}>{questitem.questa}</label>
      </div><br/>
      <div>
      <input type="text" className="form-control" id="inName" placeholder="James Dunne"/>
      </div>

    </>
    )
  })}
</div> */}

 //useEffect(() => {//Every time the app renders it will fetch the questions
  //   fetchquestions();
  //   },[]/**create an empty array so that the useEffect only fetches the questions once each time the page renders*/)

  //    const fetchquestions = async ( ) =>{
       
  //   try {
  //     const questionData = await API.graphql(graphqlOperation(listQuestionss));//to get data from the graphQL database
  //     const questionList = questionData.data.listQuestionss.items;
  //     console.log('Questions list', questionList);//to display the list of questionst
  //     setQuestions(questionList);
  //   } catch (error) {
  //      console.log("Error on fetching question",error);
  //   }
  // };
  //  