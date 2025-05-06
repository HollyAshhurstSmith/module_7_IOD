import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import BitcoinRates from './BitCoinRates';
import Navbar from './components/Navbar';
import Emoji from './Emoji';

import { EmojiProvider } from './EmojiContext';

// MUI Theme
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'; 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <EmojiProvider>
        <Router>
          <Navbar />
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/bitcoin" element={<BitcoinRates />} />
            </Routes>
          </div>
        </Router>
      </EmojiProvider>
    </ThemeProvider>
  );
}

export default App;
