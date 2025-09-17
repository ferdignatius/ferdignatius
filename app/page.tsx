import Image from "next/image";
import ProjectCard from "./homeComponent/projectcard";
import { Separator } from "@/components/ui/separator";
import Hero from "./homeComponent/hero";
import TimelineCard from "./homeComponent/timelinecard";
import ProjectShowSpy from "./homeComponent/projectshowspy";
import FooterSection from "@/components/footer";

export default function Home(){
  return(
    <main className="max-w-5xl mx-auto p-6 bg-background">
      <Hero />
      <div className="flex flex-col justify-center mt-10">
      <h2 className="font-semibold text-lg">Get to know me better</h2>
      <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-2 place-items-center">
        <ProjectCard label="My Experience" link="#">
          <TimelineCard/>
        </ProjectCard>
        {/* <ProjectCard label="My Project" link="#">
          <img
            src='project1.jpg'
            alt='Project'
            className='absolute inset-0 bg-cover w-full h-full object-cover object-top'
          />
        </ProjectCard> */}
        <ProjectCard label="My Achievement" link="#">
          <img
            src='achievement.jpg'
            alt='Project'
            className='absolute inset-0 bg-cover w-full h-full object-cover object-top'
          />
        </ProjectCard>
        <ProjectCard label="My Blog" link="#">
          <img
            src='blog.jpg'
            alt='Project'
            className='absolute inset-0 bg-cover w-full h-full object-cover object-top'
          />
        </ProjectCard>
      </div>
      </div>
      {/* Project */}
      <div className="flex flex-col justify-center mt-10">
          <h2 className="font-semibold text-lg">You know me, but not my work</h2>
          <ProjectShowSpy />
      </div>

      <FooterSection />
    </main>
  )
}