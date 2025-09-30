import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tiny Equations | Breaking Barriers, Building Brilliance",
  description: "A mission-driven startup leveraging AI to empower learners worldwide. Transforming education through innovative AI-powered learning solutions.",
  keywords: "Tiny Equations, AI education, machine learning, personalized learning, educational technology, AI tutoring, student empowerment",
  authors: [{ name: "Tiny Equations" }],
  creator: "Tiny Equations",
  publisher: "Tiny Equations",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Tiny Equations | Breaking Barriers, Building Brilliance",
    description: "A mission-driven startup leveraging AI to empower learners worldwide.",
    url: "https://tinyeqn.com",
    siteName: "Tiny Equations",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiny Equations | Breaking Barriers, Building Brilliance",
    description: "A mission-driven startup leveraging AI to empower learners worldwide.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
