import { motion } from "framer-motion";
import { Star, Quote, CheckCircle } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Business Executive",
    quote:
      "RideMate has completely changed how I travel. The drivers are always professional and courteous. It's perfect for my business trips.",
    image: "https://via.placeholder.com/150/0d6efd/FFFFFF?text=John",
    rating: 5,
    location: "New York, USA",
    verified: true,
  },
  {
    id: 2,
    name: "Emily Johnson",
    role: "Professional Driver",
    quote:
      "As a driver on RideMate, I've found consistent work and met amazing clients. The platform is intuitive and the support is outstanding.",
    image: "https://via.placeholder.com/150/6610f2/FFFFFF?text=Emily",
    rating: 5,
    location: "London, UK",
    verified: true,
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Event Planner",
    quote:
      "For corporate events and VIP clients, RideMate is my go-to choice. Their service quality and reliability are unmatched in the industry.",
    image: "https://via.placeholder.com/150/ffc107/000000?text=Michael",
    rating: 5,
    location: "Los Angeles, USA",
    verified: true,
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      className="relative group"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative z-10">
        {/* Background Accent */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl transform -rotate-1 -z-10" />

        {/* Quote Icon */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <Quote className="w-4 h-4 text-white" />
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <motion.div
              className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            {testimonial.verified && (
              <motion.div
                className="absolute -right-1 -bottom-1"
                whileHover={{ scale: 1.2 }}
              >
                <CheckCircle className="w-6 h-6 text-green-500 bg-white rounded-full" />
              </motion.div>
            )}
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-800">
              {testimonial.name}
            </h4>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
            <p className="text-xs text-gray-400">{testimonial.location}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="relative">
          <p className="text-gray-600 italic leading-relaxed">
            "{testimonial.quote}"
          </p>
        </blockquote>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Voices of Trust
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover why thousands of people choose RideMate for their
            transportation needs
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#join"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            Join Our Community
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
