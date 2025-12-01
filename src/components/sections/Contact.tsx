import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="contact" ref={ref} className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to accelerate your clinical development? Reach out to discuss how we can help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <a 
            href="https://www.linkedin.com/company/avidys/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`group transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-10'}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <Card className="relative border-border/50 hover:border-primary/50 transition-all duration-300 h-full bg-card/50 backdrop-blur-sm hover:scale-105">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Linkedin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                  <p className="text-muted-foreground">Connect on LinkedIn</p>
                </CardContent>
              </Card>
            </div>
          </a>

          <a 
            href="mailto:info@avidys.com"
            className={`group transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-10'}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <Card className="relative border-border/50 hover:border-primary/50 transition-all duration-300 h-full bg-card/50 backdrop-blur-sm hover:scale-105">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground">info@avidys.com</p>
                </CardContent>
              </Card>
            </div>
          </a>

          <a 
            href="https://calendly.com/avidys_meeting" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`group transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-10'}`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <Card className="relative border-border/50 hover:border-primary/50 transition-all duration-300 h-full bg-card/50 backdrop-blur-sm hover:scale-105">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Book a Meeting</h3>
                  <p className="text-muted-foreground">Schedule time with us</p>
                </CardContent>
              </Card>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
