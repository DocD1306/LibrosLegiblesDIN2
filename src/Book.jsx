function Book(props) {

    const {title, image} = props;


    /*
    tabIndex sirve para la navegación con tabulador
    aria-label es sirve para la accesibilidad por audio

    figure sirve para agrupar contenido multimedia junto con su descripción
    sr-only le dice a Tailwind que oculte el texto visualmente pero que siga siendo accesible para lectores de pantalla    
    */
    return(
        <article tabIndex={0} aria-label={title} className="background_color_white book_card">

            <figure className="book_card_image_containter">
                <img src={image} alt={title} className="book_image"/>
                <figcaption className="sr-only">{title}</figcaption>
            </figure>

            <p className="text_normal">{title}</p>
        
        </article>
    )


}

export default Book