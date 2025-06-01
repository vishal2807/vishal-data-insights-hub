
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-portfolio-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="font-lato text-gray-300">
              © 2025 Vishal Bachal
            </p>
            <p className="font-lato text-sm text-gray-400 mt-1">
              Data Scientist | Analyst | Storyteller
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-portfolio-red hover:bg-gray-800 transition-colors"
              onClick={() => window.open('https://www.linkedin.com/in/vishal-bachal/', '_blank')}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-portfolio-red hover:bg-gray-800 transition-colors"
              onClick={() => window.open('https://github.com/vishal2807', '_blank')}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-portfolio-red hover:bg-gray-800 transition-colors"
              onClick={() => window.open('mailto:vishalbachal0703@gmail.com', '_blank')}
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-portfolio-red text-portfolio-red hover:bg-portfolio-red hover:text-white font-lato"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center">
            <p className="font-lato text-sm text-gray-400">
              Built with passion for data science and continuous learning
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
