// Script to help downgrade to Next.js 14 for cPanel compatibility
// Run this locally, then update package.json manually

console.log(`
To downgrade to Next.js 14 (which doesn't use WebAssembly):

1. Edit package.json and change:
   "next": "15.5.4"  →  "next": "14.2.18"
   
   "react": "19.1.0"  →  "react": "^18.3.1"
   "react-dom": "19.1.0"  →  "react-dom": "^18.3.1"

2. In cPanel:
   - Delete node_modules folder
   - Delete pnpm-lock.yaml (or package-lock.json)
   - Click "Run NPM Install"
   - Run: npm run build
   - Restart application

This will avoid the WebAssembly memory error completely.
`)

