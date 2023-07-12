function Form(){
    function handleSubmit(event){
        event.preventDefault();
        console.log('Someone is trying to submit me');
    }

    function handleKeyDown(event){
        if(event.key === 'Enter'){
            console.log('Enter button is pressed');
        }
    }
    return (
        <form onSubmit={handleSubmit} >
            <label>Enter a Text: </label>
            <input type="text" onKeyDown={handleKeyDown}/>
            <button>Submit</button>
        </form>
    )
}

export default Form;