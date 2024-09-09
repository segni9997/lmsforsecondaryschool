'use client'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const featureRefs = useRef([]);
  featureRefs.current = [];

  const addToFeatureRefs = (el) => {
    if (el && !featureRefs.current.includes(el)) {
      featureRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Hero text animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }
    );

    gsap.fromTo(
      subheadingRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.5, ease: 'power2.out' }
    );

    // Feature sections stagger animation
    gsap.fromTo(
      featureRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: featureRefs.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-900" data-theme='cupcake'>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center bg-primary min-h-screen text-pretty">
        <h1
          ref={headingRef}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Welcome to Your Learning Hub
        </h1>
        <p
          ref={subheadingRef}
          className="text-xl md:text-2xl"
        >
          Connecting Students, Teachers, and Parents for Success
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white text-secondary">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">
            Why Choose Our LMS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div
              ref={addToFeatureRefs}
              className="flex flex-col items-center text-center p-8 border rounded-lg shadow-lg"
            >
              <svg
                className="w-12 h-12 mb-4 text-blue-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 16v5a2 2 0 002 2h4a2 2 0 002-2v-5M12 12l9 4.5M12 12L3 16.5M12 12V3"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Student Engagement</h3>
              <p>
                Interactive classes and performance tracking to ensure student success.
              </p>
            </div>

            <div
              ref={addToFeatureRefs}
              className="flex flex-col items-center text-center p-8 border rounded-lg shadow-lg"
            >
              <svg
                className="w-12 h-12 mb-4 text-blue-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c.04-.57.16-1.12.37-1.64A6.01 6.01 0 0112 2a6 6 0 110 12c-.04-.57-.16-1.12-.37-1.64A6.01 6.01 0 0112 8z"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Teacher Management</h3>
              <p>
                Empower teachers with tools to grade, communicate, and share resources.
              </p>
            </div>

            <div
              ref={addToFeatureRefs}
              className="flex flex-col items-center text-center p-8 border rounded-lg shadow-lg"
            >
              <svg
                className="w-12 h-12 mb-4 text-blue-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7h18M3 12h18m-9 5h9"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Parent Involvement</h3>
              <p>
                Keep parents informed and engaged with real-time student progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get Started with Our LMS Today!</h2>
          <p className="text-lg mb-8">Join a community of learners and educators.</p>
          <button className="btn btn-primary px-6 py-3 text-xl">Sign Up Now</button>
        </div>
      </section>
    </div>
  );
}
