import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function ChatbotIntegration() {
  const theme = useTheme();
  const [integrationStatus, setIntegrationStatus] = useState(null);
  const navigate = useNavigate();

  const handleTestChatbot = () => {
    // Simulating chatbot test
    setIntegrationStatus('testing');
  };

  const handleTestSuccess = () => {
    setIntegrationStatus('success');
  };

  const handleTestFailure = () => {
    setIntegrationStatus('failure');
  };

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', background: theme.colors.background }}>
      <h2 style={{ color: theme.colors.primary, fontFamily: theme.fonts.primary }}>Chatbot Integration</h2>
      
      <button onClick={handleTestChatbot} style={{ padding: '10px', borderRadius: '5px', background: theme.colors.primary, color: '#fff', border: 'none' }}>
        Test Chatbot
      </button>

      <button onClick={handleTestSuccess} style={{ padding: '10px', borderRadius: '5px', background: theme.colors.secondary, color: '#fff', border: 'none' }}>
        Integrate on Your Website
      </button>

      {integrationStatus === 'testing' && <p>Chatbot is being tested...</p>}

      {integrationStatus === 'success' && (
        <div style={{ background: theme.colors.success, color: '#fff', padding: '20px', borderRadius: '5px' }}>
          <p>Integration Successful!</p>
          <button onClick={() => navigate('/integration-success')} style={{ padding: '10px', borderRadius: '5px', background: theme.colors.primary, color: '#fff', border: 'none' }}>
            Explore Admin Panel
          </button>
          <button onClick={() => alert('Start chatting with your chatbot!')} style={{ padding: '10px', borderRadius: '5px', background: theme.colors.primary, color: '#fff', border: 'none' }}>
            Start Chatting
          </button>
        </div>
      )}

      {integrationStatus === 'failure' && (
        <div style={{ background: theme.colors.error, color: '#fff', padding: '20px', borderRadius: '5px' }}>
          <p>Integration Failed. Please try again.</p>
        </div>
      )}
    </div>
  );
}
