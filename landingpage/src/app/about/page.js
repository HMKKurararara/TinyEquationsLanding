'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';


export default function AboutPage() {
  const [isMatthewPopupOpen, setIsMatthewPopupOpen] = useState(false);
  const [isKokoPopupOpen, setIsKokoPopupOpen] = useState(false);
  const [isAyraPopupOpen, setIsAyraPopupOpen] = useState(false);

  const openMatthewPopup = () => setIsMatthewPopupOpen(true);
  const closeMatthewPopup = () => setIsMatthewPopupOpen(false);
  const openKokoPopup = () => setIsKokoPopupOpen(true);
  const closeKokoPopup = () => setIsKokoPopupOpen(false);
  const openAyraPopup = () => setIsAyraPopupOpen(true);
  const closeAyraPopup = () => setIsAyraPopupOpen(false);

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
                <h1 className="text-3xl lg:text-3xl xl:text-5xl font-bold text-gray-900 leading-tight mb-4">
                  Tiny Equations, a mission-driven startup that leverages AI to empower learners.
                </h1>
                <p className="text-3xl text-gray-700 leading-relaxed">
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
                  src="/about_1.svg" 
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
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <img 
                  src="/about_2.svg" 
                  alt="AI Learning Illustration" 
                  className="w-64 h-auto mx-auto"
                />
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <img 
                      src="/mission_icon.svg" 
                      alt="Mission Icon" 
                      className="w-12 h-12 mr-4"
                    />
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src="/valeus_icon.svg" 
                    alt="Values Icon" 
                    className="w-12 h-12 mr-4"
                  />
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src="/vission_icon.svg" 
                    alt="Vision Icon" 
                    className="w-12 h-12 mr-4"
                  />
                  <h2 className="text-2xl font-bold text-teal-600">Our Vision</h2>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  We imagine a world where every student—whether in a bustling city or a rural village without schools—has access to personalised, high-quality learning. A world where AI is not just a provider of answers, but a thought partner, a coach, and a builder of confidence. We aim to break barriers in traditional education, making self-directed learning possible in every corner of the globe. While empowering students, we also support schools and teachers to move beyond conventional methods, unlocking new ways to unleash brilliance and nurture potential.
                </p>
                
                {/* Vision Icons */}
                <img 
                  src="/about_3.png" 
                  alt="Vision Icons" 
                  className="w-90 h-auto mx-auto"
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
                  src="/bsf_clipart.svg" 
                  alt="BSF Clipart" 
                  className="w-72 h-auto rounded-2xl mb-6 mx-auto"
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
                  src="/sutd_rock.svg" 
                  alt="SUTD Rock" 
                  className="w-60 h-auto rounded-2xl mb-6 mx-auto"
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
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {/* Matthew's Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-cream-white rounded-2xl p-6 shadow-lg text-center w-full sm:w-80"
              >
                <img 
                  src="/Matthew.png" 
                  alt="Matthew Phua Tai Kit" 
                  className="w-40 h-52 object-cover rounded-lg shadow-md mb-4 mx-auto"
                />
                
                <h3 className="text-lg font-bold text-teal-700 mb-2">
                  Matthew Phua Tai Kit
                </h3>
                <p className="text-gray-800 mb-4 text-sm leading-relaxed">
                  Co-Founder<br />
                  Executive Director
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
                className="bg-cream-white rounded-2xl p-6 shadow-lg text-center w-full sm:w-80"
              >
                <img 
                  src="/Koko.png" 
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
                
                <button 
                  onClick={openKokoPopup}
                  className="text-gray-800 hover:text-teal-600 transition-colors underline text-sm"
                >
                  Read More
                </button>
              </motion.div>

              {/* Ayra's Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-cream-white rounded-2xl p-6 shadow-lg text-center w-full sm:w-80"
              >
                <img 
                  src="/Ayra.png" 
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
                
                <button 
                  onClick={openAyraPopup}
                  className="text-gray-800 hover:text-teal-600 transition-colors underline text-sm"
                >
                  Read More
                </button>
              </motion.div>
            </div>

            {/* Second Row - 2 Team Members */}
            <div className="flex flex-wrap justify-center gap-6">
              
              {/* Htet Aung Shine's Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-cream-white rounded-2xl p-6 shadow-lg text-center w-full sm:w-80"
              >
                <img 
                  src="/Htet.png" 
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
                className="bg-cream-white rounded-2xl p-6 shadow-lg text-center w-full sm:w-80"
              >
                <img 
                  src="/YeeKhee.png" 
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
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
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
                  src="/Matthew.png" 
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
                  <a href="https://www.linkedin.com/in/matthewphua/" target="_blank" rel="noopener noreferrer" className="inline-block">
                    <img src="/linkedin_logo.svg" alt="LinkedIn" className="w-7 h-7" />
                  </a>
                </div>
                
                {/* Full Bio */}
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Matthew co-founded Tiny Equations and today serves as its Executive Director, where he leads business strategy, finance, and operations while staying closely involved in product development. From the very beginning, he helped shape the company's vision, drove its incorporation, and built the internal structures that allow the team to work efficiently as a fast-growing startup. He also leads a team in product development, ensuring that ideas are translated into practical solutions that serve real educational needs.
                  </p>
                  
                  <p>
                    Beyond Tiny Equations, Matthew is the Founder and Managing Director of SolvingSeeds Sdn. Bhd., a technology company based in Malaysia. His leadership across both ventures reflects his entrepreneurial drive and belief in creating meaningful technology with real-world impact. Matthew has also hosted education workshops and crash-courses for secondary school students, reflecting his strong belief in making quality learning more accessible.
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

      {/* Koko's Popup Modal */}
      {isKokoPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl p-8 max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button 
                onClick={closeKokoPopup}
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
                  src="/Koko.png" 
                  alt="Htet Myat Ko Ko (Koko)" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              
              {/* Content */}
              <div className="md:col-span-2">
                <h3 className="text-3xl font-bold text-teal-700 mb-2">
                  Htet Myat Ko Ko (Koko)
                </h3>
                <p className="text-xl text-gray-800 mb-4 leading-relaxed">
                  Co-Founder<br />
                  Executive Director<br />
                  (Product Development)
                </p>
                
                <div className="mb-6">
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> koko_hm@tinyeqn.com
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Phone:</strong> (65) 9634 4183
                  </p>
                  
                  {/* LinkedIn Icon */}
                  <a href="https://www.linkedin.com/in/htet-myat-ko-ko-165208192/" target="_blank" rel="noopener noreferrer" className="inline-block">
                    <img src="/linkedin_logo.svg" alt="LinkedIn" className="w-7 h-7" />
                  </a>
                </div>
                
                {/* Full Bio */}
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Koko co-founded Tiny Equations and today serves as its Executive Director, leading product development and guiding the company's technical vision. From the start, he drove rapid product development, designing the architecture of Tiny Equations' platforms and leading a team of developers to build the first working prototypes. His leadership in custom algorithm design and system architecture has been central to the company's early success.
                  </p>
                  
                  <p>
                    In 2025, Koko won the Singapore Valley Awards (SVA) by pitching Tiny Equations as a business idea, earning recognition for the startup's potential and receiving a fully sponsored internship opportunity in China.
                  </p>
                  
                  <p>
                    Before Tiny Equations, Koko founded Candellar, an education centre originally based in Myanmar with operations in Singapore. His passion for education began early, starting as a private tutor after his O-levels, and grew into building organisations that combine education with technology.
                  </p>
                  
                  <p>
                    Currently a Year 3 undergraduate at the Singapore University of Technology and Design (SUTD), Koko is pursuing a Bachelor of Engineering in Computer Science and Design, specialising in Artificial Intelligence and Machine Learning. His strong interest in AI and ML has shaped how Tiny Equations develops innovative solutions for real-world use.
                  </p>
                  
                  <p>
                    At Tiny Equations, Koko leads the development team to deliver functional prototypes that have gained recognition from local teachers, students, and even international institutions such as a university in China. His ability to translate bold ideas into working products continues to drive the company's innovation and growth.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Ayra's Popup Modal */}
      {isAyraPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl p-8 max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button 
                onClick={closeAyraPopup}
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
                  src="/Ayra.png" 
                  alt="Ayra Binti Mohammed" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              
              {/* Content */}
              <div className="md:col-span-2">
                <h3 className="text-3xl font-bold text-teal-700 mb-2">
                  Ayra Binti Mohammed
                </h3>
                <p className="text-xl text-gray-800 mb-4 leading-relaxed">
                  Co-Founder<br />
                  Executive Director<br />
                  (Product Experience, Data and Marketing)
                </p>
                
                <div className="mb-6">
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> ayra_mohammed@tinyeqn.com
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Phone:</strong> (65) 8801 0392
                  </p>
                  
                  {/* LinkedIn Icon */}
                  <a href="https://www.linkedin.com/in/ayra-mohammed-a920742a3/" target="_blank" rel="noopener noreferrer" className="inline-block">
                    <img src="/linkedin_logo.svg" alt="LinkedIn" className="w-7 h-7" />
                  </a>
                </div>
                
                {/* Full Bio */}
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Ayra co-founded Tiny Equations and today serves as its Executive Director, where she oversees product experience, data, and marketing. She manages teams that collect and process datasets for AI model training, researches user experience, and leads the front-facing design of our solutions. She also heads the company's marketing efforts and manages our social media platforms, ensuring that Tiny Equations connects effectively with teachers, students, and the wider community.
                  </p>
                  
                  <p>
                    Before Tiny Equations, Ayra built experience as a marketing manager and was actively involved in education. She worked as a private tutor, advocated for STEM education, organised workshops, and collaborated in expanding Candellar's presence into Singapore with Koko. Her passion for education and community work continues to guide her mission at Tiny Equations—making quality learning accessible to all.
                  </p>
                  
                  <p>
                    Currently a Year 3 undergraduate at the Singapore University of Technology and Design (SUTD), Ayra is pursuing a Bachelor of Engineering in Engineering Systems Design, specialising in Business Analytics and Operations Research. Her strong interest in the STEM space, paired with her background in both marketing and education, allows her to bridge technical development with user-focused design.
                  </p>
                  
                  <p>
                    At Tiny Equations, Ayra combines her expertise in data, marketing, and product experience to ensure that every solution is not only technically robust but also resonates with the needs of students, teachers, and wider communities.
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
