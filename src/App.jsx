import React from "react"
import Header from "./components/Header"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import "./assets/css/ecommerce.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/sign-up" element={<h1>Sign Up</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
