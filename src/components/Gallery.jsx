import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

import img1 from '../assets/images/IMG_0428.JPG';
import img2 from '../assets/images/IMG_0708.JPG';
import img3 from '../assets/images/IMG_0773.JPG';
import img4 from '../assets/images/IMG_0883.JPG';
import img5 from '../assets/images/IMG_1481.JPG';

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5];

  return (
      <section className="py-20 px-4 bg-gradient-to-b from-white via-pale-pink/10 to-white relative overflow-hidden">

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Title */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-playfair text-transparent bg-clip-text bg-gradient-to-r from-magenta via-coral to-vibrant-pink">
              Галерея
            </h2>
          </motion.div>

          {/* Swiper */}
          <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1.1}
              centeredSlides
              navigation
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 1.4, spaceBetween: 24 },
                768: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
              className="pb-12"
          >
            {images.map((src, i) => (
                <SwiperSlide key={i}>
                  <motion.div
                      initial={{ opacity: 0, scale: 0.94 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.08 }}
                      className="flex items-center justify-center h-[400px] md:h-[450px]"
                  >
                    {/* Full image view without cropping */}
                    <div className="bg-white/80 backdrop-blur-xl shadow-lg rounded-3xl border border-white/60 p-4 w-full h-full flex items-center justify-center">
                      <img
                          src={src}
                          className="w-full h-full object-contain rounded-xl"
                      />
                    </div>
                  </motion.div>
                </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section>
  );
};

export default Gallery;
