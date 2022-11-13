function ContactInfo({name, email}) {
    const mailVar = 'mailto:' + email
    return(
        <div>
            <div className="name-container">
                {name}
            </div>
            <div className="email-container">
                <a href={mailVar}>{email}</a>
            </div>
        </div>
    )
}

export default ContactInfo