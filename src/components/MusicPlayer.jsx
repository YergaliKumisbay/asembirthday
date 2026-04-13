import { useEffect, useRef, useState } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';
import music1 from '../assets/musics/happy-birthday-to-you-piano-version-13976.mp3';
import music2 from '../assets/musics/s-dnyom-rozhdenya-masha-i-medved.mp3';

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const tracks = [music1, music2];

  // Бастапқы настройка + play/pause listener
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.muted = isMuted;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Volume өзгерсе
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Mute өзгерсе
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // 👉 currentTrack ауысқанда – ЖАҢА ТРЕКТІ ӘРҚАШАН ойнаймыз
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // src JSX ішінде tracks[currentTrack], сондықтан тек play() жеткілікті
    audio
        .play()
        .catch((err) => {
          console.log('Келесі тректі автоматты қосу кезінде қате:', err);
        });
  }, [currentTrack]);

  const handleManualPlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio
        .play()
        .catch((err) => {
          console.log('Қолмен play шақырғанда қате шықты:', err);
        });
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const handleEnded = () => {
    // Ағымдағы трек біткенде, келесіге ауысамыз
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
  };

  return (
      <div className="fixed bottom-6 right-6 z-50">
        <audio
            id="bg-music"
            ref={audioRef}
            src={tracks[currentTrack]}
            playsInline
            onEnded={handleEnded}
        />

        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-lavender/30 p-4 flex items-center gap-4">
          <button
              onClick={handleManualPlay}
              className="bg-gradient-to-br from-magenta to-coral text-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <Music className="w-5 h-5" />
          </button>

          <button
              onClick={toggleMute}
              className="text-gray-600 hover:text-magenta transition-colors"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>

          <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-20 h-1 bg-lavender/30 rounded-lg appearance-none cursor-pointer accent-magenta"
          />

          <span className="text-xs text-gray-500">
          {currentTrack + 1}/{tracks.length}
        </span>
        </div>
      </div>
  );
};

export default MusicPlayer;
