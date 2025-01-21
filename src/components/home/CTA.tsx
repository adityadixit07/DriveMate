import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Car,
  UserPlus,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
} from "lucide-react";

const MovingCar = ({ position, color }) => (
  <motion.g transform={`translate(${position}, 10)`}>
    <rect x="-8" y="-4" width="16" height="8" fill={color} rx="2" />
    <rect x="-6" y="-5" width="12" height="2" fill={`${color}dd`} rx="1" />
    <circle cx="-4" cy="4" r="1.5" fill="#1f2937" />
    <circle cx="4" cy="4" r="1.5" fill="#1f2937" />
    <motion.rect
      x="-8"
      y="-2"
      width="4"
      height="1"
      fill="#fff"
      animate={{ opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </motion.g>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-blue-500" />
    </div>
    <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const CTA = () => {
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval1 = setInterval(
      () => setPosition1((prev) => (prev >= 100 ? -10 : prev + 0.5)),
      50
    );
    const interval2 = setInterval(
      () => setPosition2((prev) => (prev >= 100 ? -10 : prev + 0.7)),
      50
    );
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { duration: 2, repeat: Infinity },
    });
  }, [controls]);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 px-6 overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-20 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-0 right-20 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-30"
        />
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Start Your Journey Today
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our growing community of drivers and passengers. Experience
              the future of personal transportation.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={Clock}
            title="24/7 Availability"
            description="Book a professional driver anytime, day or night. We're always here for you."
          />
          <FeatureCard
            icon={Shield}
            title="Verified Drivers"
            description="All our drivers are thoroughly vetted and professionally trained."
          />
          <FeatureCard
            icon={CheckCircle}
            title="Easy Booking"
            description="Simple, fast, and reliable booking process with real-time updates."
          />
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.a
            href="#book-driver"
            className="group flex items-center justify-center gap-3 bg-blue-600 text-white text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl hover:bg-blue-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Car className="w-6 h-6" />
            Book a Driver
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="#sign-up-driver"
            className="group flex items-center justify-center gap-3 bg-white text-blue-600 text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl border-2 border-blue-100 hover:border-blue-200 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <UserPlus className="w-6 h-6" />
            Become a Driver
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Animated Cars */}
        <div className="relative h-24 w-full">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
            <path
              d="M -10 10 H 110"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="0.5"
              strokeDasharray="2 2"
            />
            <MovingCar position={position1} color="#3b82f6" />
            <path
              d={`M -10 10 H ${position1}`}
              fill="none"
              stroke="#93c5fd"
              strokeWidth="0.5"
              strokeDasharray="2 2"
              className="transition-all duration-300"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default CTA;
