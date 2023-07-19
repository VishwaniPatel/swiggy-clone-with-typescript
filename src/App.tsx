import React from "react";
import { Container, MantineProvider } from "@mantine/core";
import HeaderUI from "./components/Header/HeaderUI";
import MainSection from "./components/Main/MainSection";
import RootLayout from "./pages/Root";
import RestaurantDetails from "./pages/RestaurantDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const links = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/restaurants",
    label: "Restaurants",
  },
  {
    link: "/about",
    label: "About",
  },
  {
    link: "/contact",
    label: "Contact",
  },
];

function App() {
  return (
    <MantineProvider>
      <Container size="xl" px="xs">
        <HeaderUI links={links} />
        <Router>
          <Routes>
            <Route path="/" element={<RootLayout />} />
            <Route path="/restaurants" element={<MainSection />} />
            <Route path="/restaurant/:resId" element={<RestaurantDetails />} />
          </Routes>
        </Router>
      </Container>
    </MantineProvider>
  );
}

export default App;
