export function Article(props) {
    return (
        <article className="contact-card">
            <img
                src={props.img.src}
                alt={props.img.alt}
            />
            <h3>{props.title}</h3>
            <p>{props.title}</p>
            <p>{props.content}</p>
        </article>
    )
}