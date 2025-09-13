import Link from "next/link"
import { Menu, House, User, Contact } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Separator } from "@/components/ui/separator";

export default function Navbar(){
    return(
        <>
        <nav className="flex justify-between items-center text-sm w-full pt-6 pb-2 max-w-5xl mx-auto ">
            <Link href={'#'} className="px-4 py-2 rounded-md hover:underline underline-offset-2">@ferdignatius</Link>

            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                    <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-4">
                            <li>
                                <NavigationMenuLink asChild>
                                <Link href="#" className="flex-row items-center gap-2">
                                    <House />
                                    Home
                                </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                <Link href="#" className="flex-row items-center gap-2">
                                    <User />
                                    About
                                </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                <Link href="#" className="flex-row items-center gap-2">
                                    <Contact />
                                    Contact
                                </Link>
                                </NavigationMenuLink>
                            </li>
                            </ul>
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            {/* for mobile */}
            {/* <button className="md:hidden bg-white rounded-full p-2">
                <Menu className="text-sm"/>
            </button> */}
        </nav>
            {/* <Separator  className="max-w-5xl mx-auto"/> */}
            </>
    )
}