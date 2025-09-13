'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur';
import { motion } from 'motion/react';

interface ProjectCard{
    label: string
    children: React.ReactNode;
}

export default function ProjectCard({children, label}: ProjectCard){
    const [isHover, setIsHover] = useState(false);
    return(
        <Link
            href={''}
            className='relative my-4 aspect-square h-[230px] overflow-hidden rounded-4xl border-4 border-white shadow-md p-4'
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            >
            {children}
            <ProgressiveBlur
                className={`pointer-events-none absolute bottom-0 left-0 w-full h-full ${isHover ? 'bg-black/5 ' : '' } duration-200`}
                blurIntensity={0.7}
                animate={isHover ? 'visible' : 'hidden'}
                variants={{
                hidden: { opacity: 0.5 },
                visible: { opacity: 1 },
                }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                
            />
            <motion.div
                className='absolute bottom-0 left-0 visible'
                // animate={isHover ? 'visible' : 'hidden'}
                // variants={{
                // hidden: { opacity: 0 },
                // visible: { opacity: 1 },
                // }}
                // transition={{ duration: 0.2, ease: 'easeOut' }}
            >
                <div className='flex flex-col items-start gap-0 px-5 py-4'>
                <p className='text-sm text-black font-semibold bg-white rounded-2xl px-4 py-2 shadow-lg'>{label}</p>
                </div>
            </motion.div>
        </Link>
    )
}