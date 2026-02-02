import { Nav } from '@/components/nav'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Nav />

      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-28 overflow-hidden min-h-[500px] md:min-h-[600px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-right-bottom md:bg-top bg-no-repeat"
          style={{backgroundImage: 'url(/uwshome2.jpeg)'}}
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1E3F] via-[#0F1E3F]/75 md:via-[#0F1E3F]/60 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            {/* Left Column */}
            <div>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Connecting ambition to capital.
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 md:mb-12 leading-relaxed">
                We partner with founders, investors, and institutions to turn strong businesses into scalable, long-term enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-6 md:px-8 py-2.5 md:py-3 bg-[#CDAA80] text-[#0F1E3F] font-medium text-sm md:text-base hover:bg-[#997953] transition-colors text-center"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/services"
                  className="px-6 md:px-8 py-2.5 md:py-3 border border-white text-white font-medium text-sm md:text-base hover:bg-white hover:text-[#0F1E3F] transition-colors text-center"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-[#F8F6F2] py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F1E3F] mb-4">
              What We Do
            </h2>
            <div className="h-1 w-16 bg-[#CDAA80] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {[
              {
                title: 'Investment Banking',
                description: 'Comprehensive advisory for mergers, acquisitions, and capital structuring.',
              },
              {
                title: 'Capital Raising',
                description: 'Strategic guidance in equity, debt, and alternative capital sourcing.',
              },
              {
                title: 'Corporate Advisory',
                description: 'End-to-end support for business transformation and strategic growth.',
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="bg-white p-6 md:p-8 border-[#E5E2DC] hover:shadow-lg transition-shadow"
              >
                <h3 className="font-heading text-xl md:text-2xl font-bold text-[#0F1E3F] mb-4">
                  {item.title}
                </h3>
                <p className="text-[#1A1A1A] text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Section 2: Our Belief */}
          <div className="mb-20 bg-white p-12 rounded-lg border border-[#E5E2DC] border-l-4 border-l-[#CDAA80]">
            <h2 className="font-heading text-4xl font-bold text-[#0F1E3F] mb-6">
              Our Belief
            </h2>
            <div className="h-1 w-12 bg-[#CDAA80] mb-8"></div>
            <div className="space-y-6 text-[#1A1A1A] text-base leading-relaxed">
              <p className="mb-6">
                Significant value lies hidden in underappreciated MSMEs, industrial clusters, and family-run enterprises. These businesses have strong fundamentals but limited access to institutional capital and operational expertise.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-[#CDAA80] font-bold text-xl min-w-fit mt-1">●</span>
                  <span>Profitable and cash-generative, yet flying below institutional radar</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#CDAA80] font-bold text-xl min-w-fit mt-1">●</span>
                  <span>Run by capable founders who built strong businesses but lack capital for the next phase of growth</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#CDAA80] font-bold text-xl min-w-fit mt-1">●</span>
                  <span>Poised to scale rapidly with the right capital partner and structured approach</span>
                </div>
              </div>
            </div>
          </div>

          {/* What We Do Image Placeholder */}
          {/* <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden border border-[#CDAA80] border-opacity-40 shadow-lg">
            <Image
              src="/coinsuws.jpg"
              alt="Business architecture and global markets"
              fill
              className="object-cover"
            />
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0F1E3F] text-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Ready to grow your enterprise?
          </h2>
          <p className="text-gray-300 text-sm md:text-base mb-6 md:mb-8">
            Let's explore how we can partner with you to unlock long-term value.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 md:px-8 py-2.5 md:py-3 bg-[#CDAA80] text-[#0F1E3F] font-medium text-sm md:text-base hover:bg-[#997953] transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <h3 className="font-heading text-lg md:text-xl font-bold mb-4">Unity Wealth Solutions</h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                India-focused investment banking and corporate advisory firm.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-sm md:text-base mb-4">Quick Links</h4>
              <ul className="space-y-2 text-xs md:text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-[#CDAA80] transition-colors">About Us</Link></li>
                <li><Link href="/services" className="hover:text-[#CDAA80] transition-colors">Services</Link></li>
                <li><Link href="/philosophy" className="hover:text-[#CDAA80] transition-colors">Philosophy</Link></li>
                <li><Link href="/team" className="hover:text-[#CDAA80] transition-colors">Team</Link></li>
                <li><Link href="/contact" className="hover:text-[#CDAA80] transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm md:text-base mb-4">Connect</h4>
              <p className="text-gray-400 text-xs md:text-sm">
                <Link href="/contact" className="hover:text-[#CDAA80] transition-colors">
                  contact@unitywealthsolutions.com
                </Link>
              </p>
            </div>
          </div>
          <div className="border-t border-[#213A56] pt-8">
            <p className="text-center text-gray-500 text-xs md:text-sm">
              © 2026 Unity Wealth Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
