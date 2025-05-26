import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
    const testimonials = [
        {
            name: "Dr. Sarah Khan",
            role: "Professor, Information technology",
            company: "The Islamia University of Bahawalpur",
            content:
                "Mahnoor demonstrated exceptional problem-solving skills in my Advanced Algorithms class. Her final project on optimization techniques was among the top 5% of submissions I've seen in my 10 years of teaching.",
            rating: 5,
            avatar: "/professor-avatar.jpg",
        },
        {
            name: "Ali Ahmed",
            role: "Senior Developer",
            company: "TechSolutions Pakistan",
            content:
                "I mentored Mahnoor during her internship and was impressed by how quickly she grasped complex React concepts. She contributed production-level code within weeks and showed great attention to detail.",
            rating: 5,
            avatar: "/mentor-avatar.jpg",
        },
        {
            name: "Fatima Riaz",
            role: "Project Partner",
            company: "University Hackathon Team",
            content:
                "Working with Mahnoor on our e-commerce platform project was a pleasure. She's reliable, communicates clearly, and has a knack for turning designs into functional, beautiful interfaces.",
            rating: 4,
            avatar: "/partner-avatar.jpg",
        },
    ];

    return (
        <section className="container px-4 sm:px-8 py-2">
            <div className="text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-bold">
                    What People <span className="text-primary">Say</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                    Feedback from professors, mentors, and colleagues
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow group">
                        <CardHeader className="flex flex-row items-center gap-4 pb-4">
                            <Avatar className="h-12 w-12">
                                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                <AvatarFallback>
                                    {testimonial.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")
                                        .toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="font-semibold">{testimonial.name}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {testimonial.role} • {testimonial.company}
                                </p>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <blockquote className="italic text-muted-foreground">
                                “{testimonial.content}”
                            </blockquote>
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-4 w-4 ${i < testimonial.rating
                                                ? "fill-primary text-primary"
                                                : "text-muted-foreground"
                                            }`}
                                    />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
