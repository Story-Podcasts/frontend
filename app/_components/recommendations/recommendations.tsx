"use client"

import { useDataStore } from "@/app/_context/data";
import { useEffect, useState } from "react";

async function getAudioDurationFromUrl(url: string) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const blob = await response.blob();
  
      const blobUrl = URL.createObjectURL(blob);
  
      const audio = new Audio();
      audio.src = blobUrl;
  
      return new Promise((resolve, reject) => {
        audio.onloadedmetadata = () => {
          const duration = audio.duration;
  
          URL.revokeObjectURL(blobUrl);
  
          resolve(duration);
        };
  
        audio.onerror = () => {
          URL.revokeObjectURL(blobUrl);
  
          reject(new Error('Failed to load audio metadata'));
        };
      });
    } catch (error) {
      console.error('Error fetching audio file:', error);
      throw error;
    }
  }

const PodcastTile = ({ image, title, creator, audio, setIndex }: {image: string, title: string, creator: string, audio: string, setIndex: any}) => {
    const [duration, setDuration] = useState<any>(0)
    useEffect(() => {
        if (audio.length > 0) {
            (async () => {
                const dur = await getAudioDurationFromUrl(audio)
                console.log(dur)
                setDuration(dur)
            })()
        }
    }, [audio])
    function formatDuration(seconds: number) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
    
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
    return (
        <div className="flex items-center gap-2 rounded-lg shadow-lg p-4 mb-4 w-full max-w-xl backdrop-blur backdrop-saturate-200 shadow-lg bg-white/50 cursor-pointer" onClick={setIndex}>
            {duration > 0 && (
                <>
                    <div className="w-36 h-36 flex items-center">
                        <img src={image} alt="Podcast Art" className="rounded-lg mr-4" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">{title}</h2>
                        <p className="text-sm text-black/70">{creator}</p>
                        <p className="text-sm text-black/70">{formatDuration(duration)}</p>
                    </div>
                </>

            )}
        </div>
    );
}

const PodcastList = ({setIndex}: {setIndex: any}) => {
    const {podcastsData} = useDataStore()

    return (
        <div className="flex flex-col items-center backdrop-blur backdrop-saturate-200 shadow-2xl p-6 h-[40rem] overflow-y-scroll">
            {podcastsData.map((podcast, index) => (
                <PodcastTile
                    setIndex={() => setIndex(index)}
                    key={index}
                    image={podcast.cover}
                    title={podcast.name}
                    creator={podcast.owner}
                    audio={podcast.audio}
                />
            ))}
        </div>
    );
}


const Recommendations = ({setIndex}: { setIndex: any}) => {
    return (
        <div className="w-1/3 pr-6 pb-6">
            <PodcastList setIndex={setIndex}/>
        </div>
    )
}

export default Recommendations