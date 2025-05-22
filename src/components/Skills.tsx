
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      name: "Languages & Frameworks",
      skills: [
        "ADO.NET", 
        "Entity Framework", 
        "ASP.NET MVC", 
        "HTML", 
        "CSS", 
        "JavaScript",
        "C#",
        "TypeScript"
      ],
    },
    {
      name: "Tools & Technologies",
      skills: [
        "Micro-services",
        "SQL",
        "Database Design",
        "Git",
        "Visual Studio",
        "VS Code",
        "RESTful APIs"
      ],
    },
    {
      name: "Other Skills",
      skills: [
        "Advanced Search Engine Optimization",
        "Web Development",
        "Problem Solving",
        "Technical Documentation",
        "Agile Methodology"
      ],
    },
    {
      name: "Certifications",
      skills: [
        "Cyberhack village 1.0",
        "Masterclass - database and sql",
        "SUPPORTING AND ENGAGING PEOPLE WITH AUTISM",
        "HTML, CSS, and Javascript for Web Developers"
      ],
    }
  ];

  return (
    <section id="skills" className="bg-muted/20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border border-muted/50 bg-background">
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary"
                      className="px-3 py-1 text-sm font-medium rounded-md"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
