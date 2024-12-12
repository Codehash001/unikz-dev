'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative py-24 px-10 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-4"
            >
              <h1 className="text-5xl font-bold text-gray-900">
                Fresh Lake Tilapia,<br />
                <span className="text-blue-600">From Lake to Plate</span>
              </h1>
              <p className="text-xl text-gray-600">
                Experience premium quality Tilapia processing with expert care. 
                High in protein, low in fat - nature's perfect choice for your healthy lifestyle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex gap-4"
            >
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                Our Process
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-blue-600">26g</h3>
                <p className="text-gray-600">Protein per 100g</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600">&lt;3g</h3>
                <p className="text-gray-600">Fat Content</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600">24h</h3>
                <p className="text-gray-600">Processing Time</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about-us.jpg"
                alt="Fresh fish processing"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Premium Quality</h4>
                  <p className="text-sm text-gray-600">Lake-fresh Tilapia</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
