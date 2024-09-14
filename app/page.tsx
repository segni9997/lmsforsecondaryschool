'use client'
import { motion } from 'framer-motion';
import Footer from './components/footer/page';
import EmployeCards from './components/treasures/page';
import TopScorers from './components/topscore/page';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};
const navVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.6 } }
};
export default function Home() {
  return (
    <>
      {/* Navbar */}
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="fixed w-full bg-white shadow-lg z-50 mx-auto"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.a
            className="text-xl md:text-2xl font-bold text-primary"
            whileHover={{ scale: 1.1 }}
          >
            <motion.svg
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4 }}
              width="30"
              height="30"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="inline-block fill-current mr-2"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </motion.svg>
            Secondary School
          </motion.a>
          <ul className="hidden md:flex space-x-6">
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#about" className="text-gray-800 hover:text-primary">About Us</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#announcement" className="text-gray-800 hover:text-primary">Announcement</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#studentOfTheYear" className="text-gray-800 hover:text-primary">Student of the Year</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#contact" className="text-gray-800 hover:text-primary">Contact</a>
            </motion.li>
         
          </ul>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center bg-hero-pattern bg-cover bg-center min-h-screen text-pretty"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-primary opacity-70"></div> {/* Optional color overlay */}
        <div className="relative z-10 px-6 md:px-12">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            The beautiful thing about learning is that no one can take it away from you
          </motion.h1>
          <motion.svg
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            width="300"
            height="300"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="inline-block fill-current mt-6 md:mt-12"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </motion.svg>
          <p className="text-lg sm:text-xl md:text-2xl mt-4 md:mt-8">Join us and be part of our learning community</p>
          <motion.a
            href="/enroll"
            className="btn btn-primary mt-6 text-center items-center text-lg sm:text-xl md:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1.2 }}
          >
            Enroll Now
          </motion.a>
          <motion.a
            href="/components/auth"
            className="btn btn-secondary mt-6 text-center items-center text-lg sm:text-xl md:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1.2 }}
          >
            Get Started
          </motion.a>
        </div>
      </section>
    
       <EmployeCards/>
       <TopScorers/>
      {/* Footer */}
      <Footer />
    </>
  );
}
