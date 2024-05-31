import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Router from "./Routes/Router";

// 가져올 데이터들 : user, word, test, question
const router = createBrowserRouter(Router);

function App() {
  return (
    // <DataProvider>
    <RouterProvider router={router} />
    // </DataProvider>
  );
}

export default App;
