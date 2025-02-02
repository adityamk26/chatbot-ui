import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

export default function Registration() {
  const theme = useTheme();
  const navigate = useNavigate();

  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [userEnteredCode, setUserEnteredCode] = useState('');

  const handleSendCode = () => {
    if (email) {
      setEmailSent(true);
      setVerificationCode('123456'); // Simulating a backend-generated code
      alert('A verification code has been sent to your email! (Use 123456 for demo)');
    } else {
      alert('Please enter a valid email.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userEnteredCode === verificationCode) {
      navigate('/setup-organization');
    } else {
      alert('Invalid verification code. Please try again.');
    }
  };

  // Simulated Google Sign-in
  const handleGoogleSignIn = () => {
    alert('Google Sign-In Clicked! (Integrate real OAuth here)');
    navigate('/setup-organization'); // Simulate successful login
  };

  return (
    <div style={{
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: theme.colors.background,
      height: '100vh',
      justifyContent: 'center'
    }}>
      <h2 style={{
        color: theme.colors.primary,
        fontFamily: theme.fonts.primary,
        marginBottom: '10px'
      }}>Create an Account</h2>

      <p style={{ color: '#666', marginBottom: '20px' }}>Join us and get started in minutes!</p>

      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        width: '320px',
        background: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)'
      }}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />

        {!emailSent ? (
          <button type="button" onClick={handleSendCode} style={{
            padding: '12px',
            borderRadius: '8px',
            background: theme.colors.primary,
            color: '#fff',
            border: 'none',
            fontSize: '1rem',
            cursor: 'pointer'
          }}>
            Send Verification Code
          </button>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter Verification Code"
              value={userEnteredCode}
              onChange={(e) => setUserEnteredCode(e.target.value)}
              required
              style={{
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '1rem'
              }}
            />
            <button type="submit" style={{
              padding: '12px',
              borderRadius: '8px',
              background: theme.colors.primary,
              color: '#fff',
              border: 'none',
              fontSize: '1rem',
              cursor: 'pointer'
            }}>
              Verify & Register
            </button>
          </>
        )}

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
          <hr style={{ flex: 1, border: 'none', height: '1px', backgroundColor: '#ccc' }} />
          <span style={{ padding: '0 10px', color: '#888' }}>OR</span>
          <hr style={{ flex: 1, border: 'none', height: '1px', backgroundColor: '#ccc' }} />
        </div>

        {/* Google Sign-In Button at the Bottom */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          style={{
            padding: '12px',
            borderRadius: '8px',
            background: '#DB4437',
            color: '#fff',
            border: 'none',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Continue with Google
        </button>
      </form>

      {/* Sign-in link */}
      <p style={{ marginTop: '20px', fontSize: '0.9rem', color: '#444' }}>
        Already have an account? <a href="/login" style={{ color: theme.colors.primary, fontWeight: 'bold', textDecoration: 'none' }}>Sign in</a>
      </p>
    </div>
  );
}
