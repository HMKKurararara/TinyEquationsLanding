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
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg"
                >
                  Join us in igniting a new era of learning with no boundaries!
                </motion.button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Illustration placeholder - you can replace with actual SVG */}
                <div className="bg-teal-100 rounded-2xl p-8 min-h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <div className="text-2xl font-bold text-gray-700">Learning Innovation</div>
                  </div>
                </div>
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
                  <div className="text-gray-400 font-semibold">SWMA</div>
                </div>
                <div className="h-16 px-8 flex items-center">
                  <div className="text-yellow-500 font-bold">BABY SHARK FUND</div>
                </div>
                <div className="h-16 px-8 flex items-center">
                  <div className="text-red-600 font-semibold">University Logo</div>
                </div>
                <div className="h-16 px-8 flex items-center">
                  <div className="text-green-600 font-semibold">Partner Logo</div>
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
                  <div className="text-4xl mb-4 text-center">{feature.icon}</div>
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
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg"
                >
                  Learn more about our solutions
                </motion.button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Work in Progress Illustration */}
                <div className="bg-gray-100 rounded-2xl p-8 min-h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold text-xl mb-4 transform -rotate-12">
                      WORK IN<br />PROGRESS
                    </div>
                    <div className="text-4xl mb-4">⚡</div>
                    <div className="text-lg font-semibold text-gray-700">Building the Future</div>
                  </div>
                </div>
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
              <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
                We would love for you to join us on our mission to leverage AI to empower self-directed learning for learners from all backgrounds. So if you share our vision, do help us by entering your email below so that we can send you our mailing list for development updates and beta testing of our product!
              </p>
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email here..."
                  className="flex-1 px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg"
                >
                  Join mailing list
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="bg-yellow-400 text-black font-bold text-lg px-3 py-1 rounded">
                  TINY<br />EQN
                </div>
              </Link>
              <p className="text-sm text-gray-600 mb-4">
                Breaking Barriers, Building Brilliance
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.017 0z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Home</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/about" className="hover:text-gray-900 transition-colors">Who We Are</Link></li>
                <li><Link href="/solutions" className="hover:text-gray-900 transition-colors">Why Tiny Equations?</Link></li>
                <li><Link href="/signup" className="hover:text-gray-900 transition-colors">Join Up!</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Who We Are</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/mission" className="hover:text-gray-900 transition-colors">How we started</Link></li>
                <li><Link href="/leadership" className="hover:text-gray-900 transition-colors">Leadership Team</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Our Product</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/products" className="hover:text-gray-900 transition-colors">Our Pre & Post-Release Development</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="mailto:contact@tinyeqn.com" className="hover:text-gray-900 transition-colors">contact@tinyeqn.com</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              © 2024 Tiny Eqn. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
