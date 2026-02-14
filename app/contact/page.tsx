'use client'

import React from "react"

import { Nav } from '@/components/nav'
import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', company: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div>
      <Nav />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0F1E3F] to-[#213A56] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">Get in Touch</h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-300 max-w-3xl">Let's explore how we can help you achieve your growth objectives.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#F8F6F2] py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Before You Reach Out Card - MOVED TO TOP */}
          <div className="mb-12 md:mb-16 bg-white rounded-lg p-8 md:p-12 border border-[#E5E2DC]">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#0F1E3F] mb-8">
              Before You Reach Out
            </h3>
            <div className="space-y-6 text-[#1A1A1A] text-sm md:text-base leading-relaxed">
              <p>
                <span className="font-semibold text-[#213A56]">Are you a founder or investor?</span> Share a brief overview of your business, stage, and what you're looking to achieve.
              </p>
              <p>
                <span className="font-semibold text-[#213A56]">Looking to explore an opportunity?</span> Help us understand the situation—company profile, capital needs, timeline, and key decision-makers.
              </p>
              <p>
                <span className="font-semibold text-[#213A56]">General inquiry?</span> We're always open to conversations about India's investment landscape and emerging opportunities.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mb-12 md:mb-16 bg-white rounded-lg p-8 md:p-12 border border-[#E5E2DC]">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0F1E3F] mb-8">Send us a Message</h2>

            {submitted && (
              <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium text-sm md:text-base">
                  Thank you for reaching out! We'll get back to you shortly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#0F1E3F] font-medium text-xs md:text-sm mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#E5E2DC] rounded bg-white text-[#1A1A1A] text-sm focus:outline-none focus:border-[#CDAA80] focus:ring-1 focus:ring-[#CDAA80]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-[#0F1E3F] font-medium text-xs md:text-sm mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#E5E2DC] rounded bg-white text-[#1A1A1A] text-sm focus:outline-none focus:border-[#CDAA80] focus:ring-1 focus:ring-[#CDAA80]"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-[#0F1E3F] font-medium text-xs md:text-sm mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#E5E2DC] rounded bg-white text-[#1A1A1A] text-sm focus:outline-none focus:border-[#CDAA80] focus:ring-1 focus:ring-[#CDAA80]"
                  placeholder="Your company or organization"
                />
              </div>

              <div>
                <label className="block text-[#0F1E3F] font-medium text-xs md:text-sm mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-[#E5E2DC] rounded bg-white text-[#1A1A1A] text-sm focus:outline-none focus:border-[#CDAA80] focus:ring-1 focus:ring-[#CDAA80]"
                  placeholder="Tell us about your needs, current situation, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-[#0F1E3F] text-white font-medium rounded text-sm md:text-base hover:bg-[#213A56] transition-colors"
              >
                Send Message
              </button>

              <p className="text-[#1A1A1A] text-xs text-center">
                We respect your privacy. Your information will be kept confidential and used only to respond to your inquiry.
              </p>
            </form>
          </div>

          {/* Contact Info Section - IMPROVED VISUALLY */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-[#0F1E3F] to-[#213A56] rounded-lg p-8 text-white border border-[#CDAA80] border-opacity-30 hover:shadow-lg transition-shadow">
              <h3 className="font-heading text-lg font-bold mb-3">Email</h3>
              <a href="mailto:info@unitywealthsolutions.com" className="text-gray-300 hover:text-[#CDAA80] transition-colors text-sm md:text-base font-medium break-all">
                info@unitywealthsolutions.com
              </a>
            </div>

            <div className="bg-gradient-to-br from-[#213A56] to-[#0F1E3F] rounded-lg p-8 text-white border border-[#CDAA80] border-opacity-30 hover:shadow-lg transition-shadow">
              <h3 className="font-heading text-lg font-bold mb-3">Response Time</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                We typically respond to inquiries within 24-48 hours during business days.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0F1E3F] via-[#1A2F4F] to-[#213A56] rounded-lg p-8 text-white border border-[#CDAA80] border-opacity-30 hover:shadow-lg transition-shadow">
              <h3 className="font-heading text-lg font-bold mb-3">Confidentiality</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                All conversations and materials shared are treated with absolute confidentiality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-20 md:py-32 border-t border-[#E5E2DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-[#0F1E3F] mb-6">
            Why Reach Out to Us?
          </h2>
          <p className="text-[#1A1A1A] text-base leading-relaxed mb-12 max-w-2xl mx-auto">
            Whether you're raising capital, exploring a transaction, or seeking strategic counsel, we bring deep market expertise, founder alignment, and a commitment to creating lasting value. Let's have a conversation.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F8F6F2] p-6 rounded-lg">
              <div className="text-[#CDAA80] text-4xl mb-4">✓</div>
              <h3 className="font-heading text-lg font-bold text-[#0F1E3F] mb-2">
                Founder-Focused
              </h3>
              <p className="text-[#1A1A1A] text-sm">We understand your vision and prioritize long-term value over quick wins.</p>
            </div>

            <div className="bg-[#F8F6F2] p-6 rounded-lg">
              <div className="text-[#CDAA80] text-4xl mb-4">✓</div>
              <h3 className="font-heading text-lg font-bold text-[#0F1E3F] mb-2">
                Market Expertise
              </h3>
              <p className="text-[#1A1A1A] text-sm">Deep knowledge of Indian markets, regulations, and investor networks.</p>
            </div>

            <div className="bg-[#F8F6F2] p-6 rounded-lg">
              <div className="text-[#CDAA80] text-4xl mb-4">✓</div>
              <h3 className="font-heading text-lg font-bold text-[#0F1E3F] mb-2">
                Confidential
              </h3>
              <p className="text-[#1A1A1A] text-sm">All conversations and sensitive information are handled with complete discretion.</p>
            </div>
          </div>
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
                <li><Link href="/services" className="hover:text-[#CDAA80] transition-colors">Services</Link></li>
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
