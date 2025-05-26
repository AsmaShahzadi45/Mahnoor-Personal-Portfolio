"use client";
import { Button } from "@/components/ui/button";
import Project from "./Project";
import { useState, useEffect } from "react";
import { projects } from "@/lib/projects";

export default function ProjectsSnip() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [categories, setCategories] = useState([]);

    // Extract unique categories from projects
    useEffect(() => {
        const uniqueCategories = ["all", ...new Set(projects.map(project => project.cate))];
        setCategories(uniqueCategories);
    }, []);

    // Filter projects based on active filter
    useEffect(() => {
        if (activeFilter === "all") {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => project.cate === activeFilter));
        }
    }, [activeFilter]);

    const handleFilter = (category) => {
        setActiveFilter(category);
    };

    return (
        <section className="md:px-20 lg:px-32 px-5 py-10">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-2">My Projects</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Explore my work across different technologies and categories
                </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-10 px-6 items-center justify-center">
                {categories.map((category) => (
                    <Button 
                        key={category}
                        onClick={() => handleFilter(category)}
                        variant={activeFilter !== category ? "outline" : "default"}
                        size="sm" 
                        className="rounded-full text-xs capitalize transition-all"
                    >
                        {category.replace(/-/g, " ")}
                    </Button>
                ))}
            </div>

            {filteredProjects.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-muted-foreground">No projects found in this category</p>
                    <Button 
                        variant="ghost" 
                        className="mt-4"
                        onClick={() => setActiveFilter("all")}
                    >
                        View All Projects
                    </Button>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <Project key={`${project.title}-${index}`} {...project} />
                    ))}
                </div>
            )}

            {activeFilter !== "all" && filteredProjects.length > 0 && (
                <div className="text-center mt-10">
                    <Button 
                        variant="outline" 
                        onClick={() => setActiveFilter("all")}
                    >
                        Clear Filter
                    </Button>
                </div>
            )}
        </section>
    )
}