
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Target } from 'lucide-react';

const AboutSection = () => {
  const education = [
    {
      degree: "MSc in Data Science and its Applications",
      institution: "University of Essex, UK",
      year: "2025",
      icon: <GraduationCap className="h-6 w-6 text-portfolio-red" />
    },
    {
      degree: "BSc in Computer Science",
      institution: "Savitribai Phule Pune University, India",
      year: "2023",
      icon: <GraduationCap className="h-6 w-6 text-portfolio-red" />
    }
  ];

  const softSkills = [
    "Analytical Thinking", "Problem-Solving", "Communication", 
    "Collaboration", "Time Management", "Critical Thinking"
  ];

  const values = [
    {
      title: "Continuous Learning",
      description: "Staying updated with latest trends and technologies in data science",
      icon: <Award className="h-8 w-8 text-portfolio-red" />
    },
    {
      title: "Accuracy & Precision",
      description: "Ensuring data integrity and delivering reliable insights",
      icon: <Target className="h-8 w-8 text-portfolio-red" />
    },
    {
      title: "Business Alignment",
      description: "Connecting data insights with business objectives and outcomes",
      icon: <Target className="h-8 w-8 text-portfolio-red" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-portfolio-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-portfolio-black mb-4">
            About Me
          </h2>
          <p className="font-lato text-lg text-gray-600 max-w-3xl mx-auto">
            A passionate and detail-oriented Data Science professional dedicated to transforming complex data into meaningful insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Bio */}
          <div className="space-y-6">
            <h3 className="font-montserrat font-bold text-2xl text-portfolio-black">My Journey</h3>
            <div className="space-y-4 font-lato text-gray-700 leading-relaxed">
              <p>
                I am a passionate and detail-oriented Data Science graduate with an MSc in Data Science and its Applications 
                from the University of Essex (2025) and a BSc in Computer Science from Pune University (2023).
              </p>
              <p>
                I specialize in data analysis, visualization, automation, and predictive modeling using Python, R, SQL, 
                Power BI, and machine learning frameworks. My portfolio showcases my ability to turn complex datasets 
                into actionable insights that drive real-world impact.
              </p>
              <p>
                With a strong foundation in both theoretical knowledge and practical application, I am committed to 
                leveraging data science to solve meaningful problems and create value for organizations and society.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="font-montserrat font-bold text-2xl text-portfolio-black">Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="border-l-4 border-portfolio-red">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {edu.icon}
                      <div>
                        <h4 className="font-montserrat font-semibold text-lg text-portfolio-black">
                          {edu.degree}
                        </h4>
                        <p className="font-lato text-gray-600">{edu.institution}</p>
                        <p className="font-lato text-sm text-portfolio-red font-semibold">{edu.year}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="font-montserrat font-bold text-2xl text-portfolio-black text-center mb-8">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-white border border-portfolio-red text-portfolio-black font-lato px-4 py-2 rounded-full 
                         hover:bg-portfolio-red hover:text-white transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Professional Values */}
        <div>
          <h3 className="font-montserrat font-bold text-2xl text-portfolio-black text-center mb-8">Professional Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h4 className="font-montserrat font-semibold text-xl text-portfolio-black mb-3">
                    {value.title}
                  </h4>
                  <p className="font-lato text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
