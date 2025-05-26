"use client";
import {
    TbBrandNextjs,
    TbBrandReactNative,
} from "react-icons/tb";
import {
    SiJavascript,
    SiTailwindcss,
    SiAppwrite,
} from "react-icons/si";
import {
    FaHtml5,
    FaReact,
    FaDocker,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { DiNodejs, DiMongodb } from "react-icons/di";

const skills = [
    { icon: <TbBrandNextjs className="h-9 w-9" />, name: "Next.js" },
    { icon: <SiJavascript className="h-9 w-9" />, name: "JavaScript" },
    { icon: <FaHtml5 className="h-9 w-9" />, name: "HTML5" },
    { icon: <IoLogoCss3 className="h-9 w-9" />, name: "CSS3" },
    { icon: <SiTailwindcss className="h-9 w-9" />, name: "Tailwind CSS" },
    { icon: <DiNodejs className="h-9 w-9" />, name: "Node.js" },
    { icon: <FaReact className="h-9 w-9" />, name: "React" },
    { icon: <DiMongodb className="h-9 w-9" />, name: "MongoDB" },
    { icon: <FaDocker className="h-9 w-9" />, name: "Docker" },
    { icon: <SiAppwrite className="h-9 w-9" />, name: "Appwrite" },
    { icon: <TbBrandReactNative className="h-9 w-9" />, name: "React Native" },
];

export default function Skills() {
    return (
        <section className="py-16 px-5 bg-gradient-to-b from-background to-secondary/10">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="group relative transform transition-transform duration-200 hover:scale-105 active:scale-95"
                            title={skill.name}
                        >
                            <div className="h-28 flex flex-col items-center justify-center gap-2 rounded-xl border bg-card p-4 shadow-sm hover:shadow-lg hover:border-primary transition-all">
                                <div className="text-primary">{skill.icon}</div>
                                <span className="text-sm font-medium text-center text-muted-foreground">
                                    {skill.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm text-muted-foreground">
                        Plus many more libraries, frameworks, and tools in my toolkit
                        <span className="text-primary">.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
