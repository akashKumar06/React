import '../styles/CloseButton.css'

function CloseButton({onClose}){
    function handleClick(event){
        onClose(event);
    }
    return(
        <button onClick={handleClick}>Close Window</button>
    )
}

export default CloseButton;