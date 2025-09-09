'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';

export default function AboutPage() {
  const [isMatthewPopupOpen, setIsMatthewPopupOpen] = useState(false);

  const openMatthewPopup = () => setIsMatthewPopupOpen(true);
  const closeMatthewPopup = () => setIsMatthewPopupOpen(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-yellow-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Tiny Equations, a mission-driven startup that leverages AI to empower learners.
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Breaking Barriers, Building Brilliance
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-yellow-300 rounded-2xl p-8 min-h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-black text-yellow-300 px-6 py-3 rounded-lg font-bold text-4xl mb-4">
                      tiny<br />eqn
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission, Values, Vision Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
              {/* Illustration */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-teal-100 rounded-2xl p-8 min-h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🤖</div>
                    <div className="text-2xl font-bold text-gray-700">AI Learning</div>
                  </div>
                </div>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">🎯</div>
                    <h2 className="text-2xl font-bold text-teal-600">Our Mission</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    At Tiny Equations, our mission is simple: To make self-directed learning accessible and empower learners to unleash their fullest potential.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    We believe that learning should be an empowering experience that not just represent. That's why we are building AI solutions that encourage reflective learning, provide meaningful feedback, and make it easier for students to learn independently—especially in communities where support is limited.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Values and Vision Grid */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Our Values */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">💚</div>
                  <h2 className="text-2xl font-bold text-teal-600">Our Values</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Empowerment:</h3>
                    <p className="text-gray-600 text-sm">Providing students with solutions they need to support their studies</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Innovation:</h3>
                    <p className="text-gray-600 text-sm">Continuously exploring new ways to improve education through technology</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Collaboration:</h3>
                    <p className="text-gray-600 text-sm">Partnering with educators to ensure impactful, evidence-based and meaningful support</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Inclusivity:</h3>
                    <p className="text-gray-600 text-sm">Ensuring that every student, regardless of background or learning ability, has equal access</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Purpose-Driven:</h3>
                    <p className="text-gray-600 text-sm">Focused on breaking barriers, creating a meaningful difference in education and communities</p>
                  </div>
                </div>
              </motion.div>

              {/* Our Vision */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">💡</div>
                  <h2 className="text-2xl font-bold text-teal-600">Our Vision</h2>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  We imagine a world where every student—whether in a bustling city or remote rural village—has an intelligent tutor in their pocket that knows their strengths, understands their struggles, and guides their learning journey through precise, a coach, and a builder of confidence. We aim to break barriers to traditional education, making self-directed learning possible regardless of geography or economic circumstances, shaping the next generation to support schools and teachers to move beyond conventional methods, focusing new ways to cultivate brilliance and nurture human potential.
                </p>
                
                {/* Icons representing features */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl mb-2">⚙️</div>
                    <p className="text-xs text-gray-600">Smart Technology</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🧠</div>
                    <p className="text-xs text-gray-600">AI Learning</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">📱</div>
                    <p className="text-xs text-gray-600">Mobile Access</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🌍</div>
                    <p className="text-xs text-gray-600">Global Reach</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How We Started Section */}
        <section className="py-20 bg-yellow-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Here's how we started!</h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Tiny Equations was founded by Matthew, Koko, and Aura in early 2024, driven by a shared belief that technology that enhance educational support should not be out of reach to bridge educational gaps that groups into a mission-driven startup developing innovative solutions for learners.
                </p>
                
                <div className="bg-teal-100 rounded-2xl p-6 mb-6">
                  <div className="text-center">
                    <div className="text-green-600 font-bold text-lg mb-2">SWMA</div>
                    <p className="text-sm text-gray-600">Technology and Design</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Currently incubated at the Singapore University of Technology and Design (SUTD) and supported by the SUTD Baby Shark Fund, our core team is deeply passionate about using technology to make education more accessible and effective. We are committed to creating a platform powered by thinking-driven AI, designed not to replace teachers, but to serve as building a hub to solve with learners, for learners.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏗️</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Building the Future</h3>
                    <p className="text-gray-600">of Education Technology</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            </motion.div>

            {/* Matthew's Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-cream-white rounded-2xl p-8 shadow-lg">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  {/* Photo */}
                  <div className="md:col-span-1">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/fcda1450eaeafbbbb5402e55c66e66c4259b5b05?width=460" 
                      alt="Matthew Phua Tai Kit" 
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="md:col-span-2">
                    <h3 className="text-2xl lg:text-3xl font-bold text-teal-700 mb-2">
                      Matthew Phua Tai Kit
                    </h3>
                    <p className="text-lg text-gray-800 mb-4 leading-relaxed">
                      Co-Founder<br />
                      Executive Director<br />
                      (Business, Finance and Operations)
                    </p>
                    
                    <div className="mb-4">
                      <p className="text-gray-700 mb-2">
                        <strong>Email:</strong> matthewphua@tinyeqn.com
                      </p>
                      <p className="text-gray-700 mb-4">
                        <strong>Phone:</strong> (65) 9768 0210
                      </p>
                      
                      {/* LinkedIn Icon */}
                      <a href="#" className="inline-block">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_2030_41)">
                            <path d="M25.9273 0H2.06719C0.924219 0 0 0.902344 0 2.01797V25.9766C0 27.0922 0.924219 28 2.06719 28H25.9273C27.0703 28 28 27.0922 28 25.982V2.01797C28 0.902344 27.0703 0 25.9273 0ZM8.30703 23.8602H4.15078V10.4945H8.30703V23.8602ZM6.22891 8.67344C4.89453 8.67344 3.81719 7.59609 3.81719 6.26719C3.81719 4.93828 4.89453 3.86094 6.22891 3.86094C7.55781 3.86094 8.63516 4.93828 8.63516 6.26719C8.63516 7.59062 7.55781 8.67344 6.22891 8.67344ZM23.8602 23.8602H19.7094V17.3633C19.7094 15.8156 19.682 13.8195 17.5492 13.8195C15.3891 13.8195 15.0609 15.5094 15.0609 17.2539V23.8602H10.9156V10.4945H14.8969V12.3211H14.9516C15.5039 11.2711 16.8602 10.1609 18.8781 10.1609C23.0836 10.1609 23.8602 12.9281 23.8602 16.5266V23.8602V23.8602Z" fill="black"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_2030_41">
                              <rect width="28" height="28" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </div>
                    
                    {/* Brief Description */}
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Matthew co-founded Tiny Equations and today serves as its Executive Director, where he leads business strategy, finance, and operations while staying closely involved in product development...
                    </p>
                    
                    {/* Read More Button */}
                    <button 
                      onClick={openMatthewPopup}
                      className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Matthew's Popup Modal */}
      {isMatthewPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl p-8 max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button 
                onClick={closeMatthewPopup}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Photo */}
              <div className="md:col-span-1">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/fcda1450eaeafbbbb5402e55c66e66c4259b5b05?width=460" 
                  alt="Matthew Phua Tai Kit" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              
              {/* Content */}
              <div className="md:col-span-2">
                <h3 className="text-3xl font-bold text-teal-700 mb-2">
                  Matthew Phua Tai Kit
                </h3>
                <p className="text-xl text-gray-800 mb-4 leading-relaxed">
                  Co-Founder<br />
                  Executive Director<br />
                  (Business, Finance and Operations)
                </p>
                
                <div className="mb-6">
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> matthewphua@tinyeqn.com
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Phone:</strong> (65) 9768 0210
                  </p>
                  
                  {/* LinkedIn Icon */}
                  <a href="#" className="inline-block">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_2030_41)">
                        <path d="M25.9273 0H2.06719C0.924219 0 0 0.902344 0 2.01797V25.9766C0 27.0922 0.924219 28 2.06719 28H25.9273C27.0703 28 28 27.0922 28 25.982V2.01797C28 0.902344 27.0703 0 25.9273 0ZM8.30703 23.8602H4.15078V10.4945H8.30703V23.8602ZM6.22891 8.67344C4.89453 8.67344 3.81719 7.59609 3.81719 6.26719C3.81719 4.93828 4.89453 3.86094 6.22891 3.86094C7.55781 3.86094 8.63516 4.93828 8.63516 6.26719C8.63516 7.59062 7.55781 8.67344 6.22891 8.67344ZM23.8602 23.8602H19.7094V17.3633C19.7094 15.8156 19.682 13.8195 17.5492 13.8195C15.3891 13.8195 15.0609 15.5094 15.0609 17.2539V23.8602H10.9156V10.4945H14.8969V12.3211H14.9516C15.5039 11.2711 16.8602 10.1609 18.8781 10.1609C23.0836 10.1609 23.8602 12.9281 23.8602 16.5266V23.8602V23.8602Z" fill="black"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_2030_41">
                          <rect width="28" height="28" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
                
                {/* Full Bio */}
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Matthew co-founded Tiny Equations and today serves as its Executive Director, where he leads business strategy, finance, and operations while staying closely involved in product development. From the very beginning, he helped shape the company's vision, drove its incorporation, and built the internal structures that allow the team to work efficiently as a fast-growing startup.
                  </p>
                  
                  <p>
                    Beyond Tiny Equations, Matthew is the Founder and Managing Director of SolvingSeeds Sdn. Bhd., a technology company based in Malaysia. His leadership across both ventures reflects his entrepreneurial drive and belief in creating meaningful technology with real-world impact.
                  </p>
                  
                  <p>
                    Currently a Year 3 undergraduate at the Singapore University of Technology and Design (SUTD), Matthew is pursuing a Bachelor of Engineering in Computer Science and Design, specialising in Financial Technology (FinTech). His academic journey reinforces his passion for building products at the intersection of finance and technology, a focus that has guided Tiny Equations since its earliest stages.
                  </p>
                  
                  <p>
                    At Tiny Equations, Matthew focuses on managing resources to keep the company financially healthy, ensuring compliance, and building trusted relationships with partners and stakeholders. His blend of strategic vision and hands-on execution continues to drive the company forward in its early growth stages.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

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
