import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Linkedin, Award, Target, TrendingUp } from "lucide-react";
import jenniferDuggan from "@/assets/jennifer-duggan.png";
import jeanMaupas from "@/assets/jean-maupas.png";

const leaders = [
  {
    name: "Jennifer Duggan",
    credentials: "BSc, MBA",
    title: "Co-Founder and CEO",
    bio: "Jennifer is a clinical research leader with 20+ years of experience advancing therapies through first-in-human studies, pivotal trials, and post-market programs for Class III medical devices. With deep experience built from managing hundreds of global clinical trials, she is known for translating complex strategies into clear, actionable execution and data-driven problem solving—all while building strong partnerships and ensuring audit readiness and regulatory success.",
    strengths: [
      {
        title: "Strategic Clinical Leadership",
        description:
          "Over 20 years managing global clinical trials with end-to-end oversight of 100+ studies annually and $100M budgets—delivering FDA PMA submissions and BIMO-ready programs on time and on budget.",
        icon: Target,
      },
      {
        title: "Data-Driven Mindset",
        description:
          "Leverages high-quality clinical and operational data to enable timely, evidence-based decisions—streamlining trial execution, accelerating regulatory submissions, and supporting strategic portfolio planning.",
        icon: TrendingUp,
      },
      {
        title: "Brings clarity to ambiguity",
        description:
          "Known for cutting through complexity to find the most effective path forward, driving efficient solutions and clear strategies in fast-paced, highly regulated clinical environments.",
        icon: Award,
      },
    ],
    linkedin: "http://www.linkedin.com/in/jennifer-m-duggan",
  },
  {
    name: "Jean Maupas",
    credentials: "MSc, M.D.",
    title: "Co-Founder and CTO/CSO",
    bio: "Jean Maupas is a seasoned clinical research leader with over 25 years of experience spanning medical affairs, clinical operations, biometrics, and data science. Trained as a physician with advanced degrees in biostatistics and clinical informatics, Jean has directed large-scale international clinical trials across diverse therapeutic areas, and brings a unique blend of medical training, statistical expertise, and technical acumen in software engineering and information systems.",
    details: [
      "Managed portfolios of 300+ projects, and overseen data from more than 20,000 patients and 6,000 study sites.",
      "Deep knowledge of regulatory frameworks (ICH, FDA 21 CFR Part 11, EU Annex 11), CDISC/SDTM/ADaM standards (Certified), and computer system life cycle and validation (GAMP 5, ISO 9001).",
      "Leadership roles at InCarda, Corcept, CytomX, Boston Scientific, Janssen, Biovail/Valeant, and EORTC.",
      "Built innovative EDC/IWRS platforms and delivered FDA and EMA submissions.",
      "Developed novel data visualization and analytics tools, with numerous conference presentations and scientific publications.",
    ],
    closing:
      "Jean combines strategic vision with hands-on technical skills. He integrates cutting-edge technologies with clinical research, from early-phase studies to pivotal trials and post-market programs. Through Avidys, Jean leverages his deep expertise in clinical science, regulatory standards, and advanced analytics to accelerate the delivery of therapies to patients worldwide.",
    linkedin: "https://www.linkedin.com/in/maupas/",
    scholar: "https://scholar.google.com/citations?hl=en&user=DiQ6YWEAAAAJ&view_op=list_works&sortby=pubdate",
  },
];

const Leadership = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.1)_0%,transparent_50%)]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-block px-6 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6 animate-fade-in">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">Our Leadership</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
              About{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
            <p className="text-xl text-muted-foreground">
              Empowering Innovation by Linking Clinical Science, Strategy, Execution, and Meaningful Data to Advance
              Patient Care.
            </p>
          </div>

          {/* Leadership Profiles */}
          <div ref={ref} className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className={`group transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-10"}`}
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-all duration-500" />
                  <Card className="relative border-border/50 hover:border-primary/50 transition-all duration-300 bg-card/60 backdrop-blur-md h-full">
                    <CardContent className="p-8">
                      <div className="flex flex-col gap-6">
                        {/* Profile Image */}
                        <div className="flex justify-center mb-4">
                          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                            <img 
                              src={idx === 0 ? jenniferDuggan : jeanMaupas} 
                              alt={leader.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        {/* Header */}
                        <div className="text-center">
                          <h2 className="text-3xl font-bold mb-2 text-foreground">
                            {leader.name}
                            <span className="text-primary ml-2">{leader.credentials}</span>
                          </h2>
                          <p className="text-lg text-muted-foreground mb-4">{leader.title}</p>
                        </div>

                        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                        {/* Bio */}
                        <p className="text-foreground/90 leading-relaxed">{leader.bio}</p>

                        {/* Jennifer's Strengths or Jean's Details */}
                        {leader.strengths ? (
                          <>
                            <div className="inline-block px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 mx-auto">
                              <p className="text-xs font-semibold text-primary uppercase tracking-wide">
                                What She Brings to the Team
                              </p>
                            </div>
                            <div className="space-y-4">
                              {leader.strengths.map((strength, i) => {
                                const Icon = strength.icon;
                                return (
                                  <div key={i} className="relative group/item">
                                    <div className="relative p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 transition-all duration-300">
                                      <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                                          <Icon className="w-5 h-5 text-background" />
                                        </div>
                                        <div>
                                          <h4 className="font-semibold text-foreground mb-1">{strength.title}</h4>
                                          <p className="text-sm text-muted-foreground leading-relaxed">{strength.description}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="space-y-2">
                              {leader.details.map((detail, i) => (
                                <div key={i} className="flex items-start gap-3">
                                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  <p className="text-sm text-foreground/90 leading-relaxed">{detail}</p>
                                </div>
                              ))}
                            </div>
                            <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                              <p className="text-sm text-foreground/90 leading-relaxed italic">{leader.closing}</p>
                            </div>
                          </>
                        )}

                        {/* Links */}
                        <div className="flex flex-wrap gap-3 justify-center">
                          <a
                            href={leader.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                          >
                            <Linkedin className="w-4 h-4 text-primary" />
                            <span className="text-xs font-semibold text-primary">LinkedIn</span>
                          </a>
                          {leader.scholar && (
                            <a
                              href={leader.scholar}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 hover:bg-accent/20 hover:border-accent/50 transition-all duration-300"
                            >
                              <Award className="w-4 h-4 text-accent" />
                              <span className="text-xs font-semibold text-accent">Scholar</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leadership;
