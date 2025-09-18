const { spawn } = require('child_process');
const path = require('path');

console.log('Starting CAD Project Development Servers...\n');

// Change to the server directory and start the email service
const emailService = spawn('npm', ['run', 'dev'], {
  cwd: path.join(process.cwd(), 'server'),
  stdio: 'inherit',
  shell: true
});

// Start the frontend development server
const frontend = spawn('npm', ['run', 'dev'], {
  cwd: process.cwd(),
  stdio: 'inherit',
  shell: true
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\nShutting down servers...');
  emailService.kill();
  frontend.kill();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\nShutting down servers...');
  emailService.kill();
  frontend.kill();
  process.exit(0);
});

emailService.on('error', (error) => {
  console.error('Error starting email service:', error);
});

frontend.on('error', (error) => {
  console.error('Error starting frontend:', error);
});