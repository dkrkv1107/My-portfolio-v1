
import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-10 border-t border-muted/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Dheeraj Kumar Rai</h3>
            <p className="text-muted-foreground">
              Associate Software Engineer
            </p>
            <p className="text-muted-foreground mt-2">
              Gurugram, Haryana, India
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a 
                href="mailto:dkrkv1107@icloud.com" 
                className="text-foreground hover:text-secondary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/darkv" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-secondary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-muted/40 mt-8 pt-6 text-center text-muted-foreground text-sm">
          <p>© {currentYear} Dheeraj Kumar Rai. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
