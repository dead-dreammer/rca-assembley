# ✝️ Rydalvale Church Assembly (RCA) — Website

> *"For where two or three gather in my name, there am I with them."* — Matthew 18:20

A full-featured church website for **Rydalvale Church Assembly (RCA)**, built to serve the congregation digitally — from service listings and events to prayer requests and the church's story.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Pages & Sections](#pages--sections)
- [Admin Panel](#admin-panel)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

The RCA website is designed to be the digital home of Rydalvale Church Assembly — a welcoming, accessible, and spiritually engaging space for members, visitors, and seekers alike. It prioritises simplicity for congregation members while giving administrators full control over content through a secure admin panel.

---

## Features

- 📅 **Services Listing** — Display upcoming and recurring services with times, location, and descriptions
- 🗓️ **Events Page** — Upload events with images, titles, dates, and descriptions
- 📖 **Scripture Quotes** — Curated Bible verses displayed throughout the site in designated quote blocks
- 🙏 **Prayer Requests** — A form-based system for members to submit prayer requests (functions like a contact form)
- 📖 **About Us** — The church's story, founding, vision, and leadership
- 🔐 **Admin Panel** — Secure backend for staff to manage all content without touching code

---

## Pages & Sections

### 🏠 Home
- Hero banner with church name and a featured scripture quote
- Quick links to Services, Events, and Prayer Requests
- Rotating scripture quote block (pulled from admin-managed list)
- Upcoming services preview (next 2–3 services)
- Upcoming events preview (next 2–3 events)

### 🕊️ Services
- Full listing of regular weekly services (e.g. Sunday Worship, Wednesday Bible Study)
- Each service card shows: name, day/time, location/venue, short description
- "Add to Calendar" button per service (`.ics` export)

### 📅 Events
- Grid/card layout of all upcoming events
- Each event card displays:
  - Event image (uploaded via admin)
  - Event title
  - Date & time
  - Short description with a "Read More" toggle
- Past events archived in a separate tab

### 📖 Scripture Quotes
Not a standalone page — scripture quotes appear as **styled block quotes** in:
- The Home page hero and mid-page sections
- The footer of every page
- The sidebar on the Events and Services pages

All quotes are managed from the Admin Panel (book, chapter, verse, and version).

### 🙏 Prayer Requests
Replaces a traditional "Contact Us" page. Members and visitors can submit:
- **Name** (optional — can be anonymous)
- **Email** (optional)
- **Prayer Request** (free text)
- **Privacy preference** — "Share with the congregation" or "Keep private (pastoral team only)"

Submitted requests are:
- Emailed to the designated pastoral team address
- Stored in the admin dashboard for review

### 👥 About Us
- **Our Story** — The founding and history of Rydalvale Church Assembly
- **Our Mission & Vision** — What RCA stands for and strives toward
- **Leadership** — Profiles of pastors and elders (name, role, short bio, optional photo)
- **Beliefs** — A brief statement of faith

---

## Admin Panel

Accessible at `/admin` — requires login credentials.

### Admin Capabilities

| Section | Actions |
|---|---|
| **Services** | Add, edit, delete services; set recurrence |
| **Events** | Upload events with image, title, date, description; toggle published/draft |
| **Scripture Quotes** | Add, edit, reorder, or remove quotes; assign placement location |
| **Prayer Requests** | View all submissions; mark as prayed for; flag for pastoral follow-up |
| **About Us** | Edit church story, mission, vision, leadership bios and photos |
| **Settings** | Update contact email, church address, social links, site name |

### Admin Access
- Protected by username and password (JWT-based or session auth)
- Role-based access planned: `Super Admin`, `Pastor`, `Content Editor`

---

## Tech Stack

> Adjust this section to match your actual implementation.

| Layer | Technology |
|---|---|
| **Frontend** | Next.js (React) / plain HTML+CSS |
| **Backend** | Node.js + Express / Next.js API routes |
| **Database** | PostgreSQL (via Neon) / MongoDB |
| **File Storage** | Cloudinary / AWS S3 (event images) |
| **Auth** | NextAuth.js / JWT |
| **Email** | Nodemailer / SendGrid (prayer request notifications) |
| **Hosting** | Vercel |
| **Styling** | Tailwind CSS |

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn
- A running PostgreSQL database (or Neon connection string)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/rca-website.git
cd rca-website

# Install dependencies
npm install

# Copy the environment file
cp .env.example .env.local
```

Fill in your `.env.local` values (see [Environment Variables](#environment-variables) below).

```bash
# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Create a `.env.local` file in the root of the project with the following:

```env
# Database
DATABASE_URL=your_neon_or_postgres_connection_string

# Auth
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

# Email (for prayer request notifications)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_email_password
PRAYER_REQUEST_RECIPIENT=pastor@rydalvalechurch.org

# File Storage (Cloudinary example)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Admin
ADMIN_EMAIL=admin@rydalvalechurch.org
```

---

## Folder Structure

```
rca-website/
├── public/                  # Static assets (logo, default images)
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx         # Home
│   │   ├── services/        # Services listing page
│   │   ├── events/          # Events page
│   │   ├── prayer/          # Prayer Requests page
│   │   ├── about/           # About Us page
│   │   └── admin/           # Admin panel (protected)
│   ├── components/          # Reusable UI components
│   │   ├── ScriptureQuote/  # Scripture block component
│   │   ├── EventCard/       # Event card component
│   │   ├── ServiceCard/     # Service listing card
│   │   └── PrayerForm/      # Prayer request form
│   ├── lib/                 # DB client, auth helpers, mailer
│   └── styles/              # Global CSS / Tailwind config
├── prisma/                  # Database schema (if using Prisma)
│   └── schema.prisma
├── .env.example
├── .env.local               # Local secrets (not committed)
├── next.config.js
├── tailwind.config.js
└── README.md
```

---

## Contributing

This project is maintained by the RCA development team. To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add: your feature description"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

Please follow the existing code style and test your changes locally before submitting.

---

## License

This project is the intellectual property of **Rydalvale Church Assembly**. Unauthorised redistribution is not permitted. For licensing inquiries, contact the church administration.

---

*Built with love for the Rydalvale Church Assembly community.* 🙏
