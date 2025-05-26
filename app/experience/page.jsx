import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Briefcase, GraduationCap, Rocket, Award, ArrowRight } from "lucide-react";

export default function ExperiencePage() {
    const experiences = [
        {
            title: "Frontend Developer Intern",
            company: "Tech Solutions Inc.",
            period: "Jun 2023 - Present",
            description: "Developed responsive UIs using React/Next.js, collaborated on product features, and participated in code reviews.",
            icon: <Briefcase className="h-5 w-5 text-primary" />
        },
        {
            title: "Freelance Web Developer",
            company: "Self-Employed",
            period: "Jan 2022 - May 2023",
            description: "Built custom websites for clients, focusing on accessibility and performance optimization.",
            icon: <Rocket className="h-5 w-5 text-primary" />
        },
        {
            title: "Information technology Degree",
            company: "The Islamia University of Bahawalpur",
            period: "2021 - 2025",
            description: "Specialized in Web Development and Database Systems. GPA: 3.8/4.0",
            icon: <GraduationCap className="h-5 w-5 text-primary" />
        }
    ];

    const certifications = [
        {
            name: "Next.js Certification",
            issuer: "Vercel",
            year: "2023",
            icon: <Award className="h-5 w-5 text-primary" />
        },
        {
            name: "React Developer",
            issuer: "Meta",
            year: "2022",
            icon: <Award className="h-5 w-5 text-primary" />
        }
    ];

    return (
        <div className="container px-4 sm:px-8 py-12">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    My <span className="text-primary">Journey</span>
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Professional experience, education, and certifications that shaped my career
                </p>
            </div>

            {/* Experience Timeline */}
            <section className="mb-20">
                <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                    <Briefcase className="h-6 w-6" />
                    <span>Work Experience</span>
                </h2>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-primary/20 before:dark:bg-primary/30">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-10">
                            <div className="absolute left-0 top-1 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20">
                                {exp.icon}
                            </div>
                            <Card className="hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <CardTitle>{exp.title}</CardTitle>
                                    <CardDescription className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                                        <span>{exp.company}</span>
                                        <span className="hidden sm:inline">•</span>
                                        <span>{exp.period}</span>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>{exp.description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education Section */}
            <section className="mb-20">
                <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                    <GraduationCap className="h-6 w-6" />
                    <span>Education</span>
                </h2>

                <Card className="hover:shadow-md transition-shadow">
                    <CardHeader>
                        <CardTitle>BS Information technology</CardTitle>
                        <CardDescription>
                            The Islamia University of Bahawalpur, Punjab, Pakistan | 2021 - 2025
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Specialized in Web Development and Database Systems</li>
                            <li>Final Year Project: Advanced Portfolio Management System</li>
                            <li>Coursework: Data Structures, Algorithms, Web Technologies</li>
                        </ul>
                    </CardContent>
                </Card>
            </section>

            {/* Certifications Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                    <Award className="h-6 w-6" />
                    <span>Certifications</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                        <Card key={index} className="hover:shadow-md transition-shadow">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <div className="p-2 rounded-full bg-primary/10 dark:bg-primary/20">
                                    {cert.icon}
                                </div>
                                <div>
                                    <CardTitle>{cert.name}</CardTitle>
                                    <CardDescription>
                                        {cert.issuer} • {cert.year}
                                    </CardDescription>
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
                <h2 className="text-xl font-semibold mb-4">Want to know more about my experience?</h2>
                <Button asChild variant="default" size="lg">
                    <Link href="/contact" className="flex items-center gap-2">
                        Contact Me
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
            </section>
        </div>
    );
}