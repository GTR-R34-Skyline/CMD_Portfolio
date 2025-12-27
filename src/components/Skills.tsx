const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "C", "SQL"],
      command: "ls languages/",
    },
    {
      title: "Frameworks & Tools",
      skills: ["Flask", "REST APIs", "Pandas", "NumPy", "Git", "AWS", "HTML", "CSS"],
      command: "ls frameworks/",
    },
    {
      title: "Core Strengths",
      skills: ["Backend Development", "Data Structures & Algorithms", "System Design", "ML Pipelines", "Production Deployment"],
      command: "ls strengths/",
    },
  ];

  return (
  <section id="skills" className="relative overflow-hidden py-4">
      <div className="section-container relative z-10">
        <div className="max-w-6xl mx-auto space-y-2 animate-fade-in font-mono">
          {/* Terminal window frame for Skills section */}
          <div className="terminal-frame-no-green">
            <div className="terminal-header-no-green">
              <div className="flex gap-2">
                <div className="terminal-button-no-green"></div>
                <div className="terminal-button-no-green active"></div>
                <div className="terminal-button-no-green"></div>
              </div>
              <span className="ml-4 text-sm text-foreground/70">skills.txt — 80x24</span>
            </div>

            <div className="terminal-content space-y-1">
              <div className="space-y-1 text-sm md:text-base">
                <div className="flex items-start gap-2">
                  <span className="text-accent font-bold">$</span>
                  <div className="flex-1">
                    <div className="inline text-foreground cmd-line typing">cat skills.txt</div>
                  </div>
                </div>

                <div className="ml-1 space-y-1 text-foreground">
                  <div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter mb-1">
                      <span className="gradient-text">Technical Skills</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skill categories in terminal style */}
          <div className="grid md:grid-cols-3 gap-2">
            {skillCategories.map((category, index) => (
              <div key={index} className="terminal-frame-no-green">
                <div className="terminal-header-no-green">
                  <div className="flex gap-2">
                    <div className="terminal-button-no-green"></div>
                    <div className="terminal-button-no-green active"></div>
                    <div className="terminal-button-no-green"></div>
                  </div>
                  <span className="ml-4 text-xs text-foreground/70">{category.title.toLowerCase()}</span>
                </div>
                <div className="terminal-content space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-accent font-bold">$</span>
                    <span className="text-foreground/60 text-xs">{category.command}</span>
                  </div>
                  <div className="ml-1 space-y-0.5">
                    <h3 className="font-bold text-lg text-foreground mb-0.5">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-xs border border-accent/50 bg-accent/10 text-accent font-mono hover:bg-accent/20 hover:border-accent transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
