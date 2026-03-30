---
description: Run a quick SEO audit on the site — metadata, structured data, accessibility
---

## Page Metadata Check
!`grep -rn "export const metadata" app/ 2>/dev/null || echo "No metadata exports found"`

## Structured Data Check
!`grep -rn "application/ld+json" app/ src/ 2>/dev/null | head -20 || echo "No structured data found"`

## Image Alt Text Check
!`grep -rn "<img\|<Image" src/components/ app/ 2>/dev/null | grep -v "alt=" | head -20 || echo "All images have alt text"`

## Internal Links Check
!`grep -rn "href=" src/components/ app/ 2>/dev/null | grep -v "next/link\|Link\|http\|mailto\|tel:" | head -20 || echo "All internal links use next/link"`

Summarize:
1. Pages missing or incomplete metadata
2. Structured data coverage gaps
3. Images missing alt text
4. Internal links not using next/link
5. Top 3 SEO improvements to make next
