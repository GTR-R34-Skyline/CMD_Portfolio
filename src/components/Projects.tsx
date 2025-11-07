import { Award, TrendingUp, Map, Bot, DollarSign, Home, Hand, FileText, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AgriHub",
      description: "ML-driven farming platform for crop insights, seed quality prediction, and insurance support",
      achievement: "🏆 1st Place at SVCE Innovates 2024",
      icon: TrendingUp,
      tags: ["Machine Learning", "Agriculture", "Insurance"],
      pdfUrl: "/AGRIHUB.pdf"
    },
    {
      title: "EcoTrack",
      description: "Smart waste collection navigator using real-time analytics and predictive routing",
      achievement: "📄 Best Paper Presentation at ICMCTT-IV 2024",
      icon: Award,
      tags: ["IoT", "Analytics", "Routing"],
      pdfUrl: "/ecotrack.pdf"
    },
    {
      title: "Jharkhand Tourism App",
      description: "Geo-based tourism navigation with real-time travel guides and cultural insights",
      icon: Map,
      tags: ["Mobile", "Geolocation", "Tourism"],
    },
    {
      title: "Jarvis",
      description: "Python-based personal assistant with NLP, voice recognition, and automation",
      icon: Bot,
      tags: ["Python", "NLP", "Automation"],
    },
    {
      title: "Loan Aura",
      description: "Loan eligibility and credit scoring using LightGBM and ONNX for scalable inference",
      icon: DollarSign,
      tags: ["ML", "LightGBM", "ONNX"],
    },
    {
      title: "E-R Homie",
      description: "Emotion-aware home automation system using multi-modal sensor data (under review)",
      icon: Home,
      tags: ["IoT", "Emotion AI", "Automation"],
      status: "Under Review"
    },
    {
      title: "Gesture-to-Tamil Translation",
      description: "ANN-powered gesture interpretation converted to Tamil text (under review)",
      icon: Hand,
      tags: ["Neural Networks", "NLP", "Accessibility"],
      status: "Under Review"
    },
  ];

  return (
  <section id="projects" className="relative overflow-hidden py-4">
      <div className="section-container relative z-10">
        <div className="max-w-7xl mx-auto space-y-2 animate-fade-in font-mono">
          {/* Terminal window frame for Projects section */}
          <div className="terminal-frame-no-green">
            <div className="terminal-header-no-green">
              <div className="flex gap-2">
                <div className="terminal-button-no-green"></div>
                <div className="terminal-button-no-green active"></div>
                <div className="terminal-button-no-green"></div>
              </div>
              <span className="ml-4 text-sm text-foreground/70">projects.txt — 80x24</span>
            </div>

            <div className="terminal-content space-y-1">
              <div className="space-y-1 text-sm md:text-base">
                <div className="flex items-start gap-2">
                  <span className="text-accent font-bold">$</span>
                  <div className="flex-1">
                    <div className="inline text-foreground cmd-line typing">cat projects.txt</div>
                  </div>
                </div>

                <div className="ml-1 space-y-1 text-foreground">
                  <div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter mb-1">
                      <span className="gradient-text">Featured Projects</span>
                    </h2>
                  </div>
                  <p className="text-foreground/80 text-sm max-w-2xl leading-relaxed">
                    From prototype to production — building solutions that solve real-world problems
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Projects grid in terminal style */}
          <div className="space-y-2">
            {/* Row 1: 3 Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
              {projects.slice(0, 3).map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>

            {/* Row 2: 3 Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
              {projects.slice(3, 6).map((project, index) => (
                <ProjectCard key={index + 3} project={project} index={index + 3} />
              ))}
            </div>

            {/* Row 3: 1 Centered Card */}
            <div className="flex justify-center">
              <div className="w-full md:w-2/3 lg:w-1/3">
                <ProjectCard project={projects[6]} index={6} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <div className="terminal-frame-no-green h-full">
      <div className="terminal-header-no-green">
        <div className="flex gap-2">
          <div className="terminal-button-no-green"></div>
          <div className="terminal-button-no-green active"></div>
          <div className="terminal-button-no-green"></div>
        </div>
        <span className="ml-4 text-xs text-foreground/70">{project.title.toLowerCase().replace(/\s+/g, '_')}</span>
      </div>
      <div className="terminal-content space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-accent font-bold">$</span>
          <span className="text-foreground/60 text-xs">cat {project.title.toLowerCase().replace(/\s+/g, '_')}.txt</span>
        </div>
        <div className="ml-1 space-y-1">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <project.icon className="h-6 w-6 text-accent flex-shrink-0" />
              <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
            </div>
            {project.status && (
              <span className="px-2 py-1 text-xs border border-accent/50 bg-accent/10 text-accent font-mono">
                {project.status}
              </span>
            )}
          </div>
          
          <p className="text-sm text-foreground/80 leading-relaxed">
            {project.description}
          </p>

          {project.achievement && (
            <div className="py-2 border-y border-accent/20">
              <p className="text-xs font-bold text-accent text-center">{project.achievement}</p>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string, tagIndex: number) => (
              <span
                key={tagIndex}
                className="px-2 py-1 text-xs border border-accent/50 bg-accent/10 text-accent font-mono hover:bg-accent/20 hover:border-accent transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View Research Paper Link */}
          {project.pdfUrl && (
            <a 
              href={project.pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-xs border border-accent/50 bg-accent/10 text-accent font-mono hover:bg-accent/20 hover:border-accent transition-all duration-300 w-full justify-center"
            >
              <FileText className="h-3 w-3" />
              View Research Paper
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
