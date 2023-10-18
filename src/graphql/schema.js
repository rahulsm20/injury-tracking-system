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
  type Query {
    analyticsData: AnalyticsData!
  }
  
  type AnalyticsData {
    reporterData: [ReporterCount]!
    dateData: [DateCount]!
    injuryData:[BodyPartCount]!
  }
  
  type ReporterCount {
    reporter: String!
    noOfReports: Int!
  }
  
  type DateCount {
    date: String!
    noOfReports: Int!
  }
  type BodyPartCount{
    body_part:String!,
    noOfReports:Int!
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
