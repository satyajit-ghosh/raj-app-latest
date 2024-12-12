"use client"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <main className="max-w-5xl mx-auto px-4 py-8 pt-20">
        <Hero />
        <Skills />
      </main>
      <CoverPhoto />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  )
}

function Hero() {
  return (
    <motion.section
      className="mb-16 flex flex-col md:flex-row items-center justify-between gap-8"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-bold mb-2 text-nowrap">Satyajit Ghosh</h1>
        <div className="text-xl text-gray-600 dark:text-gray-400 h-8 my-5">
          <TypeAnimation
            className='text-3xl font-light'
            sequence={[
              'Web Developer',
              2000,
              'Full Stack Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p className="text-lg mb-5">
          I am a passionate web developer and creating modern, responsive web applications.
        </p>
        <Button asChild className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-2 px-6 transition-all duration-300">
          <a href="/path-to-your-resume.pdf" download aria-label="Download Resume">
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </a>
        </Button>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
          <Image
            src="/img/profile.webp"
            alt="Satyajit Ghosh"
            width={300}
            height={300}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </motion.div>
      </div>
    </motion.section>
  )
}

function Skills() {
  const skills = [
    { name: "HTML", color: "bg-red-200 dark:bg-red-800" },
    { name: "CSS", color: "bg-blue-200 dark:bg-blue-800" },
    { name: "JavaScript", color: "bg-yellow-200 dark:bg-yellow-800" },
    { name: "TypeScript", color: "bg-blue-300 dark:bg-blue-700" },
    { name: "React", color: "bg-cyan-200 dark:bg-cyan-800" },
    { name: "Next.js", color: "bg-gray-300 dark:bg-gray-700" },
    { name: "Node.js", color: "bg-green-200 dark:bg-green-800" },
    { name: "Express", color: "bg-gray-200 dark:bg-gray-800" },
    { name: "MongoDB", color: "bg-green-300 dark:bg-green-700" },
    { name: "PostgreSQL", color: "bg-blue-400 dark:bg-blue-600" },
    { name: "Git", color: "bg-orange-200 dark:bg-orange-800" },
    { name: "AWS", color: "bg-yellow-300 dark:bg-yellow-700" }
  ]

  return (
    <motion.section
      id="skills"
      className="mb-12"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <motion.div key={skill.name} variants={item}>
            <Badge className={`${skill.color} text-gray-800 dark:text-gray-200`}>{skill.name}</Badge>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

function CoverPhoto() {
  return (
    <div className="relative w-full h-[500px] mb-12">
      <Image
        src="/img/cover.webp"
        alt="Cover Photo"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />
      <div className="absolute inset-0 flex mx-7 my-10 md:my-16">
        <p className="text-white text-3xl font-thin md:font-light px-4 md:text-3xl">
          The only way to do great work is to love what you do.
        </p>
      </div>
    </div>
  )
}

function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, Express, and MongoDB.",
      link: "https://github.com/johndoe/ecommerce-platform"
    },
    {
      title: "Task Management App",
      description: "A React-based task management application with real-time updates using Socket.io.",
      link: "https://github.com/johndoe/task-manager"
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that provides real-time weather data using a third-party API.",
      link: "https://github.com/johndoe/weather-dashboard"
    }
  ]

  return (
    <motion.section
      id="projects"
      className="mb-12"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div key={project.title} variants={item}>
            <Card className="h-full transition-transform duration-300 hover:scale-105">
              <CardContent className="p-4 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
                <Button asChild className="rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-2 px-4 transition-all duration-300">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

function Education() {
  const educationDetails = [
    {
      degree: "Bachelor of Computer Application",
      institution: "Institute OF Engineering & Management",
      year: "2023 - 2026"
    },
    {
      degree: "Master of Computer Application",
      institution: "IIT DELHI",
      year: "2026 - 2028"
    },
  ]

  return (
    <motion.section
      id="education"
      className="mb-12"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="space-y-4">
        {educationDetails.map((edu, index) => (
          <motion.div key={index} variants={item} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">{edu.degree}</h3>
            <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
            <p className="text-gray-500 dark:text-gray-400">{edu.year}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <div className="flex justify-center space-x-4">
        <Button variant="outline" size="icon" asChild className="rounded-full">
          <a href="mailto:gsatyajit111@gmail.com" aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild className="rounded-full">
          <a href="https://github.com/satyajit-ghosh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild className="rounded-full">
          <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </motion.section>
  )
}

