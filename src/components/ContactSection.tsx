
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-portfolio-red" />,
      label: "Email",
      value: "vishalbachal0703@gmail.com",
      link: "mailto:vishalbachal0703@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-portfolio-red" />,
      label: "Phone (UK)",
      value: "+44 7586 599554",
      link: "tel:+447586599554"
    },
    {
      icon: <Phone className="h-5 w-5 text-portfolio-red" />,
      label: "Phone (India)",
      value: "+91 9923158212",
      link: "tel:+919923158212"
    },
    {
      icon: <Linkedin className="h-5 w-5 text-portfolio-red" />,
      label: "LinkedIn",
      value: "vishal-bachal",
      link: "https://www.linkedin.com/in/vishal-bachal/"
    },
    {
      icon: <Github className="h-5 w-5 text-portfolio-red" />,
      label: "GitHub",
      value: "vishal2807",
      link: "https://github.com/vishal2807"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-portfolio-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-portfolio-black mb-4">
            Get In Touch
          </h2>
          <p className="font-lato text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to turn your data into actionable insights? Let's discuss how I can help drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-montserrat font-bold text-2xl text-portfolio-black mb-6">
                  Send Me a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="font-lato font-semibold text-portfolio-black">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2 border-gray-300 focus:border-portfolio-red focus:ring-portfolio-red"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="font-lato font-semibold text-portfolio-black">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2 border-gray-300 focus:border-portfolio-red focus:ring-portfolio-red"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="font-lato font-semibold text-portfolio-black">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-2 border-gray-300 focus:border-portfolio-red focus:ring-portfolio-red"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="font-lato font-semibold text-portfolio-black">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="mt-2 border-gray-300 focus:border-portfolio-red focus:ring-portfolio-red resize-none"
                      placeholder="Tell me about your project or how I can help..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-portfolio-red hover:bg-portfolio-red-hover text-white font-montserrat font-semibold py-3"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-montserrat font-bold text-2xl text-portfolio-black mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : '_self'}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                    >
                      {item.icon}
                      <div>
                        <p className="font-lato font-semibold text-sm text-gray-600">
                          {item.label}
                        </p>
                        <p className="font-lato text-portfolio-black group-hover:text-portfolio-red transition-colors duration-200">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-montserrat font-bold text-xl text-portfolio-black mb-4">
                  <MapPin className="inline w-5 h-5 mr-2 text-portfolio-red" />
                  Location
                </h3>
                <div className="space-y-2">
                  <p className="font-lato text-gray-700">Currently based in:</p>
                  <p className="font-lato font-semibold text-portfolio-black">United Kingdom</p>
                  <p className="font-lato text-sm text-gray-600">Available for remote work worldwide</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
