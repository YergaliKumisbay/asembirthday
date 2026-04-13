import { useState } from 'react';
import Hero from './components/Hero';
import Message from './components/Message';
import Gallery from './components/Gallery';
import VideoBlock from './components/VideoBlock';
import EventDetails from './components/EventDetails';
import Countdown from './components/Countdown';
import RSVP from './components/RSVP';
import Wishes from './components/Wishes';
import MusicPlayer from './components/MusicPlayer';

function App() {
    const [hasEntered, setHasEntered] = useState(false);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const y = el.getBoundingClientRect().top + window.scrollY - 80; // header биіктігі
        window.scrollTo({ top: y, behavior: 'smooth' });
    };

    const handleEnter = async () => {
        // Музыканы қосу – пользовательдің нақты клигі ішінде
        const audio = document.getElementById('bg-music');
        if (audio) {
            try {
                // @ts-ignore – кейде TS ұрыспас үшін
                await audio.play();
            } catch (err) {
                console.log('Браузер музыка ойнауға әлі де рұқсат бермей тұр:', err);
            }
        }
        setHasEntered(true);
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-pale-pink/40 via-white to-lavender/40 text-gray-900">
            {/* Глобальный decor – жұмсақ шарлар, bokeh эффект :contentReference[oaicite:0]{index=0} */}
            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -left-32 w-96 h-96 rounded-full bg-magenta/15 blur-3xl" />
                <div className="absolute -bottom-40 -right-32 w-[28rem] h-[28rem] rounded-full bg-vibrant-pink/15 blur-3xl" />
                <div className="absolute top-1/3 right-10 w-64 h-64 rounded-full bg-lavender/18 blur-3xl" />
                <div className="absolute bottom-1/3 left-10 w-64 h-64 rounded-full bg-pale-pink/18 blur-3xl" />
            </div>

            {/* ТУҒАН КҮНДІ БАСТАУ ОКНОСЫ */}
            {!hasEntered && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70">
                    <div className="max-w-md w-full mx-4 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/70 shadow-[0_24px_80px_rgba(221,49,99,0.35)] px-6 py-8 text-center">
                        <p className="text-xs uppercase tracking-[0.3em] text-magenta font-semibold mb-2">
                            Birthday Night
                        </p>
                        <h1 className="text-2xl sm:text-3xl font-playfair font-bold text-gray-900 mb-3">
                            Асемнің туған күніне қош келдіңіз 🎂
                        </h1>
                        <button
                            onClick={handleEnter}
                            className="inline-flex items-center justify-center px-8 py-3 rounded-full
                   bg-gradient-to-r from-magenta to-coral text-white text-sm sm:text-base
                   font-semibold shadow-lg shadow-magenta/40 hover:shadow-xl
                   hover:scale-[1.03] active:scale-95 transition-all"
                        >
                            Туған күнді бастау ✨
                        </button>
                    </div>
                </div>
            )}


            {/* Жоғарғы навбар */}
            <header className="fixed top-0 left-0 right-0 z-40">
                <div className="mx-auto max-w-6xl px-4 pt-4">
                    <div className="flex items-center justify-between rounded-3xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_18px_60px_rgba(221,49,99,0.22)] px-4 sm:px-6 py-3">
                        {/* Лого / атау */}
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-magenta to-coral shadow-md shadow-magenta/40">
                                <span className="text-lg font-bold text-white">A</span>
                            </div>
                            <div className="leading-tight">
                                <p className="text-xs uppercase tracking-[0.2em] text-magenta font-semibold">
                                    Birthday Night
                                </p>
                                <p className="text-sm sm:text-base font-semibold text-gray-800">
                                    Асемнің туған күні
                                </p>
                            </div>
                        </div>

                        {/* Навигация */}
                        <nav className="hidden md:flex items-center gap-4 text-xs sm:text-sm font-medium text-gray-700">
                            <button
                                onClick={() => scrollToSection('hero')}
                                className="px-3 py-1 rounded-full hover:bg-magenta/10 hover:text-magenta transition-colors"
                            >
                                Басты
                            </button>
                            <button
                                onClick={() => scrollToSection('gallery')}
                                className="px-3 py-1 rounded-full hover:bg-magenta/10 hover:text-magenta transition-colors"
                            >
                                Естеліктер
                            </button>
                            <button
                                onClick={() => scrollToSection('video')}
                                className="px-3 py-1 rounded-full hover:bg-magenta/10 hover:text-magenta transition-colors"
                            >
                                Видео
                            </button>
                            <button
                                onClick={() => scrollToSection('wishes')}
                                className="px-3 py-1 rounded-full hover:bg-magenta/10 hover:text-magenta transition-colors"
                            >
                                Тілектер
                            </button>
                            <button
                                onClick={() => scrollToSection('details')}
                                className="px-3 py-1 rounded-full hover:bg-magenta/10 hover:text-magenta transition-colors"
                            >
                                Мәліметтер
                            </button>
                            <button
                                onClick={() => scrollToSection('rsvp')}
                                className="px-4 py-1.5 rounded-full bg-gradient-to-r from-magenta to-coral text-white shadow-md shadow-magenta/40 hover:shadow-lg transition-shadow"
                            >
                                Келу/Келмеу
                            </button>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Музыка плеер – premium floating */}
            <MusicPlayer />

            {/* Контент – header биіктігін ескеріп, жоғарыдан орын қалдырамыз */}
            <main className="pt-20">
                {/* Hero – full screen, сондықтан бөлек id */}
                <section id="hero">
                    <Hero />
                </section>

                <section id="message">
                    <Message />
                </section>

                <section id="countdown">
                    <Countdown />
                </section>

                <section id="gallery">
                    <Gallery />
                </section>

                <section id="video">
                    <VideoBlock />
                </section>

                <section id="wishes">
                    <Wishes />
                </section>

                <section id="details">
                    <EventDetails />
                </section>

                <section id="rsvp">
                    <RSVP />
                </section>
            </main>

            {/* Footer */}
            <footer className="relative mt-8 border-t border-white/60 bg-white/70 backdrop-blur-xl">
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -top-12 left-1/4 w-40 h-40 rounded-full bg-magenta/15 blur-3xl" />
                    <div className="absolute -bottom-16 right-1/4 w-52 h-52 rounded-full bg-vibrant-pink/15 blur-3xl" />
                </div>

                <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-2 px-4 py-8 text-center">
                    <p className="text-xl sm:text-2xl font-playfair text-transparent bg-clip-text bg-gradient-to-r from-magenta via-coral to-vibrant-pink">
                        Made with love for Asem
                    </p>
                    <p className="text-sm sm:text-base text-gray-600">
                        Бұл кеш – сен үшін. Әр сәті есте қаларлық болсын ✨
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default App;
