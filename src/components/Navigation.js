import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav style={{
      position: 'fixed',
      top: '10px',
      left: '10px',
      background: 'rgb(90, 200, 250)',
      padding: '12px 25px',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      zIndex: '1000'
    }}>
      {/* Home Link */}
      <Link to="/" style={{
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'color 0.3s',
      }}
      onMouseEnter={(e) => e.target.style.color = '#FFD700'}
      onMouseLeave={(e) => e.target.style.color = '#fff'}
      >
        Home
      </Link>

      {/* Setup Organization */}
      <Link to="/setup-organization" style={{
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'color 0.3s',
      }}
      onMouseEnter={(e) => e.target.style.color = '#FFD700'}
      onMouseLeave={(e) => e.target.style.color = '#fff'}
      >
        Setup Organization
      </Link>

      {/* Chatbot Integration */}
      <Link to="/chatbot-integration" style={{
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'color 0.3s',
      }}
      onMouseEnter={(e) => e.target.style.color = '#FFD700'}
      onMouseLeave={(e) => e.target.style.color = '#fff'}
      >
        Chatbot Integration
      </Link>

      {/* Logout Button */}
      <button
        onClick={() => alert("Logged out successfully!")}
        style={{
          background: '#ff4b5c',
          color: '#fff',
          border: 'none',
          padding: '8px 15px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'background 0.3s',
        }}
        onMouseEnter={(e) => e.target.style.background = '#d43f50'}
        onMouseLeave={(e) => e.target.style.background = '#ff4b5c'}
      >
        Logout
      </button>
    </nav>
  );
}
