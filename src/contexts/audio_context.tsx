import { createContext, useState } from "react";

export const AudioContext = createContext<{
    isAmbizePlay: boolean,
    setIsAmbizePlay: React.Dispatch<React.SetStateAction<boolean>>
}>({
    isAmbizePlay: false,
    setIsAmbizePlay: () => {}
});

const AudioContextProvider = ({ children }: any) => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);

    return (
        <AudioContext.Provider value={{ isAmbizePlay: isAudioPlaying, setIsAmbizePlay: setIsAudioPlaying }}>
            {children}
        </AudioContext.Provider>
    )
}

export default AudioContextProvider;