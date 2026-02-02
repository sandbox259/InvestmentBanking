import { Nav } from '@/components/nav'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Our Philosophy | Unity Wealth Solutions',
  description: 'Understanding our investment philosophy and approach to value creation.',
}

export default function Philosophy() {
  return (
    <div>
      <Nav />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0F1E3F] to-[#213A56] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Our Philosophy</h1>
          <p className="text-gray-300 text-lg">How we think about India, capital, and value creation.</p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="bg-[#F8F6F2] py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

         {/* Section 1: India as Opportunity */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* LEFT: Text */}
              <div>
                <h2 className="font-heading text-4xl font-bold text-[#0F1E3F] mb-6">
                  India as a Structural Opportunity
                </h2>
                <div className="h-1 w-12 bg-[#CDAA80] mb-8"></div>

                <div className="space-y-6 text-[#1A1A1A] text-base leading-relaxed">
                  <p>
                    India's growth story is not cyclical—it's structural. Driven by favorable demographics,
                    rising domestic consumption, rapid digital adoption, and supportive policy frameworks,
                    India represents one of the world's most compelling investment opportunities over the next two decades.
                  </p>
                  <p>
                    This creates a powerful backdrop for value creation: strong underlying growth combined with
                    capital formation that is still in its early innings.
                  </p>
                </div>
              </div>

              {/* RIGHT: Image */}
              <div>
                <div className="relative w-full h-80 lg:h-96 rounded-lg overflow-hidden border-2 border-[#CDAA80]">
                  <Image
                    src="/bse_img_uws2.jpg"
                    alt="India structural growth opportunity"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>


          {/* Section 2: Our Belief */}
          {/* <div className="mb-20 bg-white p-12 rounded-lg border border-[#E5E2DC] border-l-4 border-l-[#CDAA80]">
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
          </div> */}

          {/* Section 3: Our Philosophy */}
          <div className="mb-20">
            <h2 className="font-heading text-4xl font-bold text-[#0F1E3F] mb-6">
              Our Philosophy
            </h2>
            <div className="h-1 w-12 bg-[#CDAA80] mb-8"></div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg border border-[#E5E2DC]">
                <h3 className="font-heading text-2xl font-bold text-[#213A56] mb-4">
                  1. Deploy Patient Capital
                </h3>
                <p className="text-[#1A1A1A] text-base leading-relaxed">
                  We think in years and decades, not quarters. We partner with management through growth cycles, scaling, and often through to successful exits. This long-term orientation allows us to take calculated risks and support transformational initiatives.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-[#E5E2DC]">
                <h3 className="font-heading text-2xl font-bold text-[#213A56] mb-4">
                  2. Combine Rigorous Diligence with On-Ground Sourcing
                </h3>
                <p className="text-[#1A1A1A] text-base leading-relaxed">
                  Financial due diligence is necessary but insufficient. We invest time in understanding the qualitative factors: founder quality, competitive positioning, market trends, and cultural fit. Our on-the-ground insights help us identify opportunities before they become widely known.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-[#E5E2DC]">
                <h3 className="font-heading text-2xl font-bold text-[#213A56] mb-4">
                  3. Partner with Founders to Build Institution-Grade Businesses
                </h3>
                <p className="text-[#1A1A1A] text-base leading-relaxed">
                  We work alongside founders as active partners, not passive investors. We help strengthen governance, professionalize operations, and scale systems—while respecting the founder's vision and brand. The goal: building enduring enterprises with institutional-grade infrastructure.
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            {/* <div className="mt-12">
              <div className="w-full h-80 bg-gradient-to-r from-[#0F1E3F] to-[#213A56] rounded-lg flex items-center justify-center border-2 border-dashed border-[#CDAA80]">
                <div className="text-center">
                  <div className="text-[#CDAA80] text-5xl mb-3">💡</div>
                  <p className="text-white font-medium">Philosophy Image Placeholder</p>
                  <p className="text-gray-300 text-sm">(Strategic thinking/value creation)</p>
                </div>
              </div>
            </div> */}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 border-t border-[#E5E2DC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-[#0F1E3F] mb-6">
            Want to explore how we can partner with you?
          </h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#0F1E3F] text-white font-medium hover:bg-[#213A56] transition-colors"
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
              <h3 className="font-heading text-xl font-bold mb-4">Unity Wealth Solutions</h3>
              <p className="text-gray-400 text-sm">India-focused investment banking and corporate advisory.</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/" className="hover:text-[#CDAA80] transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#CDAA80] transition-colors">About</Link></li>
                <li><Link href="/services" className="hover:text-[#CDAA80] transition-colors">Services</Link></li>
                <li><Link href="/team" className="hover:text-[#CDAA80] transition-colors">Team</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Connect</h4>
              <p className="text-gray-400 text-sm"><Link href="/contact" className="hover:text-[#CDAA80] transition-colors">contact@unitywealthsolutions.com</Link></p>
            </div>
          </div>
          <div className="border-t border-[#213A56] pt-8">
            <p className="text-center text-gray-500 text-sm">© 2024 Unity Wealth Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
