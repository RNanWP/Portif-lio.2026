import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-6">
            {/* Social Links */}
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/renanodev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-smooth hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/RNanWP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-smooth hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:renan92011@hotmail.com"
                className="text-muted-foreground hover:text-accent transition-smooth hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
                © {currentYear} Renan Oliveira. Feito com{" "}
                <Heart className="h-4 w-4 text-accent fill-accent animate-pulse" />{" "}
                e muito código
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
