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
  }
`;

export const GET_REPORTER_ANALYTICS = gql`
  query AnalyticsData {
    analyticsData {
      dateData {
        noOfReports
        date
      }
      reporterData {
        noOfReports
        reporter
      }
      injuryData {
        body_part
        noOfReports
      }
    }
  }
`;

export const GET_REPORT_BY_ID  = gql`
query Report($reportId: ID!) {
  report(id: $reportId) {
    id
    reporter
    date
    time
    injuries {
      body_part
      description
      injury_id
    }
  }
}`