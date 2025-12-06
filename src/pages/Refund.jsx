
import React from 'react';
import { motion } from 'framer-motion';

const Refund = () => {
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
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Refund Policy</h1>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-4">30-Day Return Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We offer a 30-day return policy on all items purchased from DevWears. If you are 
                not completely satisfied with your purchase, you may return the item(s) within 30 
                days of the original purchase date for a full refund or exchange.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Return Conditions</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To be eligible for a return, items must meet the following conditions:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Items must be unused and in the same condition as received</li>
                <li>Items must be in original packaging</li>
                <li>Items must have all original tags attached</li>
                <li>Proof of purchase (receipt or order confirmation) is required</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Non-Returnable Items</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The following items cannot be returned:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Underwear and swimwear for hygiene reasons</li>
                <li>Items damaged by misuse or normal wear</li>
                <li>Items returned more than 30 days after purchase</li>
                <li>Customized or personalized items</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Return Process</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To initiate a return:
              </p>
              <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                <li>Contact our customer service team at +1844-549-2239 or info@devwears.com</li>
                <li>Provide your order number and reason for return</li>
                <li>Receive return authorization and shipping instructions</li>
                <li>Package items securely and ship to our return center</li>
                <li>Refund will be processed within 5-7 business days after we receive your return</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Refund Methods</h2>
              <p className="text-gray-600 leading-relaxed">
                Refunds will be issued to the original payment method used for the purchase. 
                Please allow 5-10 business days for the refund to appear on your statement, 
                depending on your financial institution.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Shipping Costs</h2>
              <p className="text-gray-600 leading-relaxed">
                Original shipping costs are non-refundable. Customers are responsible for return 
                shipping costs unless the item was damaged or defective upon arrival.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Exchanges</h2>
              <p className="text-gray-600 leading-relaxed">
                We offer exchanges for different sizes or colors of the same item, subject to 
                availability. Exchange requests must be made within 30 days of purchase and 
                follow the same conditions as returns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                For questions about returns or refunds, please contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>DevWears Customer Service</strong><br />
                  2588 Oakmound Road<br />
                  Greensboro, North Carolina, United States 27495<br />
                  Phone: +1844-549-2239<br />
                  Email: info@devwears.com<br />
                  Hours: Monday-Friday 9AM-6PM EST
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Refund;
