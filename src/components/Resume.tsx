import { motion } from 'framer-motion';
import { Download, FileText, Award, Briefcase, GraduationCap } from 'lucide-react';

const Resume = () => {
  const resumeData = {
    education: [
      {
        degree: "Bachelor of Technology in Computer Science",
        institution: "Centurion University of technology and management odisha",
        year: "2022-2026",
        description: "Specialized in AI/ML, Data Structures, and Software Engineering"
      },
      {
        degree: "Intermediate",
        institution: "Shershah College, Sasaram, Bihar",
        year: "2020",
        description: "Specialized in Science stream with emphasis on Physics, Chemistry, and Mathematics"
      },
      {
        degree: "Matriculation",
        institution: "High School Karghar, Bihar",
        year: "2018",
        description: "Focused on foundational subjects including Mathematics, Science, and Social Studies"
      }
    ],
    experience: [
      {
        title: "AI/ML Intern",
        company: "InfoTech",
        period: "2 Months",
        description: "House price prediction"
      },
      {
        title: "AI/ML Intern",
        company: "InterPe",
        period: "Summer 2024",
        description: "Developed machine learning models for customer behavior prediction"
      },
      {
        title: "Data science Intern",
        company: "Technex IIT BHU",
        period: "Summer 2025",
        description: "Quiz Game Development using Flask"
      }
    ],
    certifications: [
      "Complete Data Science,Machine Learning,DL,NLP Bootcamp - Udemy",
      "Data Structure  - Code tantra"
    ]
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i:any) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 }
    })
  };

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            My academic and professional journey in AI/ML engineering
          </p>
          <a
            href="https://drive.google.com/uc?export=download&id=1tNZ1sd43nE7v5LLpVzDHW0WqU6mao7yK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Download className="w-5 h-5 mr-2" />
              Download Full Resume
            </button>
          </a>
        </motion.div>

        {/* Education & Experience */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg mr-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h3>
            </div>
            {resumeData.education.map((edu, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: true }}
                className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {edu.degree}
                </h4>
                <p className="text-blue-600 dark:text-cyan-400 font-medium mb-2">
                  {edu.institution}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">
                  {edu.year}
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mr-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Experience</h3>
            </div>
            {resumeData.experience.map((exp, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: true }}
                className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {exp.title}
                </h4>
                <p className="text-green-600 dark:text-teal-400 font-medium mb-2">
                  {exp.company}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">
                  {exp.period}
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg mr-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {resumeData.certifications.map((cert, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: true }}
                className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-700 dark:to-slate-600 rounded-lg hover:shadow-md transition-all duration-300"
              >
                <FileText className="w-5 h-5 text-purple-600 dark:text-pink-400 mr-3 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
