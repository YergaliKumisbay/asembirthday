import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/** 2026 жылғы 15 сәуір 00:00 — шолғыштың жергілікті уақыты бойынша (Date айы: 3 = сәуір) */
const EVENT_END_MS = new Date(2026, 3, 15, 0, 0, 0, 0).getTime();

function calcTimeLeft(targetMs) {
  const distance = targetMs - Date.now();
  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(() => calcTimeLeft(EVENT_END_MS));

  useEffect(() => {
    const tick = () => setTimeLeft(calcTimeLeft(EVENT_END_MS));
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'Күн', value: timeLeft.days },
    { label: 'Сағат', value: timeLeft.hours },
    { label: 'Минут', value: timeLeft.minutes },
    { label: 'Секунд', value: timeLeft.seconds },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-pale-pink/40 via-lavender/30 to-pale-pink/40 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-vibrant-pink/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-coral/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-playfair text-transparent bg-clip-text bg-gradient-to-r from-magenta via-coral to-vibrant-pink mb-6">
            Мерекеге қалған уақыт
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 text-center shadow-2xl border border-lavender/30 hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <motion.div
                  key={unit.value}
                  initial={{ scale: 1.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-magenta to-coral bg-clip-text text-transparent mb-3"
                >
                  {String(unit.value).padStart(2, '0')}
                </motion.div>
                <div className="text-base md:text-lg text-gray-600 font-semibold uppercase tracking-wider">
                  {unit.label}
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-magenta/20 to-coral/20 rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
