import { useEffect, useState } from 'react';
import DecryptedText from '../components/DecryptedText';
import { motion } from 'motion/react';

const LoadingScreen = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [displayText, setDisplayText] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading sequence
    const timings = [
      { delay: 500, action: () => setDisplayText(true) },
      { delay: 1500, action: () => setShowProgress(true) },
    ];

    timings.forEach(({ delay, action }) => {
      setTimeout(action, delay);
    });

    // Simulate progress bar
    if (showProgress) {
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => onLoadComplete(), 500);
            return 100;
          }
          return prev + Math.random() * 30;
        });
      }, 200);

      return () => clearInterval(progressInterval);
    }
  }, [showProgress, onLoadComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 w-screen h-screen bg-black flex items-center justify-center z-50 overflow-hidden"
      style={{
        background: 'radial-gradient(circle at center, #0a0a0a 0%, #000000 100%)'
      }}
    >
      <style>{`
        @keyframes terminalCursor {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        
        .terminal-cursor {
          animation: terminalCursor 1s infinite;
          display: inline-block;
        }
        
        .terminal-line {
          font-family: 'Courier New', monospace;
          line-height: 1.6;
          margin: 4px 0;
        }
        
        .terminal-prompt {
          color: #FCD34D;
          font-weight: bold;
        }
        
        .terminal-text {
          color: #00FF00;
        }
        
        .terminal-encrypted {
          color: #888;
          opacity: 0.7;
        }
      `}</style>

      <div className="relative w-full max-w-2xl mx-auto px-8">
        {/* Terminal Window */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="border border-[#FCD34D]/30 rounded-lg overflow-hidden shadow-2xl"
          style={{
            background: 'rgba(5, 5, 5, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 40px rgba(252, 211, 77, 0.15)'
          }}
        >
          {/* Terminal Header */}
          <div className="bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a] border-b border-[#FCD34D]/20 px-6 py-3 flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs text-gray-400 ml-2">salamander-boot-loader</span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 min-h-96 flex flex-col justify-between">
            {/* Status Messages */}
            <div className="space-y-4">
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-text ml-2">./salamander-init.sh</span>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: displayText ? 1 : 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-3 mt-6"
              >
                <div className="terminal-line">
                  <span className="terminal-text">
                    <DecryptedText
                      text="[✓] Initializing Salamander Tech Hub"
                      sequential
                      speed={40}
                      revealDirection="start"
                      useOriginalCharsOnly
                      className="terminal-text"
                      encryptedClassName="terminal-encrypted"
                    />
                  </span>
                </div>

                <div className="terminal-line">
                  <span className="terminal-text">
                    <DecryptedText
                      text="[✓] Loading core systems"
                      sequential
                      speed={40}
                      revealDirection="start"
                      useOriginalCharsOnly
                      className="terminal-text"
                      encryptedClassName="terminal-encrypted"
                    />
                  </span>
                </div>

                <div className="terminal-line">
                  <span className="terminal-text">
                    <DecryptedText
                      text="[✓] Connecting to open-source ecosystem"
                      sequential
                      speed={40}
                      revealDirection="start"
                      useOriginalCharsOnly
                      className="terminal-text"
                      encryptedClassName="terminal-encrypted"
                    />
                  </span>
                </div>

                <div className="terminal-line">
                  <span className="terminal-text">
                    <DecryptedText
                      text="[→] Decrypting interface assets"
                      sequential
                      speed={30}
                      revealDirection="start"
                      useOriginalCharsOnly
                      className="terminal-text"
                      encryptedClassName="terminal-encrypted"
                    />
                    <span className="terminal-cursor">_</span>
                  </span>
                </div>
              </motion.div>

              {/* Progress Bar */}
              {showProgress && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 pt-4 border-t border-[#FCD34D]/20"
                >
                  <div className="terminal-line text-xs text-gray-400 mb-2">
                    Loading: {Math.min(Math.round(progress), 100)}%
                  </div>
                  <div className="w-full bg-gray-900 rounded-sm h-2 overflow-hidden border border-[#FCD34D]/20">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#FCD34D] to-[#F4D03F]"
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(progress, 100)}%` }}
                      transition={{ duration: 0.3 }}
                      style={{
                        boxShadow: '0 0 10px rgba(252, 211, 77, 0.6)'
                      }}
                    />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Footer Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: progress >= 100 ? 1 : 0 }}
              transition={{ delay: 0.5 }}
              className="terminal-line text-center text-sm"
            >
              <span className="terminal-text">
                <DecryptedText
                  text="Ready to evolve. Press any key to continue..."
                  sequential
                  speed={50}
                  revealDirection="start"
                  useOriginalCharsOnly
                  className="terminal-text"
                  encryptedClassName="terminal-encrypted"
                />
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Ambient Effects */}
        <motion.div
          animate={{
            boxShadow: [
              '0 0 40px rgba(252, 211, 77, 0.2)',
              '0 0 60px rgba(252, 211, 77, 0.4)',
              '0 0 40px rgba(252, 211, 77, 0.2)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 rounded-lg pointer-events-none"
        />
      </div>

      {/* Scanline Effect */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.15),
            rgba(0, 0, 0, 0.15) 1px,
            transparent 1px,
            transparent 2px
          )`,
          animation: 'scanlines 8s linear infinite'
        }}
      />

      <style>{`
        @keyframes scanlines {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(10px);
          }
        }
      `}</style>
    </motion.div>
  );
};

export default LoadingScreen;
