import { Trophy, Award, BookOpen, Users, Camera, Medal, Shield } from "lucide-react";

const Achievements = () => {
  const achievements = [
    { icon: Award, title: "Best Paper Presentation", detail: "ICMCTT-IV 2024" },
    { icon: Trophy, title: "1st Place", detail: "SVCE Innovates 2024" },
    { icon: Medal, title: "Top 50 (Rank 14/300+)", detail: "IIT Madras Hackathon" },
    { icon: BookOpen, title: "Co-author", detail: "Book chapter in Applied ML for IoT" },
    { icon: Users, title: "Google Ambassador", detail: "for SVCE" },
    { icon: Camera, title: "Senior Photographer", detail: "Photography Club of SVCE" },
    { icon: Trophy, title: "3rd Place + Paid Internship", detail: "Eclearnix Hackathon" },
  ];

  return (
  <section id="achievements" className="relative overflow-hidden py-4">
      <div className="section-container relative z-10">
        <div className="max-w-6xl mx-auto space-y-2 animate-fade-in font-mono">
          {/* Terminal window frame for Achievements section */}
          <div className="terminal-frame-no-green">
            <div className="terminal-header-no-green">
              <div className="flex gap-2">
                <div className="terminal-button-no-green"></div>
                <div className="terminal-button-no-green active"></div>
                <div className="terminal-button-no-green"></div>
              </div>
              <span className="ml-4 text-sm text-foreground/70">achievements.txt — 80x24</span>
            </div>

            <div className="terminal-content space-y-1">
              <div className="space-y-1 text-sm md:text-base">
                <div className="flex items-start gap-2">
                  <span className="text-accent font-bold">$</span>
                  <div className="flex-1">
                    <div className="inline text-foreground cmd-line typing">cat achievements.txt</div>
                  </div>
                </div>

                <div className="ml-1 space-y-1 text-foreground">
                  <div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter mb-1">
                      <span className="gradient-text">Achievements & Recognition</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements grid in terminal style */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {achievements.map((achievement, index) => (
              <div key={index} className="terminal-frame-no-green h-full">
                <div className="terminal-header-no-green">
                  <div className="flex gap-2">
                    <div className="terminal-button-no-green"></div>
                    <div className="terminal-button-no-green active"></div>
                    <div className="terminal-button-no-green"></div>
                  </div>
                  <span className="ml-4 text-xs text-foreground/70">{achievement.title.toLowerCase().replace(/\s+/g, '_')}</span>
                </div>
                <div className="terminal-content space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-accent font-bold">$</span>
                    <span className="text-foreground/60 text-xs">ls -la {achievement.title.toLowerCase().replace(/\s+/g, '_')}/</span>
                  </div>
                  <div className="ml-1 space-y-0.5">
                    <div className="flex items-center gap-3">
                      <achievement.icon className="h-6 w-6 text-accent" />
                      <h3 className="font-bold text-lg text-foreground">{achievement.title}</h3>
                    </div>
                    <p className="text-xs text-foreground/70 leading-relaxed">{achievement.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Professional Certifications in terminal style */}
          <div className="terminal-frame-no-green">
            <div className="terminal-header-no-green">
              <div className="flex gap-2">
                <div className="terminal-button-no-green"></div>
                <div className="terminal-button-no-green active"></div>
                <div className="terminal-button-no-green"></div>
              </div>
              <span className="ml-4 text-sm text-foreground/70">certifications.txt — 80x24</span>
            </div>
            <div className="terminal-content space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-accent font-bold">$</span>
                <span className="text-foreground/60 text-xs">cat certifications.txt</span>
              </div>
              <div className="ml-1 space-y-1">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="h-5 w-5 text-accent" />
                  <h3 className="text-2xl font-bold text-foreground">Professional Certifications</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-1.5">
                  {[
                    "Google Cybersecurity Certificate",
                    "Google Project Management Certificate",
                    "Google AI Essentials",
                    "Python, SQL & Problem Solving – HackerRank",
                    "Data Science & ML – NIELIT",
                    "Blockchain and Applications – NPTEL (Elite)"
                  ].map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 p-1.5 border border-accent/30 bg-accent/5 hover:bg-accent/10 hover:border-accent/50 transition-all duration-300">
                      <span className="text-accent font-bold text-sm">✓</span>
                      <span className="text-xs text-foreground/80 leading-tight font-mono">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
