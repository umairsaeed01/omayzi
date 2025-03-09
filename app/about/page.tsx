import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Lightbulb,
  Target,
  Award,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Code
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50 z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-10 z-[-1]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                About Omayzi
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              We're a team of passionate technologists dedicated to empowering businesses with cutting-edge AI and software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Omayzi was founded by Omar, a software engineer with a master's in data science, who recognized the transformative potential of AI and custom software solutions for businesses of all sizes.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                What began as a passion for connecting with people and solving complex problems has evolved into a full-service consultancy that helps businesses leverage technology to achieve their goals.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Today, our team of experts combines technical excellence with business acumen to deliver solutions that drive real results for our clients across industries.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center">
                  <Briefcase className="h-5 w-5 text-primary mr-2" />
                  <span className="text-muted-foreground">Founded in 2020</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  <span className="text-muted-foreground">15+ Team Members</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-primary mr-2" />
                  <span className="text-muted-foreground">10+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <Code className="h-5 w-5 text-primary mr-2" />
                  <span className="text-muted-foreground">250+ Projects Completed</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
                  alt="Omayzi team"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Driving innovation and transformation through technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6 bg-primary/10 p-3 rounded-lg w-fit">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground">
                  To empower businesses with AI-driven, scalable, and innovative software solutions that solve real problems and create measurable value. We're committed to making advanced technology accessible and effective for organizations of all sizes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6 bg-primary/10 p-3 rounded-lg w-fit">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-lg text-muted-foreground">
                  To be the leading partner for businesses seeking digital transformation through AI and custom software. We envision a world where every organization can harness the power of technology to achieve their full potential and create exceptional experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Omayzi?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What sets us apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6 bg-primary/10 p-3 rounded-lg w-fit">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Industry Expertise</h3>
                <p className="text-muted-foreground mb-6">
                  Our team brings 10+ years of combined experience in AI, software development, and data science across multiple industries.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Specialized knowledge in AI and machine learning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Deep understanding of business processes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Cross-industry experience and insights</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6 bg-primary/10 p-3 rounded-lg w-fit">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Results-Driven</h3>
                <p className="text-muted-foreground mb-6">
                  We focus on delivering measurable outcomes that directly impact your business goals and bottom line.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Proven track record of successful projects</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Data-driven approach to solution design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Continuous measurement and optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6 bg-primary/10 p-3 rounded-lg w-fit">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Custom Solutions</h3>
                <p className="text-muted-foreground mb-6">
                  We don't believe in one-size-fits-all. Every solution we create is tailored to your specific needs and challenges.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Personalized approach to every project</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Scalable solutions that grow with you</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Flexible technology stack based on requirements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The talented people behind Omayzi's success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src="omar.jpeg"
                  alt="Omar Malik"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold">Omar Malik</h3>
              <p className="text-muted-foreground mb-2">Founder & CEO</p>
              <p className="text-sm text-muted-foreground">
                Software engineer with a master's in data science and a passion for AI-driven solutions.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
                  alt="Sarah Chen"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold">Sarah Chen</h3>
              <p className="text-muted-foreground mb-2">CTO</p>
              <p className="text-sm text-muted-foreground">
                AI specialist with expertise in machine learning and natural language processing.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2787&auto=format&fit=crop"
                  alt="David Rodriguez"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold">David Rodriguez</h3>
              <p className="text-muted-foreground mb-2">Lead Developer</p>
              <p className="text-sm text-muted-foreground">
                Full-stack developer specializing in web and mobile applications.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop"
                  alt="Emily Johnson"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold">Emily Johnson</h3>
              <p className="text-muted-foreground mb-2">Data Scientist</p>
              <p className="text-sm text-muted-foreground">
                Expert in data analytics, visualization, and predictive modeling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how our team can help you achieve your business goals with custom AI and software solutions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Book a Free Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}