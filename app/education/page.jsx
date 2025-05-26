import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GraduationCap, BookOpen, Award, Library, Clock, Calendar, ArrowRight } from "lucide-react";

export default function EducationPage() {
    const educationData = [
        {
            degree: "BS Information technology",
            institution: "The Islamia University of Bahawalpur",
            period: "2021 - 2025",
            description: "Specialized in Web Development and Database Systems",
            courses: ["Data Structures", "Algorithms", "Web Technologies", "DBMS", "AI Fundamentals"],
            gpa: "3.8/4.0",
            projects: [
                "Advanced Portfolio Management System",
                "E-commerce Platform with React/Node.js"
            ]
        },
        {
            degree: "Intermediate (FSc Pre-Engineering)",
            institution: "Punjab College, Bahawalpur",
            period: "2018 - 2020",
            description: "Major in Physics, Chemistry, and Mathematics",
            courses: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
            grade: "A+",
            projects: [
                "Library Management System (Java)",
                "Scientific Calculator"
            ]
        }
    ];

    const certifications = [
        {
            title: "Next.js Certification",
            issuer: "Vercel",
            year: "2023"
        },
        {
            title: "React Developer",
            issuer: "Meta",
            year: "2022"
        },
        {
            title: "JavaScript Algorithms",
            issuer: "freeCodeCamp",
            year: "2021"
        }
    ];

    return (
        <div className="container px-4 sm:px-8 py-12">
            {/* Page Header */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10">
                    <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Academic <span className="text-primary">Journey</span>
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    My formal education and continuous learning achievements
                </p>
            </div>

            {/* Education Timeline */}
            <section className="mb-20 space-y-12">
                {educationData.map((edu, index) => (
                    <div key={index} className="relative group">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-0 h-4 w-4 rounded-full bg-primary transform -translate-x-1/2 translate-y-5 z-10"></div>

                        {/* Timeline connector (except last item) */}
                        {index !== educationData.length - 1 && (
                            <div className="absolute left-0 top-0 h-full w-0.5 bg-primary/20 dark:bg-primary/30 transform -translate-x-1/2 translate-y-5"></div>
                        )}

                        <Card className="relative ml-8 hover:shadow-lg transition-shadow duration-300">
                            <CardHeader>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                    <div>
                                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                                        <CardDescription className="text-base">
                                            {edu.institution}
                                        </CardDescription>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Calendar className="h-4 w-4" />
                                        <span>{edu.period}</span>
                                    </div>
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <p>{edu.description}</p>

                                <div>
                                    <h3 className="font-medium flex items-center gap-2 mb-2">
                                        <BookOpen className="h-4 w-4 text-primary" />
                                        Key Courses
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {edu.courses.map((course, i) => (
                                            <span key={i} className="inline-block px-3 py-1 text-sm rounded-full bg-secondary">
                                                {course}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {edu.projects && (
                                    <div>
                                        <h3 className="font-medium flex items-center gap-2 mb-2">
                                            <Library className="h-4 w-4 text-primary" />
                                            Notable Projects
                                        </h3>
                                        <ul className="list-disc pl-5 space-y-1">
                                            {edu.projects.map((project, i) => (
                                                <li key={i}>{project}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </CardContent>

                            <CardFooter className="flex justify-between items-center">
                                {edu.gpa && (
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">GPA:</span>
                                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                                            {edu.gpa}
                                        </span>
                                    </div>
                                )}
                                {edu.grade && (
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">Grade:</span>
                                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                                            {edu.grade}
                                        </span>
                                    </div>
                                )}
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </section>

            {/* Certifications Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                    <Award className="h-6 w-6 text-primary" />
                    <span>Certifications & Continuous Learning</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {certifications.map((cert, index) => (
                        <Card key={index} className="hover:shadow-md transition-shadow">
                            <CardHeader className="flex flex-row items-start gap-4">
                                <div className="p-2 rounded-full bg-primary/10">
                                    <Award className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                                    <CardDescription className="flex items-center gap-2 mt-1">
                                        <span>{cert.issuer}</span>
                                        <span>•</span>
                                        <span>{cert.year}</span>
                                    </CardDescription>
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center mt-20">
                <div className="bg-secondary/50 rounded-lg p-8 max-w-3xl mx-auto">
                    <h2 className="text-xl font-semibold mb-4">View My Academic Projects</h2>
                    <p className="text-muted-foreground mb-6">
                        Explore the practical implementations of my learning through various academic projects
                    </p>
                    <Button asChild variant="default" size="lg">
                        <Link href="/projects" className="flex items-center gap-2">
                            View Projects
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}