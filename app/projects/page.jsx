import Link from "next/link";
import ProjectsSnip from "../_components/ProjectsSnip";

export const metadata = {
    title: "Projects",
    description: "An extensive display of my full-stack development skills, experiences, and projects, demonstrating my proficiency and commitment to coding.",
};

export default function Page() {
    return (
        <div className="py-2">
            <ProjectsSnip />
        </div>
    )
}