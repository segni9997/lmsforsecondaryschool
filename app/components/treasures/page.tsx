'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { title: 'Students', count: 1200 },
  { title: 'Teachers', count: 85 },
  { title: 'Classes', count: 50 },
  { title: 'Courses', count: 150 },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function EmployeCards() {
  // Create state to manage the count-up values
  const [currentCounts, setCurrentCounts] = useState(
    stats.map(() => 0) // Initialize all counts to 0
  );

  useEffect(() => {
    // Iterate over each stat and increment the counts
    stats.forEach((stat, index) => {
      const incrementValue = 1 // Gap of 5 for the count-up
      const interval = setInterval(() => {
        setCurrentCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.count) {
            newCounts[index] = Math.min(newCounts[index] + incrementValue, stat.count);
          } else {
            clearInterval(interval); // Stop the interval when target is reached
          }
          return newCounts;
        });
      }, 5); // Speed of counting, can be adjusted
    });
  }, []);

  return (
    <motion.div>
            <div className="min-h-max grid grid-cols-1 space-y-4 items-center justify-center bg-gray-100 p-6">
   <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold "
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            We have 
          </motion.h1> 
      <div className="grid grid-cols-1 mx-auto  md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl w-full">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-2">{stat.title}</h3>
            <p className="text-4xl font-extrabold text-blue-600">{currentCounts[index]}</p>
          </motion.div>
        ))}
      </div>
    </div>
    </motion.div>
  
  );
}
