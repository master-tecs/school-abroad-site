# School Abroad - Global Student Migration Platform

A comprehensive platform designed to help students from around the world access study opportunities in Europe, the UK, Canada, and the United States. School Abroad combines AI technology with human expertise to simplify the entire study abroad journey.

## 🌍 About School Abroad

**School Abroad** (formerly School Outside) is a global student migration platform powered by School Outside, designed to make studying abroad accessible, affordable, and transparent for every student who dreams of an international education.

### Our Mission

To make studying abroad accessible, affordable, and transparent for every student who dreams of an international education.

### What We Do

We provide comprehensive support for students throughout their study abroad journey:

- **Pre-Arrival Support**: University selection, admission applications, visa documentation, and low-tuition program matching
- **Post-Arrival Support**: Residence permit assistance, settlement support, and access to student job platforms
- **AI-Powered Guidance**: Instant answers, document tips, and smart student matching
- **Human Expertise**: Experienced advisors who understand real migration challenges
- **Community Knowledge**: Insights from students who have successfully navigated the process

## ✨ Key Features

### 🎓 Student Services

- **University Selection & Application**: AI-powered matching with personalized recommendations
- **Visa Processing Support**: Complete documentation guidance and interview preparation
- **Low-Tuition Program Matching**: Find affordable universities that fit your budget
- **Post-Arrival Support**: Settlement assistance, residence permits, and job opportunities
- **Dashboard Access**: Track applications, manage documents, and access resources

### 🤝 Partnership Programs

- **Recruiting Agency Partnerships**: Commission-based model for student referrals
- **Institution Partnerships**: Connect with universities, colleges, and language schools
- **Transparent Contracts**: Legal agreements with clear commission structures
- **Dedicated Support**: Partnership managers and AI-assisted tracking

### 💳 Membership Plans

- **Platinum Plan**: Webinars, Q&A sessions, and migration updates
- **Diamond Plan**: Personalized counseling, case analysis, and one-on-one expert support
- **Direct Services**: Purchase individual services without membership

### 🎨 Modern User Experience

- **Responsive Design**: Beautiful, modern UI that works on all devices
- **Unified Color Scheme**: Professional purple and yellow brand colors throughout
- **Intuitive Navigation**: Easy-to-use interface for students and partners
- **Real-time Updates**: Track application status and receive notifications

## 🚀 Tech Stack

### Frontend

- **Framework**: Next.js 15.3.1 with App Router
- **Language**: TypeScript with strict mode
- **Styling**:
  - Tailwind CSS v4
  - SCSS for component-specific styles
  - shadcn/ui components
- **UI Libraries**:
  - Radix UI primitives
  - Material-UI icons
  - Framer Motion for animations

### Backend & Services

- **Authentication**: Better Auth v1.2.8
- **Database**: Neon PostgreSQL with Drizzle ORM
- **Payments**: Polar.sh for subscription management
- **Storage**: Cloudflare R2 for file uploads
- **Email**: Resend for transactional emails
- **AI**: OpenAI integration with n8n for chatbot features

### Development Tools

- **Package Manager**: npm
- **Build Tool**: Turbopack (Next.js)
- **Linting**: ESLint
- **Type Checking**: TypeScript

## 📁 Project Structure

```
├── app/
│   ├── (auth)/              # Authentication pages (sign-in, sign-up)
│   ├── dashboard/           # Protected student dashboard
│   │   ├── _components/     # Dashboard components (sidebar, navbar, etc.)
│   │   ├── learning/        # Learning resources
│   │   ├── mentorship/      # Mentorship calls
│   │   ├── resources/       # Templates and resources
│   │   ├── visa-tracker/   # Visa application tracking
│   │   ├── community/       # Community hub
│   │   └── settings/       # User settings
│   ├── student/             # Student information page
│   ├── agency/              # Recruiting agency partnership page
│   ├── partner/             # Institution partnership page
│   ├── about-us/            # About us page
│   ├── contact-us/          # Contact page
│   ├── pricing/             # Pricing and membership plans
│   └── api/                 # API routes
│       ├── agency-submission/
│       ├── partner-submission/
│       └── subscription/
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── commons/             # Shared components (Header, Footer, etc.)
│   ├── homepage/            # Homepage sections
│   │   ├── Hero/           # Hero section with video
│   │   ├── About/          # About section
│   │   ├── Services/       # Services showcase
│   │   ├── Countries/      # Destination countries
│   │   ├── WhyUs/          # Why choose us
│   │   ├── Testimonials/  # Student testimonials
│   │   └── Colleges/      # Partner institutions
│   └── studentpage/         # Student page components
├── lib/
│   ├── auth/               # Authentication configuration
│   ├── subscription.ts     # Subscription utilities
│   └── utils.ts            # Utility functions
└── db/
    ├── schema.ts           # Database schema
    └── drizzle.ts          # Database connection
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18+
- PostgreSQL database (Neon recommended)
- Cloudflare R2 bucket (for file storage)
- Polar.sh account (for subscriptions)
- OpenAI API key (for AI features)
- Google OAuth credentials (optional)

### Installation Steps

1. **Clone the repository**

```bash
git clone <repository-url>
cd school-abroad-site
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment Setup**

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="your-neon-database-url"

