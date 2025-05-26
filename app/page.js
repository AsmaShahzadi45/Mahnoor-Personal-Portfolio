import { projects } from '@/lib/projects'
import Hero from './_components/Hero'
import Project from './_components/Project'
import ProjectsSnip from './_components/ProjectsSnip'
import Skills from './_components/Skills'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Testimonials } from './_components/Testimonals'

export default function Home() {
  return (
    <main className='mb-20 space-y-16'>
      <Hero />

      <section className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Projects<span className="text-primary">.</span>
        </h2>
        <p className="text-muted-foreground text-sm mt-1 mb-5">
          Here are some featured projects I’ve built — click to explore more.
        </p>

        <div className='flex gap-8 flex-wrap items-center justify-center md:px-20 lg:px-32 px-5'>
          <Project {...projects[0]} />
          <Project {...projects[1]} />
          <Project {...projects[2]} />
          <Project {...projects[3]} />
          <Project {...projects[4]} />
          <Project {...projects[5]} />
        </div>

        <div className='grid place-content-center mt-10'>
          <Button asChild variant="secondary"><Link href="/projects">View All Projects</Link></Button>
        </div>
      </section>





      {/* Skills Section */}
      <section className="text-center">
        <h2 className="text-2xl font-bold tracking-tight">
          Skills<span className="text-primary">.</span>
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Tools and technologies I've learned during my self-taught journey.
        </p>
        <div className="mt-6">
          <Skills />
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials/>


    </main>
  )
}
