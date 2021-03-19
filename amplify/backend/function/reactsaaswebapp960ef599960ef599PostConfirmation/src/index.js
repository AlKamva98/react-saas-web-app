/* Amplify Params - DO NOT EDIT
	API_INFOHORUSAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_INFOHORUSAPI_GRAPHQLAPIIDOUTPUT
	API_INFOHORUSAPI_USERTABLE_ARN
	API_INFOHORUSAPI_USERTABLE_NAME
	ENV
	FUNCTION_REACTSAASWEBAPP960EF599960EF599POSTCONFIRMATION_NAME
	REGION
Amplify Params - DO NOT EDIT *//*
  this file will loop through all js modules which are uploaded to the lambda resource,
  provided that the file names (without extension) are included in the "MODULES" env variable.
  "MODULES" is a comma-delimmited string.
*/
const moduleNames = process.env.MODULES.split(',');
const modules = moduleNames.map(name => require(`./${name}`));

exports.handler = (event, context, callback) => {
  for (let i = 0; i < modules.length; i += 1) {
    const { handler } = modules[i];
    handler(event, context, callback);
  }
};
