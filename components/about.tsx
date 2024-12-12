'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50 py-24 px-10">
      <div className="container mx-auto px-4">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/about-us.jpg"
              alt="Fresh fish processing"
              fill
              className="object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-transparent" />
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="inline-block">
              <span className="text-blue-600 font-medium">About Us</span>
              <div className="h-1 w-20 bg-blue-600 mt-2"></div>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900">
              Premium Lake Tilapia<br />
              <span className="text-blue-600">Nature's Protein Powerhouse</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-600">
              At UNIKZ, we specialize in bringing the finest lake Tilapia directly to your kitchen. 
              Our meticulous process ensures that every piece of this protein-rich, low-fat fish meets 
              the highest standards of quality and freshness. Tilapia from our lakes is not just a meal; 
              it's a healthy choice for your family.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
            >
              <div className="space-y-4">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Cleaning</h3>
                    <p className="text-sm text-gray-600">Professional deboning process</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Vacuum Sealed</h3>
                    <p className="text-sm text-gray-600">Maximum freshness guaranteed</p>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-4">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Quick Processing</h3>
                    <p className="text-sm text-gray-600">From lake to store in 24hrs</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Recipe Ready</h3>
                    <p className="text-sm text-gray-600">Ready for your favorite dishes</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Nutritional Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 mt-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Tilapia's Nutritional Excellence</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lake-raised Tilapia offers exceptional nutritional benefits that make it a superior choice 
              for health-conscious meals. Each fillet is packed with essential nutrients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">High Protein</h4>
              <p className="text-gray-600">26g of protein per 100g serving, perfect for muscle maintenance and growth</p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Low Fat</h4>
              <p className="text-gray-600">Less than 3g of fat per serving, making it an excellent lean protein choice</p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Heart Healthy</h4>
              <p className="text-gray-600">Rich in omega-3 fatty acids and low in saturated fat for cardiovascular health</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
