import Skills from "../_components/Skills";

export default function SkillsPage() {
    return (
        <div className="py-20 -mb-10">
            {/* Heading */}
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold">
                    Skills<span className="text-primary">.</span>
                </h1>
                <p className="text-xs text-muted-foreground">
                    Some of the skills I've learned along my self-taught coding journey
                    <span className="text-primary">.</span>
                </p>
            </div>

            {/* Skills Grid */}
            <Skills />
        </div>
    );
}
