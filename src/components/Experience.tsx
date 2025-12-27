import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
  <section id="experience" className="relative overflow-hidden py-4">
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto space-y-2 animate-fade-in font-mono">
          {/* Terminal window frame for Experience section */}
          <div className="terminal-frame-no-green">
            <div className="terminal-header-no-green">
              <div className="flex gap-2">
                <div className="terminal-button-no-green"></div>
                <div className="terminal-button-no-green active"></div>
                <div className="terminal-button-no-green"></div>
              </div>
              <span className="ml-4 text-sm text-foreground/70">experience.txt — 80x24</span>
            </div>

            <div className="terminal-content space-y-1">
              <div className="space-y-1 text-sm md:text-base">
                <div className="flex items-start gap-2">
                  <span className="text-accent font-bold">$</span>
                  <div className="flex-1">
                    <div className="inline text-foreground cmd-line typing">cat experience.txt</div>
                  </div>
                </div>

                <div className="ml-1 space-y-1 text-foreground">
                  <div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter mb-1">
                      <span className="gradient-text">Work Experience</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience card in terminal style */}
          <div className="terminal-frame-no-green">
            <div className="terminal-header-no-green">
              <div className="flex gap-2">
                <div className="terminal-button-no-green"></div>
                <div className="terminal-button-no-green active"></div>
                <div className="terminal-button-no-green"></div>
              </div>
              <span className="ml-4 text-xs text-foreground/70">graas_internship</span>
            </div>
            <div className="terminal-content space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-accent font-bold">$</span>
                <span className="text-foreground/60 text-xs">cat graas_internship.txt</span>
              </div>
              <div className="ml-1 space-y-1">
                <div className="flex items-start gap-2">
                  <Briefcase className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div className="flex-1 space-y-1">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div className="space-y-0.5">
                        <h3 className="text-2xl font-bold text-foreground">Product Engineer Intern</h3>
                        <p className="text-accent font-bold text-lg">Graas</p>
                      </div>
                      <div className="flex items-center gap-1 px-1.5 py-0.5 border border-accent/50 bg-accent/10 text-xs">
                        <Calendar className="h-3 w-3 text-accent" />
                        <span className="font-semibold text-accent">Jan 2025 – Feb 2025</span>
                      </div>
                    </div>
                    <ul className="space-y-1 text-foreground/80 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1 font-bold">▸</span>
                        <span className="leading-relaxed">Worked on full-stack and Python-based systems, contributing to scalable backend features</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1 font-bold">▸</span>
                        <span className="leading-relaxed">Optimized performance and delivered production-grade enhancements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1 font-bold">▸</span>
                        <span className="leading-relaxed">Successfully completed internship with ₹15,000 stipend</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
