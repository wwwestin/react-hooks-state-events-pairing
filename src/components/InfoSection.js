function InfoSection({header, number, date}) {
    return (
        <div>
            <h1>{header}</h1>

            <p>{number} | Uploaded {date}</p>
        </div> 
        
    )
}

export default InfoSection;