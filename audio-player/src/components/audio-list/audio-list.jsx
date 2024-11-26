import { useAudioContext } from "../../context/audio-context";
import styles from "./audio-list.module.css";

const tracks = [
  {
    id: 1,
    title: "Poster new song",
    src: "/audio/song-1.mp3",
    imgSrc: "/image/covers/song-1.jpg",
  },
  {
    id: 2,
    title: "Agosto Lilis",
    src: "/audio/song-2.mp3",
    imgSrc: "/image/covers/song-2.jpg",
  },
  {
    id: 3,
    title: "Music Festival",
    src: "/audio/song-3.mp3",
    imgSrc: "/image/covers/song-3.jpg",
  },
  {
    id: 4,
    title: "New Collection",
    src: "/audio/song-4.mp3",
    imgSrc: "/image/covers/song-4.jpg",
  },
  {
    id: 5,
    title: "Anzac - Forever in our Thoughts",
    src: "/audio/song-5.mp3",
    imgSrc: "/image/covers/song-5.jpg",
  },
];
const AudioList = () => {
  const { play, pause, isPlaying, currentTrack, setCurrentTrack } =
    useAudioContext();

  return (
    <div className={styles.container}>
      {tracks.map((track) => (
        <div
          key={track.id}
          className={`${styles.song} ${
            currentTrack === track.src ? styles.songIsPlaying : ""
          }`}
        >
          <img src={track.imgSrc} alt="Song cover" width="30px" height="30px" />
          {currentTrack === track.src ? (
            <button
              className={styles.buttonPrimary}
              onClick={isPlaying ? pause : play}
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ width: "15px", height: "15px" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ width: "15px", height: "15px" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ) : (
            <button
              className={styles.buttonPrimary}
              onClick={() => setCurrentTrack(track.src)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ width: "15px", height: "15px" }}
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
          <div
            className={`${styles.tracksTitle} ${
              currentTrack === track.src ? styles.titleIsPlaying : ""
            }`}
            onClick={() => setCurrentTrack(track.src)}
          >
            {track.title}
          </div>
          {currentTrack === track.src && (
            <img
              src={`./image/gifs/${
                isPlaying ? "play-song.gif" : "mute-song.gif"
              }`}
              alt="Sound animate icon"
              width={"20px"}
              height={"20px"}
              className={styles.soundIcon}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default AudioList;
