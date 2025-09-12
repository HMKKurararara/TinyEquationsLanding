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

        {/* SharePoint Embed Section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Replace YOUR_SHAREPOINT_URL with your actual SharePoint page URL */}
              <iframe
                src="YOUR_SHAREPOINT_URL"
                width="100%"
                height="800"
                frameBorder="0"
                scrolling="yes"
                className="w-full"
                title="TinyEqn Newsletters"
                sandbox="allow-scripts allow-same-origin allow-forms allow-downloads"
              />
              
              {/* Fallback message if iframe doesn't load */}
              <div className="p-8 text-center bg-gray-50">
                <p className="text-gray-600 mb-4">
                  Can't see the newsletters? 
                </p>
                <a 
                  href="YOUR_SHAREPOINT_URL" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View in SharePoint
                </a>
              </div>
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