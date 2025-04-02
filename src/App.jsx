import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { ThemeProvider, createTheme } from '@mui/material';
import FindJobs from './pages/FindJobs'
import FindTalent from './pages/FindTalent'
import AboutUs from './pages/AboutUs'
import UploadJobs from './pages/UploadJobs'

export default function App() {
  const theme = createTheme({
    palette: {
      mineShaft: {
        main: '#6d6d6d', // Use the main color from your range
        light: '#888888', // Lighter shade
        dark: '#454545',  // Darker shade
      },
      brightSun: {
        main: '#ffbd20', // Use the main color from your range
        light: '#fffbeb', // Lighter shade
        dark: '#7a330d',  // Darker shade
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/findjobs" element={<FindJobs />} />
          <Route path="/findtalent" element={<FindTalent />} />
          <Route path="/uploadjobs" element={<UploadJobs />} />
          <Route path="/aboutus " element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
