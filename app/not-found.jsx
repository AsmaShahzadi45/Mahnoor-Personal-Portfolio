import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted/20 px-4">
            <div className="max-w-md text-center space-y-6">
                {/* Animated 404 text */}
                <div className="relative">
                    <h1 className="text-8xl font-bold tracking-tighter">
                        <span className="text-foreground">4</span>
                        <span className="text-primary animate-pulse">0</span>
                        <span className="text-foreground">4</span>
                    </h1>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full animate-bounce"></div>
                </div>

                {/* Error message */}
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold">Page Not Found</h2>
                    <p className="text-muted-foreground">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button asChild variant="default" className="group">
                        <Link href="/" className="flex items-center gap-1">
                            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Return Home
                        </Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/contact" className="flex items-center gap-1">
                            Contact Support
                        </Link>
                    </Button>
                </div>

                {/* Additional help */}
                <p className="text-xs text-muted-foreground pt-8">
                    If you believe this is an error, please{" "}
                    <Link
                        href="/contact"
                        className="text-primary hover:underline"
                    >
                        let us know
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
}