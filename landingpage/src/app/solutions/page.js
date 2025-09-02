// src/app/solutions/page.js
'use client';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Link from 'next/link';

export default function Solutions() {
  const solutions = [
    {
      title: "AI Marker",
      subtitle: "Automated Assessment & Grading",
      description: "Our AI Marker revolutionizes the grading process by providing instant, accurate assessments of student work. Using advanced natural language processing and machine learning algorithms, it can evaluate essays, short answers, and complex problem-solving tasks with the same accuracy as experienced teachers.",
      features: [
        "Instant feedback for students",
        "Consistent grading standards",
        "Detailed analytics and insights",
        "Support for multiple question types",
        "Integration with existing LMS platforms",
        "Time savings of up to 80% for teachers"
      ],
      icon: "✓",
      color: "bg-green-500",
      status: "Live Beta",
      link: "#ai-marker"
    },
    {
      title: "AI Question Generation",
      subtitle: "Personalized Assessment Creation",
      description: "Generate unlimited, high-quality questions tailored to your curriculum and student needs. Our AI understands learning objectives and creates questions at appropriate difficulty levels, ensuring comprehensive coverage of topics while maintaining engagement.",
      features: [
        "Curriculum-aligned question generation",
        "Multiple difficulty levels",
        "Various question formats (MCQ, short answer, essay)",
        "Automatic answer key generation",
        "Learning objective mapping",
        "Plagiarism-free content"
      ],
      icon: "?",
      color: "bg-blue-500",
      status: "Coming Soon",
      link: "#question-gen"
    },
    {
      title: "AI Tutor",
      subtitle: "Personal Learning Assistant",
      description: "Your 24/7 AI tutor that adapts to each student's learning pace and style. It identifies knowledge gaps, provides personalized explanations, and offers targeted practice to ensure mastery of concepts before moving forward.",
      features: [
        "Personalized learning paths",
        "Real-time doubt resolution",
        "Adaptive difficulty adjustment",
        "Progress tracking and analytics",
        "Multi-modal learning support",
        "Parent and teacher dashboards"
      ],
      icon: "🎓",
      color: "bg-purple-500",
      status: "In Development",
      link: "#ai-tutor"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <motion.section 
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our AI Solutions
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Cutting-edge AI tools designed to transform education, 
              making learning more effective and teaching more efficient.
            </motion.p>
          </div>
        </motion.section>

        {/* Solutions Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`${solution.color} w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
                        {solution.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-800">{solution.title}</h2>
                        <p className="text-lg text-gray-600">{solution.subtitle}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        solution.status === 'Live Beta' ? 'bg-green-100 text-green-700' :
                        solution.status === 'Coming Soon' ? 'bg-blue-100 text-blue-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {solution.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {solution.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features:</h3>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <span className="text-green-500 mt-1">✓</span>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4">
                      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Learn More
                      </button>
                      {solution.status === 'Live Beta' && (
                        <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                          Try Beta
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Visual/Mockup */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="bg-white rounded-2xl shadow-2xl p-8 border">
                      <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                        <div className="text-center">
                          <div className={`${solution.color} w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4`}>
                            {solution.icon}
                          </div>
                          <p className="text-gray-500 font-medium">
                            {solution.title} Interface Preview
                          </p>
                          <p className="text-sm text-gray-400 mt-2">
                            Coming Soon: Interactive Demo
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Ready to Experience the Future of Education?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Join our beta program and be among the first to access these revolutionary AI tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/beta">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                    Join Beta Program
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Contact Us
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}