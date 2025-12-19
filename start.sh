#!/bin/bash

# ADHYA Designer Studio - Quick Start Script
# Run this to ensure everything is set up correctly

echo "🌸 ADHYA Designer Studio - Setup Verification"
echo "=============================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in project directory"
    echo "Please run: cd /Users/rubeenakhan/Desktop/ADHYA/designer-studio"
    exit 1
fi

echo "✅ In correct directory"
echo ""

# Check Node.js version
echo "📦 Checking Node.js version..."
node --version
echo ""

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📥 Installing dependencies..."
    npm install
else
    echo "✅ Dependencies already installed"
fi
echo ""

# Display project info
echo "🎨 Project Setup:"
echo "   • Framework: Next.js 16.1.0"
echo "   • Styling: Tailwind CSS 4"
echo "   • Animations: Framer Motion"
echo "   • Language: TypeScript"
echo ""

echo "📄 Pages Created:"
echo "   • Home (/)"
echo "   • About (/about)"
echo "   • Services (/services)"
echo "   • Collections (/collections)"
echo "   • Design Process (/design-process)"
echo "   • Book Discussion (/book-discussion)"
echo "   • Testimonials (/testimonials)"
echo "   • FAQ (/faq)"
echo "   • Contact (/contact)"
echo ""

echo "🚀 Starting development server..."
echo "   Local: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start the dev server
npm run dev
