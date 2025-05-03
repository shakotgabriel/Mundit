"use client"

import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { TransitionLink } from "@/components/utils/transitionlink"

const Footer = () => {
  return (
    <footer className="relative bg-white py-8 md:py-10">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
          
          <div className="lg:col-span-3">
            <div className="mb-6 flex justify-center lg:justify-start">
              
              <Image
            
                src="/images/logo.png"
                alt="Mundit Investment Ltd"
                width={150}
                height={64}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center lg:justify-start gap-4 mt-4">
              {[
                { platform: "Facebook", icon: <Facebook className="h-5 w-5" /> },
                { platform: "Twitter", icon: <Twitter className="h-5 w-5" /> },
                { platform: "LinkedIn", icon: <Linkedin className="h-5 w-5" /> },
                { platform: "Instagram", icon: <Instagram className="h-5 w-5" /> }
              ].map((social) => (
                <TransitionLink 
                  key={social.platform} 
                  href={`#${social.platform.toLowerCase()}`}
                  className="bg-teal-300 p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  {social.icon}
                </TransitionLink>
              ))}
            </div>
          </div>

          
          <div className="lg:col-span-3 lg:col-start-5">
            <h3 className="text-xl font-semibold text-teal-700 mb-6">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/profile", label: "Profile" },
                { href: "/services", label: "Services" },
                { href: "/contacts", label: "Contact" },
              ].map((link) => (
                <TransitionLink
                  key={link.label}
                  href={link.href}
                  className="text-teal-700 hover:text-black flex items-center gap-2 group"
                >
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  {link.label}
                </TransitionLink>
              ))}
            </nav>
          </div>

          
          <div className="lg:col-span-6 lg:col-start-8">
            <h3 className="text-xl font-bold text-teal-700 mb-6">
              Contact Information
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-teal-700">
                  <Phone className="h-5 w-5" />
                  <span className="font-bold">Phone:</span>
                </div>
                <p className="text-teal-700 font-black text-sm">
                  +211 916 222 166 | +211 921061723
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-teal-700">
                  <Mail className="h-5 w-5" />
                  <span className="font-bold">Email:</span>
                </div> 
                <p className="text-teal-700 text-sm font-black break-all">
                  munditInvestltd@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-teal-700">
                  <MapPin className="h-5 w-5" />
                  <span className="font-bold">Address:</span>
                </div>
                <p className="text-teal-700 text-sm font-black">
                  6th Floor UAP Equatoria Tower, Hai Neem, Malakia Rd Juba
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-teal-700">
            © {new Date().getFullYear()} Mundit Investment Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <TransitionLink href="/" className="text-sm text-teal-700  hover:text-white transition-colors">
              Privacy Policy
            </TransitionLink>
            <TransitionLink href="/" className="text-sm text-teal-700 hover:text-white transition-colors">
              Terms of Service
            </TransitionLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
