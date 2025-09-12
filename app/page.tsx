import Image from "next/image";
import Navbar from "./homeComponent/navbar";
import { Separator } from "@/components/ui/separator";
import Hero from "./homeComponent/hero";

export default function Home(){
  return(
    <main className="max-w-4xl mx-auto p-6 bg-background">
      <Navbar />
      <Separator />
      <br />
      <br />
      <Hero />
    </main>
  )
}