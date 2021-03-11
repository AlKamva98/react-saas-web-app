import React,{useState, useEffect} from 'react';
import {Container, Row, Col,Card,Form} from 'react-bootstrap';
import {Redirect} from 'react-router-dom'
import {AmplifyAuthenticator} from 'aws-amplify-react';
import {Home} from '../../pages/EndUser/Home.js'
import Auth from '@aws-amplify/auth';



function Register() {
const initialFormState = {
fname:"", lname:"",email:"", password:"", confPassword:"", jobtitle:"", company:"",employees:"",formType:"signIn"
};
const [formState, updateFormState] = useState(initialFormState);
const [user, updateUser] = useState(null);
useEffect(()=>{
    checkUser();
},[])

async function checkUser(){
    try{
        const user = await Auth.currentAuthenticatedUser();
        console.log("The user is: "+user)
        updateUser(user);
        const a = await Auth.currentUserInfo();
        console.log("User Info is:"+ a);     
        updateFormState(()=>({...formState, formState: "signedIn"}));
    }catch(err){
        console.log(err);
    }
}


let username;
function onChange(e){
  e.persist()
  console.log("changing:"+e.target.name);
  updateFormState(()=>({...formState, [e.target.name]: e.target.value}))
}

const {formType} = formState;

async function SignUp(){
     console.log("Signing up")
        try{
        
        const {fname,lname, email, password, confPassword} = formState;
        username = fname+lname.charAt(0)+Math.round(Math.random()*1000);
        console.log("The username is: "+username);
        if(password === confPassword){
            await Auth.signUp({username, password,attributes: {
                email
                }})

            
                updateFormState(()=>({...formState, formType: "verifyMail"}))
                console.log("SignUp complete")
            }else{
                alert(username+"Passwords are different!! Pasword and Confirm Password must be simular");
            }      
            
        
        
        }
        catch(err){
            console.log("Error:"+err);
            
        }
}
const signupScreen = ()=>{
     updateFormState(()=>({...formState, formType: "signUp"}))
}
async function verifyEmail(){

}

async function SignIn(){
        const {email, password} = formState
        await Auth.signIn(email, password)
        updateFormState(()=>({...formState, formType: "signedIn"}))
        console.log("Logged in")

}

 return (<div>
     {formType === "signUp" && (
   <Container className="container-fluid">
    <Row>
        <Col className="text-secondary my-auto text-center">
            <h4>Register today</h4>
            <p>All seed for cattle good which. Stars us saying grass morning spirit seed one fourth very said you sixth spirit. Created days.</p>
            <img className="img-fluid text-center" src="img/vector.png" width="500" height="400"/>
            <p>Brought first let lesser appear that give two called forth fill. Firmament. Saying deep, abundantly blessed so. Itself said seed evening and air seed beast of fruitful, open.</p>
        </Col>
        <Col id="subDiv2">
            <Card className="bg-light shadow" >
                <Card.Body>
        <img className="mb-4" src="assets/brand/bootstrap-logo.svg" alt="Our logo" width="72" height="57"/>
        <h4 className="mb-3 fw-normal text-center">Please Fill in your details to sign up</h4>
      <Form className="row g-3 m-4 p-4"> 
        <Col className="col-md-6">
            <label for="fname" className="visually-hidden" >First name</label>
            <input type="text" className="form-control" onChange={onChange} name="fname" placeholder="First Name" required autofocus/> 
            <div className="valid-feedback">
            </div>
        </Col>
        <Col className="col-md-6">
            <label for="lname" className="visually-hidden">Last name</label>
            <input type="text" className="form-control" onChange={onChange} name="lname" placeholder="Last Name" required/>
            <div className="valid-feedback">
            </div>
        </Col>
       <Col className="col-md-12">
        <label for="jobtitle" className="visually-hidden">Job Title</label>
        <input type="text" name="jobtitle" className="form-control"  onChange={onChange}  placeholder="Job Title" required/>
       </Col>
          <Col className="col-md-12">
              <label for="email" className="visually-hidden">Email address</label>
              <input type="email" name="email" className="form-control"  onChange={onChange}  placeholder="Email" required />
          </Col>
        <Col className="col-12">
            <label for="password" className="visually-hidden">Password</label>
            <input type="password" name="password" className="form-control" onChange={onChange}  placeholder="Password" required/>
        </Col>

        <Col className="col-12">
            <label for="confPassword" className="visually-hidden">Confirm Password</label>
            <input type="password" name="confPassword" className="form-control" onChange={onChange} placeholder="Confirm Password" required/>
        </Col>
          
         <Col class="col-md-12">
         <label for="company" className="visually-hidden">Company</label>
         <input type="text" name="company" className="form-control" onChange={onChange} placeholder="Company" required/>
         </Col>
          <Col className="col-md-12">
              <select className="form-select" name="employees" onChange={onChange} aria-label=".form-select-lg example">
                  <option selected>Employees</option>
                  <option value="1-10 employees">1-10 employees</option>
                  <option value="11-20 employees">11-20 employees</option>
                  <option value="21-99 employees">21-99 employees</option>
                  <option value="100-199 employees">100-199 employees</option>
                  <option value="200-499 employees">200-499 employees</option>
              </select>
          </Col>
          <Col className="col-md-12">
              <select className="form-select mb-3"  name="country"  onChange={onChange} aria-label=".form-select-lg example">
                  <option defaultValue>Country</option>
                  <option value="Aus">Australia</option>
                  <option value="Bots">Botswana</option>
                  <option value="Chi">China</option>
                  <option value="Den">Denmark</option>
                  <option value="Eng">England</option>
                  <option value="Fra">France</option>
                  <option value="Ger">Germany</option>
                  <option value="Hait">Haiti</option>
                  <option value="Ind">India</option>
                  <option value="Jap">Japan</option>
                  <option value="Ken">Kenya</option>
                  <option value="Lib">Liberia</option>
                  <option value="Mex">Mexico</option>
                  <option value="Hol">Netherlands</option>
                  <option value="Omn">Oman</option>
                  <option value="Pak">Pakistan</option>
                  <option value="Qat">Qatar</option>
                  <option value="Rus">Russia</option>
                  <option value="RSA">South Africa</option>
                  <option value="Tun">Tunisia</option>
                  <option value="Ugn">Uganda</option>
                  <option value="Ven">Venenzuela</option>
                  <option value="Wal">Wales</option>
                  <option value="Yem">Yemen</option>
                  <option value="Zim">Zimbabwe</option>
                </select>
          </Col>
            <div className="checkbox mb-3">
            <text>
                <input type="checkbox" name="chkAgreement" onChange={onChange} value="i-agree"/>   I agree to the <a href="#" >Master Subscription Agreement.</a>
            </text>
             </div>
        <div className="checkbox mb-3 ">
        <span  >By registering, you agree to the processing of your personal data by Bahati Tech as described in the </span><a href="">Privacy policy</a>
    </div>
        <p className="w-100 btn btn-lg btn-primary pointer" onClick={SignUp}   >REGISTER</p>
        <div className="checkbox mb-3">
        <span>
            <input type="checkbox" value="comms"/>   Yes, I would like to receive marketing communications regarding Bahati Tech products, services, and events. I can unsubscribe at a later time.        </span>
        </div>
    
        </Form></Card.Body>
            </Card>
    </Col>
    </Row>
    </Container>
    )
}
{ formType === 'signIn' && (
<Container className="container my-auto mx-auto ">
    <Row>
      <Col className="col-md-4 mx-auto">
              <img className="mb-4 text-center" src="assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
              <h1 className="text-center h3 mb-3 fw-normal">Please sign in</h1>
              <label for="email" className="visually-hidden">Email address</label>
              <input type="email" name="email" className="form-control" onChange={onChange} placeholder="Email address" required autoFocus/>
              <label for="password" className="visually-hidden">Password</label>
              <input type="password" name="password" className="form-control" onChange={onChange} placeholder="Password" required/>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" onChange={onChange} value="remember-me"/> Remember me
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" onClick={SignIn} type="submit">Sign in</button>
              <p className="mt-5 mb-3 text-muted">Don't have account? Click <p className="btn-link d-md-inline-block pointer" onClick={signupScreen}>here</p> to register.</p>
              <p className="mt-5 mb-3 text-muted">&copy;2021</p>

      </Col>
    </Row>
  </Container>

)}
{ formType === 'verifyMail' && (
<div><h1>Verify email address</h1>
<span>Hi your username is{username} </span><br/>
<span>Check your email and click the link to verify your email.</span><br/>
<span>Once your email is verified click continue to proceed to login.</span>
<p  className="btn btn-primary pointer" onClick={verifyEmail}>continue</p>
</div>
)}
{ formType === 'signedIn' && (
   <Redirect to="/" />
)

}

</div>
 )
}

export default Register;