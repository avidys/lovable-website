import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, CheckCircle, Database, BarChart3, Shield, Calculator, Settings, FileText } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Clinical Strategy",
    description: "Design and plan clinical programs and trials"
  },
  {
    icon: TrendingUp,
    title: "Program & Project Management",
    description: "Delivered on time, within budget, to high quality"
  },
  {
    icon: CheckCircle,
    title: "Regulatory & Inspection Readiness",
    description: "Gap analyses, mock inspections, targeted training"
  },
  {
    icon: Database,
    title: "Data Management & Clinical Programming",
    description: "CRF design, SDTM mapping, automated reporting"
  },
  {
    icon: BarChart3,
    title: "Data Science & RWE",
    description: "Post‑hoc analyses, conference materials, early decision support"
  },
  {
    icon: Shield,
    title: "Audits & Quality Management",
    description: "SOP development, root cause analysis, CAPA planning, training programs"
  },
  {
    icon: Calculator,
    title: "Biometrics & Statistical Programming",
    description: "SAP, statistical design, programming, and analysis"
  },
  {
    icon: Settings,
    title: "Software & System Validation",
    description: "Planning, documentation, testing, SOPs, and reporting"
  },
  {
    icon: FileText,
    title: "Medical Affairs",
    description: "Medical communications, writing, scientific support"
  }
];

const CoreServices = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="services" ref={ref} className="py-24 relative overflow-hidden bg-background">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.1)_0%,transparent_50%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-6 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">
              What We Offer
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Core <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive solutions designed to drive your clinical development success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <Card className="relative border-border/50 hover:border-primary/50 transition-all duration-300 h-full bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
