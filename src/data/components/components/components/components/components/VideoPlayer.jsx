import React, { useState } from 'react';

// Video player placeholder component
// Props: title, videoUrl, thumbnail
const VideoPlayer = ({ title, videoUrl = '', thumbnail = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Placeholder for video player - will be replaced with real video player later
  const handlePlay = () => {
    setIsPlaying(true);
    // In a real implementation, this would load and play the video
  };

  return (
    <div className="w-full bg-gray-900 rounded-xl overflow-hidden shadow-lg">
      {/* Video Area */}
      <div className="relative aspect-video bg-gray-800 flex items-center justify-center">
        {!isPlaying ? (
          // Thumbnail / placeholder
          <div className="text-center text-white p-4">
            {thumbnail ? (
              <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
            ) : (
              <>
                <div className="text-6xl mb-4">🎬</div>
                <p className="text-lg font-bold">{title}</p>
                <button 
                  onClick={handlePlay}
                  className="mt-4 btn-primary text-sm"
                >
                  ▶ Watch Video
                </button>
              </>
            )}
          </div>
        ) : (
          // Video player placeholder
          <div className="text-center text-white">
            <div className="text-6xl mb-4">▶️</div>
            <p className="text-lg">Video is loading...</p>
            <p className="text-sm text-gray-400 mt-2">(Video will play here)</p>
            <button 
              onClick={() => setIsPlaying(false)}
              className="mt-4 btn-secondary text-sm"
            >
              ⏹ Stop
            </button>
          </div>
        )}
      </div>
      
      {/* Video Info */}
      <div className="p-4 bg-white">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-1 text-sm">
          Watch this lesson to learn about {title.toLowerCase()}
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;
