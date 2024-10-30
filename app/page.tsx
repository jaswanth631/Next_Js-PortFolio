"use client";

import { motion } from "framer-motion";
import { NavHeader } from "@/components/nav-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Globe,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavHeader />
      
      {/* Hero Section */}
      <section id="top" className="min-h-screen flex items-center justify-center pt-16">
        <div className="container px-4 py-16 flex flex-col items-center text-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              MERN Stack Developer
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Specializing in e-commerce integrations and scalable web applications
            </p>
          </motion.div>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Button asChild>
              <a href="#contact">Get in touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View my work</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-muted/50">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-lg">
                 I am Jaswanth Varma, a dedicated Software Developer with over 2 years of experience specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). My passion lies in building scalable web applications, particularly in the e-commerce space, where I have honed my skills in automation and third-party API integration.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center">
                  <h3 className="font-bold mb-2">Frontend</h3>
                  <Code2 className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    React, Next.js, Tailwind CSS
                  </p>
                </Card>
                <Card className="p-4 text-center">
                  <h3 className="font-bold mb-2">Backend</h3>
                  <Database className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Node.js, Express, MongoDB
                  </p>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Amazon Price Scraper",
                  description:
                    "Real-time price tracking application with automated alerts for price drops",
                  tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "Webhooks"],
                  image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
                },
                {
                  title: "Algoris Multi-Landing Page",
                  description:
                    "High-performance web interface that boosted user engagement by 30%",
                  tech: ["React", "Node.js", "MongoDB", "Express"],
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
                },
              ].map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button size="sm" variant="outline" asChild>
                        <a href="#" className="flex items-center gap-2">
                          <Github className="w-4 h-4" /> Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href="#" className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-muted/50">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "React.js",
                "Next.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "PostgreSQL",
                "Tailwind CSS",
                "REST APIs",
              ].map((skill) => (
                <Card key={skill} className="p-4 text-center">
                  <Globe className="w-6 h-6 mx-auto mb-2" />
                  <p className="font-medium">{skill}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always interested in new opportunities and challenging projects.
              Let's collaborate and build something amazing together!
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <a
                  href="mailto:contact@jaswanthvarma.dev"
                  className="flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" /> Email Me
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}