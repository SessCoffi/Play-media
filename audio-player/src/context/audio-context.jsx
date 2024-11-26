/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useAudioPlayer } from "../hooks/use-audio-player";

//Creation du contexte dans le conteneur AudioContext
const AudioContext = createContext();

// Exportation de la fonction useAudioContext pour l'utiliser dans les composants
export const useAudioContext = () => useContext(AudioContext);

// Creation du composant (le livreur) AudioProvider
export const AudioProvider = ({ children }) => {
  const audioPlayer = useAudioPlayer();

  return (
    <AudioContext.Provider value={audioPlayer}>
      {children}
    </AudioContext.Provider>
  );
};
