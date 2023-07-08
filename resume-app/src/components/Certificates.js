function Certificates({certificate}){
    return(
        <div>
            <h2>Certificates</h2>
            <hr/>
            <div>
                <h2>{certificate.cert}</h2>
                <a href={certificate.link}>{certificate.title}</a>
                <span>{certificate.org}</span>
            </div>
        </div>
    )
}

export default Certificates;