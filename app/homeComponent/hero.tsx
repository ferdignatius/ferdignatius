import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {CircleDot} from 'lucide-react'

export default function Hero(){
    return(
        <header className="w-full my-auto">
            <h1 className="text-4xl">Hi, I'm <Image src={''} width={100} alt="Profile" className="inline"/> <b className="font-semibold">Ferdinand Ignatius Surya!</b></h1>
            <h1 className="text-4xl text-neutral-500">I'm a <b className="font-semibold text-black">Fullstack Developer</b></h1>
            <br />
            <br />
            <div className="flex gap-8 text-neutral-500 items-center">
                <Link href={''} className=" underline underline-offset-2 hover:decoration-0 hover:text-black">Instagram</Link>
                <Link href={''} className=" underline underline-offset-2 hover:decoration-0 hover:text-black">X</Link>
                <Link href={''} className=" underline underline-offset-2 hover:decoration-0 hover:text-black">Linkedin</Link>
            </div>
            <br />
            <br />
            <div className="flex gap-4 items-center">
                <Button className="rounded-4xl px-5 text-md font-semibold cursor-pointer">Contact</Button>
                <Badge variant="outline" className="px-3 py-2 border-border rounded-4xl"><CircleDot className="text-green-500 text-5xl"/> Open to work</Badge>
            </div>
        </header>
    )}