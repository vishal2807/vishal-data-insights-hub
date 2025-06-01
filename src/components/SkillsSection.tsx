
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "R", "SQL"],
      color: "bg-blue-100 text-blue-800 border-blue-300"
    },
    {
      title: "Data Analysis & Processing",
      skills: ["Pandas", "NumPy", "dplyr", "tidyverse"],
      color: "bg-green-100 text-green-800 border-green-300"
    },
    {
      title: "Data Visualization",
      skills: ["Power BI", "Excel", "Matplotlib", "Seaborn", "ggplot2"],
      color: "bg-purple-100 text-purple-800 border-purple-300"
    },
    {
      title: "Machine Learning & Predictive Modeling",
      skills: ["Scikit-learn", "XGBoost", "Random Forest", "Neural Networks"],
      color: "bg-red-100 text-red-800 border-red-300"
    },
    {
      title: "Statistical Analysis",
      skills: ["Hypothesis Testing", "Regression", "ANOVA"],
      color: "bg-yellow-100 text-yellow-800 border-yellow-300"
    },
    {
      title: "Tools & Platforms",
      skills: ["Jupyter Notebooks", "Git", "ERP Systems"],
      color: "bg-gray-100 text-gray-800 border-gray-300"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-portfolio-black mb-4">
            Technical Skills
          </h2>
          <p className="font-lato text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for data science, analysis, and machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-portfolio-red">
              <CardContent className="p-6">
                <h3 className="font-montserrat font-bold text-xl text-portfolio-black mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className={`${category.color} font-lato text-sm px-3 py-1 hover:scale-105 transition-transform duration-200`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Progress Visualization */}
        <div className="mt-16">
          <h3 className="font-montserrat font-bold text-2xl text-portfolio-black text-center mb-8">
            Proficiency Levels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { skill: "Python", level: 90 },
              { skill: "R", level: 85 },
              { skill: "SQL", level: 80 },
              { skill: "Power BI", level: 90 },
              { skill: "Machine Learning", level: 85 },
              { skill: "Statistical Analysis", level: 88 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-montserrat font-semibold text-portfolio-black">{item.skill}</span>
                  <span className="font-lato text-sm text-gray-600">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-portfolio-red to-portfolio-red-hover h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
