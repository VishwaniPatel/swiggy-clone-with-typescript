import React from "react";
import { Container, MantineProvider } from "@mantine/core";
import HeaderUI from "./components/Header/HeaderUI";
import MainSection from "./components/Main/MainSection";
import RootLayout from "./pages/Root";
import RestaurantDetails from "./pages/RestaurantDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Define types for links and routes
interface Link {
  link: string;
  label: string;
}

interface Route {
  path: string;
  element: React.ReactNode;
  children?: Route[];
}

const router: Route[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <MainSection />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetails />,
      },
    ],
  },
];

const links: Link[] = [
  {
    link: "home",
    label: "Home",
  },
  {
    link: "restaurants",
    label: "Restaurants",
  },
  {
    link: "about",
    label: "About",
  },
  {
    link: "contact",
    label: "Contact",
  },
];

function App(): React.FC {
  return (
    <MantineProvider>
      <Container size="xl" px="xs">
        <HeaderUI links={links} />
        <RouterProvider router={router}></RouterProvider>
      </Container>
    </MantineProvider>
  );
}

export default App;
