// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import Logo from "../asset/Logos/Aachi-logo.png"
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
 const socialLinks = [
  { name: "Facebook", icon: <FaFacebookF />, href: "#" },
  { name: "Twitter", icon: <FaTwitter />, href: "#" },
  { name: "Instagram", icon: <FaInstagram />, href: "#" },
  { name: "YouTube", icon: <FaYoutube />, href: "#" },
];

  const quickLinks = [
    { title: "Home", href: "#" },
    { title: "About Us", href: "#" },
    { title: "Infrastructure", href: "#" },
    { title: "Gallery", href: "#" },
    { title: "Careers", href: "#" },
    { title: "Shop", href: "#" },
    { title: "Contact", href: "#" },
  ]

  return (
    <footer className="bg-white border-t-8 mt-4 border-red-600 relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 text-gray-800">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <img src={Logo} alt="AACHI Group Logo" className="w-40 mx-auto md:mx-0" />
            <p className="text-center md:text-left text-lg font-medium text-gray-700 max-w-md mx-auto md:mx-0">
              Aachi Group is a trusted Indian food brand offering high-quality spices and products globally, blending tradition with innovation to serve families, chefs, and food businesses worldwide.
            </p>
            <div className="flex justify-center md:justify-start gap-5 mt-4">
              {socialLinks.map(({ name, icon, href }) => (
                <motion.a
                  key={name}
                  href={href}
                  aria-label={name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-red-600 rounded-full shadow-lg hover:bg-red-700 transition-colors"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            aria-label="Quick Links"
            className="space-y-3 text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-6 text-red-600">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ title, href }) => (
                <li key={title}>
                  <a
                    href={href}
                    className="text-gray-700 hover:text-red-600 font-semibold transition-colors"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>


          {/* Map */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, delay: 0.15 }}
  className="space-y-4 flex flex-col items-center"
>
  <h3 className="text-3xl font-bold mb-6 text-red-600">Contact Us</h3>
  <address className="not-italic text-gray-700 text-base leading-relaxed">
    Aachi Masala Corporate Office,<br />
    Plot No. 16, 17, First Street, Thangam Colony, Anna Nagar West, Chennai, <br />
    Tamil Nadu 600040<br />
    <span className="block">Working Hours (6.30 AM to 9.00 PM)</span>
    <span className="block">Mail: customercare@aachigroup.com</span>
  </address>
  
</motion.div>
        </div>

        

        {/* Divider */}
        <hr className="my-12 border-gray-300" />


        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 text-center md:text-left text-sm">
          <p className="select-none">© 2024 Aachi Group. All rights reserved.</p>
          <div className="flex gap-8 justify-center md:justify-start">
            <a
              href="#"
              className="hover:text-red-600 font-medium transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-red-600 font-medium transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-red-600 font-medium transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
