import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About"
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Payment from './components/Payment';
import ContactUs from './pages/ContactUs';
import TermsOfService from './pages/TermsOfServices';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Ticket from './pages/Ticket';
import AdminSignup from './admin/Adminsignup';
import AdminSignin from './admin/Adminsignin';
import AdminDashboard from './pages/AdminDashboard';
import Protected from './components/Protected';

export default function App() {
  return (
    <div>
        <BrowserRouter>
        <div className='app'>
        <div className="content">
       <Navbar />
        <Routes>
        <Route path="/" element={<Home />}></Route> 
        <Route path="/about" element={<About />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path='/contactUs' element={<ContactUs />}> </Route>
        <Route path='/termsOfServices' element={<TermsOfService />}> </Route>
        <Route path='/policy' element={<PrivacyPolicy />}> </Route>
        <Route path='/ticket' element={<Ticket />}> </Route>
        <Route path="/adminsignup" element={<AdminSignup />} />
        <Route path="/adminsignin" element={<AdminSignin />} />
        <Route path="/admin-dashboard" element={<Protected Component={AdminDashboard} />} />

        </Routes>
            </div>
          <Footer />
        </div>
      </BrowserRouter>
   
         
    </div>
  )
}

