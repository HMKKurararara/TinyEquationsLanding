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
        <section className="py-16 lg:py-20 bg-yellow-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-4">
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
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a436076c7c58a1887a93bac6f3d7e2b0b137b4c4?width=1494" 
                  alt="Tiny EQN Logo" 
                  className="w-80 h-auto mx-auto rounded-2xl shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission, Values, Vision Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              {/* Illustration */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/82ca05b7826eede69aca2ab0aa6cb291b157a5c0?width=1084" 
                  alt="AI Learning Illustration" 
                  className="w-64 h-auto mx-auto"
                />
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
                    <svg width="50" height="50" viewBox="0 0 134 126" className="mr-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M51.2844 56.9046C51.2844 50.1571 47.9147 45.9426 44.1279 40.6832C43.3961 39.6668 38.3356 34.0038 36.9714 34.0038C32.7748 34.0038 40.9261 56.7043 43.4122 59.6877C45.8144 62.5703 52.9394 74.7009 56.3734 76.2271M56.3734 76.2271C56.9881 76.5003 55.3125 74.8631 56.3734 76.2271ZM56.3734 76.2271C59.2263 79.8951 62.645 83.4728 66.313 86.3258C69.3028 88.6511 72.4257 90.6547 75.2984 93.0052C81.7236 98.2622 95.8106 86.5943 99.6305 82.3499C107.064 74.09 104.242 69.9878 104.242 59.7672C104.242 57.1313 102.564 50 99.6305 50C93.077 50 86.5407 51.5603 81.3417 56.1094C79.1985 57.9847 64.296 59.796 68 63.5C70.2576 65.7576 84.948 74 88.5 74" stroke="#01A077" strokeWidth="24" strokeLinecap="round"/>
                      <path d="M53.8179 113.451C30.1951 100.358 16.8763 86.8814 9.98682 64.5192C6.11935 51.9659 9.808 29.0817 30.6402 22.6636C40.7778 19.5404 55.791 26.5186 58.1026 34.0217C59.7428 39.3454 61.383 44.6692 63.0231 49.993C64.9351 56.199 77.1331 43.4526 82.2836 39.914C110.413 20.5879 126.292 50.4838 119.756 68.7841C111.954 90.6314 90.2351 106.895 63.8844 115.013" stroke="black" strokeWidth="10" strokeLinecap="round"/>
                    </svg>
                    <h2 className="text-2xl font-bold text-teal-600">Our Mission</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    At Tiny Equations, our mission is simple: <strong>To make self-directed learning accessible and empower learners to unleash their fullest potential!</strong>
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    We believe that learning is most powerful when it's understood, not just repeated. That's why we're building AI solutions that encourage reflection, provide meaningful feedback, and make it easier for students to learn independently—especially in communities where support is limited.
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
                  <svg width="50" height="50" viewBox="0 0 134 126" className="mr-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M51.2844 56.9046C51.2844 50.1571 47.9147 45.9426 44.1279 40.6832C43.3961 39.6668 38.3356 34.0038 36.9714 34.0038C32.7748 34.0038 40.9261 56.7043 43.4122 59.6877C45.8144 62.5703 52.9394 74.7009 56.3734 76.2271M56.3734 76.2271C56.9881 76.5003 55.3125 74.8631 56.3734 76.2271ZM56.3734 76.2271C59.2263 79.8951 62.645 83.4728 66.313 86.3258C69.3028 88.6511 72.4257 90.6547 75.2984 93.0052C81.7236 98.2622 95.8106 86.5943 99.6305 82.3499C107.064 74.09 104.242 69.9878 104.242 59.7672C104.242 57.1313 102.564 50 99.6305 50C93.077 50 86.5407 51.5603 81.3417 56.1094C79.1985 57.9847 64.296 59.796 68 63.5C70.2576 65.7576 84.948 74 88.5 74" stroke="#01A077" strokeWidth="24" strokeLinecap="round"/>
                    <path d="M53.8179 113.451C30.1951 100.358 16.8763 86.8814 9.98682 64.5192C6.11935 51.9659 9.808 29.0817 30.6402 22.6636C40.7778 19.5404 55.791 26.5186 58.1026 34.0217C59.7428 39.3454 61.383 44.6692 63.0231 49.993C64.9351 56.199 77.1331 43.4526 82.2836 39.914C110.413 20.5879 126.292 50.4838 119.756 68.7841C111.954 90.6314 90.2351 106.895 63.8844 115.013" stroke="black" strokeWidth="10" strokeLinecap="round"/>
                  </svg>
                  <h2 className="text-2xl font-bold text-teal-600">Our Values</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Empowerment:</h3>
                    <p className="text-gray-600">Providing students with solutions they need to support their studies effectively.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Innovation:</h3>
                    <p className="text-gray-600">Continuously exploring new ways to improve education through technology.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Collaboration:</h3>
                    <p className="text-gray-600">Partnering with educators to create impactful, student-friendly solutions.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Inclusivity:</h3>
                    <p className="text-gray-600">Ensuring that every student, regardless of background or learning ability, has equal opportunities.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Purpose-Driven:</h3>
                    <p className="text-gray-600">Focused on breaking barriers, making meaningful differences in education and communities.</p>
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
                  <div className="w-12 h-12 mr-4 flex items-center justify-center">
                    <div className="w-10 h-16 bg-yellow-400 rounded-full relative">
                      <div className="absolute inset-2 bg-yellow-300 rounded-full"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-black rounded-sm"></div>
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-white rounded"></div>
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-white rounded"></div>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-teal-600">Our Vision</h2>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  We imagine a world where every student—whether in a bustling city or a rural village without schools—has access to personalised, high-quality learning. A world where AI is not just a provider of answers, but a thought partner, a coach, and a builder of confidence. We aim to break barriers in traditional education, making self-directed learning possible in every corner of the globe. While empowering students, we also support schools and teachers to move beyond conventional methods, unlocking new ways to unleash brilliance and nurture potential.
                </p>
                
                {/* Vision Icons */}
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/bb76a72fc05d266865a3cc6aec5866282f458273?width=1260" 
                  alt="Vision Icons" 
                  className="w-48 h-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* How We Started Section */}
        <section className="py-16 bg-yellow-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Here's how we started!</h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Tiny Equations was founded by Matthew, Koko, and Ayra to empower both learners and educators with AI-driven solutions that enhance educational support. What started as an idea to bridge educational gaps has grown into a mission-driven initiative developing innovative solutions for learners.
                </p>
                
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/eac3369626bd98dbbcacaab6aaa89143a4af2017?width=1616" 
                  alt="Startup Foundation" 
                  className="w-72 h-auto rounded-2xl mb-6"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/dc0317e669bb820922bfb838a72e2c3b5c9d887f?width=1196" 
                  alt="SWMA Technology and Design" 
                  className="w-60 h-auto rounded-2xl mb-6"
                />
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Currently incubated at the Singapore University of Technology and Design (SUTD) and supported by the SUTD Baby Shark Fund, we are accelerating our platform's development. As we grow, we remain committed to creating a platform powered by thinking-driven AI, designed not to replace learning, but to revive it, building it side by side with learners, for learners.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-teal-600 mb-4">Leadership Team</h2>
            </motion.div>

            {/* First Row - 3 Team Members */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Matthew's Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-cream-white rounded-2xl p-6 shadow-lg text-center"
              >
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8783f661e03f95b0d7df33308d1fd439be0b2619?width=506" 
                  alt="Matthew Phua Tai Kit" 
                  className="w-40 h-52 object-cover rounded-lg shadow-md mb-4 mx-auto"
                />
                
                <h3 className="text-lg font-bold text-teal-700 mb-2">
                  Matthew Phua Tai Kit
                </h3>
                <p className="text-gray-800 mb-4 text-sm leading-relaxed">
                  Co-Founder<br />
                  Executive Director<br />
                  (Business, Finance and Operations)
                </p>
                
                <button 
                  onClick={openMatthewPopup}
                  className="text-gray-800 hover:text-teal-600 transition-colors underline text-sm"
                >
                  Read More
                </button>
              </motion.div>

              {/* Koko's Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-cream-white rounded-2xl p-6 shadow-lg text-center"
              >
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7b3e7f77088b66ad63fcc0d46ac5afd79b5ab414?width=506" 
                  alt="Htet Myat Ko Ko (Koko)" 
                  className="w-40 h-52 object-cover rounded-lg shadow-md mb-4 mx-auto"
                />
                
                <h3 className="text-lg font-bold text-teal-700 mb-2">
                  Htet Myat Ko Ko (Koko)
                </h3>
                <p className="text-gray-800 mb-4 text-sm leading-relaxed">
                  Co-Founder<br />
                  Executive Director
                </p>
                
                <p className="text-gray-800 hover:text-teal-600 transition-colors underline text-sm">
                  Read More
                </p>
              </motion.div>

              {/* Ayra's Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-cream-white rounded-2xl p-6 shadow-lg text-center"
              >
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a30fb91bfd9015333ef1d866e01d402bccf8ec63?width=502" 
                  alt="Ayra Binti Mohammed" 
                  className="w-40 h-52 object-cover rounded-lg shadow-md mb-4 mx-auto"
                />
                
                <h3 className="text-lg font-bold text-teal-700 mb-2">
                  Ayra Binti Mohammed
                </h3>
                <p className="text-gray-800 mb-4 text-sm leading-relaxed">
                  Co-Founder<br />
                  Executive Director
                </p>
                
                <p className="text-gray-800 hover:text-teal-600 transition-colors underline text-sm">
                  Read More
                </p>
              </motion.div>
            </div>

            {/* Second Row - 2 Team Members */}
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Htet Aung Shine's Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-cream-white rounded-2xl p-6 shadow-lg text-center"
              >
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e29cd2c3c60dd79291908f9787a47731f89ad748?width=506" 
                  alt="Htet Aung Shine" 
                  className="w-40 h-52 object-cover rounded-lg shadow-md mb-4 mx-auto"
                />
                
                <h3 className="text-lg font-bold text-teal-700 mb-2">
                  Htet Aung Shine
                </h3>
                <p className="text-gray-800 mb-4 text-sm leading-relaxed">
                  Head<br />
                  Application Engineering
                </p>
              </motion.div>

              {/* Yong Yee Khee's Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-cream-white rounded-2xl p-6 shadow-lg text-center"
              >
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/02afd66e247e18de72e88241fcb2be19b4bdfffa?width=506" 
                  alt="Yong Yee Khee" 
                  className="w-40 h-52 object-cover rounded-lg shadow-md mb-4 mx-auto"
                />
                
                <h3 className="text-lg font-bold text-teal-700 mb-2">
                  Yong Yee Khee
                </h3>
                <p className="text-gray-800 mb-4 text-sm leading-relaxed">
                  Head<br />
                  Internal Systems Ops & Dev Ops
                </p>
              </motion.div>
            </div>
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
      <footer className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/dea36f06fd85ff4c20c5ebbc5c30c512be752b76?width=240" 
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
