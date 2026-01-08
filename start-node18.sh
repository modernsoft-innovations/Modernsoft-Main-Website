#!/bin/bash
# Wrapper script to force Node.js 18 if available
# This script tries to use Node.js 18 instead of 20

# Try to find Node.js 18
if command -v node18 &> /dev/null; then
    exec node18 "$@"
elif command -v node18.x &> /dev/null; then
    exec node18.x "$@"
else
    # Fallback to regular node (might still be 20)
    exec node "$@"
fi

