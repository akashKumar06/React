import { useContext, useState, memo } from 'react';
import './PlayButton.css'
import ThemeContext from '../context/ThemeContext';
const PlayButton = memo(function PlayButton({children,onPlay,onPause}){
    const [playing, setPlaying] = useState(false);
    const theme = useContext(ThemeContext);

    function handleClick(event){
        event.stopPropagation();

        if(playing) onPause()
        else onPlay()

        setPlaying(!playing);
    }
    return(
        <button className={theme} onClick={handleClick}>{children} : {playing ? '⏯️': '⏸️'}</button>
    )
})

export default PlayButton;