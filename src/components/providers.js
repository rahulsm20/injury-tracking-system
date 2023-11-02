"use client";
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import store from "@/store/store";

export const Providers = ({children}) => {
  const client = new ApolloClient({
    uri: `/api`,
    cache: new InMemoryCache(),
  });
  return (
    <Provider store={store}>
    <ApolloProvider client={client}>{children}</ApolloProvider>
    </Provider>
    )
};
