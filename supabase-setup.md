# Supabase Migration Guide

This project has been migrated from Cloudflare to use Supabase. Here's how to set it up:

## Prerequisites

1. Create a Supabase account at https://supabase.com
2. Create a new project in Supabase
3. Get your Supabase credentials (URL and anon key)

## Environment Variables

Create a `.env` file in the root directory (or set these in your hosting platform):

```env
# Session
SESSION_SECRET=your-random-secret-key-here

# Email (Resend - Recommended)
RESEND_API_KEY=re_your_resend_api_key
RESEND_FROM=Portfolio <no-reply@yourdomain.com>
RESEND_TO=your-email@gmail.com

# Email (AWS SES - Optional fallback)
AWS_ACCESS_KEY_ID=your-aws-key
AWS_SECRET_ACCESS_KEY=your-aws-secret
EMAIL=your-email@gmail.com
FROM_EMAIL=your-verified-ses-email@domain.com

# Supabase (for future database features)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
```

## Deployment Options

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Option 2: Netlify
1. Push your code to GitHub
2. Import project in Netlify
3. Add environment variables in Netlify dashboard
4. Deploy!

### Option 3: Railway
1. Push your code to GitHub
2. Create new project in Railway
3. Connect your GitHub repo
4. Add environment variables
5. Deploy!

## What Changed

- ✅ Removed Cloudflare Pages/Workers dependencies
- ✅ Replaced `@remix-run/cloudflare` with `@remix-run/node`
- ✅ Updated all `context.cloudflare.env` to `process.env`
- ✅ Removed Cloudflare-specific files (wrangler.toml, functions/)
- ✅ Added Supabase client library (ready for future features)

## Next Steps

You can now use Supabase for:
- Database storage (replace KV if needed)
- Authentication (if you want to add user features)
- Edge Functions (for serverless functions)
- Storage (for file uploads)

## Local Development

Run `npm run dev` - it will use environment variables from `.env` file.

