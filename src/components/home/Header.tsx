import { motion } from 'framer-motion';
import { Car, UserPlus } from 'lucide-react';

const Header = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 -top-32 -left-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute w-64 h-64 -bottom-32 -right-32 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute w-64 h-64 top-1/2 left-1/2 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-0 flex flex-col items-center justify-center min-h-screen">
        {/* Logo and Brand */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-0"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-0 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              RideMate
            </span>
          </h1>
          <div className="h-1 w-24 bg-white mx-auto rounded-full mb-6" />
        </motion.div>

        {/* Tagline */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl font-bold mb-0 text-center max-w-3xl"
        >
          Your Professional Driver Service
          <br />
          <span className="text-blue-200">Anytime, Anywhere</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg pt-4 md:text-xl text-blue-100 mb-0 text-center max-w-2xl"
        >
          Experience hassle-free travel with our vetted professional drivers.
          Perfect for business trips, special occasions, or whenever you need a reliable driver.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col pt-6 md:flex-row gap-6 w-full max-w-xl justify-center"
        >
          <a
            href="#find-driver"
            className="group relative flex items-center justify-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1"
          >
            <Car className="w-6 h-6" />
            Find a Driver
          </a>
          <a
            href="#become-driver"
            className="group flex items-center justify-center gap-3 bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-blue-600 hover:shadow-xl hover:-translate-y-1"
          >
            <UserPlus className="w-6 h-6" />
            Become a Driver
          </a>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 w-full max-w-4xl"
        >
          {[
            { title: '24/7 Service', desc: 'Available round the clock' },
            { title: 'Verified Drivers', desc: 'Thoroughly vetted professionals' },
            { title: 'Instant Booking', desc: 'Quick and easy process' },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-blue-100">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Header;