import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Screen from './pages/Screen'
import * as React from "react";
import { Route,Routes } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import ProductWidget from './components/ProductWidget';
import ProductsPage from './pages/ProductsPage';
function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<Screen />}>
        <Route
          path="/"
          element={<FrontPage />}
        />
        <Route path="tasks" element={<ProductsPage/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
