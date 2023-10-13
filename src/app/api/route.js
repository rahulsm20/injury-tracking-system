// import { prisma } from "../../../prisma/db";
// export async function POST(req, res) {
//   const { reporter, datetime, injuries } = await req.json();
//   try {
//     await prisma.report.create({
//       data: {
//         reporter: reporter,
//         datetime: datetime,
//         injuries: injuries,
//       },
//     });
//     return Response.json("Created report successfully");
//   } catch (err) {
//     return new Response(`Error: ${err}`, {
//       status: 404,
//     });
//   }
// }
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { resolvers } from '@/graphql/resolvers';
import { typeDefs } from '@/graphql/schema';

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
