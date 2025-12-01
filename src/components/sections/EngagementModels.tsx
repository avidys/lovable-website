import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const EngagementModels = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="engagement" ref={ref} className="py-24 relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(34,197,94,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(34,197,94,0.08)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-6 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">
              Partnership Options
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Engagement <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Models</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Content will be added here
          </p>
        </div>

        <div className="text-center">
          <div className={`inline-block px-8 py-6 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-dashed border-primary/30 transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`} style={{ animationDelay: "0.2s" }}>
            <p className="text-muted-foreground text-lg">
              Engagement model details to be provided
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
