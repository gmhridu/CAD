# CAD Project with Contact Form and Email Service

This is a React-based CAD project with contact forms and email functionality using Twilio SendGrid.

## Project Overview

This project includes:
- A main contact form with name, email, subject, and message fields
- A simplified contact form in the GetInTouch component with name and message fields
- Email service using Twilio SendGrid for sending contact form submissions

## Frontend Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## Email Service Setup

This project includes a separate Node.js server for handling email sending via Twilio SendGrid.

### Prerequisites

1. Node.js installed
2. Twilio SendGrid account with API key
3. Verified sender email address in SendGrid

### Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory with the following variables:
   ```env
   # Twilio SendGrid API Key
   SENDGRID_API_KEY=your_sendgrid_api_key_here

   # Email configuration
   FROM_EMAIL=your_verified_sender_email@example.com
   RECIPIENT_EMAIL=your_recipient_email@example.com

   # Server configuration
   PORT=5000
   ```

4. Replace the placeholder values with your actual SendGrid API key and email addresses.

### Running the Email Service

#### Development Mode
```bash
npm run dev
```

#### Production Mode
```bash
npm start
```

The server will start on port 5000 (or the port specified in the PORT environment variable).

### Integration

The Vite development server is configured to proxy API requests to the email service. Make sure both servers are running:

1. Start the email service: `npm run dev` (in the server directory)
2. Start the frontend: `npm run dev` (in the root directory)

The frontend will automatically proxy requests to `/api/*` to the email service.

## Original React + TypeScript + Vite Template Information

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```