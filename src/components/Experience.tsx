
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "Carelon Global Solutions",
      period: "August 2023 - Present (1 year 10 months)",
      location: "India",
      description:
        "Working on web application development using modern technology stack. Contributing to the design and implementation of micro-services architecture.",
    },
    {
      title: "Frontend Web Developer",
      company: "Befable",
      period: "August 2021 - November 2021 (4 months)",
      location: "India",
      description:
        "Developed responsive user interfaces and implemented frontend functionality for web applications.",
    },
  ];

  const education = [
    {
      degree: "Bachelor's degree, Computer Science",
      institution: "Lovely Professional University",
      period: "July 2019 - July 2023",
      description: 
        "Completed a comprehensive Computer Science program with focus on software development fundamentals and advanced programming concepts.",
    },
  ];

  return (
    <section id="experience">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Experience & Education</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="space-y-12">
          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Professional Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="border border-muted/50 bg-muted/10">
                  <CardHeader>
                    <div className="flex justify-between flex-wrap gap-2">
                      <div>
                        <CardTitle>{exp.title}</CardTitle>
                        <CardDescription className="mt-1">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">{exp.period}</div>
                        <div className="text-sm text-muted-foreground">{exp.location}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border border-muted/50 bg-muted/10">
                  <CardHeader>
                    <div className="flex justify-between flex-wrap gap-2">
                      <div>
                        <CardTitle>{edu.degree}</CardTitle>
                        <CardDescription className="mt-1">
                          {edu.institution}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">{edu.period}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
