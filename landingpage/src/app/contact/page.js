// src/app/contact/page.js
'use client';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Link from 'next/link';

export default function Contact() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-yellow-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-4">
                  Get in Touch with Tiny Equations
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Ready to transform education with AI-powered learning?
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Have questions about our solutions, want to collaborate, or interested in joining our mission? We'd love to hear from you and explore how we can work together to make quality learning accessible to all.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <img 
                  src="/about_1.svg" 
                  alt="Contact Tiny Equations" 
                  className="w-80 h-auto mx-auto rounded-2xl shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                      <p className="text-gray-600">
                        <a href="mailto:contact@tinyeqn.com" className="hover:text-teal-600 transition-colors">
                          contact@tinyeqn.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Location</h3>
                      <p className="text-gray-600">
                        Singapore University of Technology and Design<br />
                        8 Somapah Road<br />
                        Singapore 487372
                      </p>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 4v10a2 2 0 002 2h6a2 2 0 002-2V8M7 8h10M12 12v4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Follow Us</h3>
                      <div className="flex space-x-4">
                        <a href="https://www.facebook.com/tinyeqn" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition-colors">
                          <img src="/facebook_icon.svg" alt="Facebook" className="w-6 h-6" />
                        </a>
                        <a href="https://www.instagram.com/tinyeqn/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition-colors">
                          <img src="/instagram_icon.svg" alt="Instagram" className="w-6 h-6" />
                        </a>
                        <a href="https://linkedin.com/company/tinyeqn" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition-colors">
                          <img src="/linkedin_logo.svg" alt="LinkedIn" className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team Contact Cards */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Direct Contact</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                      <div className="flex items-center space-x-4">
                        <img src="/Matthew.png" alt="Matthew" className="w-16 h-16 rounded-full object-cover" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Matthew Phua Tai Kit</h4>
                          <p className="text-sm text-gray-600">Co-Founder & Executive Director</p>
                          <p className="text-sm text-teal-600">
                            <a href="mailto:matthewphua@tinyeqn.com">matthewphua@tinyeqn.com</a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                      <div className="flex items-center space-x-4">
                        <img src="/Koko.png" alt="Koko" className="w-16 h-16 rounded-full object-cover" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Htet Myat Ko Ko (Koko)</h4>
                          <p className="text-sm text-gray-600">Co-Founder & Executive Director</p>
                          <p className="text-sm text-teal-600">
                            <a href="mailto:koko_hm@tinyeqn.com">koko_hm@tinyeqn.com</a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                      <div className="flex items-center space-x-4">
                        <img src="/Ayra.png" alt="Ayra" className="w-16 h-16 rounded-full object-cover" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Ayra Binti Mohammed</h4>
                          <p className="text-sm text-gray-600">Co-Founder & Executive Director</p>
                          <p className="text-sm text-teal-600">
                            <a href="mailto:ayra_mohammed@tinyeqn.com">ayra_mohammed@tinyeqn.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-yellow-50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Transform Education?
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Join our mailing list to stay updated on our latest developments and be the first to know when our solutions launch.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://forms.office.com/r/vn9qsLSYKz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg inline-block"
              >
                Join Our Mailing List
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
                <li><Link href="/solutions" className="hover:text-gray-900 transition-colors">Our Plan & Features</Link></li>
                <li><Link href="/solutions" className="hover:text-gray-900 transition-colors">Development</Link></li>
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