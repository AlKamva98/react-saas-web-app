import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Company {
  readonly id: string;
  readonly companyname?: string;
  readonly numemployees?: string;
  constructor(init: ModelInit<Company>);
  static copyOf(source: Company, mutator: (draft: MutableModel<Company>) => MutableModel<Company> | void): Company;
}

export declare class User {
  readonly id: string;
  readonly firstname?: string;
  readonly lastname?: string;
  readonly jobtitle?: string;
  readonly companyid?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Answers {
  readonly id: string;
  readonly answer: string;
  readonly ansquestion: string;
  readonly ansuser: string;
  readonly isFilled: boolean;
  constructor(init: ModelInit<Answers>);
  static copyOf(source: Answers, mutator: (draft: MutableModel<Answers>) => MutableModel<Answers> | void): Answers;
}

export declare class Questions {
  readonly id: string;
  readonly mainquest: string;
  readonly questa?: string;
  readonly questb?: string;
  readonly questc?: string;
  readonly questd?: string;
  constructor(init: ModelInit<Questions>);
  static copyOf(source: Questions, mutator: (draft: MutableModel<Questions>) => MutableModel<Questions> | void): Questions;
}