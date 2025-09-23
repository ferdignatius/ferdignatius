'use client';

import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Scrollspy } from '@/components/ui/scrollspy';
import Link from 'next/link';

export default function Demo() {
       const parentRef = useRef<HTMLDivElement | null>(null);
       const nav = [
       {
       id: 'section-1',
       label: 'Face Attendance',
       link: 'https://github.com/ferdignatius/face-attendance',
       image: 'face-attendance.jpg',
       description: 'Face Attendance System using Python and OpenCV',
       },
       {
       id: 'section-2',
       label: 'Portal Sekkha Puggala',
       link: 'https://github.com/ferdignatius/portal-sekkha-puggala',
       image: 'portal-sekkha-puggala.jpg',
       description: 'Portal Sekkha Puggala using React and Tailwind CSS',
       },
       {
       id: 'section-3',
       label: 'Section 3',
       },
       {
       id: 'section-4',
       label: 'Section 4',
       },
       {
       id: 'section-5',
       label: 'Section 5',
       },
       ];

       return (
       <div className="flex flex-col md:flex-row grow gap-5">
       <div className="w-full md:w-[200px] flex-shrink-0">
             <Scrollspy 
          offset={50} 
          targetRef={parentRef} 
          className="flex flex-row md:flex-col gap-2.5 overflow-x-auto max-md:my-2"
        >
                {nav.map((item) => (
                  <Button
                          key={item.id}
                          variant="outline"
                          data-scrollspy-anchor={item.id}
                          className={'data-[active=true]:bg-accent data-[active=true]:text-primary flex-shrink-0'}
                  >
                          {item.label}
                  </Button>
                ))}
             </Scrollspy>
       </div>
       <div className="grow">
             <ScrollArea className="h-[500px] grow pe-5 -me-5" viewportRef={parentRef}>
                <div className="space-y-8">
                  {nav.map((item) => (
                          <div key={item.id} id={item.id} className="space-y-2.5">
                              <div className=" bg-background border-4 border-white rounded-3xl h-[400px] flex justify-around items-center w-full p-4">
                                         {item.image && (
                      <img src={item.image} alt={item.label} className="w-full h-full object-cover" />
                    )}
                                         <div className='flex flex-col gap-2 justify-center w-full h-full'>
                                               <h1 className='text-2xl font-semibold'>{item.label}</h1>
                                               <p className='text-sm text-neutral-500'>{item.description}</p>
                                               <Button asChild variant="primary" className="rounded-4xl px-5 text-base font-semibold cursor-pointer w-fit mt-4">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">View Project</a>
                      </Button>
                                         </div>
                              </div>
                          </div>
                  ))}
                </div>
             </ScrollArea>
       </div>
       </div>
       );
}