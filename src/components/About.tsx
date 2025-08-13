import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Brain, Target, Code, Zap } from 'lucide-react';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const highlights = [
    {
      icon: Brain,
      title: "AI & ML Passion",
      description: "Deep fascination with artificial intelligence and machine learning algorithms"
    },
    {
      icon: Target,
      title: "Career Goals",
      description: "Focused on becoming a skilled AI/ML engineer in the next few months"
    },
    {
      icon: Code,
      title: "Technical Skills",
      description: "Proficient in Python, TensorFlow, PyTorch, and modern ML frameworks"
    },
    {
      icon: Zap,
      title: "Innovation Mindset",
      description: "Always seeking creative solutions to complex data science challenges"
    }
  ];

  const skills = [
    "Python", "TensorFlow", "PyTorch", "Scikit-Learn", 
    "NLP", "Computer Vision", "Data Analysis", "SQL", "Deep Learning"
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A passionate technologist on a mission to harness the power of AI and machine learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p 
                className="text-slate-600 dark:text-slate-300 leading-relaxed"
                data-aos="fade-up"
              >
                I'm an aspiring AI/ML Engineer with an insatiable curiosity for how machines can learn 
                and make intelligent decisions. My journey into artificial intelligence began with a 
                simple question: "How can we make computers think like humans?"
              </p>
              
              <p 
                className="text-slate-600 dark:text-slate-300 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Through hands-on projects and continuous learning, I've developed expertise in machine 
                learning algorithms, neural networks, and data science. I'm particularly passionate about 
                natural language processing and computer vision, where I see immense potential for 
                solving real-world problems.
              </p>
              
              <p 
                className="text-slate-600 dark:text-slate-300 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                My goal is to become a skilled AI/ML engineer who can bridge the gap between complex 
                algorithms and practical applications that benefit society.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="mt-8" data-aos="fade-up">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Technical Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-100 dark:bg-slate-700 text-blue-800 dark:text-cyan-300 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-slate-600 transition-colors duration-300"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-700 dark:to-slate-600 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                data-aos="fade-left"
                data-aos-delay={index * 150}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
