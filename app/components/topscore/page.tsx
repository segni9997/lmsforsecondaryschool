'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const topScorers = [
  {
    name: 'Meti Asrat',
    class: '10A',
    average: 95,
    image: '/assets/images/girl.jpeg', // Relative path to the image in the public folder
  },
  {
    name: 'Rabira Asrat',
    class: '12B',
    average: 92,
    image: '/assets/images/boy.jpeg', // Relative path to the image in the public folder
  },
  {
    name: 'lewi Melaku',
    class: '11C',
    average: 90,
    image: '/assets/images/boy.jpeg', // Relative path to the image in the public folder
  },
  {
    name: 'Ketoran Asrat',
    class: '9D',
    average: 88,
    image: '/assets/images/girl.jpeg', // Relative path to the image in the public folder
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function TopScorers() {
  // Create ref for the section containing the cards
  const sectionRef = useRef(null);
  // Use Framer Motion's useInView hook
  const isInView = useInView(sectionRef, { once: true } );
  // Create animation controls
  const controls = useAnimation();

  // Animate the cards when they come into view
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <div className="min-h-screen grid grid-cols-1 items-center justify-center bg-gray-200 p-8">
         <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold "
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
           Top <strong className='text-teal-800'><u>Scorers</u></strong>
          </motion.h1> 
      <div
        ref={sectionRef}
        className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl w-full"
      >
        {topScorers.map((student, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 text-center"
            variants={cardVariants}
            initial="hidden"
            animate={controls} // Use animation controls
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={student.image}
              alt={student.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 bg-transparent"
            />
            <h3 className="text-xl font-bold mb-2">{student.name}</h3>
            <p className="text-gray-600">Class: {student.class}</p>
            <p className="text-blue-600 text-lg font-bold">Average: {student.average}%</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
