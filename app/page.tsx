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
  CheckCircle2,
  Users,
  Zap,
  Award
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50 z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop')] bg-cover bg-center opacity-10 z-[-1]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                AI-Powered Software & Data Solutions.
              </span>
              <br />
              <span>Done Right.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Empowering businesses with cutting-edge AI, custom software, and data-driven insights to transform operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Book a Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-pink-500/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6">
                <div className="mb-4 bg-primary/10 p-3 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <BrainCircuit className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI & Automation</h3>
                <p className="text-muted-foreground mb-4">
                  Intelligent chatbots, AI scheduling, and voice agents to streamline your operations.
                </p>
                <Link 
                  href="/services/ai-automation" 
                  className="text-primary flex items-center group-hover:underline"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6">
                <div className="mb-4 bg-primary/10 p-3 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Web & Mobile Development</h3>
                <p className="text-muted-foreground mb-4">
                  Custom websites, eCommerce platforms, and mobile applications built for performance.
                </p>
                <Link 
                  href="/services/web-mobile" 
                  className="text-primary flex items-center group-hover:underline"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6">
                <div className="mb-4 bg-primary/10 p-3 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Data Science & Analytics</h3>
                <p className="text-muted-foreground mb-4">
                  Big data processing, interactive dashboards, and AI-powered insights for decision making.
                </p>
                <Link 
                  href="/services/data-science" 
                  className="text-primary flex items-center group-hover:underline"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6">
                <div className="mb-4 bg-primary/10 p-3 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Consulting & Strategy</h3>
                <p className="text-muted-foreground mb-4">
                  Digital transformation, IT strategy, and cloud solutions to future-proof your business.
                </p>
                <Link 
                  href="/services/consulting" 
                  className="text-primary flex items-center group-hover:underline"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Omayzi?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine technical expertise with business acumen to deliver solutions that drive real results. Our approach is collaborative, transparent, and focused on your success.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium">Industry Expertise</h3>
                    <p className="text-muted-foreground">10+ years of combined experience in AI, software, and data science.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium">Results-Driven</h3>
                    <p className="text-muted-foreground">Proven track record of successful projects & automation solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium">Custom Solutions</h3>
                    <p className="text-muted-foreground">No one-size-fits-all. Every project is tailored to client needs.</p>
                  </div>
                </div>
              </div>
              
              <Button className="mt-8" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop"
                  alt="Team collaboration"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-6 bg-card border shadow-lg rounded-lg p-6 w-64">
                <div className="flex items-center space-x-4 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Happy Clients</p>
                    <p className="text-2xl font-bold">100+</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Zap className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                    <p className="text-2xl font-bold">250+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore some of our recent work and success stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop"
                  alt="AI-Powered Dental Receptionist"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-lg font-semibold text-white">AI-Powered Dental Receptionist</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Automated booking & customer support using AI, reducing wait times by 60%.
                </p>
                <Link 
                  href="/portfolio/ai-dental-receptionist" 
                  className="text-primary flex items-center hover:underline"
                >
                  View case study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2940&auto=format&fit=crop"
                  alt="E-Commerce Store for Fashion Brand"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-lg font-semibold text-white">E-Commerce Store for Fashion Brand</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Scalable online store with AI recommendations, increasing sales by 45%.
                </p>
                <Link 
                  href="/portfolio/fashion-ecommerce" 
                  className="text-primary flex items-center hover:underline"
                >
                  View case study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop"
                  alt="Financial Data Dashboard"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-lg font-semibold text-white">Financial Data Dashboard</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Predictive analytics tool for business insights, improving decision-making efficiency.
                </p>
                <Link 
                  href="/portfolio/financial-dashboard" 
                  className="text-primary flex items-center hover:underline"
                >
                  View case study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Award key={star} className="inline-block h-5 w-5 text-yellow-500 mr-1" />
                  ))}
                </div>
                <p className="italic text-muted-foreground mb-6">
                  "Omar and Omayzi helped us automate our entire business with AI. We saved 40% in costs and doubled efficiency! Their expertise and dedication to our success was impressive."
                </p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop"
                      alt="John Doe"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-muted-foreground">CEO, TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Award key={star} className="inline-block h-5 w-5 text-yellow-500 mr-1" />
                  ))}
                </div>
                <p className="italic text-muted-foreground mb-6">
                  "The data dashboard Omayzi built for us transformed how we make decisions. The insights are clear, actionable, and have directly contributed to our 30% growth this year."
                </p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop"
                      alt="Sarah Johnson"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">CFO, FinanceHub</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Award key={star} className="inline-block h-5 w-5 text-yellow-500 mr-1" />
                  ))}
                </div>
                <p className="italic text-muted-foreground mb-6">
                  "Our e-commerce site built by Omayzi has been a game-changer. The AI product recommendations have increased our average order value by 35%. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop"
                      alt="Michael Chen"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">Founder, StyleTrend</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how our AI-powered solutions can help you achieve your business goals. Book a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Book a Free Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}