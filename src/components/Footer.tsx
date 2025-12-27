const Footer = () => {
  return (
    <footer className="border-t border-primary/30 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/70 font-mono">
            © {new Date().getFullYear()} M. Shashank. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
