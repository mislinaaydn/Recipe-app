import React from "react";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BasicAppShell } from "./layouts/BasicAppShell";
import "@mantine/core/styles.css";
import "./App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import MyRecipe from "./pages/MyRecipe";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import DetailPage from "./pages/Detail";
import AddRecipePage from "./pages/AddRecipe";

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<BasicAppShell></BasicAppShell>}>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/my-recipe" element={<MyRecipe />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/add-food" element={<AddRecipePage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />}></Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
