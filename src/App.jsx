import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";


function App() {
  return (
    <>

      <Navbar />

      <Routes>

        {/* Public Website */}

        <Route path="/" element={<Home />} />

        <Route 
          path="/products" 
          element={<Products />} 
        />

        <Route 
          path="/about" 
          element={<About />} 
        />

        <Route 
          path="/contact" 
          element={<Contact />} 
        />

        <Route 
          path="/quote" 
          element={<Quote />} 
        />


        {/* Admin */}

        <Route
          path="/kv-admin/login"
          element={<Login />}
        />

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

      </Routes>


      <Footer />

    </>
  );
}

export default App;