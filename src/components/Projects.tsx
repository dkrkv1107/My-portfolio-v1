
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Healthcare Management System",
      description:
        "Developed a micro-service based healthcare management system with patient records, appointment scheduling, and billing features.",
      tags: ["ASP.NET MVC", "Entity Framework", "SQL", "Micro-services"],
      link: "#",
    },
    {
      title: "E-commerce Platform",
      description:
        "Built a responsive e-commerce platform with product catalog, shopping cart, and user authentication functionality.",
      tags: ["ADO.NET", "JavaScript", "HTML/CSS", "RESTful APIs"],
      link: "#",
    },
    {
      title: "Search Engine Optimization Tool",
      description:
        "Created an advanced SEO analysis tool that provides recommendations for improving website visibility and performance.",
      tags: ["C#", "JavaScript", "Web Scraping", "Data Analysis"],
      link: "#",
    },
  ];

  return (
    <section id="projects">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills in
            developing user-centric, responsive, and high-performance applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="border border-muted/50 bg-muted/10 hover:border-muted/80 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="default" size="sm" asChild>
                  <a href={project.link}>View Project</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
