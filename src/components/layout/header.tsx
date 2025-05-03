"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { TransitionLink } from "@/components/utils/transitionlink";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <TransitionLink href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Mundit Investment Ltd"
              width={110}
              height={60}
              className="h-auto w-auto"
              priority
            />
          </TransitionLink>
        </div>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <TransitionLink href="/about">
                <span className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                  About Us
                </span>
              </TransitionLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <TransitionLink href="/profile">
                <span className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                  Profile
                </span>
              </TransitionLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <TransitionLink href="/services">
                <span className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                  Services
                </span>
              </TransitionLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Sheet 
          open={isOpen} 
          onOpenChange={setIsOpen}
          modal={true}
        >
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <nav className="flex flex-col gap-4 mt-8">
              <TransitionLink 
                href="/about" 
                className="text-base font-medium hover:text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(e);
                  window.location.href = '/about';
                }}
              >
                About Us
              </TransitionLink>
              <TransitionLink 
                href="/profile" 
                className="text-base font-medium hover:text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(e);
                  window.location.href = '/profile';
                }}
              >
                Profile
              </TransitionLink>
              <TransitionLink 
                href="/services" 
                className="text-base font-medium hover:text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(e);
                  window.location.href = '/services';
                }}
              >
                Services
              </TransitionLink>
              <TransitionLink 
                href="/contacts" 
                className="text-base font-medium hover:text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(e);
                  window.location.href = '/contacts';
                }}
              >
                Get in Touch
              </TransitionLink>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-4 ">
          <TransitionLink href="/contacts" className="hidden md:inline-flex">
            <Button className="bg-teal-500 hover:bg-teal-700">Get in Touch</Button>
          </TransitionLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
