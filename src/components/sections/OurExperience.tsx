import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const OurExperience = () => {
  const { ref, isVisible } = useScrollAnimation();

  const biotechTherapies = [
    "Oncology",
    "Cardiovascular",
    "Metabolic Diseases",
    "Allergology",
    "Pediatrics",
    "CNS",
    "Infectious Diseases",
    "Chronic Pain"
  ];

  const medtech = [
    "Heart Valves",
    "Left Atrial Appendage Occlusion/Closure",
    "Pacemakers/Defibrillators",
    "Implantable Cardiac Monitors",
    "Left Ventricular Assist Devices",
    "PAP Monitoring",
    "Ablation Catheters",
    "Scaffolds and Stents",
    "Spinal Cord Stimulation and DRG",
    "Deep Brain Stimulation (Parkinson's, Depression)"
  ];

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Our Experience
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* BioTech/Pharma Therapies */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 group-hover:border-primary/50 transition-all duration-300 h-full">
                <h3 className="text-2xl font-bold mb-6 text-primary">
                  BioTech/Pharma Therapies
                </h3>
                <ul className="space-y-3">
                  {biotechTherapies.map((therapy, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-3 mt-1">•</span>
                      <span className="text-foreground">{therapy}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* MedTech */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: "0.4s" }}>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 group-hover:border-primary/50 transition-all duration-300 h-full">
                <h3 className="text-2xl font-bold mb-6 text-primary">
                  MedTech
                </h3>
                <ul className="space-y-3">
                  {medtech.map((tech, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-3 mt-1">•</span>
                      <span className="text-foreground">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExperience;
