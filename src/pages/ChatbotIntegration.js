import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ChatbotIntegration() {
  const theme = useTheme();
  const navigate = useNavigate();

  const [integrationStatus, setIntegrationStatus] = useState(null);
  const [showChatbot, setShowChatbot] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const handleTestChatbot = () => {
    setShowChatbot(true);
  };

  const handleTestIntegration = () => {
    setIntegrationStatus('checking');

    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;
      setIntegrationStatus(isSuccess ? 'success' : 'failure');
    }, 2000);
  };

  const handleMailInstructions = () => {
    alert("Instructions have been sent to your developer's email!");
  };

  return (
    <div style={{
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: theme.colors.background,
      minHeight: '100vh',
      justifyContent: 'center',
      position: 'relative',
    }}>

      {/* ✅ Floating "Share Feedback" Button in Upper Right Corner */}
      <div style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        background: '#ffeb3b',
        padding: '8px 15px',
        borderRadius: '20px',
        fontWeight: 'bold',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        zIndex: '1000'
      }}>
        <a href="#" style={{ color: '#d32f2f', textDecoration: 'none' }}>💬 Share Feedback</a>
      </div>

      <h2 style={{ color: theme.colors.primary, fontFamily: theme.fonts.primary }}>
        Chatbot Integration & Testing
      </h2>

      {/* Test Chatbot Button */}
      <button
        onClick={handleTestChatbot}
        style={{
          padding: '12px',
          borderRadius: '8px',
          background: theme.colors.primary,
          color: '#fff',
          border: 'none',
          fontSize: '1rem',
          cursor: 'pointer',
          marginBottom: '15px',
        }}
      >
        Test Chatbot
      </button>

      {/* Show Dummy Chatbot (Bottom Right) */}
      {showChatbot && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: '#fff',
          padding: '10px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          width: '250px',
          height: '200px',
        }}>
          <p style={{ fontWeight: 'bold', textAlign: 'center' }}>Chatbot</p>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>Hello! How can I help you today?</p>
        </div>
      )}

      {/* Integrate on Website */}
      <button
        onClick={() => setShowInstructions(true)}
        style={{
          padding: '12px',
          borderRadius: '8px',
          background: theme.colors.secondary,
          color: '#fff',
          border: 'none',
          fontSize: '1rem',
          cursor: 'pointer',
          marginBottom: '15px',
        }}
      >
        Integrate on Your Website
      </button>

      {/* Show Integration Instructions */}
      {showInstructions && (
        <div style={{
          background: '#fff',
          padding: '15px',
          borderRadius: '8px',
          width: '350px',
          textAlign: 'center',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }}>
          <p>Copy and paste the following code into your website's &lt;head&gt; section:</p>
          <textarea
            readOnly
            value={`<script src="path_to_chatbot.js"></script>`}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              resize: 'none',
            }}
          />
          <button
            onClick={handleMailInstructions}
            style={{
              padding: '10px',
              borderRadius: '8px',
              background: '#00796b',
              color: '#fff',
              border: 'none',
              fontSize: '1rem',
              cursor: 'pointer',
              marginTop: '10px',
            }}
          >
            Mail Instructions to Developer
          </button>
        </div>
      )}

      {/* Test Integration Button */}
      <button
        onClick={handleTestIntegration}
        style={{
          padding: '12px',
          borderRadius: '8px',
          background: theme.colors.success,
          color: '#fff',
          border: 'none',
          fontSize: '1rem',
          cursor: 'pointer',
          marginTop: '20px',
        }}
      >
        Test Integration
      </button>

      {/* Show Integration Result */}
      {integrationStatus === 'checking' && <p>Checking integration...</p>}
      {integrationStatus === 'success' && (
        <motion.div
          style={{
            marginTop: '20px',
            padding: '15px',
            background: theme.colors.success,
            color: '#fff',
            borderRadius: '5px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>🎉 Integration Successful!</p>
          <button onClick={() => navigate('/integration-success')} style={{
            padding: '10px',
            borderRadius: '5px',
            background: theme.colors.primary,
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            marginTop: '10px',
          }}>
            Explore Admin Panel
          </button>

          <button onClick={() => alert('Start chatting with your chatbot!')} style={{
            padding: '10px',
            borderRadius: '5px',
            background: theme.colors.primary,
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            marginTop: '10px',
          }}>
            Start Talking to Chatbot
          </button>

          <button onClick={() => alert('Shared on Social Media!')} style={{
            padding: '10px',
            borderRadius: '5px',
            background: theme.colors.secondary,
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            marginTop: '10px',
          }}>
            Share on Social Media
          </button>
        </motion.div>
      )}

      {integrationStatus === 'failure' && (
        <div style={{
          marginTop: '20px',
          padding: '15px',
          background: theme.colors.error,
          color: '#fff',
          borderRadius: '5px',
        }}>
          <p>Integration Failed. Please try again.</p>
        </div>
      )}
    </div>
  );
}
