import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFileDownload, FaLaptopCode } from 'react-icons/fa';
import { RiGraduationCapFill } from 'react-icons/ri';

export default function Hero() {
    return (
        <section 
            id="home"
            className='relative min-h-[90vh] flex items-center justify-center px-6 bg-gradient-to-br from-background via-secondary/5 to-primary/5'
        >
            <div className='max-w-5xl text-center grid gap-5 relative z-10'>
                {/* Animated greeting */}
                <div className='flex justify-center items-center gap-2 mb-2'>
                    <div className='waving-hand text-2xl'>👋</div>
                    <p className='text-sm font-medium text-primary'>Welcome to my portfolio</p>
                </div>
                
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold leading-tight'>
                    I'm <span className='text-primary underline underline-offset-8 decoration-4'>Mahnoor Ali</span>
                </h1>
                
                <h2 className='text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground flex items-center justify-center gap-2'>
                    <RiGraduationCapFill className="text-primary" />
                    {`IT Student at The Islamia University of Bahawalpur`}
                </h2>
                
                <p className='text-sm sm:text-base max-w-2xl mx-auto text-muted-foreground'>
                    Specializing in full-stack development with a focus on creating efficient, 
                    scalable solutions. Explore my journey through academia and practical projects.
                </p>
                
                <div className='flex flex-wrap items-center justify-center gap-4 mt-8'>
                    <Button asChild variant="default" className='gap-2 px-6 py-3 text-sm font-medium transition-all hover:scale-105'>
                        <Link href="/projects" className='flex items-center'>
                            <FaLaptopCode className="h-4 w-4" /> View Projects
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className='gap-2 px-6 py-3 text-sm font-medium transition-all hover:scale-105'>
                        <Link 
                            href="https://github.com/mahnoor-ali" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='flex items-center'
                        >
                            <FaGithub className="h-4 w-4" /> GitHub
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className='gap-2 px-6 py-3 text-sm font-medium transition-all hover:scale-105'>
                        <Link 
                            href="https://linkedin.com/in/mahnoor-ali" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='flex items-center'
                        >
                            <FaLinkedin className="h-4 w-4" /> LinkedIn
                        </Link>
                    </Button>
                    <Button asChild variant="ghost" className='gap-2 px-6 py-3 text-sm font-medium transition-all hover:scale-105 border border-primary/20'>
                        <Link 
                            href="/Mahnoor-Ali-CV.pdf" 
                            download="Mahnoor-Ali-IT-Portfolio.pdf"
                            className='flex items-center'
                        >
                            <FaFileDownload className="h-4 w-4" /> Download CV
                        </Link>
                    </Button>
                </div>
                
                {/* Stats bar - optional */}
                <div className='flex flex-wrap justify-center gap-4 mt-12 text-sm'>
                    <div className='px-4 py-2 bg-secondary/20 rounded-full flex items-center gap-2'>
                        <span className='font-bold text-primary'>10+</span> Projects Completed
                    </div>
                    <div className='px-4 py-2 bg-secondary/20 rounded-full flex items-center gap-2'>
                        <span className='font-bold text-primary'>3+</span> Years of Coding
                    </div>
                    <div className='px-4 py-2 bg-secondary/20 rounded-full flex items-center gap-2'>
                        <span className='font-bold text-primary'>5+</span> Technologies Mastered
                    </div>
                </div>
            </div>
            
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
                <div className="absolute inset-0 bg-[url('/grid.svg')] [background-size:30px_30px]"></div>
            </div>
            
            {/* Scroll indicator - only shows on larger screens */}
            {/* <div className="hidden md:block mt-10 absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="flex flex-col items-center text-xs text-muted-foreground gap-1">
                    <p>Scroll Down</p>
                    <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                        <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div> */}
        </section>
    )
}