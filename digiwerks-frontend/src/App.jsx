import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupArtist from './pages/SignupArtist';
import LoginArtist from './pages/LoginArtist';
import './App.css'
import Layout from './components/ui/Layout';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/signup_artist" element={<SignupArtist />} />
        <Route path="/login_artist" element={<LoginArtist />} />
      </Routes>
    </Layout>    
  );
}
