import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupArtist from './pages/SignupArtist';
import LoginArtist from './pages/LoginArtist';
import './App.css'
import Layout from './components/Layout';
import ArtistDashboard from './pages/ArtistDashboard';
import BrowseProjects from './pages/BrowseProjects';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/signup_artist" element={<SignupArtist />} />
        <Route path="/login_artist" element={<LoginArtist />} />
        <Route path="/artist_dashboard" element={<ArtistDashboard />} />
        <Route path="/browse_projects" element={<BrowseProjects />} />
      </Routes>
    </Layout>    
  );
}
