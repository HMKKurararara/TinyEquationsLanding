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
                <p className="bg-yellow-300 text-black px-4 py-2 rounded-md font-medium shadow-sm inline-block">
                  Join us in igniting a new era of learning with no boundaries!
                </p>
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
                        className="h-20 w-20"
                      />
                    ) : feature.title === "Self-Directed Learning" ? (
                      <img 
                        src="/self-directed_clipart.svg" 
                        alt={feature.title} 
                        className="h-20 w-20"
                      />
                    ) : feature.title === "Get Feedback Along the Way" ? (
                      <img 
                        src="/feedback_clipart.svg" 
                        alt={feature.title} 
                        className="h-20 w-20"
                      />
                    ) : feature.title === "AI-Powered Insights" ? (
                      <img 
                        src="/insights_clipart.svg" 
                        alt={feature.title} 
                        className="h-20 w-20"
                      />
                    ) : feature.title === "Free to Start, Fair to Grow" ? (
                      <img 
                        src="/free_clipart.svg" 
                        alt={feature.title} 
                        className="h-20 w-20"
                      />
                    ) : feature.title === "Scalability and Adaptability" ? (
                      <img 
                        src="/scale_clipart.png" 
                        alt={feature.title} 
                        className="h-20 w-20"
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
              <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
                We would love for you to join us on our mission to leverage AI to empower self-directed learning for learners from all backgrounds. So if you share our vision, do help us by entering your email below so that we can send you our mailing list for development updates and beta testing of our product!
              </p>
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email here..."
                  className="flex-1 px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-500 text-black"
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
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                    <g clipPath="url(#clip0_2046_126)">
                      <rect width="48" height="48" rx="24" fill="#FEFDFB"/>
                      <path d="M24 0C10.7453 0 0 10.7453 0 24C0 35.255 7.74912 44.6995 18.2026 47.2934V31.3344H13.2538V24H18.2026V20.8397C18.2026 12.671 21.8995 8.8848 29.9194 8.8848C31.44 8.8848 34.0637 9.18336 35.137 9.48096V16.129C34.5706 16.0694 33.5866 16.0397 32.3645 16.0397C28.4294 16.0397 26.9088 17.5306 26.9088 21.4061V24H34.7482L33.4013 31.3344H26.9088V47.8243C38.7926 46.3891 48.001 36.2707 48.001 24C48 10.7453 37.2547 0 24 0Z" fill="black"/>
                    </g>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                    <g clipPath="url(#clip0_2046_127)">
                      <path d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70313 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3313 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2813 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z" fill="#000100"/>
                      <path d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z" fill="#000100"/>
                      <path d="M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z" fill="#000100"/>
                    </g>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                    <g clipPath="url(#clip0_2046_128)">
                      <path d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4063 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4063 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39063 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39063 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031V40.9031Z" fill="black"/>
                    </g>
                  </svg>
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
