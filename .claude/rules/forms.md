---
paths:
  - "src/components/**"
  - "app/**"
---

# Form Rules

## Architecture
- This is a static export site — NO server actions, NO API routes
- ALL form submissions go to the external backend: `jax-pavers-api.onrender.com`
- Use the API base URL from `src/config/api.js` — never hardcode the backend URL
- Submit via client-side `fetch()` in `'use client'` components only

## Quote Form
- Required fields: name, email, phone, project type, message
- Validate all fields client-side with Zod before submitting
- Show inline validation errors per field, not just a generic error
- Disable submit button while request is in flight (prevent double-submit)
- Show success state after submission — don't just clear the form silently
- On API error, show a user-friendly message + the phone number as fallback: (904) 445-1261

## Meta Conversions API
- The backend handles Meta Conversions API event tracking — do NOT implement pixel tracking in frontend code
- Form submissions trigger Lead events server-side via the backend API
- Do not add Meta Pixel `fbq()` calls for form events — this would double-count conversions
