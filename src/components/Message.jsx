import { motion } from 'framer-motion';

const Message = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-pale-pink/30 via-white to-lavender/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-lavender/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-pale-pink/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-playfair text-transparent bg-clip-text bg-gradient-to-r from-magenta via-coral to-vibrant-pink mb-8">
              Арнайы саған
            </h2>
          </motion.div>

          <div className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-lavender/30"
            >
              <p className="text-xl md:text-2xl font-light">
                Бұл сайт арнайы саған арналып жасалды...
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-pale-pink/50 to-lavender/50 p-10 rounded-3xl shadow-xl border-2 border-vibrant-pink/30"
            >
              <p className="font-playfair text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-magenta to-coral font-bold mb-4">
                Туған күнің құтты болсын, жаным
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-lavender/30"
            >
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Бұл күн сен үшін ерекше болсын және көптеген қуаныштар мен сәттерге толы болсын
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Message;
