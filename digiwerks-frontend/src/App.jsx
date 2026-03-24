import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from './components/Layout';
import ArtistDashboard from './pages/ArtistDashboard';
import BrowseProjects from './pages/BrowseProjects';
import ProjectWorkspace from './pages/ProjectWorkspace';
import AssetWorkspace from './pages/AssetWorkspace';
import EditArtist from './pages/EditArtistPage';
import CreateProject from './pages/CreateProjectPage';

import SignupArtist from './pages/SignupArtistPage';
import LoginArtist from './pages/LoginArtist';

import EditProject from './pages/EditProjectPage';

import CreateStage from './pages/CreateStagePage';
import EditStage from './pages/EditStagePage';

import CreateAsset from './pages/CreateAssetPage';
import EditAsset from './pages/EditAssetPage';

import CreateVersion from './pages/CreateVersionPage';
import EditVersion from './pages/EditVersionPage';


export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<p>Landing page placeholder</p>}/>
        <Route path="/artist/new" element={<SignupArtist />}/>
        <Route path="/artist/login" element={<LoginArtist />} />
        <Route path="/artist/edit" element={<EditArtist />} />
        <Route path="/artist/dashboard" element={<ArtistDashboard />} />
        
        <Route path="/project/create" element={<CreateProject />} />
        <Route path="/project/edit" element={<EditProject />} />

        <Route path="/project_stage/create" element={<CreateStage />} />
        <Route path="/project_stage/edit" element={<EditStage />} />

        <Route path="/project_asset/create" element={<CreateAsset />} />
        <Route path="/project_asset/edit" element={<EditAsset />} />

        <Route path="/version/create" element={<CreateVersion />} />
        <Route path="/version/edit" element={<EditVersion />} />

        <Route path="/browse_projects" element={<BrowseProjects />} />
        {/* <Route path="/project_workspace" element={<ProjectWorkspace />} /> */}
        <Route path="/projects/:id" element={<ProjectWorkspace />} /> {/* workspace */}
        <Route path="/project_assets/:id" element={<AssetWorkspace />} />
      </Routes>
    </Layout>    
  );
}
