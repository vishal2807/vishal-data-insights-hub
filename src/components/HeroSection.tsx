
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-portfolio-black leading-tight">
                Vishal Bachal
              </h1>
              <p className="font-montserrat font-semibold text-xl md:text-2xl text-portfolio-red mt-2">
                Data Scientist | Analyst | Storyteller
              </p>
            </div>
            
            <p className="font-lato text-lg text-gray-700 leading-relaxed max-w-xl">
              Passionate Data Science graduate with expertise in turning complex datasets into actionable insights. 
              Specializing in data analysis, visualization, automation, and predictive modeling to drive real-world impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-portfolio-red hover:bg-portfolio-red-hover text-white font-montserrat font-semibold px-8 py-3 text-base"
                onClick={() => window.open('#', '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                Download My CV
              </Button>
              
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-portfolio-black hover:bg-portfolio-red hover:text-white transition-colors"
                  onClick={() => window.open('https://www.linkedin.com/in/vishal-bachal/', '_blank')}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-portfolio-black hover:bg-portfolio-red hover:text-white transition-colors"
                  onClick={() => window.open('https://github.com/vishal2807', '_blank')}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-portfolio-black hover:bg-portfolio-red hover:text-white transition-colors"
                  onClick={() => window.open('mailto:vishalbachal0703@gmail.com', '_blank')}
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 bg-gradient-to-br from-portfolio-red to-portfolio-red-hover rounded-full flex items-center justify-center shadow-2xl p-2">
              <Avatar className="w-72 h-72">
                <AvatarImage 
                  src="/lovable-uploads/53f4a690-950c-4d44-8e40-473a40ff5c37.png" 
                  alt="Vishal Bachal"
                  className="object-cover"
                />
                <AvatarFallback className="w-full h-full bg-white flex items-center justify-center text-4xl font-montserrat font-bold text-gray-600">
                  VB
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
