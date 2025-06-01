
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, Database, Brain, Cog, Zap, BookOpen } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Data Analysis & Cleaning",
      description: "Transform raw data into clean, structured datasets ready for analysis and insights generation.",
      icon: <Database className="h-12 w-12 text-portfolio-red" />,
      features: ["Data Quality Assessment", "Missing Value Treatment", "Outlier Detection", "Data Validation"]
    },
    {
      title: "Dashboard Development", 
      description: "Create interactive dashboards and visualizations that make complex data easily understandable.",
      icon: <BarChart3 className="h-12 w-12 text-portfolio-red" />,
      features: ["Power BI Dashboards", "Interactive Charts", "KPI Monitoring", "Real-time Updates"]
    },
    {
      title: "Predictive Modeling & Machine Learning",
      description: "Build sophisticated ML models to predict outcomes and identify patterns in your data.",
      icon: <Brain className="h-12 w-12 text-portfolio-red" />,
      features: ["Classification Models", "Regression Analysis", "Time Series Forecasting", "Model Optimization"]
    },
    {
      title: "Data Automation & Reporting",
      description: "Automate repetitive data processes and create automated reporting systems.",
      icon: <Cog className="h-12 w-12 text-portfolio-red" />,
      features: ["ETL Processes", "Automated Reports", "Scheduled Analytics", "Process Optimization"]
    },
    {
      title: "Data Integration & Validation",
      description: "Integrate data from multiple sources and ensure data quality and consistency.",
      icon: <Zap className="h-12 w-12 text-portfolio-red" />,
      features: ["Multi-source Integration", "Data Pipeline Design", "Quality Assurance", "System Integration"]
    },
    {
      title: "Data Storytelling",
      description: "Transform complex analytics into compelling narratives that drive business decisions.",
      icon: <BookOpen className="h-12 w-12 text-portfolio-red" />,
      features: ["Executive Presentations", "Insight Communication", "Business Intelligence", "Strategic Recommendations"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-portfolio-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-portfolio-black mb-4">
            Services
          </h2>
          <p className="font-lato text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive data science solutions to transform your business through data-driven insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="font-montserrat font-bold text-xl text-portfolio-black mb-4">
                  {service.title}
                </h3>
                <p className="font-lato text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-portfolio-red rounded-full mr-2"></span>
                      <span className="font-lato text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  className="bg-portfolio-red hover:bg-portfolio-red-hover text-white font-montserrat font-semibold px-6 py-2"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
