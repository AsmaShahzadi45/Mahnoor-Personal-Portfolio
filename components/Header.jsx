'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./ModeToggle";
import { cn } from "@/lib/utils";

export default function Header() {
    const pathname = usePathname();
    const navItems = [
        { name: "Home", path: "/" },
        { name: "Skills", path: "/skills" },
        { name: "Projects", path: "/projects" },
        { name: "Education", path: "/education" },
        { name: "Experience", path: "/experience" },
        { name: "About", path: "/about" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 transition-all duration-300 ease-in-out">
            <div className="container flex h-20 items-center justify-between px-4 sm:px-8">
                <Link
                    href="/"
                    className="flex items-center gap-2 group"
                    aria-label="Home"
                >
                    <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent transition-all duration-500 group-hover:from-purple-600 group-hover:to-primary">
                        Mahnoor Ali
                    </span>
                    <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" aria-hidden="true"></span>
                </Link>

                <div className="flex items-center gap-4">
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={cn(
                                    "relative text-sm font-medium transition-colors hover:text-primary group/nav-link",
                                    pathname === item.path ? "text-primary" : "text-foreground/80"
                                )}
                            >
                                {item.name}
                                <span
                                    className={cn(
                                        "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                                        pathname === item.path ? "w-full" : "w-0 group-hover/nav-link:w-full"
                                    )}
                                ></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Navigation */}
                   

                    <div className="flex items-center gap-2">
                        <Button
                            asChild
                            variant="default"
                            size="sm"
                            className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary transition-all shadow-md hover:shadow-primary/20 active:scale-95"
                        >
                            <Link href="/contact">
                                Contact Me
                            </Link>
                        </Button>
                        <ModeToggle />
                    </div>
                     <DropdownMenu>
                        <DropdownMenuTrigger className="md:hidden" asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-primary/50 transition-colors"
                                aria-label="Open navigation menu"
                            >
                                <MenuIcon className="h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align="end"
                            className="w-56 rounded-lg shadow-lg border bg-popover p-2"
                        >
                            {navItems.map((item) => (
                                <Link key={item.path} href={item.path} legacyBehavior passHref>
                                    <DropdownMenuItem
                                        className={cn(
                                            "cursor-pointer transition-colors rounded-md",
                                            pathname === item.path
                                                ? "bg-accent font-medium"
                                                : "hover:bg-accent focus:bg-accent"
                                        )}
                                    >
                                        {item.name}
                                    </DropdownMenuItem>
                                </Link>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}