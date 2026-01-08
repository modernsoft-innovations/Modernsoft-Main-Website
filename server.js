// Log current environment for debugging
console.log('NODE_OPTIONS:', process.env.NODE_OPTIONS || 'NOT SET')
console.log('NODE_ENV:', process.env.NODE_ENV || 'NOT SET')

// Check Node.js version
const nodeVersion = process.version
console.log('Node.js version:', nodeVersion)
if (nodeVersion.startsWith('v20.')) {
  console.error('⚠️  WARNING: Node.js 20 detected!')
  console.error('   Node.js 20 has undici built-in which causes WebAssembly errors.')
  console.error('   RECOMMENDED: Change Node.js version to 18.x or 16.x in cPanel')
} else if (nodeVersion.startsWith('v18.')) {
  console.error('⚠️  WARNING: Node.js 18 detected!')
  console.error('   Node.js 18 also has undici which may cause WebAssembly errors.')
  console.error('   If you see WebAssembly errors, try:')
  console.error('   1. Set NODE_OPTIONS=--no-wasm in cPanel Environment Variables')
  console.error('   2. Or change to Node.js 16.x (doesn\'t have undici)')
  console.error('   3. Or contact hosting provider to increase WebAssembly memory limits')
}

// Verify Next.js version
try {
  const nextVersion = require('next/package.json').version
  console.log('Next.js version:', nextVersion)
  if (nextVersion.startsWith('15.')) {
    console.error('⚠️  WARNING: Next.js 15 detected! You need to:')
    console.error('   1. Delete node_modules folder')
    console.error('   2. Delete pnpm-lock.yaml')
    console.error('   3. Run npm install again')
    console.error('   4. Verify package.json has "next": "14.2.18"')
  }
} catch (e) {
  console.error('Could not detect Next.js version:', e.message)
}

const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

// cPanel will set PORT and HOSTNAME environment variables
const port = process.env.PORT || 3000
const hostname = process.env.HOSTNAME || '0.0.0.0'
const isProduction = process.env.NODE_ENV === 'production'

// Create the Next.js app
// Use production mode if NODE_ENV is set to production, otherwise use production build
const app = next({ 
  dev: false, // Use production build (requires npm run build first)
  hostname,
  port 
})

const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, hostname, (err) => {
    if (err) throw err
    console.log(`> Server ready on http://${hostname}:${port}`)
  })
}).catch((err) => {
  console.error('Failed to start server:', err.message)
  if (err.message && err.message.includes('production build')) {
    console.error('\n❌ ERROR: Production build not found!')
    console.error('📦 Please run: npm run build')
    console.error('   Then restart the application.\n')
  }
  process.exit(1)
})

