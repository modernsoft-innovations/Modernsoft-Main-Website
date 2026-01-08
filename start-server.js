#!/usr/bin/env node
// Wrapper script to start the server
// NOTE: NODE_OPTIONS must be set in cPanel Environment Variables, not here
// This script just provides a cleaner entry point

// Log current memory settings for debugging
if (process.env.NODE_OPTIONS) {
  console.log('NODE_OPTIONS:', process.env.NODE_OPTIONS)
} else {
  console.warn('⚠️  WARNING: NODE_OPTIONS not set!')
  console.warn('   Please set in cPanel: NODE_OPTIONS=--max-old-space-size=512 --no-experimental-wasm-modules')
}

// Now require and start the actual server
require('./server.js')

