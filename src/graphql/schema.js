import { gql } from "@apollo/client";

export const typeDefs = gql`
  type Report {
    id: ID!
    reporter: String
    date: String
    time:String
    injuries:[Injury]
  },
  type Injury{
    injury_id:ID!
    report:Report
    description:String
    body_part:String
  }
  type Query {
    report(id:ID!):Report
  }
  type Query{
    allReports:[Report]
  }
  input InjuryCreateInput {
    description: String!
    body_part: String!
  }
  
  input ReportCreateInput {
    reporter: String!
    date: String!
    time:String!
    injuries: [InjuryCreateInput!]
  }
  
  type Mutation {
    createReport(input: ReportCreateInput!): Report
  }
`;
