import React, { useState, useEffect } from 'react';
import { Code, Database, Brain, Cloud, Users, Lightbulb } from 'lucide-react';
import './Skills.css'; // we'll define animations here

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    { name: "Python", level: 75, color: "from-blue-500 to-blue-600" },
    { name: "Machine Learning", level: 75, color: "from-green-500 to-green-600" },
    { name: "Deep Learning", level: 70, color: "from-purple-500 to-purple-600" },
    { name: "TensorFlow/PyTorch", level: 70, color: "from-red-500 to-red-600" },
    { name: "NLP", level: 75, color: "from-cyan-500 to-cyan-600" },
    { name: "Computer Vision", level: 50, color: "from-indigo-500 to-indigo-600" },
    { name: "SQL & Databases", level: 50, color: "from-yellow-500 to-yellow-600" },
    { name: "Data Analysis", level: 60, color: "from-teal-500 to-teal-600" },
    { name: "Generative AI", level: 50, color: "from-green-400 to-green-50"}
  ];

  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Frameworks",
      skills: ["Python", "C++", "JavaScript", "TensorFlow", "PyTorch", "Scikit-Learn", "Pandas", "Numpy"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: ["Deep Learning", "Neural Networks", "NLP", "Computer Vision", "Gener"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Brain,
      title: "Generative AI",
      skills: ["Prompt Engineering", "LLMs", "GANs", "Diffusion Models"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Database,
      title: "Data & Analytics",
      skills: ["Data Analysis", "Statistical Modeling", "SQL", "Data Visualization", "ETL"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Cloud,
      title: "Tools & Platforms",
      skills: ["Jupyter", "PyCharm","VsCode", "Git", "Docker", "AWS"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Critical Thinking"],
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: Lightbulb,
      title: "Emerging Technologies",
      skills: ["LLMs", "Transformer Models"],
      color: "from-yellow-500 to-orange-500"
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Comprehensive skill set spanning artificial intelligence, machine learning, and data science
          </p>
        </div>

        {/* Progress Bars Section */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            Technical Proficiency
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {technicalSkills.map((skill, index) => (
              <div key={skill.name} className={`space-y-2 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    {skill.name}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                  <div
                    className={`h-3 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 150}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm rounded-full font-medium border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-cyan-400 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
