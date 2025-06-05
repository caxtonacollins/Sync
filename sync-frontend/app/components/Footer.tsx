import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'COMPANY',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Affiliates', href: '/affiliates' },
        { name: 'Careers', href: '/careers' },
        { name: 'Reviews', href: '/reviews' }
      ]
    },
    {
      title: 'PRODUCTS',
      links: [
        { name: 'Buy', href: '/buy' },
        { name: 'Sell', href: '/sell' },
        { name: 'Swap', href: '/swap' },
        { name: 'Receive', href: '/receive' },
        { name: 'Gateway', href: '/gateway' }
      ]
    },
    {
      title: 'LEARN',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Support', href: '/support' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Community', href: '/community' },
        { name: 'Status', href: '/status' }
      ]
    },
    {
      title: 'LEGAL',
      links: [
        { name: 'AML Policy', href: '/aml-policy' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms-of-service' },
        { name: 'Cookie Policy', href: '/cookie-policy' }
      ]
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'Instagram',
      icon: (
        <Instagram/>
      ),
      href: '#'
    },
    {
      name: 'LinkedIn',
      icon: (
       <Linkedin/>
      ),
      href: '#'
    },
    {
      name: 'YouTube',
      icon: (
       <Youtube/> 
      ),
      href: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
  <footer className="bg-gradient-to-br from-[#02071A] via-[#0E1032] to-[#120761] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold mb-4">KryptoSync</h3>
            <p className="text-sm text-[#737383] mb-4 w-60  font-Montserrat">
              KryptoSync is the best platform to buy, sell and exchange multiple cryptos with ease.
            </p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded-l-md bg-transparent text-white border border-[#9693A8] focus:outline-none"
              aria-label="Email for subscription"
            />
            <button className="mt-2 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {["About", "Contact", "Affiliates", "Careers", "Reviews"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {["Buy", "Sell", "Swap", "Receive", "Gateway"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Learn</h4>
            <ul className="space-y-2">
              {["Blog", "Support", "Pricing", "Community", "Status"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {["AML Policy", "Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400">© 2021 Coino. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
          <div className="flex space-x-4 mt-4 md:mt-0">
  {socialLinks.map((social) => (
    <Link 
      key={social.name} 
      href={social.href} 
      aria-label={`${social.name} link`}
    >
      <div className="w-8 h-8 bg-[#332D72] rounded-[8.4px] flex items-center justify-center hover:bg-gray-600 transition">
        {social.icon}
      </div>
    </Link>
  ))}
</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;