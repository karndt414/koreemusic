# Koree Arndt Music Website

## Setup Instructions

### 1. Get Gmail App Password
1. Go to https://myaccount.google.com/
2. Click **Security** in the left sidebar
3. Enable **2-Step Verification** (if not already enabled)
4. Scroll down to **App passwords**
5. Select **Mail** and **Windows Computer**
6. Google will generate a 16-character password — copy it

### 2. Configure Environment Variables
1. Open `.env.local` in the root directory
2. Replace `your_16_character_app_password_here` with the password from step 1
3. Make sure the Gmail user is correct: `koree.marimba@gmail.com`

### 3. Install Dependencies
```bash
npm install
```

### 4. Test Locally
```bash
npm run dev
```
Visit http://localhost:3000 to test the contact form locally.

### 5. Deploy to Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Run `vercel` in your project directory
3. Connect your GitHub repository
4. Go to **Settings** → **Environment Variables** in Vercel dashboard
5. Add:
   - `GMAIL_USER`: `koree.marimba@gmail.com`
   - `GMAIL_APP_PASSWORD`: Your 16-character app password
6. Redeploy to apply environment variables

## How It Works
- The contact form submits to `/api/send-email`
- The Vercel serverless function uses Nodemailer to send emails via Gmail
- You receive emails at your Gmail address with the sender's email in the reply-to field
