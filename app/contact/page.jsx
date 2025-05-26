import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import Link from "next/link";
import { DiGithub } from "react-icons/di";
import { FaTwitter } from "react-icons/fa";

export default function ContactPage() {
    return (
        <div className="container px-4 sm:px-8 py-16 md:py-20">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                    Get In <span className="text-primary">Touch</span>
                </h1>
                <p className="text-muted-foreground max-w-md mx-auto">
                    Have a project in mind or want to discuss opportunities? Reach out and let's create something amazing together.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="space-y-6">
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                autoComplete="name"
                                className="focus-visible:ring-primary"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="john@example.com"
                                autoComplete="email"
                                className="focus-visible:ring-primary"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input
                                id="subject"
                                type="text"
                                placeholder="Project Inquiry"
                                className="focus-visible:ring-primary"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                placeholder="Tell me about your project..."
                                className="min-h-[150px] focus-visible:ring-primary"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full mt-4 bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary"
                        >
                            Send Message
                        </Button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Contact Information</h3>
                        <p className="text-muted-foreground">
                            Feel free to reach out through any of these channels
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <Link
                                    href="mailto:mahnoor@example.com"
                                    className="text-muted-foreground hover:text-primary hover:underline"
                                >
                                    mahnoor@example.com
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <Link
                                    href="tel:+923001234567"
                                    className="text-muted-foreground hover:text-primary hover:underline"
                                >
                                    +92 300 1234567
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <p className="text-muted-foreground">
                                    The Islamia University of Bahawalpur, Punjab, Pakistan
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="pt-4">
                        <h4 className="font-medium mb-3">Connect With Me</h4>
                        <div className="flex gap-3">
                            <Button asChild variant="outline" size="icon">
                                <Link href="https://github.com" target="_blank">
                                    <DiGithub className="h-4 w-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="icon">
                                <Link href="https://linkedin.com" target="_blank">
                                    <Linkedin className="h-4 w-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="icon">
                                <Link href="https://twitter.com" target="_blank">
                                    <FaTwitter className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}