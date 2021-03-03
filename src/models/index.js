// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Company, User, Answers, Questions } = initSchema(schema);

export {
  Company,
  User,
  Answers,
  Questions
};