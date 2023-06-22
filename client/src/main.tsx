import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApolloProvider, apolloClient } from "./apolloClient";
import { AuthProvider } from "./context/authContext";
import "./style/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider>
    <ApolloProvider client={apolloClient}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  </AuthProvider>
);
