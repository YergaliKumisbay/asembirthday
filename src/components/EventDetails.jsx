import { motion } from 'framer-motion';
import { Calendar, Clock, Car, Shirt, AlertCircle } from 'lucide-react';

const EventDetails = () => {
  const eventDetails = {
    date: '2026-04-14',
    pickupTime: '23:00',
    dressCode: 'Әдемі киіну, мейрамханаға арналған стиль',
    note: 'Мен сені 23:00-де алып кететін боламын. Кешікпеуіңізді сұраймын',
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-pale-pink/30 via-white to-lavender/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-lavender/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-vibrant-pink/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-playfair text-transparent bg-clip-text bg-gradient-to-r from-magenta via-coral to-vibrant-pink mb-6">
            Мереке мәліметтері
          </h2>
          <p className="text-xl text-gray-600 font-light">Саған арналған кешке қош келдіңіз</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-lavender/30 hover:shadow-2xl transition-shadow"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-magenta to-coral p-3 rounded-xl mr-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Күні</h3>
            </div>
            <p className="text-2xl font-playfair text-magenta font-bold">
             14 сәуір. 2026 
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-lavender/30 hover:shadow-2xl transition-shadow"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-coral to-vibrant-pink p-3 rounded-xl mr-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Алып кету уақыты</h3>
            </div>
            <p className="text-2xl font-playfair text-magenta font-bold">{eventDetails.pickupTime}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-lavender/30 hover:shadow-2xl transition-shadow"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-lavender to-pale-pink p-3 rounded-xl mr-4">
                <Shirt className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Dress Code</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">{eventDetails.dressCode}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-pale-pink/50 to-lavender/50 p-8 rounded-2xl shadow-xl border-2 border-vibrant-pink/30 hover:shadow-2xl transition-shadow"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-magenta to-coral p-3 rounded-xl mr-4">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Маңызды ақпарат</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">{eventDetails.note}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-pale-pink/50 to-lavender/50 p-6 rounded-2xl border border-vibrant-pink/20 flex items-start gap-4"
        >
          <AlertCircle className="w-6 h-6 text-magenta flex-shrink-0 mt-1" />
          <p className="text-gray-700 text-lg">
            <span className="font-semibold">Ескерту:</span> Мекен жай мұнда көрсетілмейді. Мен сені үйіңнен алып кетемін, сондықтан дайын болып, кешікпеуіңді сұраймын
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