# Authentication
BETTER_AUTH_SECRET="your-secret-key"
BETTER_AUTH_URL="http://localhost:10001"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Polar.sh Subscriptions
POLAR_ACCESS_TOKEN="your-polar-access-token"
POLAR_WEBHOOK_SECRET="your-webhook-secret"
NEXT_PUBLIC_STARTER_TIER="your-starter-product-id"
NEXT_PUBLIC_STARTER_SLUG="your-starter-slug"

# OpenAI (for AI features)
OPENAI_API_KEY="your-openai-api-key"

# Cloudflare R2 Storage
CLOUDFLARE_ACCOUNT_ID="your-cloudflare-account-id"
R2_UPLOAD_IMAGE_ACCESS_KEY_ID="your-r2-access-key-id"
R2_UPLOAD_IMAGE_SECRET_ACCESS_KEY="your-r2-secret-access-key"
R2_UPLOAD_IMAGE_BUCKET_NAME="your-r2-bucket-name"

# Email (Resend)
RESEND_API_KEY="your-resend-api-key"
```

4. **Database Setup**

```bash
# Generate database migrations
npx drizzle-kit generate

# Push migrations to database
npx drizzle-kit push
```

5. **Start Development Server**

```bash
npm run dev
```

The application will be available at [http://localhost:10001](http://localhost:10001)

## 🎨 Design System

### Color Palette

- **Primary Purple**: `#732efd` - Main brand color (matches logo)
- **Primary Purple Dark**: `#5a23c8` - Hover states and gradients
- **Primary Purple Light**: `#6c63ff` - Backgrounds and softer elements
- **Accent Yellow**: `#ffd60a` - Highlights and emphasis
- **Accent Yellow Dark**: `#e6b800` - Yellow hover states

### Typography

- **Font System**: Apple System Fonts (San Francisco, Helvetica Neue)
- **Headings**: Bold, modern styling with proper hierarchy
- **Body Text**: Clean, readable with optimal line-height

### Components

- Consistent button styling with pill-shaped design (50px border-radius)
- Unified padding and spacing throughout
- Smooth transitions and hover effects
- Responsive design for all screen sizes

## 📄 Key Pages

### Public Pages

- **Home** (`/`) - Landing page with hero, services, and testimonials
- **About Us** (`/about-us`) - Company information and mission
- **Student** (`/student`) - Information for students
- **Agency** (`/agency`) - Partnership information for recruiting agencies
- **Partner** (`/partner`) - Partnership information for institutions
- **Contact Us** (`/contact-us`) - Contact information and form
- **Pricing** (`/pricing`) - Membership plans and pricing

### Protected Pages (Dashboard)

- **Dashboard** (`/dashboard`) - Student dashboard overview
- **Learning** (`/dashboard/learning`) - Video lessons and resources
- **Mentorship** (`/dashboard/mentorship`) - Book mentorship calls
- **Resources** (`/dashboard/resources`) - Templates and guides
- **Visa Tracker** (`/dashboard/visa-tracker`) - Track visa applications
- **Community** (`/dashboard/community`) - Connect with other students
- **Settings** (`/dashboard/settings`) - Account settings

## 🔧 Development

### Running the Project

```bash
# Development mode with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start
```

### Code Style

- TypeScript strict mode enabled
- ESLint for code quality
- Consistent component structure
- SCSS for styling with BEM methodology

### Adding New Features

1. Create components in appropriate directories
2. Add API routes in `app/api/`
3. Update database schema if needed
4. Run migrations: `npx drizzle-kit generate && npx drizzle-kit push`

## 📧 Contact & Support

- **Email**: info@schoolabroad.org
- **Phone**:
  - Europe: +33 769 020 091
  - Africa: +234 708 1416 069
- **Office Hours**: Monday - Friday, 9 AM - 5 PM (CET)

## 🌐 Social Media

- **Facebook**: [School Outside](https://m.facebook.com/schooloutsideng/)
- **Instagram**: [@schooloutside_ng](https://www.instagram.com/schooloutside_ng/)
- **LinkedIn**: [School Outside](https://linkedin.com/company/schooloutside)
- **YouTube**: [@schooloutside](https://www.youtube.com/@schooloutside)

## 📝 License

MIT. See [LICENSE](LICENSE).

---

**Built with ❤️ for students pursuing their dreams of international education all over the world.**
