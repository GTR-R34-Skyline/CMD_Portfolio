import { Mail, MapPin, Github, Linkedin, ExternalLink, Send } from "lucide-react";

const Contact = () => {
  return (
  <section id="contact" className="relative overflow-hidden py-4">
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto space-y-2 animate-fade-in font-mono">
          {/* Terminal window frame for Contact section */}
          <div className="terminal-frame-no-green">
            <div className="terminal-header-no-green">
              <div className="flex gap-2">
                <div className="terminal-button-no-green"></div>
                <div className="terminal-button-no-green active"></div>
                <div className="terminal-button-no-green"></div>
              </div>
              <span className="ml-4 text-sm text-foreground/70">contact.txt — 80x24</span>
            </div>

            <div className="terminal-content space-y-1">
              <div className="space-y-1 text-sm md:text-base">
                <div className="flex items-start gap-2">
                  <span className="text-accent font-bold">$</span>
                  <div className="flex-1">
                    <div className="inline text-foreground cmd-line typing">cat contact.txt</div>
                  </div>
                </div>

                <div className="ml-1 space-y-1 text-foreground">
                  <div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter mb-1">
                      <span className="gradient-text">Get In Touch</span>
                    </h2>
                  </div>
                  <p className="text-foreground/80 text-sm max-w-2xl leading-relaxed">
                    I'm always open to discussing <span className="text-accent font-bold">new projects</span>, <span className="text-accent font-bold">opportunities</span>, or collaborations. Let's build something amazing together!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-2">
            {/* Location & Email Card */}
            <div className="terminal-frame-no-green">
              <div className="terminal-header-no-green">
                <div className="flex gap-2">
                  <div className="terminal-button-no-green"></div>
                  <div className="terminal-button-no-green active"></div>
                  <div className="terminal-button-no-green"></div>
                </div>
                <span className="ml-4 text-xs text-foreground/70">contact_info</span>
              </div>
              <div className="terminal-content space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-accent font-bold">$</span>
                  <span className="text-foreground/60 text-xs">cat contact_info.txt</span>
                </div>
                <div className="ml-1 space-y-1">
                  <div className="flex items-center gap-2 p-1.5 border border-accent/30 bg-accent/5 hover:bg-accent/10 hover:border-accent/50 transition-all duration-300">
                    <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-xs text-foreground/60 mb-1">Location</h3>
                      <p className="font-bold text-sm text-foreground">Chennai, Tamil Nadu</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 p-1.5 border border-accent/30 bg-accent/5 hover:bg-accent/10 hover:border-accent/50 transition-all duration-300">
                    <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-xs text-foreground/60 mb-1">Email</h3>
                      <a href="mailto:shashank.gtrv@gmail.com" className="font-bold text-sm text-accent hover:underline transition-all">
                        shashank.gtrv@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="terminal-frame-no-green">
              <div className="terminal-header-no-green">
                <div className="flex gap-2">
                  <div className="terminal-button-no-green"></div>
                  <div className="terminal-button-no-green active"></div>
                  <div className="terminal-button-no-green"></div>
                </div>
                <span className="ml-4 text-xs text-foreground/70">social_links</span>
              </div>
              <div className="terminal-content space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-accent font-bold">$</span>
                  <span className="text-foreground/60 text-xs">cat social_links.txt</span>
                </div>
                <div className="ml-1 space-y-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Send className="h-5 w-5 text-accent" />
                    <h3 className="font-bold text-lg text-foreground">Connect Online</h3>
                  </div>
                  <div className="space-y-0.5">
                    <a 
                      href="https://github.com/GTR-R34-Skyline" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-1.5 border border-accent/30 bg-accent/5 hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 text-sm font-mono"
                    >
                      <Github className="h-4 w-4 text-accent" />
                      <span className="text-foreground">GitHub Profile</span>
                      <ExternalLink className="ml-auto h-3 w-3 text-accent/50" />
                    </a>
                    
                    <a 
                      href="https://www.linkedin.com/in/shashank-murari-rb26dett/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-1.5 border border-accent/30 bg-accent/5 hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 text-sm font-mono"
                    >
                      <Linkedin className="h-4 w-4 text-accent" />
                      <span className="text-foreground">LinkedIn Profile</span>
                      <ExternalLink className="ml-auto h-3 w-3 text-accent/50" />
                    </a>
                    
                    <a 
                      href="https://developers.google.com/profile/u/GTRDevLab" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-1.5 border border-accent/30 bg-accent/5 hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 text-sm font-mono"
                    >
                      <ExternalLink className="h-4 w-4 text-accent" />
                      <span className="text-foreground">Google Developers</span>
                      <ExternalLink className="ml-auto h-3 w-3 text-accent/50" />
                    </a>
                    
                    <a 
                      href="https://portfolio1-ten-sage.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-1.5 border border-accent/30 bg-accent/5 hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 text-sm font-mono"
                    >
                      <ExternalLink className="h-4 w-4 text-accent" />
                      <span className="text-foreground">Previous Portfolio</span>
                      <ExternalLink className="ml-auto h-3 w-3 text-accent/50" />
                    </a>
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

export default Contact;
