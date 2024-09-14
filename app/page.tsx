'use client'
import { motion } from 'framer-motion';
import Footer from './components/footer/page';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};
const navVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }
};
export default function Home() {
  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.2,
  // });
  return (
    <>
    {/* navbar */}
     <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed w-full bg-white shadow-lg z-50 mx-auto"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          className="text-2xl font-bold text-primary"
          whileHover={{ scale: 1.1 }}
        >
            <motion.svg
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4 }}
        width="40"
        height="40"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        className="inline-block fill-current">
        <path
          d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
      </motion.svg>
          Secondary School
        </motion.a>
        <ul className="flex space-x-6">
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="#about" className="text-gray-800 hover:text-primary">About Us</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="#anouncement" className="text-gray-800 hover:text-primary">Anouncement</a>
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
    {/* hero 1 */}
    {/* <div className="min-h-screen bg-gradient-to-b from-blue-500 to-indigo-600 text-white ">
      <motion.div
        className="flex flex-col items-center justify-center h-screen space-y-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h1
          className="text-6xl font-bold"
          whileHover={{ scale: 1.1 }}
        >
          Welcome to Our Secondary School
        </motion.h1>
        <motion.p
          className="text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Excellence in Education and Beyond
        </motion.p>
        <motion.button
          className="px-6 py-3 mt-4 text-lg bg-white text-blue-600 font-semibold rounded-md"
          whileHover={{ scale: 1.05 }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </div> */}
  
    <section 
        className="relative flex flex-col items-center justify-center text-center bg-hero-pattern  bg-cover bg-center min-h-screen text-pretty"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-primary opacity-70"></div> {/* Optional color overlay */}
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            The beautiful thing about learning is that no one can take it away from you
          </h1>
          <motion.svg
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
        width="500"
        height="500"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        className="inline-block fill-current">
        <path
          d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
      </motion.svg>
          <p className="text-xl md:text-2xl">
            Connecting Students, Teachers, and Parents for Success
          </p>
        </div>
      </section>
    {/* <section id="academics" className="py-20 bg-gray-100 text-center">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-gray-800"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardVariants}
        >
          Our Academics
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Mathematics", "Science", "Languages"].map((subject, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <h3 className="text-xl font-semibold text-gray-700">{subject}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section> */}
    <section id="contact" className="py-20 bg-indigo-100">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>
        <motion.form
          className="mt-8 space-y-6 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <textarea
            rows={4}
            placeholder="Message"
            className="w-full px-4 py-2 border rounded-lg"
          ></textarea>
          <motion.button
            type="submit"
            className="px-6 py-3 bg-slate-50 text-white font-semibold rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
     <Footer/>
    </>
    
  );
}
