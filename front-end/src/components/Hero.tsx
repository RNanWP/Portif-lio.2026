import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "../components/ui/button";
import heroBg from "../assets/hero-bg.jpg";
import profilePlaceholder from "../assets/profile-placeholder.svg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background com overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 gradient-hero opacity-95" />
      </div>

      {/* Content - Layout Redesenhado */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <div
              className="flex-shrink-0 animate-fade-in-up"
              style={{
                animationDelay: "0.1s",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              <div className="relative">
                {/* Foto de Perfil Circular */}
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-accent/30 shadow-glow">
                  <img
                    src={profilePlaceholder}
                    alt="Renan Oliveira"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -z-10 inset-0 bg-accent/10 rounded-full blur-3xl scale-110" />
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <div
                className="animate-fade-in-up"
                style={{
                  animationDelay: "0.1s",
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                <p className="text-accent text-sm sm:text-base md:text-lg font-medium mb-4 tracking-wider uppercase drop-shadow-md">
                  Olá, eu sou
                </p>
              </div>

              {/* Name */}
              <div
                className="animate-fade-in-up"
                style={{
                  animationDelay: "0.3s",
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
                  Renan Oliveira
                </h1>
              </div>

              {/* Title */}
              <div
                className="animate-fade-in-up"
                style={{
                  animationDelay: "0.5s",
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 drop-shadow-md">
                  Student: I.T Full Stack Developer
                </p>
              </div>

              {/* CTA Buttons */}
              <div
                className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
                style={{
                  animationDelay: "0.7s",
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-primary shadow-glow transition-smooth w-full sm:w-auto"
                  onClick={() => window.open("mailto:renan92011@hotmail.com")}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Entrar em Contato
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/30 transition-smooth w-full sm:w-auto"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </div>

              {/* Social Links - Ícones brancos */}
              <div
                className="animate-fade-in flex justify-center lg:justify-start gap-6"
                style={{
                  animationDelay: "0.9s",
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                <a
                  href="https://www.linkedin.com/in/renanodev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-accent transition-smooth hover:scale-110"
                >
                  <Linkedin className="h-6 w-6 sm:h-8 sm:w-8" />
                </a>
                <a
                  href="https://github.com/RNanWP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-accent transition-smooth hover:scale-110"
                >
                  <Github className="h-6 w-6 sm:h-8 sm:w-8" />
                </a>
                <a
                  href="mailto:renan92011@hotmail.com"
                  className="text-white/80 hover:text-accent transition-smooth hover:scale-110"
                >
                  <Mail className="h-6 w-6 sm:h-8 sm:w-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
