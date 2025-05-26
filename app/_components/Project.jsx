import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, Link2Icon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Project({ 
    title, 
    alt, 
    image, 
    description, 
    url,
    githubUrl,
    tags = []
}) {
    return (
        <div className="relative group border bg-background dark:bg-secondary rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 max-w-[360px] w-full">
            {/* Project Image with hover effect */}
            <div className="relative overflow-hidden aspect-video">
                <Image
                    src={image}
                    alt={alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Tags - shown on hover */}
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tags.map((tag, index) => (
                        <span 
                            key={index}
                            className="text-xs bg-primary/90 text-primary-foreground px-2 py-1 rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Project Info */}
            <div className="p-4 space-y-3">
                <div className="flex justify-between items-start gap-2">
                    <div>
                        <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
                        {description && (
                            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                                {description}
                            </p>
                        )}
                    </div>
                    
                    <div className="flex gap-1">
                        {githubUrl && (
                            <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-8 w-8" 
                                asChild
                            >
                                <Link 
                                    href={githubUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label={`View ${title} on GitHub`}
                                >
                                    <Github className="h-4 w-4" />
                                </Link>
                            </Button>
                        )}
                        <Button 
                            variant="default" 
                            size="sm" 
                            className="gap-1 px-3" 
                            asChild
                        >
                            <Link 
                                href={url || "#"} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label={`View ${title} project`}
                            >
                                View
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
                
                {/* Tech stack indicators */}
                {alt && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Link2Icon className="h-3 w-3" />
                        <span>{alt}</span>
                    </div>
                )}
            </div>
        </div>
    )
}