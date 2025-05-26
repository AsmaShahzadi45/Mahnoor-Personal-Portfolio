import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Github, Linkedin, Twitter, FileText, Code, Lightbulb, Users } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="container px-4 sm:px-8 py-12">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                <div className="w-full md:w-1/2 space-y-6">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Hi, I'm <span className="text-primary">Mahnoor Ali</span>
                    </h1>
                    <h2 className="text-xl text-muted-foreground">
                        Information technology student IT & Web Developer
                    </h2>

                    <p className="text-lg">
                        I'm a passionate developer currently pursuing my Bachelor's in Information technology at
                        The Islamia University of Bahawalpur, Pakistan. My journey in tech began when I wrote
                        my first "Hello World" program and I've been hooked ever since.
                    </p>

                    <p>
                        I specialize in building modern web applications using React, Next.js, and Tailwind CSS.
                        When I'm not coding, you can find me contributing to open-source projects or exploring
                        new technologies.
                    </p>

                    <div className="flex flex-wrap gap-3 pt-4">
                        <Button asChild variant="default">
                            <Link href="/contact" className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                Contact Me
                            </Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href="/resume.pdf" className="flex items-center gap-2">
                                <FileText className="h-4 w-4" />
                                View Resume
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative bg-purple-400 w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Mahnoor"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Skills Overview */}
            <section className="mb-20">
                <h2 className="text-2xl font-semibold mb-8 text-center">
                    What I <span className="text-primary">Bring</span> to the Table
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-secondary/50 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Code className="h-5 w-5 text-primary" />
                            Technical Skills
                        </h3>
                        <ul className="space-y-2">
                            <li>Frontend: React, Next.js, Tailwind CSS</li>
                            <li>Backend: Node.js, Express</li>
                            <li>Databases: MongoDB, PostgreSQL</li>
                            <li>Tools: Git, VS Code, Figma</li>
                        </ul>
                    </div>

                    <div className="bg-secondary/50 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Lightbulb className="h-5 w-5 text-primary" />
                            Problem Solving
                        </h3>
                        <p>
                            Strong analytical skills with a knack for breaking down complex problems
                            into manageable solutions. Experienced in algorithm design and optimization.
                        </p>
                    </div>

                    <div className="bg-secondary/50 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Users className="h-5 w-5 text-primary" />
                            Soft Skills
                        </h3>
                        <ul className="space-y-2">
                            <li>Effective communication</li>
                            <li>Team collaboration</li>
                            <li>Time management</li>
                            <li>Continuous learner</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Personal Story */}
            <section className="mb-20 max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold mb-8 text-center">
                    My <span className="text-primary">Journey</span> in Tech
                </h2>

                <div className="space-y-6">
                    <p>
                        My interest in technology began in high school when I first discovered programming.
                        What started as curiosity quickly turned into passion as I built my first websites
                        using HTML and CSS.
                    </p>

                    <p>
                        At university, I deepened my knowledge through coursework and personal projects.
                        I particularly enjoyed web development courses which led me to specialize in
                        building modern, responsive web applications.
                    </p>

                    <p>
                        Beyond academics, I've contributed to open-source projects and participated in
                        hackathons to sharpen my skills. I believe in learning by doing and constantly
                        challenge myself with new technologies.
                    </p>
                </div>
            </section>

            {/* Connect Section */}
            <section className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Let's <span className="text-primary">Connect</span></h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    I'm always open to discussing new opportunities, collaborations, or just chatting about tech.
                </p>

                <div className="flex justify-center gap-4">
                    <Button asChild variant="outline" size="icon">
                        <Link href="https://github.com/yourusername" target="_blank">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="icon">
                        <Link href="https://linkedin.com/in/yourusername" target="_blank">
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="icon">
                        <Link href="https://twitter.com/yourusername" target="_blank">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}

