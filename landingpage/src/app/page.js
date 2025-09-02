// src/app/page.js
'use client';
import { motion } from 'framer-motion';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <motion.section 
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20 lg:py-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to <span className="text-yellow-300">Tiny Equations</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Revolutionizing education with cutting-edge AI technology. 
              From automated marking to personalized tutoring.
            </motion.p>
            <motion.div 
              className="space-x-4 flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Join Beta Program
              </button>
              <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Learn More
              </button>
            </motion.div>
          </div>
        </motion.section>

        {/* AI Products Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our AI Solutions</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover how our AI-powered tools are transforming education
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Marker",
                  description: "Automated assessment and grading system that provides instant, accurate feedback to students and saves teachers valuable time.",
                  icon: "✓",
                  color: "bg-green-500"
                },
                {
                  title: "AI Question Generation",
                  description: "Generate personalized questions and assessments tailored to individual learning needs and curriculum requirements.",
                  icon: "?",
                  color: "bg-blue-500"
                },
                {
                  title: "AI Tutor",
                  description: "Your personal learning assistant that adapts to your pace, identifies knowledge gaps, and provides targeted support.",
                  icon: "🎓",
                  color: "bg-purple-500"
                }
              ].map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className={`${product.color} w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto`}>
                    {product.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center mb-6">
                    {product.description}
                  </p>
                  <div className="text-center">
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                      Learn More →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "10K+", label: "Students Helped" },
                { number: "500+", label: "Teachers Using" },
                { number: "95%", label: "Accuracy Rate" },
                { number: "50%", label: "Time Saved" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Education?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of educators already using our AI tools to enhance learning experiences.
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Started Today
              </button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}