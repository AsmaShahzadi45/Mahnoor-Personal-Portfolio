import Link from "next/link";
import Social from "./Social";

export default function Footer() {
    return (
        <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
            <div className="container px-4 sm:px-8 py-12 grid gap-8">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                            Mahnoor Ali
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            IT Student at The Islamia University of Bahawalpur
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Built with Next.js and Tailwind CSS. Source code available on{" "}
                            <Link
                                href="https://github.com/"
                                className="hover:underline hover:text-primary font-medium"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </Link>
                            <span className="text-primary">.</span>
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="https://github.com/"
                                    className="hover:underline hover:text-primary transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Source Code
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://github.com/issues"
                                    className="hover:underline hover:text-primary transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Report an Issue
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/sitemap"
                                    className="hover:underline hover:text-primary transition-colors"
                                >
                                    Sitemap
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold">Get In Touch</h4>
                        <Social />
                        <p className="text-sm text-muted-foreground">
                            Interested in working together or have questions?
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block text-sm font-medium hover:underline hover:text-primary transition-colors"
                        >
                            Contact Me →
                        </Link>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>
                        © {new Date().getFullYear()} Mahnoor Ali. All rights reserved.
                    </p>
                    <p>
                        Made with ♥ in{" "}
                        <span className="text-primary font-medium">Bahawalpur, Pakistan</span>
                    </p>
                    <p>
                        Credits:{" "}
                        <Link
                            href="https://github.com/"
                            className="hover:underline hover:text-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Mahnoor
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}