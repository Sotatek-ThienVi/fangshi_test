#!/bin/bash

# 📦 Export Script for "Phong Thủy Vượng Khí"
# This script helps you export the entire project structure

echo "🎯 Starting Export Process..."
echo ""

# Create export directory
EXPORT_DIR="phong-thuy-vuong-khi-export-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$EXPORT_DIR"

echo "📁 Created export directory: $EXPORT_DIR"
echo ""

# Export structure
mkdir -p "$EXPORT_DIR/src/app/components/ui"
mkdir -p "$EXPORT_DIR/src/app/components/figma"
mkdir -p "$EXPORT_DIR/src/app/pages"
mkdir -p "$EXPORT_DIR/src/app/data"
mkdir -p "$EXPORT_DIR/src/app/store"
mkdir -p "$EXPORT_DIR/src/styles"

echo "✅ Created folder structure"
echo ""

# List of files to export
echo "📋 Files to export:"
echo ""

echo "Configuration Files:"
echo "  - package.json"
echo "  - vite.config.ts"
echo "  - postcss.config.mjs"
echo "  - tsconfig.json (if exists)"
echo ""

echo "Styles:"
echo "  - src/styles/theme.css"
echo "  - src/styles/fonts.css"
echo "  - src/styles/tailwind.css"
echo "  - src/styles/index.css"
echo ""

echo "Data & Store:"
echo "  - src/app/data/mockData.ts"
echo "  - src/app/store/cartStore.ts"
echo ""

echo "Components:"
echo "  - src/app/components/Layout.tsx"
echo "  - src/app/components/ScrollToTop.tsx"
echo "  - src/app/components/figma/ImageWithFallback.tsx"
echo "  - src/app/components/ui/* (all UI components)"
echo ""

echo "Pages:"
echo "  - src/app/pages/Home.tsx"
echo "  - src/app/pages/Products.tsx"
echo "  - src/app/pages/ProductDetail.tsx"
echo "  - src/app/pages/BlogList.tsx"
echo "  - src/app/pages/BlogDetail.tsx"
echo "  - src/app/pages/Cart.tsx"
echo "  - src/app/pages/Contact.tsx"
echo ""

echo "Routing:"
echo "  - src/app/routes.ts"
echo "  - src/app/App.tsx"
echo ""

echo "📦 Export completed!"
echo "📁 Location: ./$EXPORT_DIR"
echo ""
echo "📝 Next Steps:"
echo "1. Manually copy each file from Figma Make to your local folder"
echo "2. Or use the EXPORT_GUIDE.md for detailed instructions"
echo "3. Run 'npm install' in the new location"
echo "4. Run 'npm run dev' to test"
echo ""
echo "✨ Good luck!"
