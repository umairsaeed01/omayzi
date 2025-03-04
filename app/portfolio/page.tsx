import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function PortfolioPage() {
  const projects = [
    {
      title: "AI-Powered Dental Receptionist",
      description: "Automated booking & customer support using AI, reducing wait times by 60%.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop",
      link: "/portfolio/ai-dental-receptionist",
      category: "AI & Automation"
    },
    {
      title: "E-Commerce Store for Fashion Brand",
      description: "Scalable online store with AI recommendations, increasing sales by 45%.",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2940&auto=format&fit=crop",
      link: "/portfolio/fashion-ecommerce",
      category: "Web Development"
    },
    {
      title: "Financial Data Dashboard",
      description: "Predictive analytics tool for business insights, improving decision-making efficiency.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
      link: "/portfolio/financial-dashboard",
      category: "Data Analytics"
    },
    {
      title: "Healthcare AI Assistant",
      description: "AI-powered medical assistant for patient triage and appointment scheduling.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2940&auto=format&fit=crop",
      link: "/portfolio/healthcare-ai",
      category: "AI & Healthcare"
    },
    {
      title: "Supply Chain Optimization Platform",
      description: "ML-powered platform that reduced logistics costs by 25% for manufacturing client.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop",
      link: "/portfolio/supply-chain",
      category: "Data Analytics"
    },
    {
      title: "Real Estate Market Analysis Tool",
      description: "AI-driven platform for real-time market analysis and property valuation.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2940&auto=format&fit=crop",
      link: "/portfolio/real-estate",
      category: "AI & Analytics"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground">
              Explore our successful projects and see how we've helped businesses transform with AI and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 backdrop-blur-sm text-primary mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <Link 
                    href={project.link}
                    className="text-primary flex items-center hover:underline"
                  >
                    View case study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how we can help transform your business with our AI-powered solutions.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
