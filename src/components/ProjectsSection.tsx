
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Predicting Chronic Diseases Using Machine Learning",
      description: "Developed machine learning models to predict chronic disease risk using patient health data. Implemented multiple algorithms including XGBoost and Random Forest to achieve high accuracy in disease prediction.",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "NumPy"],
      category: "Machine Learning",
      githubUrl: "https://github.com/vishal2807",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    },
    {
      title: "Colchester Crime Data Analysis", 
      description: "Comprehensive spatial and temporal analysis of crime patterns in Colchester using R. Created interactive visualizations and maps to identify crime hotspots and trends over time.",
      technologies: ["R", "ggplot2", "leaflet", "dplyr", "Shiny"],
      category: "Data Analysis",
      githubUrl: "https://github.com/vishal2807",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      title: "Football Player Market Value Prediction",
      description: "Built predictive models to estimate football player market values based on performance metrics. Used linear regression and KNN algorithms to analyze player statistics and market trends.",
      technologies: ["Python", "Linear Regression", "KNN", "Matplotlib", "Seaborn"],
      category: "Predictive Modeling",
      githubUrl: "https://github.com/vishal2807",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
    },
    {
      title: "Home Price Insights: A Data Story",
      description: "Conducted exploratory data analysis and regression modeling on real estate data. Created compelling visualizations to tell the story of housing market trends and price determinants.",
      technologies: ["R", "Statistical Modeling", "ggplot2", "tidyverse"],
      category: "Data Storytelling",
      githubUrl: "https://github.com/vishal2807",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop"
    },
    {
      title: "Sentiment Analysis for Auto Reviews",
      description: "Developed NLP models to classify customer sentiment in automotive reviews. Implemented text preprocessing, TF-IDF vectorization, and clustering techniques for comprehensive sentiment analysis.",
      technologies: ["Python", "NLP", "TF-IDF", "UMAP", "XGBoost"],
      category: "Natural Language Processing",
      githubUrl: "https://github.com/vishal2807",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop"
    }
  ];

  const categories = ["All", "Machine Learning", "Data Analysis", "Predictive Modeling", "Data Storytelling", "Natural Language Processing"];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-portfolio-black mb-4">
            Projects
          </h2>
          <p className="font-lato text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of data science projects demonstrating my ability to solve real-world problems
          </p>
        </div>

        {/* Project Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant="outline"
              className="cursor-pointer font-lato px-4 py-2 border-portfolio-red text-portfolio-black hover:bg-portfolio-red hover:text-white transition-colors duration-200"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-portfolio-red to-portfolio-red-hover">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white text-portfolio-red border-0 font-lato">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-montserrat font-bold text-xl text-portfolio-black mb-3">
                  {project.title}
                </h3>
                <p className="font-lato text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-gray-100 text-gray-700 font-lato text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-portfolio-red text-portfolio-red hover:bg-portfolio-red hover:text-white font-montserrat"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-portfolio-red hover:bg-portfolio-red-hover text-white font-montserrat"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
