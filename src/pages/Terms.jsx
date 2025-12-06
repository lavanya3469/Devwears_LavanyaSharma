
import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 pb-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Terms & Conditions</h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using DevWears website, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do 
                not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Use License</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on DevWears 
                website for personal, non-commercial transitory viewing only. This is the grant of a 
                license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Product Information</h2>
              <p className="text-gray-600 leading-relaxed">
                We strive to provide accurate product information, including descriptions, prices, and 
                availability. However, we do not warrant that product descriptions or other content is 
                accurate, complete, reliable, current, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and 
                protect your information when you use our service. By using our service, you agree to 
                the collection and use of information in accordance with our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                In no event shall DevWears or its suppliers be liable for any damages (including, 
                without limitation, damages for loss of data or profit, or due to business interruption) 
                arising out of the use or inability to use the materials on DevWears website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws 
                of North Carolina, United States, and you irrevocably submit to the exclusive 
                jurisdiction of the courts in that state or location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about these Terms & Conditions, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>DevWears</strong><br />
                  2588 Oakmound Road<br />
                  Greensboro, North Carolina, United States 27495<br />
                  Phone: +1844-549-2239<br />
                  Email: info@devwears.com
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Terms;
