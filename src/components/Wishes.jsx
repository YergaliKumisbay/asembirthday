import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Wishes = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const wishes = [
    {
      id: 1,
      title: 'Денсаулық',
      wish: 'Денсаулығың мықты болсын! Әр күнің қуат пен сергектікке толы болсын. ',
      color: 'from-magenta to-magenta-dark',
    },
    {
      id: 2,
      title: 'Бақыт',
      wish: 'Бақыттың шексіз болсын! Әр сәтте қуаныш пен жылу сезініп, көңілің әрдайым көтеріңкі болсын.',
      color: 'from-vibrant-pink to-magenta',
    },
    {
      id: 3,
      title: 'Махаббат',
      wish: 'Махаббат пен жылу сені қорғасын. Жақындарың мен достарың әрдайым сенімен бірге болсын.',
      color: 'from-coral to-vibrant-pink',
    },
    {
      id: 4,
      title: 'Жетістік',
      wish: 'Армандарың орындалып, барлық мақсаттарыңа жете бер. Өмір жолың жаңа биіктіктер мен жеңістерге толы болсын.',
      color: 'from-lavender to-pale-pink',
    },
    {
      id: 5,
      title: 'Тыныштық',
      wish: 'Көңілің тыныштыққа, жүрегің жылулыққа толы болсын. Әр күнің тыныштық пен бақытқа толы болсын.',
      color: 'from-pale-pink to-lavender',
    },
    {
      id: 6,
      title: 'Еркіндік',
      wish: 'Ойың еркін, сезімің таза, жүрісің нық болсын! Әр қадамыңда еркіндік болсын.',
      color: 'from-magenta-light to-coral',
    },
    {
      id: 7,
      title: 'Табыс',
      wish: 'Жұмысыңда, оқуыңда, өмірде табысқа жет!Әр ісің сәтті болып, армандарыңа жақындай түс.',
      color: 'from-vibrant-pink to-pale-pink',
    },
    {
      id: 8,
      title: 'Жаңалық',
      wish: 'Әр күнің жаңа тәжірибелер мен жарқын естеліктерге толсын. Өмірің қызыққа, шабытқа толы болсын.',
      color: 'from-lavender to-vibrant-pink',
    },
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleClose = () => {
    setSelectedCard(null);
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-lavender/20 via-white to-pale-pink/20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-vibrant-pink/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-lavender/15 rounded-full blur-3xl"></div>
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
            Тілектер
          </h2>
          <p className="text-xl text-gray-700 font-light">Ашып, тілектерді оқыңыз</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {wishes.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => handleCardClick(card)}
              className="relative cursor-pointer group"
            >
              <div className={`bg-gradient-to-br ${card.color} rounded-2xl p-6 h-48 md:h-56 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center border-2 border-white/50`}>
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-white mb-2 text-center">
                  {card.title}
                </h3>
                <div className="absolute bottom-4 text-white/90 text-sm font-light">
                  Ашу үшін басыңыз
                </div>
              </div>
              
              {/* Hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl -z-10`}></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for wish details */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={`bg-gradient-to-br ${selectedCard.color} rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-2xl border-4 border-white/50 relative`}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center">
                <h3 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
                  {selectedCard.title}
                </h3>
                <p className="text-xl md:text-2xl text-white/95 font-light leading-relaxed">
                  {selectedCard.wish}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Wishes;
