import { GraduationCap, Code, TrendingUp } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Sobre Mim
            </h2>
            <div className="w-20 h-1 gradient-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-4 lg:gap-6 items-start mb-8">
            <Card className="shadow-card hover:shadow-glow transition-smooth border-border/50 backdrop-blur">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Code className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Experiência</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Experiência prática em desenvolvimento full stack, criando
                      projetos com React, React Native, Next.js, C#, Python e Windows Forms.
                      Tenho conhecimento em Scrum Foundation, integração de APIs, Amazon AWS S3, Docker,
                      e versionamento com Git/GitHub & Actions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-glow transition-smooth border-border/50 backdrop-blur">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Educação</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Análise e Desenvolvimento de Sistemas & Full Stack
                      Development
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-card hover:shadow-glow transition-smooth border-accent/20 bg-accent/5 backdrop-blur">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Atualmente...</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Estou focado em aprimorar minhas habilidades em
                    desenvolvimento. Além disso, estou sempre buscando aprimorar
                    minha lógica de programação, aprender novas ferramentas, como
                    metodologias ágeis, Eng. Soft, DevOps, I.A para me tornar um profissional cada vez
                    mais completo.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
