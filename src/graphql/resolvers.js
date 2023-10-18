import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    report: async (_, { id }) => {
      try {
        const report = await prisma.report.findUnique({
          where: { id: Number(id) },
          include: {
            injuries: true,
          },
        });
        return report;
      } catch (error) {
        throw new Error(`Error fetching report: ${error.message}`);
      }
    },
    allReports: async (_parents, _args, context) => {
      try {
        const allreports = await prisma.report.findMany({
          include: { injuries: true },
        });
        return allreports;
      } catch (err) {
        throw new Error(`Error fetching report: ${err}`);
      }
    },
    analyticsData: async (_parents, _args, context) => {
      try {
        const reports = await prisma.report.findMany();
        const injuries = await prisma.injury.findMany();
        const reporterCounts = {};
        const dateCounts = {};
        const bodyPartCount = {};
        reports.forEach((report) => {
          const reporter = report.reporter.trim();
          const date = report.date;
          if (reporter in reporterCounts) {
            reporterCounts[reporter]++;
          } else {
            reporterCounts[reporter] = 1;
          }
          if (date in dateCounts) {
            dateCounts[date]++;
          } else {
            dateCounts[date] = 1;
          }
        });

        injuries.forEach((injury) => {
          const bodyPart = injury.body_part;
          if (bodyPart in bodyPartCount) {
            bodyPartCount[bodyPart]++;
          } else {
            bodyPartCount[bodyPart] = 1;
          }
        });

        const reporterData = Object.keys(reporterCounts).map((reporter) => ({
          reporter: reporter,
          noOfReports: reporterCounts[reporter],
        }));
        const dateCountObj = Object.keys(dateCounts).map((date) => ({
          date: date,
          noOfReports: dateCounts[date],
        }));
        const injuryObj = Object.keys(bodyPartCount).map((bodyPart) => ({
          body_part: bodyPart,
          noOfReports: bodyPartCount[bodyPart],
        }));
        const result = { reporterData: reporterData, dateData: dateCountObj, injuryData:injuryObj};
        return result;
      } catch (err) {
        throw new Error(`error fetching report counts : ${err}`);
      }
    },
  },
  Report: {
    injuries: (report) => report.injuries,
  },
  Mutation: {
    createReport: async (_, { input }) => {
      const { reporter, date, time, injuries } = input;
      try {
        const createdReport = await prisma.report.create({
          data: {
            reporter: reporter,
            date: date,
            time: time,
            injuries: {
              create: injuries,
            },
          },
          include: {
            injuries: true,
          },
        });
        return createdReport;
      } catch (err) {
        return `${err}`;
      }
    },
  },
};

export default resolvers;
