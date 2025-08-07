'use client';

import { useEffect, useState, useMemo } from 'react';

export default function VideoPreloader() {
  const [preloadedVideos, setPreloadedVideos] = useState(new Set());

  const videoSources = useMemo(() => [
    '/solar-hero-video2.mp4', // 8.9MB - primary video
    '/solar-hero-video2.mp4', // 7.1MB - fallback
    '/solar-hero-video3.mp4', // 2.9MB - smallest
    '/solar-hero-video4.mp4', // 12MB - largest
  ], []);

  useEffect(() => {
    // Preload video metadata for faster loading
    const preloadVideo = (src) => {
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.muted = true;
      video.playsInline = true;
      
      video.onloadedmetadata = () => {
        setPreloadedVideos(prev => new Set([...prev, src]));
        console.log(`Preloaded metadata for: ${src}`);
      };
      
      video.onerror = () => {
        console.log(`Failed to preload: ${src}`);
      };
      
      video.src = src;
    };

    // Start preloading the smallest video first
    if (videoSources.length > 0) {
      preloadVideo(videoSources[0]);
    }

    // Preload additional videos in background
    const preloadTimer = setTimeout(() => {
      videoSources.slice(1).forEach(src => {
        preloadVideo(src);
      });
    }, 1000);

    return () => {
      clearTimeout(preloadTimer);
    };
  }, [videoSources]);

  return null; // This component doesn't render anything
} 