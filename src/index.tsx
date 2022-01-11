import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { QueryClient, QueryClientProvider } from "react-query";

import { AuthProvider } from "./config";
import { App } from "./App";

process.env.REACT_APP_ENVIRONMENT === "production" &&
  Sentry.init({
    dsn: "https://b1a4703aa6db4d29a5557fdf1583f9b8@o1112338.ingest.sentry.io/6141869",
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
);
