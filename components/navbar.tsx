'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-transparent shadow-lg backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="mx-auto flex items-center justify-between px-8 py-4">
        <Link href="/" className="flex items-center gap-2">
          {/* <Image 
            src="/logo.png" 
            alt="FishCo Logo" 
            width={40} 
            height={40}
          /> */}
          <span className="text-2xl font-bold text-black">UNIKZ</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="tblack hover:text-emerald-400 transition-colors">Home</Link>
          <Link href="/products" className="text-black hover:text-emerald-400 transition-colors">Our Products</Link>
          <Link href="/process" className="text-black hover:text-emerald-400 transition-colors">Our Process</Link>
          <Link href="/recipes" className="text-black hover:text-emerald-400 transition-colors">Recipes</Link>
          <Link href="/stores" className="text-black hover:text-emerald-400 transition-colors">Find in Stores</Link>
          <Link href="/contact" className="text-black hover:text-emerald-400 transition-colors">Contact</Link>
        </div>

        <button className="rounded-md bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700 transition-colors">
          Find Products
        </button>
      </div>
    </nav>
  )
}
