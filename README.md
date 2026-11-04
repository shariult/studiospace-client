# Studiospace

Rent or List your Studios for creative projects. Studiospace is a platform that allows users to find and book studio spaces for various purposes. If you're a studio owner, you can list your space and manage bookings. If you're looking for a studio, you can browse available spaces and make reservations.

## Technology Used

- **Framework:** Next.js (App Router), React
- **Language:** TypeScript
- **Styling:** Tailwind CSS, DaisyUI
- **Database:** MongoDB
- **Authentication:** Better Auth (Email, Google)
- **Package Manager:** pnpm

## Features

- Create, read, update and delete your studio space listings.
- Browse available studio spaces.
- Book a studio space for your creative projects.
- Sign in with Email, Google and GitHub.
- Website is fully responsive and mobile friendly for all screen sizes.
- Skeleton loading of products for better user experience.
- Show proper errors messages using React Hot Toast.

## Project Dependencies

### Dependencies

- `next` – React framework for routing, rendering, and API routes
- `react`, `react-dom` – UI library
- `better-auth` – authentication (email/password and social login)
- `@better-auth/mongo-adapter` – stores auth data in MongoDB
- `mongodb` – official MongoDB driver
- `jose` – JWT signing and verification
- `react-hot-toast` – error and success notifications
- `react-icons` – icon library
- `slug` – generates URL-friendly slugs for studio listings
- `swiper` – carousels and sliders

### Dev Dependencies

- `typescript`, `@types/node`, `@types/react`, `@types/react-dom` – TypeScript and type definitions
- `tailwindcss`, `@tailwindcss/turbopack` – utility-first CSS
- `daisyui` – Tailwind component library
- `eslint`, `eslint-config-next` – linting

## Run Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later)
- [pnpm](https://pnpm.io/)
- A [MongoDB](https://www.mongodb.com/) database (local or MongoDB Atlas)
- Google and GitHub OAuth apps (for social sign-in)

### 1. Clone the repository

```bash
git clone https://github.com/shariult/studiospace-client.git
cd studiospace-client
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

Create a `.env.local` file in the project root:

```env
# API URL
NEXT_PUBLIC_API_URL=api_url

# Database
MONGODB_URI=your_mongodb_connection_string

# Better Auth
BETTER_AUTH_SECRET=your_random_secret
BETTER_AUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

Generate a secret with:

```bash
openssl rand -base64 32
```

When creating the OAuth apps, set the callback URLs to:

- Google: `http://localhost:3000/api/auth/callback/google`

### 4. Start the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other scripts

```bash
pnpm build   # Create a production build
pnpm start   # Run the production build
pnpm lint    # Run ESLint
```

## 📬 Let's Connect & Collaborate!

I am currently open to freelance projects, remote positions, and collaborative opportunities.

[<img src="https://img.shields.io/badge/Website-shariul.com-blue?style=for-the-badge&logo=google-chrome&logoColor=white" />](https://shariul.com) [<img src="https://img.shields.io/badge/LinkedIn-shariul-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/shariul/) [<img src="https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white" />](https://discord.gg/9q5GRgVS2)

## Screenshots
