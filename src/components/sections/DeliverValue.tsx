import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const DeliverValue = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="value" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-6 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">
              Our Approach
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            How We Deliver <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Value</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Content will be added here
          </p>
        </div>

        <div className="text-center">
          <div className={`inline-block px-8 py-6 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-dashed border-primary/30 transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`} style={{ animationDelay: "0.2s" }}>
            <p className="text-muted-foreground text-lg">
              Value delivery details to be provided
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverValue;
