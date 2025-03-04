import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BrainCircuit, 
  Code, 
  BarChart3, 
  Lightbulb,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50 z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-10 z-[-1]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Comprehensive AI and software solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transformative Solutions for Modern Businesses</h2>
              <p className="text-lg text-muted-foreground mb-8">
                At Omayzi, we offer a comprehensive suite of services designed to help businesses leverage the power of AI, software, and data to achieve their goals. Our solutions are custom-built to address your specific challenges and opportunities.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium">Tailored Approach</h3>
                    <p className="text-muted-foreground">Every solution is customized to your unique business requirements.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium">End-to-End Support</h3>
                    <p className="text-muted-foreground">From strategy and design to implementation and ongoing maintenance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium">Future-Proof Technology</h3>
                    <p className="text-muted-foreground">Scalable solutions built with the latest technologies and best practices.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop"
                  alt="Digital transformation"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our range of specialized services designed to drive innovation and growth
            </p>
          </div>

          {/* AI & Automation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="mb-4 bg-primary/10 p-3 rounded-lg w-fit">
                <BrainCircuit className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">AI & Automation</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Harness the power of artificial intelligence to automate processes, enhance customer experiences, and gain competitive advantages.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">AI Chatbots & Virtual Assistants</h4>
                    <p className="text-muted-foreground">Intelligent conversational interfaces for customer support and engagement.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Process Automation</h4>
                    <p className="text-muted-foreground">Streamline workflows and reduce manual tasks with intelligent automation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">AI-Powered Recommendations</h4>
                    <p className="text-muted-foreground">Personalized suggestions for customers based on behavior and preferences.</p>
                  </div>
                </div>
              </div>
              
              <Button asChild>
                <Link href="/services/ai-automation">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=2940&auto=format&fit=crop"
                  alt="AI & Automation Services to Transform Business"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>

          {/* Web & Mobile Development */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-2">
              <div className="mb-4 bg-primary/10 p-3 rounded-lg w-fit">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Web & Mobile Development</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Create exceptional digital experiences with custom web and mobile applications designed for performance and user engagement.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Custom Web Applications</h4>
                    <p className="text-muted-foreground">Tailored web solutions that align with your business objectives.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">E-Commerce Platforms</h4>
                    <p className="text-muted-foreground">Scalable online stores with advanced features and integrations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Mobile App Development</h4>
                    <p className="text-muted-foreground">Native and cross-platform applications for iOS and Android.</p>
                  </div>
                </div>
              </div>
              
              <Button asChild>
                <Link href="/services/web-mobile">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            
            <div className="order-1 lg:order-1 relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2938&auto=format&fit=crop"
                  alt="Web & Mobile Development"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Data Science & Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="mb-4 bg-primary/10 p-3 rounded-lg w-fit">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Data Science & Analytics</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Transform raw data into actionable insights that drive better business decisions and strategic planning.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Business Intelligence</h4>
                    <p className="text-muted-foreground">Interactive dashboards and reports for real-time decision making.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Predictive Analytics</h4>
                    <p className="text-muted-foreground">Forecast trends and outcomes to anticipate market changes.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Big Data Processing</h4>
                    <p className="text-muted-foreground">Handle and analyze large volumes of data efficiently.</p>
                  </div>
                </div>
              </div>
              
              <Button asChild>
                <Link href="/services/data-science">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop"
                  alt="Data Science & Analytics"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Consulting & Strategy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-2">
              <div className="mb-4 bg-primary/10 p-3 rounded-lg w-fit">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Consulting & Strategy</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Expert guidance to help you navigate digital transformation and develop effective technology strategies.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Digital Transformation</h4>
                    <p className="text-muted-foreground">Comprehensive roadmaps for modernizing your business processes.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">IT Strategy</h4>
                    <p className="text-muted-foreground">Align technology investments with your business objectives.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Cloud Solutions</h4>
                    <p className="text-muted-foreground">Expert advice on cloud migration and infrastructure optimization.</p>
                  </div>
                </div>
              </div>
              
              <Button asChild>
                <Link href="/services/consulting">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            
            <div className="order-1 lg:order-1 relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
                  alt="Consulting & Strategy"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              How we deliver exceptional results for every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Discovery</h3>
                <p className="text-muted-foreground">
                  We begin by understanding your business, goals, challenges, and requirements through in-depth consultations.
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Strategy & Design</h3>
                <p className="text-muted-foreground">
                  Our team develops a comprehensive strategy and designs a solution tailored to your specific needs.
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Development</h3>
                <p className="text-muted-foreground">
                  We build your solution using agile methodologies, ensuring quality, flexibility, and regular updates.
                </p>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Launch & Support</h3>
                <p className="text-muted-foreground">
                  After thorough testing, we deploy your solution and provide ongoing support and optimization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how our services can help you achieve your business goals. Book a free consultation today.
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