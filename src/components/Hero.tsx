import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-8 pb-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-4 leading-tight">
            Engineer in Robotics, Algorithms, and Mathematical Modeling
          </h1>
          <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
            Professional Timeline
          </h2>
          <div className="w-24 h-1 hero-gradient mx-auto rounded-full mb-8"></div>
        </div>

        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          A curious and dedicated person with experience at the intersection of robotics, computer science, and applied mathematics. Specialized in algorithms, data structures, graph theory, and mathematical modeling — particularly within robotics and optimization problems. Experience with both theoretical analysis and practical programming. Positive, approachable, and motivated by transforming new knowledge into solutions.
        </p>

        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground">
            The timeline is created with AI agent-based programming. I am learning and experimenting with Lovable to showcase selected projects in an interactive format.
          </p>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/20 hover:bg-primary/5"
            asChild
          >
            <a href="https://github.com/Kristine23" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/20 hover:bg-primary/5"
            asChild
          >
            <a href="https://www.linkedin.com/in/kristine-vitting-klinkby-knudsen-43b329369" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
        </div>

        <div className="flex gap-6 justify-center items-center mt-12">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-muted-foreground">Project</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-muted-foreground">Job</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-sm text-muted-foreground">Other</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;