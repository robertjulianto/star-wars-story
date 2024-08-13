import background from "../assets/background.png"
import audio from "../assets/audio.mp3"
import { useContext, useEffect } from "react";
import { AudioContext } from "../contexts/audio_context";

export const PageLayout = (props: {isLoading: boolean, children: any}) => {
    const { isLoading, children } = props;
    const { isAmbizePlay, setIsAmbizePlay } = useContext(AudioContext);
    var backSound: HTMLAudioElement | null;
    
    useEffect(() => {
        playAudio();
    }, []);

    const playAudio = () => {
        if (backSound == null){
            backSound = new Audio(audio);
            backSound.onended = () => {
                setIsAmbizePlay(false);
            };
            backSound.loop = true;
        }
        if(!isAmbizePlay){
            backSound.play().catch(() => setIsAmbizePlay(false));
            setIsAmbizePlay(true);
        }
    }

    return (
        <div style={{backgroundImage: `url(${background})`}} className="bg-red flex gap-x-3 justify-center min-w-full mx-auto min-h-screen items-center">
            { isLoading ? <p className="text-yellow-300 text-2xl">Loading...</p> : children }
        </div>
    )
}