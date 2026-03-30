---
description: Thorough pre-push checks — lint, build, links, images, structured data, responsive layout. Use before pushing, especially from mobile.
---

## Step 1: Lint Check
!`npm run lint 2>&1 | tail -20`

## Step 2: Build Check
!`npm run build 2>&1 | tail -30`

## Step 3: Image Audit
Verify every image referenced in JSX exists in public/ and is WebP format.
!`grep -roh 'src="[^"]*\.\(webp\|jpg\|png\|svg\)"' app/ src/ 2>/dev/null | sort -u`
!`ls public/*.webp public/images/*.webp 2>/dev/null | head -30`

Cross-reference: flag any referenced image that doesn't exist in public/.

## Step 4: Internal Link Check
Verify all Link href values point to valid routes.
!`grep -roh 'href="\/[^"]*"' app/ src/ 2>/dev/null | sort -u`

Valid routes are: /, /driveways, /patios, /pool-decks, /outdoor-kitchens, /pergolas
Flag any link pointing elsewhere.

## Step 5: Structured Data Validation
!`grep -r 'application/ld+json' app/ src/ 2>/dev/null | head -10`

For each structured data block found, verify:
- Valid JSON (no syntax errors)
- @type is appropriate
- NAP consistency: (904) 445-1261, info@jaxoutdoorspaces.com
- Canonical URL uses jaxoutdoorspaces.com (no www)

## Step 6: Responsive Layout Check
!`grep -rn 'overflow\|translateX\|x:' app/ src/ --include="*.jsx" 2>/dev/null | head -20`

Flag any Framer Motion x-axis animations (known to cause horizontal overflow on mobile).

## Step 7: Meta Tags
!`grep -rn 'title\|description\|openGraph' app/ --include="*.jsx" 2>/dev/null | head -30`

Verify each page has unique title, description, and Open Graph metadata.

## Report
Summarize findings:
- Pass/fail for each step
- List of issues found with file:line references
- Overall verdict: READY TO PUSH or NEEDS FIXES
