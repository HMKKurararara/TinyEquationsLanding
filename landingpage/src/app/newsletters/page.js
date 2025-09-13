// src/app/newsletters/page.js
'use client';
import { motion } from 'framer-motion';
import Header from '../../components/Header';

export default function Newsletters() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Header Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our Newsletters
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stay updated with our latest developments, educational insights, and product updates.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Archive Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Newsletter Archive
              </h2>
              
              {/* Newsletter Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "AI in Education: December 2024",
                    date: "December 15, 2024",
                    description: "Latest developments in AI-powered learning platforms and their impact on student engagement.",
                    image: "/newsletter-thumbnails/dec-2024.jpg", // Add thumbnail images to public folder
                    link: "/newsletters/december-2024.pdf", // Add PDF files to public folder
                    tags: ["AI", "Education", "Innovation"]
                  },
                  {
                    title: "Product Updates: November 2024", 
                    date: "November 20, 2024",
                    description: "New features in our AI tutor system and upcoming beta testing opportunities.",
                    image: "/newsletter-thumbnails/nov-2024.jpg",
                    link: "/newsletters/november-2024.pdf",
                    tags: ["Product", "Updates", "Beta"]
                  },
                  {
                    title: "Partnership Spotlight: October 2024",
                    date: "October 10, 2024", 
                    description: "Highlighting our collaborations with educational institutions and their success stories.",
                    image: "/newsletter-thumbnails/oct-2024.jpg",
                    link: "/newsletters/october-2024.pdf",
                    tags: ["Partnerships", "Success Stories"]
                  }
                  // Add more newsletters as needed
                ].map((newsletter, index) => (
                  <motion.div
                    key={newsletter.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    {/* Newsletter Thumbnail */}
                    <div className="h-48 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      {/* Placeholder for actual newsletter thumbnail */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-600">
                          PDF
                        </span>
                      </div>
                    </div>
                    
                    {/* Newsletter Content */}
                    <div className="p-6">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {newsletter.tags.map((tag) => (
                          <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {newsletter.title}
                      </h3>
                      
                      <p className="text-sm text-gray-500 mb-3">
                        {newsletter.date}
                      </p>
                      
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {newsletter.description}
                      </p>
                      
                      <div className="flex gap-3">
                        <a
                          href={newsletter.link}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium text-center"
                        >
                          Read Newsletter
                        </a>
                        <a
                          href={newsletter.link}
                          download
                          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Coming Soon Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-dashed border-yellow-200 rounded-xl p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  More Newsletters Coming Soon
                </h3>
                <p className="text-gray-600 mb-4">
                  We're working on adding more newsletters to our archive. Subscribe to stay updated!
                </p>
                <a
                  href="https://forms.office.com/r/vn9qsLSYKz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors font-medium"
                >
                  Subscribe for Updates
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Never Miss an Update
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join our mailing list to receive our newsletters directly in your inbox.
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
    </div>
  );
}