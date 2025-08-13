import React, { useEffect } from 'react';
import { ExternalLink, Github, Shield, Eye, MessageCircle, TrendingUp } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const projects = [
    {
      title: "Credit Card Fraud Detection",
      description: "Machine learning model using advanced algorithms to detect fraudulent transactions with 99.5% accuracy. Implemented feature engineering and ensemble methods.",
      tech: ["Python", "Scikit-Learn", "Pandas", "XGBoost"],
      icon: Shield,
      gradient: "from-red-500 to-pink-500",
      image: "https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=500",
      codeUrl:"https://github.com/Anshuku419/Credit-Card-Fraud-Detection"
    },
    {
      title: "Image Classification using CNNs",
      description: "Deep convolutional neural network for multi-class image classification achieving 94% accuracy on CIFAR-10 dataset with data augmentation.",
      tech: ["TensorFlow", "Keras", "OpenCV", "Python"],
      icon: Eye,
      gradient: "from-blue-500 to-indigo-500",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=500",
      codeUrl:"https://github.com/Anshuku419/Image-Classification-using-CNNs"
    },
    {
      title: "Chatbot using NLP and Deep Learning",
      description: "Intelligent conversational AI using transformer architecture and natural language processing for customer service automation.",
      tech: ["PyTorch", "Transformers", "NLTK", "FastAPI"],
      icon: MessageCircle,
      gradient: "from-green-500 to-teal-500",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500",
      codeUrl: "https://github.com/Anshuku419/College-Chatbot-Using-ML-and-NLP"
    },
    {
      title: "Mall_Customer_Segmentation_using_K-Means_Cluster",
      description: "Performed customer segmentation using K-Means clustering to identify distinct shopping behavior groups, enabling targeted marketing strategies.",
      tech: ["Python", "Scikit-learn", "Matplotlib", "Seaborn", "Pandas", "NumPy"],
      icon: TrendingUp,
      gradient: "from-purple-500 to-violet-500",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=500",
      codeUrl: "https://github.com/Anshuku419/Mall_Customer_Segmentation_using_K-Means_Cluster"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Showcasing my expertise in AI/ML through innovative projects and solutions
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                <div className="absolute top-4 left-4 p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                  <project.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 
                  className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300"
                  data-aos="fade-right"
                  data-aos-delay={index * 200}
                >
                  {project.title}
                </h3>
                
                <p 
                  className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed"
                  data-aos="fade-right"
                  data-aos-delay={index * 250}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full font-medium"
                      data-aos="zoom-in"
                      data-aos-delay={techIndex * 100}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3" data-aos="fade-up" data-aos-delay={index * 300}>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12" data-aos="zoom-in">
          <a 
            href="https://github.com/Anshuku419?tab=repositories"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            View All Projects
          </a>
        </div>

        <br />
        <p 
          style={{ color: 'white' }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          I have included only four projects in my portfolio, but I have created various projects in Machine Learning and AI.
          <b> You can check my GitHub repositories</b>
        </p>

      </div>
    </section>
  );
};

export default Projects;
