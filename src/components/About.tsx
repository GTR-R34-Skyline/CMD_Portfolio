import { GraduationCap, Briefcase, Award } from "lucide-react";

const About = () => {
  return (
  <section id="about" className="relative overflow-hidden py-4">
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto space-y-2 animate-fade-in font-mono">
          {/* Terminal window frame for About section */}
          <div className="terminal-frame-no-green">
            <div className="terminal-header-no-green">
              <div className="flex gap-2">
                <div className="terminal-button-no-green"></div>
                <div className="terminal-button-no-green active"></div>
                <div className="terminal-button-no-green"></div>
              </div>
              <span className="ml-4 text-sm text-foreground/70">about.txt — 80x24</span>
            </div>

            <div className="terminal-content space-y-1">
              {/* Command prompt section */}
              <div className="space-y-1 text-sm md:text-base">
                <div className="flex items-start gap-2">
                  <span className="text-accent font-bold">$</span>
                  <div className="flex-1">
                    <div className="inline text-foreground cmd-line typing">cat about.txt</div>
                  </div>
                </div>

                {/* About content in terminal format */}
                <div className="ml-1 space-y-1 text-foreground">
                  <div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter mb-1">
                      <span className="gradient-text">About Me</span>
                    </h2>
                  </div>

                  <div className="text-sm md:text-base space-y-3 text-foreground/90 leading-relaxed">
                    <p>
                      I'm a Bachelor of Engineering student at Sri Venkateswara College of Engineering with a strong foundation 
                      in software development, machine learning, and backend engineering. My work spans web applications, 
                      ML-powered platforms, and automation tools, backed by hackathon wins, research publications, and industry experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Three feature sections in terminal style */}
          <div className="grid md:grid-cols-3 gap-2">
            {/* Education */}
            <div className="terminal-frame-no-green">
              <div className="terminal-header-no-green">
                <div className="flex gap-2">
                  <div className="terminal-button-no-green"></div>
                  <div className="terminal-button-no-green active"></div>
                  <div className="terminal-button-no-green"></div>
                </div>
                <span className="ml-4 text-xs text-foreground/70">education</span>
              </div>
              <div className="terminal-content space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-accent font-bold">$</span>
                  <span className="text-foreground/60 text-xs">ls -la education/</span>
                </div>
                <div className="ml-1 space-y-0.5">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-6 w-6 text-accent" />
                    <h3 className="font-bold text-lg text-foreground">Education</h3>
                  </div>
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    Bachelor of Engineering from Sri Venkateswara College of Engineering, building strong CS fundamentals
                  </p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="terminal-frame-no-green">
              <div className="terminal-header-no-green">
                <div className="flex gap-2">
                  <div className="terminal-button-no-green"></div>
                  <div className="terminal-button-no-green active"></div>
                  <div className="terminal-button-no-green"></div>
                </div>
                <span className="ml-4 text-xs text-foreground/70">experience</span>
              </div>
              <div className="terminal-content space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-accent font-bold">$</span>
                  <span className="text-foreground/60 text-xs">ls -la experience/</span>
                </div>
                <div className="ml-1 space-y-0.5">
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-6 w-6 text-accent" />
                    <h3 className="font-bold text-lg text-foreground">Experience</h3>
                  </div>
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    Product Engineer Intern at Graas, contributing to production deployments and scalable backend services
                  </p>
                </div>
              </div>
            </div>

            {/* Recognition */}
            <div className="terminal-frame-no-green">
              <div className="terminal-header-no-green">
                <div className="flex gap-2">
                  <div className="terminal-button-no-green"></div>
                  <div className="terminal-button-no-green active"></div>
                  <div className="terminal-button-no-green"></div>
                </div>
                <span className="ml-4 text-xs text-foreground/70">recognition</span>
              </div>
              <div className="terminal-content space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-accent font-bold">$</span>
                  <span className="text-foreground/60 text-xs">ls -la recognition/</span>
                </div>
                <div className="ml-1 space-y-0.5">
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-accent" />
                    <h3 className="font-bold text-lg text-foreground">Recognition</h3>
                  </div>
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    Multiple hackathon wins, research publications, and active participation in national-level competitions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
