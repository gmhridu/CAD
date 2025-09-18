# Email Service for CAD Project

This is a simple Node.js server that handles email sending via Twilio SendGrid for the CAD project.

## Prerequisites

1. Node.js installed
2. Twilio SendGrid account with API key
3. Verified sender email address in SendGrid

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the server directory with the following variables:
   ```env
   # Twilio SendGrid API Key
   SENDGRID_API_KEY=your_sendgrid_api_key_here

   # Email configuration
   FROM_EMAIL=your_verified_sender_email@example.com
   RECIPIENT_EMAIL=your_recipient_email@example.com

   # Server configuration
   PORT=5000
   ```

3. Replace the placeholder values with your actual SendGrid API key and email addresses.

## Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on port 5000 (or the port specified in the PORT environment variable).

## API Endpoints

### Send Contact Form Email
- **URL**: `/send-email`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Inquiry",
    "message": "Your message here"
  }
  ```

### Send Simple Contact Form Email
- **URL**: `/send-simple-email`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "name": "John Doe",
    "message": "Your message here"
  }
  ```

## Integration with Frontend

The Vite development server is configured to proxy API requests to this email service. Make sure both servers are running:

1. Start the email service: `npm run dev` (in the server directory)
2. Start the frontend: `npm run dev` (in the root directory)

The frontend will automatically proxy requests to `/api/*` to this service.