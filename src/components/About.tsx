
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="bg-muted/20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Software Engineer based in India</h3>
            <p>
              With more than 1.5 years of experience in web and app development using micro-services architecture, 
              I specialize in crafting user-centric, responsive, and high-performance applications. 
              My expertise spans designing dynamic interfaces, writing efficient code, and integrating 
              innovative features to create impactful solutions.
            </p>
            <p>
              I thrive in collaborative environments where I can learn, innovate, and contribute to 
              meaningful projects. Whether it's enhancing user experiences or solving complex technical 
              challenges, I am driven to deliver excellence in every line of code and also document the 
              process and pitfalls throughout the journey.
            </p>
            <p>
              Currently working at Carelon Global Solutions as an Associate Software Engineer, I continue 
              to expand my knowledge and skills while contributing to impactful projects.
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-background border border-muted/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <span className="text-muted-foreground">Name:</span>
                    <span>Dheeraj Kumar Rai</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="text-muted-foreground">Location:</span>
                    <span>Gurugram, Haryana, India</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="text-muted-foreground">Email:</span>
                    <span className="overflow-hidden text-ellipsis">dkrkv1107@icloud.com</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="text-muted-foreground">Education:</span>
                    <span>Bachelor's degree, Computer Science</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="text-muted-foreground">Experience:</span>
                    <span>1.5+ years</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
