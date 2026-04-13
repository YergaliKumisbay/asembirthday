import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import video1 from "../assets/videos/banner.MP4";
import video2 from "../assets/videos/IMG_0640.MOV";

const Hero = () => {
    const [displayText, setDisplayText] = useState("");
    const [selectedVideo, setSelectedVideo] = useState(video1);
    const [videoHeight, setVideoHeight] = useState("auto");

    const fullText = "Happy Birthday, Жаным";
    const videoRef = useRef(null);

    // Random video
    useEffect(() => {
        const videos = [video1, video2];
        setSelectedVideo(videos[Math.floor(Math.random() * videos.length)]);
    }, []);

    // Typing effect
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < fullText.length) {
                setDisplayText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
            }
        }, 70);

        return () => clearInterval(interval);
    }, []);

    // HERO БИІКТІГІН ВИДЕО ӨЛШЕМІНЕ ТЕҢЕУ
    const updateVideoHeight = () => {
        if (videoRef.current) {
            const height = videoRef.current.videoHeight;
            const width = videoRef.current.videoWidth;
            const containerWidth = window.innerWidth;

            // Пропорцияны сақтау
            const calculatedHeight = (height / width) * containerWidth;

            setVideoHeight(calculatedHeight);
        }
    };

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.addEventListener("loadedmetadata", updateVideoHeight);
        }

        window.addEventListener("resize", updateVideoHeight);

        return () => {
            window.removeEventListener("resize", updateVideoHeight);
            if (videoRef.current) {
                videoRef.current.removeEventListener("loadedmetadata", updateVideoHeight);
            }
        };
    }, []);

    return (
        <section
            className="relative w-full overflow-hidden bg-black"
            style={{ height: videoHeight }}   // 🎉 ЕҢ МАҢЫЗДЫ ОРЫН
        >
            {/* VIDEO */}
            <div className="absolute inset-0 flex items-center justify-center">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full"
                    style={{
                        objectFit: "contain",
                        backgroundColor: "black",
                    }}
                >
                    <source
                        src={selectedVideo}
                        type={selectedVideo === video1 ? 'video/mp4' : 'video/quicktime'}
                    />
                </video>
            </div>

            {/* TEXT CARD */}
            <div className="absolute inset-x-0 bottom-20 flex justify-center z-20 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="
      max-w-3xl w-full
      text-center
      px-4 sm:px-8 py-4
      bg-transparent
    "
                >
                    {/* TITLE */}
                    <motion.h1
                        className="
        text-4xl sm:text-6xl font-playfair font-bold
        text-white drop-shadow-[0_0_20px_rgba(0,0,0,0.7)]
      "
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                    >
                        {displayText}
                        {displayText.length < fullText.length && (
                            <motion.span
                                className="inline-block ml-1"
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.7, repeat: Infinity }}
                            >
                                |
                            </motion.span>
                        )}
                    </motion.h1>

                    {/* SUBTEXT */}
                    <motion.p
                        className="
        text-white/95 text-lg sm:text-2xl mt-3 font-light
        drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]
      "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        Сенің ерекше күніңе қош келдің ✨
                    </motion.p>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
