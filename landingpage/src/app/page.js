'use client';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Breaking Barriers,<br />
                  Building Brilliance
                </h1>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  At Tiny Equations, we believe every student deserves a world-class education, no matter their background or location. We're building a new kind of learning environment powered by thinking-driven AI, giving learners the tools to take charge of their own journey.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Our solutions—from AI Tutors to Question Generation—adapt to each student's unique pace and style, making self-directed learning a reality.
                </p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://forms.office.com/r/vn9qsLSYKz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg inline-block cursor-pointer"
                >
                  Join us in igniting a new era of learning with no boundaries!
                </motion.a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <img 
                  src="/main1.svg" 
                  alt="Learning Innovation" 
                  className="w-full h-auto max-w-lg mx-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Supported By Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl font-bold text-teal-600 mb-8">Supported By</h2>
              <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
                {/* Partner logos - replace with actual logos */}
                <div className="h-16 px-8 flex items-center">
                  <img 
                    src="/sutd_logo.png" 
                    alt="SUTD" 
                    className="h-12 w-auto"
                  />
                </div>
                <div className="h-16 px-8 flex items-center">
                  <img 
                    src="/bsf_logo.png" 
                    alt="Baby Shark Fund" 
                    className="h-12 w-auto"
                  />
                </div>
                <div className="h-16 px-8 flex items-center">
                  <img 
                    src="/cuhk_logo.png" 
                    alt="CUHK" 
                    className="h-12 w-auto"
                  />
                </div>
                <div className="h-16 px-8 flex items-center">
                  <img 
                    src="/ayraschool_logo.png" 
                    alt="Ayra School" 
                    className="h-12 w-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Tiny Equations Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-teal-600 mb-4">Why Tiny Equations?</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "📚",
                  title: "Syllabus-Aligned Solutions",
                  description: "Our AI tools are built to match educational standards, ensuring every learner gets accurate, relevant, and contextual support."
                },
                {
                  icon: "🎯",
                  title: "Self-Directed Learning",
                  description: "Learn anytime, anywhere, and at your own pace. Our AI empowers learners to take charge of their learning journey."
                },
                {
                  icon: "📝",
                  title: "Get Feedback Along the Way",
                  description: "Like a personal tutor by your side—get instant feedback so students can track progress and improve continuously."
                },
                {
                  icon: "📊",
                  title: "AI-Powered Insights",
                  description: "Go beyond grades. Our AI analyzes performance and delivers actionable insights to help every learner unlock their potential."
                },
                {
                  icon: "💰",
                  title: "Free to Start, Fair to Grow",
                  description: "No student left behind. Our freemium model makes world-class learning accessible to all, regardless of background."
                },
                {
                  icon: "🔄",
                  title: "Scalability and Adaptability",
                  description: "From one student to an entire classroom, our solutions adapt seamlessly to diverse learning needs—personalized yet collaborative."
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    {feature.title === "Syllabus-Aligned Solutions" ? (
                      <img 
                        src="/syllabus_aligned_clipart.svg" 
                        alt={feature.title} 
                        className="h-22 w-22"
                      />
                    ) : feature.title === "Self-Directed Learning" ? (
                      <img 
                        src="/self-directed_clipart.svg" 
                        alt={feature.title} 
                        className="h-22 w-22"
                      />
                    ) : feature.title === "Get Feedback Along the Way" ? (
                      <img 
                        src="/feedback_clipart.svg" 
                        alt={feature.title} 
                        className="h-22 w-22"
                      />
                    ) : feature.title === "AI-Powered Insights" ? (
                      <img 
                        src="/insights_clipart.svg" 
                        alt={feature.title} 
                        className="h-22 w-22"
                      />
                    ) : feature.title === "Free to Start, Fair to Grow" ? (
                      <img 
                        src="/free_clipart.svg" 
                        alt={feature.title} 
                        className="h-22 w-22"
                      />
                    ) : feature.title === "Scalability and Adaptability" ? (
                      <img 
                        src="/scale_clipart.png" 
                        alt={feature.title} 
                        className="h-22 w-22"
                      />
                    ) : (
                      <div className="text-4xl text-center">{feature.icon}</div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-teal-600 mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Work in Progress Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  We're still developing!
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Currently, our app still in the early stages of our product development and are actively releasing products to fulfill our mission.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  While we already have a few public ready solutions, we're looking for partners who share our vision to build the future of education, providing feedback, and hence helping us build a practical, impactful solutions.
                </p>
                <Link href="/solutions">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg"
                  >
                    Learn more about our solutions
                  </motion.button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Work in Progress Illustration */}
                <img 
                  src="/work_in_progress.svg" 
                  alt="Work in Progress - Building the Future" 
                  className="w-full h-auto max-w-lg mx-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Email Signup Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-teal-600 mb-8 leading-tight">
                Let's shape the future<br />
                of education together!
              </h2>
              <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-2xl mx-auto">
                We would love for you to join us on our mission to leverage AI to empower self-directed learning for learners from all backgrounds. So if you share our vision, do help us by joining our mailing list to receive development updates and beta testing opportunities for our product!
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://forms.office.com/r/vn9qsLSYKz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg inline-block mx-auto"
              >
                Join mailing list
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-2">
                <img 
                  src="/tinyeqn_crop.png" 
                  alt="Tiny EQN Logo" 
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-sm text-gray-600 mb-4">
                Breaking Barriers, Building Brilliance
              </p>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/tinyeqn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <img src="/facebook_icon.svg" alt="Facebook" className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/tinyeqn/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <img src="/instagram_icon.svg" alt="Instagram" className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/company/tinyeqn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <img src="/linkedin_logo.svg" alt="LinkedIn" className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Home</h3>
              <ul className="space-y-2 text-xs text-gray-600">
                <li><Link href="/" className="hover:text-gray-900 transition-colors">Supported By</Link></li>
                <li><Link href="/" className="hover:text-gray-900 transition-colors">Why Tiny Equations?</Link></li>
                <li><Link href="/" className="hover:text-gray-900 transition-colors">Mailing List</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Who We Are</h3>
              <ul className="space-y-2 text-xs text-gray-600">
                <li><Link href="/about" className="hover:text-gray-900 transition-colors">Our Mission & Vision</Link></li>
                <li><Link href="/about" className="hover:text-gray-900 transition-colors">How we started</Link></li>
                <li><Link href="/about" className="hover:text-gray-900 transition-colors">Leadership Team</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Our Product</h3>
              <ul className="space-y-2 text-xs text-gray-600">
                <li><Link href="/products" className="hover:text-gray-900 transition-colors">Our Plan & Features</Link></li>
                <li><Link href="/products" className="hover:text-gray-900 transition-colors">Development</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Contact Us</h3>
              <ul className="space-y-2 text-xs text-gray-600">
                <li><a href="mailto:contact@tinyeqn.com" className="hover:text-gray-900 transition-colors">contact@tinyeqn.com</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500">
              © 2025 TinyEqn. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
