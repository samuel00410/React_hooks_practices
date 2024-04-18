// ./src/App.js
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import { LanguageProvider } from "./LanguageContext";

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
