import { motion } from 'framer-motion';
import { useState } from 'react';
import video1 from '../assets/videos/banner.MP4';
import video2 from '../assets/videos/IMG_0640.MOV';

const VideoBlock = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = [video1, video2];

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  return (
      <section className="py-24 px-4 bg-gradient-to-b from-white via-lavender/20 to-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pale-pink/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vibrant-pink/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-lavender/30"
          >
            <div className="relative aspect-video bg-black">
              <video
                  key={currentVideo}
                  autoPlay
                  muted
                  playsInline
                  // iOS-тың fullscreen / native UI-ін максимум басып тастауға көмектесетін флагтар
                  controls={false}
                  disablePictureInPicture
                  controlsList="nodownload noplaybackrate noremoteplayback"
                  onEnded={handleVideoEnd}
                  className="w-full h-full object-cover"
              >
                <source
                  src={videos[currentVideo]}
                  type={currentVideo === 0 ? 'video/mp4' : 'video/quicktime'}
                />
                Сіздің браузеріңіз видеоны қолдамайды.
              </video>

              {/* Жұмсақ градиент үсті */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Төмендегі индикатор нүктелер – қаласаң қалдырасың, қаламасаң алып тастай аласың */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {videos.map((_, index) => (
                  <button
                      key={index}
                      onClick={() => setCurrentVideo(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                          currentVideo === index
                              ? 'bg-white w-8'
                              : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Video ${index + 1}`}
                  />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
  );
};

export default VideoBlock;
