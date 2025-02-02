import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function OrganizationSetup() {
  const theme = useTheme();
  const navigate = useNavigate();

  // Form fields
  const [companyName, setCompanyName] = useState('');
  const [companyURL, setCompanyURL] = useState('');
  const [companyDesc, setCompanyDesc] = useState('');

  // Auto-fetched meta description (simulated)
  const [metaDescription, setMetaDescription] = useState('');

  // Dummy scraped data
  const [scrapedData, setScrapedData] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);

  // Loading state while "scraping"
  const [isScraping, setIsScraping] = useState(false);

  // Called when the user submits the form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!companyURL) {
      alert("Please enter a valid website URL.");
      return;
    }

    // Simulate auto-fetching the meta description
    setMetaDescription("This is a dummy meta description auto-fetched from the website.");

    // Start simulating website scraping
    setIsScraping(true);

    // Simulate a delay (e.g., 2 seconds) as if the backend is scraping the website
    setTimeout(() => {
      setScrapedData([
        { 
          url: `${companyURL}/about`, 
          status: 'scraped', 
          dataChunks: ['About Us: Our mission, vision, and history.'] 
        },
        { 
          url: `${companyURL}/services`, 
          status: 'pending', 
          dataChunks: [] 
        },
        { 
          url: `${companyURL}/contact`, 
          status: 'scraped', 
          dataChunks: ['Contact Information: Phone, Email, Address.'] 
        }
      ]);
      setIsScraping(false);
    }, 2000);

    alert("Website scraping has started!");
  };

  // Called when the user clicks on a scraped page to see details
  const handlePageClick = (page) => {
    setSelectedPage(page);
  };

  return (
    <div
      style={{
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: theme.colors.background,
        minHeight: '100vh',
        justifyContent: 'center'
      }}
    >
      <h2 style={{ color: theme.colors.primary, fontFamily: theme.fonts.primary }}>
        Setup Organization
      </h2>

      {/* Organization details form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          width: '320px',
          background: '#fff',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)'
        }}
      >
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
          style={{
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />

        <input
          type="url"
          placeholder="Company Website URL"
          value={companyURL}
          onChange={(e) => setCompanyURL(e.target.value)}
          required
          style={{
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />

        <textarea
          placeholder="Company Description"
          value={companyDesc}
          onChange={(e) => setCompanyDesc(e.target.value)}
          required
          style={{
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            resize: 'none',
            height: '100px'
          }}
        />

        <button
          type="submit"
          style={{
            padding: '12px',
            borderRadius: '8px',
            background: theme.colors.primary,
            color: '#fff',
            border: 'none',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Submit Organization Details
        </button>
      </form>

      {/* Show the auto-fetched meta description if available */}
      {metaDescription && (
        <div
          style={{
            marginTop: '20px',
            width: '320px',
            background: '#fff',
            padding: '15px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
        >
          <h4>Auto-Fetched Meta Description:</h4>
          <p>{metaDescription}</p>
        </div>
      )}

      {/* Loading indicator while scraping */}
      {isScraping && (
        <p style={{ marginTop: '20px', color: theme.colors.primary }}>
          Scraping website data... Please wait.
        </p>
      )}

      {/* Display scraped data only after scraping is complete */}
      {scrapedData.length > 0 && !isScraping && (
        <div
          style={{
            marginTop: '30px',
            width: '350px',
            background: '#fff',
            padding: '15px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
        >
          <h3>Scraped Web Pages:</h3>
          {scrapedData.map((page, index) => (
            <div
              key={index}
              style={{
                backgroundColor:
                  page.status === 'scraped'
                    ? theme.colors.success
                    : theme.colors.error,
                color: '#fff',
                marginBottom: '10px',
                padding: '12px',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
              onClick={() => handlePageClick(page)}
            >
              <p>{page.url}</p>
              <p>Status: {page.status}</p>
            </div>
          ))}
        </div>
      )}

      {/* Display detailed scraped data for a selected page */}
      {selectedPage && (
        <div
          style={{
            marginTop: '30px',
            width: '350px',
            background: '#fff',
            padding: '15px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
        >
          <h4>Scraped Data for: {selectedPage.url}</h4>
          {selectedPage.dataChunks.length > 0 ? (
            selectedPage.dataChunks.map((chunk, index) => (
              <p key={index}>{chunk}</p>
            ))
          ) : (
            <p>No data available for this page.</p>
          )}
        </div>
      )}

      {/* Proceed button appears only when scraped data is available */}
      {scrapedData.length > 0 && !isScraping && (
        <button
          onClick={() => navigate('/chatbot-integration')}
          style={{
            marginTop: '20px',
            padding: '12px',
            borderRadius: '8px',
            background: theme.colors.primary,
            color: '#fff',
            border: 'none',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Continue to Chatbot Integration
        </button>
      )}
    </div>
  );
}
