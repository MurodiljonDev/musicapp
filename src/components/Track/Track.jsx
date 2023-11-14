import { PlayArrow, Pause } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useContext } from 'react';
import { AudioContext } from '../../context/AudioContext';
import secondsToMMSS from '../../utils/secondsToMMSS';
import style from "./Track.module.scss";
import cn from 'classnames';

const Track = (track) => {
    const { id, src, preview, title, artists, duration } = track

    const { handleToggleAudio, currentTrack, isPlaying } = useContext(AudioContext)

    const isCurrentTract = currentTrack.id === track.id

    const formattedDuration = secondsToMMSS(duration)
    return (
        <div className={cn(style.track, isCurrentTract && style.playing)}>
            <IconButton onClick={() => handleToggleAudio(track)}>
                {isCurrentTract && isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
            <img className={style.preview} src={preview} alt="track image" />
            <div className={style.credits}>
                <b>{title}</b>
                <p>{artists}</p>
            </div>
            <p>{formattedDuration}</p>
        </div>
    );
}

export default Track