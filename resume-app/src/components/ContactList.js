
function ContactList(props){
    return(
        <div>
            {props.contacts.map((contact) => (
                <div key={contact.id}>
                    <div>Name:{contact.name}</div>
                    <div>Id:{contact.id}</div>
                </div>
            ))}
        </div> 
    )

}

export default ContactList;