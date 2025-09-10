# Tiny Equations Landing Page

A modern, responsive landing page for Tiny Equations - a mission-driven startup leveraging AI to empower learners worldwide. Built with Next.js, React, and Tailwind CSS.

## 🚀 About Tiny Equations

"Breaking Barriers, Building Brilliance" - Tiny Equations is developing AI-powered educational solutions to make self-directed learning accessible to all, regardless of background or location.

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2 (App Router)
- **Frontend**: React 19.1.0
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12.23.12
- **Backend/Database**: Firebase 12.2.1 (configured but not currently used)
- **Development**: Turbopack (for faster builds)

## 📁 Project Structure

```
landingpage/
├── public/                          # Static assets
│   ├── tiny-favicon.png            # Site favicon
│   ├── tinyeqn_crop.png            # Main logo
│   ├── about_1.svg                 # About page hero image
│   ├── about_2.svg                 # Mission section illustration
│   ├── about_3.png                 # Vision icons
│   ├── bsf_clipart.svg             # Baby Shark Fund logo
│   ├── sutd_rock.svg               # SUTD illustration
│   ├── main1.svg                   # Home page hero image
│   ├── work_in_progress.svg        # Development section image
│   ├── *_clipart.svg               # Feature section icons
│   ├── *_logo.png                  # Partner/supporter logos
│   ├── Matthew.png                 # Team member photos
│   ├── Koko.png
│   ├── Ayra.png
│   ├── Htet.png
│   ├── YeeKhee.png
│   └── social media icons/         # Social media icons
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── about/
│   │   │   └── page.js            # About Us page
│   │   ├── contact/
│   │   │   └── page.js            # Contact Us page
│   │   ├── newsletters/
│   │   │   └── page.js            # Newsletters coming soon page
│   │   ├── solutions/
│   │   │   └── page.js            # Solutions coming soon page
│   │   ├── globals.css            # Global styles
│   │   ├── layout.js              # Root layout with metadata
│   │   └── page.js                # Home page
│   ├── components/
│   │   └── Header.js              # Navigation header component
│   └── lib/
│       └── firebase.js            # Firebase configuration (unused)
├── .next/                          # Next.js build files
├── node_modules/                   # Dependencies
├── jsconfig.json                   # JavaScript configuration
├── package.json                    # Project dependencies
├── package-lock.json              # Locked dependencies
└── README.md                       # This file
```

## 🎨 Pages Overview

### 1. Home Page (`src/app/page.js`)
- **Hero Section**: Main brand message with call-to-action
- **Supported By**: Partner logos (SUTD, BSF, CUHK, Ayra School)
- **Why Tiny Equations**: Feature cards with benefits
- **Development Status**: "We're still developing" section
- **Mailing List Signup**: Call-to-action button

### 2. About Us Page (`src/app/about/page.js`)
- **Hero Section**: Company mission statement
- **Mission, Values & Vision**: Company philosophy and goals
- **How We Started**: Origin story with illustrations
- **Leadership Team**: Interactive team member cards with popups
  - Matthew Phua Tai Kit (Executive Director - Business, Finance, Operations)
  - Htet Myat Ko Ko (Koko) (Executive Director - Product Development)
  - Ayra Binti Mohammed (Executive Director - Product Experience, Data, Marketing)
  - Htet Aung Shine (Head - Application Engineering)
  - Yong Yee Khee (Head - Internal Systems Ops & Dev Ops)

### 3. Solutions Page (`src/app/solutions/page.js`)
- **Coming Soon**: Placeholder page with branded styling
- **Call-to-Action**: Links to mailing list and about page

### 4. Newsletters Page (`src/app/newsletters/page.js`)
- **Coming Soon**: Placeholder page with branded styling
- **Call-to-Action**: Links to mailing list and about page

### 5. Contact Us Page (`src/app/contact/page.js`)
- **Hero Section**: Contact introduction
- **Contact Information**: Email, location (SUTD), social media
- **Team Contact Cards**: Direct contact information for founders
- **CTA Section**: Mailing list signup

## 🎨 Design System

### Colors
- **Primary**: Teal (`teal-600`, `teal-700`)
- **Secondary**: Yellow (`yellow-400`, `yellow-500`)
- **Background**: Gray (`gray-50`, `yellow-50`, `yellow-100`)
- **Text**: Gray (`gray-700`, `gray-900`)

### Typography
- **Font**: Geist (optimized with Next.js font loading)
- **Headings**: Bold weights with responsive sizing
- **Body**: Regular weight with relaxed line-height

### Layout Patterns
- **Hero Sections**: Two-column grid with text and illustration
- **Feature Cards**: Responsive grid layouts
- **Team Cards**: Consistent card design with hover effects

## 🔧 Key Features

### Interactive Elements
- **Team Member Popups**: Detailed bios with contact information
- **Smooth Animations**: Framer Motion for page transitions
- **Responsive Design**: Mobile-first approach
- **Social Media Integration**: Links to Facebook, Instagram, LinkedIn

### External Integrations
- **Microsoft Forms**: All contact forms redirect to external form
- **Social Media**: Direct links to company profiles
- **Email Links**: Direct mailto links for team members

### SEO & Metadata
- **Custom Favicon**: Tiny Equations branding
- **Meta Tags**: Comprehensive SEO metadata
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd landingpage
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build Commands

- **Development**: `npm run dev` (with Turbopack)
- **Production Build**: `npm run build`
- **Start Production**: `npm start`
- **Lint**: `npm run lint`

## 📝 Content Management

### Adding Images
1. Place images in the `public/` directory
2. Reference them with `/image-name.ext` in your components
3. Update alt text for accessibility

### Updating Team Information
1. **Add new team member**:
   - Add photo to `public/` directory
   - Update the team cards section in `src/app/about/page.js`
   - Create popup modal following existing patterns

2. **Update contact information**:
   - Modify team contact details in `src/app/contact/page.js`
   - Update popup modals in `src/app/about/page.js`

### Modifying Content
- **Home page content**: Edit `src/app/page.js`
- **About page content**: Edit `src/app/about/page.js`
- **Contact information**: Edit `src/app/contact/page.js`
- **Navigation links**: Edit `src/components/Header.js`

### External Links
All contact forms redirect to: `https://forms.office.com/r/vn9qsLSYKz`

Update this URL in:
- `src/app/page.js` (mailing list buttons)
- `src/app/contact/page.js` (CTA section)
- `src/app/solutions/page.js` (mailing list button)
- `src/app/newsletters/page.js` (mailing list button)

## 🎯 Future Development

### Planned Features
- Solutions page with detailed product information
- Newsletter system integration
- Blog/Updates section
- Enhanced contact form functionality

### Development Guidelines
1. **Component Structure**: Follow existing patterns for consistency
2. **Styling**: Use Tailwind CSS classes, maintain design system
3. **Animations**: Use Framer Motion for smooth transitions
4. **Responsive Design**: Test on mobile, tablet, and desktop
5. **Accessibility**: Include proper alt text and semantic HTML
6. **SEO**: Update metadata when adding new pages

## 📞 Support

For development questions or issues:
- **Technical Lead**: Contact through company channels
- **Content Updates**: Refer to team contact information in `/contact`

## 📄 License

Private repository - All rights reserved by Tiny Equations.

---

**Tiny Equations** | Breaking Barriers, Building Brilliance