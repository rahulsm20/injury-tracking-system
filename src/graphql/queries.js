import { gql } from "@apollo/client";


export const GET_REPORTS = gql`
query AllReports {
  allReports {
    id
    date
    injuries {
      body_part
      description
    }
    reporter
    time
  }
}`;
