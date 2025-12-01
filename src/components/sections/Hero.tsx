import { useEffect, useState } from "react";
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background elements with enhanced effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float animate-pulse-glow" style={{
        animationDelay: "2s"
      }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-float" style={{
        animationDelay: "4s"
      }} />
        <div className="absolute bottom-1/3 left-1/2 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float" style={{
        animationDelay: "3s"
      }} />
        
        {/* Particle-like elements */}
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-primary rounded-full animate-bounce-subtle" style={{
        animationDelay: "1s"
      }} />
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-accent rounded-full animate-bounce-subtle" style={{
        animationDelay: "2s"
      }} />
        <div className="absolute top-2/3 left-2/3 w-2 h-2 bg-primary rounded-full animate-bounce-subtle" style={{
        animationDelay: "3s"
      }} />
      </div>

      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:48px_48px] animate-fade-in" />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">

          <div className={`transition-all duration-700 ${isVisible ? 'animate-zoom-in' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              <span className="relative inline-block text-foreground">
                Faster Path to Market.
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Data-Driven Results.
              </span>
            </h1>
          </div>
          
          <div className={`max-w-4xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{
          animationDelay: "0.2s"
        }}>
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Mission</span>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Deliver cost‑effective solutions that de‑risk trials and accelerate approvals by designing and executing fit-for-purpose clinical trials aligned with business goals and regulatory pathways, and enabling insight‑driven decision making.
            </p>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto pt-16 transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{
          animationDelay: "0.4s"
        }}>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative p-4 md:p-6 lg:p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 group-hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 animate-pulse-glow">
                  40+
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">Combined Years of Experience</div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative p-4 md:p-6 lg:p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 group-hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 animate-pulse-glow">
                  100%
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">Hands-On Experience</div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative p-4 md:p-6 lg:p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 group-hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 animate-pulse-glow">
                  300+
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">Trials Managed</div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative p-4 md:p-6 lg:p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 group-hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 animate-pulse-glow">
                  Global
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">Trial Experience</div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className={`max-w-4xl mx-auto mt-24 transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{
          animationDelay: "0.6s"
        }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-all duration-300" />
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;