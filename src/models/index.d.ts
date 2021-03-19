import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class User {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly fname: string;
  readonly lname: string;
  readonly jobtitle: string;
  readonly employees: string;
  readonly company: string;
  readonly country: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}