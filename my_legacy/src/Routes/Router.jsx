import AppLayout from "../Layout/AppLayout";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../Pages/login/LoginPage";
import SignupPage from "../Pages/signup/SignupPage";
import MenuPage from "../Pages/menu/MenuPage";
import WordManagePage from "../Pages/wordManage/WordManagePage";
import Store_InventoryPage from "../Pages/storeAndInventory/Store_InventoryPage";
import TestChoicePage from "../Pages/normalTest/ChoicePage/TestChoicePage";
import NormalTestPage from "../Pages/normalTest/NormalTestPage";

const Router = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
        label: "login",
      },
      {
        path: "/signUp",
        element: <SignupPage />,
        label: "signup",
      },
      {
        path: "/menu",
        element: <MenuPage />,
        label: "menu",
      },
      {
        path: "/wordManage",
        element: <WordManagePage />,
        label: "wordManage",
      },
      {
        path: "/store",
        element: <Store_InventoryPage />,
        label: "store",
      },
      {
        path: "/testChoice",
        element: <TestChoicePage />,
        label: "testChoice",
      },
      {
        path: "/test",
        element: <NormalTestPage />,
        label: "test",
      },
      // {
      //   path: "/*",
      //   element: <NotFoundPage />,
      //   label: "notFound",
      // },
    ],
    // errorElement: <NotFoundPage />,
  },
];

export default Router;
