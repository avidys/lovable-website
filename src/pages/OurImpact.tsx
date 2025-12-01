import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle2, TrendingUp, AlertTriangle, Award, Target, Lightbulb } from "lucide-react";
const caseStudies = [{
  highlight: "Eliminated FDA Audit Risk",
  text: "Eliminated a critical FDA audit risk by designing and implementing a global financial disclosure reconciliation process across 100+ systems in just three months—four months ahead of schedule.",
  color: "from-red-500 to-orange-500",
  icon: AlertTriangle
}, {
  highlight: "Accelerated Trial",
  text: "Accelerated pivotal‑study enrollment by launching a direct-to-patient pre-screening model, cutting projected delays from 12 months to 3 months and reducing long-term program costs.",
  color: "from-primary to-accent",
  icon: TrendingUp
}, {
  highlight: "De-Risked Clinical Program",
  text: "De‑risked clinical programs by institutionalizing cross-functional strategy reviews (Regulatory, HE&R, Clinical) to align CMS reimbursement planning early, preventing late-stage pivots and improving trial cost efficiency.",
  color: "from-blue-500 to-cyan-500",
  icon: Target
}, {
  highlight: "Triggered Proactive Redesign",
  text: "Enabled early identification of product redesign needs through meta-analysis of prior studies, ensuring proactive course correction and evidence-based design decisions.",
  color: "from-purple-500 to-pink-500",
  icon: Lightbulb
}, {
  highlight: "Cost-Effective",
  text: "Delivered cost‑effective biometrics solutions by producing a complete TLF package for a Phase III trial at a fraction of the cost of large CROs, without compromising quality or compliance.",
  color: "from-accent to-primary",
  icon: Award
}, {
  highlight: "Scientific Visibility",
  text: "Advanced scientific visibility through ad hoc cardiology data analyses that led to four conference presentations and three peer-reviewed publications.",
  color: "from-green-500 to-emerald-500",
  icon: CheckCircle2
}];
const OurImpact = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation(0.1);
  return <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.1)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{
        animationDelay: "2s"
      }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-block px-6 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6 animate-fade-in">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">Our Results</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
              Case Studies & <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Case Studies - Alternative Design */}
          <div ref={ref} className="max-w-5xl mx-auto">
            {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return <div key={index} className={`relative transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-10"}`} style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  {/* Connecting Line */}
                  {index < caseStudies.length - 1 && <div className="absolute left-10 top-24 w-0.5 h-12 bg-gradient-to-b from-primary/40 via-accent/40 to-transparent z-0" />}

                  <div className="relative flex gap-6 mb-8">
                    {/* Large Numbered Badge */}
                    <div className="flex-shrink-0 relative group">
                      <div className={`absolute inset-0 bg-gradient-to-br ${study.color} rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                      <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${study.color} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 border-2 border-white/20`}>
                        <span className="text-3xl font-black text-white">{String(index + 1).padStart(2, "0")}</span>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 pt-1">
                      <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 bg-card/40 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 group">
                        <CardContent className="p-6">
                          {/* Icon & Highlight */}
                          <div className="flex items-center gap-3 mb-4">
                            
                            <div className={`px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30`}>
                              <span className="text-sm font-bold text-primary">
                                {study.highlight}
                              </span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-foreground/80 leading-relaxed">{study.text}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>;
          })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-3xl animate-pulse-glow" />
              <Card className="relative border-primary/30 bg-card/60 backdrop-blur-md">
                <CardContent className="p-10 max-w-2xl">
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Ready to Accelerate Your Clinical Development?
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Let's discuss how we can deliver similar results for your programs.
                  </p>
                  <a href="https://calendly.com/avidys_meeting" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-background font-semibold hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105 text-lg">
                    Get Started
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default OurImpact;