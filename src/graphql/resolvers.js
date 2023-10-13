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
