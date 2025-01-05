import React from "react";
import "../css/app.css";
import { Link, Route, Switch } from "react-router-dom";
import { Container, Box, Button, Stack, Typography } from "@mui/material";
import { HomePage } from "./screens/homePage";
import { ProductsPage } from "./screens/productsPage";
import { OrdersPage } from "./screens/ordersPage";
import { UserPage } from "./screens/userPage";
import { HomeNavbar } from "./screens/components/header/HomeNavbar";
import { Footer } from "./screens/components/footer";

function App() {

  return (
    <>
      

     <HomeNavbar/>

      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>

      <Footer/>
    </>
  );
}



export default App;
