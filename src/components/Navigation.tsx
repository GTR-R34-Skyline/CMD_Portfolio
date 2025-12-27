import React, { useState, useEffect } from "react"
import { Menu, X, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", label: "home" },
    { href: "#about", label: "about" },
    { href: "#skills", label: "skills" },
    { href: "#experience", label: "experience" },
    { href: "#projects", label: "projects" },
    { href: "#achievements", label: "achievements" },
    { href: "#contact", label: "contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-primary/30 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg" : "bg-transparent border-b-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="text-lg font-bold gradient-text flex items-center gap-2 glitch-text"
            onClick={() => scrollToSection("#home")}
          >
            <Terminal className="w-5 h-5" />
            user@shashank:~$
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2 font-mono text-sm">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-foreground/80 hover:text-primary transition-colors hover:border-b-2 border-primary"
              >
                [{link.label}]
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-secondary border-t border-primary/30 animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-1 font-mono text-sm">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary transition-colors hover:bg-primary/10"
              >
                [{link.label}]
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation;
