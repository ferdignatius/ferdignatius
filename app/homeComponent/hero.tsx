import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {CircleDot, Instagram, Linkedin, Twitter} from 'lucide-react'
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function Hero(){
    return(
        <header className="w-full my-auto h-[50vh] flex flex-col justify-center">
            <h1 className="text-4xl">Hi, I&apos;m <Image src={'/profile.JPG'} width={100} height={50} alt="Profile" className="inline rounded-4xl border-4 border-white object-top"/> <b className="font-semibold">Ferdinand Ignatius Surya!</b></h1>
            <h1 className="text-4xl text-neutral-500">I&apos;m a <b className="font-semibold text-neutral-500">Fullstack Developer</b></h1>
            <br />
            <div className="flex gap-8 text-neutral-500 items-center">
                <Link href={'https://www.instagram.com/ferdignatius/'} target="_blank" className=" underline underline-offset-2 hover:decoration-0 hover:text-black flex text-sm"><Instagram/></Link>
                <Link href={'https://x.com/ferdiignatius'} target="_blank" className=" underline underline-offset-2 hover:decoration-0 hover:text-black flex text-sm"><Twitter /></Link>
                <Link href={'https://www.linkedin.com/in/ferdinand-ignatius-surya/'} target="_blank" className=" underline underline-offset-2 hover:decoration-0 hover:text-black flex text-sm"><Linkedin /></Link>
                <Badge variant="outline" className="px-3 py-2 border-border border-4 rounded-4xl"><CircleDot className="text-green-500 text-5xl animate-ping mr-2"/>Open to work</Badge>
            </div>
            <br />
            <div className="flex gap-4 items-center">
                <Button variant="primary" className="rounded-4xl px-5 text-base font-semibold cursor-pointer">Book a Call</Button>
            </div>
        </header>
    )}