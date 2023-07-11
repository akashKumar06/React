import './PlayButton.css'
function PlayButton({children,onPlay,onPause}){
    let playing = false; 
    function handleClick(event){
        event.stopPropagation();

        if(playing) onPause()
        else onPlay()

        playing = !playing;
    }
    return(
        <button onClick={handleClick}>{children}</button>
    )
}

export default PlayButton;