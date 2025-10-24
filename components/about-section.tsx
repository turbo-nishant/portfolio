"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Rocket, Users } from "lucide-react"

const skills = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "Next.js", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 88, category: "Language" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Python", level: 80, category: "Language" },
  { name: "PostgreSQL", level: 82, category: "Database" },
  { name: "AWS", level: 75, category: "Cloud" },
  { name: "Docker", level: 78, category: "DevOps" },
]

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable code with best practices and modern patterns.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful, intuitive interfaces that users love to interact with.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing applications for speed, accessibility, and excellent user experience.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in teams using agile methodologies and modern tools.",
  },
]

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with 5+ years of experience creating digital solutions that make a
            difference. I love turning complex problems into simple, beautiful designs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Started my journey in web development during college, where I discovered my passion for creating digital
                experiences. What began as curiosity quickly evolved into a career focused on building impactful
                applications.
              </p>
              <p>
                Over the years, I've worked with startups and established companies, helping them bring their ideas to
                life through modern web technologies. I specialize in React, Next.js, and full-stack development.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Skills & Expertise</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {skill.category}
                    </Badge>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full gradient-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-0 h-full hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <highlight.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
