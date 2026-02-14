import { Nav } from '@/components/nav'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import Image from  'next/image'

export const metadata = {
  title: 'About Us | Unity Wealth Solutions',
  description: 'Learn about Unity Wealth Solutions, our mission, and values.',
}

export default function About() {
  return (
    <div>
      <Nav />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0F1E3F] to-[#213A56] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">About Us</h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-300">Our story, mission, and commitment to excellence.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#F8F6F2] py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About UWS- Premium Card Section */}

          
            <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
           {/* LEFT: Text */}
           <div>
            <h2 className="font-heading text-4xl font-bold text-[#0F1E3F] mb-6">
              About UWS
            </h2>
            <div className="h-1 w-12 bg-[#CDAA80] mb-8"></div>

            <div className="space-y-6 text-[#1A1A1A] text-base leading-relaxed">
              <p>
                UWS is engaged in investment banking activities of fundraising and corporate advisory.
              </p>
              <p>
                UWS has built a nationwide sourcing network, systematically engaging with businesses across india, including in undeserved and emrging across India, including in undeserved and emerging inducstrial regions through deep coverage of industrial cluster , we identify high quality niche enterprises with strong growth potential.
              </p>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div>
            <div className="relative w-full h-80 lg:h-96 rounded-lg overflow-hidden border-2 border-[#CDAA80]">
              <Image
                src="/Aboutus.jpeg"
                alt="About us"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>

          

          {/* Values Grid */}
          <div className="mb-16 md:mb-20">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F1E3F] mb-12 text-center">
              Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: 'Trust & Ethics',
                  description: 'Integrity underpins every decision. We maintain the highest ethical standards, ensuring transparent communication and honest counsel in all dealings.',
                },
                {
                  title: 'Regulatory Rigor',
                  description: 'Deep expertise in compliance frameworks and regulatory landscapes. We structure solutions that meet and exceed compliance requirements.',
                },
                {
                  title: 'Long-term Value',
                  description: 'We prioritize sustainable, compounding growth. Our success is measured by the enduring value we create for our partners over years and decades.',
                },
              ].map((value, i) => (
                <Card
                  key={i}
                  className="bg-white p-6 md:p-8 border-[#E5E2DC] hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-heading text-lg md:text-2xl font-bold text-[#0F1E3F] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-[#1A1A1A] text-xs md:text-sm leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          {/* <div className="bg-white rounded-lg p-8 md:p-12 border border-[#E5E2DC]">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0F1E3F] mb-8">
              Our Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="font-heading text-lg md:text-xl font-bold text-[#213A56] mb-4">
                  Transaction Experience
                </h3>
                <ul className="space-y-3 text-[#1A1A1A] text-xs md:text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-[#CDAA80] mt-1">•</span>
                    <span>Mergers & Acquisitions across sectors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#CDAA80] mt-1">•</span>
                    <span>Capital raises and equity placements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#CDAA80] mt-1">•</span>
                    <span>Debt restructuring and financing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#CDAA80] mt-1">•</span>
                    <span>IPO advisory and pre-listing readiness</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-lg md:text-xl font-bold text-[#213A56] mb-4">
                  Sector Coverage
                </h3>
                <ul className="space-y-3 text-[#1A1A1A] text-xs md:text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-[#CDAA80] mt-1">•</span>
                    <span>Consumer & Retail</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#CDAA80] mt-1">•</span>
                    <span>Technology & Digital</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#CDAA80] mt-1">•</span>
                    <span>Manufacturing & Industrial</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#CDAA80] mt-1">•</span>
                    <span>Financial Services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}

            {/* Mission*/ }
          <div className="mb-16 md:mb-20 bg-white rounded-lg p-8 md:p-12 border border-[#E5E2DC] shadow-lg">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F1E3F] mb-8">
              Our Mission
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Mission Points */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-[#CDAA80] font-bold text-xl min-w-fit mt-1">●</span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-[#213A56] mb-2">Growth Through Partnership</h3>
                    <p className="text-[#1A1A1A] text-sm md:text-base leading-relaxed">
                      Since day one, we have focused on one thing: helping strong businesses grow through meaningful partnerships.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-[#CDAA80] font-bold text-xl min-w-fit mt-1">●</span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-[#213A56] mb-2">From Potential to Scale</h3>
                    <p className="text-[#1A1A1A] text-sm md:text-base leading-relaxed">
                      We work with founders, investors, and institutions to turn potential into scale with structured advisory.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-[#CDAA80] font-bold text-xl min-w-fit mt-1">●</span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-[#213A56] mb-2">Partnerships That Compound</h3>
                    <p className="text-[#1A1A1A] text-sm md:text-base leading-relaxed">
                      Not just transactions—partnerships built on trust, expertise, and an unwavering commitment to value creation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Value Proposition */}
              <div className="bg-gradient-to-br from-[#0F1E3F] to-[#213A56] rounded-lg p-8 text-white flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-6">Our Approach</h3>
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-6">
                   Unity Wealth Solutions operates as a long term partner to both sides of the table.
                  </p>
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-6">
                    For founders, we bring structure, preparation, and clarity before capital is raised. For investors, we provide access to carefully filtered opportunities supported by on ground diligence and realistic underwriting.
                  </p>
                </div>
                <div className="pt-6 border-t border-[#CDAA80] border-opacity-40">
                  <p className="text-[#CDAA80] font-semibold text-sm">Our role is to reduce information gaps , align expectations, and ensure capital is deployed where it can compound.</p>
                </div>
              </div>
            </div>
          </div>


     </div>
      </section> 

      {/* CTA */}
      <section className="bg-[#0F1E3F] text-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Let's build something great together
          </h2>
          <Link
            href="/contact"
            className="inline-block px-6 md:px-8 py-2.5 md:py-3 bg-[#CDAA80] text-[#0F1E3F] font-medium text-sm md:text-base hover:bg-[#997953] transition-colors"
          >
            Get in Touch
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
                <li><Link href="/services" className="hover:text-[#CDAA80] transition-colors">Services</Link></li>
                <li><Link href="/philosophy" className="hover:text-[#CDAA80] transition-colors">Philosophy</Link></li>
                <li><Link href="/team" className="hover:text-[#CDAA80] transition-colors">Team</Link></li>
                <li><Link href="/contact" className="hover:text-[#CDAA80] transition-colors">Contact</Link></li>
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
