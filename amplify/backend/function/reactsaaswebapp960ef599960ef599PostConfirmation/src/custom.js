var aws = require('aws-sdk')
var ddb = new aws.DynamoDB()

exports.handler = async (event, context) => {
let date = new Date()

if(event.request.userAttributes.sub){

  let params = {
    Item:{
      'id':{S: event.request.userAttributes.sub},
      '__typename':{S: 'User'},
      'username':{S: 'stefanon123'},
      'email':{S: event.request.userAttributes.email},
      'fname':{S: 'Stefano'},
      'lname':{S: 'Ngantweni'},
      'jobtitle':{S: 'Intern'},
      'company':{S: 'Bahati Tech'},
      'employees':{S: '0-10 emloyees'},
      'country':{S: 'South Africa'},
      'createdAt':{S: date.toISOString()},
      'updatedAt':{S: date.toISOString()}
    },
    TableName: process.env.USERTABLE
  }
  try{
    await ddb.putItem(params).promise()
    console.log("Success") 
  }catch(err){
    console.log("Error: ", err)
  }
context.done(null, event)
}else{
  console.log("Error: Nothing written to DynamoDB")
  context.done(null, event)
}

}