"use client";
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const Providers = ({children}) => {
  const client = new ApolloClient({
    uri: "http://localhost:3000/api",
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
