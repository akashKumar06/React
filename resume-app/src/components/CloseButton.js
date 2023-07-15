import '../styles/CloseButton.css'

function CloseButton({onClose}){
    function handleClick(event){
        onClose(event);
    }
    return(
        <button onClick={handleClick} className='close-button'>Close Window</button>
    )
}

export default CloseButton;