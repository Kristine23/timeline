import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
          Engineer in Robotics, Algorithms, and Mathematical Modeling
        </h1>
        
        <div className="flex gap-4 justify-center items-center">
          <Button 
            variant="outline" 
            size="sm"
            className="border-primary/20 hover:bg-primary/5"
            asChild
          >
            <a href="https://github.com/Kristine23" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="sm"
            className="border-primary/20 hover:bg-primary/5"
            asChild
          >
            <a href="https://www.linkedin.com/in/kristine-vitting-klinkby-knudsen-43b329369" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;