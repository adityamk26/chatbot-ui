# Chatbot Setup Application

## Overview

The Chatbot Setup Application is a multi-step demo platform that simulates the process of integrating an AI chatbot into a client's website. The application includes:

- **User Registration:**  
  - Users register with their full name, email, and password.
  - A simulated email verification process is provided (use the dummy code `123456`).
  - Option to "Continue with Google" (simulated) is available.

- **Setup Organization:**  
  - Users provide their company details including company name, website URL, and company description.
  - The application simulates auto-fetching a meta description from the provided website URL.
  - A dummy website scraping process is triggered, and a list of scraped pages (with statuses such as "scraped" or "pending") is displayed.
  - Users can click on any scraped page to view detailed data chunks.
  - Once the process is complete, users can continue to the Chatbot Integration step.

- **Chatbot Integration & Testing:**  
  - Users can test the chatbot via a "Test Chatbot" button, which displays a dummy chatbot widget in the bottom-right corner.
  - An "Integrate on Your Website" button provides integration instructions, including a dummy `<script>` tag for insertion in the website’s `<head>` section and an option to email the instructions.
  - A "Test Integration" button simulates checking if the chatbot is correctly integrated, and displays either a success UI (with options to explore the admin panel, start talking to the chatbot, and share on social media) or a failure message.
  - A floating "Share Feedback" button is fixed in the upper-right corner for users to provide feedback.

- **Navigation & Logout:**  
  - A fixed navigation bar is positioned at the upper-left corner with links to Home, Setup Organization, and Chatbot Integration, along with a Logout button.

## Live Website

You can view the live website here:  
[https://chatbot-ui-xi-blue.vercel.app/]  


## Technologies Used

- **React** – for building the user interface.
- **React Router DOM** – for routing between pages.
- **Styled Components** – for component-level styling.
- **Framer Motion** – for animations and smooth transitions.

## Installation

To run the application locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/adityamk26/chatbot-setup-app.git
