import { gql } from "@apollo/client";

export const CREATE_REPORT = gql`
  mutation Mutation($input: ReportCreateInput!) {
    createReport(input: $input) {
      date
      time
      reporter
      injuries {
        body_part
        description
      }
    }
  }
`;
