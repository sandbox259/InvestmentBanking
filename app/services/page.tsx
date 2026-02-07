'use client'

import React from 'react'
import { Nav } from '@/components/nav'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import Link from 'next/link'
import Image from 'next/image'

export default function Services() {
  const services = [
    {
      title: 'Growth Capital',
      description: 'Advising growth-stage companies on raising equity for expansion, capacity addition, and new markets. We structure rounds that align with founder goals and investor expectations while maintaining ownership and operational control.',
    },
    {
      title: 'Equity-Linked Funding',
      description: 'Structuring warrants, CCDs (Compulsory Convertible Debentures), and convertibles aligned with Indian regulatory frameworks. These instruments balance dilution for founders with return profiles for investors.',
    },
    {
      title: 'Pre-IPO Placements',
      description: 'Supporting companies ahead of listing to strengthen governance, internal controls, and institutional readiness. We manage pre-IPO placement processes and ensure a smooth transition to public markets.',
    },
    {
      title: 'Structured Finance',
      description: 'Custom financing solutions for acquisitions, balance sheet restructuring, and strategic investments. We design structures that maximize tax efficiency and operational flexibility while satisfying lender requirements.',
    },
    {
      title: 'Debt Financing',
      description: 'Raising working capital and long-term debt from banks, NBFCs (Non-Banking Financial Companies), and private credit funds. We negotiate terms that support growth while maintaining financial stability.',
    },
  ]

  const processSteps = [
    { step: 'Preparation', desc: 'Initial engagement, documentation, market analysis' },
    { step: 'Meetings', desc: 'Investor introductions & negotiations' },
    { step: 'Term Sheet', desc: 'Negotiation & finalization' },
    { step: 'Due Diligence', desc: 'Comprehensive review & verification' },
    { step: 'Conditions Precedent', desc: 'Regulatory & legal approvals' },
    { step: 'Closing', desc: 'Fund transfer & execution' },
  ]

  return (
    <div>
      <Nav />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0F1E3F] to-[#213A56] text-white py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Our Services
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed max-w-3xl">
            Comprehensive advisory and financing solutions for every stage of growth. From early-stage capital to pre-IPO readiness.
          </p>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="bg-[#F8F6F2] py-16 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F1E3F] mb-4">
              Service Offerings
            </h2>
            <div className="h-1 w-16 bg-[#CDAA80] mx-auto"></div>
          </div>

          <div className="bg-white rounded-lg border border-[#E5E2DC]">
            <Accordion type="single" collapsible className="w-full">
              {services.map((service, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="px-6 md:px-8 py-5 text-left hover:bg-[#F8F6F2] transition-colors">
                    <span className="font-heading text-lg md:text-xl font-bold text-[#0F1E3F]">
                      {service.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 md:px-8 py-6 text-[#1A1A1A] text-sm md:text-base leading-relaxed border-t border-[#E5E2DC]">
                    {service.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="bg-white py-16 md:py-28 border-t border-[#E5E2DC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F1E3F] mb-4">
              Our Process
            </h2>
            <div className="h-1 w-16 bg-[#CDAA80] mx-auto"></div>
          </div>

          {/* Process Flowchart */}
          <div className="bg-[#F8F6F2] rounded-lg p-8 md:p-12">
            {/* Desktop Flowchart - 6 Steps in Single Horizontal Line */}
            <div className="hidden lg:block">
              <div className="flex items-start justify-between gap-2">
                {processSteps.map((item, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    {/* Circle */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0F1E3F] to-[#213A56] text-white font-heading font-bold flex items-center justify-center text-lg shadow-md border-2 border-[#CDAA80] mb-4">
                      {index + 1}
                    </div>
                    
                    {/* Step Title */}
                    <p className="text-center font-heading text-sm font-bold text-[#0F1E3F] mb-2">
                      {item.step}
                    </p>
                    
                    {/* Step Description */}
                    <p className="text-center text-xs text-[#1A1A1A] text-opacity-70">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tablet Flowchart - Vertical stacked without arrows */}
            <div className="hidden md:block lg:hidden">
              <div className="space-y-8">
                {processSteps.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0F1E3F] to-[#213A56] text-white font-heading font-bold flex items-center justify-center flex-shrink-0 text-lg shadow-md border-2 border-[#CDAA80]">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-heading text-sm font-bold text-[#0F1E3F]">
                          {item.step}
                        </p>
                        <p className="text-xs text-[#1A1A1A] text-opacity-70 mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Flowchart - Vertical stacked without arrows */}
            <div className="md:hidden">
              <div className="space-y-6">
                {processSteps.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0F1E3F] to-[#213A56] text-white font-heading font-bold flex items-center justify-center flex-shrink-0 text-lg shadow-md border-2 border-[#CDAA80]">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-heading text-sm font-bold text-[#0F1E3F]">
                          {item.step}
                        </p>
                        <p className="text-xs text-[#1A1A1A] text-opacity-70 mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process Description */}
          <div className="mt-12 bg-gradient-to-r from-[#F8F6F2] to-[#E5E2DC] rounded-lg p-8 md:p-12 border border-[#E5E2DC] border-l-4 border-l-[#CDAA80]">
            <h3 className="font-heading text-lg font-bold text-[#0F1E3F] mb-4 text-center">How We Guide Your Journey</h3>
            <p className="text-[#1A1A1A] text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-center">
              Each engagement follows a structured approach: We begin with thorough preparation, move through investor meetings and term sheet negotiation, conduct comprehensive due diligence, manage conditions precedent, and guide you to successful closing. Throughout, we serve as your trusted advisor and advocate.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Two Column */}
      <section className="bg-[#F8F6F2] py-16 md:py-28 border-t border-[#E5E2DC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            {/* Left Column - Text */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F1E3F] mb-8">
                Why Partner with Us
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-lg md:text-xl font-bold text-[#213A56] mb-3">
                    Deep Market Knowledge
                  </h3>
                  <p className="text-sm md:text-base text-[#1A1A1A] leading-relaxed">
                    Intimate understanding of Indian markets, regulatory frameworks, and investor appetites across sectors. This translates to better deal terms and faster closes.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-lg md:text-xl font-bold text-[#213A56] mb-3">
                    Founder-Aligned Approach
                  </h3>
                  <p className="text-sm md:text-base text-[#1A1A1A] leading-relaxed">
                    We prioritize founder vision and long-term value creation. Our advice is grounded in practical experience, not theoretical frameworks.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-lg md:text-xl font-bold text-[#213A56] mb-3">
                    Regulatory Expertise
                  </h3>
                  <p className="text-sm md:text-base text-[#1A1A1A] leading-relaxed">
                    Comprehensive understanding of compliance requirements, tax implications, and regulatory pathways. We structure transactions to maximize efficiency.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-lg md:text-xl font-bold text-[#213A56] mb-3">
                    Investor Network
                  </h3>
                  <p className="text-sm md:text-base text-[#1A1A1A] leading-relaxed">
                    Trusted relationships with family offices, institutional investors, and private credit funds. We match capital with the right opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex items-center justify-center h-full">
              <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden border border-[#CDAA80] border-opacity-40 shadow-lg">
                <Image
                  src="/handshakeuws.jpg"
                  alt="Partnership & Advisory"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F1E3F] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Ready to raise capital or explore growth options?
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-8">
            Let's discuss how we can support your next growth phase.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 md:px-8 py-3 bg-[#CDAA80] text-[#0F1E3F] font-medium text-sm md:text-base hover:bg-[#997953] transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <h3 className="font-heading text-lg md:text-xl font-bold mb-4">Unity Wealth Solutions</h3>
              <p className="text-gray-400 text-xs md:text-sm">India-focused investment banking and corporate advisory.</p>
            </div>
            <div>
              <h4 className="font-medium text-sm md:text-base mb-4">Quick Links</h4>
              <ul className="space-y-2 text-xs md:text-sm text-gray-400">
                <li><Link href="/" className="hover:text-[#CDAA80] transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#CDAA80] transition-colors">About</Link></li>
                <li><Link href="/philosophy" className="hover:text-[#CDAA80] transition-colors">Philosophy</Link></li>
                <li><Link href="/team" className="hover:text-[#CDAA80] transition-colors">Team</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm md:text-base mb-4">Contact</h4>
              <p className="text-gray-400 text-xs md:text-sm">
                <a href="mailto:info@unitywealthsolutions.com" className="hover:text-[#CDAA80] transition-colors">
                  info@unitywealthsolutions.com
                </a>

                <a href="tel:+917977372974" className="block hover:text-[#CDAA80] transition-colors">
                  +91 79773 72974
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-[#213A56] pt-8">
            <p className="text-center text-gray-500 text-xs md:text-sm">© 2026 Unity Wealth Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
