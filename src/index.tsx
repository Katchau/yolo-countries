import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from './App';
import './index.css';

const apolloClient = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

/**
 *
 *  Got this error once, just putting this here JIC
 *
 *   "devDependencies": {
 *     "@babel/plugin-proposal-private-property-in-object": "7.21.0"
 *   },
 *
 * */