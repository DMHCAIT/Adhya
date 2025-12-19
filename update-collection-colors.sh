#!/bin/bash

# Update combos, embroidery, and blouse-saree pages with luxury palette

for file in app/collections/{combos,embroidery,blouse-saree}/page.tsx; do
  if [ -f "$file" ]; then
    echo "Updating $file..."
    
    # Replace amber colors with Champagne Gold
    sed -i '' 's/text-amber-400/text-[#C8A96A]/g' "$file"
    sed -i '' 's/text-amber-600/text-[#C8A96A]/g' "$file"
    sed -i '' 's/hover:text-amber-400/hover:text-[#C8A96A]/g' "$file"
    sed -i '' 's/hover:text-amber-600/hover:text-[#C8A96A]/g' "$file"
    sed -i '' 's/via-amber-400/via-[#C8A96A]/g' "$file"
    sed -i '' 's/hover:bg-amber-400/hover:bg-[#C8A96A] hover:text-white/g' "$file"
    sed -i '' 's/from-amber-50/from-[#E8C2C2]\/20/g' "$file"
    
    # Replace gray-900 text with Charcoal
    sed -i '' 's/text-gray-900/text-[#1C1C1C]/g' "$file"
    sed -i '' 's/hover:text-gray-900/hover:text-[#1C1C1C]/g' "$file"
    
    # Replace bg-gray-900 with Charcoal
    sed -i '' 's/bg-gray-900/bg-[#1C1C1C]/g' "$file"
    sed -i '' 's/from-gray-900/from-[#1C1C1C]/g' "$file"
    sed -i '' 's/to-gray-900/to-[#1C1C1C]/g' "$file"
    
    # Replace white backgrounds with Ivory
    sed -i '' 's/bg-white"/bg-[#FAF9F7]"/g' "$file"
    sed -i '' 's/from-gray-50/from-[#FAF9F7]/g' "$file"
    
    # Replace border colors
    sed -i '' 's/border-gray-200/border-[#E8C2C2]/g' "$file"
    sed -i '' 's/hover:border-gray-900/hover:border-[#C8A96A]/g' "$file"
    
    # Replace text-gray-500 with Soft Gray
    sed -i '' 's/text-gray-500/text-[#5E5E5E]/g' "$file"
    
    echo "✓ Updated $file"
  fi
done

echo "All collection pages updated with luxury palette!"
