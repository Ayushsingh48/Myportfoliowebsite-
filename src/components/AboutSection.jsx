import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              With hands-on experience in web development, blockchain, artificial intelligence, and UI/UX design, I love building digital experiences that are not just powerful and scalable — but also intuitive and enjoyable to use. Whether it’s creating dynamic websites, designing clean and thoughtful interfaces, developing smart contracts, or integrating AI to solve real-world problems.
            </p>

            <p className="text-muted-foreground">
              I focus on making tech feel seamless and meaningful for users. I believe the best solutions come from blending creativity with functionality. The tech world moves fast, and I enjoy staying on the edge — experimenting with new frameworks, tools, and ideas that can push my work forward. At the end of the day, my goal is simple: to turn complex challenges into simple, user-first products that make a real impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/resume.pdf"
                download="Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Crafting responsive, accessible, and high-performance websites using modern technologies like React, Next.js, and Tailwind CSS. 
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    I design using tools like Figma and Canva, along with modern design platforms such as Adobe XD and Illustrator to create clean, user-focused interfaces.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Blockchain Developer</h4>
                  <p className="text-muted-foreground">
                    Building decentralized applications (dApps) and smart contracts with a strong focus on security, scalability, and real-world utility. Skilled in technologies like Solidity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
