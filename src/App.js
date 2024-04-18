// ./src/App.js
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import { LanguageProvider } from "./LanguageContext";
import DisplayName from "./pages/Displayname/DisplayName";
import UpdateName from "./pages/UpdateName/UpdateName";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/display" element={<DisplayName />} />
              <Route path="/update" element={<UpdateName />} />
            </Route>
          </Routes>
        </Provider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
