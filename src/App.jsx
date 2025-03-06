import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import "./App.css"
import "./components/Animations.css"
import Layout from "./components/Layout"
import  Products  from "./pages/Products"
import { Faq } from "./pages/Faq"
import { ContactUs } from "./pages/ContactUs"
import Home from "./pages/Home"
import "./components/Responsivness.css"

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path="products" element={<Products/>} />
      <Route path="contactUs" element={<ContactUs/>}/>
      <Route path="Faq" element={<Faq/>}/>
      </Route>
      </Routes>
    </Router>
  )
}

export default App
