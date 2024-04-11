# Tanstack-Query Reference

## Introduction

Powerful asynchronous state management for React.

## Contents

---

## Setup

To enable Tanstack-Query within the Project, a Provider must be created to Wrap the whole Contents.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
```

---

## Tanstack-Query Hooks

There are 2 types of Hooks

1. useQuery Hook:

   - This Hook is used to perform GET request to the server.

2. useMutation Hook:

   - This Hook is used to perform POST request to the server.
