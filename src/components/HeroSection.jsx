import { ArrowDown } from "lucide-react";
import img from "../assets/img.JPEG";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <div className="flex justify-center items-center">
            <img
              src={img}
              className="rounded-full w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 object-top object-cover"
              alt=""
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight ">
            <span className="opacity-0 animate-fade-in"> Hi, I am</span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-1">
              {" "}
              S M
            </span>
            <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Samin
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 backdrop-blur-lg">
            MERN Stack Developer & Machine Learning Engineer focused on building
            scalable web apps and smart solutions.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
