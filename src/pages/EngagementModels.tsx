import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, AlertTriangle, Shield } from "lucide-react";

const engagementModels = [
  {
    icon: Target,
    title: "Clinical Strategy Development",
    subtitle: "Strategic Partnership Model",
    purpose: "Design an integrated clinical development pathway aligning scientific, regulatory, and business objectives.",
    engagementModel: "Fixed-fee or milestone-based engagement structured around key deliverables (4–8 weeks).",
    structure: [
      "Phase 1: Discovery & landscape assessment",
      "Phase 2: Clinical strategy and evidence Roadmap",
      "Phase 3: Executive presentation with implementation plan, KPIs, and risk matrix"
    ],
    whenToUse: "Early-stage or growing MedTech companies planning FIH or pivotal programs, or recalibrating after regulatory feedback.",
    deliverables: "Strategy deck, development timeline, resource model, and KPI framework."
  },
  {
    icon: AlertTriangle,
    title: "Study Rescue",
    subtitle: "Accelerated Recovery Model",
    purpose: "Rapidly diagnose and correct underperforming or at-risk studies to restore timelines, data quality, and stakeholder confidence.",
    engagementModel: "Time-and-materials with rapid-assessment and recovery phases; optional success-based component tied to milestone recovery.",
    structure: [
      "Phase 1: Diagnostic review",
      "Phase 2: Corrective Action Plan",
      "Phase 3: Execution oversight and hand-off"
    ],
    whenToUse: "Trials behind schedule, over budget, facing inspection risk, or post-merger portfolio alignment.",
    deliverables: "Study Rescue Report, CAPA plan, revised enrollment forecast, KPI dashboard, and monitoring support."
  },
  {
    icon: Shield,
    title: "Study Audit",
    subtitle: "Quality Assurance & Readiness Model",
    purpose: "Independent evaluation of study operations, data integrity, and GCP compliance to ensure regulatory readiness.",
    engagementModel: "Fixed-fee per audit or retainer-based model for ongoing portfolio oversight.",
    structure: [
      "Phase 1: Pre-audit preparation",
      "Phase 2: On-site or remote audit",
      "Phase 3: Findings report with CAPA tracking"
    ],
    whenToUse: "Prior to FDA/Notified Body inspection, CRO transition, or internal compliance review.",
    deliverables: "Audit findings report, CAPA tracker, readiness checklist, and mock inspection workshop."
  }
];

const EngagementModels = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.1)_0%,transparent_50%)]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-6 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                Partnership Options
              </p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Engagement <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Models</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Tailored engagement approaches designed to meet your specific clinical development challenges
            </p>
          </div>

          <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {engagementModels.map((model, index) => {
              const Icon = model.icon;
              return (
                <div
                  key={index}
                  className={`group transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-10'}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <Card className="relative border-border/50 hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-8">
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                            <Icon className="w-7 h-7 text-background" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-semibold text-foreground mb-1">{model.title}</h3>
                            <p className="text-sm text-primary font-medium">{model.subtitle}</p>
                          </div>
                        </div>

                        {/* Purpose */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-foreground/70 uppercase tracking-wide mb-2">Purpose</h4>
                          <p className="text-foreground/90">{model.purpose}</p>
                        </div>

                        {/* Engagement Model */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-foreground/70 uppercase tracking-wide mb-2">Engagement Model</h4>
                          <p className="text-foreground/90">{model.engagementModel}</p>
                        </div>

                        {/* Structure */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-foreground/70 uppercase tracking-wide mb-3">Structure</h4>
                          <ul className="space-y-2">
                            {model.structure.map((phase, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span className="text-foreground/90">{phase}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* When to Use */}
                        <div className="mb-6 p-4 rounded-lg bg-primary/5 border border-primary/10">
                          <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">When to Use</h4>
                          <p className="text-foreground/90 text-sm">{model.whenToUse}</p>
                        </div>

                        {/* Deliverables */}
                        <div>
                          <h4 className="text-sm font-semibold text-foreground/70 uppercase tracking-wide mb-2">Deliverables</h4>
                          <p className="text-foreground/90">{model.deliverables}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EngagementModels;
