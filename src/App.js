import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Registration from './pages/Registration'; 
import OrganizationSetup from './pages/OrganizationSetup'; 
import ChatbotIntegration from './pages/ChatbotIntegration'; 
import IntegrationSuccess from './pages/IntegrationSuccess';  
import GlobalStyles from './styles/GlobalStyles'; 
import { ThemeProvider } from 'styled-components'; 
import Navigation from './components/Navigation'; 
import Footer from './components/Footer';
import { motion } from 'framer-motion'; 

const theme = {
  colors: {
    primary: "#5AC8FA",
    secondary: "#0061F2",
    background: "#E1F5FE",
    text: "#1F2937",
    success: "#10B981",
    error: "#EF4444",
  },
  fonts: {
    primary: "Inter, sans-serif",
    secondary: "'Roboto', sans-serif",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <MainApp />
      </Router>
    </ThemeProvider>
  );
}

function MainApp() {
  const location = useLocation(); // Get the current page URL

  // Hide Navigation & Footer on Registration Page
  const hideNav = location.pathname === '/';

  return (
    <>
      {!hideNav && <Navigation />} {/* Show only after registration */}
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/setup-organization" element={<OrganizationSetup />} />
          <Route path="/chatbot-integration" element={<ChatbotIntegration />} />
          <Route path="/integration-success" element={<IntegrationSuccess />} />
        </Routes>
      </motion.div>
      
      {!hideNav && <Footer />} {/* Show only after registration */}
    </>
  );
}

export default App;
