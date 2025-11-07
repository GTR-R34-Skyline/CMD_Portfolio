import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const typewriterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const container = document.getElementById("home")
    const resizeCanvas = () => {
      const width = container?.clientWidth || window.innerWidth
      const height = container?.clientHeight || window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    resizeCanvas()

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
    const fontSize = 20
    let columns = Math.floor(canvas.width / fontSize)
    let drops: number[] = []

    const resetDrops = () => {
      columns = Math.max(1, Math.floor(canvas.width / fontSize))
      drops = new Array(columns).fill(0).map(() => Math.random() * canvas.height)
    }

    resetDrops()

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#FFFFFF"
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const opacity = Math.random() * 0.8 + 0.2
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.fillText(char, i * fontSize, drops[i])

        if (drops[i] * Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i] += fontSize
      }

      requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      resizeCanvas()
      resetDrops()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section id="home" className="flex items-center justify-center relative overflow-hidden pt-16">
      {/* Matrix Background */}
    <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-10" />

      {/* Scan line overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-[2px] animate-scan-line pointer-events-none z-5" />

      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto space-y-12 animate-fade-in font-mono">
          {/* Terminal window frame */}
          <div className="terminal-frame card-hover">
            <div className="terminal-header">
              <div className="flex gap-2">
                <div className="terminal-button"></div>
                <div className="terminal-button active"></div>
                <div className="terminal-button"></div>
              </div>
              <span className="ml-4 text-sm text-foreground/70">terminal — 120x40</span>
            </div>

            <div className="terminal-content space-y-6">
              {/* Command prompt section */}
              <div className="space-y-4 text-sm md:text-base">
                <div className="flex items-start gap-2">
                  <span className="text-accent font-bold">$</span>
                  <div className="flex-1">
                    <div className="inline text-foreground cmd-line typing">whoami</div>
                  </div>
                </div>

                {/* Hero content in terminal format */}
                <div className="ml-4 space-y-4 text-foreground">
                  <div>
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter">
                      <span className="gradient-text">M. Shashank</span>
                    </h1>
                  </div>

                  <div className="text-sm md:text-base">
                    <p className="text-foreground/80">Software Development Engineer</p>
                    <p className="text-muted-foreground text-xs md:text-sm mt-2">
                      Full-stack • Backend Systems • ML Solutions
                    </p>
                  </div>

                  <div className="text-sm space-y-2 text-foreground/90">
                    <p>Building efficient, production-ready applications that solve real-world problems.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-4">
                  <span className="text-accent font-bold">$</span>
                  <span className="text-foreground/60">./portfolio --help</span>
                </div>
              </div>

              {/* CTA Buttons - Terminal Style */}
              <div className="flex flex-wrap gap-4 pt-6 ml-4">
                <Button
                  size="lg"
                  className="btn-terminal group text-sm font-mono"
                  onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <span>→ view_projects</span>
                </Button>
                <Button size="lg" className="btn-terminal-outline group text-sm font-mono" asChild>
                  <a href="/Shashank_Resume.pdf" download>
                    ↓ download_resume.pdf
                  </a>
                </Button>
              </div>

              {/* Social Links - Terminal Format */}
              <div className="flex flex-wrap gap-3 pt-4 ml-4 text-sm">
                <Button
                  variant="ghost"
                  className="text-primary hover:text-accent hover:bg-primary/10 font-mono px-3"
                  asChild
                >
                  <a href="https://github.com/GTR-R34-Skyline" target="_blank" rel="noopener noreferrer">
                    [github]
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  className="text-primary hover:text-accent hover:bg-primary/10 font-mono px-3"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/shashank-murari-rb26dett/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    [linkedin]
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  className="text-primary hover:text-accent hover:bg-primary/10 font-mono px-3"
                  asChild
                >
                  <a href="mailto:shashank.gtrv@gmail.com">[email]</a>
                </Button>
              </div>
            </div>
          </div>

          {/* System info box */}
          <div className="terminal-frame p-4 text-xs md:text-sm">
            <div className="space-y-1 text-foreground/70">
              <div>~ System Information ~</div>
              <div>User: Shashank | Status: Available for opportunities</div>
              <div>Skills: Python • Java • React • Node.js • AWS • ML</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
