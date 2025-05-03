"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Award, Target, Heart, Users, MapPin, Phone, Mail } from "lucide-react"
import { Metadata } from 'next'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: 'About Mundit Investment Ltd | Premium Property Consultancy',
  description: 'Learn about Mundit Investment Ltd, a leading property consultancy firm committed to excellence in real estate solutions and professional services.',
  keywords: 'Mundit Investment, property consultancy, real estate solutions, premium property services',
  openGraph: {
    title: 'About Mundit Investment Ltd | Premium Property Consultancy',
    description: 'Learn about Mundit Investment Ltd, a leading property consultancy firm committed to excellence in real estate solutions and professional services.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Mundit Investment Ltd',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Mundit Investment Ltd | Premium Property Consultancy',
    description: 'Learn about Mundit Investment Ltd, a leading property consultancy firm committed to excellence in real estate solutions and professional services.',
    images: ['/images/logo.png'],
  },
}

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="container min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-800/70 z-10" />
        <div className="absolute inset-0">
          <Image src="/images/hero1.jpg" alt="Modern cityscape" fill className="object-cover" priority />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Mundit Investment Ltd
            </h1>
            <div className="h-1 w-24 bg-teal-500 mb-6"></div>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
              An independent professional firm specializing in premium property consultancy services with a commitment
              to excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                  Our Services <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contacts">
                <Button size="lg" variant="secondary" className="text-black hover:bg-teal-500">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Our Purpose</h2>
                <h3 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  Redefining Real Estate Excellence
                </h3>
                <div className="h-1 w-16 bg-teal-500 mt-4"></div>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed">
                We are committed to providing efficient and bankable real estate solutions to an increasingly diverse
                community. Serving our clients with diligence as trusted partners, providing the highest standards of
                workmanship and quality at a reasonable cost.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                Our approach combines deep industry expertise with innovative methodologies to deliver exceptional value
                across all property sectors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-teal-50 rounded-lg -z-10"></div>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/images/logo.png" alt="Mundit Investment Building" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-slate-200 rounded-lg -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Our Foundation</h2>
            <h3 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Core Principles</h3>
            <div className="h-1 w-16 bg-teal-500 mx-auto mt-4"></div>
          </div>

          <Tabs defaultValue="mission" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="mission">Mission</TabsTrigger>
              <TabsTrigger value="vision">Vision</TabsTrigger>
              <TabsTrigger value="values">Values</TabsTrigger>
            </TabsList>
            <TabsContent value="mission" className="mt-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-6">
                    <div className="bg-teal-50 p-4 rounded-full">
                      <Award className="h-8 w-8 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-semibold text-slate-900 mb-4">Our Mission</h4>
                      <p className="text-lg text-slate-700 leading-relaxed">
                        To empower our team to deliver the best services by fostering a culture of excellence,
                        innovation, and continuous improvement. We strive to exceed client expectations through
                        personalized solutions that address their unique property needs while maintaining the highest
                        standards of integrity and professionalism.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="vision" className="mt-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-6">
                    <div className="bg-teal-50 p-4 rounded-full">
                      <Target className="h-8 w-8 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-semibold text-slate-900 mb-4">Our Vision</h4>
                      <p className="text-lg text-slate-700 leading-relaxed">
                        To redefine real estate methodology by pioneering innovative approaches that transform the
                        industry standard. We aim to be recognized as the leading property consultancy firm, known for
                        our forward-thinking solutions, exceptional client service, and positive impact on communities
                        where we operate.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="values" className="mt-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-6">
                    <div className="bg-teal-50 p-4 rounded-full">
                      <Heart className="h-8 w-8 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-semibold text-slate-900 mb-4">Our Values</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 bg-teal-500 rounded-full"></div>
                          <span className="text-lg">Professionalism</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 bg-teal-500 rounded-full"></div>
                          <span className="text-lg">Customer-centric</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 bg-teal-500 rounded-full"></div>
                          <span className="text-lg">Accountability</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 bg-teal-500 rounded-full"></div>
                          <span className="text-lg">Integrity</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 bg-teal-500 rounded-full"></div>
                          <span className="text-lg">Innovation</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 bg-teal-500 rounded-full"></div>
                          <span className="text-lg">Excellence</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
