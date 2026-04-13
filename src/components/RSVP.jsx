import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, HelpCircle, Heart } from 'lucide-react';

const RSVP = () => {
  const [response, setResponse] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const savedResponse = localStorage.getItem('birthdayRSVP');
    if (savedResponse) {
      setResponse(savedResponse);
      setSubmitted(true);
    }
  }, []);

  const handleResponse = (value) => {
    setResponse(value);
    localStorage.setItem('birthdayRSVP', value);
    setSubmitted(true);
  };

  const getResponseIcon = () => {
    switch (response) {
      case 'yes':
        return <CheckCircle className="w-20 h-20 text-green-500" />;
      case 'maybe':
        return <HelpCircle className="w-20 h-20 text-yellow-500" />;
      case 'no':
        return <XCircle className="w-20 h-20 text-red-500" />;
      default:
        return null;
    }
  };

  const getResponseText = () => {
    switch (response) {
      case 'yes':
        return 'Керемет! Сені күтемін';
      case 'maybe':
        return 'Давай';
      case 'no':
        return 'ММ, бопты';
      default:
        return '';
    }
  };

  const getResponseColor = () => {
    switch (response) {
      case 'yes':
        return 'from-green-400 to-emerald-500';
      case 'maybe':
        return 'from-yellow-400 to-amber-500';
      case 'no':
        return 'from-red-400 to-rose-500';
      default:
        return 'from-magenta to-coral';
    }
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-lavender/20 via-white to-pale-pink/20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-vibrant-pink/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <Heart className="w-16 h-16 text-magenta mx-auto mb-4" />
            <h2 className="text-5xl md:text-6xl font-playfair text-transparent bg-clip-text bg-gradient-to-r from-magenta via-coral to-vibrant-pink mb-6">
              Келу/Келмеу
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Менімен бірге осы кеште бірге болғың келе ме? Кешке келесіз бе?
            </p>
          </motion.div>

          {!submitted ? (
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleResponse('yes')}
                className="group bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-5 rounded-2xl text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <CheckCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Келемін
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleResponse('maybe')}
                className="group bg-gradient-to-br from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white px-10 py-5 rounded-2xl text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <HelpCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Әлі білмеймін
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleResponse('no')}
                className="group bg-gradient-to-br from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white px-10 py-5 rounded-2xl text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <XCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Келе алмаймын
              </motion.button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-br ${getResponseColor()} rounded-3xl p-12 shadow-2xl border-4 border-white/50`}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                >
                  {getResponseIcon()}
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-2xl md:text-3xl text-white font-bold mt-6 text-center"
                >
                  {getResponseText()}
                </motion.p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSubmitted(false);
                    setResponse(null);
                    localStorage.removeItem('birthdayRSVP');
                  }}
                  className="mt-8 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-all backdrop-blur-sm"
                >
                  Жауапты өзгерту
                </motion.button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;
