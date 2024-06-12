

export default function Card({icon, title, description}){
    return(
        <article className="card">
            <div>
                {icon}
            </div>
            <h2>{title}</h2>
            <h3>{description}</h3>
        </article>
        
    )
}