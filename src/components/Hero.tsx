
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background to-background"></div>
      </div>

      <div className="section-container z-10 animate-fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient">
            Dheeraj Kumar Rai
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            Associate Software Engineer
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            I specialize in crafting user-centric, responsive, and high-performance applications 
            using micro-services architecture. My expertise spans designing dynamic interfaces, 
            writing efficient code, and integrating innovative features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="#contact">Get in touch</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#about">Learn more about me</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={30} className="text-foreground opacity-50" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
