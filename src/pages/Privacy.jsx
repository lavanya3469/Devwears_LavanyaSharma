
import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
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
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Create an account or make a purchase</li>
                <li>Contact us for customer support</li>
                <li>Subscribe to our newsletter</li>
                <li>Participate in surveys or promotions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Send promotional communications</li>
                <li>Monitor and analyze trends and usage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to outside 
                parties except as described in this policy. We may share information with trusted 
                third parties who assist us in operating our website, conducting our business, 
                or serving our users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate data collection, storage, and processing practices and 
                security measures to protect against unauthorized access, alteration, disclosure, 
                or destruction of your personal information and data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Our website may use cookies to enhance user experience. You may choose to set your 
                web browser to refuse cookies, or to alert you when cookies are being sent. If you 
                do so, note that some parts of the site may not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
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

export default Privacy;
