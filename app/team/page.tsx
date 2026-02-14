import { Nav } from '@/components/nav'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export const metadata = {
  title: 'Our Team | Unity Wealth Solutions',
  description: 'Meet the team behind Unity Wealth Solutions.',
}

export default function Team() {
  const team = [
    {
      name: 'Raunak Mishra & Dixit Kumar',
      role: 'Co-Founders',
      bio: 'Brings two decades of investment banking and M&A experience. Known for founder-aligned thinking, practical structuring expertise, and an uncompromising focus on transaction outcomes. Dikshit has led over 50+ transactions across diverse sectors and has deep relationships with institutional capital sources.',
      focus: [
        'Transaction experience',
        'Founder alignment',
        'Practical judgment',
        'M&A expertise',
      ],
    }
    // {
    //   name: 'Raunak',
    //   role: 'Principal',
    //   bio: 'Specialist in financial structuring, regulatory advisory, and long-term partnership building. Raunak combines rigorous analytical capabilities with a deep understanding of the regulatory landscape. His approach ensures transactions are not just profitable, but sustainable and compliant.',
    //   focus: [
    //     'Advisory expertise',
    //     'Structuring skills',
    //     'Long-term partnerships',
    //     'Regulatory knowledge',
    //   ],
    // },
  ]

  return (
    <div>
      <Nav />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0F1E3F] to-[#213A56] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Our Team</h1>
          <p className="text-gray-300 text-lg">Experienced advisors with a shared commitment to long-term value creation.</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-[#F8F6F2] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="font-heading text-4xl font-bold text-[#0F1E3F] mb-4">
              Our Advisors
            </h2>
            <div className="h-1 w-16 bg-[#CDAA80] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-1 gap-12">
            {team.map((member, index) => (
              <div key={index}>
                <Card className="bg-white border-[#E5E2DC] overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  {/* Profile Image Placeholder */}
                  {/* <div className="w-full h-80 bg-gradient-to-br from-[#213A56] to-[#0F1E3F] flex items-center justify-center border-b border-[#E5E2DC]">
                    <div className="text-center">
                      <div className="text-[#CDAA80] text-6xl mb-3">👤</div>
                      <p className="text-gray-300">Profile Image</p>
                      <p className="text-gray-400 text-sm">(High-quality headshot)</p>
                    </div>
                  </div> */}

                  {/* Profile Info */}
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="font-heading text-3xl font-bold text-[#0F1E3F] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#CDAA80] font-medium text-base mb-6">
                      {member.role}
                    </p>
                    <p className="text-[#1A1A1A] text-base leading-relaxed mb-8">
                      We started our journey working deeply with numbers - financial models, projections, valuations, the usuals. But experience quickly taught us that finance is, at its core, about human decisions: the difficult choices founders confront when the path forward is uncertain and the stakes are high.
                    </p>

                    <p className="text-[#1A1A1A] text-base leading-relaxed mb-8">
                      We have worked closely with many kinds of entrepreneurs - first time founders taking their first institutional cheque with both excitement and nervousness, MSME promoters who have spent years managing tight working capitalcycles, and business families now thinking about scaling up professionally without losing what they built over generations. 
                    </p>

                    <p className="text-[#1A1A1A] text-base leading-relaxed mb-8">
                      What we bring to the table is not theory, but practical judgement built from being part of real transactions and real situations. Our focus is on preparing businesses in a way that long-term investors truly undrestand and support.
                    </p>

                    <p className="text-[#1A1A1A] text-base leading-relaxed mb-8">
                      We spend a lot of time on getting structures right, aligning expectations, and making sure founders, management, and investors are working in the same direction.
                    </p>

                    <p className="text=[#1A1A1A] test-base leading-relaxed mb-8">
                    We also believe the transaction process should not distract management from running the business. A good process should be clean, efficient, and respectful of the management's and investor's time - so the team can stay focused on execution.
                    </p>

                    {/* <div className="mt-auto">
                      <p className="text-[#0F1E3F] font-heading font-bold text-sm mb-4">
                        Focus Areas
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.focus.map((area, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-[#F8F6F2] text-[#0F1E3F] text-xs font-medium rounded border border-[#CDAA80]"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div> */}
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Team Values */}
          <div className="mt-20 bg-white rounded-lg p-12 border border-[#E5E2DC]">
            <h2 className="font-heading text-3xl font-bold text-[#0F1E3F] mb-8 text-center">
              Our Collaborative Approach
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-[#F8F6F2] to-[#E5E2DC] border border-[#CDAA80] border-opacity-30">
                <h3 className="font-heading text-lg font-bold text-[#213A56] mb-3">
                  Partnership Mindset
                </h3>
                <p className="text-[#1A1A1A] text-sm leading-relaxed">
                  We treat every engagement as a true partnership, invested in your success over the long term.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-[#F8F6F2] to-[#E5E2DC] border border-[#CDAA80] border-opacity-30">
                <h3 className="font-heading text-lg font-bold text-[#213A56] mb-3">
                  Strategic Thinking
                </h3>
                <p className="text-[#1A1A1A] text-sm leading-relaxed">
                  We go beyond transactions to help you think strategically about growth, capital, and market positioning.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-[#F8F6F2] to-[#E5E2DC] border border-[#CDAA80] border-opacity-30">
                <h3 className="font-heading text-lg font-bold text-[#213A56] mb-3">
                  Execution Excellence
                </h3>
                <p className="text-[#1A1A1A] text-sm leading-relaxed">
                  From deal structuring to regulatory navigation, we bring meticulous execution to every engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Network Section */}
      {/* <section className="bg-white py-20 md:py-32 border-t border-[#E5E2DC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-[#0F1E3F] mb-8 text-center">
            Supported by a Trusted Network
          </h2>

          <p className="text-[#1A1A1A] text-base leading-relaxed text-center mb-12">
            Our team draws on a network of specialized advisors—tax experts, legal counsel, industry specialists, and operational veterans—ensuring you have access to world-class expertise across every dimension of your business and capital journey.
          </p>*/}

          {/* Network Image Placeholder */}
          {/* <div className="w-full h-72 bg-gradient-to-r from-[#0F1E3F] via-[#213A56] to-[#0F1E3F] rounded-lg flex items-center justify-center border-2 border-dashed border-[#CDAA80]">
            <div className="text-center">
              <div className="text-[#CDAA80] text-6xl mb-3">🌐</div>
              <p className="text-white font-medium">Network Image Placeholder</p>
              <p className="text-gray-300 text-sm">Advisory ecosystem / team collaboration</p>
            </div>
          </div>
        </div>
      </section>  */}

      {/* CTA */}
      <section className="bg-[#0F1E3F] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">
            Let's build something extraordinary together
          </h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#CDAA80] text-[#0F1E3F] font-medium hover:bg-[#997953] transition-colors"
          >
            Connect with Us
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
                <li><Link href="/philosophy" className="hover:text-[#CDAA80] transition-colors">Philosophy</Link></li>
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
            <p className="text-center text-gray-500 text-sm">© 2026 Unity Wealth Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
